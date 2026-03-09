import Link from 'next/link';

export const metadata = {
  title: 'Playground Workout: Exercise While Your Kids Play | Foundational Rehab',
  description: 'Turn playground time into gym time. Full workout using playground equipment while watching your kids.',
};

export default function PlaygroundWorkoutPage() {
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
            Playground Workout: Exercise While Your Kids Play
          </h1>
          <p className="text-xl text-gray-600">
            Stop watching from the bench. The playground is a full gym.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            You&apos;re at the playground anyway. Your kids don&apos;t need you to hover. Why spend 30-60 minutes scrolling your phone when you could get a legitimate workout?
          </p>
          <p>
            Playground equipment is surprisingly versatile—monkey bars, benches, platforms, and open space give you everything you need for a full-body workout. Here&apos;s how to use it.
          </p>

          <h2>Why Playground Workouts Work for Parents</h2>
          <ul>
            <li><strong>No extra time needed</strong> — You&apos;re already there</li>
            <li><strong>You can watch your kids</strong> — Exercise while supervising</li>
            <li><strong>Free equipment</strong> — Bars, platforms, benches everywhere</li>
            <li><strong>Fresh air and sun</strong> — Better than a stuffy gym</li>
            <li><strong>Model fitness</strong> — Kids see exercise as normal</li>
          </ul>

          <h2>Playground Equipment = Gym Equipment</h2>
          <ul>
            <li><strong>Monkey bars</strong> = Pull-up bar, hanging exercises</li>
            <li><strong>Benches</strong> = Step-ups, dips, incline push-ups</li>
            <li><strong>Platforms/steps</strong> = Box jumps, elevated lunges</li>
            <li><strong>Swings</strong> = TRX-style suspension exercises</li>
            <li><strong>Open grass</strong> = Running, bodyweight exercises</li>
          </ul>

          <h2>Playground Exercises</h2>

          <h3>Upper Body</h3>

          <h4>1. Monkey Bar Pull-Ups (or Hangs)</h4>
          <ul>
            <li>Grab bar with palms facing away</li>
            <li>Pull chin to bar (or just hang if you can&apos;t do pull-ups yet)</li>
            <li>Hanging alone builds grip strength and decompresses spine</li>
          </ul>

          <h4>2. Bench Push-Ups</h4>
          <ul>
            <li>Hands on bench, body straight</li>
            <li>Lower chest to bench, push up</li>
            <li>Easier than floor push-ups (adjust height for difficulty)</li>
          </ul>

          <h4>3. Bench Dips</h4>
          <ul>
            <li>Hands on bench behind you</li>
            <li>Lower body by bending elbows</li>
            <li>Push back up</li>
          </ul>

          <h4>4. Australian Rows (Inverted Rows)</h4>
          <ul>
            <li>Find a low bar (or use swing chains)</li>
            <li>Hang underneath, body straight</li>
            <li>Pull chest to bar</li>
          </ul>

          <h3>Lower Body</h3>

          <h4>5. Bench Step-Ups</h4>
          <ul>
            <li>Step up onto bench with one foot</li>
            <li>Drive through heel to stand</li>
            <li>Step down with control</li>
          </ul>

          <h4>6. Bulgarian Split Squats</h4>
          <ul>
            <li>Back foot on bench behind you</li>
            <li>Lower into lunge</li>
            <li>Push through front heel</li>
          </ul>

          <h4>7. Platform Box Jumps</h4>
          <ul>
            <li>Find a sturdy platform or step</li>
            <li>Jump up, land softly</li>
            <li>Step down (safer than jumping down)</li>
          </ul>

          <h4>8. Walking Lunges</h4>
          <ul>
            <li>Use the open grass area</li>
            <li>Lunge forward alternating legs</li>
            <li>Keep front knee over ankle</li>
          </ul>

          <h3>Core</h3>

          <h4>9. Hanging Knee Raises</h4>
          <ul>
            <li>Hang from monkey bars</li>
            <li>Pull knees toward chest</li>
            <li>Lower with control</li>
          </ul>

          <h4>10. Bench Plank</h4>
          <ul>
            <li>Forearms on bench (easier) or feet on bench (harder)</li>
            <li>Hold body straight</li>
            <li>30-60 seconds</li>
          </ul>

          <h4>11. Mountain Climbers</h4>
          <ul>
            <li>Push-up position on grass</li>
            <li>Drive knees to chest alternately</li>
            <li>Keep hips down</li>
          </ul>

          <h3>Cardio Bursts</h3>

          <h4>12. Playground Sprints</h4>
          <ul>
            <li>Sprint across the playground</li>
            <li>Walk back</li>
            <li>Repeat</li>
          </ul>

          <h4>13. Swing Push</h4>
          <ul>
            <li>Push an empty swing as hard as you can</li>
            <li>Chase it, catch it, push again</li>
            <li>Great cardio burst</li>
          </ul>

          <h2>Complete Playground Workouts</h2>

          <h3>Quick Workout (15 minutes)</h3>
          <p>
            When you only have a short window:
          </p>
          <ul>
            <li>Bench push-ups: 15 reps</li>
            <li>Bench step-ups: 10 each leg</li>
            <li>Bench dips: 12 reps</li>
            <li>Walking lunges: 10 each leg</li>
            <li>Plank hold: 30 seconds</li>
          </ul>
          <p>
            Repeat circuit 3 times, minimal rest.
          </p>

          <h3>Full Workout (30 minutes)</h3>
          <p>
            <strong>Warm-up:</strong> 2-minute walk/jog around playground
          </p>
          <p>
            <strong>Circuit 1 (repeat 3x):</strong>
          </p>
          <ul>
            <li>Pull-ups or bar hang: 5-10 reps or 30 sec hang</li>
            <li>Bulgarian split squats: 10 each leg</li>
            <li>Hanging knee raises: 10 reps</li>
          </ul>
          <p>
            <strong>Circuit 2 (repeat 3x):</strong>
          </p>
          <ul>
            <li>Bench push-ups: 15 reps</li>
            <li>Step-ups: 12 each leg</li>
            <li>Mountain climbers: 20 total</li>
          </ul>
          <p>
            <strong>Finisher:</strong> 4 playground sprints
          </p>

          <h3>With-the-Kids Workout</h3>
          <p>
            Turn it into a game:
          </p>
          <ul>
            <li>Race your kids across the playground (they win, you get cardio)</li>
            <li>Do 5 push-ups every time they go down the slide</li>
            <li>Monkey bar challenge: see who can hang longest</li>
            <li>Squat every time they swing past</li>
            <li>Play tag (excellent cardio)</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Position yourself</strong> — Exercise where you can see your kids</li>
            <li><strong>Be interruptible</strong> — Pause when needed; fitness happens in chunks</li>
            <li><strong>Ignore judgment</strong> — Yes, other parents might stare. So what?</li>
            <li><strong>Start small</strong> — Even 10 minutes beats sitting</li>
            <li><strong>Be consistent</strong> — Every playground visit is an opportunity</li>
          </ul>

          <h2>Safety Notes</h2>
          <ul>
            <li>Test equipment stability before using</li>
            <li>Avoid equipment during peak kid hours (or use the periphery)</li>
            <li>Watch for wet surfaces</li>
            <li>Don&apos;t monopolize equipment kids want to use</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            The playground isn&apos;t just for kids. While they play, you have access to pull-up bars, benches, platforms, and open space—everything you need for a complete workout. Stop watching from the sidelines and start using this free gym.
          </p>
          <p>
            You&apos;ll get fitter, model healthy behavior for your kids, and actually enjoy playground time instead of counting down the minutes. That&apos;s a win all around.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want more parent-friendly workout ideas?
          </h3>
          <p className="text-gray-600 mb-4">
            Get quick, effective routines that fit into your busy schedule.
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
