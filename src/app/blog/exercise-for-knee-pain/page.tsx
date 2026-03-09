import Link from 'next/link';

export const metadata = {
  title: 'Exercise for Knee Pain: Strengthen Without Making It Worse | Foundational Rehab',
  description: 'The right exercises can reduce knee pain and build stronger, more stable knees. Learn what works.',
};

export default function ExerciseForKneePainPage() {
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
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercise for Knee Pain: Strengthen Without Making It Worse
          </h1>
          <p className="text-xl text-gray-600">
            Strong muscles protect painful knees. Here&apos;s how to build them safely.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Knee pain is frustrating—and scary. You want to stay active, but you&apos;re afraid of making it worse. Here&apos;s the truth: for most knee pain, the right exercises help more than rest. The key is knowing what to do and how to do it safely.
          </p>

          <h2>When to See a Doctor First</h2>
          <p>
            Get evaluated before starting exercises if you have:
          </p>
          <ul>
            <li>Knee pain after a fall, twist, or impact</li>
            <li>Sudden swelling after injury</li>
            <li>Knee that &quot;gives way&quot; or feels unstable</li>
            <li>Locking—knee gets stuck and won&apos;t straighten</li>
            <li>Visible deformity</li>
            <li>Unable to bear weight</li>
            <li>Signs of infection (warmth, redness, fever)</li>
          </ul>
          <p>
            For general knee aches, stiffness, and mild-moderate pain—especially with arthritis or overuse—exercise is usually safe and beneficial.
          </p>

          <h2>Why Exercise Helps Knee Pain</h2>
          <ul>
            <li><strong>Stronger muscles = less joint stress</strong> — Quads and glutes absorb shock</li>
            <li><strong>Better joint nutrition</strong> — Movement pumps fluid through cartilage</li>
            <li><strong>Improved stability</strong> — Strong muscles keep the knee tracking properly</li>
            <li><strong>Weight management</strong> — Every pound of body weight is 4 lbs of knee force</li>
            <li><strong>Pain modulation</strong> — Exercise changes how your brain processes pain</li>
          </ul>

          <h2>Key Muscles to Strengthen</h2>
          <ul>
            <li><strong>Quadriceps</strong> — Front of thigh; primary knee stabilizer</li>
            <li><strong>Glutes</strong> — Control hip alignment, which affects knee position</li>
            <li><strong>Hamstrings</strong> — Back of thigh; balance quads</li>
            <li><strong>Calves</strong> — Ankle stability affects knee</li>
          </ul>
          <p>
            <strong>Important:</strong> Hip weakness is often the hidden cause of knee pain. Don&apos;t skip glute exercises.
          </p>

          <h2>Exercises for Knee Pain</h2>

          <h3>Quad Strengthening</h3>

          <h4>1. Straight Leg Raise</h4>
          <ul>
            <li>Lie on back, one knee bent, one leg straight</li>
            <li>Tighten quad of straight leg</li>
            <li>Lift leg to height of bent knee</li>
            <li>Lower with control</li>
            <li>3 sets of 15 each leg</li>
          </ul>

          <h4>2. Quad Sets</h4>
          <ul>
            <li>Sit or lie with leg straight</li>
            <li>Tighten quad, push back of knee toward floor</li>
            <li>Hold 5-10 seconds</li>
            <li>3 sets of 15</li>
          </ul>
          <p><em>Great starting exercise—no joint movement needed.</em></p>

          <h4>3. Terminal Knee Extension (TKE)</h4>
          <ul>
            <li>Loop band around something sturdy at knee height</li>
            <li>Step into band, band behind knee</li>
            <li>Start with slight knee bend</li>
            <li>Straighten knee against band resistance</li>
            <li>3 sets of 15 each leg</li>
          </ul>

          <h4>4. Wall Sits</h4>
          <ul>
            <li>Back against wall, slide down to sitting position</li>
            <li>Knees at 45-90° (less bend = easier)</li>
            <li>Hold 30-60 seconds</li>
            <li>3 sets</li>
          </ul>

          <h3>Glute Strengthening</h3>

          <h4>5. Glute Bridges</h4>
          <ul>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Drive through heels, lift hips</li>
            <li>Squeeze glutes at top</li>
            <li>3 sets of 15</li>
          </ul>

          <h4>6. Clamshells</h4>
          <ul>
            <li>Lie on side, knees bent at 45°</li>
            <li>Keep feet together, lift top knee</li>
            <li>Don&apos;t roll pelvis back</li>
            <li>3 sets of 15 each side</li>
          </ul>

          <h4>7. Side-Lying Hip Abduction</h4>
          <ul>
            <li>Lie on side, bottom leg bent, top leg straight</li>
            <li>Lift top leg toward ceiling</li>
            <li>Keep toe pointed slightly down</li>
            <li>3 sets of 15 each side</li>
          </ul>

          <h3>Functional Exercises</h3>

          <h4>8. Mini Squats</h4>
          <ul>
            <li>Stand with feet shoulder-width apart</li>
            <li>Squat only 1/4 to 1/2 depth (pain-free range)</li>
            <li>Keep knees tracking over toes</li>
            <li>3 sets of 12</li>
          </ul>

          <h4>9. Step-Downs</h4>
          <ul>
            <li>Stand on step (start low, 4-6 inches)</li>
            <li>Slowly lower other foot toward floor</li>
            <li>Touch heel, return to standing</li>
            <li>Control is key—don&apos;t let knee cave in</li>
            <li>3 sets of 10 each leg</li>
          </ul>

          <h4>10. Sit-to-Stands</h4>
          <ul>
            <li>Sit on chair, stand up without using hands</li>
            <li>Control the lowering back down</li>
            <li>Use higher chair if needed</li>
            <li>3 sets of 10</li>
          </ul>

          <h2>Sample Knee Pain Routine</h2>
          <p>
            <strong>Daily (10 minutes):</strong>
          </p>
          <ul>
            <li>Quad sets: 2 × 15 each leg</li>
            <li>Straight leg raises: 2 × 12 each leg</li>
            <li>Glute bridges: 2 × 15</li>
            <li>Clamshells: 2 × 15 each side</li>
          </ul>
          <p>
            <strong>3x per week (add when ready):</strong>
          </p>
          <ul>
            <li>Wall sits: 3 × 30 sec</li>
            <li>Mini squats: 3 × 12</li>
            <li>Step-downs: 3 × 10 each leg</li>
            <li>Side-lying abduction: 3 × 15 each side</li>
          </ul>

          <h2>Exercises to Approach with Caution</h2>
          <ul>
            <li><strong>Deep squats</strong> — Limit depth to pain-free range initially</li>
            <li><strong>Lunges</strong> — Can be done if pain-free; shorten range if needed</li>
            <li><strong>Running</strong> — Wait until strength is rebuilt</li>
            <li><strong>Jumping</strong> — Add only when knee is stable and pain-free</li>
            <li><strong>Leg extension machine</strong> — High shear force; use with caution</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Some discomfort is okay</strong> — Mild aching during/after exercise is normal</li>
            <li><strong>Sharp pain is not okay</strong> — Stop if you feel sharp or worsening pain</li>
            <li><strong>Ice after if needed</strong> — 15-20 minutes can help with inflammation</li>
            <li><strong>Be consistent</strong> — Daily exercises work better than occasional hard sessions</li>
            <li><strong>Progress gradually</strong> — Add reps, sets, or resistance slowly</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Exercise is one of the best treatments for knee pain. Strengthening your quads and glutes reduces stress on the joint, improves stability, and often reduces pain significantly. Start with simple, low-load exercises and progress as your knee allows.
          </p>
          <p>
            Consistency matters more than intensity. A 10-minute daily routine will do more for your knees than an occasional hard workout. Build the habit, stay patient, and your knees will thank you.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a personalized knee rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get exercises tailored to your specific knee issue.
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
