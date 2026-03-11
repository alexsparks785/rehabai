import Link from 'next/link';

export const metadata = {
  title: 'Upper Body Workout: Complete Guide to Building Upper Body Strength | Foundational Rehab',
  description: 'Build a stronger upper body with these effective workouts. Includes chest, back, shoulders, and arms exercises for all levels.',
};

export default function UpperBodyWorkoutPage() {
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
            Upper Body Workout: Complete Guide to Building Upper Body Strength
          </h1>
          <p className="text-xl text-gray-600">
            A complete upper body workout covers chest, back, shoulders, and arms. Here&apos;s how to train them all effectively.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Upper body strength matters for everything—from carrying groceries to improving posture to looking good. This guide covers the essential exercises, programming strategies, and sample workouts for all levels.
          </p>

          <h2>Upper Body Muscles</h2>
          <ul>
            <li><strong>Chest (pectorals):</strong> Push movements—bench press, push-ups</li>
            <li><strong>Back (lats, rhomboids, traps):</strong> Pull movements—rows, pull-ups</li>
            <li><strong>Shoulders (deltoids):</strong> Overhead press, raises</li>
            <li><strong>Biceps:</strong> Curls, chin-ups</li>
            <li><strong>Triceps:</strong> Push movements, extensions</li>
          </ul>

          <h2>Essential Upper Body Movements</h2>
          <p>Every upper body workout should include:</p>
          <ul>
            <li><strong>Horizontal push:</strong> Bench press, push-ups, chest press</li>
            <li><strong>Horizontal pull:</strong> Rows (barbell, dumbbell, cable)</li>
            <li><strong>Vertical push:</strong> Overhead press, pike push-ups</li>
            <li><strong>Vertical pull:</strong> Pull-ups, lat pulldowns</li>
            <li><strong>Accessory work:</strong> Isolation for arms, shoulders, and posture muscles</li>
          </ul>

          <h2>Best Upper Body Exercises</h2>

          <h3>Chest Exercises</h3>
          
          <p><strong>Bench Press</strong></p>
          <ol>
            <li>Lie on bench, feet flat on floor</li>
            <li>Grip bar slightly wider than shoulder-width</li>
            <li>Lower bar to mid-chest</li>
            <li>Press back up to lockout</li>
          </ol>
          <p><em>Reps: 6-10, 3-4 sets</em></p>

          <p><strong>Push-Ups</strong></p>
          <ol>
            <li>Hands slightly wider than shoulders</li>
            <li>Body straight from head to heels</li>
            <li>Lower chest to floor</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 10-20, 3 sets</em></p>

          <p><strong>Incline Press</strong></p>
          <p>Same as bench press on 30-45 degree incline. Emphasizes upper chest.</p>
          <p><em>Reps: 8-12, 3 sets</em></p>

          <p><strong>Dumbbell Flyes</strong></p>
          <ol>
            <li>Lie on bench, dumbbells above chest</li>
            <li>Slight bend in elbows</li>
            <li>Lower arms out to sides</li>
            <li>Squeeze chest to return</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>

          <h3>Back Exercises</h3>

          <p><strong>Barbell Rows</strong></p>
          <ol>
            <li>Hinge forward, back flat</li>
            <li>Pull bar to lower chest/upper belly</li>
            <li>Squeeze shoulder blades</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 8-10, 3-4 sets</em></p>

          <p><strong>Pull-Ups / Lat Pulldowns</strong></p>
          <ol>
            <li>Grip wider than shoulder-width</li>
            <li>Pull chest toward bar/handle</li>
            <li>Squeeze lats at bottom</li>
            <li>Control the return</li>
          </ol>
          <p><em>Reps: 6-12, 3-4 sets</em></p>

          <p><strong>Dumbbell Rows</strong></p>
          <ol>
            <li>One hand and knee on bench</li>
            <li>Pull dumbbell to hip</li>
            <li>Keep elbow close to body</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 10-12 each arm, 3 sets</em></p>

          <p><strong>Face Pulls</strong></p>
          <ol>
            <li>Cable at face height with rope</li>
            <li>Pull toward face, spreading the rope</li>
            <li>Squeeze rear delts and upper back</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Essential for posture and shoulder health.</p>

          <h3>Shoulder Exercises</h3>

          <p><strong>Overhead Press</strong></p>
          <ol>
            <li>Bar at shoulder level, grip slightly wider than shoulders</li>
            <li>Press straight overhead</li>
            <li>Lockout with biceps by ears</li>
            <li>Lower to shoulders</li>
          </ol>
          <p><em>Reps: 6-10, 3-4 sets</em></p>

          <p><strong>Lateral Raises</strong></p>
          <ol>
            <li>Dumbbells at sides</li>
            <li>Raise arms out to sides until shoulder height</li>
            <li>Control the lowering</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <p><strong>Rear Delt Flyes</strong></p>
          <ol>
            <li>Hinge forward or lie on incline bench</li>
            <li>Raise arms out to sides</li>
            <li>Squeeze shoulder blades</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Arm Exercises</h3>

          <p><strong>Bicep Curls</strong></p>
          <p>Barbell or dumbbells. Curl weight toward shoulders, lower slowly.</p>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <p><strong>Tricep Pushdowns</strong></p>
          <p>Cable with bar or rope. Push down until arms straight, squeeze triceps.</p>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <p><strong>Skull Crushers</strong></p>
          <p>Lie on bench, lower weight toward forehead, extend.</p>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h2>Sample Upper Body Workouts</h2>

          <h3>Beginner Upper Body (Bodyweight/Light)</h3>
          <ul>
            <li>Push-ups: 3 × 10-15</li>
            <li>Inverted rows: 3 × 10-12</li>
            <li>Pike push-ups: 3 × 8-10</li>
            <li>Dumbbell curls: 3 × 12</li>
            <li>Tricep dips (bench): 3 × 10-12</li>
          </ul>

          <h3>Intermediate Upper Body A (Push Focus)</h3>
          <ul>
            <li>Bench press: 4 × 8</li>
            <li>Overhead press: 3 × 10</li>
            <li>Incline dumbbell press: 3 × 10</li>
            <li>Lateral raises: 3 × 15</li>
            <li>Tricep pushdowns: 3 × 12</li>
            <li>Face pulls: 3 × 15</li>
          </ul>

          <h3>Intermediate Upper Body B (Pull Focus)</h3>
          <ul>
            <li>Pull-ups or lat pulldowns: 4 × 8-10</li>
            <li>Barbell rows: 3 × 10</li>
            <li>Dumbbell rows: 3 × 10 each</li>
            <li>Rear delt flyes: 3 × 15</li>
            <li>Barbell curls: 3 × 10</li>
            <li>Hammer curls: 3 × 12</li>
          </ul>

          <h3>Advanced Upper Body</h3>
          <ul>
            <li>Bench press: 4 × 6</li>
            <li>Weighted pull-ups: 4 × 6-8</li>
            <li>Overhead press: 3 × 8</li>
            <li>Barbell rows: 3 × 8</li>
            <li>Incline dumbbell press: 3 × 10</li>
            <li>Dumbbell rows: 3 × 10</li>
            <li>Lateral raises: 3 × 15</li>
            <li>Face pulls: 3 × 15</li>
            <li>Bicep curls: 2 × 12</li>
            <li>Tricep work: 2 × 12</li>
          </ul>

          <h3>Quick 30-Minute Upper Body</h3>
          <ul>
            <li>Push-ups: 3 × max</li>
            <li>Dumbbell rows: 3 × 10</li>
            <li>Dumbbell shoulder press: 3 × 10</li>
            <li>Lat pulldowns: 3 × 10</li>
            <li>Superset: Bicep curls + Tricep extensions: 2 × 12 each</li>
          </ul>

          <h2>Upper Body Programming</h2>

          <h3>Option 1: Upper/Lower Split</h3>
          <ul>
            <li>Monday: Upper</li>
            <li>Tuesday: Lower</li>
            <li>Wednesday: Rest</li>
            <li>Thursday: Upper</li>
            <li>Friday: Lower</li>
          </ul>
          <p>Each muscle hit 2x per week—optimal for most people.</p>

          <h3>Option 2: Push/Pull/Legs</h3>
          <ul>
            <li>Push: Chest, shoulders, triceps</li>
            <li>Pull: Back, biceps, rear delts</li>
            <li>Legs: Quads, hamstrings, glutes</li>
          </ul>
          <p>Run 2x through per week for 6 training days.</p>

          <h3>Option 3: Full Body</h3>
          <p>Include upper body pushing and pulling in each session, 3x per week.</p>

          <h2>Upper Body Training Tips</h2>
          <ul>
            <li><strong>Balance push and pull:</strong> Equal volume for chest/shoulders and back</li>
            <li><strong>Prioritize compounds:</strong> Presses, rows, and pull-ups before isolation</li>
            <li><strong>Include vertical and horizontal:</strong> Don&apos;t just bench—do overhead work and rows</li>
            <li><strong>Face pulls are essential:</strong> They balance all the pressing and protect shoulders</li>
            <li><strong>Arms get work from compounds:</strong> Don&apos;t overdo bicep and tricep isolation</li>
            <li><strong>Progressive overload:</strong> Add weight or reps over time</li>
          </ul>

          <h2>Common Mistakes</h2>
          <ul>
            <li><strong>Too much pressing, not enough pulling:</strong> Leads to rounded shoulders</li>
            <li><strong>Ignoring rear delts:</strong> Critical for shoulder health and posture</li>
            <li><strong>Skipping overhead work:</strong> Important for shoulder development and function</li>
            <li><strong>Too much arm isolation:</strong> Compounds build arms too</li>
            <li><strong>Poor mind-muscle connection:</strong> Focus on the working muscle</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            A complete upper body workout balances pushing and pulling, includes both horizontal and vertical movements, and doesn&apos;t neglect postural muscles like rear delts and upper back.
          </p>
          <p>
            Train upper body 2-4 times per week depending on your split, prioritize compound movements, and progress gradually. Your strength and physique will follow.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized upper body program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom workout plans optimized for your goals and equipment.
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
