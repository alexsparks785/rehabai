import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Shin Splints: Stop Shin Pain and Run Again | Foundational Rehab',
  description: 'Shin splints ruining your runs? Learn the best exercises, stretches, and rehab protocol to heal shin pain and prevent it from coming back.',
};

export default function ExercisesForShinSplintsPage() {
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
            Exercises for Shin Splints: Stop Shin Pain and Run Again
          </h1>
          <p className="text-xl text-gray-600">
            Shin splints are the most common running injury—and one of the most preventable. Here&apos;s how to fix them.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            That aching, throbbing pain along your shin bone after running? That&apos;s medial tibial stress syndrome—commonly called shin splints. It&apos;s your body&apos;s way of saying you&apos;ve done too much, too soon.
          </p>
          <p>
            The good news: shin splints respond well to the right exercises, and you can prevent them from ever coming back.
          </p>

          <h2>What Causes Shin Splints?</h2>
          <ul>
            <li><strong>Too much, too soon:</strong> Sudden increase in running volume or intensity</li>
            <li><strong>Hard surfaces:</strong> Running on concrete vs. trails</li>
            <li><strong>Worn-out shoes:</strong> Replace every 300-500 miles</li>
            <li><strong>Flat feet or overpronation:</strong> Puts extra stress on the inner shin</li>
            <li><strong>Weak calves and tibialis:</strong> The muscles can&apos;t handle the load</li>
            <li><strong>Tight calves:</strong> Altered biomechanics during running</li>
          </ul>

          <h2>Acute Phase: Pain Management (Week 1-2)</h2>

          <h3>Rest from Running</h3>
          <p>
            Painful truth: you need to back off running temporarily. Continue with low-impact activities like swimming, cycling, or pool running that don&apos;t aggravate the shin.
          </p>

          <h3>Ice Massage</h3>
          <ol>
            <li>Freeze water in a paper cup</li>
            <li>Peel back the paper to expose ice</li>
            <li>Massage along the painful shin area for 5-10 minutes</li>
            <li>Do 2-3 times daily</li>
          </ol>

          <h3>Gentle Calf Stretches</h3>
          <p>
            Tight calves contribute to shin splints. Stretch gently:
          </p>
          <ul>
            <li>Wall calf stretch (straight knee): 30 seconds × 3</li>
            <li>Wall calf stretch (bent knee): 30 seconds × 3</li>
          </ul>

          <h2>Rehab Phase: Strengthening (Weeks 2-6)</h2>

          <h3>Toe Raises (Tibialis Anterior)</h3>
          <ol>
            <li>Stand with back against wall</li>
            <li>Walk feet out about 12 inches from wall</li>
            <li>Keep heels on ground, lift your toes up toward your shins</li>
            <li>Hold 2 seconds, lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>This strengthens the tibialis anterior—the muscle on the front of your shin.</p>

          <h3>Heel Walks</h3>
          <ol>
            <li>Stand with feet hip-width apart</li>
            <li>Lift your toes off the ground, balance on heels</li>
            <li>Walk forward on your heels for 20-30 steps</li>
            <li>Rest, repeat</li>
          </ol>
          <p><em>Sets: 3 rounds of 20-30 steps</em></p>

          <h3>Toe Walks</h3>
          <ol>
            <li>Rise up onto your toes</li>
            <li>Walk forward while staying on toes</li>
            <li>Focus on pushing through big toe</li>
          </ol>
          <p><em>Sets: 3 rounds of 20-30 steps</em></p>

          <h3>Single-Leg Calf Raises</h3>
          <ol>
            <li>Stand on one leg, hold something for balance</li>
            <li>Rise up onto your toes</li>
            <li>Lower slowly (3-5 seconds)</li>
            <li>Focus on the controlled lowering</li>
          </ol>
          <p><em>Reps: 12-15 per leg, 3 sets</em></p>

          <h3>Towel Scrunches</h3>
          <ol>
            <li>Sit with foot flat on a towel</li>
            <li>Scrunch the towel toward you using only your toes</li>
            <li>Spread towel out, repeat</li>
          </ol>
          <p><em>Reps: 20-30 scrunches, 2-3 sets per foot</em></p>

          <h3>Resistance Band Dorsiflexion</h3>
          <ol>
            <li>Sit with leg extended, band around ball of foot</li>
            <li>Anchor band to something sturdy in front of you</li>
            <li>Pull toes toward your shin against resistance</li>
            <li>Control the return</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h2>Hip and Glute Strengthening</h2>
          <p>
            Weak hips cause the leg to rotate inward during running, overloading the shin. Add these:
          </p>

          <h3>Clamshells</h3>
          <ol>
            <li>Lie on side, knees bent 90°, feet together</li>
            <li>Keep feet touching, lift top knee</li>
            <li>Don&apos;t let hips rotate back</li>
          </ol>
          <p><em>Reps: 20 per side, 3 sets</em></p>

          <h3>Side-Lying Leg Raises</h3>
          <ol>
            <li>Lie on side, bottom leg bent, top leg straight</li>
            <li>Lift top leg to 45°, keep toe pointing forward</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20 per side, 3 sets</em></p>

          <h3>Single-Leg Glute Bridge</h3>
          <ol>
            <li>Lie on back, one knee bent, other leg extended</li>
            <li>Drive through planted heel to lift hips</li>
            <li>Keep hips level</li>
          </ol>
          <p><em>Reps: 10-12 per side, 3 sets</em></p>

          <h2>Complete Shin Splint Rehab Routine</h2>

          <h3>Daily Routine (15 minutes)</h3>
          <ul>
            <li>Calf stretch (straight knee): 30 sec × 2 per side</li>
            <li>Calf stretch (bent knee): 30 sec × 2 per side</li>
            <li>Toe raises: 20 reps × 3</li>
            <li>Heel walks: 30 steps × 2</li>
            <li>Single-leg calf raises: 12 reps × 2 per leg</li>
            <li>Clamshells: 15 reps × 2 per side</li>
          </ul>

          <h2>Return to Running Protocol</h2>
          <p>
            Don&apos;t rush back. Follow this progression:
          </p>
          <ol>
            <li><strong>Week 1:</strong> Pain-free walking 30 minutes</li>
            <li><strong>Week 2:</strong> Walk-run intervals (1 min run, 2 min walk × 10)</li>
            <li><strong>Week 3:</strong> Run-walk intervals (2 min run, 1 min walk × 10)</li>
            <li><strong>Week 4:</strong> Continuous easy running 15-20 minutes</li>
            <li><strong>Week 5+:</strong> Gradually increase by 10% per week</li>
          </ol>
          <p>
            If pain returns at any stage, go back one step.
          </p>

          <h2>Prevention: Keep Shin Splints Away</h2>
          <ul>
            <li><strong>10% rule:</strong> Never increase weekly mileage by more than 10%</li>
            <li><strong>Fresh shoes:</strong> Replace running shoes every 300-500 miles</li>
            <li><strong>Vary surfaces:</strong> Mix in trails, grass, track—not all concrete</li>
            <li><strong>Strength train:</strong> Maintain calf and hip strength year-round</li>
            <li><strong>Warm up:</strong> Dynamic stretches before every run</li>
            <li><strong>Consider gait analysis:</strong> If problems persist, see a running specialist</li>
            <li><strong>Cross-train:</strong> Don&apos;t run every day—mix in cycling, swimming</li>
          </ul>

          <h2>When to See a Doctor</h2>
          <ul>
            <li>Pain that doesn&apos;t improve with rest after 2-3 weeks</li>
            <li>Sharp, localized pain at one spot (possible stress fracture)</li>
            <li>Pain at rest or at night</li>
            <li>Visible swelling or warmth</li>
          </ul>
          <p>
            A stress fracture requires different treatment—X-ray or MRI may be needed.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Shin splints are common but very fixable. The formula:
          </p>
          <ol>
            <li>Rest from running (temporarily)</li>
            <li>Strengthen tibialis anterior, calves, and hips</li>
            <li>Stretch tight calves</li>
            <li>Return to running gradually</li>
            <li>Prevent recurrence with smart training</li>
          </ol>
          <p>
            Most runners are back to full training within 4-6 weeks with proper rehab.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a structured return-to-running program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get a personalized rehab plan with daily exercises and running progressions.
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
