import Link from 'next/link';

export const metadata = {
  title: 'Exercise for Neck Pain: Relieve Tension and Build Strength | Foundational Rehab',
  description: 'Most neck pain responds to simple exercises. Learn stretches and strengthening moves that actually work.',
};

export default function ExerciseForNeckPainPage() {
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
            Exercise for Neck Pain: Relieve Tension and Build Strength
          </h1>
          <p className="text-xl text-gray-600">
            That stiff, aching neck? Exercise usually helps more than rest.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Neck pain is incredibly common—most of us will experience it at some point. The good news? Most neck pain isn&apos;t serious and responds well to simple exercises. The key is addressing both the tightness AND the weakness that typically cause problems.
          </p>

          <h2>When to See a Doctor First</h2>
          <p>
            Seek medical evaluation if you have:
          </p>
          <ul>
            <li>Neck pain after trauma (car accident, fall)</li>
            <li>Numbness, tingling, or weakness in arms/hands</li>
            <li>Severe headache with neck stiffness and fever</li>
            <li>Pain that radiates down your arm</li>
            <li>Difficulty with balance or walking</li>
            <li>Loss of bladder or bowel control</li>
          </ul>
          <p>
            For general neck stiffness and aches—especially related to posture or stress—exercise is usually safe and beneficial.
          </p>

          <h2>Why Your Neck Hurts</h2>
          <p>
            Common causes of neck pain:
          </p>
          <ul>
            <li><strong>Forward head posture</strong> — Screen time pushes the head forward</li>
            <li><strong>Weak neck muscles</strong> — Deep stabilizers get neglected</li>
            <li><strong>Tight upper traps</strong> — Stress and hunching tighten these muscles</li>
            <li><strong>Poor thoracic mobility</strong> — Stiff mid-back makes neck work harder</li>
            <li><strong>Sustained positions</strong> — Holding any position too long causes strain</li>
          </ul>

          <h2>Exercises for Neck Pain</h2>

          <h3>Stretches (Hold 30 seconds each)</h3>

          <h4>1. Neck Tilts</h4>
          <ul>
            <li>Sit or stand tall</li>
            <li>Drop right ear toward right shoulder</li>
            <li>Gentle stretch on left side of neck</li>
            <li>For deeper stretch: gently rest right hand on left side of head</li>
            <li>Repeat other side</li>
          </ul>

          <h4>2. Neck Rotation Stretch</h4>
          <ul>
            <li>Turn head to look over right shoulder</li>
            <li>Hold at end range</li>
            <li>Repeat left</li>
          </ul>

          <h4>3. Levator Scapulae Stretch</h4>
          <ul>
            <li>Turn head 45° to right</li>
            <li>Look down toward right armpit</li>
            <li>Gently use right hand to increase stretch</li>
            <li>Feel stretch in back/side of neck</li>
            <li>Repeat other side</li>
          </ul>

          <h4>4. Upper Trap Stretch</h4>
          <ul>
            <li>Sit on right hand (anchors shoulder down)</li>
            <li>Tilt head left</li>
            <li>Gently pull with left hand</li>
            <li>Repeat other side</li>
          </ul>

          <h3>Strengthening Exercises</h3>

          <h4>5. Chin Tucks (Most Important!)</h4>
          <ul>
            <li>Sit or stand tall, look straight ahead</li>
            <li>Draw chin straight back (make a double chin)</li>
            <li>Hold 5-10 seconds</li>
            <li>Release and repeat 10-15 times</li>
            <li>Do multiple times throughout the day</li>
          </ul>
          <p>
            <em>This is the single most effective exercise for neck pain related to forward head posture.</em>
          </p>

          <h4>6. Isometric Neck Strengthening</h4>
          <ul>
            <li><strong>Forward:</strong> Place palm on forehead, push head into hand (don&apos;t let head move). Hold 5-10 sec.</li>
            <li><strong>Backward:</strong> Hands behind head, push head back into hands. Hold 5-10 sec.</li>
            <li><strong>Sideways:</strong> Hand on side of head, push into hand. Hold 5-10 sec each side.</li>
          </ul>
          <p>
            Repeat each direction 5-10 times.
          </p>

          <h4>7. Prone Y-T Raises</h4>
          <ul>
            <li>Lie face down, arms hanging off bed/bench</li>
            <li>Lift arms to Y position (thumbs up), hold 5 sec</li>
            <li>Lift arms to T position, hold 5 sec</li>
            <li>Strengthens upper back (supports neck)</li>
            <li>10 reps each position</li>
          </ul>

          <h4>8. Scapular Squeezes</h4>
          <ul>
            <li>Sit or stand tall</li>
            <li>Squeeze shoulder blades together and down</li>
            <li>Hold 5 seconds</li>
            <li>Release and repeat 15-20 times</li>
          </ul>

          <h3>Mobility Exercises</h3>

          <h4>9. Neck Circles (Gentle)</h4>
          <ul>
            <li>Slowly roll head in a circle</li>
            <li>Keep movement smooth and controlled</li>
            <li>5 circles each direction</li>
            <li>Skip if this causes pain</li>
          </ul>

          <h4>10. Thoracic Extension</h4>
          <ul>
            <li>Sit in chair, hands behind head</li>
            <li>Arch upper back over chair back</li>
            <li>Open chest toward ceiling</li>
            <li>Hold 5 seconds, repeat 10 times</li>
          </ul>

          <h2>Sample Daily Routine (5-10 minutes)</h2>
          <p>
            <strong>Morning:</strong>
          </p>
          <ul>
            <li>Chin tucks: 15 reps</li>
            <li>Neck tilts: 30 sec each side</li>
            <li>Scapular squeezes: 15 reps</li>
          </ul>
          <p>
            <strong>Midday (at desk):</strong>
          </p>
          <ul>
            <li>Chin tucks: 10 reps</li>
            <li>Upper trap stretch: 30 sec each side</li>
            <li>Thoracic extension: 10 reps</li>
          </ul>
          <p>
            <strong>Evening:</strong>
          </p>
          <ul>
            <li>All stretches: 30 sec each</li>
            <li>Isometric strengthening: all directions</li>
            <li>Chin tucks: 15 reps</li>
          </ul>

          <h2>Posture Tips</h2>
          <ul>
            <li><strong>Screen position:</strong> Top of monitor at eye level</li>
            <li><strong>Phone use:</strong> Bring phone up instead of looking down</li>
            <li><strong>Movement breaks:</strong> Every 30-60 minutes, move your neck</li>
            <li><strong>Sleep position:</strong> Pillow that keeps neck neutral (not too high or flat)</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Most neck pain improves with consistent exercise—stretching tight muscles and strengthening weak ones. Chin tucks are the MVP exercise for desk workers and phone users. Combine them with stretches and posture awareness, and most neck pain will improve within a few weeks.
          </p>
          <p>
            Be consistent—a few minutes multiple times per day beats one long session. And if pain persists or worsens, see a healthcare provider.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete neck pain program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercises based on your specific symptoms.
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
