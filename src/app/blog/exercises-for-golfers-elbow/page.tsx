import Link from 'next/link';

export const metadata = {
  title: "Exercises for Golfer's Elbow: Heal Medial Epicondylitis | Foundational Rehab",
  description: "Golfer's elbow causing inner elbow pain? Learn the best exercises and stretches to heal medial epicondylitis and get back to full grip strength.",
};

export default function ExercisesForGolfersElbowPage() {
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
            Exercises for Golfer&apos;s Elbow: Heal Medial Epicondylitis
          </h1>
          <p className="text-xl text-gray-600">
            Golfer&apos;s elbow responds well to the right exercises. Here&apos;s a complete rehab protocol for inner elbow pain.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Golfer&apos;s elbow (medial epicondylitis) causes pain on the inner part of your elbow—the opposite side from tennis elbow. Despite the name, it&apos;s common in anyone who does repetitive gripping, throwing, or wrist flexion.
          </p>
          <p>
            Like tennis elbow, exercise is the most effective treatment. The key is loading the right tendons in the right way.
          </p>

          <h2>Golfer&apos;s Elbow vs. Tennis Elbow</h2>
          <ul>
            <li><strong>Golfer&apos;s elbow:</strong> Pain on the INNER elbow (medial side) — affects wrist flexors</li>
            <li><strong>Tennis elbow:</strong> Pain on the OUTER elbow (lateral side) — affects wrist extensors</li>
          </ul>
          <p>
            The rehab principles are similar, but you&apos;re targeting different muscles.
          </p>

          <h2>Common Causes</h2>
          <ul>
            <li>Golf (especially with poor grip technique)</li>
            <li>Throwing sports (baseball, javelin)</li>
            <li>Racket sports</li>
            <li>Weight training (especially curls and pull-ups)</li>
            <li>Rock climbing</li>
            <li>Repetitive gripping or twisting</li>
            <li>Manual labor</li>
          </ul>

          <h2>Phase 1: Pain Relief (Weeks 1-2)</h2>

          <h3>Wrist Flexor Stretch</h3>
          <ol>
            <li>Extend your affected arm in front, palm facing up</li>
            <li>Use your other hand to pull your fingers down and back</li>
            <li>Keep your elbow straight</li>
            <li>Feel the stretch on the inside of your forearm</li>
          </ol>
          <p><em>Hold: 30 seconds, 3-4 times daily</em></p>

          <h3>Wrist Extensor Stretch</h3>
          <ol>
            <li>Extend your arm, palm facing down</li>
            <li>Use your other hand to push your wrist down</li>
            <li>Feel the stretch on top of your forearm</li>
          </ol>
          <p><em>Hold: 30 seconds, 3-4 times daily</em></p>

          <h3>Forearm Flexor Massage</h3>
          <ol>
            <li>Find the tender muscles on the inside of your forearm</li>
            <li>Apply sustained pressure with thumb or a ball</li>
            <li>Work from elbow toward wrist</li>
            <li>Hold tender spots for 30-60 seconds</li>
          </ol>
          <p><em>Duration: 2-3 minutes, twice daily</em></p>

          <h2>Phase 2: Isometric Loading (Weeks 2-4)</h2>

          <h3>Isometric Wrist Flexion</h3>
          <ol>
            <li>Rest your forearm on a table, wrist over edge, palm up</li>
            <li>Place your other hand on your palm</li>
            <li>Try to curl your wrist up while resisting with your other hand</li>
            <li>No movement—just tension</li>
            <li>Hold at 30-50% effort for 30-45 seconds</li>
          </ol>
          <p><em>Sets: 4-5 holds, twice daily</em></p>

          <h3>Isometric Pronation</h3>
          <ol>
            <li>Hold a hammer or stick vertically</li>
            <li>Try to rotate your forearm inward (pronation)</li>
            <li>Use your other hand to resist the movement</li>
            <li>Hold 30-45 seconds</li>
          </ol>
          <p><em>Sets: 4-5 holds, twice daily</em></p>

          <h2>Phase 3: Eccentric Loading (Weeks 4-12)</h2>
          <p>
            Eccentric exercises—lowering a weight under control—are the gold standard for tendon rehab.
          </p>

          <h3>Reverse Tyler Twist</h3>
          <p>Using a FlexBar or similar resistance bar:</p>
          <ol>
            <li>Hold the bar vertically, affected arm at BOTTOM, palm facing you</li>
            <li>Grip the top with your other hand, palm facing away</li>
            <li>Twist the bar with your TOP hand (wringing motion)</li>
            <li>Keep it twisted, extend both arms in front</li>
            <li>Slowly un-twist by letting your affected (bottom) wrist give way</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets, once daily</em></p>

          <h3>Eccentric Wrist Curl</h3>
          <ol>
            <li>Sit with forearm on thigh, wrist over knee, palm up, holding light weight</li>
            <li>Use your other hand to help curl the weight UP</li>
            <li>Remove helper hand and SLOWLY lower the weight over 3-5 seconds</li>
            <li>Focus on the controlled lowering phase</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets. Start with 1-2 lbs.</em></p>

          <h3>Eccentric Pronation</h3>
          <ol>
            <li>Hold a hammer by the handle, elbow bent 90 degrees</li>
            <li>Use your other hand to rotate the hammer head outward (supination)</li>
            <li>Remove helper hand and slowly let the hammer rotate back inward</li>
            <li>Control the descent over 3-5 seconds</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h2>Phase 4: Strengthening (Weeks 8+)</h2>

          <h3>Wrist Curls (Concentric + Eccentric)</h3>
          <ol>
            <li>Forearm on thigh, palm up, holding weight</li>
            <li>Curl weight up, then lower slowly</li>
            <li>Full range of motion both directions</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Reverse Wrist Curls</h3>
          <ol>
            <li>Palm down, curl weight up (wrist extension)</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Pronation/Supination with Hammer</h3>
          <ol>
            <li>Hold hammer by handle, elbow bent 90 degrees at side</li>
            <li>Rotate forearm so hammer head moves side to side</li>
            <li>Control both directions</li>
          </ol>
          <p><em>Reps: 15-20 each direction, 3 sets</em></p>

          <h3>Grip Strengthening</h3>
          <ul>
            <li>Ball squeezes: 15-20 reps, 3 sets</li>
            <li>Towel wring: 10 reps each direction</li>
            <li>Farmer&apos;s carries: 30-60 second holds</li>
          </ul>

          <h2>Complete Golfer&apos;s Elbow Routine</h2>

          <h3>Daily Protocol (15 minutes)</h3>

          <h4>Warm-Up (2 minutes)</h4>
          <ul>
            <li>Wrist circles: 20 each direction</li>
            <li>Finger spreads: 20 reps</li>
            <li>Forearm massage: 1 minute</li>
          </ul>

          <h4>Stretching (2 minutes)</h4>
          <ul>
            <li>Wrist flexor stretch: 30 seconds × 2</li>
            <li>Wrist extensor stretch: 30 seconds × 2</li>
          </ul>

          <h4>Loading (10 minutes)</h4>
          <ul>
            <li>Reverse Tyler Twist: 15 reps × 3 sets</li>
            <li>Eccentric wrist curls: 15 reps × 2 sets</li>
            <li>Pronation/supination: 15 reps × 2 sets</li>
          </ul>

          <h2>Modifications for Activities</h2>
          <ul>
            <li><strong>Golf:</strong> Check grip pressure, use larger grips, warm up thoroughly</li>
            <li><strong>Climbing:</strong> Reduce volume, avoid crimping, strengthen antagonists</li>
            <li><strong>Weight training:</strong> Use straps for pulling, avoid heavy curls</li>
            <li><strong>Work:</strong> Take breaks, use ergonomic tools, stretch frequently</li>
          </ul>

          <h2>Recovery Timeline</h2>
          <ul>
            <li><strong>Weeks 1-4:</strong> Pain should start decreasing</li>
            <li><strong>Weeks 4-8:</strong> Significant improvement</li>
            <li><strong>Weeks 8-12:</strong> Return to normal activities</li>
            <li><strong>3-6 months:</strong> Full recovery for stubborn cases</li>
          </ul>

          <h2>When to See a Doctor</h2>
          <ul>
            <li>No improvement after 6-8 weeks of consistent exercise</li>
            <li>Severe pain or significant weakness</li>
            <li>Numbness or tingling in fingers</li>
            <li>Pain at rest or at night</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Golfer&apos;s elbow is frustrating but highly treatable with the right exercises. The reverse Tyler Twist and eccentric wrist curls are your main tools.
          </p>
          <p>
            Stay consistent—tendons heal slowly. Most people see significant improvement within 6-12 weeks.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a structured elbow rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive exercises tailored to your recovery stage.
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
