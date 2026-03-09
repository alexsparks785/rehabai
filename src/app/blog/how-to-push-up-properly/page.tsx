import Link from 'next/link';

export const metadata = {
  title: 'How to Do a Push-Up Properly: Complete Form Guide | Foundational Rehab',
  description: 'Master the push-up with proper form. Progressions from wall to advanced, common mistakes, and variations.',
};

export default function HowToPushUpProperlyPage() {
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
            How to Do a Push-Up Properly: Complete Form Guide
          </h1>
          <p className="text-xl text-gray-600">
            The push-up is a fundamental exercise. Here&apos;s how to do it right—from your first rep to advanced variations.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The push-up is one of the most effective exercises you can do—no equipment needed, works multiple muscle groups, and can be scaled for any fitness level. But most people do them wrong. Here&apos;s how to push-up properly.
          </p>

          <h2>Muscles Worked</h2>
          <ul>
            <li><strong>Chest (pectorals)</strong> — Primary mover</li>
            <li><strong>Shoulders (anterior deltoid)</strong> — Assists the press</li>
            <li><strong>Triceps</strong> — Extends the elbow</li>
            <li><strong>Core</strong> — Stabilizes the body</li>
            <li><strong>Serratus anterior</strong> — Stabilizes shoulder blades</li>
          </ul>

          <h2>The Standard Push-Up</h2>

          <h3>Setup</h3>
          <ul>
            <li>Hands on floor, slightly wider than shoulder-width</li>
            <li>Hands at chest level (not by shoulders or stomach)</li>
            <li>Fingers spread, middle fingers pointing forward</li>
            <li>Feet hip-width apart (wider = easier, narrower = harder)</li>
            <li>Body in a straight line from head to heels</li>
          </ul>

          <h3>The Descent</h3>
          <ul>
            <li>Keep body rigid—move as one unit</li>
            <li>Bend elbows, lowering chest toward floor</li>
            <li>Elbows at about 45° angle to body (not flared out to 90°)</li>
            <li>Lower until chest nearly touches floor</li>
            <li>Keep core braced, don&apos;t let hips sag</li>
          </ul>

          <h3>The Push</h3>
          <ul>
            <li>Press through palms</li>
            <li>Extend elbows, keeping body straight</li>
            <li>Push until arms are fully extended</li>
            <li>At the top, push a little extra (protract shoulder blades)</li>
          </ul>

          <h2>Key Form Points</h2>

          <h3>Hand Position</h3>
          <p>
            Hands should be at chest level, not up by your shoulders. When you&apos;re at the bottom, your forearms should be roughly vertical.
          </p>

          <h3>Elbow Angle</h3>
          <p>
            Keep elbows at about 45° to your body—not flared out to 90° (shoulder stress) or tucked tight to sides (tricep-dominant).
          </p>

          <h3>Body Position</h3>
          <p>
            Maintain a straight line from head to heels throughout. Don&apos;t let hips sag (back arches) or pike up (hips high).
          </p>

          <h3>Head Position</h3>
          <p>
            Neutral—look at the floor about a foot in front of your hands. Don&apos;t crane your neck to look forward.
          </p>

          <h2>Common Mistakes</h2>

          <h3>1. Hips Sagging</h3>
          <p><strong>Problem:</strong> Lower back arches, hips drop</p>
          <p><strong>Fix:</strong> Squeeze glutes, brace core, think of your body as a plank</p>

          <h3>2. Hips Too High</h3>
          <p><strong>Problem:</strong> Butt sticking up</p>
          <p><strong>Fix:</strong> Lower hips until body is straight</p>

          <h3>3. Elbows Flared to 90°</h3>
          <p><strong>Problem:</strong> Elbows point straight out to sides</p>
          <p><strong>Fix:</strong> Tuck elbows to about 45°; think &quot;arrow shape&quot; not &quot;T shape&quot;</p>

          <h3>4. Partial Range of Motion</h3>
          <p><strong>Problem:</strong> Not going all the way down</p>
          <p><strong>Fix:</strong> Lower until chest nearly touches floor; use easier progression if needed</p>

          <h3>5. Head Jutting Forward</h3>
          <p><strong>Problem:</strong> Leading with chin, not chest</p>
          <p><strong>Fix:</strong> Keep head neutral; chest should reach the floor first</p>

          <h2>Push-Up Progressions</h2>
          <p>
            Can&apos;t do a full push-up yet? Here&apos;s how to build up:
          </p>

          <h3>Level 1: Wall Push-Up</h3>
          <ul>
            <li>Hands on wall at shoulder height</li>
            <li>Step feet back, lean in</li>
            <li>Push-up motion against wall</li>
          </ul>

          <h3>Level 2: Incline Push-Up</h3>
          <ul>
            <li>Hands on elevated surface (table, bench, stairs)</li>
            <li>Lower the surface as you get stronger</li>
          </ul>

          <h3>Level 3: Knee Push-Up</h3>
          <ul>
            <li>Same as full push-up but knees on floor</li>
            <li>Keep body straight from knees to head</li>
          </ul>

          <h3>Level 4: Negative Push-Up</h3>
          <ul>
            <li>Start in top position</li>
            <li>Lower slowly (3-5 seconds)</li>
            <li>Drop knees, push back up, reset</li>
          </ul>

          <h3>Level 5: Full Push-Up</h3>
          <ul>
            <li>The standard push-up</li>
          </ul>

          <h2>Advanced Variations</h2>
          <p>
            Once you master standard push-ups:
          </p>
          <ul>
            <li><strong>Diamond push-up:</strong> Hands close together, more triceps</li>
            <li><strong>Wide push-up:</strong> Hands wider than shoulders, more chest</li>
            <li><strong>Decline push-up:</strong> Feet elevated, harder and more shoulder focus</li>
            <li><strong>Archer push-up:</strong> Shift weight to one side, progresses toward one-arm</li>
            <li><strong>Clap push-up:</strong> Explosive, clap at top</li>
            <li><strong>One-arm push-up:</strong> Advanced single-arm strength</li>
          </ul>

          <h2>Programming Push-Ups</h2>
          <ul>
            <li><strong>Beginners:</strong> 3 sets to near-failure, 3x per week</li>
            <li><strong>Building endurance:</strong> High reps (20+), multiple sets</li>
            <li><strong>Building strength:</strong> Use harder progressions, lower reps (8-12)</li>
            <li><strong>Daily practice:</strong> Greasing the groove—do sets throughout the day</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            The push-up is a foundational exercise that builds chest, shoulder, tricep, and core strength. Focus on proper form: straight body, elbows at 45°, full range of motion. Start at whatever progression level allows good form, and work your way up.
          </p>
          <p>
            Consistency matters more than starting point. Do push-ups regularly with good form, and you&apos;ll build impressive upper body strength.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a structured push-up program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive workouts to build push-up strength from any starting point.
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
