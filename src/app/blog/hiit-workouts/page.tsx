import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIIT Workouts: High-Intensity Interval Training Guide",
  description:
    "Complete guide to HIIT workouts. Learn what HIIT is, its benefits, sample workouts for all levels, and how to maximize results safely.",
  keywords: [
    "HIIT workouts",
    "high intensity interval training",
    "HIIT for beginners",
    "HIIT exercises",
    "interval training",
    "cardio workout",
  ],
};

export default function HIITWorkoutsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            HIIT Workouts: High-Intensity Interval Training Guide
          </h1>
          <p className="text-gray-600 text-lg">
            Maximize your fitness results in minimum time with effective HIIT protocols.
          </p>
          <p className="text-sm text-gray-500 mt-2">8 min read</p>
        </header>

        <p className="lead">
          HIIT—High-Intensity Interval Training—is one of the most time-efficient ways to improve cardiovascular fitness, burn fat, and build endurance. By alternating between intense bursts of effort and recovery periods, you can accomplish in 20 minutes what might take 60+ minutes of steady-state cardio.
        </p>

        <h2>What Is HIIT?</h2>
        <p>
          HIIT alternates between short periods of maximum or near-maximum effort and brief recovery periods. A typical HIIT workout lasts 15-30 minutes, including warm-up and cool-down.
        </p>

        <h3>HIIT vs. Traditional Cardio</h3>
        <table>
          <thead>
            <tr>
              <th>HIIT</th>
              <th>Steady-State Cardio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15-30 minutes</td>
              <td>45-60+ minutes</td>
            </tr>
            <tr>
              <td>Near-max effort intervals</td>
              <td>Moderate, consistent effort</td>
            </tr>
            <tr>
              <td>Higher calorie burn per minute</td>
              <td>Lower calorie burn per minute</td>
            </tr>
            <tr>
              <td>Significant afterburn (EPOC)</td>
              <td>Minimal afterburn</td>
            </tr>
            <tr>
              <td>Higher recovery demands</td>
              <td>Easier to recover from</td>
            </tr>
          </tbody>
        </table>

        <h2>Benefits of HIIT</h2>

        <h3>1. Time Efficiency</h3>
        <p>
          The biggest advantage. A 20-minute HIIT session can provide similar or greater benefits than 45+ minutes of jogging. Perfect for busy schedules.
        </p>

        <h3>2. Increased Calorie Burn</h3>
        <p>
          HIIT burns more calories per minute than steady cardio. Plus, the "afterburn effect" (EPOC—excess post-exercise oxygen consumption) means you continue burning calories for hours after the workout ends.
        </p>

        <h3>3. Improved Cardiovascular Health</h3>
        <p>
          HIIT improves VO2 max (your body's ability to use oxygen) as effectively as—or more than—traditional endurance training. It also improves blood pressure and blood sugar control.
        </p>

        <h3>4. Muscle Preservation</h3>
        <p>
          Unlike long cardio sessions that can break down muscle tissue, HIIT is short enough to preserve muscle mass while still improving cardiovascular fitness.
        </p>

        <h3>5. No Equipment Needed</h3>
        <p>
          Bodyweight HIIT workouts require zero equipment. You can do them anywhere.
        </p>

        <h2>Common HIIT Protocols</h2>

        <h3>Tabata (4 Minutes)</h3>
        <ul>
          <li><strong>Structure:</strong> 20 seconds work, 10 seconds rest × 8 rounds</li>
          <li><strong>Total time:</strong> 4 minutes</li>
          <li><strong>Intensity:</strong> All-out, maximum effort</li>
          <li><strong>Best for:</strong> Time-crunched workouts, single exercises</li>
        </ul>

        <h3>30-30 Intervals</h3>
        <ul>
          <li><strong>Structure:</strong> 30 seconds work, 30 seconds rest</li>
          <li><strong>Total time:</strong> 10-20 minutes</li>
          <li><strong>Intensity:</strong> 80-90% effort</li>
          <li><strong>Best for:</strong> Beginners, sustainable effort</li>
        </ul>

        <h3>40-20 Intervals</h3>
        <ul>
          <li><strong>Structure:</strong> 40 seconds work, 20 seconds rest</li>
          <li><strong>Total time:</strong> 15-20 minutes</li>
          <li><strong>Intensity:</strong> 75-85% effort</li>
          <li><strong>Best for:</strong> Building endurance, intermediate level</li>
        </ul>

        <h3>1:1 Intervals</h3>
        <ul>
          <li><strong>Structure:</strong> 1 minute work, 1 minute rest</li>
          <li><strong>Total time:</strong> 16-20 minutes</li>
          <li><strong>Intensity:</strong> 85-95% effort</li>
          <li><strong>Best for:</strong> Running, cycling, rowing</li>
        </ul>

        <h2>Best HIIT Exercises</h2>

        <h3>Lower Body (High Calorie Burn)</h3>
        <ul>
          <li><strong>Jump squats:</strong> Explosive, full-body effort</li>
          <li><strong>Burpees:</strong> The ultimate HIIT exercise</li>
          <li><strong>Jump lunges:</strong> Single-leg power</li>
          <li><strong>Skater jumps:</strong> Lateral movement, coordination</li>
          <li><strong>Box jumps:</strong> Explosive power (if available)</li>
        </ul>

        <h3>Upper Body</h3>
        <ul>
          <li><strong>Push-up variations:</strong> Standard, explosive, clapping</li>
          <li><strong>Mountain climbers:</strong> Core + cardio</li>
          <li><strong>Bear crawl:</strong> Full-body stability</li>
          <li><strong>Plank jacks:</strong> Core + cardio</li>
        </ul>

        <h3>Full Body</h3>
        <ul>
          <li><strong>Burpees:</strong> Push-up + jump = maximum effort</li>
          <li><strong>Thrusters:</strong> Squat to press (with weights)</li>
          <li><strong>Man-makers:</strong> Push-up + row + squat + press</li>
          <li><strong>Kettlebell swings:</strong> Hip power + cardio</li>
        </ul>

        <h3>Low-Impact Options</h3>
        <ul>
          <li><strong>Fast step-ups:</strong> No jumping required</li>
          <li><strong>Speed squats:</strong> Fast air squats</li>
          <li><strong>Battle ropes:</strong> Upper body + cardio</li>
          <li><strong>Rowing machine:</strong> Full-body, joint-friendly</li>
        </ul>

        <h2>Beginner HIIT Workout (20 Minutes)</h2>
        <p>Start here if you're new to HIIT. Focus on learning movements before maximizing intensity.</p>

        <h3>Warm-Up (3 Minutes)</h3>
        <ol>
          <li>March in place: 1 minute</li>
          <li>Arm circles: 30 seconds</li>
          <li>Bodyweight squats: 30 seconds</li>
          <li>Leg swings: 30 seconds each leg</li>
        </ol>

        <h3>Workout: 30 Seconds Work, 30 Seconds Rest × 3 Rounds</h3>
        <ol>
          <li>Bodyweight squats (fast)</li>
          <li>Push-ups (any variation)</li>
          <li>High knees</li>
          <li>Reverse lunges (alternating)</li>
          <li>Mountain climbers</li>
        </ol>
        <p>Complete all 5 exercises, rest 1 minute, repeat for 3 total rounds.</p>

        <h3>Cool-Down (3 Minutes)</h3>
        <ol>
          <li>Walking in place: 1 minute</li>
          <li>Standing quad stretch: 30 seconds each</li>
          <li>Standing hamstring stretch: 30 seconds each</li>
        </ol>

        <h2>Intermediate HIIT Workout (25 Minutes)</h2>
        <p>Increase intensity and add jumping movements.</p>

        <h3>Warm-Up (4 Minutes)</h3>
        <ol>
          <li>Jumping jacks: 1 minute</li>
          <li>Arm circles to shoulder taps: 1 minute</li>
          <li>Bodyweight squats: 1 minute</li>
          <li>Inchworms: 1 minute</li>
        </ol>

        <h3>Workout: 40 Seconds Work, 20 Seconds Rest × 3 Rounds</h3>
        <ol>
          <li>Jump squats</li>
          <li>Push-ups</li>
          <li>Skater jumps</li>
          <li>Plank hold</li>
          <li>Jump lunges</li>
          <li>Mountain climbers</li>
        </ol>
        <p>Complete all 6 exercises, rest 1 minute between rounds.</p>

        <h2>Advanced HIIT Workout (20 Minutes)</h2>
        <p>Maximum intensity, minimal rest. Only attempt if you have a solid fitness base.</p>

        <h3>Warm-Up (3 Minutes)</h3>
        <p>Light jogging, dynamic stretches, practice movements.</p>

        <h3>Tabata Circuit (16 Minutes)</h3>
        <p>20 seconds work, 10 seconds rest × 8 rounds per exercise. 1 minute rest between exercises.</p>
        <ol>
          <li><strong>Tabata 1:</strong> Burpees (8 rounds = 4 minutes)</li>
          <li>Rest 1 minute</li>
          <li><strong>Tabata 2:</strong> Jump squats (8 rounds = 4 minutes)</li>
          <li>Rest 1 minute</li>
          <li><strong>Tabata 3:</strong> Mountain climbers (8 rounds = 4 minutes)</li>
          <li>Rest 1 minute</li>
          <li><strong>Tabata 4:</strong> Jump lunges (8 rounds = 4 minutes)</li>
        </ol>

        <h2>HIIT on Cardio Machines</h2>

        <h3>Treadmill HIIT</h3>
        <ol>
          <li>Warm-up: 3 minutes easy jog</li>
          <li>Sprint at 90% effort: 30 seconds</li>
          <li>Walk or slow jog: 30 seconds</li>
          <li>Repeat 8-10 times</li>
          <li>Cool-down: 3 minutes easy walk</li>
        </ol>

        <h3>Rowing Machine HIIT</h3>
        <ol>
          <li>Warm-up: 3 minutes easy rowing</li>
          <li>Maximum effort row: 30 seconds</li>
          <li>Easy recovery row: 30 seconds</li>
          <li>Repeat 10 times</li>
          <li>Cool-down: 3 minutes easy rowing</li>
        </ol>

        <h3>Cycling/Spin HIIT</h3>
        <ol>
          <li>Warm-up: 5 minutes easy spin</li>
          <li>All-out sprint: 20 seconds</li>
          <li>Easy recovery: 40 seconds</li>
          <li>Repeat 8-10 times</li>
          <li>Cool-down: 3 minutes easy spin</li>
        </ol>

        <h2>How Often Should You Do HIIT?</h2>
        <p>
          <strong>Recommendation: 2-3 times per week maximum.</strong>
        </p>
        <p>
          HIIT is demanding on your body. More isn't better. Too much HIIT can lead to:
        </p>
        <ul>
          <li>Overtraining and burnout</li>
          <li>Increased injury risk</li>
          <li>Elevated cortisol (stress hormone)</li>
          <li>Poor recovery and diminished results</li>
        </ul>
        <p>
          Balance HIIT with strength training and low-intensity activities like walking, stretching, or yoga.
        </p>

        <h3>Sample Weekly Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Strength training</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>HIIT (20 min)</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Walking or yoga</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Strength training</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>HIIT (20 min)</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Strength or outdoor activity</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Rest or gentle stretching</td>
            </tr>
          </tbody>
        </table>

        <h2>Common HIIT Mistakes</h2>

        <h3>1. Going Too Hard Too Soon</h3>
        <p>
          Build up gradually. Start with longer rest periods and shorter work intervals. Progress over weeks, not days.
        </p>

        <h3>2. Sacrificing Form for Speed</h3>
        <p>
          Bad form during high-intensity exercise is a recipe for injury. Slow down or modify exercises to maintain technique.
        </p>

        <h3>3. Doing HIIT Every Day</h3>
        <p>
          Your body needs recovery. 2-3 HIIT sessions per week is optimal for most people.
        </p>

        <h3>4. Not Going Hard Enough</h3>
        <p>
          HIIT works because of the intensity. If you can easily chat during work intervals, you're not working hard enough. Aim for 80-95% of your maximum effort.
        </p>

        <h3>5. Skipping Warm-Up</h3>
        <p>
          Never skip the warm-up. Your body needs to prepare for intense effort. 3-5 minutes of light movement can prevent injuries.
        </p>

        <h2>Making HIIT Work for Your Goals</h2>

        <h3>For Fat Loss</h3>
        <ul>
          <li>Combine HIIT with strength training and a calorie deficit</li>
          <li>Focus on full-body, compound movements</li>
          <li>Prioritize consistency over single-session intensity</li>
        </ul>

        <h3>For Cardiovascular Fitness</h3>
        <ul>
          <li>Use measured activities (running, cycling, rowing)</li>
          <li>Track your progress via speed, distance, or heart rate</li>
          <li>Mix HIIT with longer, steady cardio sessions</li>
        </ul>

        <h3>For Time Efficiency</h3>
        <ul>
          <li>Tabata protocols (4 minutes) are the ultimate time-saver</li>
          <li>Full-body exercises maximize bang for your buck</li>
          <li>No equipment bodyweight HIIT eliminates commute time</li>
        </ul>

        <h2>Key Takeaways</h2>
        <ul>
          <li>HIIT alternates intense effort with recovery for time-efficient fitness</li>
          <li>20 minutes of HIIT can provide benefits similar to longer cardio</li>
          <li>Limit HIIT to 2-3 sessions per week to allow recovery</li>
          <li>Start with longer rests and shorter work intervals if new</li>
          <li>Maintain good form—don't sacrifice technique for speed</li>
          <li>Balance HIIT with strength training and low-intensity movement</li>
        </ul>

        <p>
          HIIT is a powerful tool, but it's just one piece of the fitness puzzle. Combine it with strength training, adequate recovery, and smart nutrition for the best results.
        </p>
      </article>
    </main>
  );
}
