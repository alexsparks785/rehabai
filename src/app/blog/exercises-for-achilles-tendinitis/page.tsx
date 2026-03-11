import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Achilles Tendinitis: Heal Your Achilles | Foundational Rehab',
  description: 'Achilles tendinitis causing heel pain? Learn the best exercises, stretches, and eccentric loading protocol to heal your Achilles tendon and return to activity.',
};

export default function ExercisesForAchillesTendinitisPage() {
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
            Exercises for Achilles Tendinitis: Heal Your Achilles
          </h1>
          <p className="text-xl text-gray-600">
            Achilles tendinitis is stubborn, but eccentric exercise is proven to work. Here&apos;s the complete protocol.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Your Achilles tendon—the thick band connecting your calf muscles to your heel—is the strongest tendon in your body. It&apos;s also prone to overuse injuries, especially in runners and athletes.
          </p>
          <p>
            The good news: exercise is the most effective treatment for Achilles tendinitis. Specifically, eccentric exercises have decades of research supporting their effectiveness.
          </p>

          <h2>Types of Achilles Problems</h2>
          <ul>
            <li><strong>Insertional tendinitis:</strong> Pain where tendon attaches to heel bone</li>
            <li><strong>Mid-portion tendinitis:</strong> Pain 2-6 cm above the heel (most common)</li>
            <li><strong>Tendinosis:</strong> Chronic degeneration without acute inflammation</li>
          </ul>
          <p>
            The exercises below work for all types, with some modifications for insertional tendinitis.
          </p>

          <h2>The Alfredson Protocol (Gold Standard)</h2>
          <p>
            The Alfredson protocol is the most studied and effective treatment for mid-portion Achilles tendinitis. It consists of two eccentric exercises done daily.
          </p>

          <h3>Exercise 1: Straight-Knee Eccentric Heel Drop</h3>
          <ol>
            <li>Stand on a step with balls of feet on edge, heels hanging off</li>
            <li>Rise up on your toes using BOTH legs</li>
            <li>Shift weight to your AFFECTED leg</li>
            <li>Slowly lower your heel below step level over 3-5 seconds (AFFECTED LEG ONLY)</li>
            <li>Keep your knee STRAIGHT throughout</li>
            <li>Use the good leg to help push back up, then repeat</li>
          </ol>
          <p><em>Reps: 15 reps × 3 sets, twice daily = 90 reps/day</em></p>
          <p><strong>Key:</strong> The lowering phase is the treatment. Use your good leg to get back up.</p>

          <h3>Exercise 2: Bent-Knee Eccentric Heel Drop</h3>
          <ol>
            <li>Same setup on a step</li>
            <li>Rise up on toes using both legs</li>
            <li>Shift to affected leg, BEND YOUR KNEE slightly</li>
            <li>Lower heel below step level over 3-5 seconds</li>
            <li>Keep knee bent throughout</li>
          </ol>
          <p><em>Reps: 15 reps × 3 sets, twice daily = 90 reps/day</em></p>
          <p>The bent-knee version targets the soleus muscle and lower Achilles.</p>

          <h3>Alfredson Protocol Rules</h3>
          <ul>
            <li><strong>Expect discomfort:</strong> Mild pain during exercise is okay and expected</li>
            <li><strong>Stop if severe:</strong> Sharp or worsening pain means back off</li>
            <li><strong>Progress with weight:</strong> When exercises become painless, add a backpack with weight</li>
            <li><strong>Do it daily:</strong> The protocol requires 12 weeks of daily exercise</li>
            <li><strong>Twice daily:</strong> Morning and evening sessions</li>
          </ul>

          <h2>Modified Protocol for Insertional Tendinitis</h2>
          <p>
            If your pain is at the heel bone attachment, full heel drops below neutral can irritate the tendon. Modify the exercises:
          </p>
          <ul>
            <li>Do heel drops on FLAT GROUND instead of a step</li>
            <li>Only lower to neutral (flat foot), not below</li>
            <li>Progress to step exercises only when flat-ground is painless</li>
          </ul>

          <h2>Supporting Exercises</h2>

          <h3>Calf Stretches</h3>
          <p>Stretch AFTER eccentric exercises, not before:</p>

          <h4>Gastrocnemius Stretch (Straight Knee)</h4>
          <ol>
            <li>Face a wall, step back with affected leg</li>
            <li>Keep back knee straight, heel on ground</li>
            <li>Lean into wall until you feel calf stretch</li>
          </ol>
          <p><em>Hold: 30-45 seconds, 3 times</em></p>

          <h4>Soleus Stretch (Bent Knee)</h4>
          <ol>
            <li>Same position but bend your back knee</li>
            <li>Keep heel on ground</li>
            <li>Feel the stretch lower in the calf, near Achilles</li>
          </ol>
          <p><em>Hold: 30-45 seconds, 3 times</em></p>

          <h3>Isometric Holds (For High Pain)</h3>
          <p>If pain is too high for eccentrics, start with isometrics:</p>
          <ol>
            <li>Stand on affected leg, rise onto toes</li>
            <li>Hold at the TOP position</li>
            <li>No movement—just hold</li>
          </ol>
          <p><em>Hold: 30-45 seconds × 4-5 sets, several times daily</em></p>
          <p>Isometrics reduce pain and prepare the tendon for eccentric work.</p>

          <h3>Calf Strengthening (Later Phases)</h3>
          <p>Once eccentrics are pain-free, add concentric strength work:</p>
          <ul>
            <li>Standing calf raises: 3 × 15-20</li>
            <li>Single-leg calf raises: 3 × 10-15</li>
            <li>Seated calf raises: 3 × 15-20</li>
          </ul>

          <h2>Complete Daily Protocol</h2>

          <h3>Morning Session (15 minutes)</h3>
          <ol>
            <li>Light warm-up: 2-3 minutes walking or cycling</li>
            <li>Straight-knee eccentric drops: 15 × 3 sets</li>
            <li>Bent-knee eccentric drops: 15 × 3 sets</li>
            <li>Calf stretches: 30 seconds × 3 each position</li>
          </ol>

          <h3>Evening Session (15 minutes)</h3>
          <p>Repeat the morning protocol.</p>

          <h2>Recovery Timeline</h2>
          <ul>
            <li><strong>Weeks 1-2:</strong> May feel worse before better (normal)</li>
            <li><strong>Weeks 2-4:</strong> Pain should start decreasing</li>
            <li><strong>Weeks 6-8:</strong> Significant improvement for most</li>
            <li><strong>Week 12:</strong> Full protocol completion, major improvement</li>
            <li><strong>Months 3-6:</strong> Continue maintenance and gradual return to sport</li>
          </ul>

          <h2>Activity Modifications</h2>
          <ul>
            <li><strong>Running:</strong> Reduce or stop temporarily; cross-train with cycling or swimming</li>
            <li><strong>Walking:</strong> Usually okay; wear supportive shoes</li>
            <li><strong>Hills and stairs:</strong> Avoid excessive amounts during acute phase</li>
            <li><strong>Jumping:</strong> Avoid until significantly improved</li>
            <li><strong>Heel drop shoes:</strong> Slightly raised heel can reduce strain</li>
          </ul>

          <h2>When to Progress</h2>
          <p>Add weight (backpack with books/weights) when:</p>
          <ul>
            <li>Bodyweight eccentrics are pain-free</li>
            <li>Start with 5-10 lbs</li>
            <li>Progress by 5 lbs when current weight becomes pain-free</li>
          </ul>

          <h2>Return to Running</h2>
          <ol>
            <li>Pain-free walking for 30+ minutes</li>
            <li>Pain-free eccentric exercises with added weight</li>
            <li>Start with walk-run intervals (1 min run, 2 min walk)</li>
            <li>Progress gradually over 4-6 weeks</li>
            <li>Continue eccentric exercises throughout return phase</li>
          </ol>

          <h2>When to See a Doctor</h2>
          <ul>
            <li>No improvement after 6 weeks of consistent exercise</li>
            <li>Severe pain or sudden pop (possible rupture)</li>
            <li>Significant swelling or bruising</li>
            <li>Pain at rest or at night</li>
            <li>Weakness pushing off the affected foot</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Achilles tendinitis responds to load, specifically eccentric load. The Alfredson protocol is time-tested and effective, but it requires patience and consistency.
          </p>
          <p>
            Expect 12 weeks minimum. Don&apos;t stop when you feel better—complete the full protocol to prevent recurrence.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a structured Achilles rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get daily reminders and track your progress through the 12-week protocol.
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
