import Link from 'next/link';

export const metadata = {
  title: 'Chest Exercises: Build a Bigger, Stronger Chest | Foundational Rehab',
  description: 'The best exercises for chest development. Complete guide to building your pecs with bodyweight, dumbbells, and barbell exercises.',
};

export default function ChestExercisesPage() {
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
            Chest Exercises: Build a Bigger, Stronger Chest
          </h1>
          <p className="text-xl text-gray-600">
            A well-developed chest is the centerpiece of an impressive physique. Here&apos;s how to build one.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The chest is one of the most trained muscle groups—and one of the most poorly trained. Random sets of bench press won&apos;t cut it. You need variety, proper angles, and progressive overload.
          </p>

          <h2>Chest Anatomy</h2>
          <ul>
            <li><strong>Pectoralis major:</strong> The large fan-shaped muscle with two heads</li>
            <li><strong>Clavicular head (upper chest):</strong> Attaches to collarbone—trained with incline movements</li>
            <li><strong>Sternal head (mid/lower chest):</strong> Attaches to sternum—trained with flat and decline movements</li>
            <li><strong>Pectoralis minor:</strong> Smaller muscle underneath—involved in scapular movement</li>
          </ul>
          <p>Complete chest development requires hitting both heads from multiple angles.</p>

          <h2>Best Chest Exercises</h2>

          <h3>Flat Bench Press (Barbell)</h3>
          <ol>
            <li>Lie on bench, feet flat on floor</li>
            <li>Grip bar slightly wider than shoulder-width</li>
            <li>Unrack, lower bar to mid-chest</li>
            <li>Press back up to lockout</li>
          </ol>
          <p><em>Reps: 6-10, 4 sets</em></p>
          <p>The king of chest exercises for overall mass.</p>

          <h3>Dumbbell Bench Press</h3>
          <ol>
            <li>Lie on bench, dumbbells above chest</li>
            <li>Lower to sides of chest (deeper than barbell)</li>
            <li>Press back up, bring dumbbells together at top</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>
          <p>Greater range of motion than barbell. Fixes imbalances.</p>

          <h3>Incline Press (Barbell or Dumbbell)</h3>
          <ol>
            <li>Set bench to 30-45 degrees</li>
            <li>Press from upper chest toward ceiling</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>
          <p>Essential for upper chest development. Most people need more incline work.</p>

          <h3>Decline Press</h3>
          <ol>
            <li>Set bench to slight decline</li>
            <li>Press from lower chest</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>Emphasizes lower chest. Many find they&apos;re strongest here.</p>

          <h3>Dumbbell Flyes</h3>
          <ol>
            <li>Lie on flat bench, dumbbells above chest</li>
            <li>Slight bend in elbows (maintain throughout)</li>
            <li>Lower arms out to sides in wide arc</li>
            <li>Squeeze chest to bring dumbbells back together</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Great for stretch and isolation. Don&apos;t go too heavy.</p>

          <h3>Cable Crossovers</h3>
          <ol>
            <li>Stand between cable stations, handles high</li>
            <li>Step forward, slight lean</li>
            <li>Bring handles together in front of chest</li>
            <li>Squeeze chest at bottom</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Constant tension throughout the movement.</p>

          <h3>Low-to-High Cable Flyes</h3>
          <ol>
            <li>Set cables at low position</li>
            <li>Pull handles up and together at chest level</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Targets upper chest from a different angle.</p>

          <h3>Push-Ups</h3>
          <ol>
            <li>Hands slightly wider than shoulders</li>
            <li>Body straight from head to heels</li>
            <li>Lower chest to floor</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 10-20+, 3 sets</em></p>
          <p>The most accessible chest exercise. Endless variations.</p>

          <h3>Incline Push-Ups</h3>
          <p>Hands on elevated surface. Easier than regular push-ups, targets lower chest.</p>

          <h3>Decline Push-Ups</h3>
          <p>Feet elevated. Harder, targets upper chest.</p>

          <h3>Dips (Chest Focus)</h3>
          <ol>
            <li>Lean forward slightly on parallel bars</li>
            <li>Lower until upper arms are parallel to floor</li>
            <li>Press back up</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>The forward lean shifts emphasis from triceps to chest.</p>

          <h2>Sample Chest Workouts</h2>

          <h3>Beginner Chest (20 min)</h3>
          <ul>
            <li>Push-ups: 3 × max reps</li>
            <li>Dumbbell bench press: 10 × 3</li>
            <li>Incline dumbbell press: 10 × 3</li>
          </ul>

          <h3>Intermediate Chest</h3>
          <ul>
            <li>Barbell bench press: 8 × 4</li>
            <li>Incline dumbbell press: 10 × 3</li>
            <li>Dumbbell flyes: 12 × 3</li>
            <li>Cable crossovers: 12 × 3</li>
          </ul>

          <h3>Advanced Chest</h3>
          <ul>
            <li>Incline barbell press: 6 × 4</li>
            <li>Flat dumbbell press: 8 × 4</li>
            <li>Weighted dips: 8 × 3</li>
            <li>Incline dumbbell flyes: 12 × 3</li>
            <li>Cable crossovers: 15 × 3</li>
            <li>Push-ups (burnout): 1 set to failure</li>
          </ul>

          <h3>Bodyweight Chest</h3>
          <ul>
            <li>Regular push-ups: max × 3</li>
            <li>Wide push-ups: max × 3</li>
            <li>Decline push-ups: max × 3</li>
            <li>Diamond push-ups: max × 2</li>
          </ul>

          <h2>Chest Training Tips</h2>
          <ul>
            <li><strong>Prioritize incline:</strong> Most people&apos;s upper chest is underdeveloped</li>
            <li><strong>Full range of motion:</strong> Deep stretch, full contraction</li>
            <li><strong>Mind-muscle connection:</strong> Focus on squeezing the chest</li>
            <li><strong>Retract shoulder blades:</strong> Pinch them together during pressing</li>
            <li><strong>Control the weight:</strong> No bouncing off the chest</li>
            <li><strong>Vary angles:</strong> Flat, incline, and decline</li>
            <li><strong>Include isolation:</strong> Flyes complement presses</li>
          </ul>

          <h2>Common Chest Training Mistakes</h2>
          <ul>
            <li><strong>Only flat bench:</strong> Upper chest gets neglected</li>
            <li><strong>Shoulders taking over:</strong> Keep chest up, shoulders back</li>
            <li><strong>Bouncing the bar:</strong> Cheating reduces muscle work</li>
            <li><strong>Too narrow grip:</strong> Turns it into a tricep exercise</li>
            <li><strong>Flaring elbows 90°:</strong> Bad for shoulders. Keep elbows at 45-75°</li>
            <li><strong>Ignoring push-ups:</strong> One of the best chest builders</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Building an impressive chest requires more than just flat bench press. Hit both the upper and lower portions with various angles, include both pressing and fly movements, and prioritize mind-muscle connection.
          </p>
          <p>
            Train chest 1-2 times per week with progressive overload, and watch it grow.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete chest program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates balanced push workouts for complete chest development.
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
