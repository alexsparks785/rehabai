import Link from 'next/link';

export const metadata = {
  title: 'Home Workout Without Equipment: Complete Bodyweight Training Guide | Foundational Rehab',
  description: 'Get fit at home with no equipment needed. Full body workouts, exercise progressions, and sample routines using just your bodyweight.',
};

export default function HomeWorkoutNoEquipmentPage() {
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
            Home Workout Without Equipment: Complete Bodyweight Training Guide
          </h1>
          <p className="text-xl text-gray-600">
            No gym? No problem. You can build serious strength and fitness using nothing but your body.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The best workout is the one you actually do. And when it requires no equipment, no gym membership, and no commute—you&apos;re far more likely to do it.
          </p>
          <p>
            Bodyweight training isn&apos;t a compromise. It&apos;s a complete training system that can build muscle, burn fat, and improve your fitness from anywhere.
          </p>

          <h2>The 6 Essential Movement Patterns</h2>
          <p>
            Every effective program trains these fundamental movements:
          </p>
          <ul>
            <li><strong>Push (horizontal):</strong> Push-ups and variations</li>
            <li><strong>Push (vertical):</strong> Pike push-ups, handstand work</li>
            <li><strong>Pull (horizontal):</strong> Inverted rows</li>
            <li><strong>Pull (vertical):</strong> Pull-ups, chin-ups</li>
            <li><strong>Squat:</strong> Squats and single-leg variations</li>
            <li><strong>Hinge:</strong> Hip hinges, glute bridges, single-leg deadlifts</li>
            <li><strong>Core:</strong> Planks, hollow holds, rotational work</li>
          </ul>

          <h2>Push Exercises</h2>

          <h3>Push-Up Progression</h3>
          <p>Start where you can do 8-12 reps with good form, then progress:</p>
          <ol>
            <li><strong>Wall push-ups:</strong> Hands on wall, body at angle</li>
            <li><strong>Incline push-ups:</strong> Hands on bench, chair, or stairs</li>
            <li><strong>Knee push-ups:</strong> On floor, knees down</li>
            <li><strong>Full push-ups:</strong> Standard position</li>
            <li><strong>Diamond push-ups:</strong> Hands together, targets triceps</li>
            <li><strong>Archer push-ups:</strong> One arm does most work</li>
            <li><strong>One-arm push-up:</strong> Ultimate pushing strength</li>
          </ol>

          <h3>Pike Push-Ups (Shoulder Focus)</h3>
          <ol>
            <li>Start in downward dog position (hips high, inverted V)</li>
            <li>Bend elbows, lowering head toward floor</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>Progress to elevated pike push-ups (feet on chair) → wall handstand push-ups.</p>

          <h3>Dips (Using Chairs)</h3>
          <ol>
            <li>Place hands on two sturdy chairs or a countertop</li>
            <li>Lower body by bending elbows to 90 degrees</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>

          <h2>Pull Exercises</h2>

          <h3>Inverted Rows</h3>
          <ol>
            <li>Lie under a sturdy table or bar</li>
            <li>Grab the edge, arms straight</li>
            <li>Keep body straight from head to heels</li>
            <li>Pull chest to the edge</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>The best no-equipment back exercise. Adjust difficulty by changing body angle.</p>

          <h3>Pull-Up Progression</h3>
          <p>If you have a pull-up bar (doorway bars are cheap):</p>
          <ol>
            <li><strong>Dead hangs:</strong> Just hang from bar (grip strength)</li>
            <li><strong>Negative pull-ups:</strong> Jump up, lower slowly</li>
            <li><strong>Band-assisted pull-ups:</strong> Resistance band for help</li>
            <li><strong>Pull-ups:</strong> Full reps</li>
            <li><strong>Weighted pull-ups:</strong> Add backpack with books</li>
          </ol>

          <h3>Towel Rows (No Bar Needed)</h3>
          <ol>
            <li>Loop a towel around a sturdy pole or door handle</li>
            <li>Lean back, arms straight, holding both ends</li>
            <li>Pull yourself toward the anchor</li>
            <li>Lower with control</li>
          </ol>

          <h2>Squat Exercises</h2>

          <h3>Squat Progression</h3>
          <ol>
            <li><strong>Box squat:</strong> Squat to chair, tap, stand</li>
            <li><strong>Bodyweight squat:</strong> Full depth, no assistance</li>
            <li><strong>Pause squat:</strong> Hold at bottom for 3 seconds</li>
            <li><strong>Jump squat:</strong> Explosive power</li>
            <li><strong>Bulgarian split squat:</strong> Rear foot elevated on chair</li>
            <li><strong>Pistol squat:</strong> Single leg squat (advanced)</li>
          </ol>

          <h3>Squat Form Cues</h3>
          <ul>
            <li>Feet shoulder-width or slightly wider</li>
            <li>Toes pointed slightly out</li>
            <li>Knees track over toes</li>
            <li>Keep chest up</li>
            <li>Go as deep as mobility allows</li>
          </ul>

          <h3>Lunges</h3>
          <ol>
            <li><strong>Reverse lunges:</strong> Step back, lower knee toward floor</li>
            <li><strong>Walking lunges:</strong> Alternate legs, moving forward</li>
            <li><strong>Lateral lunges:</strong> Step to the side</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>

          <h2>Hinge Exercises</h2>

          <h3>Glute Bridge</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Push through heels, lift hips</li>
            <li>Squeeze glutes at the top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>Single-Leg Glute Bridge</h3>
          <ol>
            <li>Same as above, but one leg extended</li>
            <li>Push through one heel</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>

          <h3>Single-Leg Romanian Deadlift</h3>
          <ol>
            <li>Stand on one leg</li>
            <li>Hinge forward, reaching toward floor</li>
            <li>Back leg extends behind you</li>
            <li>Keep back flat</li>
            <li>Return to standing</li>
          </ol>
          <p><em>Reps: 8-10 each leg, 3 sets</em></p>

          <h3>Hip Thrust (Elevated)</h3>
          <ol>
            <li>Sit on floor, upper back against a couch or bench</li>
            <li>Feet flat on floor, knees bent</li>
            <li>Drive through heels, lift hips until body is straight</li>
            <li>Squeeze glutes hard at top</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h2>Core Exercises</h2>

          <h3>Plank</h3>
          <ol>
            <li>Forearms on ground, body straight from head to heels</li>
            <li>Don&apos;t let hips sag or pike up</li>
            <li>Squeeze glutes and brace core</li>
          </ol>
          <p><em>Hold: 30-60 seconds, 3 sets</em></p>

          <h3>Dead Bug</h3>
          <ol>
            <li>Lie on back, arms toward ceiling, knees bent 90 degrees</li>
            <li>Lower opposite arm and leg toward floor</li>
            <li>Keep lower back pressed into floor</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 10 each side, 3 sets</em></p>

          <h3>Mountain Climbers</h3>
          <ol>
            <li>Start in push-up position</li>
            <li>Drive one knee toward chest</li>
            <li>Quickly switch legs</li>
            <li>Keep hips level</li>
          </ol>
          <p><em>Duration: 30-60 seconds, 3 sets</em></p>

          <h3>Hollow Body Hold</h3>
          <ol>
            <li>Lie on back</li>
            <li>Lift shoulders and legs off ground</li>
            <li>Arms extended overhead or by sides</li>
            <li>Press lower back into floor</li>
            <li>Hold position</li>
          </ol>
          <p><em>Hold: 20-30 seconds, 3 sets</em></p>

          <h3>Side Plank</h3>
          <ol>
            <li>Lie on side, prop up on forearm</li>
            <li>Lift hips, body straight from head to feet</li>
            <li>Don&apos;t let hips drop</li>
          </ol>
          <p><em>Hold: 30 seconds each side, 3 sets</em></p>

          <h2>Sample Home Workouts</h2>

          <h3>Beginner Full Body (20 min)</h3>
          <ul>
            <li>Incline push-ups: 10 × 3</li>
            <li>Box squats: 12 × 3</li>
            <li>Glute bridges: 15 × 3</li>
            <li>Plank: 30 sec × 3</li>
            <li>Bird dogs: 8 each × 2</li>
          </ul>

          <h3>Intermediate Full Body (30 min)</h3>
          <ul>
            <li>Push-ups: 12 × 3</li>
            <li>Inverted rows: 10 × 3</li>
            <li>Bodyweight squats: 15 × 3</li>
            <li>Reverse lunges: 10 each × 3</li>
            <li>Single-leg glute bridge: 10 each × 3</li>
            <li>Dead bugs: 10 each × 3</li>
            <li>Plank: 45 sec × 3</li>
          </ul>

          <h3>Advanced Full Body (40 min)</h3>
          <ul>
            <li>Pike push-ups: 10 × 3</li>
            <li>Diamond push-ups: 12 × 3</li>
            <li>Pull-ups (or inverted rows): 8 × 4</li>
            <li>Bulgarian split squats: 10 each × 3</li>
            <li>Single-leg RDL: 8 each × 3</li>
            <li>Hip thrusts: 15 × 3</li>
            <li>Hollow body hold: 30 sec × 3</li>
            <li>Mountain climbers: 45 sec × 3</li>
          </ul>

          <h3>Quick HIIT Workout (15 min)</h3>
          <p>40 seconds work, 20 seconds rest. 3 rounds:</p>
          <ul>
            <li>Jump squats</li>
            <li>Push-ups</li>
            <li>Mountain climbers</li>
            <li>Reverse lunges (alternating)</li>
            <li>Plank</li>
          </ul>

          <h2>Weekly Schedule Example</h2>
          <ul>
            <li><strong>Monday:</strong> Full body workout</li>
            <li><strong>Tuesday:</strong> Rest or light stretching</li>
            <li><strong>Wednesday:</strong> Full body workout</li>
            <li><strong>Thursday:</strong> HIIT or cardio (walk, run)</li>
            <li><strong>Friday:</strong> Full body workout</li>
            <li><strong>Saturday:</strong> Active recovery (yoga, stretching)</li>
            <li><strong>Sunday:</strong> Rest</li>
          </ul>

          <h2>How to Progress Without Weights</h2>
          <ul>
            <li><strong>Add reps:</strong> 10 → 12 → 15</li>
            <li><strong>Add sets:</strong> 2 → 3 → 4</li>
            <li><strong>Slow down:</strong> 3 seconds down, 1 second up</li>
            <li><strong>Add pauses:</strong> Hold at bottom for 2-3 seconds</li>
            <li><strong>Move to harder variation:</strong> Push-ups → diamond → archer</li>
            <li><strong>Go single-leg/arm:</strong> Doubles difficulty</li>
            <li><strong>Add a backpack:</strong> Fill with books for resistance</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            You don&apos;t need a gym to get fit. Bodyweight training can build muscle, burn fat, and improve your health—all from your living room.
          </p>
          <p>
            Start with the basics, focus on form, and progress gradually. Consistency beats equipment every time.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized home workout plan?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom bodyweight programs based on your fitness level and goals.
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
