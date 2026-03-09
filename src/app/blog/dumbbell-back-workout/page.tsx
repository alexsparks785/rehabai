import Link from 'next/link';

export const metadata = {
  title: 'Dumbbell Back Workout: Build a Strong, Defined Back | Foundational Rehab',
  description: 'Complete back workout using just dumbbells. Target your lats, rhomboids, traps, and lower back.',
};

export default function DumbbellBackWorkoutPage() {
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
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Strength</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumbbell Back Workout: Build a Strong, Defined Back
          </h1>
          <p className="text-xl text-gray-600">
            A strong back improves posture, prevents pain, and looks impressive. All you need is dumbbells.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Your back contains some of your body&apos;s largest and most important muscles. A strong back improves posture, protects your spine, and creates that powerful V-shape. With just a pair of dumbbells, you can build all of it.
          </p>

          <h2>Back Anatomy Basics</h2>
          <ul>
            <li><strong>Latissimus dorsi (lats)</strong> — Large muscles that create width; pull arms down and back</li>
            <li><strong>Rhomboids</strong> — Between shoulder blades; squeeze blades together</li>
            <li><strong>Trapezius (traps)</strong> — Upper back to neck; shrug and stabilize shoulders</li>
            <li><strong>Erector spinae</strong> — Along spine; extend and stabilize the back</li>
            <li><strong>Rear deltoids</strong> — Back of shoulders; often trained with back</li>
          </ul>

          <h2>Dumbbell Back Exercises</h2>

          <h3>Lat-Focused</h3>

          <h4>1. Single-Arm Dumbbell Row</h4>
          <ul>
            <li>One hand and knee on bench, other foot on floor</li>
            <li>Row dumbbell to hip, elbow close to body</li>
            <li>Squeeze lat at top, lower with control</li>
            <li>3-4 sets of 10-12 each arm</li>
          </ul>
          <p><em>The king of dumbbell back exercises.</em></p>

          <h4>2. Bent-Over Dumbbell Row (Two-Arm)</h4>
          <ul>
            <li>Hinge forward at hips, back flat</li>
            <li>Row both dumbbells to hips</li>
            <li>Squeeze shoulder blades at top</li>
            <li>3-4 sets of 10-12</li>
          </ul>

          <h4>3. Dumbbell Pullover</h4>
          <ul>
            <li>Lie on bench, hold one dumbbell with both hands overhead</li>
            <li>Lower dumbbell behind head in arc</li>
            <li>Pull back over chest using lats</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>Rhomboid/Mid-Back Focused</h3>

          <h4>4. Chest-Supported Row</h4>
          <ul>
            <li>Lie face down on incline bench</li>
            <li>Row dumbbells up, squeezing shoulder blades</li>
            <li>Takes lower back out of the equation</li>
            <li>3-4 sets of 10-12</li>
          </ul>

          <h4>5. Reverse Fly</h4>
          <ul>
            <li>Hinge forward, back flat</li>
            <li>Raise arms out to sides, squeezing shoulder blades</li>
            <li>Lower with control</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h4>6. Prone Y Raise</h4>
          <ul>
            <li>Lie face down on bench or floor</li>
            <li>Raise arms in Y position, thumbs up</li>
            <li>Squeeze upper back at top</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>Trap-Focused</h3>

          <h4>7. Dumbbell Shrug</h4>
          <ul>
            <li>Stand holding dumbbells at sides</li>
            <li>Shrug shoulders up toward ears</li>
            <li>Hold 1-2 seconds at top</li>
            <li>Lower with control</li>
            <li>3-4 sets of 12-15</li>
          </ul>

          <h4>8. Farmer&apos;s Carry</h4>
          <ul>
            <li>Hold heavy dumbbells at sides</li>
            <li>Walk with upright posture</li>
            <li>Great for traps, grip, and core</li>
            <li>3 sets of 40-60 steps</li>
          </ul>

          <h3>Lower Back/Erectors</h3>

          <h4>9. Dumbbell Romanian Deadlift</h4>
          <ul>
            <li>Hold dumbbells in front of thighs</li>
            <li>Hinge at hips, pushing them back</li>
            <li>Lower dumbbells along legs, slight knee bend</li>
            <li>Drive hips forward to stand</li>
            <li>3-4 sets of 10-12</li>
          </ul>

          <h4>10. Dumbbell Good Morning</h4>
          <ul>
            <li>Hold dumbbell at chest or behind head</li>
            <li>Hinge forward at hips, back flat</li>
            <li>Feel stretch in hamstrings</li>
            <li>Return to standing</li>
            <li>3 sets of 12</li>
          </ul>

          <h2>Complete Dumbbell Back Workouts</h2>

          <h3>Quick Workout (15-20 minutes)</h3>
          <ul>
            <li>Single-Arm Row: 3 × 12 each</li>
            <li>Reverse Fly: 3 × 15</li>
            <li>Romanian Deadlift: 3 × 10</li>
          </ul>

          <h3>Full Workout (30 minutes)</h3>
          <ul>
            <li>Single-Arm Row: 4 × 10 each</li>
            <li>Dumbbell Pullover: 3 × 12</li>
            <li>Chest-Supported Row: 3 × 12</li>
            <li>Reverse Fly: 3 × 15</li>
            <li>Shrugs: 3 × 15</li>
            <li>Romanian Deadlift: 3 × 10</li>
          </ul>

          <h3>High-Volume Workout (40 minutes)</h3>
          <ul>
            <li>Single-Arm Row: 4 × 10 each</li>
            <li>Bent-Over Row: 4 × 10</li>
            <li>Pullover: 3 × 12</li>
            <li>Chest-Supported Row: 3 × 12</li>
            <li>Reverse Fly: 4 × 15</li>
            <li>Y Raise: 3 × 12</li>
            <li>Shrugs: 4 × 12</li>
            <li>Romanian Deadlift: 3 × 10</li>
          </ul>

          <h2>Tips for Better Back Training</h2>
          <ul>
            <li><strong>Feel the muscle</strong> — Focus on squeezing the back, not just moving the weight</li>
            <li><strong>Control the negative</strong> — Lower the weight slowly</li>
            <li><strong>Pull to hips, not chest</strong> — For row exercises, this better targets lats</li>
            <li><strong>Keep your ego in check</strong> — Use weight you can control with good form</li>
            <li><strong>Train back 2x per week</strong> — It&apos;s a large muscle group that can handle volume</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            A strong back is the foundation of an impressive physique and a healthy body. With just dumbbells and these exercises, you can build width, thickness, and strength throughout your entire back.
          </p>
          <p>
            Focus on the mind-muscle connection—feel your back working on every rep. Progress gradually, and your back will grow.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete strength program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get structured workouts for balanced muscle development.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Foundational Rehab Free
          </Link>
        </div>
      </article>
    </div>
  );
}
