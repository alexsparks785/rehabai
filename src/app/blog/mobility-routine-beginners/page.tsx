import Link from 'next/link';

export const metadata = {
  title: 'Mobility Routine for Beginners: Move Better in 15 Minutes | Foundational Rehab',
  description: 'A simple daily mobility routine to improve flexibility, reduce stiffness, and move better. Perfect for beginners.',
};

export default function MobilityRoutineBeginnersPage() {
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
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Mobility</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mobility Routine for Beginners: Move Better in 15 Minutes
          </h1>
          <p className="text-xl text-gray-600">
            Stiff and creaky? This daily routine will change how you move and feel.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Mobility isn&apos;t just flexibility—it&apos;s the ability to move your joints through their full range of motion with control. If you feel stiff, restricted, or just &quot;old,&quot; a daily mobility routine can make a dramatic difference in how you feel and function.
          </p>

          <h2>Mobility vs. Flexibility</h2>
          <ul>
            <li><strong>Flexibility:</strong> Passive range of motion (how far you can be stretched)</li>
            <li><strong>Mobility:</strong> Active range of motion (how far you can move under your own control)</li>
          </ul>
          <p>
            Mobility is more functional—you need to both stretch AND control the range.
          </p>

          <h2>The Complete Beginner Mobility Routine</h2>
          <p>
            This routine takes about 15 minutes and covers your whole body. Do it daily—morning is ideal.
          </p>

          <h3>Neck (1-2 minutes)</h3>

          <h4>Neck Circles</h4>
          <ul>
            <li>Slowly roll head in a circle</li>
            <li>5 circles each direction</li>
          </ul>

          <h4>Neck Tilts</h4>
          <ul>
            <li>Ear toward shoulder, hold 15 sec each side</li>
          </ul>

          <h4>Chin Tucks</h4>
          <ul>
            <li>Pull chin straight back</li>
            <li>10 reps, hold 3 seconds each</li>
          </ul>

          <h3>Shoulders (2 minutes)</h3>

          <h4>Shoulder Circles</h4>
          <ul>
            <li>10 forward, 10 backward</li>
          </ul>

          <h4>Arm Circles</h4>
          <ul>
            <li>Big circles with straight arms</li>
            <li>10 forward, 10 backward</li>
          </ul>

          <h4>Wall Slides</h4>
          <ul>
            <li>Back against wall, arms in &quot;goalpost&quot; position</li>
            <li>Slide arms up and down, keeping contact with wall</li>
            <li>10 reps</li>
          </ul>

          <h3>Thoracic Spine (2 minutes)</h3>

          <h4>Cat-Cow</h4>
          <ul>
            <li>On hands and knees</li>
            <li>Alternate arching and rounding back</li>
            <li>10 slow reps</li>
          </ul>

          <h4>Thread the Needle</h4>
          <ul>
            <li>On hands and knees</li>
            <li>Reach one arm under body, rotating spine</li>
            <li>5 reps each side, hold 3 seconds</li>
          </ul>

          <h4>Thoracic Extension on Foam Roller</h4>
          <ul>
            <li>Foam roller under upper back</li>
            <li>Hands behind head</li>
            <li>Extend over roller, return</li>
            <li>10 reps</li>
          </ul>

          <h3>Hips (4-5 minutes)</h3>

          <h4>Hip Circles</h4>
          <ul>
            <li>Standing on one leg, circle other leg</li>
            <li>10 circles each direction, each leg</li>
          </ul>

          <h4>90/90 Stretch</h4>
          <ul>
            <li>Sit with both legs at 90° angles</li>
            <li>Hold 30 seconds each side</li>
          </ul>

          <h4>Kneeling Hip Flexor Stretch</h4>
          <ul>
            <li>Kneel, tuck pelvis, lean forward slightly</li>
            <li>30 seconds each side</li>
          </ul>

          <h4>Frog Stretch</h4>
          <ul>
            <li>On hands and knees, spread knees wide</li>
            <li>Rock back toward heels</li>
            <li>30-60 seconds</li>
          </ul>

          <h4>Pigeon Pose (or Figure-4)</h4>
          <ul>
            <li>Deep hip external rotation stretch</li>
            <li>30-45 seconds each side</li>
          </ul>

          <h3>Ankles (1-2 minutes)</h3>

          <h4>Ankle Circles</h4>
          <ul>
            <li>10 each direction, each ankle</li>
          </ul>

          <h4>Wall Ankle Stretch</h4>
          <ul>
            <li>Foot flat on floor near wall</li>
            <li>Drive knee toward wall, keeping heel down</li>
            <li>10 reps each side</li>
          </ul>

          <h3>Full Body Integration (2 minutes)</h3>

          <h4>World&apos;s Greatest Stretch</h4>
          <ul>
            <li>Lunge forward, place both hands inside front foot</li>
            <li>Rotate, reaching one arm toward ceiling</li>
            <li>Return, switch sides</li>
            <li>5 each side</li>
          </ul>

          <h4>Squat to Stand</h4>
          <ul>
            <li>Bend down, grab toes</li>
            <li>Straighten legs while holding toes</li>
            <li>Drop into squat, stand up</li>
            <li>8-10 reps</li>
          </ul>

          <h2>Quick 5-Minute Version</h2>
          <p>
            When you&apos;re short on time:
          </p>
          <ul>
            <li>Cat-Cow: 10 reps</li>
            <li>World&apos;s Greatest Stretch: 5 each side</li>
            <li>Hip Circles: 10 each direction, each leg</li>
            <li>Shoulder Circles: 10 each direction</li>
            <li>Squat to Stand: 8 reps</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Daily is better than occasional</strong> — 10 minutes daily beats 30 minutes twice a week</li>
            <li><strong>Don&apos;t force it</strong> — Move to the edge of your range, not into pain</li>
            <li><strong>Breathe</strong> — Exhale as you move deeper into positions</li>
            <li><strong>Be patient</strong> — Mobility improves gradually over weeks and months</li>
            <li><strong>Morning is ideal</strong> — Counteracts overnight stiffness</li>
          </ul>

          <h2>When to Do This Routine</h2>
          <ul>
            <li><strong>Morning:</strong> Wake up your body for the day</li>
            <li><strong>Pre-workout:</strong> Prepare joints for exercise</li>
            <li><strong>After sitting:</strong> Undo the damage of desk work</li>
            <li><strong>Evening:</strong> Relax before bed (gentler version)</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Mobility is a use-it-or-lose-it quality. A daily routine—even just 10-15 minutes—can dramatically improve how you move, reduce stiffness and pain, and make you feel younger. Start with this routine and adjust based on your tight areas.
          </p>
          <p>
            Consistency is everything. The best mobility routine is one you actually do every day.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want personalized mobility work?
          </h3>
          <p className="text-gray-600 mb-4">
            Get routines based on your specific tight spots and goals.
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
