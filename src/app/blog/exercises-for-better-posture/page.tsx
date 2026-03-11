import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Better Posture: Fix Your Alignment | Foundational Rehab',
  description: 'Bad posture from sitting? Learn the best exercises to fix rounded shoulders, forward head, and other posture problems. Build lasting postural strength.',
};

export default function ExercisesForBetterPosturePage() {
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
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Posture</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Better Posture: Fix Your Alignment
          </h1>
          <p className="text-xl text-gray-600">
            Good posture isn&apos;t about &quot;standing up straight.&quot; It&apos;s about building the strength and mobility to hold yourself well without effort.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Posture problems develop over years of sitting, slouching, and moving poorly. They won&apos;t fix themselves with occasional reminders to &quot;sit up straight.&quot; What works is targeted exercise that strengthens weak muscles and stretches tight ones.
          </p>
          <p>
            Here&apos;s how to systematically improve your posture.
          </p>

          <h2>Common Posture Problems</h2>

          <h3>Forward Head Posture</h3>
          <p>
            Head juts forward, adding load to neck muscles. Every inch forward adds ~10 lbs of effective head weight.
          </p>
          <ul>
            <li><strong>Tight:</strong> Suboccipitals, SCM, upper traps</li>
            <li><strong>Weak:</strong> Deep neck flexors, lower traps</li>
          </ul>

          <h3>Rounded Shoulders</h3>
          <p>
            Shoulders roll forward, chest caves in. Classic desk posture.
          </p>
          <ul>
            <li><strong>Tight:</strong> Chest, front shoulders, lats</li>
            <li><strong>Weak:</strong> Rhomboids, mid/lower traps, external rotators</li>
          </ul>

          <h3>Upper Cross Syndrome</h3>
          <p>
            Combination of forward head and rounded shoulders—the most common pattern.
          </p>

          <h3>Anterior Pelvic Tilt</h3>
          <p>
            Pelvis tips forward, lower back over-arches, belly pushes out.
          </p>
          <ul>
            <li><strong>Tight:</strong> Hip flexors, lower back</li>
            <li><strong>Weak:</strong> Glutes, abs</li>
          </ul>

          <h2>Exercises for Upper Body Posture</h2>

          <h3>1. Chin Tucks</h3>
          <p>Fixes forward head posture by strengthening deep neck flexors.</p>
          <ol>
            <li>Sit or stand tall</li>
            <li>Pull your chin straight back (make a double chin)</li>
            <li>Keep eyes level—don&apos;t tilt head</li>
            <li>Hold 5-10 seconds</li>
          </ol>
          <p><em>Reps: 10-15, multiple times daily</em></p>

          <h3>2. Wall Angels</h3>
          <p>Opens chest, strengthens back.</p>
          <ol>
            <li>Stand with back against wall, feet 6 inches out</li>
            <li>Press lower back, upper back, and head into wall</li>
            <li>Arms in &quot;goal post&quot; position against wall</li>
            <li>Slide arms up and down while maintaining wall contact</li>
          </ol>
          <p><em>Reps: 10-15 slow reps, 2-3 sets</em></p>

          <h3>3. Doorway Chest Stretch</h3>
          <p>Stretches tight pecs that pull shoulders forward.</p>
          <ol>
            <li>Stand in doorway, forearms on door frame</li>
            <li>Elbows at shoulder height</li>
            <li>Step through gently, feeling chest stretch</li>
            <li>Keep core engaged—don&apos;t arch lower back</li>
          </ol>
          <p><em>Hold: 30-45 seconds, 2-3 times</em></p>

          <h3>4. Prone Y-T-W Raises</h3>
          <p>Strengthens all the upper back muscles that retract and stabilize shoulder blades.</p>
          <ol>
            <li>Lie face down, arms hanging or on floor</li>
            <li><strong>Y:</strong> Raise arms at 45° angle, thumbs up</li>
            <li><strong>T:</strong> Raise arms straight out to sides, thumbs up</li>
            <li><strong>W:</strong> Arms bent, squeeze shoulder blades, rotate hands up</li>
          </ol>
          <p><em>Reps: 8-12 of each letter, 2-3 sets</em></p>

          <h3>5. Band Pull-Aparts</h3>
          <p>Strengthens rear delts and rhomboids.</p>
          <ol>
            <li>Hold a resistance band in front of you at shoulder height</li>
            <li>Arms straight, shoulder-width grip</li>
            <li>Pull band apart by squeezing shoulder blades together</li>
            <li>Bring band to your chest</li>
            <li>Return with control</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>6. Face Pulls</h3>
          <p>External rotation + scapular retraction—hits multiple weak points.</p>
          <ol>
            <li>Set cable or band at face height</li>
            <li>Pull toward your face, elbows high and wide</li>
            <li>Externally rotate at the end—hands end up by ears</li>
            <li>Squeeze shoulder blades together</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h2>Exercises for Lower Body Posture</h2>

          <h3>1. Glute Bridges</h3>
          <p>Activates glutes and teaches neutral pelvis position.</p>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Squeeze glutes and lift hips</li>
            <li>Form a straight line from knees to shoulders</li>
            <li>Don&apos;t hyperextend—just straight</li>
            <li>Hold 2-3 seconds, lower with control</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>2. Dead Bug</h3>
          <p>Core control without hip flexor dominance.</p>
          <ol>
            <li>Lie on back, arms to ceiling, knees bent 90°</li>
            <li>Press lower back into floor—maintain this</li>
            <li>Lower opposite arm and leg toward floor</li>
            <li>Return, switch sides</li>
            <li>Don&apos;t let lower back arch off floor</li>
          </ol>
          <p><em>Reps: 10 per side, 2-3 sets</em></p>

          <h3>3. Hip Flexor Stretch</h3>
          <p>Releases tight hip flexors that cause anterior pelvic tilt.</p>
          <ol>
            <li>Kneel on one knee, other foot in front</li>
            <li>Tuck your tailbone under (posterior pelvic tilt)</li>
            <li>Squeeze the glute of the down leg</li>
            <li>Lean forward slightly, maintaining the tuck</li>
          </ol>
          <p><em>Hold: 30-60 seconds per side, 2-3 times</em></p>

          <h3>4. Cat-Cow</h3>
          <p>Mobilizes the spine through flexion and extension.</p>
          <ol>
            <li>On all fours, hands under shoulders, knees under hips</li>
            <li>Cow: Drop belly, lift chest and tailbone</li>
            <li>Cat: Round spine, tuck chin and tailbone</li>
            <li>Move slowly, feel each vertebra</li>
          </ol>
          <p><em>Reps: 10-15 slow cycles</em></p>

          <h2>Complete Posture Correction Routine</h2>

          <h3>Daily Routine (15 minutes)</h3>
          <ol>
            <li>Chin tucks: 15 reps</li>
            <li>Wall angels: 12 reps</li>
            <li>Doorway chest stretch: 30 sec × 2</li>
            <li>Hip flexor stretch: 30 sec per side</li>
            <li>Cat-cow: 10 cycles</li>
            <li>Dead bug: 10 per side</li>
            <li>Prone Y-T-W: 8 reps each</li>
            <li>Glute bridges: 15 reps</li>
          </ol>

          <h3>Desk Break (2 minutes)</h3>
          <p>Do this every hour:</p>
          <ul>
            <li>Stand and walk briefly</li>
            <li>Chin tucks: 10 reps</li>
            <li>Shoulder rolls: 10 forward, 10 back</li>
            <li>Doorway stretch: 20 seconds</li>
          </ul>

          <h2>Posture Throughout the Day</h2>

          <h3>Sitting</h3>
          <ul>
            <li>Feet flat on floor</li>
            <li>Lower back supported (or use a lumbar roll)</li>
            <li>Shoulders relaxed, not shrugged</li>
            <li>Monitor at eye level</li>
            <li>Take breaks every 30-45 minutes</li>
          </ul>

          <h3>Standing</h3>
          <ul>
            <li>Weight evenly distributed</li>
            <li>Slight knee bend (not locked)</li>
            <li>Pelvis neutral (not tilted forward)</li>
            <li>Ears over shoulders over hips</li>
          </ul>

          <h3>Walking</h3>
          <ul>
            <li>Lead with your chest, not your head</li>
            <li>Arms swing naturally</li>
            <li>Eyes forward, not down at phone</li>
          </ul>

          <h2>How Long Does It Take?</h2>
          <ul>
            <li><strong>1-2 weeks:</strong> Start noticing when you&apos;re slouching</li>
            <li><strong>4-6 weeks:</strong> Good posture becomes easier</li>
            <li><strong>8-12 weeks:</strong> New default posture emerges</li>
            <li><strong>Ongoing:</strong> Maintenance to counter daily sitting</li>
          </ul>
          <p>
            Posture change is gradual. You&apos;re rewiring years of habit.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Good posture comes from:
          </p>
          <ol>
            <li>Strengthening weak muscles (deep neck flexors, mid/lower traps, glutes, core)</li>
            <li>Stretching tight muscles (chest, hip flexors, upper traps)</li>
            <li>Building awareness throughout the day</li>
            <li>Consistent daily practice</li>
          </ol>
          <p>
            15 minutes a day can transform how you hold yourself—and how you feel.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a personalized posture program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get exercises targeted to your specific posture problems.
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
