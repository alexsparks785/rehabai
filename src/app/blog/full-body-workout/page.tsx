import Link from 'next/link';

export const metadata = {
  title: 'Full Body Workout: Complete Training Guide for All Levels | Foundational Rehab',
  description: 'Build strength and muscle with effective full body workouts. Sample routines for beginners to advanced, at home or in the gym.',
};

export default function FullBodyWorkoutPage() {
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
            Full Body Workout: Complete Training Guide for All Levels
          </h1>
          <p className="text-xl text-gray-600">
            Full body workouts are efficient, effective, and perfect for busy schedules. Here&apos;s how to do them right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Why train one muscle group when you can train them all? Full body workouts are one of the most effective training methods—especially for beginners, busy people, and anyone who can only hit the gym 2-3 times per week.
          </p>

          <h2>Why Full Body Workouts Work</h2>
          <ul>
            <li><strong>Efficient:</strong> Train everything in one session</li>
            <li><strong>Flexible scheduling:</strong> Miss a day? You still trained everything recently</li>
            <li><strong>Higher frequency:</strong> Each muscle gets hit 2-3x per week</li>
            <li><strong>Better for beginners:</strong> Practice movements more often</li>
            <li><strong>Burns more calories:</strong> More muscles working = more energy expenditure</li>
            <li><strong>Balanced development:</strong> No body parts get neglected</li>
          </ul>

          <h2>The Essential Movement Patterns</h2>
          <p>Every good full body workout includes these movements:</p>
          <ul>
            <li><strong>Squat pattern:</strong> Squats, lunges, leg press</li>
            <li><strong>Hip hinge:</strong> Deadlifts, RDLs, hip thrusts</li>
            <li><strong>Horizontal push:</strong> Bench press, push-ups</li>
            <li><strong>Horizontal pull:</strong> Rows</li>
            <li><strong>Vertical push:</strong> Overhead press</li>
            <li><strong>Vertical pull:</strong> Pull-ups, lat pulldowns</li>
            <li><strong>Core:</strong> Planks, carries, anti-rotation</li>
          </ul>
          <p>Cover all seven patterns, and you&apos;ve trained your whole body effectively.</p>

          <h2>Full Body Workout Structure</h2>
          <p>A typical full body session follows this template:</p>
          <ol>
            <li><strong>Warm-up:</strong> 5-10 minutes</li>
            <li><strong>Compound lower body:</strong> Squat or deadlift variation</li>
            <li><strong>Compound upper push:</strong> Press variation</li>
            <li><strong>Compound upper pull:</strong> Row or pull-up</li>
            <li><strong>Accessory lower:</strong> Lunges, leg curls, calf raises</li>
            <li><strong>Accessory upper:</strong> Isolation work</li>
            <li><strong>Core:</strong> Plank, carries, or ab work</li>
          </ol>

          <h2>Sample Full Body Workouts</h2>

          <h3>Beginner Full Body (Bodyweight)</h3>
          <p>Do 3x per week with rest days between.</p>
          <ul>
            <li>Bodyweight squats: 12 × 3</li>
            <li>Push-ups (or incline): 10 × 3</li>
            <li>Inverted rows (or doorway rows): 10 × 3</li>
            <li>Glute bridges: 12 × 3</li>
            <li>Plank: 30 sec × 3</li>
            <li>Reverse lunges: 10 each × 2</li>
          </ul>

          <h3>Beginner Full Body (Gym)</h3>
          <ul>
            <li>Goblet squats: 10 × 3</li>
            <li>Dumbbell bench press: 10 × 3</li>
            <li>Lat pulldown: 10 × 3</li>
            <li>Dumbbell RDL: 10 × 3</li>
            <li>Dumbbell overhead press: 10 × 3</li>
            <li>Plank: 30 sec × 3</li>
          </ul>

          <h3>Intermediate Full Body A</h3>
          <ul>
            <li>Barbell back squat: 8 × 4</li>
            <li>Barbell bench press: 8 × 4</li>
            <li>Barbell row: 8 × 4</li>
            <li>Romanian deadlift: 10 × 3</li>
            <li>Dumbbell lateral raises: 12 × 3</li>
            <li>Face pulls: 15 × 3</li>
            <li>Plank or ab wheel: 3 sets</li>
          </ul>

          <h3>Intermediate Full Body B</h3>
          <ul>
            <li>Deadlift: 5 × 4</li>
            <li>Overhead press: 8 × 4</li>
            <li>Pull-ups or lat pulldown: 8 × 4</li>
            <li>Bulgarian split squats: 10 × 3 each</li>
            <li>Dumbbell bench press: 10 × 3</li>
            <li>Bicep curls: 12 × 3</li>
            <li>Tricep pushdowns: 12 × 3</li>
          </ul>

          <h3>Advanced Full Body</h3>
          <ul>
            <li>Back squat: 5 × 5</li>
            <li>Bench press: 5 × 5</li>
            <li>Barbell row: 5 × 5</li>
            <li>Romanian deadlift: 8 × 3</li>
            <li>Overhead press: 8 × 3</li>
            <li>Pull-ups: Max × 3</li>
            <li>Dips: 10 × 3</li>
            <li>Farmer&apos;s carries: 3 trips</li>
          </ul>

          <h3>Quick 30-Minute Full Body</h3>
          <p>When time is tight:</p>
          <ul>
            <li>Goblet squats: 10 × 3</li>
            <li>Push-ups: 12 × 3</li>
            <li>Dumbbell rows: 10 × 3 each</li>
            <li>RDLs: 10 × 3</li>
            <li>Plank: 45 sec × 2</li>
          </ul>

          <h2>Weekly Programming</h2>

          <h3>3-Day Full Body Split</h3>
          <p>Most popular approach. Each muscle trained 3x per week.</p>
          <ul>
            <li><strong>Monday:</strong> Full Body A</li>
            <li><strong>Tuesday:</strong> Rest</li>
            <li><strong>Wednesday:</strong> Full Body B</li>
            <li><strong>Thursday:</strong> Rest</li>
            <li><strong>Friday:</strong> Full Body C (or repeat A)</li>
            <li><strong>Weekend:</strong> Rest/active recovery</li>
          </ul>

          <h3>2-Day Full Body</h3>
          <p>Minimum effective dose for busy schedules.</p>
          <ul>
            <li><strong>Monday:</strong> Full Body (emphasis on squat/push)</li>
            <li><strong>Thursday:</strong> Full Body (emphasis on hinge/pull)</li>
          </ul>

          <h3>4-Day Full Body</h3>
          <p>For those who want more volume.</p>
          <ul>
            <li><strong>Monday:</strong> Full Body (heavy lower)</li>
            <li><strong>Tuesday:</strong> Full Body (heavy upper)</li>
            <li><strong>Thursday:</strong> Full Body (moderate lower)</li>
            <li><strong>Friday:</strong> Full Body (moderate upper)</li>
          </ul>

          <h2>Exercise Alternatives</h2>
          <p>Substitute based on equipment and ability:</p>

          <h3>Squat Pattern</h3>
          <ul>
            <li>Barbell back squat</li>
            <li>Front squat</li>
            <li>Goblet squat</li>
            <li>Leg press</li>
            <li>Bodyweight squat</li>
          </ul>

          <h3>Hip Hinge</h3>
          <ul>
            <li>Conventional deadlift</li>
            <li>Romanian deadlift</li>
            <li>Trap bar deadlift</li>
            <li>Hip thrust</li>
            <li>Kettlebell swing</li>
          </ul>

          <h3>Horizontal Push</h3>
          <ul>
            <li>Barbell bench press</li>
            <li>Dumbbell bench press</li>
            <li>Push-ups</li>
            <li>Incline press</li>
            <li>Machine chest press</li>
          </ul>

          <h3>Horizontal Pull</h3>
          <ul>
            <li>Barbell row</li>
            <li>Dumbbell row</li>
            <li>Cable row</li>
            <li>Inverted row</li>
            <li>Machine row</li>
          </ul>

          <h3>Vertical Push</h3>
          <ul>
            <li>Barbell overhead press</li>
            <li>Dumbbell shoulder press</li>
            <li>Arnold press</li>
            <li>Machine shoulder press</li>
            <li>Pike push-ups</li>
          </ul>

          <h3>Vertical Pull</h3>
          <ul>
            <li>Pull-ups</li>
            <li>Chin-ups</li>
            <li>Lat pulldown</li>
            <li>Assisted pull-up machine</li>
          </ul>

          <h2>Full Body Training Tips</h2>
          <ul>
            <li><strong>Prioritize compound movements:</strong> Squats, deadlifts, presses, rows first</li>
            <li><strong>Manage fatigue:</strong> Don&apos;t go to failure on big lifts</li>
            <li><strong>Vary intensity:</strong> Not every session needs to be maximal</li>
            <li><strong>Rotate exercises:</strong> Different variations keep progress coming</li>
            <li><strong>Watch total volume:</strong> 15-25 sets per session is plenty</li>
            <li><strong>Rest adequately:</strong> 48 hours between sessions minimum</li>
            <li><strong>Progress gradually:</strong> Add weight or reps over weeks</li>
          </ul>

          <h2>Common Mistakes</h2>
          <ul>
            <li><strong>Too much volume:</strong> Full body doesn&apos;t mean exhausting every muscle</li>
            <li><strong>Skipping legs:</strong> They&apos;re half your body—train them</li>
            <li><strong>Same workout every time:</strong> Vary exercises and rep ranges</li>
            <li><strong>Going too heavy too often:</strong> Save maximal effort for key lifts</li>
            <li><strong>Neglecting recovery:</strong> Full body is demanding—sleep and eat well</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Full body workouts are one of the most efficient and effective training methods. They&apos;re perfect for beginners learning movements, busy people with limited gym time, and anyone who wants balanced development.
          </p>
          <p>
            Cover all the movement patterns, prioritize compound exercises, and train 2-4 times per week. Simple, effective, and sustainable.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized full body program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom workout plans based on your equipment, schedule, and goals.
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
