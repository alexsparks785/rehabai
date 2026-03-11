import Link from 'next/link';

export const metadata = {
  title: 'Leg Exercises: Complete Lower Body Workout Guide | Foundational Rehab',
  description: 'Build stronger legs with the best exercises for quads, hamstrings, glutes, and calves. Bodyweight, dumbbell, and gym workouts for all levels.',
};

export default function LegExercisesPage() {
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
            <span>9 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Leg Exercises: Complete Lower Body Workout Guide
          </h1>
          <p className="text-xl text-gray-600">
            Your legs contain the largest muscles in your body. Train them right, and everything else gets easier.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Strong legs are the foundation of athletic performance, daily function, and overall health. They burn more calories, support your joints, and keep you moving well as you age.
          </p>
          <p>
            Whether you&apos;re training at home or in a gym, this guide covers the best exercises for every muscle in your lower body.
          </p>

          <h2>Leg Muscle Anatomy</h2>
          <ul>
            <li><strong>Quadriceps:</strong> Front of thigh—extends the knee</li>
            <li><strong>Hamstrings:</strong> Back of thigh—bends the knee, extends the hip</li>
            <li><strong>Glutes:</strong> Your butt—extends and rotates the hip</li>
            <li><strong>Calves:</strong> Back of lower leg—points the foot</li>
            <li><strong>Hip adductors:</strong> Inner thigh—brings legs together</li>
            <li><strong>Hip abductors:</strong> Outer hip—moves leg away from body</li>
          </ul>
          <p>A complete leg workout hits all of these muscle groups.</p>

          <h2>Quad-Dominant Exercises</h2>

          <h3>Squats</h3>
          <ol>
            <li>Stand with feet shoulder-width apart</li>
            <li>Push hips back and bend knees</li>
            <li>Lower until thighs are parallel (or deeper)</li>
            <li>Keep chest up, knees tracking over toes</li>
            <li>Drive through whole foot to stand</li>
          </ol>
          <p><em>Reps: 8-15, 3-4 sets</em></p>
          <p>The king of leg exercises. Add weight as you progress.</p>

          <h3>Goblet Squat</h3>
          <ol>
            <li>Hold a dumbbell or kettlebell at chest level</li>
            <li>Squat down, keeping weight close to body</li>
            <li>Use elbows to push knees out at bottom</li>
            <li>Stand up</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Great for learning squat form and building depth.</p>

          <h3>Leg Press</h3>
          <ol>
            <li>Sit in leg press machine, feet shoulder-width on platform</li>
            <li>Lower weight by bending knees toward chest</li>
            <li>Don&apos;t let lower back round off the pad</li>
            <li>Press back to start</li>
          </ol>
          <p><em>Reps: 10-15, 3-4 sets</em></p>

          <h3>Lunges</h3>
          <ol>
            <li>Step forward into a lunge</li>
            <li>Lower back knee toward ground</li>
            <li>Front knee stays over ankle</li>
            <li>Push back to standing</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>
          <p>Variations: reverse lunges, walking lunges, lateral lunges.</p>

          <h3>Bulgarian Split Squat</h3>
          <ol>
            <li>Stand in front of a bench, one foot on bench behind you</li>
            <li>Lower into a lunge position</li>
            <li>Front knee tracks over toes</li>
            <li>Drive through front foot to stand</li>
          </ol>
          <p><em>Reps: 8-10 each leg, 3 sets</em></p>
          <p>One of the best single-leg exercises. Challenging but effective.</p>

          <h3>Step-Ups</h3>
          <ol>
            <li>Stand facing a bench or step</li>
            <li>Step up with one foot, driving through that leg</li>
            <li>Bring other foot up</li>
            <li>Step down with control</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>

          <h3>Leg Extensions (Machine)</h3>
          <ol>
            <li>Sit in leg extension machine</li>
            <li>Extend legs until straight</li>
            <li>Squeeze quads at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Good isolation exercise. Don&apos;t go too heavy—protect your knees.</p>

          <h2>Hamstring Exercises</h2>

          <h3>Romanian Deadlift (RDL)</h3>
          <ol>
            <li>Hold weight in front of thighs</li>
            <li>Push hips back, slight knee bend</li>
            <li>Lower weight along your legs</li>
            <li>Feel stretch in hamstrings</li>
            <li>Drive hips forward to stand</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>
          <p>The best hamstring exercise. Keep back flat throughout.</p>

          <h3>Single-Leg RDL</h3>
          <ol>
            <li>Stand on one leg</li>
            <li>Hinge forward, back leg extends behind</li>
            <li>Lower weight toward floor</li>
            <li>Return to standing</li>
          </ol>
          <p><em>Reps: 8-10 each leg, 3 sets</em></p>
          <p>Builds balance and addresses imbalances.</p>

          <h3>Good Mornings</h3>
          <ol>
            <li>Bar on upper back (or just bodyweight)</li>
            <li>Slight knee bend</li>
            <li>Hinge at hips, lowering torso</li>
            <li>Keep back flat</li>
            <li>Return to standing</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Lying Leg Curls</h3>
          <ol>
            <li>Lie face down on leg curl machine</li>
            <li>Curl heels toward glutes</li>
            <li>Squeeze hamstrings at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h3>Nordic Curls (Advanced)</h3>
          <ol>
            <li>Kneel on pad, ankles secured</li>
            <li>Slowly lower body forward, resisting with hamstrings</li>
            <li>Catch yourself with hands if needed</li>
            <li>Push back up and use hamstrings to return</li>
          </ol>
          <p><em>Reps: 3-6, 3 sets</em></p>
          <p>Extremely challenging. Great for hamstring strength and injury prevention.</p>

          <h2>Glute Exercises</h2>

          <h3>Hip Thrust</h3>
          <ol>
            <li>Upper back on bench, feet flat on floor</li>
            <li>Weight (barbell or dumbbell) across hips</li>
            <li>Drive through heels, lift hips until body is straight</li>
            <li>Squeeze glutes hard at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-15, 3-4 sets</em></p>
          <p>The best glute exercise. You can load it heavy.</p>

          <h3>Glute Bridge</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Push through heels, lift hips</li>
            <li>Squeeze glutes at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Beginner-friendly version of hip thrust.</p>

          <h3>Single-Leg Glute Bridge</h3>
          <ol>
            <li>Same as glute bridge, one leg extended</li>
            <li>Push through single heel</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>

          <h3>Cable Kickbacks</h3>
          <ol>
            <li>Attach ankle strap to low cable</li>
            <li>Face machine, slight forward lean</li>
            <li>Kick leg back, squeezing glute</li>
            <li>Return with control</li>
          </ol>
          <p><em>Reps: 12-15 each leg, 3 sets</em></p>

          <h3>Clamshells</h3>
          <ol>
            <li>Lie on side, knees bent 90 degrees</li>
            <li>Keep feet together, open top knee</li>
            <li>Squeeze glute at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20 each side, 2-3 sets</em></p>
          <p>Great for glute med activation and hip stability.</p>

          <h2>Calf Exercises</h2>

          <h3>Standing Calf Raises</h3>
          <ol>
            <li>Stand on edge of step, heels hanging off</li>
            <li>Rise up onto toes</li>
            <li>Hold briefly at top</li>
            <li>Lower below step level for full stretch</li>
          </ol>
          <p><em>Reps: 15-20, 3-4 sets</em></p>
          <p>Full range of motion is key.</p>

          <h3>Seated Calf Raises</h3>
          <ol>
            <li>Sit on calf raise machine or with weight on knees</li>
            <li>Same motion—rise up, lower with stretch</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Targets the soleus (bent knee) vs gastrocnemius (straight knee).</p>

          <h3>Single-Leg Calf Raises</h3>
          <ol>
            <li>Stand on one foot on edge of step</li>
            <li>Hold something for balance</li>
            <li>Raise and lower through full range</li>
          </ol>
          <p><em>Reps: 12-15 each leg, 3 sets</em></p>

          <h2>Sample Leg Workouts</h2>

          <h3>Beginner (Bodyweight)</h3>
          <ul>
            <li>Bodyweight squats: 15 × 3</li>
            <li>Reverse lunges: 10 each × 3</li>
            <li>Glute bridges: 15 × 3</li>
            <li>Calf raises: 15 × 3</li>
          </ul>

          <h3>Intermediate (Dumbbells)</h3>
          <ul>
            <li>Goblet squats: 12 × 3</li>
            <li>Romanian deadlifts: 10 × 3</li>
            <li>Walking lunges: 10 each × 3</li>
            <li>Dumbbell hip thrusts: 12 × 3</li>
            <li>Calf raises: 15 × 3</li>
          </ul>

          <h3>Advanced (Gym)</h3>
          <ul>
            <li>Barbell squats: 8 × 4</li>
            <li>Romanian deadlifts: 10 × 3</li>
            <li>Bulgarian split squats: 10 each × 3</li>
            <li>Leg curls: 12 × 3</li>
            <li>Hip thrusts: 10 × 3</li>
            <li>Standing calf raises: 15 × 4</li>
          </ul>

          <h3>Quick 20-Minute Leg Blast</h3>
          <ul>
            <li>Goblet squats: 12 × 3</li>
            <li>RDLs: 10 × 3</li>
            <li>Reverse lunges: 10 each × 2</li>
            <li>Glute bridges: 15 × 2</li>
          </ul>

          <h2>Leg Training Tips</h2>
          <ul>
            <li><strong>Train legs 2x per week:</strong> Enough volume to grow, enough rest to recover</li>
            <li><strong>Full range of motion:</strong> Deep squats beat partial reps</li>
            <li><strong>Progressive overload:</strong> Add weight, reps, or sets over time</li>
            <li><strong>Don&apos;t skip single-leg work:</strong> Fixes imbalances, builds stability</li>
            <li><strong>Include all muscle groups:</strong> Quads, hamstrings, glutes, and calves</li>
            <li><strong>Warm up properly:</strong> Light cardio + dynamic stretches before heavy lifting</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Strong legs are non-negotiable for health and performance. They&apos;re your largest muscle group—training them hard burns calories, builds muscle, and keeps you moving well.
          </p>
          <p>
            Don&apos;t skip leg day. Your future self will thank you.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized leg workout program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom lower body programs based on your equipment and goals.
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
