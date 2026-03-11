import Link from 'next/link';

export const metadata = {
  title: 'How to Row Properly: Complete Rowing Form Guide | Foundational Rehab',
  description: 'Master the row exercise for a stronger back. Learn proper form for dumbbell rows, barbell rows, cable rows, and more. Avoid common mistakes that cause injury.',
};

export default function HowToRowProperlyPage() {
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
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Technique</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Row Properly: Complete Rowing Form Guide
          </h1>
          <p className="text-xl text-gray-600">
            Rows are the foundation of back training. Here&apos;s how to do them right for a stronger, healthier back.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Rowing movements build the muscles that counteract our forward-hunched modern posture. Done correctly, rows strengthen your entire back, improve shoulder health, and balance out all that pressing.
          </p>
          <p>
            But done wrong, rows become an arm exercise at best—and a back injury at worst.
          </p>

          <h2>The Fundamentals of Good Rowing</h2>
          <p>
            Regardless of which row variation you do, these principles apply:
          </p>
          <ul>
            <li><strong>Initiate with the shoulder blade:</strong> Pull your shoulder blade back first, then bend the elbow</li>
            <li><strong>Squeeze at the top:</strong> Pause when your elbow is behind your torso</li>
            <li><strong>Control the descent:</strong> Don&apos;t let the weight pull you—lower with control</li>
            <li><strong>Neutral spine:</strong> Keep your back flat, not rounded</li>
            <li><strong>Elbow path:</strong> Think about driving your elbow back, not just pulling with your hand</li>
          </ul>

          <h2>Dumbbell Row (Single-Arm)</h2>
          <p>
            The most versatile row variation. Great for beginners and advanced lifters alike.
          </p>

          <h3>Setup</h3>
          <ol>
            <li>Place one hand and same-side knee on a bench</li>
            <li>Other foot on the ground for stability</li>
            <li>Back should be flat, parallel to the ground</li>
            <li>Dumbbell hangs straight down, arm extended</li>
          </ol>

          <h3>Execution</h3>
          <ol>
            <li><strong>Retract:</strong> Pull your shoulder blade toward your spine</li>
            <li><strong>Row:</strong> Drive elbow up and back, pulling weight toward hip</li>
            <li><strong>Squeeze:</strong> Pause at top, feeling your lat contract</li>
            <li><strong>Lower:</strong> Control the weight back down, letting shoulder blade protract</li>
          </ol>

          <h3>Key Cues</h3>
          <ul>
            <li>&quot;Put your elbow in your back pocket&quot;</li>
            <li>&quot;Row to your hip, not your chest&quot;</li>
            <li>&quot;Keep your back flat—imagine balancing a glass of water&quot;</li>
          </ul>
          <p><em>Reps: 8-12 per arm, 3 sets</em></p>

          <h2>Barbell Row (Bent-Over)</h2>
          <p>
            The heavy hitter for back mass. Requires more stability and experience.
          </p>

          <h3>Setup</h3>
          <ol>
            <li>Stand with feet hip-width apart, barbell over mid-foot</li>
            <li>Hinge at hips (like a deadlift), grip bar just outside legs</li>
            <li>Back flat, chest up—you&apos;re in a bent-over position</li>
            <li>Angle can vary: 45° is standard, more upright is easier</li>
          </ol>

          <h3>Execution</h3>
          <ol>
            <li>Take a breath, brace your core</li>
            <li>Pull the bar toward your lower chest/upper abs</li>
            <li>Lead with your elbows, squeeze shoulder blades together</li>
            <li>Lower with control, maintaining your hip hinge position</li>
          </ol>

          <h3>Common Mistakes</h3>
          <ul>
            <li><strong>Standing too upright:</strong> Turns it into an upright row (shoulder exercise)</li>
            <li><strong>Using momentum:</strong> Heaving the weight with your hips</li>
            <li><strong>Rounding the back:</strong> Puts stress on your spine</li>
            <li><strong>Pulling to wrong spot:</strong> Bar should hit lower chest, not neck</li>
          </ul>
          <p><em>Reps: 6-10, 3-4 sets</em></p>

          <h2>Cable Row (Seated)</h2>
          <p>
            Constant tension throughout the movement. Excellent for building back thickness.
          </p>

          <h3>Setup</h3>
          <ol>
            <li>Sit on the cable row machine, feet on footplates</li>
            <li>Grab the handle with arms extended</li>
            <li>Sit tall with a slight forward lean at the hips</li>
            <li>Shoulders should be relaxed, not shrugged</li>
          </ol>

          <h3>Execution</h3>
          <ol>
            <li>Pull shoulder blades together first</li>
            <li>Then pull handle toward your lower chest/upper abs</li>
            <li>Squeeze at the top—elbows behind your torso</li>
            <li>Slowly return, letting shoulders protract forward slightly</li>
          </ol>

          <h3>Key Points</h3>
          <ul>
            <li>Don&apos;t lean back excessively—torso stays mostly still</li>
            <li>Don&apos;t shrug—keep shoulders down</li>
            <li>Think &quot;proud chest&quot; throughout</li>
          </ul>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h2>Inverted Row (Bodyweight)</h2>
          <p>
            Perfect for beginners or anyone without equipment. Scalable difficulty.
          </p>

          <h3>Setup</h3>
          <ol>
            <li>Set a bar in a rack at about waist height (lower = harder)</li>
            <li>Hang underneath with arms extended, body straight</li>
            <li>Heels on ground, body forms a straight line</li>
            <li>Grip slightly wider than shoulder-width</li>
          </ol>

          <h3>Execution</h3>
          <ol>
            <li>Pull your chest toward the bar</li>
            <li>Squeeze shoulder blades together at the top</li>
            <li>Lower with control until arms are straight</li>
            <li>Keep your body rigid—don&apos;t let hips sag</li>
          </ol>

          <h3>Progressions</h3>
          <ul>
            <li><strong>Easier:</strong> Higher bar, bend knees, feet flat</li>
            <li><strong>Harder:</strong> Lower bar, feet elevated, add weight vest</li>
          </ul>
          <p><em>Reps: 8-15, 3 sets</em></p>

          <h2>Chest-Supported Row</h2>
          <p>
            Removes the lower back from the equation. Pure back work.
          </p>

          <h3>Setup</h3>
          <ol>
            <li>Set an incline bench to 30-45 degrees</li>
            <li>Lie face down on the bench, chest on top</li>
            <li>Hold dumbbells hanging straight down</li>
          </ol>

          <h3>Execution</h3>
          <ol>
            <li>Row both dumbbells up, squeezing shoulder blades</li>
            <li>Pull toward your hips, not your chest</li>
            <li>Pause at top, lower with control</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h2>Common Row Mistakes (All Variations)</h2>

          <h3>1. Shrugging Shoulders</h3>
          <p><strong>Problem:</strong> Traps take over, back doesn&apos;t work.</p>
          <p><strong>Fix:</strong> Keep shoulders down throughout. Think &quot;long neck.&quot;</p>

          <h3>2. All Arms, No Back</h3>
          <p><strong>Problem:</strong> Biceps do all the work.</p>
          <p><strong>Fix:</strong> Focus on pulling with your elbow. Imagine your hand is just a hook.</p>

          <h3>3. Short Range of Motion</h3>
          <p><strong>Problem:</strong> Not getting full stretch or contraction.</p>
          <p><strong>Fix:</strong> Let shoulder blades protract at bottom, fully retract at top.</p>

          <h3>4. Using Momentum</h3>
          <p><strong>Problem:</strong> Jerking the weight, often with lower back.</p>
          <p><strong>Fix:</strong> Slow down. Use a weight you can control for 2 seconds up, 2 seconds down.</p>

          <h3>5. Wrong Elbow Angle</h3>
          <p><strong>Problem:</strong> Elbows flare too wide (more rear delt) or too close (more bicep).</p>
          <p><strong>Fix:</strong> Elbows at 45° from body for general back focus.</p>

          <h2>Row Workout Sample</h2>

          <h3>Back Day (Intermediate)</h3>
          <ul>
            <li>Barbell row: 4 × 6-8</li>
            <li>Single-arm dumbbell row: 3 × 10-12 per arm</li>
            <li>Seated cable row: 3 × 12-15</li>
            <li>Face pulls: 3 × 15-20 (for rear delts and external rotation)</li>
          </ul>

          <h3>Minimal Equipment</h3>
          <ul>
            <li>Inverted rows: 3 × max reps</li>
            <li>Single-arm dumbbell row: 3 × 12 per arm</li>
            <li>Band pull-aparts: 3 × 20</li>
          </ul>

          <h2>Programming Tips</h2>
          <ul>
            <li><strong>Balance pushing and pulling:</strong> Row as much volume as you press</li>
            <li><strong>Vary your rows:</strong> Different angles hit different parts of the back</li>
            <li><strong>Don&apos;t ego lift:</strong> Back exercises benefit from controlled, moderate weights</li>
            <li><strong>Mind-muscle connection:</strong> Focus on feeling your back work</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Rows are non-negotiable for back health and strength. The key principles:
          </p>
          <ol>
            <li>Initiate with the shoulder blade, not the arm</li>
            <li>Drive your elbow back, not just your hand</li>
            <li>Squeeze at the top, control at the bottom</li>
            <li>Keep your spine neutral</li>
            <li>Use a weight you can actually control</li>
          </ol>
          <p>
            Master these basics, and your back will thank you.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a complete back training program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get structured workouts with proper exercise progressions.
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
