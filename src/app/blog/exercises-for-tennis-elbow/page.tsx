import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Tennis Elbow: Heal Lateral Epicondylitis | Foundational Rehab',
  description: 'Tennis elbow causing outer elbow pain? Learn the best exercises, stretches, and rehab protocol to heal lateral epicondylitis and get back to full strength.',
};

export default function ExercisesForTennisElbowPage() {
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
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Tennis Elbow: Heal Lateral Epicondylitis
          </h1>
          <p className="text-xl text-gray-600">
            Tennis elbow responds remarkably well to the right exercises. Here&apos;s a complete rehab protocol to eliminate pain and rebuild strength.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Tennis elbow (lateral epicondylitis) causes pain on the outer part of your elbow. Despite the name, most people who get it have never played tennis—it&apos;s an overuse injury from any repetitive gripping or wrist extension.
          </p>
          <p>
            The good news: exercise is the most effective treatment. Research consistently shows that specific exercises outperform rest, injections, and even surgery for most cases.
          </p>

          <h2>Understanding Tennis Elbow</h2>
          <p>
            Tennis elbow affects the tendons that attach your forearm extensor muscles to the outer elbow. These muscles extend your wrist and fingers.
          </p>
          <p>Common causes include:</p>
          <ul>
            <li>Repetitive gripping (tools, mouse, racket)</li>
            <li>Typing and computer work</li>
            <li>Manual labor</li>
            <li>Sports with gripping (tennis, golf, climbing)</li>
            <li>Sudden increase in activity</li>
          </ul>

          <h2>Phase 1: Pain Relief (Days 1-14)</h2>
          <p>
            When pain is high, focus on reducing irritation while maintaining gentle movement.
          </p>

          <h3>Wrist Extensor Stretch</h3>
          <ol>
            <li>Extend your affected arm in front, palm down</li>
            <li>Use your other hand to gently bend your wrist down</li>
            <li>Keep your elbow straight</li>
            <li>Feel the stretch on top of your forearm</li>
          </ol>
          <p><em>Hold: 30 seconds, 3-4 times daily</em></p>

          <h3>Wrist Flexor Stretch</h3>
          <ol>
            <li>Extend your arm in front, palm up</li>
            <li>Use your other hand to bend your wrist down</li>
            <li>Feel the stretch on the underside of your forearm</li>
          </ol>
          <p><em>Hold: 30 seconds, 3-4 times daily</em></p>

          <h3>Forearm Self-Massage</h3>
          <ol>
            <li>Find tender spots in your forearm extensor muscles</li>
            <li>Apply sustained pressure with your thumb or a ball</li>
            <li>Hold on tender points for 30-60 seconds</li>
            <li>Work from elbow toward wrist</li>
          </ol>
          <p><em>Duration: 2-3 minutes, 2-3 times daily</em></p>

          <h2>Phase 2: Isometric Loading (Weeks 2-4)</h2>
          <p>
            Isometric exercises (muscle contraction without movement) begin rebuilding tendon strength with minimal irritation.
          </p>

          <h3>Isometric Wrist Extension</h3>
          <ol>
            <li>Rest your forearm on a table, wrist hanging off edge, palm down</li>
            <li>Place your other hand on top of the affected hand</li>
            <li>Try to lift your wrist up while resisting with your other hand</li>
            <li>No movement should occur—just tension</li>
            <li>Hold 30-45 seconds at 30-50% effort</li>
          </ol>
          <p><em>Sets: 4-5 holds, twice daily</em></p>

          <h3>Isometric Grip</h3>
          <ol>
            <li>Hold a tennis ball or soft object</li>
            <li>Squeeze at about 30% of max effort</li>
            <li>Hold for 30-45 seconds</li>
          </ol>
          <p><em>Sets: 4-5 holds, twice daily</em></p>

          <h2>Phase 3: Eccentric Loading (Weeks 4-12)</h2>
          <p>
            Eccentric exercises (lengthening under load) are the gold standard for tendon rehab. Research shows they&apos;re the most effective treatment for tennis elbow.
          </p>

          <h3>Tyler Twist (Best Exercise for Tennis Elbow)</h3>
          <p>You need a FlexBar or similar resistance bar:</p>
          <ol>
            <li>Hold the bar vertically, affected arm at top, palm facing away</li>
            <li>Grip the bottom with your other hand, palm facing you</li>
            <li>Twist the bar with your bottom hand (wringing motion)</li>
            <li>Keep the bar twisted, extend both arms in front of you</li>
            <li>Slowly un-twist by letting your affected wrist drop (this is the eccentric part)</li>
            <li>The load should be on your affected arm as it slowly gives way</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets, once daily</em></p>

          <h3>Eccentric Wrist Extension (Alternative)</h3>
          <ol>
            <li>Rest forearm on table, wrist over edge, palm down, holding light weight</li>
            <li>Use your other hand to help lift the weight (wrist extension)</li>
            <li>Remove the helper hand and slowly lower the weight over 3-5 seconds</li>
            <li>Focus on the slow, controlled lowering phase</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets, once daily. Start with 1-2 lbs.</em></p>

          <h3>Eccentric Wrist Supination</h3>
          <ol>
            <li>Hold a hammer or weighted stick by the handle</li>
            <li>Rest your forearm on your thigh, weight pointing up</li>
            <li>Use your other hand to rotate the weight outward (supination)</li>
            <li>Slowly control the weight back to start over 3-5 seconds</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h2>Phase 4: Strengthening (Weeks 8+)</h2>
          <p>
            Once pain is minimal, build comprehensive forearm and grip strength.
          </p>

          <h3>Wrist Curls (Both Directions)</h3>
          <ul>
            <li><strong>Wrist extension:</strong> Palm down, curl weight up</li>
            <li><strong>Wrist flexion:</strong> Palm up, curl weight up</li>
          </ul>
          <p><em>Reps: 12-15, 3 sets each</em></p>

          <h3>Pronation/Supination</h3>
          <ol>
            <li>Hold a hammer by the handle, elbow bent 90 degrees</li>
            <li>Rotate your forearm so the hammer head moves side to side</li>
            <li>Control both directions</li>
          </ol>
          <p><em>Reps: 15-20 each direction, 3 sets</em></p>

          <h3>Grip Strengthening</h3>
          <ul>
            <li>Hand gripper squeezes: 15-20 reps, 3 sets</li>
            <li>Farmer&apos;s carries: 30-60 second holds</li>
            <li>Towel wring: Twist a wet towel, 10 reps each direction</li>
          </ul>

          <h2>Complete Tennis Elbow Routine</h2>
          <p>
            Follow this daily routine for best results:
          </p>

          <h3>Warm-Up (2 minutes)</h3>
          <ul>
            <li>Wrist circles: 20 each direction</li>
            <li>Finger spreads and fists: 20 reps</li>
            <li>Forearm massage: 1 minute</li>
          </ul>

          <h3>Stretching (2 minutes)</h3>
          <ul>
            <li>Wrist extensor stretch: 30 seconds × 2</li>
            <li>Wrist flexor stretch: 30 seconds × 2</li>
          </ul>

          <h3>Strengthening (10 minutes)</h3>
          <ul>
            <li>Tyler Twist (or eccentric wrist extension): 15 reps × 3 sets</li>
            <li>Pronation/supination: 15 reps × 2 sets</li>
            <li>Grip work: 15 reps × 2 sets</li>
          </ul>

          <h2>Modifications for Daily Life</h2>
          <ul>
            <li><strong>Use a counterforce brace</strong> — Worn just below the elbow, reduces tendon load</li>
            <li><strong>Modify grip</strong> — Use larger handles, looser grip when possible</li>
            <li><strong>Take breaks</strong> — Break up repetitive tasks</li>
            <li><strong>Ergonomic setup</strong> — Neutral wrist position for computer work</li>
            <li><strong>Ice after activity</strong> — 10-15 minutes if needed</li>
          </ul>

          <h2>Recovery Timeline</h2>
          <ul>
            <li><strong>Weeks 1-4:</strong> Pain should begin decreasing</li>
            <li><strong>Weeks 4-8:</strong> Significant improvement in most cases</li>
            <li><strong>Weeks 8-12:</strong> Return to normal activities</li>
            <li><strong>3-6 months:</strong> Full recovery for stubborn cases</li>
          </ul>

          <h2>When to See a Doctor</h2>
          <ul>
            <li>No improvement after 6-8 weeks of consistent exercise</li>
            <li>Severe pain or weakness</li>
            <li>Numbness or tingling in your hand</li>
            <li>Pain at rest or at night</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Tennis elbow is frustrating, but it&apos;s very treatable with the right exercises. The Tyler Twist and eccentric loading are backed by strong research. Stay consistent—tendons heal slowly, but they do heal.
          </p>
          <p>
            Most people see significant improvement within 6-12 weeks of daily eccentric exercise.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a structured tennis elbow rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive exercises with video guidance tailored to your recovery stage.
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
