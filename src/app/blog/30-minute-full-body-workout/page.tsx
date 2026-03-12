import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: '30-Minute Full Body Workout: Complete Training in Half an Hour | FoundationalRehab',
  description: 'Effective 30-minute full body workouts for strength, conditioning, and muscle building. Multiple routines for home or gym.',
  keywords: ['30 minute workout', 'full body workout', 'quick workout', 'home workout', 'gym workout'],
}

export default function ThirtyMinuteWorkout() {
  return (
    <BlogPost
      title="30-Minute Full Body Workout: Complete Training in Half an Hour"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Quick Workouts"
      tags={['quick workout', 'full body', 'strength', 'home workout', 'gym workout']}
    >
      <p className="lead">
        Thirty minutes is the sweet spot for efficient training. Long enough for a complete
        workout, short enough to fit any schedule. Here are proven routines that deliver
        real results in half an hour.
      </p>

      <h2>Why 30 Minutes Works</h2>
      <ul>
        <li><strong>Complete training:</strong> Enough time for warm-up, workout, and cool-down</li>
        <li><strong>High focus:</strong> Short enough to maintain intensity throughout</li>
        <li><strong>Sustainable:</strong> Easy to fit into daily routine</li>
        <li><strong>Science-backed:</strong> Research shows 30 minutes is effective for fitness</li>
        <li><strong>Compound movements:</strong> Hit all major muscle groups efficiently</li>
      </ul>

      <h2>The Classic 30-Minute Strength Workout</h2>
      <p>Full body, 3 times per week. Dumbbells or bodyweight.</p>

      <h3>Warm-Up (4 minutes)</h3>
      <ol>
        <li>March in place: 1 minute</li>
        <li>Arm circles: 30 seconds</li>
        <li>Leg swings: 30 seconds each leg</li>
        <li>Bodyweight squats: 10 reps</li>
        <li>Push-up to downward dog: 5 reps</li>
      </ol>

      <h3>Workout (22 minutes)</h3>
      <p>3 rounds, 45 seconds work, 15 seconds rest:</p>
      <ol>
        <li><strong>Goblet Squat:</strong> Quads, glutes</li>
        <li><strong>Push-Ups:</strong> Chest, shoulders, triceps</li>
        <li><strong>Romanian Deadlift:</strong> Hamstrings, glutes, back</li>
        <li><strong>Rows:</strong> Back, biceps</li>
        <li><strong>Reverse Lunges:</strong> Legs, balance</li>
        <li><strong>Overhead Press:</strong> Shoulders, triceps</li>
        <li><strong>Plank:</strong> Core</li>
        <li><strong>Glute Bridge:</strong> Glutes, hamstrings</li>
      </ol>
      <p>Rest 60 seconds between rounds.</p>

      <h3>Cool-Down (4 minutes)</h3>
      <ol>
        <li>Standing quad stretch: 30 sec each</li>
        <li>Standing hamstring stretch: 30 sec each</li>
        <li>Chest doorway stretch: 30 sec</li>
        <li>Cat-cow: 30 seconds</li>
        <li>Child's pose: 30 seconds</li>
      </ol>

      <h2>30-Minute HIIT Strength</h2>
      <p>Combines strength and cardio. Higher intensity.</p>

      <h3>Warm-Up (3 minutes)</h3>
      <ol>
        <li>Jumping jacks: 1 minute</li>
        <li>High knees: 1 minute</li>
        <li>Dynamic stretches: 1 minute</li>
      </ol>

      <h3>Workout (24 minutes)</h3>
      <p>4 rounds of each superset, 40 sec work, 20 sec rest:</p>

      <h4>Superset 1 (8 minutes)</h4>
      <ol>
        <li>Squat Jumps</li>
        <li>Push-Ups</li>
        <li>Mountain Climbers</li>
        <li>Plank</li>
      </ol>

      <h4>Superset 2 (8 minutes)</h4>
      <ol>
        <li>Reverse Lunge (alternating)</li>
        <li>Burpees</li>
        <li>Dumbbell Rows</li>
        <li>Dead Bug</li>
      </ol>

      <h4>Superset 3 (8 minutes)</h4>
      <ol>
        <li>Sumo Squats</li>
        <li>Tricep Dips</li>
        <li>High Knees</li>
        <li>Glute Bridges</li>
      </ol>

      <h3>Cool-Down (3 minutes)</h3>
      <p>Light stretching, focusing on worked muscles.</p>

      <h2>30-Minute Gym Workout</h2>
      <p>Using gym equipment for maximum efficiency.</p>

      <h3>Warm-Up (3 minutes)</h3>
      <ol>
        <li>Treadmill or bike: 2 minutes easy</li>
        <li>Dynamic stretches: 1 minute</li>
      </ol>

      <h3>Workout (24 minutes)</h3>
      <p>4 exercises, 4 sets each, 45 seconds rest:</p>
      <ol>
        <li><strong>Barbell Squat or Leg Press:</strong> 4 × 10</li>
        <li><strong>Lat Pulldown:</strong> 4 × 10</li>
        <li><strong>Dumbbell Bench Press:</strong> 4 × 10</li>
        <li><strong>Cable Face Pulls:</strong> 4 × 15</li>
      </ol>

      <h3>Finisher (3 minutes)</h3>
      <p>Plank: 3 × 30 seconds with 20 seconds rest</p>

      <h2>30-Minute Bodyweight Only</h2>
      <p>No equipment needed. Great for home or travel.</p>

      <h3>Warm-Up (3 minutes)</h3>
      <ol>
        <li>Jumping jacks: 1 minute</li>
        <li>Arm circles and leg swings: 1 minute</li>
        <li>Inchworms: 5 reps</li>
      </ol>

      <h3>Workout (24 minutes)</h3>
      <p>6 rounds of the following circuit. 40 seconds each exercise, no rest between exercises, 60 seconds rest between rounds:</p>
      <ol>
        <li><strong>Squats</strong></li>
        <li><strong>Push-Ups</strong></li>
        <li><strong>Reverse Lunges (alternating)</strong></li>
        <li><strong>Plank</strong></li>
      </ol>

      <h3>Cool-Down (3 minutes)</h3>
      <p>Full body stretching.</p>

      <h2>30-Minute Dumbbell Workout</h2>
      <p>Just a pair of dumbbells needed.</p>

      <h3>Warm-Up (4 minutes)</h3>
      <p>Dynamic movement, light cardio.</p>

      <h3>Workout (22 minutes)</h3>
      <p>Perform as a circuit, 3 rounds:</p>
      <ol>
        <li><strong>Goblet Squat:</strong> 12 reps</li>
        <li><strong>Dumbbell Row (each arm):</strong> 10 reps</li>
        <li><strong>Dumbbell RDL:</strong> 10 reps</li>
        <li><strong>Dumbbell Floor Press:</strong> 12 reps</li>
        <li><strong>Dumbbell Reverse Lunge:</strong> 10 each leg</li>
        <li><strong>Dumbbell Curl to Press:</strong> 10 reps</li>
        <li><strong>Dumbbell Plank Row:</strong> 8 each side</li>
      </ol>
      <p>Rest 90 seconds between rounds.</p>

      <h3>Cool-Down (4 minutes)</h3>
      <p>Stretching major muscle groups.</p>

      <h2>30-Minute Lower Body Focus</h2>
      <p>When legs are the priority.</p>

      <h3>Warm-Up (4 minutes)</h3>
      <ol>
        <li>Walking: 1 minute</li>
        <li>Leg swings: 1 minute</li>
        <li>Bodyweight squats: 10 reps</li>
        <li>Glute bridges: 10 reps</li>
      </ol>

      <h3>Workout (22 minutes)</h3>
      <p>3 sets each exercise, 45 seconds rest:</p>
      <ol>
        <li><strong>Goblet Squat:</strong> 3 × 12</li>
        <li><strong>Romanian Deadlift:</strong> 3 × 10</li>
        <li><strong>Walking Lunges:</strong> 3 × 10 each leg</li>
        <li><strong>Hip Thrust:</strong> 3 × 15</li>
        <li><strong>Calf Raises:</strong> 3 × 20</li>
        <li><strong>Wall Sit:</strong> 3 × 30 seconds</li>
      </ol>

      <h3>Cool-Down (4 minutes)</h3>
      <ol>
        <li>Quad stretch: 30 sec each</li>
        <li>Hamstring stretch: 30 sec each</li>
        <li>Hip flexor stretch: 30 sec each</li>
        <li>Pigeon pose: 30 sec each</li>
      </ol>

      <h2>30-Minute Upper Body Focus</h2>
      <p>When upper body is the priority.</p>

      <h3>Warm-Up (4 minutes)</h3>
      <ol>
        <li>Arm circles: 1 minute</li>
        <li>Band pull-aparts: 15 reps</li>
        <li>Push-ups: 10 reps (warm-up pace)</li>
        <li>Shoulder taps: 10 each</li>
      </ol>

      <h3>Workout (22 minutes)</h3>
      <p>3 sets each exercise, 45 seconds rest:</p>
      <ol>
        <li><strong>Push-Ups:</strong> 3 × 12-15</li>
        <li><strong>Dumbbell Rows:</strong> 3 × 10 each</li>
        <li><strong>Dumbbell Shoulder Press:</strong> 3 × 10</li>
        <li><strong>Dumbbell Bicep Curls:</strong> 3 × 12</li>
        <li><strong>Tricep Dips:</strong> 3 × 12</li>
        <li><strong>Face Pulls:</strong> 3 × 15</li>
      </ol>

      <h3>Cool-Down (4 minutes)</h3>
      <ol>
        <li>Chest stretch: 30 sec each side</li>
        <li>Lat stretch: 30 sec each side</li>
        <li>Tricep stretch: 30 sec each</li>
        <li>Shoulder stretch: 30 sec each</li>
      </ol>

      <h2>Tips for Effective 30-Minute Workouts</h2>
      <ul>
        <li><strong>Prepare equipment:</strong> Have everything ready before starting</li>
        <li><strong>Use a timer:</strong> Don't guess—time your intervals</li>
        <li><strong>Minimize rest:</strong> Keep rest periods strict</li>
        <li><strong>Choose compound movements:</strong> Work multiple muscles per exercise</li>
        <li><strong>Superset when possible:</strong> Pair non-competing exercises</li>
        <li><strong>Stay focused:</strong> No phone, no distractions</li>
      </ul>

      <h2>Weekly Schedule Options</h2>

      <h3>3 Days Per Week</h3>
      <ul>
        <li>Monday: Full Body Strength</li>
        <li>Wednesday: Full Body HIIT</li>
        <li>Friday: Full Body Strength</li>
      </ul>

      <h3>4 Days Per Week</h3>
      <ul>
        <li>Monday: Lower Body</li>
        <li>Tuesday: Upper Body</li>
        <li>Thursday: Full Body HIIT</li>
        <li>Saturday: Full Body Strength</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Thirty minutes is plenty of time for an effective workout when you train smart.
        Focus on compound movements, minimize rest, and stay consistent. Three 30-minute
        sessions per week beats one 90-minute session you keep skipping. Choose a routine
        that fits your equipment and goals, then show up and do the work.
      </p>
    </BlogPost>
  )
}
