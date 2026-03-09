import Link from 'next/link';

export const metadata = {
  title: 'Resistance Band Arm Workout: Build Arms Anywhere | Foundational Rehab',
  description: 'Complete arm workout using just resistance bands. Biceps, triceps, and shoulders exercises with full workout programs.',
};

export default function ResistanceBandArmWorkoutPage() {
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
            Resistance Band Arm Workout: Build Arms Anywhere
          </h1>
          <p className="text-xl text-gray-600">
            Bands are portable, affordable, and surprisingly effective for building arm strength.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Think you need dumbbells to build strong arms? Resistance bands can be just as effective—and they fit in your bag, cost a fraction of weights, and never run out of resistance levels. Here&apos;s how to build biceps, triceps, and shoulders using bands alone.
          </p>

          <h2>Why Bands Work</h2>
          <ul>
            <li><strong>Variable resistance</strong> — Tension increases through the movement</li>
            <li><strong>Constant tension</strong> — No &quot;resting&quot; at top or bottom of movements</li>
            <li><strong>Joint-friendly</strong> — Smooth resistance is easier on joints</li>
            <li><strong>Portable</strong> — Train anywhere</li>
            <li><strong>Progressive</strong> — Multiple band tensions for progression</li>
          </ul>

          <h2>Band Types</h2>
          <ul>
            <li><strong>Loop bands (mini bands)</strong> — Small circles, good for lower body</li>
            <li><strong>Long loop bands</strong> — Large circles, versatile for all exercises</li>
            <li><strong>Tube bands with handles</strong> — Best for arm exercises—use these</li>
            <li><strong>Flat therapy bands</strong> — Good for rehab, can work for arms</li>
          </ul>
          <p>
            For arm workouts, tube bands with handles are ideal. Get a set with multiple resistance levels.
          </p>

          <h2>Biceps Exercises</h2>

          <h3>1. Band Bicep Curl</h3>
          <ul>
            <li>Stand on center of band</li>
            <li>Hold handles, palms facing up</li>
            <li>Curl handles toward shoulders</li>
            <li>Lower with control</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>2. Hammer Curl</h3>
          <ul>
            <li>Stand on band</li>
            <li>Hold handles, palms facing each other</li>
            <li>Curl up, keeping palms in neutral position</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>3. Concentration Curl</h3>
          <ul>
            <li>Step on band with one foot</li>
            <li>Lean forward, elbow braced against inner thigh</li>
            <li>Curl handle toward shoulder</li>
            <li>3 sets of 12 each arm</li>
          </ul>

          <h3>4. High Curl (Anchor Required)</h3>
          <ul>
            <li>Anchor band above head height</li>
            <li>Face anchor, arms extended at shoulder height</li>
            <li>Curl handles toward your ears</li>
            <li>Great for bicep peak</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h2>Triceps Exercises</h2>

          <h3>5. Overhead Tricep Extension</h3>
          <ul>
            <li>Stand on band, hold behind your back</li>
            <li>Or anchor band low behind you</li>
            <li>Start with hands behind head, elbows bent</li>
            <li>Extend arms overhead</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>6. Tricep Pushdown (Anchor Required)</h3>
          <ul>
            <li>Anchor band above head</li>
            <li>Face anchor, grab handles</li>
            <li>Elbows at sides, push handles down</li>
            <li>Squeeze triceps at bottom</li>
            <li>3 sets of 12-15</li>
          </ul>

          <h3>7. Tricep Kickback</h3>
          <ul>
            <li>Step on band, hinge forward</li>
            <li>Hold handles, elbows at 90°</li>
            <li>Extend arms straight back</li>
            <li>Squeeze triceps at full extension</li>
            <li>3 sets of 12 each arm</li>
          </ul>

          <h3>8. Close-Grip Band Push-Up</h3>
          <ul>
            <li>Band across upper back, handles in hands</li>
            <li>Hands close together on floor</li>
            <li>Do push-up with band adding resistance</li>
            <li>3 sets of 10-12</li>
          </ul>

          <h2>Shoulder Exercises</h2>

          <h3>9. Overhead Press</h3>
          <ul>
            <li>Stand on band</li>
            <li>Hold handles at shoulder height</li>
            <li>Press straight overhead</li>
            <li>Lower with control</li>
            <li>3 sets of 12</li>
          </ul>

          <h3>10. Lateral Raise</h3>
          <ul>
            <li>Stand on band</li>
            <li>Hold handles at sides</li>
            <li>Raise arms out to sides to shoulder height</li>
            <li>Lower with control</li>
            <li>3 sets of 15</li>
          </ul>

          <h3>11. Front Raise</h3>
          <ul>
            <li>Stand on band</li>
            <li>Hold handles in front of thighs</li>
            <li>Raise arms forward to shoulder height</li>
            <li>Alternate or both arms together</li>
            <li>3 sets of 12 each arm</li>
          </ul>

          <h3>12. Face Pull (Anchor Required)</h3>
          <ul>
            <li>Anchor band at face height</li>
            <li>Pull handles toward face, elbows high</li>
            <li>Squeeze shoulder blades at end</li>
            <li>Great for rear delts and posture</li>
            <li>3 sets of 15</li>
          </ul>

          <h2>Complete Arm Workouts</h2>

          <h3>Quick Workout (15 minutes)</h3>
          <ul>
            <li>Band Bicep Curl: 3 × 15</li>
            <li>Tricep Pushdown or Kickback: 3 × 15</li>
            <li>Lateral Raise: 3 × 15</li>
            <li>Hammer Curl: 2 × 12</li>
            <li>Overhead Tricep Extension: 2 × 12</li>
          </ul>

          <h3>Full Workout (25-30 minutes)</h3>
          <p><strong>Biceps:</strong></p>
          <ul>
            <li>Band Bicep Curl: 3 × 12</li>
            <li>Hammer Curl: 3 × 12</li>
            <li>Concentration Curl: 2 × 10 each</li>
          </ul>
          <p><strong>Triceps:</strong></p>
          <ul>
            <li>Tricep Pushdown: 3 × 15</li>
            <li>Overhead Extension: 3 × 12</li>
            <li>Kickback: 2 × 12 each</li>
          </ul>
          <p><strong>Shoulders:</strong></p>
          <ul>
            <li>Overhead Press: 3 × 12</li>
            <li>Lateral Raise: 3 × 15</li>
            <li>Face Pull: 3 × 15</li>
          </ul>

          <h2>Tips for Band Arm Training</h2>
          <ul>
            <li><strong>Control the negative</strong> — Don&apos;t let the band snap back</li>
            <li><strong>Full range of motion</strong> — Stretch and squeeze on every rep</li>
            <li><strong>Increase tension</strong> — Choke up on band or use heavier band to progress</li>
            <li><strong>Mind-muscle connection</strong> — Focus on the muscle working</li>
            <li><strong>Frequency</strong> — Train arms 2-3 times per week</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Resistance bands can build real arm strength and muscle—you just need to train with intention. Focus on controlling every rep, squeezing at the peak, and progressively increasing resistance. Your arms don&apos;t know the difference between bands and dumbbells—they just respond to tension.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want more resistance band workouts?
          </h3>
          <p className="text-gray-600 mb-4">
            Get full-body band training programs you can do anywhere.
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
