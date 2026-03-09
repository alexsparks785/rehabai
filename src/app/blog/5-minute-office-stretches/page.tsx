import Link from 'next/link';

export const metadata = {
  title: '5-Minute Office Stretches: Quick Relief for Desk Workers | Foundational Rehab',
  description: 'Fast, effective stretches you can do at your desk to prevent pain and stiffness. No equipment needed, no leaving your workspace.',
};

export default function FiveMinuteOfficeStretchesPage() {
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
            <span>4 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            5-Minute Office Stretches: Quick Relief for Desk Workers
          </h1>
          <p className="text-xl text-gray-600">
            You don&apos;t need a yoga mat or 30 minutes. These stretches take 5 minutes and you can do them right at your desk.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Sitting all day wreaks havoc on your body. Tight hip flexors, rounded shoulders, stiff neck, aching lower back—sound familiar? The fix isn&apos;t complicated: brief movement breaks throughout the day.
          </p>
          <p>
            This 5-minute routine targets every problem area from sitting. Do it 2-3 times during your workday and you&apos;ll feel dramatically different by evening.
          </p>

          <h2>The 5-Minute Desk Stretch Routine</h2>
          <p>
            Each stretch takes about 30 seconds. Flow through all 10 for a complete reset.
          </p>

          <h3>1. Neck Tilts (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Tight neck muscles from screen staring
          </p>
          <ul>
            <li>Sit tall, drop right ear toward right shoulder</li>
            <li>Hold 15 seconds</li>
            <li>Repeat left side</li>
          </ul>
          <p><em>Tip: Don&apos;t force it—let gravity do the work</em></p>

          <h3>2. Chin Tucks (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Forward head posture from leaning toward screen
          </p>
          <ul>
            <li>Sit tall, look straight ahead</li>
            <li>Draw chin straight back (make a double chin)</li>
            <li>Hold 5 seconds, release</li>
            <li>Repeat 5 times</li>
          </ul>
          <p><em>Tip: Imagine a string pulling the back of your head up</em></p>

          <h3>3. Shoulder Shrugs (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Tension in upper traps from hunching
          </p>
          <ul>
            <li>Shrug shoulders up toward ears</li>
            <li>Hold 5 seconds</li>
            <li>Drop and relax completely</li>
            <li>Repeat 5 times</li>
          </ul>
          <p><em>Tip: Really exaggerate the shrug, then fully release</em></p>

          <h3>4. Chest Opener (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Tight chest from hunched posture
          </p>
          <ul>
            <li>Clasp hands behind your back</li>
            <li>Squeeze shoulder blades together</li>
            <li>Lift hands slightly and open chest</li>
            <li>Hold 30 seconds</li>
          </ul>
          <p><em>Tip: If you can&apos;t clasp hands, hold a pen or strap between them</em></p>

          <h3>5. Seated Spinal Twist (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Stiff mid-back from prolonged sitting
          </p>
          <ul>
            <li>Sit tall, feet flat on floor</li>
            <li>Place right hand on left knee, left hand on chair back</li>
            <li>Gently rotate torso left</li>
            <li>Hold 15 seconds, switch sides</li>
          </ul>
          <p><em>Tip: Twist from your mid-back, not just your neck</em></p>

          <h3>6. Wrist Circles (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Stiff wrists from typing
          </p>
          <ul>
            <li>Make fists, extend arms in front</li>
            <li>Circle wrists 10 times clockwise</li>
            <li>Circle 10 times counterclockwise</li>
          </ul>
          <p><em>Tip: Make the circles as large as comfortable</em></p>

          <h3>7. Seated Figure-4 (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Tight hips and glutes
          </p>
          <ul>
            <li>Cross right ankle over left knee</li>
            <li>Sit tall and lean slightly forward</li>
            <li>Feel stretch in right hip/glute</li>
            <li>Hold 15 seconds, switch sides</li>
          </ul>
          <p><em>Tip: Keep back straight—the forward lean is subtle</em></p>

          <h3>8. Hip Flexor Stretch (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Shortened hip flexors from sitting
          </p>
          <ul>
            <li>Scoot to front edge of chair</li>
            <li>Keep right foot planted, slide left leg back</li>
            <li>Tuck pelvis under (flatten lower back)</li>
            <li>Hold 15 seconds, switch sides</li>
          </ul>
          <p><em>Tip: The stretch is subtle—focus on the pelvic tuck</em></p>

          <h3>9. Hamstring Stretch (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Tight hamstrings from sitting
          </p>
          <ul>
            <li>Scoot to edge of chair</li>
            <li>Extend right leg straight, heel on floor, toes up</li>
            <li>Hinge forward at hips with flat back</li>
            <li>Hold 15 seconds, switch sides</li>
          </ul>
          <p><em>Tip: Keep back flat—rounding reduces the hamstring stretch</em></p>

          <h3>10. Standing Back Extension (30 seconds)</h3>
          <p>
            <strong>What it targets:</strong> Compressed lower back, counteracts sitting flexion
          </p>
          <ul>
            <li>Stand up, hands on lower back</li>
            <li>Gently arch backward</li>
            <li>Hold 5 seconds</li>
            <li>Return to neutral</li>
            <li>Repeat 3-5 times</li>
          </ul>
          <p><em>Tip: Go only as far as comfortable—this shouldn&apos;t cause pain</em></p>

          <h2>When to Do This Routine</h2>
          <ul>
            <li><strong>Every 2 hours minimum</strong> — Set a timer if you forget</li>
            <li><strong>When you feel stiff</strong> — Don&apos;t wait until you&apos;re in pain</li>
            <li><strong>After long meetings</strong> — Especially video calls where you barely moved</li>
            <li><strong>Before and after lunch</strong> — Natural break points</li>
          </ul>

          <h2>Bonus: Micro-Movements</h2>
          <p>
            Between full stretch sessions, try these quick resets that take 10 seconds:
          </p>
          <ul>
            <li><strong>Eye break:</strong> Look at something 20 feet away for 20 seconds</li>
            <li><strong>Ankle circles:</strong> 10 each direction under your desk</li>
            <li><strong>Shoulder rolls:</strong> 5 forward, 5 backward</li>
            <li><strong>Glute squeeze:</strong> Contract your glutes while seated, hold 10 seconds</li>
            <li><strong>Deep breath:</strong> Inhale 4 counts, exhale 6 counts</li>
          </ul>

          <h2>Making It a Habit</h2>
          <ul>
            <li><strong>Link it to existing behavior</strong> — Stretch every time you refill water</li>
            <li><strong>Use calendar blocks</strong> — Schedule &quot;movement break&quot; appointments</li>
            <li><strong>Try apps</strong> — Several apps remind you to move</li>
            <li><strong>Involve coworkers</strong> — Group stretch breaks are more likely to happen</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            You don&apos;t need to overhaul your work setup or take long gym breaks. Five minutes of targeted stretching, 2-3 times per day, can prevent most of the aches and pains that come from desk work.
          </p>
          <p>
            The best stretch routine is one you&apos;ll actually do. This one is short enough to fit into any workday and effective enough to make a real difference. Your body will thank you.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want guided stretching for desk workers?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized stretch routines based on where you feel tight.
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
