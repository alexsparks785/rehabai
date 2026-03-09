import Link from 'next/link';

export const metadata = {
  title: 'How to Squat Properly: Complete Form Guide | Foundational Rehab',
  description: 'Master the squat—the most important exercise you can learn. Complete form guide with common mistakes and fixes.',
};

export default function HowToSquatProperlyPage() {
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
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Education</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Squat Properly: Complete Form Guide
          </h1>
          <p className="text-xl text-gray-600">
            The squat is fundamental. Here&apos;s how to do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The squat is arguably the most important exercise you can learn. It&apos;s how you sit down and stand up, pick things off the ground, and move through life. A proper squat builds leg strength, improves mobility, and protects your knees and back—when done right.
          </p>

          <h2>The Basic Squat Setup</h2>

          <h3>Foot Position</h3>
          <ul>
            <li><strong>Width:</strong> Shoulder-width apart, or slightly wider</li>
            <li><strong>Toe angle:</strong> Pointed out 15-30° (whatever feels natural)</li>
            <li><strong>Weight distribution:</strong> Whole foot—heel, ball of foot, and toes all in contact</li>
          </ul>

          <h3>Starting Position</h3>
          <ul>
            <li>Stand tall, chest up</li>
            <li>Core braced (like someone&apos;s about to push you)</li>
            <li>Eyes forward or slightly up</li>
            <li>Arms can be out front for balance, crossed, or at sides</li>
          </ul>

          <h2>The Squat Movement</h2>

          <h3>Going Down</h3>
          <ol>
            <li><strong>Initiate with hips</strong> — Push your hips back slightly, like sitting into a chair</li>
            <li><strong>Bend knees</strong> — As hips go back, knees bend and track over toes</li>
            <li><strong>Keep chest up</strong> — Don&apos;t let your torso collapse forward</li>
            <li><strong>Maintain neutral spine</strong> — Back flat, not rounded or excessively arched</li>
            <li><strong>Go as low as you can with good form</strong> — Ideally thighs parallel to floor or below</li>
          </ol>

          <h3>Coming Up</h3>
          <ol>
            <li><strong>Drive through whole foot</strong> — Push the floor away</li>
            <li><strong>Lead with chest</strong> — Don&apos;t let hips rise faster than shoulders</li>
            <li><strong>Keep knees tracking over toes</strong> — Don&apos;t let them cave in</li>
            <li><strong>Squeeze glutes at top</strong> — Full hip extension</li>
            <li><strong>Stand tall</strong> — Return to starting position</li>
          </ol>

          <h2>Key Form Points</h2>

          <h3>Knee Position</h3>
          <ul>
            <li>Knees track over toes (same direction as feet)</li>
            <li>It&apos;s okay for knees to go past toes—this is natural</li>
            <li>Don&apos;t let knees cave inward (valgus)</li>
          </ul>

          <h3>Back Position</h3>
          <ul>
            <li>Maintain natural spine curve throughout</li>
            <li>&quot;Butt wink&quot; (pelvis tucking under at bottom) is normal to a degree</li>
            <li>If back rounds significantly, don&apos;t go as deep</li>
          </ul>

          <h3>Depth</h3>
          <ul>
            <li>Full squat: hips below knees (most benefit)</li>
            <li>Parallel: thighs parallel to floor (minimum goal)</li>
            <li>Go only as deep as you can with good form</li>
            <li>Depth will improve with practice and mobility work</li>
          </ul>

          <h2>Common Mistakes and Fixes</h2>

          <h3>1. Knees Caving In</h3>
          <p><strong>Problem:</strong> Knees collapse toward each other</p>
          <p><strong>Fix:</strong> Focus on &quot;spreading the floor&quot; with feet; strengthen glutes; use a band around knees as a cue</p>

          <h3>2. Heels Rising</h3>
          <p><strong>Problem:</strong> Heels come off the ground</p>
          <p><strong>Fix:</strong> Work on ankle mobility; elevate heels on small plates temporarily; sit back more into the squat</p>

          <h3>3. Forward Lean (Good Morning Squat)</h3>
          <p><strong>Problem:</strong> Torso tips forward, hips rise first</p>
          <p><strong>Fix:</strong> Strengthen quads; practice keeping chest up; use goblet squats to learn pattern</p>

          <h3>4. Butt Wink</h3>
          <p><strong>Problem:</strong> Lower back rounds at bottom of squat</p>
          <p><strong>Fix:</strong> Don&apos;t go as deep; work on hip mobility; some is normal and okay</p>

          <h3>5. Not Going Deep Enough</h3>
          <p><strong>Problem:</strong> Quarter-squatting</p>
          <p><strong>Fix:</strong> Work on mobility; use a box or bench as a depth target; practice bodyweight squats daily</p>

          <h2>Squat Progressions</h2>
          <p>
            <strong>If you&apos;re new or rebuilding, progress through these:</strong>
          </p>
          <ol>
            <li><strong>Box Squat:</strong> Squat down to a box/bench, touch, stand up</li>
            <li><strong>Goblet Squat:</strong> Hold weight at chest—teaches upright torso</li>
            <li><strong>Bodyweight Squat:</strong> Full depth with no assistance</li>
            <li><strong>Loaded Squats:</strong> Add dumbbells, barbells, etc.</li>
          </ol>

          <h2>Squat Variations</h2>
          <ul>
            <li><strong>Goblet squat:</strong> Weight held at chest; great for learning</li>
            <li><strong>Front squat:</strong> Barbell on front shoulders; more quad focus</li>
            <li><strong>Back squat:</strong> Barbell on back; most weight potential</li>
            <li><strong>Sumo squat:</strong> Wide stance; more inner thigh</li>
            <li><strong>Split squat:</strong> One leg forward, one back; single-leg strength</li>
            <li><strong>Bulgarian split squat:</strong> Rear foot elevated; very challenging</li>
          </ul>

          <h2>How to Practice</h2>
          <ul>
            <li><strong>Daily squat practice:</strong> 10-20 bodyweight squats daily builds pattern and mobility</li>
            <li><strong>Hold the bottom:</strong> Sit in deep squat for 30-60 seconds (use support if needed)</li>
            <li><strong>Film yourself:</strong> Video from the side to check form</li>
            <li><strong>Start light:</strong> Master form before adding weight</li>
          </ul>

          <h2>Mobility for Better Squats</h2>
          <p>
            If you struggle with squat depth or form, work on:
          </p>
          <ul>
            <li><strong>Ankle mobility:</strong> Calf stretches, ankle circles</li>
            <li><strong>Hip mobility:</strong> Hip flexor stretches, 90/90 stretch</li>
            <li><strong>Thoracic mobility:</strong> Cat-cow, thoracic extensions</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            The squat is a fundamental human movement. With proper form—feet grounded, knees tracking over toes, chest up, hips back—it builds strength safely and transfers to everything you do.
          </p>
          <p>
            Start with bodyweight, master the pattern, then add load. Practice daily, even just a few reps. The squat you build will serve you for life.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want to master movement fundamentals?
          </h3>
          <p className="text-gray-600 mb-4">
            Get form guides and progressive programs for all essential exercises.
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
