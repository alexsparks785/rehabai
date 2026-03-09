import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Osteoporosis: Build Bone Strength Safely | Foundational Rehab',
  description: 'Weight-bearing and resistance exercises that help prevent bone loss and build stronger bones safely with osteoporosis.',
};

export default function ExercisesForOsteoporosisPage() {
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
            <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Special Populations</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Osteoporosis: Build Bone Strength Safely
          </h1>
          <p className="text-xl text-gray-600">
            The right exercises can slow bone loss, improve balance, and reduce fracture risk—without putting you in danger.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            If you&apos;ve been diagnosed with osteoporosis or osteopenia, you might be afraid to exercise. Won&apos;t moving stress your fragile bones? Actually, the opposite is true—bones need stress to stay strong. But the type of exercise matters.
          </p>
          <p>
            This guide covers which exercises help build bone safely, which to avoid, and how to reduce your fracture risk through movement.
          </p>

          <h2>Why Exercise Matters for Bone Health</h2>
          <p>
            Bones are living tissue that responds to stress. When you load your bones through exercise, cells called osteoblasts lay down new bone tissue. Without this stress, bones weaken faster.
          </p>
          <p>
            <strong>Exercise benefits for osteoporosis:</strong>
          </p>
          <ul>
            <li><strong>Slows bone loss</strong> — Weight-bearing exercise signals bones to maintain density</li>
            <li><strong>Builds muscle</strong> — Stronger muscles protect bones and improve stability</li>
            <li><strong>Improves balance</strong> — Better balance means fewer falls, the main cause of osteoporotic fractures</li>
            <li><strong>Enhances posture</strong> — Good posture reduces vertebral compression</li>
          </ul>

          <h2>The Two Types of Exercise You Need</h2>
          
          <h3>1. Weight-Bearing Exercises</h3>
          <p>
            These exercises make you work against gravity while on your feet, loading your skeleton:
          </p>
          <ul>
            <li><strong>Walking</strong> — The foundation; aim for 30 minutes most days</li>
            <li><strong>Hiking</strong> — Uneven terrain adds challenge and bone stimulus</li>
            <li><strong>Stair climbing</strong> — Greater bone loading than walking</li>
            <li><strong>Dancing</strong> — Fun, social, and excellent for bone health</li>
            <li><strong>Low-impact aerobics</strong> — Keep one foot on the ground</li>
            <li><strong>Tai Chi</strong> — Particularly good for balance (reduces falls by 40%)</li>
          </ul>
          <p>
            <strong>Avoid high-impact activities</strong> like running, jumping, or high-impact aerobics if you have severe osteoporosis—the jarring can cause fractures.
          </p>

          <h3>2. Resistance Training</h3>
          <p>
            Lifting weights or using resistance builds both muscle and bone:
          </p>
          <ul>
            <li><strong>Free weights</strong> — Start light, focus on form</li>
            <li><strong>Resistance bands</strong> — Gentle, adjustable resistance</li>
            <li><strong>Weight machines</strong> — Provide support and safety</li>
            <li><strong>Bodyweight exercises</strong> — Modified versions (wall push-ups, sit-to-stands)</li>
          </ul>
          <p>
            Focus on major muscle groups: legs, back, chest, shoulders, and arms. Aim for 2-3 sessions per week.
          </p>

          <h2>Safe Exercises for Osteoporosis</h2>
          
          <h3>Lower Body</h3>
          <ul>
            <li><strong>Sit-to-stand</strong> — Rise from a chair without using hands; builds leg and hip strength</li>
            <li><strong>Wall squats</strong> — Slide down the wall to quarter-squat, hold, return</li>
            <li><strong>Heel raises</strong> — Stand tall, rise onto toes, lower slowly</li>
            <li><strong>Leg press (machine)</strong> — Safer than free-weight squats</li>
            <li><strong>Standing hip extensions</strong> — Hold a chair, extend leg backward</li>
          </ul>

          <h3>Upper Body</h3>
          <ul>
            <li><strong>Wall push-ups</strong> — Push-ups against a wall, not the floor</li>
            <li><strong>Seated rows</strong> — With band or cable; strengthens upper back</li>
            <li><strong>Shoulder press</strong> — Light dumbbells, seated for stability</li>
            <li><strong>Bicep curls</strong> — Seated or standing</li>
          </ul>

          <h3>Core & Posture</h3>
          <ul>
            <li><strong>Prone back extension</strong> — Lie face down, gently lift chest (not high)</li>
            <li><strong>Bird dog</strong> — On all fours, extend opposite arm and leg</li>
            <li><strong>Standing back extension</strong> — Hands on hips, gently arch backward</li>
            <li><strong>Chin tucks</strong> — Improve posture, reduce forward head position</li>
          </ul>

          <h3>Balance Training</h3>
          <ul>
            <li><strong>Single-leg stand</strong> — Hold a chair, lift one foot slightly</li>
            <li><strong>Tandem stance</strong> — Heel-to-toe position, hold</li>
            <li><strong>Weight shifts</strong> — Transfer weight side to side slowly</li>
            <li><strong>Tai Chi</strong> — Moving balance work; highly effective for fall prevention</li>
          </ul>

          <h2>Exercises to AVOID</h2>
          <p>
            With osteoporosis, certain movements increase fracture risk:
          </p>
          <ul>
            <li><strong>Forward bending under load</strong> — No bent-over rows, deadlifts, or toe touches with weight</li>
            <li><strong>Spinal flexion exercises</strong> — Avoid crunches, sit-ups, and abdominal machines</li>
            <li><strong>Twisting under load</strong> — No weighted trunk rotations</li>
            <li><strong>High-impact activities</strong> — Running, jumping, high-impact aerobics</li>
            <li><strong>Golf and tennis</strong> — May be risky due to spinal rotation (discuss with doctor)</li>
          </ul>
          <p>
            <strong>Key principle:</strong> Avoid loading the spine while it&apos;s flexed (bent forward). This is when vertebral compression fractures occur.
          </p>

          <h2>Sample Weekly Program</h2>
          <p>
            <strong>Monday, Wednesday, Friday:</strong>
          </p>
          <ul>
            <li>30-minute walk</li>
            <li>10 sit-to-stands</li>
            <li>10 wall push-ups</li>
            <li>10 heel raises</li>
            <li>Balance practice (2 minutes)</li>
          </ul>
          <p>
            <strong>Tuesday, Thursday:</strong>
          </p>
          <ul>
            <li>Resistance training (20-30 minutes)</li>
            <li>Upper and lower body exercises</li>
            <li>Back extension and posture work</li>
          </ul>
          <p>
            <strong>Weekend:</strong>
          </p>
          <ul>
            <li>Active recreation (hiking, dancing, swimming)</li>
            <li>Tai Chi class if available</li>
          </ul>

          <h2>Important Safety Guidelines</h2>
          <ul>
            <li><strong>Get clearance</strong> — Talk to your doctor before starting, especially with severe osteoporosis</li>
            <li><strong>Start slowly</strong> — Begin with light intensity and progress gradually</li>
            <li><strong>Prioritize balance</strong> — Falls cause most osteoporotic fractures; train balance daily</li>
            <li><strong>Use proper form</strong> — Consider working with a PT or certified trainer initially</li>
            <li><strong>Avoid jerky movements</strong> — Smooth, controlled motion is safer</li>
            <li><strong>Hold rails</strong> — Use support during balance exercises until confident</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Exercise doesn&apos;t break bones—inactivity does. With osteoporosis, the goal is to load your bones safely through weight-bearing and resistance exercise while improving balance to prevent falls.
          </p>
          <p>
            Avoid high-impact activities and spinal flexion under load, but don&apos;t avoid movement altogether. The right exercise program can slow bone loss, build protective muscle, and dramatically reduce your fracture risk.
          </p>
          <p>
            If you&apos;re unsure where to start, consider working with a physical therapist who specializes in osteoporosis. They can assess your specific risk level and create a safe, effective program.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to build stronger bones?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercise recommendations based on your condition and goals.
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
