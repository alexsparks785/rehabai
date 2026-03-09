import Link from 'next/link';

export const metadata = {
  title: 'Dumbbell Chest Workout: Build a Bigger, Stronger Chest | Foundational Rehab',
  description: 'Complete chest workout using just dumbbells. Exercises for upper, middle, and lower chest.',
};

export default function DumbbellChestWorkoutPage() {
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
            Dumbbell Chest Workout: Build a Bigger, Stronger Chest
          </h1>
          <p className="text-xl text-gray-600">
            Dumbbells can build serious chest muscle. Here&apos;s how to do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Think you need a barbell for chest development? Dumbbells are actually superior in many ways—they allow greater range of motion, work each side independently, and are easier on the shoulders. Here&apos;s how to build a complete chest with just dumbbells.
          </p>

          <h2>Chest Anatomy</h2>
          <p>
            Your chest (pectoralis major) has different regions:
          </p>
          <ul>
            <li><strong>Upper chest (clavicular head)</strong> — Targeted by incline movements</li>
            <li><strong>Middle chest (sternal head)</strong> — Targeted by flat movements</li>
            <li><strong>Lower chest</strong> — Targeted by decline movements</li>
          </ul>
          <p>
            A complete chest workout hits all three areas.
          </p>

          <h2>Dumbbell Chest Exercises</h2>

          <h3>Pressing Movements</h3>

          <h4>1. Flat Dumbbell Press</h4>
          <ul>
            <li>Lie on flat bench, dumbbells at chest level</li>
            <li>Press up until arms are extended</li>
            <li>Lower with control, slight stretch at bottom</li>
            <li>3-4 sets of 8-12 reps</li>
          </ul>
          <p><em>Foundation of any chest program.</em></p>

          <h4>2. Incline Dumbbell Press</h4>
          <ul>
            <li>Bench at 30-45° incline</li>
            <li>Press up and slightly back</li>
            <li>Targets upper chest</li>
            <li>3-4 sets of 8-12 reps</li>
          </ul>

          <h4>3. Decline Dumbbell Press</h4>
          <ul>
            <li>Bench at slight decline (or feet elevated on flat bench)</li>
            <li>Press up, focusing on lower chest</li>
            <li>3 sets of 10-12 reps</li>
          </ul>

          <h4>4. Floor Press</h4>
          <ul>
            <li>Lie on floor, press dumbbells up</li>
            <li>Elbows touch floor at bottom—limited range</li>
            <li>Great for lockout strength and shoulder-friendly</li>
            <li>3 sets of 10-12 reps</li>
          </ul>

          <h3>Fly Movements</h3>

          <h4>5. Flat Dumbbell Fly</h4>
          <ul>
            <li>Lie on bench, dumbbells above chest</li>
            <li>Lower arms out to sides in arc (slight elbow bend)</li>
            <li>Stop when you feel chest stretch</li>
            <li>Bring back up in hugging motion</li>
            <li>3 sets of 12-15 reps</li>
          </ul>

          <h4>6. Incline Dumbbell Fly</h4>
          <ul>
            <li>Same motion on incline bench</li>
            <li>Targets upper chest</li>
            <li>3 sets of 12-15 reps</li>
          </ul>

          <h4>7. Cable Fly Alternative (Using Bands)</h4>
          <ul>
            <li>Anchor bands behind you at chest height</li>
            <li>Bring hands together in front of chest</li>
            <li>Squeeze chest at the end</li>
            <li>3 sets of 15 reps</li>
          </ul>

          <h3>Other Movements</h3>

          <h4>8. Dumbbell Pullover</h4>
          <ul>
            <li>Lie across bench, hips below bench level</li>
            <li>Hold one dumbbell with both hands over chest</li>
            <li>Lower behind head in arc</li>
            <li>Pull back over chest</li>
            <li>3 sets of 12-15 reps</li>
          </ul>

          <h4>9. Squeeze Press</h4>
          <ul>
            <li>Press dumbbells together throughout movement</li>
            <li>Keep them squeezed while pressing up and down</li>
            <li>Maximizes chest activation</li>
            <li>3 sets of 12 reps</li>
          </ul>

          <h4>10. Push-Up (Dumbbell Handle)</h4>
          <ul>
            <li>Hands on dumbbell handles (hexagonal dumbbells)</li>
            <li>Greater range of motion than floor</li>
            <li>3 sets to near failure</li>
          </ul>

          <h2>Complete Dumbbell Chest Workouts</h2>

          <h3>Quick Workout (15-20 minutes)</h3>
          <ul>
            <li>Flat Dumbbell Press: 3 × 10</li>
            <li>Incline Dumbbell Press: 3 × 10</li>
            <li>Flat Dumbbell Fly: 3 × 12</li>
          </ul>

          <h3>Full Workout (30 minutes)</h3>
          <ul>
            <li>Incline Dumbbell Press: 4 × 8-10</li>
            <li>Flat Dumbbell Press: 4 × 8-10</li>
            <li>Incline Dumbbell Fly: 3 × 12</li>
            <li>Flat Dumbbell Fly: 3 × 12</li>
            <li>Dumbbell Pullover: 3 × 12</li>
          </ul>

          <h3>High-Volume Workout (40 minutes)</h3>
          <ul>
            <li>Incline Press: 4 × 8</li>
            <li>Flat Press: 4 × 8</li>
            <li>Decline Press: 3 × 10</li>
            <li>Incline Fly: 3 × 12</li>
            <li>Flat Fly: 3 × 12</li>
            <li>Squeeze Press: 3 × 12</li>
            <li>Push-Ups: 2 sets to failure</li>
          </ul>

          <h2>Tips for Better Chest Training</h2>
          <ul>
            <li><strong>Full range of motion</strong> — Lower dumbbells deep, get a stretch</li>
            <li><strong>Control the negative</strong> — 2-3 second lowering phase</li>
            <li><strong>Squeeze at the top</strong> — Focus on contracting the chest</li>
            <li><strong>Don&apos;t neglect upper chest</strong> — Most people need more incline work</li>
            <li><strong>Vary your angles</strong> — Use different incline settings</li>
            <li><strong>Train 2x per week</strong> — Chest can handle good frequency</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Dumbbells are excellent for chest development—arguably better than barbells for many people. They allow a greater stretch, work each side independently, and are easier on the shoulders. Focus on pressing movements for strength, add flies for stretch and squeeze, and hit all angles for complete development.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete push program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get structured workouts for chest, shoulders, and triceps.
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
