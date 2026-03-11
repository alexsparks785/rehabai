import Link from 'next/link';

export const metadata = {
  title: 'Stretches for Neck Pain: Relieve Tension and Stiffness | Foundational Rehab',
  description: 'Neck pain from sitting or stress? Learn the best neck stretches and exercises to relieve tension, reduce stiffness, and prevent neck problems.',
};

export default function StretchesForNeckPainPage() {
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
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Pain Relief</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stretches for Neck Pain: Relieve Tension and Stiffness
          </h1>
          <p className="text-xl text-gray-600">
            Neck pain is epidemic in our screen-filled world. These stretches can provide relief in minutes.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Your neck holds up a 10-12 pound head all day. Add forward head posture from screens, and those muscles work even harder. No wonder neck pain is one of the most common complaints.
          </p>
          <p>
            The right stretches can provide immediate relief and prevent chronic problems when done consistently.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <p className="text-yellow-800 font-medium">⚠️ See a doctor if you have:</p>
            <ul className="text-yellow-700 mt-2">
              <li>Pain radiating down your arm with numbness or weakness</li>
              <li>Neck pain after trauma (accident, fall, impact)</li>
              <li>Severe headaches with neck stiffness</li>
              <li>Difficulty swallowing or breathing</li>
            </ul>
          </div>

          <h2>Why Your Neck Hurts</h2>
          <ul>
            <li><strong>Forward head posture:</strong> Head juts forward from screen use</li>
            <li><strong>Tight upper traps:</strong> Stress makes us shrug and hold tension</li>
            <li><strong>Weak deep neck flexors:</strong> Small stabilizers become inhibited</li>
            <li><strong>Stiff thoracic spine:</strong> Upper back doesn&apos;t move, neck compensates</li>
            <li><strong>Poor sleeping position:</strong> Wrong pillow or stomach sleeping</li>
          </ul>

          <h2>The Best Neck Stretches</h2>

          <h3>1. Upper Trapezius Stretch</h3>
          <ol>
            <li>Sit or stand tall</li>
            <li>Drop your right ear toward your right shoulder</li>
            <li>Gently place your right hand on your head to add light pressure</li>
            <li>Keep your left shoulder down</li>
            <li>Feel the stretch on the left side of your neck</li>
          </ol>
          <p><em>Hold: 30 seconds per side, 2-3 times</em></p>

          <h3>2. Levator Scapulae Stretch</h3>
          <ol>
            <li>Turn your head 45 degrees to one side</li>
            <li>Look down toward your armpit</li>
            <li>Place your hand on the back of your head</li>
            <li>Gently pull your head down and forward</li>
            <li>Feel the stretch at the back/side of your neck</li>
          </ol>
          <p><em>Hold: 30 seconds per side, 2-3 times</em></p>
          <p>This targets the levator scapulae—a common source of neck and shoulder blade tension.</p>

          <h3>3. Chin Tuck</h3>
          <ol>
            <li>Sit or stand with good posture</li>
            <li>Pull your chin straight back (make a double chin)</li>
            <li>Keep your eyes level—don&apos;t tilt your head up or down</li>
            <li>Feel length at the back of your neck</li>
            <li>Hold briefly, relax, repeat</li>
          </ol>
          <p><em>Reps: 10-15, several times daily</em></p>
          <p>This stretches the suboccipitals and strengthens the deep neck flexors—crucial for forward head posture.</p>

          <h3>4. Neck Rotation Stretch</h3>
          <ol>
            <li>Sit tall, shoulders relaxed</li>
            <li>Slowly turn your head to look over one shoulder</li>
            <li>Go only as far as comfortable</li>
            <li>Hold at end range</li>
            <li>Return to center, repeat other side</li>
          </ol>
          <p><em>Hold: 15-20 seconds per side, 2-3 times</em></p>

          <h3>5. Neck Flexion/Extension</h3>
          <ol>
            <li>Start with head neutral</li>
            <li>Slowly drop chin toward chest (flexion)</li>
            <li>Hold 10-15 seconds</li>
            <li>Slowly look up toward ceiling (extension)</li>
            <li>Hold 5-10 seconds—be gentle with extension</li>
          </ol>
          <p><em>Reps: 5 slow cycles</em></p>

          <h3>6. SCM Stretch (Sternocleidomastoid)</h3>
          <ol>
            <li>Turn your head 45 degrees to one side</li>
            <li>Tilt your head back slightly</li>
            <li>You can place fingers on your collarbone to anchor</li>
            <li>Feel the stretch at the front/side of your neck</li>
          </ol>
          <p><em>Hold: 20-30 seconds per side</em></p>

          <h2>Neck Strengthening (Often Overlooked)</h2>
          <p>
            Stretching alone won&apos;t fix neck pain if the muscles are weak. Add these:
          </p>

          <h3>Chin Tuck with Hold</h3>
          <ol>
            <li>Perform a chin tuck</li>
            <li>Hold the tucked position for 10 seconds</li>
            <li>Relax, repeat</li>
          </ol>
          <p><em>Reps: 10 holds, 2-3 times daily</em></p>

          <h3>Isometric Neck Exercises</h3>
          <p>Resist with your hand without moving your head:</p>
          <ul>
            <li><strong>Forward:</strong> Press forehead into palm, resist 10 seconds</li>
            <li><strong>Backward:</strong> Press back of head into palm, resist 10 seconds</li>
            <li><strong>Side:</strong> Press side of head into palm, resist 10 seconds each side</li>
          </ul>
          <p><em>Sets: 3 rounds of each direction</em></p>

          <h3>Prone Y Raise</h3>
          <ol>
            <li>Lie face down on floor or bench</li>
            <li>Arms extended overhead in a Y shape, thumbs up</li>
            <li>Lift arms slightly off ground, squeezing shoulder blades</li>
            <li>Hold 5 seconds, lower</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 sets</em></p>
          <p>This strengthens the lower traps to balance out dominant upper traps.</p>

          <h2>Complete Neck Relief Routine</h2>

          <h3>Quick Relief (5 minutes)</h3>
          <ul>
            <li>Chin tucks: 10 reps</li>
            <li>Upper trap stretch: 30 seconds per side</li>
            <li>Levator scapulae stretch: 30 seconds per side</li>
            <li>Neck rotations: 5 per side</li>
          </ul>

          <h3>Full Routine (10 minutes)</h3>
          <ul>
            <li>Chin tucks: 10 reps</li>
            <li>Upper trap stretch: 30 seconds × 2 per side</li>
            <li>Levator scapulae stretch: 30 seconds × 2 per side</li>
            <li>SCM stretch: 20 seconds per side</li>
            <li>Neck flexion/extension: 5 cycles</li>
            <li>Isometric holds: All 4 directions</li>
            <li>Prone Y raises: 10 reps</li>
          </ul>

          <h2>Fix the Root Cause</h2>
          <p>
            Stretching provides relief, but you also need to address why your neck hurts:
          </p>

          <h3>Workstation Setup</h3>
          <ul>
            <li>Monitor at eye level, arm&apos;s length away</li>
            <li>Keyboard and mouse so elbows are at 90°</li>
            <li>Chair supports your lower back</li>
            <li>Take breaks every 30-45 minutes</li>
          </ul>

          <h3>Phone Habits</h3>
          <ul>
            <li>Hold phone at eye level when possible</li>
            <li>Use voice-to-text for long messages</li>
            <li>Limit scrolling time</li>
          </ul>

          <h3>Sleeping Position</h3>
          <ul>
            <li>Side or back sleeping is best</li>
            <li>Pillow should keep neck neutral (not flexed or extended)</li>
            <li>Avoid stomach sleeping—forces neck rotation</li>
          </ul>

          <h3>Stress Management</h3>
          <p>
            Tension in the neck is often stress-related. Notice when you&apos;re shrugging or clenching. Consciously relax your shoulders throughout the day.
          </p>

          <h2>Don&apos;t Forget the Thoracic Spine</h2>
          <p>
            A stiff upper back makes your neck work harder. Add these:
          </p>
          <ul>
            <li>Foam roller thoracic extension: 2 minutes</li>
            <li>Cat-cow: 10 cycles</li>
            <li>Thread the needle: 5 per side</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Neck pain responds well to consistent stretching and strengthening. The key points:
          </p>
          <ol>
            <li>Stretch the overactive muscles (upper traps, levator scap, SCM)</li>
            <li>Strengthen the weak muscles (deep neck flexors, lower traps)</li>
            <li>Practice chin tucks daily to combat forward head posture</li>
            <li>Fix your workstation and phone habits</li>
            <li>Address thoracic spine mobility</li>
          </ol>
          <p>
            A few minutes of daily stretching can dramatically reduce neck pain within 1-2 weeks.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a complete neck and posture program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get daily routines to fix your neck pain and improve your posture.
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
