import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Herniated Disc: Safe Movements for Recovery | Foundational Rehab',
  description: 'Recovering from a herniated disc? Learn which exercises help, which to avoid, and a safe progressive program to reduce pain and rebuild strength.',
};

export default function ExercisesForHerniatedDiscPage() {
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
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Rehab</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Herniated Disc: Safe Movements for Recovery
          </h1>
          <p className="text-xl text-gray-600">
            Most herniated discs heal without surgery. The right exercises can speed recovery and prevent future problems.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            A herniated disc diagnosis can be scary, but here&apos;s the good news: most people recover fully with conservative treatment. Exercise is a crucial part of that recovery.
          </p>
          <p>
            The key is knowing which movements help and which make things worse.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <p className="text-yellow-800 font-medium">⚠️ Important: See a doctor before starting if you have:</p>
            <ul className="text-yellow-700 mt-2">
              <li>Severe or worsening leg weakness</li>
              <li>Numbness in your saddle area (inner thighs, groin)</li>
              <li>Loss of bladder or bowel control</li>
              <li>Progressive neurological symptoms</li>
            </ul>
            <p className="text-yellow-700 mt-2">These are signs of cauda equina syndrome and require immediate medical attention.</p>
          </div>

          <h2>Understanding Disc Herniations</h2>
          <p>
            Your spinal discs have a tough outer layer (annulus) and a gel-like center (nucleus). A herniation occurs when the nucleus pushes through the outer layer, potentially pressing on nerves.
          </p>
          <p>
            Key points:
          </p>
          <ul>
            <li>Most herniations occur in the lower back (lumbar spine)</li>
            <li>Flexion (bending forward) typically pushes disc material backward toward nerves</li>
            <li>Extension (bending backward) often centralizes symptoms</li>
            <li>Most herniations shrink on their own over 6-12 months</li>
          </ul>

          <h2>The McKenzie Approach (Directional Preference)</h2>
          <p>
            The McKenzie Method is the most evidence-based approach for disc problems. The principle: find movements that &quot;centralize&quot; your pain (move it from your leg toward your back) and avoid movements that &quot;peripheralize&quot; it (spread it further down your leg).
          </p>
          <p>
            For most lumbar disc herniations, extension exercises help.
          </p>

          <h2>Phase 1: Acute Phase (Days 1-14)</h2>
          <p>
            Focus on pain relief and gentle movement. Avoid prolonged sitting and bending forward.
          </p>

          <h3>Prone Lying</h3>
          <ol>
            <li>Lie face down on a firm surface</li>
            <li>Arms at your sides or under your forehead</li>
            <li>Let your lower back relax and sag toward the floor</li>
            <li>Breathe deeply and stay relaxed</li>
          </ol>
          <p><em>Duration: 5-10 minutes, multiple times daily</em></p>

          <h3>Prone on Elbows</h3>
          <ol>
            <li>Lie face down, then prop yourself on your elbows</li>
            <li>Keep your hips on the ground</li>
            <li>Let your lower back sag (don&apos;t actively arch)</li>
            <li>If this increases leg pain, return to flat prone lying</li>
          </ol>
          <p><em>Duration: 1-2 minutes at a time, multiple times daily</em></p>

          <h3>Gentle Walking</h3>
          <p>
            Short, frequent walks help maintain mobility and reduce stiffness. Walk on flat surfaces, keep good posture, and don&apos;t push through increased leg pain.
          </p>
          <p><em>Duration: 5-10 minutes, 3-4 times daily</em></p>

          <h2>Phase 2: Extension Exercises (Weeks 2-6)</h2>
          <p>
            Progress to active extension exercises. Stop any exercise that increases leg pain.
          </p>

          <h3>Press-Up (Prone Extension)</h3>
          <ol>
            <li>Lie face down, hands under shoulders</li>
            <li>Press your upper body up, keeping hips on the floor</li>
            <li>Straighten your arms as much as comfortable</li>
            <li>Let your lower back sag—don&apos;t squeeze your glutes</li>
            <li>Lower back down</li>
          </ol>
          <p><em>Reps: 10, every 2 hours if possible</em></p>
          <p><strong>Key:</strong> If leg pain decreases or centralizes, this is working. If leg pain increases, back off.</p>

          <h3>Standing Extension</h3>
          <ol>
            <li>Stand with feet shoulder-width apart</li>
            <li>Place hands on your lower back</li>
            <li>Lean backward, supporting with your hands</li>
            <li>Hold for 1-2 seconds</li>
            <li>Return to neutral</li>
          </ol>
          <p><em>Reps: 10, several times daily (especially after sitting)</em></p>

          <h2>Phase 3: Stabilization (Weeks 4-12)</h2>
          <p>
            Once acute pain subsides, build core stability to protect your spine.
          </p>

          <h3>Bird Dog</h3>
          <ol>
            <li>Start on all fours, spine neutral</li>
            <li>Extend one arm forward and opposite leg back</li>
            <li>Keep your spine still—no rotation or arching</li>
            <li>Hold 5-10 seconds, return, switch sides</li>
          </ol>
          <p><em>Reps: 10 per side, 2-3 sets</em></p>

          <h3>Dead Bug</h3>
          <ol>
            <li>Lie on your back, knees bent 90°, arms reaching to ceiling</li>
            <li>Press your lower back into the floor</li>
            <li>Slowly lower one arm overhead and opposite leg out</li>
            <li>Keep your back flat—don&apos;t let it arch</li>
            <li>Return, switch sides</li>
          </ol>
          <p><em>Reps: 10 per side, 2-3 sets</em></p>

          <h3>Modified Plank</h3>
          <ol>
            <li>Forearms and knees on ground (not full plank)</li>
            <li>Keep spine neutral—straight line from head to knees</li>
            <li>Don&apos;t let hips sag or pike up</li>
            <li>Breathe normally</li>
          </ol>
          <p><em>Hold: 20-30 seconds, 3 sets</em></p>

          <h3>Glute Bridges</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Squeeze glutes and lift hips</li>
            <li>Don&apos;t hyperextend—stop when body forms straight line</li>
            <li>Hold 2-3 seconds, lower with control</li>
          </ol>
          <p><em>Reps: 15, 2-3 sets</em></p>

          <h2>Phase 4: Return to Activity (Months 3+)</h2>
          <p>
            Gradually add more challenging exercises:
          </p>
          <ul>
            <li>Full planks (progress time gradually)</li>
            <li>Side planks</li>
            <li>Squats (start with body weight, maintain neutral spine)</li>
            <li>Hip hinges (prerequisite for deadlifts)</li>
            <li>Walking, swimming, cycling</li>
          </ul>

          <h2>Exercises to AVOID</h2>
          <p>
            These movements often aggravate disc herniations:
          </p>
          <ul>
            <li><strong>Sit-ups/crunches</strong> — Repeated flexion under load</li>
            <li><strong>Toe touches</strong> — Forward bending with straight legs</li>
            <li><strong>Seated forward folds</strong> — Prolonged flexion</li>
            <li><strong>Heavy deadlifts</strong> (initially) — Wait until healed</li>
            <li><strong>Leg press</strong> — Can round lower back under load</li>
            <li><strong>Prolonged sitting</strong> — Increases disc pressure</li>
          </ul>

          <h2>Daily Dos and Don&apos;ts</h2>

          <h3>Do:</h3>
          <ul>
            <li>Take walking breaks every 30-45 minutes</li>
            <li>Use a lumbar support when sitting</li>
            <li>Sleep with a pillow under (back sleeper) or between (side sleeper) knees</li>
            <li>Maintain neutral spine when lifting</li>
            <li>Stay active—bed rest makes things worse</li>
          </ul>

          <h3>Don&apos;t:</h3>
          <ul>
            <li>Sit for more than 30 minutes without standing</li>
            <li>Bend forward to pick things up (squat instead)</li>
            <li>Twist while lifting</li>
            <li>Slouch in chairs</li>
            <li>Sleep on your stomach (usually)</li>
          </ul>

          <h2>Recovery Timeline</h2>
          <ul>
            <li><strong>Weeks 1-2:</strong> Acute pain management, gentle movement</li>
            <li><strong>Weeks 2-6:</strong> Pain should improve, extension exercises</li>
            <li><strong>Weeks 6-12:</strong> Core stability work, gradual return to activity</li>
            <li><strong>Months 3-6:</strong> Progressive strengthening, return to normal activities</li>
            <li><strong>6-12 months:</strong> Full recovery for most people</li>
          </ul>

          <h2>When Surgery Might Be Needed</h2>
          <ul>
            <li>Severe weakness that isn&apos;t improving</li>
            <li>Cauda equina syndrome symptoms</li>
            <li>Intolerable pain despite conservative treatment</li>
            <li>No improvement after 6+ months of rehab</li>
          </ul>
          <p>
            The good news: only about 10% of disc herniations require surgery.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Most herniated discs heal with conservative treatment. The keys are:
          </p>
          <ol>
            <li>Find your directional preference (usually extension)</li>
            <li>Avoid movements that peripheralize pain</li>
            <li>Stay active—walking is medicine</li>
            <li>Build core stability once acute pain subsides</li>
            <li>Be patient—full recovery takes months, not weeks</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a structured disc recovery program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get phase-appropriate exercises with safe progressions for your recovery.
          </p>
          <Link 
            href="/app" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try Foundational Rehab Free
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2026 Foundational Rehab. Move better, feel better.</p>
        </div>
      </footer>
    </div>
  );
}
