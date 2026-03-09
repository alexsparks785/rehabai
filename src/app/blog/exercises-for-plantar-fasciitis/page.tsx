import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Plantar Fasciitis: Heal Your Heel Pain | Foundational Rehab',
  description: 'Stretches and strengthening exercises that actually help plantar fasciitis. Daily routine included.',
};

export default function ExercisesForPlantarFasciitisPage() {
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
            Exercises for Plantar Fasciitis: Heal Your Heel Pain
          </h1>
          <p className="text-xl text-gray-600">
            That stabbing heel pain, especially with your first morning steps? Here&apos;s how to fix it.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Plantar fasciitis is one of the most common causes of heel pain—and one of the most frustrating. That sharp stabbing when you first step out of bed, or after sitting for a while, can make every step miserable. The good news: specific exercises can significantly reduce pain and heal the condition.
          </p>

          <h2>What Is Plantar Fasciitis?</h2>
          <p>
            The plantar fascia is a thick band of tissue running along the bottom of your foot, connecting your heel to your toes. When it gets irritated or develops micro-tears, you get plantar fasciitis.
          </p>
          <p>
            <strong>Classic symptoms:</strong>
          </p>
          <ul>
            <li>Stabbing pain in the heel, especially with first steps in the morning</li>
            <li>Pain after (not during) exercise</li>
            <li>Pain after sitting for long periods</li>
            <li>Pain that may improve as you walk around</li>
          </ul>

          <h2>Why Exercise Helps</h2>
          <ul>
            <li><strong>Stretching</strong> — Lengthens tight calf muscles and plantar fascia</li>
            <li><strong>Strengthening</strong> — Builds load tolerance in the foot and leg</li>
            <li><strong>Blood flow</strong> — Movement promotes healing</li>
          </ul>
          <p>
            Research shows stretching and strengthening are among the most effective treatments for plantar fasciitis.
          </p>

          <h2>Stretching Exercises</h2>

          <h3>1. Plantar Fascia Stretch</h3>
          <ul>
            <li>Sit and cross affected foot over opposite knee</li>
            <li>Grab toes and pull them back toward shin</li>
            <li>Feel stretch in arch and bottom of foot</li>
            <li>Hold 30 seconds, repeat 3 times</li>
            <li>Do before getting out of bed and 3x daily</li>
          </ul>
          <p><em>Most important stretch—do it before your first steps each morning.</em></p>

          <h3>2. Wall Calf Stretch</h3>
          <ul>
            <li>Face wall, hands on wall</li>
            <li>Step affected foot back, keep heel down</li>
            <li>Lean into wall until you feel calf stretch</li>
            <li>Hold 30 seconds, repeat 3 times</li>
          </ul>

          <h3>3. Stair Calf Stretch</h3>
          <ul>
            <li>Stand on step, heels hanging off edge</li>
            <li>Lower heels below step level</li>
            <li>Hold 30-60 seconds</li>
            <li>Can do one leg at a time</li>
          </ul>

          <h3>4. Towel Stretch</h3>
          <ul>
            <li>Sit with legs extended</li>
            <li>Loop towel around ball of foot</li>
            <li>Pull towel toward you, keeping knee straight</li>
            <li>Hold 30 seconds, repeat 3 times</li>
          </ul>

          <h3>5. Frozen Water Bottle Roll</h3>
          <ul>
            <li>Roll a frozen water bottle under your arch</li>
            <li>Apply moderate pressure</li>
            <li>Roll for 5-10 minutes</li>
            <li>Combines massage with ice for pain relief</li>
          </ul>

          <h2>Strengthening Exercises</h2>

          <h3>6. Towel Scrunches</h3>
          <ul>
            <li>Sit with foot on towel on smooth floor</li>
            <li>Scrunch towel toward you using only your toes</li>
            <li>Repeat until towel is fully scrunched</li>
            <li>3 sets</li>
          </ul>

          <h3>7. Marble Pickups</h3>
          <ul>
            <li>Place marbles or small objects on floor</li>
            <li>Pick them up with toes, place in bowl</li>
            <li>20 pickups each foot</li>
            <li>Builds intrinsic foot muscles</li>
          </ul>

          <h3>8. Calf Raises</h3>
          <ul>
            <li>Stand on edge of step</li>
            <li>Rise up on toes</li>
            <li>Lower slowly below step level</li>
            <li>3 sets of 15</li>
            <li>Progress to single-leg when ready</li>
          </ul>

          <h3>9. Single-Leg Balance</h3>
          <ul>
            <li>Stand on affected foot</li>
            <li>Hold for 30-60 seconds</li>
            <li>Challenges foot stabilizers</li>
            <li>Make harder by closing eyes or standing on pillow</li>
          </ul>

          <h3>10. Eccentric Heel Drops</h3>
          <ul>
            <li>Stand on step, affected foot only, heel hanging off</li>
            <li>Rise up on toes using both feet</li>
            <li>Shift weight to affected foot</li>
            <li>Slowly lower heel below step level (3-5 seconds)</li>
            <li>3 sets of 15</li>
          </ul>
          <p><em>Eccentric loading is particularly effective for tendon/fascia issues.</em></p>

          <h2>Daily Routine</h2>
          <p>
            <strong>Morning (before first steps):</strong>
          </p>
          <ul>
            <li>Plantar fascia stretch: 3 × 30 sec</li>
            <li>Towel stretch: 3 × 30 sec</li>
            <li>Ankle circles: 10 each direction</li>
          </ul>
          <p>
            <strong>During day (2-3 times):</strong>
          </p>
          <ul>
            <li>Wall calf stretch: 3 × 30 sec each leg</li>
            <li>Frozen bottle roll: 5-10 min (if pain is high)</li>
          </ul>
          <p>
            <strong>Evening:</strong>
          </p>
          <ul>
            <li>Towel scrunches: 3 sets</li>
            <li>Calf raises: 3 × 15</li>
            <li>All stretches: 30 sec each</li>
          </ul>

          <h2>Additional Tips</h2>
          <ul>
            <li><strong>Supportive shoes</strong> — Avoid going barefoot, especially on hard floors</li>
            <li><strong>Night splint</strong> — Keeps foot stretched overnight</li>
            <li><strong>Ice</strong> — 15-20 minutes after activity if painful</li>
            <li><strong>Gradual increase</strong> — Don&apos;t suddenly increase walking or running</li>
            <li><strong>Patience</strong> — Plantar fasciitis takes weeks to months to fully heal</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Plantar fasciitis is stubborn but treatable. Consistent stretching—especially before your first steps each morning—combined with foot strengthening can significantly reduce pain and promote healing.
          </p>
          <p>
            Be patient and consistent. Most cases improve significantly within 6-12 weeks of proper treatment, though full resolution may take longer.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete plantar fasciitis program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get daily guided exercises to heal your heel pain.
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
