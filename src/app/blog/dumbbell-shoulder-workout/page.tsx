import Link from 'next/link';

export const metadata = {
  title: 'Dumbbell Shoulder Workout: Build Strong, Defined Shoulders | Foundational Rehab',
  description: 'Complete shoulder workout using just dumbbells. Exercises for all three deltoid heads plus rotator cuff.',
};

export default function DumbbellShoulderWorkoutPage() {
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
            Dumbbell Shoulder Workout: Build Strong, Defined Shoulders
          </h1>
          <p className="text-xl text-gray-600">
            All you need is a pair of dumbbells to build impressive shoulders.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Strong, well-developed shoulders improve your posture, make you look more athletic, and are essential for upper body function. With just dumbbells, you can hit all three heads of the deltoid and build the shoulders you want.
          </p>

          <h2>Shoulder Anatomy Basics</h2>
          <p>
            Your deltoid has three heads:
          </p>
          <ul>
            <li><strong>Anterior (front)</strong> — Raises arm forward; worked by pressing movements</li>
            <li><strong>Lateral (side)</strong> — Raises arm to side; creates shoulder width</li>
            <li><strong>Posterior (rear)</strong> — Pulls arm back; often underdeveloped</li>
          </ul>
          <p>
            A complete shoulder workout targets all three heads, plus the rotator cuff for stability.
          </p>

          <h2>Dumbbell Shoulder Exercises</h2>

          <h3>Pressing Movements (Anterior + Lateral)</h3>

          <h4>1. Seated Dumbbell Press</h4>
          <ul>
            <li>Sit on bench with back support</li>
            <li>Hold dumbbells at shoulder height, palms forward</li>
            <li>Press straight up until arms are extended</li>
            <li>Lower with control to shoulder level</li>
            <li>3-4 sets of 8-12 reps</li>
          </ul>
          <p><em>The foundation of shoulder training.</em></p>

          <h4>2. Arnold Press</h4>
          <ul>
            <li>Start with dumbbells at shoulders, palms facing you</li>
            <li>Press up while rotating palms to face forward</li>
            <li>Reverse the motion on the way down</li>
            <li>Hits all three heads through rotation</li>
            <li>3 sets of 10-12 reps</li>
          </ul>

          <h4>3. Standing Dumbbell Press</h4>
          <ul>
            <li>Stand with core braced</li>
            <li>Press dumbbells overhead</li>
            <li>More core engagement than seated</li>
            <li>3 sets of 8-10 reps</li>
          </ul>

          <h3>Lateral (Side) Delt</h3>

          <h4>4. Lateral Raise</h4>
          <ul>
            <li>Stand with dumbbells at sides</li>
            <li>Raise arms out to sides to shoulder height</li>
            <li>Lead with elbows, slight bend in arms</li>
            <li>Lower with control</li>
            <li>3-4 sets of 12-15 reps</li>
          </ul>
          <p><em>Key exercise for shoulder width. Use lighter weight, focus on form.</em></p>

          <h4>5. Leaning Lateral Raise</h4>
          <ul>
            <li>Hold a support with one hand, lean away</li>
            <li>Do lateral raise with free arm</li>
            <li>Greater range of motion</li>
            <li>3 sets of 12 each arm</li>
          </ul>

          <h3>Anterior (Front) Delt</h3>

          <h4>6. Front Raise</h4>
          <ul>
            <li>Stand with dumbbells in front of thighs</li>
            <li>Raise one or both arms forward to shoulder height</li>
            <li>Lower with control</li>
            <li>2-3 sets of 12 reps</li>
          </ul>
          <p><em>Front delts get worked by pressing, so less volume needed here.</em></p>

          <h3>Posterior (Rear) Delt</h3>

          <h4>7. Bent-Over Reverse Fly</h4>
          <ul>
            <li>Hinge forward at hips, back flat</li>
            <li>Let dumbbells hang below chest</li>
            <li>Raise arms out to sides, squeezing shoulder blades</li>
            <li>Lower with control</li>
            <li>3-4 sets of 12-15 reps</li>
          </ul>
          <p><em>Essential for balanced shoulders and posture.</em></p>

          <h4>8. Prone Y Raise</h4>
          <ul>
            <li>Lie face down on incline bench</li>
            <li>Raise arms in Y position, thumbs up</li>
            <li>Squeeze at top</li>
            <li>3 sets of 12-15 reps</li>
          </ul>

          <h3>Rotator Cuff (Stability)</h3>

          <h4>9. External Rotation</h4>
          <ul>
            <li>Elbow at side, bent 90°</li>
            <li>Hold light dumbbell</li>
            <li>Rotate forearm outward</li>
            <li>2-3 sets of 15 each arm</li>
          </ul>
          <p><em>Keeps shoulders healthy. Don&apos;t skip this.</em></p>

          <h2>Complete Dumbbell Shoulder Workouts</h2>

          <h3>Quick Workout (15 minutes)</h3>
          <ul>
            <li>Seated Dumbbell Press: 3 × 10</li>
            <li>Lateral Raise: 3 × 15</li>
            <li>Bent-Over Reverse Fly: 3 × 12</li>
          </ul>

          <h3>Full Workout (25-30 minutes)</h3>
          <ul>
            <li>Seated Dumbbell Press: 4 × 8-10</li>
            <li>Arnold Press: 3 × 10</li>
            <li>Lateral Raise: 4 × 12-15</li>
            <li>Front Raise: 2 × 12</li>
            <li>Bent-Over Reverse Fly: 4 × 12-15</li>
            <li>External Rotation: 2 × 15 each</li>
          </ul>

          <h3>High-Volume Workout (35 minutes)</h3>
          <ul>
            <li>Standing Press: 4 × 8</li>
            <li>Arnold Press: 3 × 10</li>
            <li>Lateral Raise: 4 × 15</li>
            <li>Leaning Lateral Raise: 3 × 12 each</li>
            <li>Bent-Over Reverse Fly: 4 × 15</li>
            <li>Prone Y Raise: 3 × 12</li>
            <li>External Rotation: 2 × 15</li>
          </ul>

          <h2>Tips for Better Shoulders</h2>
          <ul>
            <li><strong>Don&apos;t neglect rear delts</strong> — Most people are front-dominant</li>
            <li><strong>Use full range of motion</strong> — Control the weight through the entire movement</li>
            <li><strong>Lighter is often better</strong> — Especially for lateral raises; form trumps weight</li>
            <li><strong>Warm up properly</strong> — Shoulders are injury-prone; warm up the rotator cuff</li>
            <li><strong>Train 2x per week</strong> — Shoulders recover relatively fast</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Dumbbells are all you need for impressive shoulders. Focus on pressing for overall mass, lateral raises for width, and reverse flies for balance and posture. Keep the rotator cuff strong to stay injury-free.
          </p>
          <p>
            Consistency and progressive overload matter more than complicated programs. Pick a workout, stick with it, and add weight or reps over time.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete upper body program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get structured workouts for balanced strength development.
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
