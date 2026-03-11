import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Golfers: Improve Your Swing and Prevent Injury | FoundationalRehab',
  description: 'Golf-specific exercises to increase driving distance, improve consistency, and prevent common golf injuries. Complete workout guide for golfers.',
  keywords: ['golf exercises', 'golf workout', 'golf fitness', 'golf swing exercises', 'golf flexibility'],
}

export default function ExercisesForGolfers() {
  return (
    <BlogPost
      title="Exercises for Golfers: Improve Your Swing and Prevent Injury"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Sports Performance"
      tags={['golf', 'sports', 'mobility', 'rotational power', 'injury prevention']}
    >
      <p className="lead">
        Golf demands more athleticism than most people realize. Rotational power, hip mobility,
        core stability, and shoulder health all determine how far and consistently you hit.
        Here's how to build a body that plays better golf.
      </p>

      <h2>What Golf Demands</h2>
      <ul>
        <li><strong>Thoracic rotation:</strong> Upper back mobility for full backswing</li>
        <li><strong>Hip mobility:</strong> Internal and external rotation for power transfer</li>
        <li><strong>Core stability:</strong> Control power from ground through club</li>
        <li><strong>Shoulder health:</strong> Withstand repetitive high-speed motion</li>
        <li><strong>Glute strength:</strong> Primary power source in the swing</li>
        <li><strong>Single-leg stability:</strong> Balance through the swing</li>
      </ul>

      <h2>Mobility Exercises</h2>

      <h3>90/90 Hip Stretch</h3>
      <p><strong>Why:</strong> Hip rotation is essential for power and prevents early extension</p>
      <ol>
        <li>Sit with front leg bent 90°, shin parallel to body</li>
        <li>Back leg bent 90°, shin perpendicular to body</li>
        <li>Sit tall, lean forward over front leg</li>
        <li>Hold 30-60 seconds</li>
        <li>Switch sides</li>
      </ol>
      <p><strong>Golf benefit:</strong> Better hip turn in backswing and downswing</p>

      <h3>Open Book (Thoracic Rotation)</h3>
      <p><strong>Why:</strong> Upper back rotation determines backswing length</p>
      <ol>
        <li>Lie on side, knees stacked and bent 90°</li>
        <li>Arms extended in front, palms together</li>
        <li>Rotate top arm open, following with eyes</li>
        <li>Try to touch floor behind you</li>
        <li>Return slowly</li>
        <li>10 each side</li>
      </ol>

      <h3>Cat-Cow</h3>
      <p><strong>Why:</strong> Spinal mobility and awareness</p>
      <ol>
        <li>Hands and knees position</li>
        <li>Round spine up (cat), tuck chin</li>
        <li>Arch spine, look up (cow)</li>
        <li>Move slowly, 10 repetitions</li>
      </ol>

      <h3>World's Greatest Stretch</h3>
      <p><strong>Why:</strong> Hits hips, thoracic spine, and hamstrings in one movement</p>
      <ol>
        <li>Deep lunge position</li>
        <li>Drop same-side elbow toward floor inside front foot</li>
        <li>Rotate and reach opposite arm to ceiling</li>
        <li>Straighten front leg for hamstring stretch</li>
        <li>5 each side</li>
      </ol>

      <h3>Seated Trunk Rotation</h3>
      <p><strong>Why:</strong> Isolates thoracic rotation without hip compensation</p>
      <ol>
        <li>Sit on bench or chair, club across shoulders</li>
        <li>Rotate right as far as possible, keeping hips still</li>
        <li>Hold 2 seconds</li>
        <li>Rotate left</li>
        <li>10 each direction</li>
      </ol>

      <h2>Core Stability</h2>

      <h3>Pallof Press</h3>
      <p><strong>Why:</strong> Anti-rotation strength translates directly to swing control</p>
      <ol>
        <li>Stand perpendicular to cable or band</li>
        <li>Hold at chest, resist rotation</li>
        <li>Press hands straight out</li>
        <li>Hold 2 seconds, return to chest</li>
        <li>10-12 each side</li>
      </ol>

      <h3>Dead Bug</h3>
      <p><strong>Why:</strong> Core stability with opposite arm/leg coordination</p>
      <ol>
        <li>Lie on back, arms up, knees bent 90°</li>
        <li>Lower opposite arm and leg toward floor</li>
        <li>Keep lower back pressed to floor</li>
        <li>Return, switch sides</li>
        <li>10 each side</li>
      </ol>

      <h3>Bird Dog</h3>
      <p><strong>Why:</strong> Anti-rotation and extension control</p>
      <ol>
        <li>Hands and knees position</li>
        <li>Extend opposite arm and leg</li>
        <li>Keep hips level—no rotation</li>
        <li>Hold 3 seconds</li>
        <li>10 each side</li>
      </ol>

      <h3>Side Plank</h3>
      <p><strong>Why:</strong> Lateral stability for maintaining posture through swing</p>
      <ol>
        <li>Forearm on ground, feet stacked</li>
        <li>Lift hips, body forms straight line</li>
        <li>Hold 20-45 seconds each side</li>
      </ol>

      <h2>Power Exercises</h2>

      <h3>Medicine Ball Rotational Throw</h3>
      <p><strong>Why:</strong> Develops rotational power that adds yards</p>
      <ol>
        <li>Stand perpendicular to wall</li>
        <li>Ball at hip away from wall</li>
        <li>Rotate and throw forcefully at wall</li>
        <li>Power from hips, not just arms</li>
        <li>8-10 throws each side</li>
      </ol>

      <h3>Cable/Band Woodchop</h3>
      <p><strong>Why:</strong> Controlled rotational strength</p>
      <ol>
        <li>High-to-low: Start high, chop diagonally down</li>
        <li>Low-to-high: Start low, lift diagonally up</li>
        <li>Rotate through hips and core</li>
        <li>10-12 each direction each side</li>
      </ol>

      <h3>Lateral Bound</h3>
      <p><strong>Why:</strong> Explosive lateral power for weight transfer</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Jump laterally, land on opposite leg</li>
        <li>Stick landing, control balance</li>
        <li>Jump back</li>
        <li>8-10 each direction</li>
      </ol>

      <h2>Strength Exercises</h2>

      <h3>Romanian Deadlift</h3>
      <p><strong>Why:</strong> Posterior chain strength for power and posture</p>
      <ol>
        <li>Stand with dumbbells or barbell</li>
        <li>Hinge at hips, push butt back</li>
        <li>Lower weight along legs</li>
        <li>Feel hamstring stretch</li>
        <li>Drive hips forward to stand</li>
        <li>10-12 repetitions</li>
      </ol>

      <h3>Single-Leg Romanian Deadlift</h3>
      <p><strong>Why:</strong> Balance + posterior chain, mimics finish position</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Hinge forward, back leg extends behind</li>
        <li>Keep hips square</li>
        <li>Return to standing</li>
        <li>8-10 each leg</li>
      </ol>

      <h3>Goblet Squat</h3>
      <p><strong>Why:</strong> Lower body strength and hip mobility</p>
      <ol>
        <li>Hold weight at chest</li>
        <li>Squat deep, elbows inside knees</li>
        <li>Keep chest up</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Split Squat</h3>
      <p><strong>Why:</strong> Single-leg strength and hip flexor length</p>
      <ol>
        <li>Staggered stance, rear foot elevated (optional)</li>
        <li>Lower back knee toward floor</li>
        <li>Drive through front heel to stand</li>
        <li>10-12 each leg</li>
      </ol>

      <h3>Push-Up</h3>
      <p><strong>Why:</strong> Upper body pushing strength, core stability</p>
      <ol>
        <li>Standard push-up position</li>
        <li>Lower chest to floor</li>
        <li>Push back up</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Rows (Cable, Dumbbell, or Band)</h3>
      <p><strong>Why:</strong> Back strength for posture and shoulder health</p>
      <ol>
        <li>Pull weight toward torso</li>
        <li>Squeeze shoulder blades together</li>
        <li>Control the return</li>
        <li>12-15 repetitions</li>
      </ol>

      <h2>Shoulder Health</h2>

      <h3>External Rotation</h3>
      <p><strong>Why:</strong> Rotator cuff health for repetitive swinging</p>
      <ol>
        <li>Elbow at side, bent 90°</li>
        <li>Band or cable resistance</li>
        <li>Rotate forearm outward</li>
        <li>15-20 repetitions each arm</li>
      </ol>

      <h3>Face Pulls</h3>
      <p><strong>Why:</strong> Rear delts and external rotators</p>
      <ol>
        <li>Pull band or cable toward face</li>
        <li>Externally rotate at end—thumbs point back</li>
        <li>Squeeze between shoulder blades</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Prone Y-T-W</h3>
      <p><strong>Why:</strong> Lower trap and rotator cuff activation</p>
      <ol>
        <li>Lie face down on bench or ball</li>
        <li>Y: Arms overhead in Y shape, thumbs up</li>
        <li>T: Arms out to sides</li>
        <li>W: Elbows bent, squeeze shoulder blades</li>
        <li>10 each position</li>
      </ol>

      <h2>Sample Golf Workout</h2>

      <h3>Pre-Round Warm-Up (10 minutes)</h3>
      <ol>
        <li>Cat-Cow: 10 reps</li>
        <li>World's Greatest Stretch: 5 each side</li>
        <li>Open Book: 10 each side</li>
        <li>90/90 Hip Switches: 10 total</li>
        <li>Trunk Rotation with club: 10 each side</li>
        <li>Practice swings at 50%, 75%, 100%</li>
      </ol>

      <h3>Strength Day (45 minutes, 2-3x/week)</h3>
      <ol>
        <li><strong>Warm-up:</strong> Cat-Cow, World's Greatest Stretch</li>
        <li>Goblet Squat: 3 × 12</li>
        <li>Romanian Deadlift: 3 × 10</li>
        <li>Split Squat: 3 × 10 each</li>
        <li>Push-Up: 3 × 12</li>
        <li>Cable Row: 3 × 12</li>
        <li>Pallof Press: 3 × 10 each</li>
        <li>Face Pulls: 3 × 15</li>
      </ol>

      <h3>Power Day (30 minutes, 1-2x/week)</h3>
      <ol>
        <li><strong>Warm-up:</strong> Mobility circuit</li>
        <li>Medicine Ball Rotational Throw: 3 × 8 each side</li>
        <li>Cable Woodchop (high-to-low): 3 × 10 each</li>
        <li>Lateral Bounds: 3 × 8 each</li>
        <li>Single-Leg RDL: 3 × 8 each</li>
        <li>Dead Bug: 3 × 10 each</li>
      </ol>

      <h3>Mobility Day (20 minutes, daily or as needed)</h3>
      <ol>
        <li>90/90 Hip Stretch: 60 sec each side</li>
        <li>Open Book: 10 each side</li>
        <li>Cat-Cow: 15 reps</li>
        <li>Foam Roll: Thoracic spine, lats, glutes</li>
        <li>Hip Flexor Stretch: 60 sec each side</li>
      </ol>

      <h2>Common Golf Injuries and Prevention</h2>
      <ul>
        <li><strong>Low back pain:</strong> Core stability, hip mobility, proper warm-up</li>
        <li><strong>Golfer's elbow:</strong> Forearm strengthening, eccentric wrist curls</li>
        <li><strong>Shoulder issues:</strong> Rotator cuff work, face pulls, avoid overswinging</li>
        <li><strong>Hip pain:</strong> Hip mobility work, glute strengthening</li>
        <li><strong>Knee pain:</strong> Proper footwork, leg strength, avoid aggressive rotation</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Better golf fitness means longer drives, more consistent shots, and fewer injuries.
        Focus on thoracic and hip mobility, core stability, and rotational power. Warm up
        before every round, and train 2-3 times per week in the off-season. Your scorecard
        will thank you.
      </p>
    </BlogPost>
  )
}
