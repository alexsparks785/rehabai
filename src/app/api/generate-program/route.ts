import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { UserProfile, WorkoutProgram, ProgramExercise } from '@/types';
import { allExercises } from '@/data/exercises';
import { generateId } from '@/lib/uuid';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const profile: UserProfile = await request.json();

    // Build exercise library context
    const exerciseLibrary = allExercises.map(e => ({
      id: e.id,
      name: e.name,
      category: e.category,
      targetArea: e.targetArea,
      difficulty: e.difficulty,
      duration: e.duration,
      reps: e.reps,
      sets: e.sets,
    }));

    const prompt = `You are an expert physical therapist and rehabilitation specialist. Generate a personalized daily workout program for a user with the following profile:

**User Profile:**
- Condition: ${profile.condition}
- Pain Level: ${profile.painLevel}/10
- Goals: ${profile.goals.join(', ')}
- Name: ${profile.name || 'User'}

**Available Exercises:**
${JSON.stringify(exerciseLibrary, null, 2)}

**Guidelines:**
1. For pain levels 7-10: Focus on gentle mobility and stretches only, 4-5 exercises max
2. For pain levels 4-6: Mix of mobility, gentle strengthening, 5-7 exercises
3. For pain levels 1-3: Full program with strengthening focus, 7-10 exercises
4. Always start with warmup/mobility exercises
5. End with stretches/cooldown
6. Select exercises that target the user's specific condition
7. Order exercises from gentle to more demanding, then back to gentle

**Response Format:**
Return ONLY a valid JSON object (no markdown, no explanation) with this structure:
{
  "name": "Program name",
  "description": "Brief description tailored to user",
  "exercises": [
    {
      "exerciseId": "exercise-id-from-library",
      "sets": number,
      "reps": number or null,
      "duration": seconds or null,
      "restBetweenSets": seconds,
      "notes": "Optional personalized tip"
    }
  ]
}`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: prompt }
      ],
    });

    // Extract text content
    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';

    // Parse the JSON response
    const programData = JSON.parse(responseText);

    // Build the full program with exercise details
    const programExercises: ProgramExercise[] = programData.exercises
      .map((item: { exerciseId: string; sets: number; reps?: number; duration?: number; restBetweenSets: number }, index: number) => {
        const exercise = allExercises.find(e => e.id === item.exerciseId);
        if (!exercise) return null;

        return {
          exercise,
          order: index + 1,
          sets: item.sets || exercise.sets || 1,
          reps: item.reps || exercise.reps,
          duration: item.duration || exercise.duration,
          restBetweenSets: item.restBetweenSets || 30,
        };
      })
      .filter(Boolean);

    // Calculate total duration
    const totalDuration = programExercises.reduce((acc, item) => {
      const exerciseTime = (item.duration || 30) * item.sets;
      const restTime = item.restBetweenSets * (item.sets - 1);
      return acc + exerciseTime + restTime;
    }, 0);

    const program: WorkoutProgram = {
      id: generateId(),
      name: programData.name,
      description: programData.description,
      condition: profile.condition,
      exercises: programExercises,
      estimatedDuration: Math.ceil(totalDuration / 60),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(program);

  } catch (error) {
    console.error('Program generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate program' },
      { status: 500 }
    );
  }
}
