import Link from 'next/link';

export const metadata = {
  title: 'Tricep Exercises: Build Bigger Arms with These Moves | Foundational Rehab',
  description: 'The best tricep exercises for arm size and strength. Complete guide to building the back of your arms with proven exercises.',
};

export default function TricepExercisesPage() {
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
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tricep Exercises: Build Bigger Arms with These Moves
          </h1>
          <p className="text-xl text-gray-600">
            Want bigger arms? Focus on triceps—they make up two-thirds of your upper arm.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Most people obsess over biceps, but triceps are actually the bigger muscle group. If you want impressive arm size, tricep training is where the gains are made.
          </p>

          <h2>Tricep Anatomy</h2>
          <p>The triceps have three heads:</p>
          <ul>
            <li><strong>Long head:</strong> Runs along the back of the arm from shoulder to elbow. Trained with overhead movements.</li>
            <li><strong>Lateral head:</strong> Outside of the arm. Creates the &quot;horseshoe&quot; shape.</li>
            <li><strong>Medial head:</strong> Deep, near the elbow. Works in all tricep movements.</li>
          </ul>
          <p>Complete tricep development requires hitting all three heads.</p>

          <h2>Best Tricep Exercises</h2>

          <h3>Close-Grip Bench Press</h3>
          <ol>
            <li>Lie on bench, grip bar shoulder-width or narrower</li>
            <li>Lower bar to lower chest, elbows close to body</li>
            <li>Press back up, focusing on tricep contraction</li>
          </ol>
          <p><em>Reps: 8-10, 4 sets</em></p>
          <p>The best compound tricep builder. Go heavy here.</p>

          <h3>Tricep Dips</h3>
          <ol>
            <li>Parallel bars or bench behind you</li>
            <li>Lower body by bending elbows to 90 degrees</li>
            <li>Keep torso upright (less forward lean than chest dips)</li>
            <li>Press back up</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>
          <p>Bodyweight powerhouse. Add weight when ready.</p>

          <h3>Skull Crushers (Lying Tricep Extension)</h3>
          <ol>
            <li>Lie on bench, hold barbell or dumbbells above chest</li>
            <li>Lower weight toward forehead by bending elbows</li>
            <li>Keep upper arms stationary</li>
            <li>Extend back to start</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Classic isolation exercise. Don&apos;t go too heavy—protect your elbows.</p>

          <h3>Tricep Pushdowns (Cable)</h3>
          <ol>
            <li>Face cable machine, grab bar or rope</li>
            <li>Elbows at sides, upper arms stationary</li>
            <li>Push down until arms are straight</li>
            <li>Squeeze triceps at bottom</li>
            <li>Control return</li>
          </ol>
          <p><em>Reps: 12-15, 3-4 sets</em></p>
          <p>Use straight bar for lateral head emphasis, rope for overall development.</p>

          <h3>Overhead Tricep Extension</h3>
          <ol>
            <li>Hold dumbbell or cable behind head</li>
            <li>Upper arms vertical, elbows pointing forward</li>
            <li>Extend arms overhead</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Best exercise for the long head—the biggest part of the tricep.</p>

          <h3>Tricep Kickbacks</h3>
          <ol>
            <li>Hinge forward, upper arm parallel to floor</li>
            <li>Extend elbow, straightening arm behind you</li>
            <li>Squeeze at full extension</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15 each arm, 3 sets</em></p>
          <p>Light weight, strict form. Focus on the squeeze.</p>

          <h3>Diamond Push-Ups</h3>
          <ol>
            <li>Push-up position, hands together forming a diamond</li>
            <li>Lower chest toward hands</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Best bodyweight tricep exercise.</p>

          <h3>Close-Grip Push-Ups</h3>
          <ol>
            <li>Push-up position, hands shoulder-width or narrower</li>
            <li>Keep elbows close to body as you lower</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Bench Dips</h3>
          <ol>
            <li>Hands on bench behind you, feet on floor or elevated</li>
            <li>Lower body by bending elbows</li>
            <li>Press back up</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Good beginner option before parallel bar dips.</p>

          <h2>Sample Tricep Workouts</h2>

          <h3>Beginner Triceps</h3>
          <ul>
            <li>Close-grip push-ups: 3 × 10-12</li>
            <li>Bench dips: 3 × 12</li>
            <li>Overhead dumbbell extension: 3 × 12</li>
          </ul>

          <h3>Intermediate Triceps</h3>
          <ul>
            <li>Close-grip bench press: 4 × 8</li>
            <li>Skull crushers: 3 × 10</li>
            <li>Tricep pushdowns: 3 × 12</li>
            <li>Overhead extension: 3 × 12</li>
          </ul>

          <h3>Advanced Triceps</h3>
          <ul>
            <li>Weighted dips: 4 × 8</li>
            <li>Close-grip bench press: 4 × 8</li>
            <li>Skull crushers: 3 × 10</li>
            <li>Rope pushdowns: 3 × 12</li>
            <li>Overhead cable extension: 3 × 12</li>
            <li>Kickbacks (burnout): 2 × 15</li>
          </ul>

          <h3>Bodyweight Only</h3>
          <ul>
            <li>Diamond push-ups: 4 × max</li>
            <li>Bench dips: 4 × max</li>
            <li>Close-grip push-ups: 3 × max</li>
          </ul>

          <h2>Tricep Training Tips</h2>
          <ul>
            <li><strong>Include overhead work:</strong> Essential for the long head</li>
            <li><strong>Control the eccentric:</strong> Slow lowering builds muscle</li>
            <li><strong>Full lockout:</strong> Squeeze hard at full extension</li>
            <li><strong>Elbow health:</strong> Warm up well, don&apos;t go too heavy on isolation</li>
            <li><strong>Compounds first:</strong> Dips and close-grip bench before isolation</li>
            <li><strong>Pressing counts:</strong> Bench press and overhead press work triceps too</li>
          </ul>

          <h2>Common Tricep Mistakes</h2>
          <ul>
            <li><strong>Elbows flaring:</strong> Keep them close to target triceps</li>
            <li><strong>Swinging weight:</strong> Strict form, controlled reps</li>
            <li><strong>Neglecting long head:</strong> Include overhead movements</li>
            <li><strong>Too much isolation:</strong> Compounds build more mass</li>
            <li><strong>Going too heavy:</strong> Elbows can&apos;t handle excessive weight on extensions</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Triceps make up the majority of your arm. Build them with heavy compound movements (dips, close-grip bench) and targeted isolation work (pushdowns, overhead extensions). Hit all three heads, prioritize the long head with overhead work, and watch your arms grow.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete arm program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates balanced arm workouts for complete tricep and bicep development.
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
