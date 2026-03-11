import Link from 'next/link';

export const metadata = {
  title: 'How to Warm Up Properly: The Complete Guide | Foundational Rehab',
  description: 'Learn how to warm up correctly before any workout. Science-backed warm-up routines for lifting, running, sports, and general fitness.',
};

export default function HowToWarmUpProperlyPage() {
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
            How to Warm Up Properly: The Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            A proper warm-up takes 5-10 minutes and can dramatically improve performance while reducing injury risk. Here&apos;s how to do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Skipping the warm-up is one of the most common training mistakes. But a good warm-up isn&apos;t about tradition—it&apos;s about preparing your body to perform and protecting it from injury.
          </p>
          <p>
            The research is clear: proper warm-ups improve strength, speed, and power while reducing injury rates.
          </p>

          <h2>Why Warm-Ups Work</h2>
          <ul>
            <li><strong>Increases muscle temperature:</strong> Warm muscles contract faster and more forcefully</li>
            <li><strong>Improves blood flow:</strong> Delivers oxygen and nutrients to working muscles</li>
            <li><strong>Increases joint fluid:</strong> Lubricates joints for smoother movement</li>
            <li><strong>Activates the nervous system:</strong> Primes movement patterns</li>
            <li><strong>Reduces stiffness:</strong> Muscles and tendons become more pliable</li>
            <li><strong>Mental preparation:</strong> Focuses your mind on the workout</li>
          </ul>

          <h2>The 3-Part Warm-Up Formula</h2>

          <h3>Part 1: General Warm-Up (2-5 minutes)</h3>
          <p>
            Light cardio to raise your heart rate and body temperature.
          </p>
          <ul>
            <li>Jumping jacks</li>
            <li>Light jogging or cycling</li>
            <li>Jump rope</li>
            <li>Rowing machine</li>
            <li>Brisk walking</li>
          </ul>
          <p>
            Goal: Light sweat, elevated heart rate. Not exhausting—you should be able to talk.
          </p>

          <h3>Part 2: Dynamic Stretching (3-5 minutes)</h3>
          <p>
            Active movements that take joints through their range of motion. NO static stretching here.
          </p>
          <ul>
            <li>Leg swings (front-to-back and side-to-side)</li>
            <li>Arm circles</li>
            <li>Hip circles</li>
            <li>Walking lunges</li>
            <li>High knees</li>
            <li>Butt kicks</li>
            <li>Torso rotations</li>
          </ul>

          <h3>Part 3: Movement-Specific Prep (2-5 minutes)</h3>
          <p>
            Practice the movements you&apos;re about to do, starting light.
          </p>
          <ul>
            <li>Before squatting: Bodyweight squats, goblet squats</li>
            <li>Before running: Running drills, strides</li>
            <li>Before throwing: Light throws with progression</li>
          </ul>

          <h2>Static Stretching: Not for Warm-Ups</h2>
          <p>
            Important: <strong>Static stretching BEFORE exercise can reduce performance</strong>—power output, speed, and strength all decrease.
          </p>
          <p>
            Save static stretching for AFTER your workout or as a separate flexibility session.
          </p>

          <h2>Warm-Up Routines by Activity</h2>

          <h3>Weight Training Warm-Up (10 minutes)</h3>
          <ol>
            <li><strong>General:</strong> 3 minutes rowing or jumping jacks</li>
            <li><strong>Dynamic stretching:</strong>
              <ul>
                <li>Arm circles: 10 each direction</li>
                <li>Leg swings: 10 each direction per leg</li>
                <li>Hip circles: 10 each direction per leg</li>
                <li>Cat-cow: 10 reps</li>
                <li>World&apos;s greatest stretch: 5 per side</li>
              </ul>
            </li>
            <li><strong>Movement prep:</strong>
              <ul>
                <li>Bodyweight version of main lift: 15 reps</li>
                <li>Light weight: 10 reps</li>
                <li>Working up: Several sets increasing weight</li>
              </ul>
            </li>
          </ol>

          <h3>Running Warm-Up (8 minutes)</h3>
          <ol>
            <li><strong>Walk:</strong> 2 minutes brisk walking</li>
            <li><strong>Dynamic stretching:</strong>
              <ul>
                <li>Leg swings: 15 each direction per leg</li>
                <li>Walking lunges: 10 per side</li>
                <li>High knees: 20 steps</li>
                <li>Butt kicks: 20 steps</li>
                <li>Lateral shuffles: 20 steps each direction</li>
                <li>Skips: 20 steps</li>
              </ul>
            </li>
            <li><strong>Strides:</strong> 4-6 × 50-100m at 70-80% effort</li>
          </ol>

          <h3>Sports/HIIT Warm-Up (10 minutes)</h3>
          <ol>
            <li><strong>General:</strong> 3 minutes light jogging</li>
            <li><strong>Dynamic stretching:</strong>
              <ul>
                <li>Arm circles: 10 each direction</li>
                <li>Torso rotations: 10 each side</li>
                <li>Leg swings: 10 each direction per leg</li>
                <li>Lateral lunges: 8 per side</li>
                <li>Inchworms: 5 reps</li>
                <li>High knees to butt kicks: 20 each</li>
              </ul>
            </li>
            <li><strong>Movement prep:</strong>
              <ul>
                <li>Sport-specific movements at low intensity</li>
                <li>Gradually increase speed over 2-3 minutes</li>
              </ul>
            </li>
          </ol>

          <h3>Minimal Warm-Up (5 minutes)</h3>
          <p>When you&apos;re short on time:</p>
          <ol>
            <li>Jumping jacks: 30 seconds</li>
            <li>Arm circles: 30 seconds</li>
            <li>Leg swings: 30 seconds total</li>
            <li>Walking lunges with twist: 10 per side</li>
            <li>Light version of main exercise: 15-20 reps</li>
          </ol>

          <h2>Dynamic Stretching Exercises</h2>

          <h3>Leg Swings (Front-to-Back)</h3>
          <ol>
            <li>Hold onto something for balance</li>
            <li>Swing one leg forward and backward like a pendulum</li>
            <li>Gradually increase range of motion</li>
            <li>Keep upper body stable</li>
          </ol>
          <p><em>Reps: 10-15 per leg</em></p>

          <h3>Leg Swings (Side-to-Side)</h3>
          <ol>
            <li>Face your support</li>
            <li>Swing leg across your body and out to the side</li>
            <li>Keep toes pointing forward</li>
          </ol>
          <p><em>Reps: 10-15 per leg</em></p>

          <h3>Walking Lunges</h3>
          <ol>
            <li>Step forward into a lunge</li>
            <li>Push through front foot to bring back leg forward</li>
            <li>Step into next lunge</li>
            <li>Keep torso upright</li>
          </ol>
          <p><em>Reps: 10 per leg</em></p>

          <h3>World&apos;s Greatest Stretch</h3>
          <ol>
            <li>Start in a lunge position</li>
            <li>Place both hands on floor inside front foot</li>
            <li>Rotate and reach inside arm toward ceiling</li>
            <li>Return hand to floor</li>
            <li>Repeat, then switch sides</li>
          </ol>
          <p><em>Reps: 5 per side</em></p>

          <h3>Inchworms</h3>
          <ol>
            <li>Stand tall, fold forward, hands to floor</li>
            <li>Walk hands out to plank position</li>
            <li>Walk hands back to feet</li>
            <li>Stand up</li>
          </ol>
          <p><em>Reps: 5-8</em></p>

          <h3>Hip Circles</h3>
          <ol>
            <li>Stand on one leg</li>
            <li>Lift other knee to 90 degrees</li>
            <li>Make large circles with your knee</li>
            <li>Circle both directions</li>
          </ol>
          <p><em>Reps: 10 each direction per leg</em></p>

          <h2>Warm-Up Mistakes to Avoid</h2>

          <h3>1. Skipping It</h3>
          <p>Even 5 minutes is better than nothing. Cold muscles are injury-prone and perform worse.</p>

          <h3>2. Static Stretching First</h3>
          <p>Static stretching before exercise reduces power. Save it for after.</p>

          <h3>3. Too Intense</h3>
          <p>A warm-up shouldn&apos;t tire you out. You should feel ready, not exhausted.</p>

          <h3>4. Too Short</h3>
          <p>5-10 minutes minimum. Older athletes and cold environments need longer.</p>

          <h3>5. Generic Warm-Up</h3>
          <p>Your warm-up should prepare you for YOUR workout. Squatting? Include squat patterns. Running? Include running drills.</p>

          <h2>When to Warm Up Longer</h2>
          <ul>
            <li>Morning workouts (your body is coldest)</li>
            <li>Cold environments</li>
            <li>If you&apos;re over 40</li>
            <li>If you&apos;re stiff or have old injuries</li>
            <li>Before maximal efforts or competition</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            A proper warm-up has three components:
          </p>
          <ol>
            <li><strong>General cardio</strong> to raise temperature and heart rate</li>
            <li><strong>Dynamic stretching</strong> to mobilize joints and activate muscles</li>
            <li><strong>Movement-specific prep</strong> to practice what you&apos;re about to do</li>
          </ol>
          <p>
            5-10 minutes of proper warm-up can improve your performance and significantly reduce injury risk. It&apos;s the best investment you can make in your workout.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want warm-up routines for your specific workouts?
          </h3>
          <p className="text-gray-600 mb-4">
            Get customized warm-ups designed for your training style.
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
