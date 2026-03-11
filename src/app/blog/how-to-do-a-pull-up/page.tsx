import Link from 'next/link';

export const metadata = {
  title: 'How to Do a Pull-Up: Complete Progression Guide | Foundational Rehab',
  description: 'Can\'t do a pull-up yet? This step-by-step guide will get you there. From dead hangs to your first rep and beyond.',
};

export default function HowToDoAPullUpPage() {
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
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Strength</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Do a Pull-Up: Complete Progression Guide
          </h1>
          <p className="text-xl text-gray-600">
            The pull-up is the ultimate test of relative strength. Here&apos;s how to go from zero to your first rep—and beyond.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Can&apos;t do a pull-up? You&apos;re not alone. It&apos;s one of the hardest bodyweight exercises to master. But with the right progression, anyone can get there.
          </p>
          <p>
            This guide takes you from complete beginner to pull-up master.
          </p>

          <h2>Muscles Worked</h2>
          <ul>
            <li><strong>Latissimus dorsi:</strong> Primary mover—pulls arms down</li>
            <li><strong>Biceps:</strong> Assist in elbow flexion</li>
            <li><strong>Rear deltoids:</strong> Shoulder extension</li>
            <li><strong>Rhomboids and traps:</strong> Scapular retraction</li>
            <li><strong>Core:</strong> Stabilization throughout</li>
            <li><strong>Forearms:</strong> Grip strength</li>
          </ul>

          <h2>Pull-Up vs Chin-Up</h2>
          <ul>
            <li><strong>Pull-up:</strong> Palms facing away (overhand). More lat-focused.</li>
            <li><strong>Chin-up:</strong> Palms facing you (underhand). More bicep involvement.</li>
          </ul>
          <p>
            <strong>Start with chin-ups if you&apos;re a beginner.</strong> They&apos;re slightly easier because your biceps can help more.
          </p>

          <h2>The Pull-Up Progression</h2>

          <h3>Stage 1: Dead Hangs</h3>
          <p>
            Before you can pull, you need to hang. This builds grip strength and gets your body used to supporting itself.
          </p>
          <ol>
            <li>Grab the bar with overhand or underhand grip</li>
            <li>Let your body hang with arms fully extended</li>
            <li>Keep shoulders engaged (not just hanging from joints)</li>
            <li>Hold as long as possible</li>
          </ol>
          <p><em>Goal: 30-60 second hang, 3 sets</em></p>

          <h3>Stage 2: Scapular Pull-Ups</h3>
          <p>
            These teach the initial movement of a pull-up—engaging your back muscles.
          </p>
          <ol>
            <li>Hang from bar with arms straight</li>
            <li>Without bending elbows, pull shoulder blades down and together</li>
            <li>You&apos;ll rise slightly (1-2 inches)</li>
            <li>Hold 2 seconds, release</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h3>Stage 3: Inverted Rows</h3>
          <p>
            A horizontal pulling movement that builds the muscles you need.
          </p>
          <ol>
            <li>Set bar at waist height (or use a table)</li>
            <li>Lie underneath, grab bar</li>
            <li>Keep body straight</li>
            <li>Pull chest to bar</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Goal: 3 sets of 12-15 with body at 45 degrees, then progress to more horizontal</em></p>

          <h3>Stage 4: Negative Pull-Ups</h3>
          <p>
            The lowering phase of a pull-up. You&apos;re stronger eccentrically, so you can do these before full pull-ups.
          </p>
          <ol>
            <li>Jump or use a box to get chin above bar</li>
            <li>Lower yourself as slowly as possible (5-10 seconds)</li>
            <li>Step down, reset, repeat</li>
          </ol>
          <p><em>Goal: 5-8 reps with 5+ second lowering, 3 sets</em></p>
          <p>
            <strong>This is the most important stage.</strong> Master slow negatives and you&apos;re close to your first pull-up.
          </p>

          <h3>Stage 5: Band-Assisted Pull-Ups</h3>
          <p>
            Resistance bands reduce body weight, making pull-ups easier.
          </p>
          <ol>
            <li>Loop a resistance band over the bar</li>
            <li>Put one foot or knee in the band</li>
            <li>Perform pull-ups with band assistance</li>
            <li>Progress to thinner bands over time</li>
          </ol>
          <p><em>Goal: 8-10 reps, 3 sets, then move to a thinner band</em></p>

          <h3>Stage 6: Your First Pull-Up!</h3>
          <p>
            Once you can do 3-5 slow negatives (5+ seconds each) and 8-10 band-assisted reps with a light band, you&apos;re ready to try.
          </p>
          <ol>
            <li>Grab bar with overhand (pull-up) or underhand (chin-up) grip</li>
            <li>Start from a dead hang with shoulders engaged</li>
            <li>Pull elbows down and back</li>
            <li>Drive your chest to the bar</li>
            <li>Get chin over bar</li>
            <li>Lower with control</li>
          </ol>

          <h2>Perfect Pull-Up Form</h2>
          <ul>
            <li><strong>Grip:</strong> Slightly wider than shoulder-width</li>
            <li><strong>Start position:</strong> Arms fully extended, shoulders engaged (not shrugged to ears)</li>
            <li><strong>Initiate:</strong> Pull shoulder blades down and together first</li>
            <li><strong>Pull:</strong> Drive elbows down toward hips</li>
            <li><strong>Top position:</strong> Chin clearly over bar, chest to bar if possible</li>
            <li><strong>Lower:</strong> Full extension, controlled descent</li>
          </ul>

          <h2>Building More Pull-Ups</h2>
          <p>Once you can do 1-3 pull-ups, here&apos;s how to build more:</p>

          <h3>Grease the Groove</h3>
          <p>
            Do multiple sets throughout the day at sub-maximal reps.
          </p>
          <ul>
            <li>If max is 3, do sets of 1-2 throughout the day</li>
            <li>5-10 sets spread over the day</li>
            <li>Never go to failure</li>
          </ul>

          <h3>Ladders</h3>
          <ol>
            <li>Do 1 pull-up</li>
            <li>Rest briefly</li>
            <li>Do 2 pull-ups</li>
            <li>Rest</li>
            <li>Do 3 pull-ups</li>
            <li>Rest, then start over</li>
          </ol>
          <p>Build up the ladder as you get stronger.</p>

          <h3>Weighted Pull-Ups</h3>
          <p>
            Once you can do 10-12 strict pull-ups, add weight to continue progressing:
          </p>
          <ul>
            <li>Use a dip belt with plates</li>
            <li>Hold a dumbbell between feet</li>
            <li>Wear a weighted vest</li>
            <li>Backpack with books</li>
          </ul>

          <h2>Sample Pull-Up Program</h2>

          <h3>Beginner (Can&apos;t Do Pull-Ups)</h3>
          <p>3x per week:</p>
          <ul>
            <li>Dead hangs: 30 sec × 3</li>
            <li>Scapular pull-ups: 10 × 3</li>
            <li>Inverted rows: 10 × 3</li>
            <li>Negative pull-ups: 5 × 3 (5 sec each)</li>
          </ul>

          <h3>Building First Pull-Ups (Can Do 1-3)</h3>
          <p>3x per week:</p>
          <ul>
            <li>Pull-ups: Max reps × 1 set</li>
            <li>Band-assisted: 8 × 3 (lighter band than needed)</li>
            <li>Negative pull-ups: 5 × 2 (slow)</li>
            <li>Inverted rows: 10 × 2</li>
          </ul>
          <p>Plus: Grease the groove on off days</p>

          <h3>Building Volume (Can Do 5-10)</h3>
          <p>3x per week:</p>
          <ul>
            <li>Pull-ups: 4 sets to near-failure</li>
            <li>Chin-ups: 3 × 8-10</li>
            <li>Lat pulldowns: 3 × 10-12</li>
            <li>Rows: 3 × 10</li>
          </ul>

          <h2>Common Pull-Up Mistakes</h2>
          <ul>
            <li><strong>Kipping:</strong> Using momentum robs you of strength gains. Keep it strict.</li>
            <li><strong>Half reps:</strong> Full extension at bottom, chin over bar at top.</li>
            <li><strong>Shrugging shoulders:</strong> Keep shoulders down and back.</li>
            <li><strong>Ignoring negatives:</strong> The eccentric phase is crucial for building strength.</li>
            <li><strong>Going to failure every set:</strong> Leave 1-2 reps in reserve most of the time.</li>
          </ul>

          <h2>How Long Until Your First Pull-Up?</h2>
          <ul>
            <li><strong>If you&apos;re close:</strong> 2-4 weeks of focused training</li>
            <li><strong>If you&apos;re starting from scratch:</strong> 4-12 weeks depending on starting strength and body weight</li>
            <li><strong>If significantly overweight:</strong> Losing weight helps enormously (every pound matters)</li>
          </ul>
          <p>
            <strong>Body weight matters.</strong> Pull-ups are a relative strength exercise. Losing excess body fat makes them significantly easier.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Getting your first pull-up requires patience and progression. Master the dead hang, build strength with rows and negatives, use bands strategically, and stay consistent.
          </p>
          <p>
            Once you get your first rep, the second comes faster. And from there, you&apos;re on your way to one of the best measures of upper body strength.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized pull-up program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates progressive programs to help you master the pull-up.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </article>
    </div>
  );
}
