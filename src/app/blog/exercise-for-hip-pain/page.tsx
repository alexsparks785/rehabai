import Link from 'next/link';

export const metadata = {
  title: 'Exercise for Hip Pain: Strengthen and Mobilize | Foundational Rehab',
  description: 'Hip pain often responds well to the right combination of mobility and strength work. Learn what exercises help.',
};

export default function ExerciseForHipPainPage() {
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
            Exercise for Hip Pain: Strengthen and Mobilize
          </h1>
          <p className="text-xl text-gray-600">
            Hip pain is common—and usually improvable with the right exercises.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The hips are central to almost everything you do—walking, sitting, standing, climbing. When they hurt, it affects your whole life. The good news? Most hip pain responds well to targeted exercise. The key is addressing both mobility AND strength.
          </p>

          <h2>When to See a Doctor First</h2>
          <p>
            Seek evaluation if you have:
          </p>
          <ul>
            <li>Hip pain after a fall or injury</li>
            <li>Inability to bear weight on the leg</li>
            <li>Visible deformity</li>
            <li>Signs of infection (fever, warmth, redness)</li>
            <li>Pain that wakes you consistently at night</li>
            <li>Pain that hasn&apos;t improved with 4-6 weeks of self-care</li>
          </ul>
          <p>
            For general hip stiffness, aching, and mild-moderate pain, exercise is usually safe and beneficial.
          </p>

          <h2>Common Causes of Hip Pain</h2>
          <ul>
            <li><strong>Hip flexor tightness</strong> — From sitting too much</li>
            <li><strong>Weak glutes</strong> — Don&apos;t support the hip properly</li>
            <li><strong>Hip bursitis</strong> — Inflammation of the fluid-filled sacs</li>
            <li><strong>Osteoarthritis</strong> — Wear and tear on joint cartilage</li>
            <li><strong>Hip impingement (FAI)</strong> — Bone shape causes pinching</li>
            <li><strong>Referred pain</strong> — From lower back or SI joint</li>
          </ul>

          <h2>Exercises for Hip Pain</h2>

          <h3>Mobility Exercises</h3>

          <h4>1. Hip Flexor Stretch</h4>
          <ul>
            <li>Kneel on one knee (pad underneath)</li>
            <li>Front foot flat, knee at 90°</li>
            <li>Tuck pelvis under (flatten lower back)</li>
            <li>Lean slightly forward</li>
            <li>Hold 30-60 seconds each side</li>
          </ul>

          <h4>2. Figure-4 Stretch</h4>
          <ul>
            <li>Lie on back</li>
            <li>Cross ankle over opposite knee</li>
            <li>Pull bottom leg toward chest</li>
            <li>Feel stretch in outer hip</li>
            <li>Hold 30-60 seconds each side</li>
          </ul>

          <h4>3. 90/90 Hip Stretch</h4>
          <ul>
            <li>Sit with both legs at 90° angles</li>
            <li>Front leg in front, back leg to side</li>
            <li>Sit tall, lean slightly forward</li>
            <li>Hold 30-60 seconds, switch sides</li>
          </ul>

          <h4>4. Hip Circles</h4>
          <ul>
            <li>On hands and knees</li>
            <li>Make circles with knee (hip rotation)</li>
            <li>10 circles each direction, each leg</li>
          </ul>

          <h4>5. Supine Hip Rotation</h4>
          <ul>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Let both knees fall to one side</li>
            <li>Hold 30 seconds, switch sides</li>
          </ul>

          <h3>Strengthening Exercises</h3>

          <h4>6. Glute Bridges</h4>
          <ul>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Drive through heels, lift hips</li>
            <li>Squeeze glutes at top, hold 2 seconds</li>
            <li>3 sets of 15</li>
          </ul>
          <p><strong>Progress to:</strong> Single-leg bridges when ready</p>

          <h4>7. Clamshells</h4>
          <ul>
            <li>Lie on side, knees bent at 45°</li>
            <li>Keep feet together, lift top knee</li>
            <li>Don&apos;t let pelvis roll back</li>
            <li>3 sets of 15 each side</li>
          </ul>

          <h4>8. Side-Lying Hip Abduction</h4>
          <ul>
            <li>Lie on side, bottom knee bent, top leg straight</li>
            <li>Lift top leg toward ceiling</li>
            <li>Keep toe pointed slightly down</li>
            <li>3 sets of 15 each side</li>
          </ul>

          <h4>9. Monster Walks (with band)</h4>
          <ul>
            <li>Band around ankles or above knees</li>
            <li>Slight squat position</li>
            <li>Walk sideways, keeping tension in band</li>
            <li>20 steps each direction, 2-3 sets</li>
          </ul>

          <h4>10. Hip Hinge</h4>
          <ul>
            <li>Stand with slight knee bend</li>
            <li>Push hips back, keeping back flat</li>
            <li>Feel stretch in hamstrings</li>
            <li>Drive hips forward to stand</li>
            <li>3 sets of 12</li>
          </ul>

          <h4>11. Step-Downs</h4>
          <ul>
            <li>Stand on step or stair</li>
            <li>Slowly lower one foot toward floor</li>
            <li>Touch heel, return to standing</li>
            <li>Control is key—don&apos;t let knee cave in</li>
            <li>3 sets of 10 each leg</li>
          </ul>

          <h2>Sample Hip Pain Routine</h2>
          <p>
            <strong>Daily (10-15 minutes):</strong>
          </p>
          <ul>
            <li>Hip flexor stretch: 60 sec each side</li>
            <li>Figure-4 stretch: 60 sec each side</li>
            <li>Hip circles: 10 each direction, each leg</li>
            <li>Glute bridges: 2 × 15</li>
            <li>Clamshells: 2 × 15 each side</li>
          </ul>
          <p>
            <strong>3x per week (add to daily routine):</strong>
          </p>
          <ul>
            <li>90/90 stretch: 60 sec each side</li>
            <li>Side-lying abduction: 3 × 15 each</li>
            <li>Hip hinge: 3 × 12</li>
            <li>Step-downs: 3 × 10 each leg</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Consistency beats intensity</strong> — Daily gentle work is better than occasional hard sessions</li>
            <li><strong>Avoid positions that hurt</strong> — Work around pain, not through it</li>
            <li><strong>Strengthen AND stretch</strong> — You need both for hip health</li>
            <li><strong>Don&apos;t forget the glutes</strong> — Weak glutes are often the root cause</li>
            <li><strong>Take walking breaks</strong> — Movement is medicine for hips</li>
          </ul>

          <h2>When to Modify</h2>
          <ul>
            <li><strong>Arthritis:</strong> Low-impact strengthening; avoid deep flexion if it hurts</li>
            <li><strong>Bursitis:</strong> Avoid lying on painful side; focus on strength, not stretching painful area</li>
            <li><strong>Impingement:</strong> Avoid deep flexion and certain rotation directions</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Most hip pain improves with consistent exercise—a combination of mobility work and glute/hip strengthening. The hips respond well to movement, so the worst thing you can do is become sedentary.
          </p>
          <p>
            Start with the basics: hip flexor stretches, glute bridges, and clamshells. Progress gradually as pain allows. If you&apos;re consistent, most hip pain will significantly improve within 4-8 weeks.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need a structured hip rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercises based on your specific hip issue.
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
