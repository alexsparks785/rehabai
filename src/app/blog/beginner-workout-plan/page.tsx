import Link from 'next/link';

export const metadata = {
  title: 'Beginner Workout Plan: Your First 4 Weeks of Exercise | Foundational Rehab',
  description: 'New to exercise? This beginner workout plan takes you from zero to confident in 4 weeks. Simple, effective, and designed not to overwhelm.',
};

export default function BeginnerWorkoutPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Getting Started</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Beginner Workout Plan: Your First 4 Weeks of Exercise
          </h1>
          <p className="text-xl text-gray-600">
            Starting from zero? This plan will build your fitness foundation without overwhelming you.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The hardest part of exercise is starting. There&apos;s so much information out there that it&apos;s paralyzing. What exercises? How many? How often? What if you do it wrong?
          </p>
          <p>
            This plan cuts through the noise. Four weeks, simple progressions, and everything you need to build the exercise habit.
          </p>

          <h2>Before You Start</h2>
          <ul>
            <li><strong>Check with your doctor</strong> if you have health concerns</li>
            <li><strong>Start slow</strong>—soreness is normal, pain is not</li>
            <li><strong>Consistency beats intensity</strong>—showing up matters more than going hard</li>
            <li><strong>Rest is productive</strong>—your body gets stronger during recovery</li>
          </ul>

          <h2>The Exercises You Need to Learn</h2>

          <h3>Squat</h3>
          <ol>
            <li>Stand with feet shoulder-width apart</li>
            <li>Push hips back like sitting in a chair</li>
            <li>Lower until thighs are parallel (or as low as comfortable)</li>
            <li>Keep chest up, knees tracking over toes</li>
            <li>Push through whole foot to stand</li>
          </ol>

          <h3>Push-Up (Modified if Needed)</h3>
          <ol>
            <li>Start on hands and knees (or full push-up position)</li>
            <li>Hands slightly wider than shoulders</li>
            <li>Lower chest toward ground</li>
            <li>Push back up</li>
          </ol>
          <p><em>Can&apos;t do push-ups? Start with wall push-ups or incline push-ups on a table.</em></p>

          <h3>Row (Doorway or Dumbbell)</h3>
          <ol>
            <li>If no dumbbells: stand in doorway, grab frame, lean back, pull yourself in</li>
            <li>With dumbbell: one hand on chair, row dumbbell to hip</li>
            <li>Squeeze shoulder blade at top</li>
          </ol>

          <h3>Glute Bridge</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Push through heels, lift hips</li>
            <li>Squeeze glutes at top</li>
            <li>Lower with control</li>
          </ol>

          <h3>Plank</h3>
          <ol>
            <li>Forearms on ground, body straight</li>
            <li>Don&apos;t let hips sag or pike up</li>
            <li>Breathe normally</li>
            <li>Hold as long as possible with good form</li>
          </ol>

          <h3>Reverse Lunge</h3>
          <ol>
            <li>Step one foot back</li>
            <li>Lower back knee toward ground</li>
            <li>Front knee stays over ankle</li>
            <li>Push through front foot to return</li>
          </ol>

          <h2>Week 1: Foundation</h2>
          <p><strong>Goal:</strong> Learn the movements, build the habit.</p>
          <p><strong>Schedule:</strong> 3 days (e.g., Mon/Wed/Fri), 20-25 minutes each.</p>

          <h3>Each Workout:</h3>
          <p><strong>Warm-up (3 min):</strong></p>
          <ul>
            <li>March in place: 1 minute</li>
            <li>Arm circles: 30 seconds</li>
            <li>Leg swings: 10 each leg</li>
          </ul>

          <p><strong>Workout (15 min):</strong></p>
          <ul>
            <li>Squats: 10 reps × 2 sets</li>
            <li>Push-ups (modified if needed): 8 reps × 2 sets</li>
            <li>Rows: 8 each side × 2 sets</li>
            <li>Glute bridges: 12 reps × 2 sets</li>
            <li>Plank: 20 seconds × 2 sets</li>
          </ul>
          <p><em>Rest 30-60 seconds between sets.</em></p>

          <p><strong>Cool-down (3 min):</strong></p>
          <ul>
            <li>Standing quad stretch: 20 sec each</li>
            <li>Forward fold: 30 seconds</li>
            <li>Deep breaths: 1 minute</li>
          </ul>

          <h2>Week 2: Building</h2>
          <p><strong>Goal:</strong> Increase reps and add one exercise.</p>
          <p><strong>Schedule:</strong> 3 days, 25-30 minutes each.</p>

          <h3>Each Workout:</h3>
          <p><strong>Warm-up (3 min):</strong> Same as Week 1</p>

          <p><strong>Workout (18 min):</strong></p>
          <ul>
            <li>Squats: 12 reps × 2 sets</li>
            <li>Push-ups: 10 reps × 2 sets</li>
            <li>Rows: 10 each side × 2 sets</li>
            <li>Reverse lunges: 8 each leg × 2 sets</li>
            <li>Glute bridges: 15 reps × 2 sets</li>
            <li>Plank: 30 seconds × 2 sets</li>
          </ul>

          <p><strong>Cool-down (4 min):</strong></p>
          <ul>
            <li>Quad stretch: 30 sec each</li>
            <li>Hip flexor stretch: 30 sec each</li>
            <li>Chest stretch: 30 seconds</li>
          </ul>

          <h2>Week 3: Progression</h2>
          <p><strong>Goal:</strong> Add a third set, increase challenge.</p>
          <p><strong>Schedule:</strong> 3 days, 30-35 minutes each.</p>

          <h3>Each Workout:</h3>
          <p><strong>Warm-up (4 min):</strong></p>
          <ul>
            <li>Jumping jacks: 30 seconds</li>
            <li>Arm circles: 30 seconds</li>
            <li>Leg swings: 10 each</li>
            <li>Bodyweight squats: 10 (as warm-up)</li>
          </ul>

          <p><strong>Workout (22 min):</strong></p>
          <ul>
            <li>Squats: 12 reps × 3 sets</li>
            <li>Push-ups: 10 reps × 3 sets</li>
            <li>Rows: 10 each side × 3 sets</li>
            <li>Reverse lunges: 10 each leg × 2 sets</li>
            <li>Glute bridges: 15 reps × 3 sets</li>
            <li>Plank: 30 seconds × 3 sets</li>
          </ul>

          <p><strong>Cool-down (5 min):</strong> Full stretch routine</p>

          <h2>Week 4: Challenge</h2>
          <p><strong>Goal:</strong> Push yourself, prepare for ongoing training.</p>
          <p><strong>Schedule:</strong> 3-4 days, 30-40 minutes each.</p>

          <h3>Workout A:</h3>
          <ul>
            <li>Squats: 15 × 3</li>
            <li>Push-ups: 12 × 3</li>
            <li>Rows: 12 each × 3</li>
            <li>Plank: 45 sec × 3</li>
          </ul>

          <h3>Workout B:</h3>
          <ul>
            <li>Reverse lunges: 12 each × 3</li>
            <li>Push-ups: 10 × 3</li>
            <li>Glute bridges: 20 × 3</li>
            <li>Rows: 10 each × 3</li>
            <li>Mountain climbers: 30 sec × 2</li>
          </ul>

          <p>Alternate between Workout A and B.</p>

          <h2>Adding Cardio</h2>
          <p>Start simple:</p>
          <ul>
            <li><strong>Week 1-2:</strong> 10-15 minute walks, 2-3 times per week</li>
            <li><strong>Week 3-4:</strong> 20-30 minute walks, 3-4 times per week</li>
            <li><strong>Or:</strong> 5-10 minutes of marching, jumping jacks, or step-ups at home</li>
          </ul>

          <h2>What to Expect</h2>
          <ul>
            <li><strong>Days 1-3:</strong> Soreness is normal (DOMS). Keep moving, stay hydrated.</li>
            <li><strong>Week 1:</strong> Movements feel awkward. That&apos;s fine—you&apos;re learning.</li>
            <li><strong>Week 2:</strong> Soreness decreases. Movements feel more natural.</li>
            <li><strong>Week 3:</strong> You&apos;ll feel stronger. Exercises that were hard become manageable.</li>
            <li><strong>Week 4:</strong> The habit is forming. Exercise feels less like a chore.</li>
          </ul>

          <h2>After Week 4: What&apos;s Next?</h2>
          <ul>
            <li><strong>Add weight:</strong> Dumbbells, resistance bands, or household items</li>
            <li><strong>Increase days:</strong> Move to 4 training days per week</li>
            <li><strong>Add exercises:</strong> Deadlifts, overhead press, more variations</li>
            <li><strong>Follow a program:</strong> Full body 3x/week or upper/lower split</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Schedule it:</strong> Put workouts in your calendar like appointments</li>
            <li><strong>Prepare:</strong> Lay out clothes the night before</li>
            <li><strong>Track progress:</strong> Note reps, how you felt, improvements</li>
            <li><strong>Don&apos;t skip:</strong> A short workout beats no workout</li>
            <li><strong>Rest when needed:</strong> Soreness is okay; pain means stop</li>
            <li><strong>Be patient:</strong> Results take weeks, not days</li>
          </ul>

          <h2>Common Beginner Mistakes</h2>
          <ul>
            <li><strong>Too much, too soon:</strong> Start easy and build up</li>
            <li><strong>Skipping rest days:</strong> Recovery is when you get stronger</li>
            <li><strong>Comparing to others:</strong> Focus on your own progress</li>
            <li><strong>Ignoring form:</strong> Quality reps beat quantity</li>
            <li><strong>Expecting instant results:</strong> Fitness is a long game</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Starting is the hardest part. This plan gives you everything you need for your first four weeks—simple exercises, clear progressions, and realistic expectations.
          </p>
          <p>
            Just show up. Three times per week, 20-30 minutes. That&apos;s all it takes to build a foundation that will serve you for life.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Ready to start your fitness journey?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized beginner programs with video guidance for every exercise.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </article>
    </div>
  );
}
