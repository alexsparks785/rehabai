import Link from 'next/link';

export const metadata = {
  title: 'Exercise for Shoulder Pain: Strengthen and Relieve | Foundational Rehab',
  description: 'Most shoulder pain responds well to the right exercises. Learn what works for common shoulder problems.',
};

export default function ExerciseForShoulderPainPage() {
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
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercise for Shoulder Pain: Strengthen and Relieve
          </h1>
          <p className="text-xl text-gray-600">
            The shoulder is complex, but most pain responds to targeted exercise.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Shoulder pain is incredibly common—and incredibly frustrating. The good news? Most shoulder problems respond well to exercise. The key is doing the right exercises for your specific issue.
          </p>
          <p>
            Here&apos;s how to use movement to relieve shoulder pain and build lasting strength.
          </p>

          <h2>When to See a Doctor First</h2>
          <p>
            Get evaluated before starting exercises if you have:
          </p>
          <ul>
            <li>Shoulder pain after a fall or trauma</li>
            <li>Inability to raise your arm</li>
            <li>Visible deformity</li>
            <li>Severe pain or swelling</li>
            <li>Numbness or tingling in arm/hand</li>
            <li>Pain that wakes you consistently at night</li>
          </ul>
          <p>
            For general shoulder aches, stiffness, and mild-moderate pain, exercise is usually safe and beneficial.
          </p>

          <h2>Understanding Common Shoulder Problems</h2>

          <h3>Rotator Cuff Issues</h3>
          <p>
            The rotator cuff (four small muscles) stabilizes the shoulder. Tendinitis, strains, and tears are common.
          </p>
          <ul>
            <li>Pain with overhead movements</li>
            <li>Weakness when rotating arm</li>
            <li>Pain lying on affected side</li>
          </ul>

          <h3>Shoulder Impingement</h3>
          <p>
            Tendons get pinched when raising the arm.
          </p>
          <ul>
            <li>Pain in arc of movement (usually 60-120°)</li>
            <li>Pain reaching overhead or behind back</li>
            <li>Often related to posture and muscle imbalances</li>
          </ul>

          <h3>Frozen Shoulder</h3>
          <p>
            Capsule tightens, severely limiting movement.
          </p>
          <ul>
            <li>Progressive stiffness over months</li>
            <li>Pain with movement, especially rotation</li>
            <li>Often follows injury or surgery</li>
          </ul>

          <h2>Exercises for Most Shoulder Pain</h2>

          <h3>Phase 1: Pain Relief and Mobility</h3>

          <h4>Pendulum Swings</h4>
          <ul>
            <li>Lean forward, supporting yourself with good arm</li>
            <li>Let painful arm hang, relaxed</li>
            <li>Gently swing in small circles</li>
            <li>1-2 minutes, several times daily</li>
          </ul>

          <h4>Passive Range of Motion</h4>
          <ul>
            <li>Use good arm to help move painful arm</li>
            <li>Gently raise arm forward and to side</li>
            <li>Stop before pain significantly increases</li>
          </ul>

          <h4>Towel Stretch (for rotation)</h4>
          <ul>
            <li>Hold towel behind back</li>
            <li>Good arm on top, gently pull up</li>
            <li>Feel stretch in lower shoulder</li>
            <li>Hold 30 seconds</li>
          </ul>

          <h3>Phase 2: Strengthening</h3>
          <p>
            Start when pain is manageable. Use light resistance (1-3 lbs or bands).
          </p>

          <h4>External Rotation</h4>
          <ul>
            <li>Elbow at side, bent 90°</li>
            <li>Hold band or light weight</li>
            <li>Rotate forearm outward, keeping elbow in</li>
            <li>3 sets of 15</li>
          </ul>

          <h4>Internal Rotation</h4>
          <ul>
            <li>Same position, rotate forearm inward</li>
            <li>Can use band anchored at elbow height</li>
            <li>3 sets of 15</li>
          </ul>

          <h4>Scapular Squeezes</h4>
          <ul>
            <li>Sit or stand tall</li>
            <li>Squeeze shoulder blades together</li>
            <li>Hold 5 seconds, release</li>
            <li>3 sets of 15</li>
          </ul>

          <h4>Prone Y-T-W Raises</h4>
          <ul>
            <li>Lie face down on bed, arm hanging off edge</li>
            <li>Y: Raise arm at 45° angle, thumb up</li>
            <li>T: Raise arm straight out to side</li>
            <li>W: Elbow bent, raise to make W shape</li>
            <li>10 reps each position</li>
          </ul>

          <h4>Wall Push-Ups Plus</h4>
          <ul>
            <li>Push-up against wall</li>
            <li>At top, push extra to protract shoulder blades</li>
            <li>Builds serratus anterior (important stabilizer)</li>
            <li>3 sets of 15</li>
          </ul>

          <h3>Phase 3: Functional Strength</h3>
          <p>
            Progress when basic exercises are pain-free:
          </p>
          <ul>
            <li>Resistance band rows</li>
            <li>Overhead press (start light)</li>
            <li>Push-ups (incline to decline progression)</li>
            <li>Lat pulldowns or pull-ups</li>
          </ul>

          <h2>Exercises to Avoid (Initially)</h2>
          <ul>
            <li><strong>Upright rows</strong> — Puts shoulder in impingement position</li>
            <li><strong>Behind-neck press/pulldown</strong> — Excessive external rotation under load</li>
            <li><strong>Heavy bench press</strong> — Wait until shoulder is stable</li>
            <li><strong>Dips</strong> — Can aggravate shoulder problems</li>
            <li><strong>Anything that causes sharp pain</strong></li>
          </ul>

          <h2>Posture Matters</h2>
          <p>
            Poor posture contributes to many shoulder problems:
          </p>
          <ul>
            <li><strong>Rounded shoulders</strong> — Tighten pecs, stretch/strengthen upper back</li>
            <li><strong>Forward head</strong> — Chin tucks, neck strengthening</li>
            <li><strong>Desk setup</strong> — Monitor at eye level, elbows at 90°</li>
          </ul>

          <h2>Sample Shoulder Rehab Routine</h2>
          <p>
            <strong>Daily (5-10 minutes):</strong>
          </p>
          <ul>
            <li>Pendulums: 1-2 minutes</li>
            <li>Towel stretch: 30 sec each direction</li>
            <li>External rotation: 2 × 15</li>
            <li>Scapular squeezes: 2 × 15</li>
          </ul>
          <p>
            <strong>3x per week (add when ready):</strong>
          </p>
          <ul>
            <li>Y-T-W raises: 2 × 10 each</li>
            <li>Wall push-ups plus: 3 × 15</li>
            <li>Internal rotation: 2 × 15</li>
            <li>Rows: 3 × 12</li>
          </ul>

          <h2>How Long Until Improvement?</h2>
          <ul>
            <li><strong>Mild issues:</strong> 2-4 weeks of consistent exercise</li>
            <li><strong>Moderate issues:</strong> 6-12 weeks</li>
            <li><strong>Chronic problems:</strong> 3-6 months for significant improvement</li>
          </ul>
          <p>
            Consistency is key. A little exercise daily beats occasional intense sessions.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Most shoulder pain improves with the right exercises. Start with gentle mobility work, progress to rotator cuff and scapular strengthening, and eventually return to full function. Avoid movements that cause sharp pain, address posture issues, and be patient—shoulders take time to heal.
          </p>
          <p>
            If pain persists beyond 6-8 weeks of consistent exercise, or you have any red flag symptoms, see a healthcare provider for evaluation.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need a structured shoulder rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercises for your specific shoulder issue.
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
