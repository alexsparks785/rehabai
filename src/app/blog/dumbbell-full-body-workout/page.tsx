import Link from 'next/link';

export const metadata = {
  title: 'Dumbbell Full Body Workout: Complete Training with Just Dumbbells | Foundational Rehab',
  description: 'Build muscle and strength with only dumbbells. Complete full body workout routines for home or gym, beginner to advanced.',
};

export default function DumbbellFullBodyWorkoutPage() {
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
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Strength</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumbbell Full Body Workout: Complete Training with Just Dumbbells
          </h1>
          <p className="text-xl text-gray-600">
            Dumbbells are all you need for a complete workout. Here&apos;s how to build muscle and strength with minimal equipment.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Don&apos;t have access to a full gym? Dumbbells are incredibly versatile—you can train every muscle group effectively with just a pair (or a few pairs) of dumbbells.
          </p>
          <p>
            This guide gives you everything you need for complete dumbbell training.
          </p>

          <h2>Why Dumbbell Training Works</h2>
          <ul>
            <li><strong>Unilateral training:</strong> Each arm works independently, fixing imbalances</li>
            <li><strong>Greater range of motion:</strong> Often more than barbells allow</li>
            <li><strong>Stabilizer activation:</strong> More muscles work to control the weight</li>
            <li><strong>Versatile:</strong> One pair can train everything</li>
            <li><strong>Space efficient:</strong> Perfect for home gyms</li>
          </ul>

          <h2>Best Dumbbell Exercises by Muscle Group</h2>

          <h3>Legs</h3>
          <p><strong>Goblet Squat</strong></p>
          <ol>
            <li>Hold dumbbell at chest, elbows pointing down</li>
            <li>Squat deep, keeping chest up</li>
            <li>Use elbows to push knees out at bottom</li>
            <li>Drive through whole foot to stand</li>
          </ol>
          <p><em>Reps: 10-15</em></p>

          <p><strong>Romanian Deadlift</strong></p>
          <ol>
            <li>Hold dumbbells in front of thighs</li>
            <li>Push hips back, slight knee bend</li>
            <li>Lower weights along legs until stretch in hamstrings</li>
            <li>Drive hips forward to return</li>
          </ol>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Dumbbell Lunges</strong></p>
          <ol>
            <li>Hold dumbbells at sides</li>
            <li>Step forward into lunge</li>
            <li>Lower back knee toward ground</li>
            <li>Push through front foot to return</li>
          </ol>
          <p><em>Reps: 10 each leg</em></p>

          <p><strong>Dumbbell Step-Ups</strong></p>
          <ol>
            <li>Hold dumbbells, stand facing bench or step</li>
            <li>Step up with one foot, drive through that leg</li>
            <li>Step down with control</li>
          </ol>
          <p><em>Reps: 10-12 each leg</em></p>

          <h3>Chest</h3>
          <p><strong>Dumbbell Bench Press</strong></p>
          <ol>
            <li>Lie on bench, dumbbells above chest</li>
            <li>Lower weights to sides of chest</li>
            <li>Press back up to start</li>
          </ol>
          <p><em>Reps: 8-12</em></p>

          <p><strong>Dumbbell Floor Press</strong></p>
          <p>Same as bench press, but lying on floor. Great if no bench.</p>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Incline Dumbbell Press</strong></p>
          <p>On incline bench (30-45 degrees). Emphasizes upper chest.</p>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Dumbbell Flyes</strong></p>
          <ol>
            <li>Lie on bench, arms extended above chest</li>
            <li>Slight bend in elbows</li>
            <li>Lower arms out to sides in an arc</li>
            <li>Squeeze chest to return</li>
          </ol>
          <p><em>Reps: 12-15</em></p>

          <h3>Back</h3>
          <p><strong>Dumbbell Row</strong></p>
          <ol>
            <li>One hand and knee on bench</li>
            <li>Row dumbbell to hip</li>
            <li>Squeeze shoulder blade at top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 10-12 each arm</em></p>

          <p><strong>Bent-Over Row (Both Arms)</strong></p>
          <ol>
            <li>Hinge forward, dumbbells hanging</li>
            <li>Row both dumbbells to hips</li>
            <li>Squeeze back at top</li>
          </ol>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Dumbbell Pullover</strong></p>
          <ol>
            <li>Lie across bench, one dumbbell held above chest</li>
            <li>Lower weight behind head in an arc</li>
            <li>Feel stretch in lats</li>
            <li>Pull back to start</li>
          </ol>
          <p><em>Reps: 10-12</em></p>

          <h3>Shoulders</h3>
          <p><strong>Dumbbell Shoulder Press</strong></p>
          <ol>
            <li>Seated or standing, dumbbells at shoulder level</li>
            <li>Press straight overhead</li>
            <li>Lower to shoulders</li>
          </ol>
          <p><em>Reps: 8-12</em></p>

          <p><strong>Lateral Raises</strong></p>
          <ol>
            <li>Dumbbells at sides</li>
            <li>Raise arms out to sides until shoulder height</li>
            <li>Control the lowering</li>
          </ol>
          <p><em>Reps: 12-15</em></p>

          <p><strong>Front Raises</strong></p>
          <ol>
            <li>Dumbbells in front of thighs</li>
            <li>Raise one arm to shoulder height</li>
            <li>Lower and alternate</li>
          </ol>
          <p><em>Reps: 10-12 each</em></p>

          <p><strong>Rear Delt Flyes</strong></p>
          <ol>
            <li>Hinge forward, dumbbells hanging</li>
            <li>Raise arms out to sides</li>
            <li>Squeeze shoulder blades</li>
          </ol>
          <p><em>Reps: 12-15</em></p>

          <h3>Arms</h3>
          <p><strong>Bicep Curls</strong></p>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Hammer Curls</strong></p>
          <p>Neutral grip (palms facing each other).</p>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Overhead Tricep Extension</strong></p>
          <ol>
            <li>Hold one dumbbell overhead with both hands</li>
            <li>Lower behind head by bending elbows</li>
            <li>Extend back up</li>
          </ol>
          <p><em>Reps: 10-12</em></p>

          <p><strong>Tricep Kickbacks</strong></p>
          <p><em>Reps: 12-15 each arm</em></p>

          <h3>Core</h3>
          <p><strong>Dumbbell Russian Twists</strong></p>
          <p><em>Reps: 15 each side</em></p>

          <p><strong>Weighted Plank</strong></p>
          <p>Place dumbbell on back during plank.</p>
          <p><em>Hold: 30-45 seconds</em></p>

          <p><strong>Dumbbell Side Bends</strong></p>
          <p><em>Reps: 12-15 each side</em></p>

          <h2>Sample Dumbbell Full Body Workouts</h2>

          <h3>Beginner (30 min)</h3>
          <ul>
            <li>Goblet squats: 12 × 3</li>
            <li>Dumbbell bench press: 10 × 3</li>
            <li>Dumbbell rows: 10 each × 3</li>
            <li>Dumbbell shoulder press: 10 × 3</li>
            <li>Dumbbell RDL: 10 × 3</li>
          </ul>

          <h3>Intermediate Full Body A</h3>
          <ul>
            <li>Goblet squats: 12 × 3</li>
            <li>Dumbbell bench press: 10 × 4</li>
            <li>Dumbbell rows: 10 each × 4</li>
            <li>Dumbbell lunges: 10 each × 3</li>
            <li>Lateral raises: 12 × 3</li>
            <li>Bicep curls: 12 × 2</li>
          </ul>

          <h3>Intermediate Full Body B</h3>
          <ul>
            <li>Dumbbell RDL: 10 × 4</li>
            <li>Dumbbell shoulder press: 10 × 4</li>
            <li>Incline dumbbell press: 10 × 3</li>
            <li>Bent-over rows: 10 × 4</li>
            <li>Dumbbell step-ups: 10 each × 3</li>
            <li>Overhead tricep extension: 12 × 2</li>
          </ul>

          <h3>Advanced (45 min)</h3>
          <ul>
            <li>Goblet squats: 15 × 4</li>
            <li>Dumbbell RDL: 12 × 4</li>
            <li>Dumbbell bench press: 10 × 4</li>
            <li>Dumbbell rows: 12 each × 4</li>
            <li>Dumbbell shoulder press: 10 × 3</li>
            <li>Dumbbell lunges: 12 each × 3</li>
            <li>Lateral raises: 15 × 3</li>
            <li>Rear delt flyes: 15 × 3</li>
            <li>Superset: Curls + Tricep extensions: 12 × 2</li>
          </ul>

          <h3>Quick 20-Minute Dumbbell Workout</h3>
          <ul>
            <li>Goblet squats: 12 × 3</li>
            <li>Dumbbell rows: 10 each × 3</li>
            <li>Dumbbell floor press: 12 × 3</li>
            <li>Dumbbell RDL: 10 × 2</li>
          </ul>

          <h2>Weekly Schedule</h2>
          <p>3 days per week:</p>
          <ul>
            <li><strong>Monday:</strong> Full Body A</li>
            <li><strong>Wednesday:</strong> Full Body B</li>
            <li><strong>Friday:</strong> Full Body A (alternate next week)</li>
          </ul>

          <h2>What Weight Should You Use?</h2>
          <ul>
            <li><strong>Too light:</strong> Last 2-3 reps feel easy</li>
            <li><strong>Just right:</strong> Last 2-3 reps are challenging but doable with good form</li>
            <li><strong>Too heavy:</strong> Form breaks down before target reps</li>
          </ul>
          <p>
            <strong>When to increase:</strong> When you complete all sets and reps with good form, increase weight by 5-10%.
          </p>

          <h2>Dumbbell Training Tips</h2>
          <ul>
            <li><strong>Control the weight:</strong> Don&apos;t swing—move with intention</li>
            <li><strong>Full range of motion:</strong> Don&apos;t cheat the movement</li>
            <li><strong>Equal work both sides:</strong> Start with weaker side</li>
            <li><strong>Mind-muscle connection:</strong> Focus on the working muscle</li>
            <li><strong>Progress gradually:</strong> Small jumps in weight</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Dumbbells are all you need for serious muscle and strength gains. They&apos;re versatile, fix imbalances, and work perfectly for home training.
          </p>
          <p>
            Train full body 3 times per week, use challenging weights, and progressively overload. Simple and effective.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized dumbbell program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom dumbbell-only workouts based on your equipment and goals.
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
