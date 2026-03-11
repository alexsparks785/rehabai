import Link from 'next/link';

export const metadata = {
  title: 'Arm Exercises: Complete Guide to Bigger, Stronger Arms | Foundational Rehab',
  description: 'Build stronger arms with the best bicep, tricep, and forearm exercises. Includes bodyweight, dumbbell, and gym workouts for all levels.',
};

export default function ArmExercisesPage() {
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
            Arm Exercises: Complete Guide to Bigger, Stronger Arms
          </h1>
          <p className="text-xl text-gray-600">
            Strong arms aren&apos;t just for show—they help with everything from carrying groceries to crushing workouts.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Want bigger arms? You need to train all the muscles—biceps, triceps, and forearms—with the right exercises and enough volume. Here&apos;s your complete guide.
          </p>

          <h2>Arm Muscle Anatomy</h2>
          <ul>
            <li><strong>Biceps brachii:</strong> Front of upper arm—bends the elbow, rotates the forearm</li>
            <li><strong>Triceps brachii:</strong> Back of upper arm—straightens the elbow (⅔ of arm size!)</li>
            <li><strong>Brachialis:</strong> Under the bicep—adds width to the arm</li>
            <li><strong>Forearms:</strong> Multiple muscles for grip, wrist movement</li>
          </ul>
          <p>
            <strong>Key insight:</strong> Triceps make up about two-thirds of your upper arm. If you want bigger arms, don&apos;t neglect them.
          </p>

          <h2>Bicep Exercises</h2>

          <h3>Dumbbell Curls</h3>
          <ol>
            <li>Stand with dumbbells at sides, palms forward</li>
            <li>Curl weights toward shoulders</li>
            <li>Squeeze biceps at top</li>
            <li>Lower slowly (3-4 seconds)</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Hammer Curls</h3>
          <ol>
            <li>Hold dumbbells with palms facing each other</li>
            <li>Curl up keeping neutral grip</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Targets the brachialis for arm width.</p>

          <h3>Barbell Curls</h3>
          <ol>
            <li>Stand holding barbell, arms extended</li>
            <li>Curl bar toward shoulders</li>
            <li>Keep elbows at sides—don&apos;t swing</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>

          <h3>Incline Dumbbell Curls</h3>
          <ol>
            <li>Sit on incline bench (45-60 degrees)</li>
            <li>Let arms hang straight down</li>
            <li>Curl weights up</li>
            <li>The stretch at the bottom targets the long head</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Concentration Curls</h3>
          <ol>
            <li>Sit, elbow braced against inner thigh</li>
            <li>Curl dumbbell toward shoulder</li>
            <li>Squeeze hard at top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 10-12 each arm, 3 sets</em></p>
          <p>Great for mind-muscle connection.</p>

          <h3>Chin-Ups</h3>
          <ol>
            <li>Hang from bar with underhand grip</li>
            <li>Pull yourself up until chin clears bar</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: As many as possible, 3-4 sets</em></p>
          <p>One of the best bicep exercises—and it builds your back too.</p>

          <h2>Tricep Exercises</h2>

          <h3>Tricep Dips</h3>
          <ol>
            <li>Hands on bench or parallel bars behind you</li>
            <li>Lower body by bending elbows to 90 degrees</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Keep elbows close to body for tricep focus.</p>

          <h3>Tricep Pushdowns</h3>
          <ol>
            <li>Face cable machine, grab bar or rope</li>
            <li>Keep elbows at sides</li>
            <li>Push down until arms are straight</li>
            <li>Squeeze triceps at bottom</li>
            <li>Return with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Overhead Tricep Extension</h3>
          <ol>
            <li>Hold dumbbell overhead with both hands</li>
            <li>Lower behind head by bending elbows</li>
            <li>Extend back to start</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Great stretch for the long head of triceps.</p>

          <h3>Skull Crushers</h3>
          <ol>
            <li>Lie on bench, hold barbell or dumbbells above chest</li>
            <li>Lower weight toward forehead by bending elbows</li>
            <li>Extend back up</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Close-Grip Push-Ups</h3>
          <ol>
            <li>Push-up position, hands close together</li>
            <li>Keep elbows close to body as you lower</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Great bodyweight tricep exercise.</p>

          <h3>Diamond Push-Ups</h3>
          <ol>
            <li>Hands together forming a diamond shape</li>
            <li>Lower chest toward hands</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>More advanced than close-grip push-ups.</p>

          <h3>Tricep Kickbacks</h3>
          <ol>
            <li>Hinge forward, elbow bent 90 degrees at side</li>
            <li>Extend arm straight back</li>
            <li>Squeeze tricep at full extension</li>
            <li>Return with control</li>
          </ol>
          <p><em>Reps: 12-15 each arm, 3 sets</em></p>

          <h2>Forearm Exercises</h2>

          <h3>Wrist Curls</h3>
          <ol>
            <li>Sit, forearms on thighs, wrists hanging off knees</li>
            <li>Curl weights up by flexing wrists</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 2-3 sets</em></p>

          <h3>Reverse Wrist Curls</h3>
          <ol>
            <li>Same position, but palms face down</li>
            <li>Extend wrists up</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 2-3 sets</em></p>

          <h3>Farmer&apos;s Carries</h3>
          <ol>
            <li>Hold heavy weights at sides</li>
            <li>Walk with good posture</li>
            <li>Grip hard throughout</li>
          </ol>
          <p><em>Distance: 30-50 steps, 3 sets</em></p>
          <p>Builds grip strength and forearm size.</p>

          <h3>Dead Hangs</h3>
          <ol>
            <li>Hang from pull-up bar</li>
            <li>Hold as long as possible</li>
          </ol>
          <p><em>Time: Max hold, 3 sets</em></p>

          <h2>Sample Arm Workouts</h2>

          <h3>Beginner (Dumbbells Only)</h3>
          <ul>
            <li>Dumbbell curls: 12 × 3</li>
            <li>Hammer curls: 12 × 3</li>
            <li>Overhead tricep extension: 12 × 3</li>
            <li>Tricep kickbacks: 12 × 3</li>
          </ul>

          <h3>Intermediate</h3>
          <ul>
            <li>Barbell curls: 10 × 3</li>
            <li>Incline dumbbell curls: 10 × 3</li>
            <li>Hammer curls: 10 × 3</li>
            <li>Tricep dips: 12 × 3</li>
            <li>Skull crushers: 10 × 3</li>
            <li>Tricep pushdowns: 12 × 3</li>
          </ul>

          <h3>Advanced</h3>
          <ul>
            <li>Chin-ups: Max × 4</li>
            <li>Barbell curls: 8 × 4</li>
            <li>Incline curls: 10 × 3</li>
            <li>Concentration curls: 10 × 2</li>
            <li>Close-grip bench press: 8 × 4</li>
            <li>Skull crushers: 10 × 3</li>
            <li>Tricep pushdowns: 12 × 3</li>
            <li>Overhead extension: 12 × 2</li>
          </ul>

          <h3>Bodyweight Arms (No Equipment)</h3>
          <ul>
            <li>Chin-ups (or inverted rows with underhand grip): Max × 4</li>
            <li>Diamond push-ups: 12 × 3</li>
            <li>Tricep dips (on chair): 12 × 3</li>
            <li>Close-grip push-ups: 12 × 3</li>
          </ul>

          <h2>Arm Training Tips</h2>
          <ul>
            <li><strong>Train arms 2x per week:</strong> Direct arm work on top of compound movements</li>
            <li><strong>Control the eccentric:</strong> Lower weights slowly for more muscle damage</li>
            <li><strong>Full range of motion:</strong> Fully extend and fully contract</li>
            <li><strong>Don&apos;t neglect triceps:</strong> They&apos;re bigger than biceps</li>
            <li><strong>Compound movements count:</strong> Rows and pull-ups work biceps; pressing works triceps</li>
            <li><strong>Progressive overload:</strong> Add weight, reps, or sets over time</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Building impressive arms requires training biceps, triceps, and forearms with enough volume and progressive overload. Don&apos;t forget that compound movements (rows, pull-ups, presses) do significant arm work too.
          </p>
          <p>
            Train arms 2x per week, use a variety of exercises, and be patient. Arms grow slowly but surely with consistent effort.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete arm training program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized workout programs based on your equipment and goals.
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
