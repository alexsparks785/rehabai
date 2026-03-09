import Link from 'next/link';

export const metadata = {
  title: 'Dumbbell Bicep Workout: Build Bigger Arms | Foundational Rehab',
  description: 'Complete bicep workout using just dumbbells. Exercises for size and strength.',
};

export default function DumbbellBicepWorkoutPage() {
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
            Dumbbell Bicep Workout: Build Bigger Arms
          </h1>
          <p className="text-xl text-gray-600">
            Want bigger biceps? Dumbbells are all you need.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The bicep curl is one of the most iconic exercises in fitness—and for good reason. Dumbbells allow for a variety of curl variations that target different parts of the bicep for complete arm development.
          </p>

          <h2>Bicep Anatomy</h2>
          <p>
            Your bicep has two heads:
          </p>
          <ul>
            <li><strong>Long head</strong> — Outer portion, contributes to the "peak"</li>
            <li><strong>Short head</strong> — Inner portion, adds width</li>
          </ul>
          <p>
            The brachialis (underneath the bicep) also contributes to arm size. A complete bicep workout targets all of these.
          </p>

          <h2>Dumbbell Bicep Exercises</h2>

          <h3>Standard Curls</h3>

          <h4>1. Standing Dumbbell Curl</h4>
          <ul>
            <li>Stand with dumbbells at sides, palms forward</li>
            <li>Curl weights toward shoulders</li>
            <li>Lower with control</li>
            <li>Keep elbows at sides—don&apos;t swing</li>
            <li>3-4 sets of 10-12 reps</li>
          </ul>
          <p><em>The classic. Foundation of any bicep routine.</em></p>

          <h4>2. Alternating Dumbbell Curl</h4>
          <ul>
            <li>Same as above, but alternate arms</li>
            <li>Allows you to focus on each arm</li>
            <li>Can typically use slightly heavier weight</li>
            <li>3 sets of 10-12 each arm</li>
          </ul>

          <h4>3. Seated Dumbbell Curl</h4>
          <ul>
            <li>Sit on bench, arms at sides</li>
            <li>Curl with stricter form (no momentum)</li>
            <li>3 sets of 10-12 reps</li>
          </ul>

          <h3>Grip Variations</h3>

          <h4>4. Hammer Curl</h4>
          <ul>
            <li>Palms face each other (neutral grip)</li>
            <li>Curl without rotating wrists</li>
            <li>Targets brachialis and long head</li>
            <li>3-4 sets of 10-12 reps</li>
          </ul>
          <p><em>Essential for complete arm development.</em></p>

          <h4>5. Reverse Curl</h4>
          <ul>
            <li>Palms face down (overhand grip)</li>
            <li>Curl weights up</li>
            <li>Targets brachialis and forearms</li>
            <li>2-3 sets of 12-15 reps</li>
          </ul>

          <h4>6. Zottman Curl</h4>
          <ul>
            <li>Curl up with palms up (supinated)</li>
            <li>Rotate to palms down at top</li>
            <li>Lower with palms down</li>
            <li>Works both biceps and forearms</li>
            <li>3 sets of 10 reps</li>
          </ul>

          <h3>Angle Variations</h3>

          <h4>7. Incline Dumbbell Curl</h4>
          <ul>
            <li>Sit on incline bench (45-60°)</li>
            <li>Arms hang straight down</li>
            <li>Curl from stretched position</li>
            <li>Great for long head and stretch</li>
            <li>3 sets of 10-12 reps</li>
          </ul>

          <h4>8. Preacher Curl (On Incline Bench)</h4>
          <ul>
            <li>Kneel behind incline bench</li>
            <li>Arm over top of bench pad</li>
            <li>Curl with strict form</li>
            <li>Targets short head</li>
            <li>3 sets of 10-12 each arm</li>
          </ul>

          <h4>9. Concentration Curl</h4>
          <ul>
            <li>Sit, lean forward, elbow against inner thigh</li>
            <li>Curl weight up, squeeze at top</li>
            <li>Maximum isolation</li>
            <li>3 sets of 12 each arm</li>
          </ul>

          <h4>10. Spider Curl</h4>
          <ul>
            <li>Lie face down on incline bench</li>
            <li>Arms hang straight down</li>
            <li>Curl, keeping upper arms still</li>
            <li>No momentum possible—pure bicep</li>
            <li>3 sets of 12 reps</li>
          </ul>

          <h2>Complete Dumbbell Bicep Workouts</h2>

          <h3>Quick Workout (10-15 minutes)</h3>
          <ul>
            <li>Standing Dumbbell Curl: 3 × 12</li>
            <li>Hammer Curl: 3 × 12</li>
            <li>Concentration Curl: 2 × 12 each</li>
          </ul>

          <h3>Full Workout (20-25 minutes)</h3>
          <ul>
            <li>Incline Dumbbell Curl: 3 × 10</li>
            <li>Standing Dumbbell Curl: 3 × 10</li>
            <li>Hammer Curl: 3 × 12</li>
            <li>Concentration Curl: 3 × 12 each</li>
            <li>Reverse Curl: 2 × 15</li>
          </ul>

          <h3>High-Volume Workout (30 minutes)</h3>
          <ul>
            <li>Incline Curl: 4 × 10</li>
            <li>Standing Curl: 4 × 10</li>
            <li>Hammer Curl: 4 × 10</li>
            <li>Spider Curl: 3 × 12</li>
            <li>Concentration Curl: 3 × 10 each</li>
            <li>Zottman Curl: 2 × 10</li>
          </ul>

          <h2>Tips for Bigger Biceps</h2>
          <ul>
            <li><strong>Control the negative</strong> — Lower the weight slowly (3 seconds)</li>
            <li><strong>Full range of motion</strong> — Fully extend at bottom, full squeeze at top</li>
            <li><strong>Don&apos;t use momentum</strong> — If you&apos;re swinging, go lighter</li>
            <li><strong>Mind-muscle connection</strong> — Focus on feeling the bicep work</li>
            <li><strong>Vary your exercises</strong> — Different angles and grips for complete development</li>
            <li><strong>Train 2-3x per week</strong> — Biceps recover relatively fast</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Dumbbells are excellent for bicep development. Use a variety of curl angles and grips to hit both bicep heads plus the brachialis. Focus on strict form, control the weight, and progressively add load over time.
          </p>
          <p>
            Remember: biceps are a small muscle group. Quality reps matter more than heavy weights with bad form.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete arm program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get structured workouts for biceps and triceps.
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
