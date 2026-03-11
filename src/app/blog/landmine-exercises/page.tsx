import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Landmine Exercises: Full Body Training with a Barbell in the Corner | FoundationalRehab',
  description: 'Master landmine training with these effective exercises for strength, power, and muscle building. Complete workout guide using the angled barbell setup.',
  keywords: ['landmine exercises', 'landmine workout', 'barbell landmine', 'landmine press', 'landmine row'],
}

export default function LandmineExercises() {
  return (
    <BlogPost
      title="Landmine Exercises: Full Body Training with a Barbell in the Corner"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Strength Training"
      tags={['strength', 'barbell', 'full body', 'shoulders', 'core']}
    >
      <p className="lead">
        A barbell anchored in a corner opens up dozens of unique exercises. The angled path
        makes many movements more shoulder-friendly, engages the core differently, and lets
        you train rotation safely under load.
      </p>

      <h2>Why Landmine Training Works</h2>
      <ul>
        <li><strong>Shoulder-friendly pressing:</strong> Angled path reduces shoulder impingement risk</li>
        <li><strong>Natural arc:</strong> Movement follows a natural curved path</li>
        <li><strong>Core engagement:</strong> Offset load challenges stability</li>
        <li><strong>Rotational training:</strong> Safe loaded rotation for athletes</li>
        <li><strong>Versatile:</strong> Upper body, lower body, and full body exercises</li>
        <li><strong>Minimal equipment:</strong> Just a barbell and corner (or landmine attachment)</li>
      </ul>

      <h2>Setup Options</h2>
      <ul>
        <li><strong>Corner:</strong> Wedge barbell in corner of walls</li>
        <li><strong>Landmine attachment:</strong> Purpose-built pivot that attaches to rack or floor</li>
        <li><strong>Heavy dumbbell:</strong> Stick barbell end in hole of heavy dumbbell</li>
        <li><strong>Towel wrap:</strong> Protect walls with towel in corner</li>
      </ul>

      <h2>Upper Body Pressing</h2>

      <h3>Landmine Press (Standing)</h3>
      <p><strong>Muscles:</strong> Shoulders, upper chest, triceps, core</p>
      <ol>
        <li>Stand facing away from anchor</li>
        <li>Hold barbell end at shoulder with one hand</li>
        <li>Press up and forward at 45° angle</li>
        <li>Lower with control</li>
        <li>10-12 each arm</li>
      </ol>
      <p><strong>Why it's great:</strong> Easier on shoulders than vertical pressing</p>

      <h3>Landmine Press (Kneeling)</h3>
      <p><strong>Muscles:</strong> Same as standing, more core isolation</p>
      <ol>
        <li>Half-kneeling, inside knee down</li>
        <li>Press with arm on same side as up knee</li>
        <li>Prevents lower body compensation</li>
        <li>10-12 each side</li>
      </ol>

      <h3>Two-Hand Landmine Press</h3>
      <p><strong>Muscles:</strong> Chest, shoulders, triceps</p>
      <ol>
        <li>Hold end of barbell with both hands interlaced</li>
        <li>Barbell at chest level</li>
        <li>Press straight up and forward</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Landmine Floor Press</h3>
      <p><strong>Muscles:</strong> Chest, triceps</p>
      <ol>
        <li>Lie on back, head toward anchor</li>
        <li>Press bar with one hand</li>
        <li>Limited range protects shoulders</li>
        <li>10-12 each arm</li>
      </ol>

      <h2>Upper Body Pulling</h2>

      <h3>Landmine Row (Meadows Row)</h3>
      <p><strong>Muscles:</strong> Lats, upper back, biceps</p>
      <ol>
        <li>Stand perpendicular to barbell</li>
        <li>Hinge at hips, grab end of bar</li>
        <li>Row elbow back and up</li>
        <li>Squeeze lat at top</li>
        <li>10-12 each side</li>
      </ol>
      <p><strong>Key cue:</strong> "Row toward hip, not straight up"</p>

      <h3>Two-Hand Landmine Row</h3>
      <p><strong>Muscles:</strong> Upper back, lats, rhomboids</p>
      <ol>
        <li>Straddle barbell, facing anchor</li>
        <li>Hinge at hips, grab bar with both hands</li>
        <li>Row to chest</li>
        <li>Squeeze shoulder blades</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Single-Arm T-Bar Row</h3>
      <p><strong>Muscles:</strong> Lats, mid-back</p>
      <ol>
        <li>Same setup as Meadows row</li>
        <li>Wider stance, more horizontal torso</li>
        <li>Pull elbow straight back</li>
        <li>10-12 each side</li>
      </ol>

      <h2>Lower Body</h2>

      <h3>Landmine Squat</h3>
      <p><strong>Muscles:</strong> Quads, glutes, core</p>
      <ol>
        <li>Hold bar end at chest with both hands</li>
        <li>Feet shoulder-width or slightly wider</li>
        <li>Squat down, keeping chest up</li>
        <li>Weight naturally shifts slightly back</li>
        <li>12-15 repetitions</li>
      </ol>
      <p><strong>Great for:</strong> Teaching squat pattern, those with mobility limits</p>

      <h3>Landmine Goblet Squat</h3>
      <p><strong>Muscles:</strong> Quads, glutes, core</p>
      <ol>
        <li>Hold bar end like a goblet at chest</li>
        <li>Elbows point down</li>
        <li>Squat deep, use bar as counterbalance</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Landmine Romanian Deadlift</h3>
      <p><strong>Muscles:</strong> Hamstrings, glutes, lower back</p>
      <ol>
        <li>Face away from anchor, bar between legs</li>
        <li>Hold bar end with both hands</li>
        <li>Hinge at hips, push butt back</li>
        <li>Feel hamstring stretch</li>
        <li>Drive hips forward to stand</li>
        <li>10-12 repetitions</li>
      </ol>

      <h3>Landmine Single-Leg RDL</h3>
      <p><strong>Muscles:</strong> Hamstrings, glutes, balance</p>
      <ol>
        <li>Hold bar in opposite hand from standing leg</li>
        <li>Hinge forward on one leg</li>
        <li>Back leg extends behind</li>
        <li>Return to standing</li>
        <li>8-10 each leg</li>
      </ol>

      <h3>Landmine Reverse Lunge</h3>
      <p><strong>Muscles:</strong> Quads, glutes, hip stability</p>
      <ol>
        <li>Hold bar at one shoulder</li>
        <li>Step back into reverse lunge</li>
        <li>Drive through front heel to return</li>
        <li>10-12 each leg</li>
      </ol>

      <h3>Landmine Lateral Lunge</h3>
      <p><strong>Muscles:</strong> Adductors, glutes, quads</p>
      <ol>
        <li>Hold bar at chest</li>
        <li>Step wide to one side</li>
        <li>Sit back into that hip</li>
        <li>Push back to center</li>
        <li>10 each side</li>
      </ol>

      <h2>Rotational and Core</h2>

      <h3>Landmine Rotation</h3>
      <p><strong>Muscles:</strong> Obliques, core, shoulders</p>
      <ol>
        <li>Stand facing anchor, arms extended holding bar</li>
        <li>Rotate bar in an arc to one side</li>
        <li>Pivot feet and hips</li>
        <li>Control the arc to other side</li>
        <li>10-12 total rotations</li>
      </ol>
      <p><strong>Key cue:</strong> "Power from hips, arms just guide"</p>

      <h3>Landmine Anti-Rotation Press</h3>
      <p><strong>Muscles:</strong> Core anti-rotation</p>
      <ol>
        <li>Hold bar at chest, perpendicular stance to anchor</li>
        <li>Press bar straight out</li>
        <li>Resist rotation from offset load</li>
        <li>Return to chest</li>
        <li>10 each side</li>
      </ol>

      <h3>Landmine Rainbow</h3>
      <p><strong>Muscles:</strong> Core, shoulders, obliques</p>
      <ol>
        <li>Stand facing anchor, arms extended</li>
        <li>Arc bar overhead from side to side</li>
        <li>Like drawing a rainbow</li>
        <li>Control throughout</li>
        <li>8-10 each direction</li>
      </ol>

      <h3>Kneeling Landmine Press with Rotation</h3>
      <p><strong>Muscles:</strong> Core, shoulders with rotation</p>
      <ol>
        <li>Tall kneeling, bar at shoulder</li>
        <li>Press and rotate torso toward pressing side</li>
        <li>Return with control</li>
        <li>8-10 each side</li>
      </ol>

      <h2>Full Body</h2>

      <h3>Landmine Thruster</h3>
      <p><strong>Muscles:</strong> Full body—legs, core, shoulders</p>
      <ol>
        <li>Hold bar at chest</li>
        <li>Squat down</li>
        <li>Stand explosively, pressing bar overhead</li>
        <li>Lower bar, descend into next squat</li>
        <li>10-12 repetitions</li>
      </ol>

      <h3>Landmine Clean to Press</h3>
      <p><strong>Muscles:</strong> Full body power</p>
      <ol>
        <li>Start with bar low, hinged position</li>
        <li>Explosively clean bar to shoulder</li>
        <li>Press overhead</li>
        <li>Lower to start</li>
        <li>8-10 each side</li>
      </ol>

      <h2>Sample Landmine Workouts</h2>

      <h3>Full Body (30 minutes)</h3>
      <p>3 rounds:</p>
      <ol>
        <li>Landmine Squat: 12 reps</li>
        <li>Landmine Press (alternating): 10 each</li>
        <li>Landmine Row (alternating): 10 each</li>
        <li>Landmine RDL: 12 reps</li>
        <li>Landmine Rotation: 10 total</li>
        <li>Rest 90 seconds between rounds</li>
      </ol>

      <h3>Upper Body Focus (25 minutes)</h3>
      <p>4 rounds:</p>
      <ol>
        <li>Two-Hand Press: 12 reps</li>
        <li>Meadows Row (each side): 10 reps</li>
        <li>Single-Arm Press (kneeling): 10 each</li>
        <li>Anti-Rotation Press: 10 each side</li>
        <li>Rest 60 seconds between rounds</li>
      </ol>

      <h3>Lower Body Focus (25 minutes)</h3>
      <p>4 rounds:</p>
      <ol>
        <li>Landmine Goblet Squat: 15 reps</li>
        <li>Landmine RDL: 12 reps</li>
        <li>Landmine Reverse Lunge: 10 each leg</li>
        <li>Landmine Lateral Lunge: 8 each side</li>
        <li>Rest 60 seconds between rounds</li>
      </ol>

      <h3>Rotational Power (20 minutes)</h3>
      <p>For athletes—3 rounds:</p>
      <ol>
        <li>Landmine Rotation: 10 total</li>
        <li>Landmine Clean to Press: 8 each</li>
        <li>Landmine Rainbow: 8 each direction</li>
        <li>Landmine Thruster: 10 reps</li>
        <li>Rest 90 seconds between rounds</li>
      </ol>

      <h2>Loading Guidelines</h2>
      <ul>
        <li><strong>Beginners:</strong> Empty bar or 25-35 lbs added</li>
        <li><strong>Intermediate:</strong> 45-95 lbs total</li>
        <li><strong>Advanced:</strong> 95+ lbs depending on exercise</li>
        <li><strong>Power work:</strong> Lighter weight, explosive movement</li>
        <li><strong>Strength work:</strong> Heavier weight, controlled tempo</li>
      </ul>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Pressing too vertical:</strong> Let the arc happen—don't fight the angle</li>
        <li><strong>Losing core tension:</strong> Brace throughout, especially on presses</li>
        <li><strong>Rowing with arm only:</strong> Initiate with shoulder blade</li>
        <li><strong>Poor anchor:</strong> Make sure barbell is secure before heavy loads</li>
        <li><strong>Standing too close/far:</strong> Experiment with stance distance</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Landmine training fills gaps that barbells and dumbbells can't reach. The angled path
        is easier on shoulders, rotational exercises build athletic power, and the offset load
        challenges your core in unique ways. Add landmine work to your routine for more
        complete training with equipment you already have.
      </p>
    </BlogPost>
  )
}
