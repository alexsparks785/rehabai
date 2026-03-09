import Link from 'next/link';

export const metadata = {
  title: 'Core Exercises for Beginners: Build a Strong Foundation | Foundational Rehab',
  description: 'Start here if you\'re new to core training. Safe, effective, beginner-friendly exercises with progressions.',
};

export default function CoreExercisesForBeginnersPage() {
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
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Core Exercises for Beginners: Build a Strong Foundation
          </h1>
          <p className="text-xl text-gray-600">
            Forget crunches. Here&apos;s how to actually build a strong, stable core.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Most people think core training means endless crunches. It doesn&apos;t. Your core is designed to stabilize and transfer force—not just flex your spine repeatedly. Here&apos;s how to build real core strength, starting from wherever you are.
          </p>

          <h2>What Is Your Core, Actually?</h2>
          <p>
            Your core isn&apos;t just your &quot;abs.&quot; It includes:
          </p>
          <ul>
            <li><strong>Rectus abdominis</strong> — The &quot;six-pack&quot; muscle</li>
            <li><strong>Obliques</strong> — Side muscles for rotation and lateral stability</li>
            <li><strong>Transverse abdominis</strong> — Deep stabilizer that wraps around your trunk</li>
            <li><strong>Erector spinae</strong> — Back muscles that support the spine</li>
            <li><strong>Diaphragm</strong> — Breathing muscle that affects core pressure</li>
            <li><strong>Pelvic floor</strong> — Base of the core cylinder</li>
          </ul>
          <p>
            A truly strong core resists movement as much as it creates it.
          </p>

          <h2>Core Training Principles</h2>
          <ul>
            <li><strong>Anti-movement first</strong> — Resist extension, rotation, and lateral flexion</li>
            <li><strong>Breathe properly</strong> — Don&apos;t hold your breath; exhale on effort</li>
            <li><strong>Quality over quantity</strong> — 10 perfect reps beat 50 sloppy ones</li>
            <li><strong>Progress gradually</strong> — Master basics before advancing</li>
          </ul>

          <h2>Beginner Core Exercises</h2>

          <h3>Anti-Extension (Resist Arching)</h3>

          <h4>1. Dead Bug</h4>
          <ul>
            <li>Lie on back, arms reaching toward ceiling</li>
            <li>Knees bent at 90°, shins parallel to floor</li>
            <li>Press lower back into floor (no arch)</li>
            <li>Slowly lower opposite arm and leg</li>
            <li>Return, switch sides</li>
            <li>3 sets of 8 each side</li>
          </ul>
          <p><em>Key: Lower back stays glued to floor throughout.</em></p>

          <h4>2. Plank (Modified First)</h4>
          <ul>
            <li>Start on knees and forearms (modified)</li>
            <li>Body straight from knees to head</li>
            <li>Don&apos;t let hips sag or pike up</li>
            <li>Hold 20-30 seconds, progress to full plank</li>
            <li>3 sets</li>
          </ul>

          <h4>3. Bird Dog</h4>
          <ul>
            <li>On hands and knees</li>
            <li>Extend opposite arm and leg</li>
            <li>Keep spine neutral (no rotation or arching)</li>
            <li>Hold 3-5 seconds, return, switch</li>
            <li>3 sets of 8 each side</li>
          </ul>

          <h3>Anti-Rotation (Resist Twisting)</h3>

          <h4>4. Pallof Press (with band)</h4>
          <ul>
            <li>Anchor band at chest height, stand sideways</li>
            <li>Hold band at chest, step away to create tension</li>
            <li>Press band straight out, resist rotation</li>
            <li>Hold 3 seconds, return</li>
            <li>3 sets of 10 each side</li>
          </ul>

          <h4>5. Dead Bug with Rotation Resist</h4>
          <ul>
            <li>Same as dead bug, but only lower same-side arm and leg</li>
            <li>Creates rotational challenge</li>
            <li>Keep pelvis still</li>
            <li>3 sets of 8 each side</li>
          </ul>

          <h3>Anti-Lateral Flexion (Resist Side Bending)</h3>

          <h4>6. Side Plank (Modified)</h4>
          <ul>
            <li>Lie on side, prop on forearm and knees (modified)</li>
            <li>Lift hips so body is straight</li>
            <li>Don&apos;t let hips drop</li>
            <li>Hold 15-30 seconds, progress to full side plank</li>
            <li>3 sets each side</li>
          </ul>

          <h4>7. Farmer&apos;s Carry (Single Arm)</h4>
          <ul>
            <li>Hold weight in one hand (dumbbell, jug of water, bag)</li>
            <li>Walk while keeping torso upright—don&apos;t lean</li>
            <li>Walk 30-40 steps each side</li>
            <li>3 sets each side</li>
          </ul>

          <h3>Basic Flexion (Yes, Some Crunching)</h3>

          <h4>8. Reverse Crunch</h4>
          <ul>
            <li>Lie on back, knees bent, feet off floor</li>
            <li>Curl hips off floor toward ribs</li>
            <li>Lower with control</li>
            <li>3 sets of 12-15</li>
          </ul>
          <p><em>Easier on the neck than regular crunches.</em></p>

          <h4>9. Glute Bridge Hold</h4>
          <ul>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Lift hips, squeeze glutes</li>
            <li>Hold 20-30 seconds</li>
            <li>Works glutes and teaches core-hip connection</li>
            <li>3 sets</li>
          </ul>

          <h2>Beginner Core Workout</h2>
          <p>
            Do this 3 times per week, with rest days between:
          </p>
          <ul>
            <li>Dead Bug: 3 × 8 each side</li>
            <li>Bird Dog: 3 × 8 each side</li>
            <li>Modified Plank: 3 × 20-30 sec</li>
            <li>Modified Side Plank: 2 × 15-20 sec each side</li>
            <li>Glute Bridge Hold: 3 × 20-30 sec</li>
          </ul>
          <p><strong>Total time:</strong> 10-15 minutes</p>

          <h2>Progression Path</h2>
          <p>
            When exercises feel easy:
          </p>
          <ul>
            <li>Dead Bug → Add more range, slower tempo, add light weight</li>
            <li>Modified Plank → Full plank → Longer holds → Add movement</li>
            <li>Modified Side Plank → Full side plank → Add hip dips</li>
            <li>Bird Dog → Add pause, add movement, add band</li>
          </ul>

          <h2>Common Mistakes</h2>
          <ul>
            <li><strong>Holding breath</strong> — Keep breathing throughout</li>
            <li><strong>Arching lower back</strong> — Maintain neutral or flat-back position</li>
            <li><strong>Going too fast</strong> — Slow, controlled movement builds strength</li>
            <li><strong>Only doing crunches</strong> — Train all core functions</li>
            <li><strong>Skipping progressions</strong> — Master basics first</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            A strong core stabilizes your spine, improves posture, and makes everything else you do more powerful and safe. Forget endless crunches—focus on anti-movement exercises that teach your core to do what it&apos;s designed for.
          </p>
          <p>
            Start with the basics, master them, then progress. A 10-15 minute routine, 3 times per week, will build real core strength within weeks.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready for a complete core program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive core workouts that build real strength.
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
