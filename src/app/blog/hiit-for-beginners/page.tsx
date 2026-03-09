import Link from 'next/link';

export const metadata = {
  title: 'HIIT for Beginners: Start Interval Training Safely | Foundational Rehab',
  description: 'High intensity interval training made accessible. Learn how to start HIIT safely with beginner-friendly workouts.',
};

export default function HIITForBeginnersPage() {
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
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Cardio</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HIIT for Beginners: Start Interval Training Safely
          </h1>
          <p className="text-xl text-gray-600">
            You don&apos;t need to be fit to start HIIT. You just need to start at your level.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            HIIT—High Intensity Interval Training—has exploded in popularity, and for good reason. It&apos;s time-efficient, effective, and can be adapted to any fitness level. But &quot;high intensity&quot; scares many beginners away.
          </p>
          <p>
            Here&apos;s the truth: intensity is relative. Your high intensity is different from an athlete&apos;s. This guide will help you start HIIT safely and effectively, no matter your current fitness level.
          </p>

          <h2>What Is HIIT, Really?</h2>
          <p>
            HIIT alternates between:
          </p>
          <ul>
            <li><strong>Work intervals:</strong> Higher intensity effort (relative to YOU)</li>
            <li><strong>Rest intervals:</strong> Lower intensity or complete rest</li>
          </ul>
          <p>
            That&apos;s it. The exact exercises, durations, and intensities can vary widely. What matters is the alternating pattern of harder and easier effort.
          </p>

          <h2>Why HIIT Works</h2>
          <ul>
            <li><strong>Time efficient</strong> — 20-30 minutes delivers significant benefits</li>
            <li><strong>Burns calories</strong> — During and after the workout (EPOC effect)</li>
            <li><strong>Improves cardiovascular fitness</strong> — Often faster than steady-state cardio</li>
            <li><strong>No equipment needed</strong> — Bodyweight HIIT is effective</li>
            <li><strong>Adaptable</strong> — Any exercise can become HIIT</li>
          </ul>

          <h2>Before You Start</h2>
          <ul>
            <li><strong>Health check:</strong> If you have heart conditions, joint problems, or haven&apos;t exercised in years, check with your doctor first</li>
            <li><strong>Build a base:</strong> Ideally, do 2-4 weeks of regular moderate exercise before starting HIIT</li>
            <li><strong>Learn the exercises:</strong> Practice movements at low intensity before doing them fast</li>
          </ul>

          <h2>Beginner HIIT Principles</h2>

          <h3>1. Start with Longer Rest</h3>
          <p>
            Traditional HIIT might be 1:1 (30 sec work, 30 sec rest). Beginners should start at 1:2 or 1:3:
          </p>
          <ul>
            <li>20 seconds work, 40-60 seconds rest</li>
            <li>This allows full recovery between intervals</li>
          </ul>

          <h3>2. Keep Intervals Short</h3>
          <ul>
            <li>Start with 15-20 second work intervals</li>
            <li>Progress to 30 seconds as fitness improves</li>
            <li>Long intervals (45-60 sec) come later</li>
          </ul>

          <h3>3. Use Low-Impact Exercises</h3>
          <p>
            You don&apos;t need burpees and jump squats to do HIIT:
          </p>
          <ul>
            <li>Fast walking or marching in place</li>
            <li>Step-touches or side steps</li>
            <li>Modified movements (step-outs instead of jumping jacks)</li>
          </ul>

          <h3>4. Intensity Is Relative</h3>
          <p>
            &quot;High intensity&quot; means challenging for YOU:
          </p>
          <ul>
            <li>You should be breathing hard</li>
            <li>Talking should be difficult during work intervals</li>
            <li>You shouldn&apos;t feel like you&apos;ll pass out</li>
            <li>RPE (rate of perceived exertion): 7-8 out of 10 during work</li>
          </ul>

          <h2>Beginner-Friendly HIIT Exercises</h2>
          <p>
            <strong>Low impact options:</strong>
          </p>
          <ul>
            <li>Fast marching in place</li>
            <li>Step jacks (step out instead of jump)</li>
            <li>Boxer shuffle</li>
            <li>Step-back lunges</li>
            <li>Squat to calf raise</li>
            <li>Standing knee drives</li>
            <li>Arm circles (yes, really—try 30 seconds fast)</li>
          </ul>
          <p>
            <strong>Moderate impact:</strong>
          </p>
          <ul>
            <li>Jumping jacks</li>
            <li>High knees (modified: knee lifts)</li>
            <li>Butt kicks</li>
            <li>Skaters (low impact: step side to side)</li>
            <li>Mountain climbers (slow version)</li>
          </ul>

          <h2>3 Beginner HIIT Workouts</h2>

          <h3>Workout 1: Absolute Beginner (15 minutes)</h3>
          <p>
            <strong>Format:</strong> 20 sec work / 40 sec rest × 4 rounds
          </p>
          <p>
            <strong>Exercises (cycle through):</strong>
          </p>
          <ul>
            <li>Fast marching</li>
            <li>Step jacks</li>
            <li>Boxer shuffle</li>
            <li>Standing knee drives</li>
          </ul>
          <p>
            Rest 1 minute between rounds. 4 exercises × 4 rounds = 16 intervals total.
          </p>

          <h3>Workout 2: Building Fitness (20 minutes)</h3>
          <p>
            <strong>Format:</strong> 25 sec work / 35 sec rest × 5 rounds
          </p>
          <p>
            <strong>Exercises:</strong>
          </p>
          <ul>
            <li>Jumping jacks (or step jacks)</li>
            <li>Bodyweight squats</li>
            <li>High knee march</li>
            <li>Push-ups (wall or knee)</li>
          </ul>
          <p>
            Rest 45 seconds between rounds.
          </p>

          <h3>Workout 3: Ready to Progress (25 minutes)</h3>
          <p>
            <strong>Format:</strong> 30 sec work / 30 sec rest × 4 rounds
          </p>
          <p>
            <strong>Exercises:</strong>
          </p>
          <ul>
            <li>Jumping jacks</li>
            <li>Reverse lunges</li>
            <li>Mountain climbers (slow)</li>
            <li>Squat pulses</li>
            <li>High knees</li>
          </ul>
          <p>
            Rest 1 minute between rounds.
          </p>

          <h2>How Often to Do HIIT</h2>
          <ul>
            <li><strong>Beginners:</strong> 1-2 times per week</li>
            <li><strong>Intermediate:</strong> 2-3 times per week</li>
            <li><strong>Maximum:</strong> 4 times per week (more isn&apos;t better)</li>
          </ul>
          <p>
            HIIT is demanding. Your body needs recovery time. Alternate with steady-state cardio, strength training, or rest days.
          </p>

          <h2>Signs You&apos;re Ready to Progress</h2>
          <ul>
            <li>Current workout feels manageable</li>
            <li>You recover fully during rest intervals</li>
            <li>You&apos;re not excessively sore the next day</li>
            <li>You&apos;ve been consistent for 2-3 weeks</li>
          </ul>
          <p>
            <strong>Progression options:</strong>
          </p>
          <ul>
            <li>Shorten rest intervals</li>
            <li>Lengthen work intervals</li>
            <li>Add more rounds</li>
            <li>Use higher-impact exercises</li>
          </ul>

          <h2>Common Beginner Mistakes</h2>
          <ul>
            <li><strong>Going too hard too fast</strong> — Start easier than you think you need to</li>
            <li><strong>Poor form</strong> — Slow down; form matters more than speed</li>
            <li><strong>Skipping warm-up</strong> — Always warm up 3-5 minutes first</li>
            <li><strong>Doing HIIT daily</strong> — Recovery is part of the program</li>
            <li><strong>Comparing to others</strong> — Your intensity is yours; ignore what others do</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            HIIT isn&apos;t just for fit people—it&apos;s for anyone willing to work at their own level. Start with longer rests, shorter work intervals, and low-impact exercises. Progress gradually as your fitness improves.
          </p>
          <p>
            The best HIIT workout is one you&apos;ll actually do consistently. Start easier than you think, stay consistent, and let your body adapt. In a few weeks, you&apos;ll be amazed at how your fitness has improved.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to start your HIIT journey?
          </h3>
          <p className="text-gray-600 mb-4">
            Get beginner-friendly interval workouts that progress with you.
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
