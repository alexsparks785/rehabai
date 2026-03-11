import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Tennis Players: Improve Performance and Prevent Injury | FoundationalRehab',
  description: 'Tennis-specific exercises to improve power, speed, and endurance while preventing common injuries. Complete training guide for tennis players.',
  keywords: ['tennis exercises', 'tennis workout', 'tennis training', 'tennis fitness', 'tennis injury prevention'],
}

export default function ExercisesForTennisPlayers() {
  return (
    <BlogPost
      title="Exercises for Tennis Players: Improve Performance and Prevent Injury"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Sports Performance"
      tags={['tennis', 'sports', 'rotational power', 'agility', 'injury prevention']}
    >
      <p className="lead">
        Tennis demands explosive power, rapid direction changes, and hundreds of rotational
        movements per match. Training should address these specific demands while protecting
        vulnerable areas like shoulders, elbows, and back.
      </p>

      <h2>What Tennis Demands</h2>
      <ul>
        <li><strong>Rotational power:</strong> Groundstrokes and serves generate power through rotation</li>
        <li><strong>Lateral agility:</strong> Constant side-to-side movement</li>
        <li><strong>Shoulder stability:</strong> Withstand hundreds of high-speed impacts</li>
        <li><strong>Core strength:</strong> Transfer power from legs to racket</li>
        <li><strong>Single-leg stability:</strong> Balance during shots and recovery</li>
        <li><strong>Grip and forearm endurance:</strong> Maintain control throughout match</li>
        <li><strong>Cardiovascular endurance:</strong> Recover between points</li>
      </ul>

      <h2>Rotational Power</h2>

      <h3>Medicine Ball Rotational Throw</h3>
      <p><strong>Why:</strong> Directly mimics groundstroke power production</p>
      <ol>
        <li>Stand perpendicular to wall</li>
        <li>Ball at hip away from wall</li>
        <li>Rotate and throw explosively at wall</li>
        <li>Power from hips, not just arms</li>
        <li>8-10 throws each side</li>
      </ol>
      <p><strong>Key cue:</strong> "Hips first, then hands"</p>

      <h3>Cable Woodchop</h3>
      <p><strong>Why:</strong> Controlled rotational strength</p>
      <ol>
        <li>High-to-low: Mimics forehand/backhand finish</li>
        <li>Low-to-high: Mimics serve motion</li>
        <li>Rotate through hips and core</li>
        <li>10-12 each direction, each side</li>
      </ol>

      <h3>Rotational Slam</h3>
      <p><strong>Why:</strong> Explosive diagonal power</p>
      <ol>
        <li>Medicine ball overhead</li>
        <li>Slam diagonally toward opposite foot</li>
        <li>Full hip and torso rotation</li>
        <li>8-10 each direction</li>
      </ol>

      <h3>Pallof Press with Rotation</h3>
      <p><strong>Why:</strong> Controlled rotation under tension</p>
      <ol>
        <li>Cable at chest height</li>
        <li>Press out, then rotate away from anchor</li>
        <li>Control return</li>
        <li>10 each side</li>
      </ol>

      <h2>Lateral Movement and Agility</h2>

      <h3>Lateral Bounds</h3>
      <p><strong>Why:</strong> Explosive lateral power for court coverage</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Jump laterally, land on opposite leg</li>
        <li>Stick landing, control balance</li>
        <li>Immediately jump back</li>
        <li>8-10 each direction</li>
      </ol>

      <h3>Lateral Shuffle</h3>
      <p><strong>Why:</strong> Court movement pattern</p>
      <ol>
        <li>Athletic stance, low position</li>
        <li>Shuffle quickly to one side</li>
        <li>Stay low, don't bounce</li>
        <li>Change direction on cue</li>
        <li>30 seconds, rest, repeat</li>
      </ol>

      <h3>Split Step Jumps</h3>
      <p><strong>Why:</strong> Tennis-specific ready position</p>
      <ol>
        <li>Stand tall, feet together</li>
        <li>Jump and land in wide split step</li>
        <li>Immediately push off in one direction</li>
        <li>Return to start, repeat</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Carioca (Grapevine)</h3>
      <p><strong>Why:</strong> Lateral movement with rotation</p>
      <ol>
        <li>Move laterally crossing feet in front and behind</li>
        <li>Stay low, rotate hips</li>
        <li>20 yards each direction</li>
      </ol>

      <h2>Shoulder Health</h2>

      <h3>External Rotation (Side-Lying)</h3>
      <p><strong>Why:</strong> Rotator cuff strength and balance</p>
      <ol>
        <li>Lie on non-dominant side</li>
        <li>Top arm bent 90°, elbow at side</li>
        <li>Rotate forearm up toward ceiling</li>
        <li>Lower with control</li>
        <li>15-20 each arm</li>
      </ol>

      <h3>Face Pulls</h3>
      <p><strong>Why:</strong> Rear delts and external rotators</p>
      <ol>
        <li>Cable at face height</li>
        <li>Pull toward face, separate hands</li>
        <li>External rotate at end—thumbs back</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Prone Y-T-W</h3>
      <p><strong>Why:</strong> Lower trap and rotator cuff activation</p>
      <ol>
        <li>Lie face down on bench</li>
        <li>Y: Thumbs up, arms overhead</li>
        <li>T: Arms straight out to sides</li>
        <li>W: Elbows bent, squeeze shoulder blades</li>
        <li>10 each position</li>
      </ol>

      <h3>Shoulder 90/90 Stretch</h3>
      <p><strong>Why:</strong> Maintains internal rotation range</p>
      <ol>
        <li>Arm at 90° abduction, elbow bent 90°</li>
        <li>Doorway or corner stretch</li>
        <li>Gentle stretch into internal rotation</li>
        <li>30 seconds each side</li>
      </ol>

      <h2>Core Stability</h2>

      <h3>Anti-Rotation Press (Pallof)</h3>
      <p><strong>Why:</strong> Core stability during rotation</p>
      <ol>
        <li>Cable at chest height</li>
        <li>Stand perpendicular, resist rotation</li>
        <li>Press hands straight out</li>
        <li>Hold 2 seconds, return</li>
        <li>10-12 each side</li>
      </ol>

      <h3>Dead Bug</h3>
      <p><strong>Why:</strong> Core stability with contralateral movement</p>
      <ol>
        <li>Lie on back, arms up, knees bent 90°</li>
        <li>Lower opposite arm and leg</li>
        <li>Keep lower back pressed to floor</li>
        <li>Return, switch sides</li>
        <li>10-12 each side</li>
      </ol>

      <h3>Side Plank</h3>
      <p><strong>Why:</strong> Lateral core stability</p>
      <ol>
        <li>Forearm on floor, feet stacked</li>
        <li>Lift hips, body straight</li>
        <li>Hold 20-45 seconds each side</li>
      </ol>

      <h2>Lower Body Strength</h2>

      <h3>Goblet Squat</h3>
      <p><strong>Why:</strong> Leg strength foundation</p>
      <ol>
        <li>Hold weight at chest</li>
        <li>Squat deep, knees out</li>
        <li>Drive through heels</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Single-Leg Romanian Deadlift</h3>
      <p><strong>Why:</strong> Balance and posterior chain</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Hinge forward, back leg extends</li>
        <li>Keep hips square</li>
        <li>Return to standing</li>
        <li>8-10 each leg</li>
      </ol>

      <h3>Lateral Lunge</h3>
      <p><strong>Why:</strong> Lateral strength and hip mobility</p>
      <ol>
        <li>Step wide to one side</li>
        <li>Sit back into that hip</li>
        <li>Push back to center</li>
        <li>10 each side</li>
      </ol>

      <h3>Calf Raises</h3>
      <p><strong>Why:</strong> Push-off power and injury prevention</p>
      <ol>
        <li>Rise onto toes, full range</li>
        <li>Lower slowly</li>
        <li>20-25 repetitions</li>
        <li>Single-leg for advanced</li>
      </ol>

      <h2>Forearm and Grip</h2>

      <h3>Wrist Curls/Reverse Wrist Curls</h3>
      <p><strong>Why:</strong> Forearm strength for grip and injury prevention</p>
      <ol>
        <li>Forearm on bench, wrist over edge</li>
        <li>Curl weight up and down</li>
        <li>Both palm-up and palm-down</li>
        <li>15-20 repetitions each</li>
      </ol>

      <h3>Farmer's Walk</h3>
      <p><strong>Why:</strong> Grip endurance</p>
      <ol>
        <li>Hold heavy dumbbells at sides</li>
        <li>Walk with tall posture</li>
        <li>30-60 seconds</li>
      </ol>

      <h2>Sample Tennis Workouts</h2>

      <h3>Pre-Match Warm-Up (10-15 minutes)</h3>
      <ol>
        <li>Jogging: 2-3 minutes</li>
        <li>Lateral shuffle: 30 seconds each direction</li>
        <li>Carioca: 20 yards each direction</li>
        <li>Arm circles: 15 each direction</li>
        <li>Shoulder stretch: 20 seconds each</li>
        <li>Split step jumps: 10 reps</li>
        <li>Trunk rotations: 10 each side</li>
        <li>Shadow swings: 10 forehand, 10 backhand</li>
      </ol>

      <h3>Strength Day (45 minutes, 2x/week)</h3>
      <ol>
        <li><strong>Warm-up:</strong> 5 min jog + dynamic stretches</li>
        <li>Goblet Squat: 3 × 12</li>
        <li>Single-Leg RDL: 3 × 10 each</li>
        <li>Lateral Lunge: 3 × 10 each</li>
        <li>Push-Up: 3 × 12</li>
        <li>Dumbbell Row: 3 × 10 each</li>
        <li>Face Pulls: 3 × 15</li>
        <li>Pallof Press: 3 × 10 each</li>
      </ol>

      <h3>Power Day (30 minutes, 1x/week)</h3>
      <ol>
        <li><strong>Warm-up:</strong> Dynamic movement</li>
        <li>Medicine Ball Rotational Throw: 3 × 8 each side</li>
        <li>Lateral Bounds: 3 × 8 each</li>
        <li>Rotational Slam: 3 × 8 each side</li>
        <li>Split Step Jumps: 3 × 10</li>
        <li>Cable Woodchop: 3 × 10 each</li>
      </ol>

      <h3>Shoulder Prehab (10 minutes, 3x/week)</h3>
      <ol>
        <li>External Rotation: 2 × 15 each</li>
        <li>Prone Y-T-W: 2 × 10 each position</li>
        <li>Face Pulls: 2 × 15</li>
        <li>Shoulder stretch: 30 seconds each position</li>
      </ol>

      <h2>Common Tennis Injuries and Prevention</h2>
      <ul>
        <li><strong>Tennis elbow:</strong> Forearm strengthening, eccentric wrist exercises</li>
        <li><strong>Shoulder issues:</strong> Rotator cuff work, balanced push/pull training</li>
        <li><strong>Low back pain:</strong> Core stability, hip mobility</li>
        <li><strong>Ankle sprains:</strong> Balance work, calf strength</li>
        <li><strong>Knee issues:</strong> Single-leg strength, landing mechanics</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Tennis fitness requires rotational power, lateral agility, shoulder health, and core
        stability. Train these qualities consistently, prioritize injury prevention work for
        shoulders and forearms, and your game will improve while your injury risk decreases.
        The fittest player often wins the third set.
      </p>
    </BlogPost>
  )
}
