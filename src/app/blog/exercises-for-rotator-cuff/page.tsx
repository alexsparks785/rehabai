import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Rotator Cuff: Rehab and Strengthening Guide | Foundational Rehab',
  description: 'Rotator cuff pain or injury? Learn the best exercises for rotator cuff rehab, strengthening, and preventing shoulder injuries.',
};

export default function ExercisesForRotatorCuffPage() {
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
            Exercises for Rotator Cuff: Rehab and Strengthening Guide
          </h1>
          <p className="text-xl text-gray-600">
            Your rotator cuff muscles are small but critical. Here&apos;s how to strengthen them, recover from injury, and keep your shoulders healthy.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The rotator cuff is a group of four muscles that stabilize your shoulder joint. When they&apos;re weak or injured, you get pain, weakness, and limited mobility. The good news: rotator cuff problems respond remarkably well to exercise.
          </p>

          <h2>Understanding the Rotator Cuff</h2>
          <p>
            The rotator cuff consists of four muscles:
          </p>
          <ul>
            <li><strong>Supraspinatus</strong> — Initiates arm lifting and is most commonly injured</li>
            <li><strong>Infraspinatus</strong> — Externally rotates the shoulder</li>
            <li><strong>Teres minor</strong> — Assists with external rotation</li>
            <li><strong>Subscapularis</strong> — Internally rotates the shoulder</li>
          </ul>
          <p>
            These muscles work together to keep your arm bone centered in the shoulder socket during movement.
          </p>

          <h2>When to Do These Exercises</h2>
          <p>
            These exercises are appropriate for:
          </p>
          <ul>
            <li>Rotator cuff tendinitis or tendinopathy</li>
            <li>Minor rotator cuff strains</li>
            <li>Shoulder impingement</li>
            <li>Post-surgical rehab (with doctor approval)</li>
            <li>Prevention for overhead athletes and lifters</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <p className="text-yellow-800 font-medium">⚠️ See a doctor first if you have:</p>
            <ul className="text-yellow-700 mt-2">
              <li>Significant weakness (can&apos;t lift your arm)</li>
              <li>Pain that wakes you at night</li>
              <li>Recent trauma or fall</li>
              <li>Symptoms lasting more than 6 weeks with no improvement</li>
            </ul>
          </div>

          <h2>Phase 1: Acute Phase Exercises (Pain Present)</h2>
          <p>
            When pain is high, focus on gentle movement without resistance.
          </p>

          <h3>Pendulum Swings</h3>
          <ol>
            <li>Lean forward, supporting yourself with your good arm on a table</li>
            <li>Let your affected arm hang down</li>
            <li>Gently swing your arm in small circles</li>
            <li>Let momentum and gravity do the work—don&apos;t use shoulder muscles</li>
          </ol>
          <p><em>Duration: 1-2 minutes, several times daily</em></p>

          <h3>Passive External Rotation</h3>
          <ol>
            <li>Hold a stick or dowel with both hands in front of you</li>
            <li>Keep elbows tucked at your sides, bent 90 degrees</li>
            <li>Use your good arm to push the affected arm outward</li>
            <li>Go only as far as comfortable—no forcing</li>
          </ol>
          <p><em>Hold: 15-30 seconds, repeat 5 times</em></p>

          <h3>Supine Flexion</h3>
          <ol>
            <li>Lie on your back, hold a stick with both hands</li>
            <li>Use your good arm to lift both arms overhead</li>
            <li>Go only as far as comfortable</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 times daily</em></p>

          <h2>Phase 2: Isometric Exercises (Minimal Pain)</h2>
          <p>
            When pain decreases, start building strength without movement.
          </p>

          <h3>Isometric External Rotation</h3>
          <ol>
            <li>Stand sideways next to a wall, affected arm nearest</li>
            <li>Bend elbow 90 degrees, fist facing forward</li>
            <li>Press the back of your hand into the wall</li>
            <li>Hold 30% effort for 10 seconds</li>
          </ol>
          <p><em>Reps: 10 holds, 3 sets</em></p>

          <h3>Isometric Internal Rotation</h3>
          <ol>
            <li>Stand in a doorway</li>
            <li>Bend elbow 90 degrees, palm facing in</li>
            <li>Press your palm into the door frame</li>
            <li>Hold 30% effort for 10 seconds</li>
          </ol>
          <p><em>Reps: 10 holds, 3 sets</em></p>

          <h3>Isometric Abduction</h3>
          <ol>
            <li>Stand sideways next to a wall</li>
            <li>Keep arm straight at your side, against the wall</li>
            <li>Push arm outward into the wall</li>
            <li>Hold 30% effort for 10 seconds</li>
          </ol>
          <p><em>Reps: 10 holds, 3 sets</em></p>

          <h2>Phase 3: Strengthening Exercises (No Pain)</h2>
          <p>
            Progress to resistance exercises when you can do daily activities pain-free.
          </p>

          <h3>External Rotation with Band</h3>
          <ol>
            <li>Anchor a resistance band at elbow height</li>
            <li>Stand sideways, affected arm nearest the anchor</li>
            <li>Keep elbow tucked at your side, bent 90 degrees</li>
            <li>Rotate your forearm outward against the band</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>Internal Rotation with Band</h3>
          <ol>
            <li>Same setup, but stand with band on the opposite side</li>
            <li>Rotate your forearm inward against the band</li>
            <li>Keep elbow pinned to your side</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>Side-Lying External Rotation</h3>
          <ol>
            <li>Lie on your unaffected side</li>
            <li>Hold a light weight (2-5 lbs) in your top hand</li>
            <li>Keep your elbow bent 90 degrees, pinned to your side</li>
            <li>Rotate forearm up toward ceiling</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>Prone Y, T, W Raises</h3>
          <ol>
            <li>Lie face down on a bench or bed, arms hanging</li>
            <li><strong>Y:</strong> Raise arms at 45-degree angle (Y shape), thumbs up</li>
            <li><strong>T:</strong> Raise arms straight out to sides (T shape), thumbs up</li>
            <li><strong>W:</strong> Elbows bent, squeeze shoulder blades, rotate hands up</li>
          </ol>
          <p><em>Reps: 10-15 of each letter, 2-3 sets</em></p>

          <h3>High-to-Low Rows</h3>
          <ol>
            <li>Anchor a band above shoulder height</li>
            <li>Pull the band down and back, squeezing shoulder blade</li>
            <li>Keep elbow at about 45 degrees from your body</li>
            <li>Control the return</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets per arm</em></p>

          <h3>Low-to-High Pulls</h3>
          <ol>
            <li>Anchor a band at floor level</li>
            <li>Pull the band up and across your body</li>
            <li>Rotate through your shoulder as you pull</li>
            <li>Control the return</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets per arm</em></p>

          <h2>Phase 4: Functional Exercises (Return to Activity)</h2>

          <h3>Wall Push-Ups</h3>
          <ol>
            <li>Stand facing a wall, arms extended</li>
            <li>Lower your chest toward the wall</li>
            <li>Push back to start</li>
            <li>Progress to incline, then floor push-ups</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h3>Scaption</h3>
          <ol>
            <li>Stand with light weights, arms at sides</li>
            <li>Raise arms forward at a 45-degree angle (between front and side)</li>
            <li>Thumbs pointing up</li>
            <li>Lift to shoulder height, lower slowly</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Serratus Punches</h3>
          <ol>
            <li>Lie on your back, arm pointing at ceiling, holding weight</li>
            <li>Without bending elbow, push weight toward ceiling</li>
            <li>This movement comes from your shoulder blade protraction</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h2>Complete Rotator Cuff Routine</h2>
          <p>
            Do this 15-minute routine 3-4 times per week:
          </p>

          <h3>Warm-Up (3 minutes)</h3>
          <ul>
            <li>Arm circles: 20 forward, 20 backward</li>
            <li>Shoulder rolls: 15 forward, 15 backward</li>
            <li>Wall slides: 10 reps</li>
          </ul>

          <h3>Strengthening (10 minutes)</h3>
          <ul>
            <li>External rotation with band: 15 reps × 3 sets</li>
            <li>Internal rotation with band: 15 reps × 3 sets</li>
            <li>Prone Y-T-W: 10 reps each × 2 sets</li>
            <li>Scaption: 10 reps × 2 sets</li>
          </ul>

          <h3>Cool Down (2 minutes)</h3>
          <ul>
            <li>Cross-body shoulder stretch: 30 seconds per side</li>
            <li>Doorway chest stretch: 30 seconds per side</li>
          </ul>

          <h2>Prevention Tips</h2>
          <ul>
            <li><strong>Warm up</strong> — Always warm up shoulders before overhead work</li>
            <li><strong>Balance your training</strong> — Match pushing with pulling exercises</li>
            <li><strong>Don&apos;t skip the small stuff</strong> — Regular rotator cuff work prevents injury</li>
            <li><strong>Watch your posture</strong> — Forward head/rounded shoulders stress the rotator cuff</li>
            <li><strong>Progress gradually</strong> — Sudden increases in overhead work cause problems</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Rotator cuff exercises work—research consistently shows that exercise is as effective as surgery for most rotator cuff problems. The key is consistency and progressive loading.
          </p>
          <p>
            Start with gentle movements, progress to isometrics, then resistance exercises. Most people see significant improvement within 6-12 weeks of consistent exercise.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a structured rotator cuff rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get a progressive program tailored to your current stage of recovery.
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
