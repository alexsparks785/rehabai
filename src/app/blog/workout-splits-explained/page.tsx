import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workout Splits Explained: Find the Best Training Split for You",
  description:
    "Complete guide to workout splits. Learn about full body, upper/lower, PPL, and bro splits to find the best training program for your goals and schedule.",
  keywords: [
    "workout splits",
    "training split",
    "PPL split",
    "push pull legs",
    "upper lower split",
    "full body workout",
    "bro split",
  ],
};

export default function WorkoutSplitsExplainedPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Workout Splits Explained: Find the Best Training Split for You
          </h1>
          <p className="text-gray-600 text-lg">
            Understand the pros and cons of every popular training split to build your optimal workout program.
          </p>
          <p className="text-sm text-gray-500 mt-2">9 min read</p>
        </header>

        <p className="lead">
          Should you train full body or split it up? How many days per week? What's PPL? A workout split is simply how you organize your training across the week. The "best" split depends on your schedule, goals, experience level, and recovery capacity. Here's everything you need to know to choose wisely.
        </p>

        <h2>What Is a Workout Split?</h2>
        <p>
          A workout split is how you divide your training by muscle group or movement pattern across your training week. Instead of training everything every session, you strategically separate muscle groups to allow adequate recovery while maximizing training frequency.
        </p>
        <p>
          <strong>Key principle:</strong> Muscles need about 48-72 hours to recover from training. Your split should allow this recovery while still training each muscle often enough to stimulate growth (typically 2+ times per week for optimal results).
        </p>

        <h2>Full Body Split</h2>
        <p>
          Train your entire body each workout, typically 3 days per week.
        </p>

        <h3>Sample Schedule</h3>
        <ul>
          <li>Monday: Full body</li>
          <li>Tuesday: Rest</li>
          <li>Wednesday: Full body</li>
          <li>Thursday: Rest</li>
          <li>Friday: Full body</li>
          <li>Saturday/Sunday: Rest</li>
        </ul>

        <h3>Sample Workout</h3>
        <ol>
          <li>Squats: 3×8</li>
          <li>Bench Press: 3×8</li>
          <li>Rows: 3×10</li>
          <li>Romanian Deadlift: 3×10</li>
          <li>Overhead Press: 3×10</li>
          <li>Lat Pulldown: 3×10</li>
          <li>Plank: 3×30 seconds</li>
        </ol>

        <h3>Pros</h3>
        <ul>
          <li><strong>High frequency:</strong> Each muscle trained 3x per week</li>
          <li><strong>Time efficient:</strong> Only 3 gym days needed</li>
          <li><strong>Flexible:</strong> Miss a day? You've still hit everything twice that week</li>
          <li><strong>Great for beginners:</strong> Learn movements through repetition</li>
          <li><strong>Ideal for fat loss:</strong> More calories burned per session</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li><strong>Long workouts:</strong> 60-90 minutes to hit everything meaningfully</li>
          <li><strong>Fatigue management:</strong> Hard to go all-out on every muscle</li>
          <li><strong>Limited volume per muscle:</strong> Less focus on weak points</li>
        </ul>

        <h3>Best For</h3>
        <ul>
          <li>Beginners (first 6-12 months)</li>
          <li>People with 3 training days available</li>
          <li>Those prioritizing general fitness over bodybuilding</li>
          <li>Fat loss phases</li>
        </ul>

        <h2>Upper/Lower Split</h2>
        <p>
          Alternate between upper body and lower body workouts, typically 4 days per week.
        </p>

        <h3>Sample Schedule</h3>
        <ul>
          <li>Monday: Upper</li>
          <li>Tuesday: Lower</li>
          <li>Wednesday: Rest</li>
          <li>Thursday: Upper</li>
          <li>Friday: Lower</li>
          <li>Saturday/Sunday: Rest</li>
        </ul>

        <h3>Sample Upper Workout</h3>
        <ol>
          <li>Bench Press: 4×8</li>
          <li>Rows: 4×10</li>
          <li>Overhead Press: 3×10</li>
          <li>Lat Pulldown: 3×10</li>
          <li>Lateral Raises: 3×15</li>
          <li>Bicep Curls: 3×12</li>
          <li>Tricep Pushdowns: 3×12</li>
        </ol>

        <h3>Sample Lower Workout</h3>
        <ol>
          <li>Squats: 4×8</li>
          <li>Romanian Deadlift: 4×10</li>
          <li>Leg Press: 3×12</li>
          <li>Leg Curls: 3×12</li>
          <li>Calf Raises: 4×15</li>
          <li>Plank: 3×45 seconds</li>
        </ol>

        <h3>Pros</h3>
        <ul>
          <li><strong>Good frequency:</strong> Each muscle trained 2x per week</li>
          <li><strong>Balanced volume:</strong> More exercises per muscle than full body</li>
          <li><strong>Good recovery:</strong> 2-3 days between same muscle groups</li>
          <li><strong>Flexible:</strong> Works with 3 or 4 training days</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li><strong>Upper days can be long:</strong> Many muscle groups to cover</li>
          <li><strong>Less frequency than full body:</strong> 2x vs 3x per week</li>
        </ul>

        <h3>Best For</h3>
        <ul>
          <li>Intermediate lifters</li>
          <li>People with 4 training days available</li>
          <li>Those wanting balance between frequency and volume</li>
          <li>Athletes who need lower body freshness for sports</li>
        </ul>

        <h2>Push/Pull/Legs (PPL)</h2>
        <p>
          Divide training by movement pattern: pushing movements, pulling movements, and leg movements.
        </p>

        <h3>Sample Schedule (6 Days)</h3>
        <ul>
          <li>Monday: Push</li>
          <li>Tuesday: Pull</li>
          <li>Wednesday: Legs</li>
          <li>Thursday: Push</li>
          <li>Friday: Pull</li>
          <li>Saturday: Legs</li>
          <li>Sunday: Rest</li>
        </ul>

        <h3>Sample Push Workout</h3>
        <ol>
          <li>Bench Press: 4×8</li>
          <li>Incline Dumbbell Press: 3×10</li>
          <li>Overhead Press: 3×10</li>
          <li>Lateral Raises: 4×15</li>
          <li>Tricep Dips: 3×10</li>
          <li>Tricep Pushdowns: 3×12</li>
        </ol>

        <h3>Sample Pull Workout</h3>
        <ol>
          <li>Deadlift or Barbell Row: 4×6</li>
          <li>Pull-Ups or Lat Pulldown: 4×8</li>
          <li>Cable Rows: 3×10</li>
          <li>Face Pulls: 3×15</li>
          <li>Barbell Curls: 3×10</li>
          <li>Hammer Curls: 3×12</li>
        </ol>

        <h3>Sample Legs Workout</h3>
        <ol>
          <li>Squats: 4×8</li>
          <li>Romanian Deadlift: 4×10</li>
          <li>Leg Press: 3×12</li>
          <li>Leg Curls: 3×12</li>
          <li>Walking Lunges: 3×10 each leg</li>
          <li>Calf Raises: 4×15</li>
        </ol>

        <h3>Pros</h3>
        <ul>
          <li><strong>High frequency:</strong> Each muscle hit 2x per week</li>
          <li><strong>High volume:</strong> Lots of exercises per session</li>
          <li><strong>Optimal for hypertrophy:</strong> Research supports 2x frequency with high volume</li>
          <li><strong>Logical grouping:</strong> Muscles that work together train together</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li><strong>Time commitment:</strong> 6 days per week is a lot</li>
          <li><strong>Recovery demands:</strong> May be too much for some</li>
          <li><strong>Inflexible:</strong> Miss a day and frequency drops</li>
        </ul>

        <h3>Best For</h3>
        <ul>
          <li>Intermediate to advanced lifters</li>
          <li>Those focused on muscle building</li>
          <li>People with 6 days available for training</li>
          <li>Lifters who recover well</li>
        </ul>

        <h3>3-Day PPL Option</h3>
        <p>
          Can't do 6 days? Run PPL once per week:
        </p>
        <ul>
          <li>Monday: Push</li>
          <li>Wednesday: Pull</li>
          <li>Friday: Legs</li>
        </ul>
        <p>
          You only hit each muscle once per week, so it's less optimal for growth but still works for maintenance or busy schedules.
        </p>

        <h2>Bro Split (Body Part Split)</h2>
        <p>
          Train one major muscle group per day, typically 5 days per week.
        </p>

        <h3>Sample Schedule</h3>
        <ul>
          <li>Monday: Chest</li>
          <li>Tuesday: Back</li>
          <li>Wednesday: Shoulders</li>
          <li>Thursday: Legs</li>
          <li>Friday: Arms</li>
          <li>Saturday/Sunday: Rest</li>
        </ul>

        <h3>Sample Chest Day</h3>
        <ol>
          <li>Bench Press: 4×8</li>
          <li>Incline Dumbbell Press: 4×10</li>
          <li>Dumbbell Flyes: 3×12</li>
          <li>Cable Crossovers: 3×15</li>
          <li>Push-Ups: 3×failure</li>
        </ol>

        <h3>Pros</h3>
        <ul>
          <li><strong>High volume per muscle:</strong> Lots of exercises for each body part</li>
          <li><strong>Great pump:</strong> Satisfying workouts</li>
          <li><strong>Focus on weak points:</strong> Dedicated time for lagging muscles</li>
          <li><strong>Popular:</strong> Every gym-goer has done it</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li><strong>Low frequency:</strong> Each muscle only trained 1x per week</li>
          <li><strong>Suboptimal for natural lifters:</strong> Research shows 2x frequency is better</li>
          <li><strong>Long time between sessions:</strong> 7 days is too long for optimal protein synthesis</li>
          <li><strong>Requires 5 days:</strong> Not flexible with schedule</li>
        </ul>

        <h3>Best For</h3>
        <ul>
          <li>Advanced lifters with high volume tolerance</li>
          <li>Enhanced athletes (longer protein synthesis window)</li>
          <li>Those who enjoy dedicated body part days</li>
          <li>Bringing up specific weak points (when combined with higher frequency for other parts)</li>
        </ul>

        <h2>How to Choose Your Split</h2>

        <h3>Based on Training Days Available</h3>
        <table>
          <thead>
            <tr>
              <th>Days/Week</th>
              <th>Best Split Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 days</td>
              <td>Full body</td>
            </tr>
            <tr>
              <td>3 days</td>
              <td>Full body or PPL (1x each)</td>
            </tr>
            <tr>
              <td>4 days</td>
              <td>Upper/Lower</td>
            </tr>
            <tr>
              <td>5 days</td>
              <td>Upper/Lower + 1, or modified PPL</td>
            </tr>
            <tr>
              <td>6 days</td>
              <td>PPL (2x rotation)</td>
            </tr>
          </tbody>
        </table>

        <h3>Based on Experience</h3>
        <ul>
          <li><strong>Beginner (0-1 year):</strong> Full body 3x/week. Learn the movements, build base.</li>
          <li><strong>Intermediate (1-3 years):</strong> Upper/Lower or PPL. Add volume as you grow.</li>
          <li><strong>Advanced (3+ years):</strong> PPL, specialized splits, or whatever works for you.</li>
        </ul>

        <h3>Based on Goals</h3>
        <ul>
          <li><strong>General fitness:</strong> Full body 3x</li>
          <li><strong>Muscle building:</strong> PPL or Upper/Lower (2x frequency per muscle)</li>
          <li><strong>Strength focus:</strong> Upper/Lower or full body with heavy compounds</li>
          <li><strong>Fat loss:</strong> Full body (burns more calories per session)</li>
          <li><strong>Sport performance:</strong> Upper/Lower (keep legs fresh for practice)</li>
        </ul>

        <h2>Advanced Considerations</h2>

        <h3>Training Frequency Per Muscle</h3>
        <p>
          Research generally shows that training each muscle 2x per week is better than 1x for hypertrophy. Some evidence suggests 3x can be even better, especially for smaller muscles and beginners.
        </p>

        <h3>Volume Landmarks</h3>
        <ul>
          <li><strong>Minimum effective volume:</strong> ~10 sets per muscle per week</li>
          <li><strong>Maximum recoverable volume:</strong> ~20-25 sets per muscle per week (varies by individual)</li>
          <li><strong>Spread it out:</strong> 10 sets in one session is harder to recover from than 5 sets in two sessions</li>
        </ul>

        <h3>The Best Split Is One You'll Follow</h3>
        <p>
          A "perfect" PPL split means nothing if you can only make it to the gym 3 days a week. The best program is one that fits your life and that you'll stick with consistently.
        </p>

        <h2>Sample Programs</h2>

        <h3>Beginner: Full Body 3x</h3>
        <p>
          Train Monday, Wednesday, Friday. Each session:
        </p>
        <ol>
          <li>Squat or leg press: 3×10</li>
          <li>Horizontal push (bench or push-up): 3×10</li>
          <li>Horizontal pull (row): 3×10</li>
          <li>Hip hinge (Romanian deadlift): 3×10</li>
          <li>Vertical push (overhead press): 2×10</li>
          <li>Vertical pull (pulldown): 2×10</li>
          <li>Core: 2×15</li>
        </ol>

        <h3>Intermediate: Upper/Lower 4x</h3>
        <p>
          Upper Monday/Thursday, Lower Tuesday/Friday:
        </p>
        <p><strong>Upper A:</strong> Bench focus</p>
        <p><strong>Upper B:</strong> Overhead press focus</p>
        <p><strong>Lower A:</strong> Squat focus</p>
        <p><strong>Lower B:</strong> Deadlift focus</p>

        <h3>Advanced: PPL 6x</h3>
        <p>
          Push/Pull/Legs twice per week. Vary rep ranges between sessions (heavy day, hypertrophy day).
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>A workout split organizes your training by muscle groups across the week</li>
          <li>Training each muscle 2x per week is generally optimal for growth</li>
          <li>Full body: Best for beginners and 3-day schedules</li>
          <li>Upper/Lower: Great balance for 4-day schedules</li>
          <li>PPL: Optimal for 6-day schedules focused on muscle building</li>
          <li>Bro split: Lower frequency—better for advanced lifters or enhanced athletes</li>
          <li>The best split is one that fits your schedule and you'll do consistently</li>
          <li>As you advance, you'll need more volume—adjust your split accordingly</li>
        </ul>

        <p>
          Don't overthink this. Pick a split that matches your schedule, train hard, recover well, and make progress. You can always change your split as your schedule or goals evolve.
        </p>
      </article>
    </main>
  );
}
