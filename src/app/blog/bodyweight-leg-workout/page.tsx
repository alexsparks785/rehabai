import Link from 'next/link';

export const metadata = {
  title: 'Bodyweight Leg Workout: Build Strong Legs Without Equipment | Foundational Rehab',
  description: 'No weights? No problem. Complete bodyweight leg workout with exercises, progressions, and programs for all levels.',
};

export default function BodyweightLegWorkoutPage() {
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
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Strength</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bodyweight Leg Workout: Build Strong Legs Without Equipment
          </h1>
          <p className="text-xl text-gray-600">
            Your legs carry your bodyweight all day. Use it to make them stronger.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Think you need a gym to build strong legs? You don&apos;t. Bodyweight exercises can build serious leg strength and muscle—you just need to know how to progress them. Here&apos;s everything you need for effective leg training with zero equipment.
          </p>

          <h2>Bodyweight Leg Exercises</h2>

          <h3>Quad-Dominant</h3>

          <h4>1. Bodyweight Squat</h4>
          <ul>
            <li>Feet shoulder-width apart</li>
            <li>Sit back and down like sitting in a chair</li>
            <li>Knees track over toes</li>
            <li>Go as low as mobility allows with good form</li>
          </ul>
          <p><strong>Make it harder:</strong> Pause at bottom, slow tempo (4 sec down), pulse at bottom</p>

          <h4>2. Bulgarian Split Squat</h4>
          <ul>
            <li>Rear foot elevated on chair, bench, or couch</li>
            <li>Lower until front thigh is parallel</li>
            <li>Keep torso upright</li>
            <li>One of the best bodyweight leg exercises</li>
          </ul>

          <h4>3. Sissy Squat</h4>
          <ul>
            <li>Hold something for balance</li>
            <li>Rise onto toes, lean back while bending knees</li>
            <li>Lower knees forward while keeping hips extended</li>
            <li>Intense quad exercise—advanced</li>
          </ul>

          <h4>4. Step-Ups</h4>
          <ul>
            <li>Step onto elevated surface (chair, stairs, box)</li>
            <li>Drive through heel</li>
            <li>Higher surface = harder</li>
          </ul>

          <h3>Glute/Hip Dominant</h3>

          <h4>5. Glute Bridge</h4>
          <ul>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Drive hips up, squeeze glutes at top</li>
            <li>Hold 2-3 seconds, lower with control</li>
          </ul>
          <p><strong>Make it harder:</strong> Single-leg version, feet elevated, marching bridges</p>

          <h4>6. Hip Thrust (Shoulders Elevated)</h4>
          <ul>
            <li>Upper back on couch or bench</li>
            <li>Feet flat, knees at 90° at top</li>
            <li>Drive hips up, squeeze glutes</li>
          </ul>
          <p><strong>Make it harder:</strong> Single leg, pause at top, slow eccentric</p>

          <h4>7. Romanian Deadlift (Single Leg)</h4>
          <ul>
            <li>Stand on one leg</li>
            <li>Hinge forward, extending other leg behind</li>
            <li>Feel stretch in standing-leg hamstring</li>
            <li>Return to standing</li>
          </ul>

          <h4>8. Reverse Lunge</h4>
          <ul>
            <li>Step backward into lunge</li>
            <li>Lower until both knees at 90°</li>
            <li>Push through front foot to stand</li>
          </ul>

          <h3>Hamstring Focused</h3>

          <h4>9. Nordic Curl (Advanced)</h4>
          <ul>
            <li>Kneel, feet anchored under something heavy</li>
            <li>Slowly lower body forward, keeping hips extended</li>
            <li>Use hands to catch yourself and push back up</li>
            <li>One of the most challenging bodyweight exercises</li>
          </ul>

          <h4>10. Sliding Leg Curl</h4>
          <ul>
            <li>Lie on back, heels on sliders/towels on hard floor</li>
            <li>Bridge up, then slide heels toward you</li>
            <li>Slide back out with control</li>
          </ul>

          <h3>Calf Focused</h3>

          <h4>11. Calf Raises</h4>
          <ul>
            <li>Stand on edge of step, heels hanging off</li>
            <li>Rise up onto toes</li>
            <li>Lower below step level for full stretch</li>
          </ul>
          <p><strong>Make it harder:</strong> Single leg, slow tempo, pause at top</p>

          <h3>Explosive</h3>

          <h4>12. Jump Squats</h4>
          <ul>
            <li>Squat down, explode up into jump</li>
            <li>Land softly, immediately descend into next rep</li>
          </ul>

          <h4>13. Lunge Jumps</h4>
          <ul>
            <li>Lunge position, jump and switch legs mid-air</li>
            <li>Land softly in opposite lunge</li>
            <li>Advanced plyometric</li>
          </ul>

          <h2>Complete Bodyweight Leg Workouts</h2>

          <h3>Beginner Workout (20 minutes)</h3>
          <ul>
            <li>Bodyweight squats: 3 × 15</li>
            <li>Glute bridges: 3 × 15</li>
            <li>Reverse lunges: 3 × 10 each leg</li>
            <li>Calf raises: 3 × 15</li>
          </ul>
          <p>Rest 60 seconds between sets.</p>

          <h3>Intermediate Workout (25 minutes)</h3>
          <ul>
            <li>Bulgarian split squats: 3 × 10 each leg</li>
            <li>Hip thrusts: 3 × 15</li>
            <li>Walking lunges: 3 × 12 each leg</li>
            <li>Single-leg Romanian deadlift: 3 × 10 each leg</li>
            <li>Single-leg calf raises: 3 × 12 each leg</li>
          </ul>
          <p>Rest 45-60 seconds between sets.</p>

          <h3>Advanced Workout (30 minutes)</h3>
          <ul>
            <li>Pistol squat progression: 4 × 5-8 each leg</li>
            <li>Nordic curl (or regression): 3 × 5-8</li>
            <li>Bulgarian split squat (slow tempo): 3 × 8 each leg</li>
            <li>Single-leg hip thrust: 3 × 12 each leg</li>
            <li>Jump squats: 3 × 10</li>
            <li>Calf raises (slow tempo): 3 × 15</li>
          </ul>
          <p>Rest 60-90 seconds between sets.</p>

          <h2>How to Progress Without Weights</h2>
          <ul>
            <li><strong>Single leg:</strong> Most effective progression—doubles the load per leg</li>
            <li><strong>Tempo:</strong> Slow down (4 sec down, 2 sec up)</li>
            <li><strong>Pause:</strong> Hold at the bottom for 2-3 seconds</li>
            <li><strong>Pulses:</strong> Partial reps at the hardest point</li>
            <li><strong>Range of motion:</strong> Deeper squats, deficit lunges</li>
            <li><strong>Plyometrics:</strong> Add jumps once strong enough</li>
            <li><strong>Volume:</strong> More sets and reps</li>
          </ul>

          <h2>How Often to Train Legs</h2>
          <ul>
            <li><strong>Beginners:</strong> 2 times per week</li>
            <li><strong>Intermediate:</strong> 2-3 times per week</li>
            <li><strong>Advanced:</strong> 3-4 times per week (varies by intensity)</li>
          </ul>
          <p>
            Allow 48-72 hours between intense leg sessions for recovery.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Bodyweight leg training works—if you know how to progress. Single-leg exercises, tempo manipulation, and plyometrics can build serious strength and muscle without touching a weight. The key is progressive overload: keep making the exercises harder over time.
          </p>
          <p>
            Start with basic squats and lunges, progress to single-leg variations, and eventually add jumps and advanced exercises. Your legs will grow stronger than you might think possible with just your bodyweight.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a structured bodyweight program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive workouts that build strength without equipment.
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
