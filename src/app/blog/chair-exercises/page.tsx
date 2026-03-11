import Link from 'next/link';

export const metadata = {
  title: 'Chair Exercises: Full Body Workout While Seated | Foundational Rehab',
  description: 'Effective chair exercises for seniors, office workers, and anyone with limited mobility. Build strength, improve flexibility, and get your heart rate up—all while seated.',
};

export default function ChairExercisesPage() {
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
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chair Exercises: Full Body Workout While Seated
          </h1>
          <p className="text-xl text-gray-600">
            You don&apos;t need to stand to get a great workout. Chair exercises can build strength, improve mobility, and even get your heart pumping.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Whether you have limited mobility, are recovering from surgery, work at a desk all day, or are just getting started with exercise, chair workouts are surprisingly effective.
          </p>
          <p>
            All you need is a sturdy chair (no wheels!) and 15-20 minutes. Let&apos;s get moving.
          </p>

          <h2>Who Are Chair Exercises For?</h2>
          <ul>
            <li><strong>Seniors</strong> looking to maintain strength and independence</li>
            <li><strong>Office workers</strong> who need movement breaks</li>
            <li><strong>People recovering from injury or surgery</strong></li>
            <li><strong>Those with balance issues</strong> who need extra stability</li>
            <li><strong>Wheelchair users</strong> (many exercises work great)</li>
            <li><strong>Anyone new to exercise</strong> who wants a gentle start</li>
          </ul>

          <h2>Upper Body Chair Exercises</h2>

          <h3>Seated Arm Circles</h3>
          <ol>
            <li>Sit tall with feet flat on the floor</li>
            <li>Extend arms out to your sides at shoulder height</li>
            <li>Make small circles forward for 30 seconds</li>
            <li>Reverse direction for 30 seconds</li>
          </ol>
          <p><em>Sets: 2-3</em></p>

          <h3>Seated Shoulder Press</h3>
          <ol>
            <li>Start with hands at shoulder height, palms facing forward</li>
            <li>Press arms straight overhead</li>
            <li>Lower back to shoulders with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Add dumbbells (2-5 lbs) or water bottles for more challenge.</p>

          <h3>Seated Chest Press</h3>
          <ol>
            <li>Sit tall, arms bent with elbows at shoulder height</li>
            <li>Press arms forward until they&apos;re extended</li>
            <li>Squeeze your chest muscles at the end</li>
            <li>Return to start</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Seated Rows</h3>
          <ol>
            <li>Sit on the edge of your chair, feet flat</li>
            <li>Lean forward slightly with arms extended</li>
            <li>Pull your elbows back, squeezing shoulder blades together</li>
            <li>Extend arms and repeat</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Use resistance bands anchored under your feet for added resistance.</p>

          <h3>Seated Bicep Curls</h3>
          <ol>
            <li>Sit with arms at your sides, palms facing forward</li>
            <li>Curl your hands toward your shoulders</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15 each arm, 3 sets</em></p>

          <h3>Seated Tricep Dips</h3>
          <ol>
            <li>Sit on edge of chair, hands gripping the seat beside your hips</li>
            <li>Slide your bottom forward off the chair</li>
            <li>Lower yourself by bending your elbows to 90 degrees</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p><strong>Note:</strong> Keep feet flat on the floor for stability.</p>

          <h2>Lower Body Chair Exercises</h2>

          <h3>Seated Marching</h3>
          <ol>
            <li>Sit tall, feet flat on the floor</li>
            <li>Lift one knee up toward your chest</li>
            <li>Lower and lift the other knee</li>
            <li>Alternate in a marching motion</li>
          </ol>
          <p><em>Duration: 30-60 seconds, 3 sets</em></p>
          <p>Add arm swings for more cardio benefit.</p>

          <h3>Seated Leg Extensions</h3>
          <ol>
            <li>Sit tall with both feet on the floor</li>
            <li>Extend one leg straight out in front of you</li>
            <li>Hold for 2 seconds, squeezing your thigh muscle</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15 each leg, 3 sets</em></p>
          <p>This strengthens your quadriceps—essential for standing and walking.</p>

          <h3>Seated Heel Raises</h3>
          <ol>
            <li>Sit with feet flat on the floor</li>
            <li>Lift your heels off the ground, keeping toes down</li>
            <li>Hold briefly at the top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>

          <h3>Seated Toe Raises</h3>
          <ol>
            <li>Sit with feet flat on the floor</li>
            <li>Lift your toes off the ground, keeping heels down</li>
            <li>Hold briefly</li>
            <li>Lower</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Alternate heel and toe raises for ankle mobility.</p>

          <h3>Seated Leg Lifts (Hip Flexion)</h3>
          <ol>
            <li>Sit tall, hands on armrests or seat</li>
            <li>Keeping knee bent, lift your entire thigh off the chair</li>
            <li>Hold 2 seconds</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-12 each leg, 3 sets</em></p>

          <h3>Sit-to-Stand</h3>
          <ol>
            <li>Sit on edge of chair, feet flat</li>
            <li>Lean forward slightly</li>
            <li>Stand up without using your hands (or use hands on armrests if needed)</li>
            <li>Sit back down slowly—don&apos;t plop!</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>
            <strong>This is one of the most important exercises for maintaining independence.</strong> If you can only do one lower body exercise, make it this one.
          </p>

          <h2>Core Chair Exercises</h2>

          <h3>Seated Core Twist</h3>
          <ol>
            <li>Sit tall with hands on your chest or holding a ball</li>
            <li>Rotate your upper body to the right</li>
            <li>Return to center</li>
            <li>Rotate to the left</li>
          </ol>
          <p><em>Reps: 10-12 each side, 3 sets</em></p>

          <h3>Seated Knee Lifts with Twist</h3>
          <ol>
            <li>Sit tall, hands behind your head</li>
            <li>Lift your right knee while rotating your left elbow toward it</li>
            <li>Return to start</li>
            <li>Lift left knee, rotate right elbow toward it</li>
          </ol>
          <p><em>Reps: 10-12 each side, 3 sets</em></p>

          <h3>Seated Dead Bug</h3>
          <ol>
            <li>Sit on edge of chair, hands on seat</li>
            <li>Lean back slightly, engaging your core</li>
            <li>Lift both feet off the ground, knees bent</li>
            <li>Extend one leg straight out</li>
            <li>Return and extend the other leg</li>
          </ol>
          <p><em>Reps: 8-10 each leg, 3 sets</em></p>

          <h3>Seated Pelvic Tilts</h3>
          <ol>
            <li>Sit with feet flat on the floor</li>
            <li>Tilt your pelvis forward (arch your lower back)</li>
            <li>Tilt your pelvis backward (flatten your lower back)</li>
            <li>Move slowly and with control</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 sets</em></p>

          <h2>Chair Stretches</h2>

          <h3>Seated Hamstring Stretch</h3>
          <ol>
            <li>Sit on edge of chair</li>
            <li>Extend one leg straight, heel on floor</li>
            <li>Hinge forward from your hips (keep back flat)</li>
            <li>Hold 30 seconds, switch legs</li>
          </ol>

          <h3>Seated Figure-4 Stretch (Hip/Glute)</h3>
          <ol>
            <li>Sit tall</li>
            <li>Cross right ankle over left knee</li>
            <li>Gently press right knee down</li>
            <li>Lean forward slightly for more stretch</li>
            <li>Hold 30 seconds, switch sides</li>
          </ol>

          <h3>Seated Spinal Twist</h3>
          <ol>
            <li>Sit tall</li>
            <li>Place right hand on left knee</li>
            <li>Place left hand on the back of the chair</li>
            <li>Gently twist to the left</li>
            <li>Hold 30 seconds, switch sides</li>
          </ol>

          <h3>Neck Stretches</h3>
          <ol>
            <li>Drop right ear toward right shoulder</li>
            <li>Hold 30 seconds</li>
            <li>Repeat on left side</li>
            <li>Drop chin to chest, hold 30 seconds</li>
          </ol>

          <h2>Sample Chair Workout Routines</h2>

          <h3>Quick 10-Minute Energizer</h3>
          <ul>
            <li>Seated marching: 1 minute</li>
            <li>Arm circles: 30 seconds each direction</li>
            <li>Seated leg extensions: 10 each leg</li>
            <li>Shoulder press: 12 reps</li>
            <li>Sit-to-stand: 10 reps</li>
            <li>Seated twist: 10 each side</li>
            <li>Marching: 1 minute</li>
            <li>Hamstring stretch: 30 seconds each</li>
          </ul>

          <h3>Full 20-Minute Chair Workout</h3>
          <p><strong>Warm-up (3 min):</strong></p>
          <ul>
            <li>Seated marching: 1 minute</li>
            <li>Arm circles: 1 minute</li>
            <li>Ankle circles: 1 minute</li>
          </ul>
          <p><strong>Upper Body (5 min):</strong></p>
          <ul>
            <li>Shoulder press: 12 reps × 2 sets</li>
            <li>Seated rows: 12 reps × 2 sets</li>
            <li>Bicep curls: 12 reps × 2 sets</li>
          </ul>
          <p><strong>Lower Body (5 min):</strong></p>
          <ul>
            <li>Leg extensions: 12 each × 2 sets</li>
            <li>Heel/toe raises: 15 each × 2 sets</li>
            <li>Sit-to-stand: 10 reps × 2 sets</li>
          </ul>
          <p><strong>Core (3 min):</strong></p>
          <ul>
            <li>Seated twist: 12 each side × 2 sets</li>
            <li>Knee lifts: 10 each × 2 sets</li>
          </ul>
          <p><strong>Cool-down Stretches (4 min):</strong></p>
          <ul>
            <li>Hamstring stretch: 30 sec each</li>
            <li>Figure-4 stretch: 30 sec each</li>
            <li>Spinal twist: 30 sec each</li>
            <li>Neck stretches: 30 sec each direction</li>
          </ul>

          <h2>Tips for Effective Chair Workouts</h2>
          <ul>
            <li><strong>Use a sturdy chair:</strong> No wheels, no wobbling</li>
            <li><strong>Sit tall:</strong> Good posture makes exercises more effective</li>
            <li><strong>Start easy:</strong> Master form before adding resistance</li>
            <li><strong>Breathe:</strong> Don&apos;t hold your breath—exhale on effort</li>
            <li><strong>Add resistance:</strong> Use dumbbells, bands, or water bottles to progress</li>
            <li><strong>Move daily:</strong> Even 10 minutes helps</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Chair exercises prove that effective workouts don&apos;t require expensive equipment or perfect mobility. You can build strength, improve flexibility, and maintain independence—all from a seated position.
          </p>
          <p>
            Start where you are. Do what you can. That&apos;s always enough.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Need guided chair workouts?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab offers video-guided chair exercise programs designed for all mobility levels.
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
