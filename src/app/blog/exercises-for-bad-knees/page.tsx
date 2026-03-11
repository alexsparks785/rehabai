import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Bad Knees: Safe Workouts That Won\'t Hurt | Foundational Rehab',
  description: 'Knee pain doesn\'t mean you can\'t exercise. These knee-friendly exercises build strength and fitness while protecting your joints.',
};

export default function ExercisesForBadKneesPage() {
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
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Bad Knees: Safe Workouts That Won&apos;t Hurt
          </h1>
          <p className="text-xl text-gray-600">
            Knee pain doesn&apos;t have to sideline you. The right exercises can keep you active while protecting your joints.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Got bad knees? You&apos;re not alone. But here&apos;s the good news: exercise actually helps most knee problems. The key is choosing movements that strengthen without aggravating.
          </p>

          <h2>Why Exercise Helps Bad Knees</h2>
          <ul>
            <li><strong>Strengthens supporting muscles:</strong> Strong quads and glutes take pressure off the joint</li>
            <li><strong>Improves lubrication:</strong> Movement pumps synovial fluid through the joint</li>
            <li><strong>Reduces stiffness:</strong> Regular motion keeps joints mobile</li>
            <li><strong>Supports weight management:</strong> Every pound lost reduces knee load by 4 pounds</li>
            <li><strong>Builds stability:</strong> Strong muscles prevent abnormal joint movement</li>
          </ul>

          <h2>Exercises to Avoid (or Modify)</h2>
          <p>These common exercises can aggravate knee problems:</p>
          <ul>
            <li><strong>Deep squats:</strong> Full depth puts high stress on the joint</li>
            <li><strong>Lunges:</strong> Especially with knee traveling far over toes</li>
            <li><strong>Running on hard surfaces:</strong> High impact, repetitive stress</li>
            <li><strong>Jump exercises:</strong> Plyometrics can be hard on knees</li>
            <li><strong>Leg extensions with heavy weight:</strong> High shear force on kneecap</li>
            <li><strong>Full-range leg press:</strong> Deep flexion under load</li>
          </ul>
          <p>This doesn&apos;t mean never do them—but modify or substitute when knees are bothering you.</p>

          <h2>Best Knee-Friendly Exercises</h2>

          <h3>Quad Strengthening</h3>

          <p><strong>Straight Leg Raises</strong></p>
          <ol>
            <li>Lie on back, one knee bent, one leg straight</li>
            <li>Tighten the thigh of straight leg</li>
            <li>Lift leg to height of bent knee</li>
            <li>Hold 3 seconds, lower slowly</li>
          </ol>
          <p><em>Reps: 10-15 each leg, 3 sets</em></p>
          <p>Zero knee bending—strengthens quads safely.</p>

          <p><strong>Quad Sets</strong></p>
          <ol>
            <li>Sit with legs straight</li>
            <li>Tighten thigh muscle, pressing knee down</li>
            <li>Hold 5-10 seconds</li>
            <li>Release</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Isometric—no movement at all.</p>

          <p><strong>Terminal Knee Extension (TKE)</strong></p>
          <ol>
            <li>Loop resistance band around fixed object and behind knee</li>
            <li>Stand on that leg, knee slightly bent</li>
            <li>Straighten knee against band resistance</li>
            <li>Control return</li>
          </ol>
          <p><em>Reps: 15-20 each leg, 3 sets</em></p>
          <p>Targets the VMO—the inner quad that stabilizes the kneecap.</p>

          <p><strong>Partial Wall Squats</strong></p>
          <ol>
            <li>Stand with back against wall</li>
            <li>Slide down only 30-45 degrees (not deep)</li>
            <li>Hold position or slide back up</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets, or hold 30-60 seconds</em></p>

          <h3>Glute and Hip Strengthening</h3>
          <p>Strong hips reduce knee stress by improving alignment.</p>

          <p><strong>Glute Bridges</strong></p>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Drive through heels, lift hips</li>
            <li>Squeeze glutes at top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Minimal knee stress, maximum glute work.</p>

          <p><strong>Clamshells</strong></p>
          <ol>
            <li>Lie on side, knees bent 90 degrees</li>
            <li>Keep feet together, open top knee</li>
            <li>Squeeze glute at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20 each side, 3 sets</em></p>
          <p>Strengthens hip abductors that control knee position.</p>

          <p><strong>Side-Lying Hip Abduction</strong></p>
          <ol>
            <li>Lie on side, legs straight</li>
            <li>Lift top leg toward ceiling</li>
            <li>Keep hips stacked</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20 each side, 3 sets</em></p>

          <p><strong>Standing Hip Abduction</strong></p>
          <ol>
            <li>Stand holding chair for balance</li>
            <li>Lift leg out to side</li>
            <li>Keep body upright—don&apos;t lean</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15 each leg, 3 sets</em></p>

          <h3>Low-Impact Cardio</h3>

          <p><strong>Swimming</strong></p>
          <p>The best exercise for bad knees. Water supports body weight—nearly zero joint stress.</p>

          <p><strong>Water Aerobics</strong></p>
          <p>Gets heart rate up without impact. The resistance builds strength too.</p>

          <p><strong>Cycling (Stationary or Regular)</strong></p>
          <p>Low impact, strengthens quads, keeps knees moving. Keep resistance moderate.</p>

          <p><strong>Elliptical</strong></p>
          <p>Smooth motion without the impact of running.</p>

          <p><strong>Walking</strong></p>
          <p>Low impact if you avoid hills and keep a moderate pace. Good shoes help.</p>

          <h3>Flexibility Work</h3>

          <p><strong>Hamstring Stretch</strong></p>
          <ol>
            <li>Lie on back, lift one leg</li>
            <li>Hold behind thigh, gently straighten knee</li>
            <li>Hold 30 seconds each leg</li>
          </ol>

          <p><strong>Quad Stretch</strong></p>
          <ol>
            <li>Stand holding chair</li>
            <li>Bend knee, grab ankle</li>
            <li>Pull heel toward glute gently</li>
            <li>Hold 30 seconds each leg</li>
          </ol>
          <p>Keep knees together—don&apos;t force if painful.</p>

          <p><strong>Calf Stretch</strong></p>
          <ol>
            <li>Face wall, one foot back</li>
            <li>Keep back heel down</li>
            <li>Lean into wall</li>
            <li>Hold 30 seconds each leg</li>
          </ol>

          <h2>Sample Knee-Friendly Workout</h2>

          <h3>Full Routine (25 min)</h3>
          <ul>
            <li>Warm-up: 5 min cycling or walking</li>
            <li>Quad sets: 15 × 2</li>
            <li>Straight leg raises: 12 each × 3</li>
            <li>Glute bridges: 15 × 3</li>
            <li>Clamshells: 15 each × 3</li>
            <li>Partial wall squats: 10 × 3</li>
            <li>Standing hip abduction: 12 each × 2</li>
            <li>Stretches: hamstrings, quads, calves</li>
          </ul>

          <h3>Quick Daily Routine (10 min)</h3>
          <ul>
            <li>Quad sets: 15 × 2</li>
            <li>Straight leg raises: 10 each × 2</li>
            <li>Glute bridges: 15 × 2</li>
            <li>Clamshells: 15 each × 2</li>
          </ul>

          <h2>Tips for Exercising with Bad Knees</h2>
          <ul>
            <li><strong>Warm up longer:</strong> Get blood flowing before loading</li>
            <li><strong>Ice after if needed:</strong> 15-20 min to reduce inflammation</li>
            <li><strong>Start light:</strong> You can always add more</li>
            <li><strong>Stop if sharp pain:</strong> Discomfort is okay, sharp pain is not</li>
            <li><strong>Modify range of motion:</strong> Partial squats instead of deep</li>
            <li><strong>Strengthen hips:</strong> Weak hips cause knee problems</li>
            <li><strong>Lose weight if needed:</strong> Reduces knee load significantly</li>
          </ul>

          <h2>When to See a Professional</h2>
          <ul>
            <li>Knee gives way or feels unstable</li>
            <li>Swelling that doesn&apos;t go down</li>
            <li>Can&apos;t bear weight</li>
            <li>Locked knee—can&apos;t straighten or bend fully</li>
            <li>Pain that worsens despite rest</li>
            <li>Clicking or catching with pain</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Bad knees don&apos;t mean no exercise. The right movements can reduce pain, improve function, and protect your joints long-term. Focus on strengthening quads and glutes, choose low-impact cardio, and modify exercises that aggravate your knees.
          </p>
          <p>
            Movement is medicine—even for bad knees.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Need a knee-safe program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized workouts that protect your knees while building strength.
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
