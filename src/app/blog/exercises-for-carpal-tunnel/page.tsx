import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Carpal Tunnel: Relieve Wrist and Hand Pain | Foundational Rehab',
  description: 'Stretches and nerve glides that help carpal tunnel syndrome. Reduce numbness, tingling, and pain.',
};

export default function ExercisesForCarpalTunnelPage() {
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
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Carpal Tunnel: Relieve Wrist and Hand Pain
          </h1>
          <p className="text-xl text-gray-600">
            Numbness, tingling, and pain in your hands? These exercises can help.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Carpal tunnel syndrome occurs when the median nerve gets compressed as it passes through the wrist. The result: numbness, tingling, and pain in the thumb, index, middle, and ring fingers. While severe cases may need medical intervention, exercises can help mild to moderate symptoms.
          </p>

          <h2>When to See a Doctor</h2>
          <p>
            Seek medical evaluation if you have:
          </p>
          <ul>
            <li>Severe or worsening symptoms</li>
            <li>Weakness or muscle wasting in your hand</li>
            <li>Symptoms affecting your daily activities significantly</li>
            <li>Symptoms that don&apos;t improve with self-care</li>
            <li>Constant numbness</li>
          </ul>
          <p>
            For mild symptoms, especially those that come and go, exercises are often helpful.
          </p>

          <h2>How Exercises Help</h2>
          <ul>
            <li><strong>Nerve glides</strong> — Help the nerve move freely through tissues</li>
            <li><strong>Stretching</strong> — Reduces tension on surrounding structures</li>
            <li><strong>Strengthening</strong> — Supports the wrist and improves function</li>
            <li><strong>Blood flow</strong> — Movement promotes healing</li>
          </ul>

          <h2>Nerve Gliding Exercises</h2>
          <p>
            These exercises help the median nerve slide smoothly through the carpal tunnel. Do them gently—they should not cause pain or increased tingling.
          </p>

          <h3>1. Basic Median Nerve Glide</h3>
          <ul>
            <li>Make a fist, wrist neutral</li>
            <li>Open hand, fingers straight, wrist neutral</li>
            <li>Extend wrist back, fingers still straight</li>
            <li>Extend thumb out to side</li>
            <li>Turn palm up</li>
            <li>Gently pull thumb with other hand</li>
            <li>Flow through positions smoothly, 10-15 reps</li>
          </ul>

          <h3>2. Simplified Nerve Glide</h3>
          <ul>
            <li>Arm straight out in front, palm up</li>
            <li>Bend wrist down (fingers toward floor)</li>
            <li>Tilt head toward same shoulder</li>
            <li>Then: wrist up (fingers toward ceiling), head away</li>
            <li>Alternate smoothly, 10-15 reps</li>
          </ul>

          <h3>3. Prayer Stretch Nerve Glide</h3>
          <ul>
            <li>Palms together in front of chest, fingers up</li>
            <li>Lower hands while keeping palms pressed</li>
            <li>Feel stretch in wrists and forearms</li>
            <li>Hold 15 seconds at bottom</li>
            <li>Repeat 5 times</li>
          </ul>

          <h2>Stretching Exercises</h2>

          <h3>4. Wrist Flexor Stretch</h3>
          <ul>
            <li>Extend arm, palm up</li>
            <li>Use other hand to pull fingers down and back</li>
            <li>Feel stretch in inner forearm</li>
            <li>Hold 30 seconds each side</li>
          </ul>

          <h3>5. Wrist Extensor Stretch</h3>
          <ul>
            <li>Extend arm, palm down</li>
            <li>Use other hand to pull fingers toward you</li>
            <li>Feel stretch on top of forearm</li>
            <li>Hold 30 seconds each side</li>
          </ul>

          <h3>6. Wrist Circles</h3>
          <ul>
            <li>Make fists</li>
            <li>Circle wrists slowly</li>
            <li>10 circles each direction</li>
          </ul>

          <h3>7. Finger Spread</h3>
          <ul>
            <li>Spread fingers wide apart</li>
            <li>Hold 5 seconds</li>
            <li>Make tight fist</li>
            <li>Hold 5 seconds</li>
            <li>Repeat 10 times</li>
          </ul>

          <h2>Strengthening Exercises</h2>

          <h3>8. Grip Strengthening</h3>
          <ul>
            <li>Squeeze a soft ball or grip strengthener</li>
            <li>Hold 5 seconds</li>
            <li>Release slowly</li>
            <li>10-15 reps, 2-3 times daily</li>
          </ul>

          <h3>9. Thumb Opposition</h3>
          <ul>
            <li>Touch thumb to each fingertip</li>
            <li>Make an &quot;O&quot; shape with each touch</li>
            <li>10 rounds</li>
          </ul>

          <h3>10. Wrist Curls (Light Weight)</h3>
          <ul>
            <li>Rest forearm on table, wrist over edge, palm up</li>
            <li>Hold very light weight (1-2 lbs or water bottle)</li>
            <li>Curl wrist up, lower slowly</li>
            <li>15 reps, 2 sets</li>
          </ul>

          <h2>Daily Routine</h2>
          <p>
            <strong>Do 3-4 times daily:</strong>
          </p>
          <ul>
            <li>Nerve glide: 10-15 reps</li>
            <li>Wrist flexor stretch: 30 sec each side</li>
            <li>Wrist extensor stretch: 30 sec each side</li>
            <li>Wrist circles: 10 each direction</li>
            <li>Finger spread/fist: 10 reps</li>
          </ul>
          <p><strong>Total time:</strong> 3-4 minutes per session</p>

          <h2>Additional Tips</h2>
          <ul>
            <li><strong>Wrist splint</strong> — Wearing at night keeps wrist neutral</li>
            <li><strong>Ergonomics</strong> — Keep wrist neutral when typing; use wrist rests</li>
            <li><strong>Take breaks</strong> — Every 30-60 minutes during repetitive tasks</li>
            <li><strong>Shake it out</strong> — Shake hands periodically throughout day</li>
            <li><strong>Avoid prolonged flexion</strong> — Don&apos;t sleep with wrists bent</li>
          </ul>

          <h2>What to Avoid</h2>
          <ul>
            <li>Exercises that cause pain or increased tingling</li>
            <li>Aggressive stretching</li>
            <li>Heavy grip work if it worsens symptoms</li>
            <li>Prolonged positions that compress the wrist</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Carpal tunnel exercises—especially nerve glides—can provide significant relief for mild to moderate symptoms. The key is consistency: several short sessions throughout the day are better than one long session. Combine exercises with ergonomic changes and rest.
          </p>
          <p>
            If symptoms are severe, worsening, or not improving with self-care, see a doctor. Early treatment prevents permanent nerve damage.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete wrist and hand program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get guided exercises for carpal tunnel and other wrist issues.
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
