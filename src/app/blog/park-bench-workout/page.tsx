import Link from 'next/link';

export const metadata = {
  title: 'Park Bench Workout: Full Body Fitness Outdoors | Foundational Rehab',
  description: 'A park bench is all you need for a complete strength workout. 10 exercises, 3 complete workouts, no gym required.',
};

export default function ParkBenchWorkoutPage() {
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
            Park Bench Workout: Full Body Fitness Outdoors
          </h1>
          <p className="text-xl text-gray-600">
            Fresh air, sunshine, and a solid workout—all you need is a bench.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Park benches are everywhere, and they&apos;re secretly one of the most versatile pieces of workout equipment available. With just a sturdy bench, you can work your entire body—upper, lower, and core—while enjoying the outdoors.
          </p>
          <p>
            Here are 10 park bench exercises and three complete workouts you can do anywhere.
          </p>

          <h2>Why Outdoor Workouts Work</h2>
          <ul>
            <li><strong>Vitamin D</strong> — Sunlight exposure boosts mood and health</li>
            <li><strong>Mental health</strong> — Nature reduces stress and anxiety</li>
            <li><strong>Fresh air</strong> — Better than recycled gym air</li>
            <li><strong>Free</strong> — No membership required</li>
            <li><strong>Accessible</strong> — Parks are everywhere</li>
          </ul>
          <p>
            Research shows outdoor exercise provides greater mental health benefits than indoor exercise. The bench is just a bonus.
          </p>

          <h2>Safety First</h2>
          <ul>
            <li>Make sure the bench is sturdy and stable</li>
            <li>Check for wet or slippery surfaces</li>
            <li>Avoid benches with wide gaps between slats</li>
            <li>Start with easier variations if new to exercise</li>
          </ul>

          <h2>10 Park Bench Exercises</h2>

          <h3>Upper Body</h3>

          <h4>1. Incline Push-Ups</h4>
          <p>
            <strong>Targets:</strong> Chest, shoulders, triceps
          </p>
          <ul>
            <li>Hands on bench seat, shoulder-width apart</li>
            <li>Body in straight line from head to heels</li>
            <li>Lower chest toward bench, push back up</li>
            <li>Easier than floor push-ups (great for beginners)</li>
          </ul>

          <h4>2. Decline Push-Ups</h4>
          <p>
            <strong>Targets:</strong> Upper chest, shoulders, triceps
          </p>
          <ul>
            <li>Feet on bench seat, hands on ground</li>
            <li>Body in straight line</li>
            <li>Lower and push up</li>
            <li>Harder than regular push-ups (for advanced)</li>
          </ul>

          <h4>3. Tricep Dips</h4>
          <p>
            <strong>Targets:</strong> Triceps, shoulders
          </p>
          <ul>
            <li>Hands on bench edge behind you, fingers forward</li>
            <li>Legs extended or bent (bent is easier)</li>
            <li>Lower body by bending elbows to 90°</li>
            <li>Push back up</li>
          </ul>

          <h3>Lower Body</h3>

          <h4>4. Step-Ups</h4>
          <p>
            <strong>Targets:</strong> Quads, glutes, hamstrings
          </p>
          <ul>
            <li>Face the bench, step one foot up onto seat</li>
            <li>Drive through heel to stand on bench</li>
            <li>Step down with control</li>
            <li>Alternate legs or do all reps on one side</li>
          </ul>

          <h4>5. Bulgarian Split Squats</h4>
          <p>
            <strong>Targets:</strong> Quads, glutes, balance
          </p>
          <ul>
            <li>Stand facing away from bench</li>
            <li>Place back foot on bench behind you</li>
            <li>Lower into a lunge until front thigh is parallel</li>
            <li>Push through front heel to stand</li>
          </ul>

          <h4>6. Single-Leg Glute Bridge</h4>
          <p>
            <strong>Targets:</strong> Glutes, hamstrings
          </p>
          <ul>
            <li>Lie on ground, one heel on bench</li>
            <li>Other leg straight up or bent</li>
            <li>Lift hips until body is straight</li>
            <li>Squeeze glute at top, lower with control</li>
          </ul>

          <h4>7. Box Jumps (or Step-Ups with Drive)</h4>
          <p>
            <strong>Targets:</strong> Power, legs, cardio
          </p>
          <ul>
            <li>Face bench, jump up onto seat</li>
            <li>Land softly with knees bent</li>
            <li>Step down (don&apos;t jump down)</li>
            <li>For less impact: fast step-ups with knee drive</li>
          </ul>

          <h3>Core</h3>

          <h4>8. Incline Plank</h4>
          <p>
            <strong>Targets:</strong> Core, shoulders
          </p>
          <ul>
            <li>Forearms on bench seat</li>
            <li>Body straight from head to heels</li>
            <li>Hold 30-60 seconds</li>
            <li>Easier than floor plank</li>
          </ul>

          <h4>9. Decline Plank</h4>
          <p>
            <strong>Targets:</strong> Core (harder variation)
          </p>
          <ul>
            <li>Feet on bench, forearms on ground</li>
            <li>Body straight</li>
            <li>Hold 30-60 seconds</li>
            <li>Much harder than regular plank</li>
          </ul>

          <h4>10. Seated Knee Tucks</h4>
          <p>
            <strong>Targets:</strong> Lower abs
          </p>
          <ul>
            <li>Sit on bench edge, hands gripping sides</li>
            <li>Lean back slightly, legs extended</li>
            <li>Pull knees toward chest</li>
            <li>Extend and repeat</li>
          </ul>

          <h2>Complete Park Bench Workouts</h2>

          <h3>Workout 1: Beginner (20 minutes)</h3>
          <p>
            <strong>Warm-up:</strong> 5-min walk to the park
          </p>
          <p>
            <strong>Circuit (repeat 2-3x):</strong>
          </p>
          <ul>
            <li>Incline push-ups: 10 reps</li>
            <li>Step-ups: 10 each leg</li>
            <li>Incline plank: 30 seconds</li>
            <li>Tricep dips: 10 reps</li>
            <li>Glute bridges (both feet on bench): 15 reps</li>
          </ul>
          <p>
            Rest 60 seconds between circuits.
          </p>

          <h3>Workout 2: Intermediate (30 minutes)</h3>
          <p>
            <strong>Warm-up:</strong> 3-min jog + dynamic stretches
          </p>
          <p>
            <strong>Circuit (repeat 3-4x):</strong>
          </p>
          <ul>
            <li>Incline push-ups: 15 reps</li>
            <li>Bulgarian split squats: 10 each leg</li>
            <li>Tricep dips: 12 reps</li>
            <li>Single-leg glute bridge: 10 each leg</li>
            <li>Seated knee tucks: 15 reps</li>
            <li>Step-ups with knee drive: 10 each leg</li>
          </ul>
          <p>
            Rest 45 seconds between circuits.
          </p>

          <h3>Workout 3: Advanced (35-40 minutes)</h3>
          <p>
            <strong>Warm-up:</strong> 5-min jog + mobility
          </p>
          <p>
            <strong>Circuit (repeat 4x):</strong>
          </p>
          <ul>
            <li>Decline push-ups: 12 reps</li>
            <li>Bulgarian split squats: 12 each leg</li>
            <li>Tricep dips: 15 reps</li>
            <li>Box jumps or explosive step-ups: 10 reps</li>
            <li>Decline plank: 45 seconds</li>
            <li>Single-leg glute bridge: 12 each leg</li>
            <li>Incline push-ups (burnout): to failure</li>
          </ul>
          <p>
            Rest 30 seconds between circuits.
          </p>
          <p>
            <strong>Finisher:</strong> 5-min walk/jog cool down + stretching
          </p>

          <h2>Making It a Habit</h2>
          <ul>
            <li><strong>Same time, same bench</strong> — Routine builds consistency</li>
            <li><strong>Combine with a walk</strong> — Walk to park, workout, walk home</li>
            <li><strong>Bring a friend</strong> — Accountability and social time</li>
            <li><strong>Podcast or music</strong> — Make it enjoyable</li>
            <li><strong>Progress over time</strong> — Add reps, sets, or harder variations</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            You don&apos;t need a gym membership to get a great workout. A park bench provides everything you need for a full-body strength session—plus fresh air, sunshine, and a change of scenery.
          </p>
          <p>
            Start with the beginner workout, progress as you get stronger, and enjoy the fact that your &quot;gym&quot; is free, always open, and comes with a view. Your body doesn&apos;t care where the workout happens—it just responds to the work.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want more outdoor workout ideas?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized workout routines you can do anywhere.
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
