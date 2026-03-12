import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Basketball Players: Build Explosiveness and Prevent Injury | FoundationalRehab',
  description: 'Basketball-specific exercises to improve vertical jump, speed, agility, and injury prevention. Complete training guide for basketball players.',
  keywords: ['basketball exercises', 'basketball workout', 'vertical jump training', 'basketball training', 'basketball injury prevention'],
}

export default function ExercisesForBasketballPlayers() {
  return (
    <BlogPost
      title="Exercises for Basketball Players: Build Explosiveness and Prevent Injury"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="10 min read"
      category="Sports Performance"
      tags={['basketball', 'sports', 'vertical jump', 'explosiveness', 'injury prevention']}
    >
      <p className="lead">
        Basketball demands explosive jumping, rapid acceleration, constant cutting, and the
        ability to absorb repeated landings. Train for these specific demands and you'll
        play better while staying healthy.
      </p>

      <h2>Physical Demands of Basketball</h2>
      <ul>
        <li><strong>Vertical explosiveness:</strong> Jumping for rebounds, blocks, and shots</li>
        <li><strong>Lateral quickness:</strong> Defensive slides, cutting, changing direction</li>
        <li><strong>Repeated sprints:</strong> Fast breaks, transitions</li>
        <li><strong>Landing mechanics:</strong> Absorbing force on every jump</li>
        <li><strong>Upper body strength:</strong> Boxing out, holding position, finishing through contact</li>
        <li><strong>Core stability:</strong> Balance during contact and mid-air adjustments</li>
      </ul>

      <h2>Vertical Jump Training</h2>

      <h3>Box Jumps</h3>
      <p><strong>Why:</strong> Explosive hip extension, landing practice</p>
      <ol>
        <li>Stand facing box (start with 20-24" height)</li>
        <li>Quarter squat, swing arms back</li>
        <li>Explode up, land softly on box</li>
        <li>Step down (don't jump down)</li>
        <li>3 × 5-8 reps</li>
      </ol>
      <p><strong>Progression:</strong> Increase box height, add single-leg landing</p>

      <h3>Depth Jumps</h3>
      <p><strong>Why:</strong> Reactive strength, quick force production</p>
      <ol>
        <li>Stand on 12-18" box</li>
        <li>Step off (don't jump off)</li>
        <li>Land and immediately explode up</li>
        <li>Minimize ground contact time</li>
        <li>3 × 5 reps</li>
      </ol>
      <p><strong>Advanced:</strong> For trained athletes only—high stress on joints</p>

      <h3>Squat Jumps</h3>
      <p><strong>Why:</strong> Pure vertical power</p>
      <ol>
        <li>Quarter squat position</li>
        <li>Explode straight up, reaching overhead</li>
        <li>Land softly, immediately repeat</li>
        <li>3 × 8-10 reps</li>
      </ol>

      <h3>Single-Leg Bounds</h3>
      <p><strong>Why:</strong> Single-leg takeoff power (crucial for layups)</p>
      <ol>
        <li>Drive off one leg</li>
        <li>Land on same leg or opposite</li>
        <li>Focus on height and distance</li>
        <li>3 × 5 each leg</li>
      </ol>

      <h2>Lateral Quickness</h2>

      <h3>Defensive Slides</h3>
      <p><strong>Why:</strong> Game-specific lateral movement</p>
      <ol>
        <li>Athletic stance, low position</li>
        <li>Push off trailing foot, slide lead foot</li>
        <li>Never cross feet, stay low</li>
        <li>3 × 20 seconds each direction</li>
      </ol>

      <h3>Lateral Bounds</h3>
      <p><strong>Why:</strong> Explosive lateral power</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Jump laterally, land on opposite leg</li>
        <li>Stick landing, then immediately bound back</li>
        <li>3 × 8 each direction</li>
      </ol>

      <h3>5-10-5 Drill (Pro Agility)</h3>
      <p><strong>Why:</strong> Change of direction speed</p>
      <ol>
        <li>Start at center cone</li>
        <li>Sprint 5 yards right, touch</li>
        <li>Sprint 10 yards left, touch</li>
        <li>Sprint 5 yards back through center</li>
        <li>4-6 reps, full recovery between</li>
      </ol>

      <h3>Lane Agility Drill</h3>
      <p><strong>Why:</strong> Basketball-specific movement pattern</p>
      <ol>
        <li>Start at baseline corner of key</li>
        <li>Sprint to elbow, defensive slide across</li>
        <li>Backpedal to baseline, slide to start</li>
        <li>3-5 reps each direction</li>
      </ol>

      <h2>Lower Body Strength</h2>

      <h3>Goblet Squat</h3>
      <p><strong>Why:</strong> Foundational strength, mobility</p>
      <ol>
        <li>Hold weight at chest</li>
        <li>Squat deep, chest up</li>
        <li>Drive through heels</li>
        <li>3 × 10-12</li>
      </ol>

      <h3>Bulgarian Split Squat</h3>
      <p><strong>Why:</strong> Single-leg strength (basketball is single-leg sport)</p>
      <ol>
        <li>Back foot on bench</li>
        <li>Lower until back knee nearly touches floor</li>
        <li>Drive through front heel</li>
        <li>3 × 8-10 each leg</li>
      </ol>

      <h3>Romanian Deadlift</h3>
      <p><strong>Why:</strong> Hamstring strength, landing mechanics</p>
      <ol>
        <li>Hinge at hips, slight knee bend</li>
        <li>Lower weight along legs</li>
        <li>Drive hips forward to stand</li>
        <li>3 × 10</li>
      </ol>

      <h3>Hip Thrust</h3>
      <p><strong>Why:</strong> Glute power for jumping</p>
      <ol>
        <li>Upper back on bench</li>
        <li>Drive hips up, squeeze glutes</li>
        <li>Lower with control</li>
        <li>3 × 12-15</li>
      </ol>

      <h3>Calf Raises</h3>
      <p><strong>Why:</strong> Ankle power, Achilles health</p>
      <ol>
        <li>Rise onto toes, full range</li>
        <li>Lower slowly</li>
        <li>3 × 15-20</li>
        <li>Progress to single-leg</li>
      </ol>

      <h2>Core and Stability</h2>

      <h3>Pallof Press</h3>
      <p><strong>Why:</strong> Anti-rotation for contact and aerial balance</p>
      <ol>
        <li>Cable at chest height</li>
        <li>Stand perpendicular, press hands out</li>
        <li>Resist rotation</li>
        <li>3 × 10 each side</li>
      </ol>

      <h3>Dead Bug</h3>
      <p><strong>Why:</strong> Core stability with limb movement</p>
      <ol>
        <li>Lie on back, arms up, knees at 90°</li>
        <li>Lower opposite arm and leg</li>
        <li>Keep lower back pressed to floor</li>
        <li>3 × 10 each side</li>
      </ol>

      <h3>Side Plank</h3>
      <p><strong>Why:</strong> Lateral core stability</p>
      <ol>
        <li>Forearm on floor, feet stacked</li>
        <li>Lift hips, body straight</li>
        <li>Hold 30-45 seconds each side</li>
      </ol>

      <h3>Single-Leg Balance</h3>
      <p><strong>Why:</strong> Ankle stability, proprioception</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Hold 30 seconds, eyes open</li>
        <li>Progress: eyes closed, unstable surface</li>
      </ol>

      <h2>Upper Body</h2>

      <h3>Push-Ups</h3>
      <ol>
        <li>Standard push-up position</li>
        <li>Lower chest to floor</li>
        <li>Push back up</li>
        <li>3 × 15-20</li>
      </ol>

      <h3>Dumbbell Rows</h3>
      <ol>
        <li>One hand on bench, row to hip</li>
        <li>Squeeze shoulder blade</li>
        <li>3 × 10-12 each arm</li>
      </ol>

      <h3>Overhead Press</h3>
      <ol>
        <li>Press dumbbells overhead</li>
        <li>Full lockout</li>
        <li>3 × 10-12</li>
      </ol>

      <h2>Injury Prevention</h2>

      <h3>Ankle Injury Prevention</h3>
      <p>Basketball has highest ankle sprain rate of any sport.</p>
      <ul>
        <li>Single-leg balance: Daily, 30 sec each</li>
        <li>Calf raises: Strong calves protect ankles</li>
        <li>Ankle circles: Mobility work</li>
        <li>Resistance band 4-way ankle: Strengthen all directions</li>
        <li>Consider bracing/taping if history of sprains</li>
      </ul>

      <h3>ACL Injury Prevention</h3>
      <p>Focus on landing mechanics and knee control.</p>
      <ul>
        <li>Land with knees out, not caving in</li>
        <li>Practice soft, controlled landings</li>
        <li>Single-leg squats with knee control</li>
        <li>Hip strengthening (glute med especially)</li>
        <li>Avoid cutting on straight leg</li>
      </ul>

      <h3>Landing Drills</h3>
      <ol>
        <li>Box drops with stick landing: 3 × 5</li>
        <li>180° jumps with controlled landing: 3 × 5</li>
        <li>Single-leg landing from box: 3 × 5 each</li>
        <li>Focus: Soft landing, knee over toe, no valgus</li>
      </ol>

      <h2>Sample Workouts</h2>

      <h3>In-Season Maintenance (30 min, 2x/week)</h3>
      <ol>
        <li>Goblet Squat: 2 × 10</li>
        <li>Romanian Deadlift: 2 × 8</li>
        <li>Bulgarian Split Squat: 2 × 8 each</li>
        <li>Box Jumps: 2 × 5</li>
        <li>Pallof Press: 2 × 8 each side</li>
        <li>Single-Leg Balance: 2 × 30 sec each</li>
      </ol>

      <h3>Off-Season Power (45 min, 3x/week)</h3>

      <p><strong>Day 1: Lower Body Power</strong></p>
      <ol>
        <li>Box Jumps: 4 × 5</li>
        <li>Squat Jumps: 3 × 8</li>
        <li>Goblet Squat: 3 × 10</li>
        <li>Hip Thrust: 3 × 12</li>
        <li>Calf Raises: 3 × 15</li>
      </ol>

      <p><strong>Day 2: Upper Body + Core</strong></p>
      <ol>
        <li>Push-Ups: 3 × 15</li>
        <li>Rows: 3 × 12</li>
        <li>Overhead Press: 3 × 10</li>
        <li>Pallof Press: 3 × 10 each</li>
        <li>Dead Bug: 3 × 10 each</li>
      </ol>

      <p><strong>Day 3: Single-Leg + Agility</strong></p>
      <ol>
        <li>Bulgarian Split Squat: 3 × 10 each</li>
        <li>Single-Leg RDL: 3 × 8 each</li>
        <li>Lateral Bounds: 3 × 8 each</li>
        <li>5-10-5 Drill: 4 reps</li>
        <li>Defensive Slides: 3 × 20 sec each direction</li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>
        Basketball training should prioritize explosive power, single-leg strength, and injury
        prevention. Vertical jump improves with plyometrics and hip strength. Ankle and knee
        injuries decrease with proper landing mechanics and stability work. In-season, maintain
        with 2 short sessions. Off-season, build your foundation with comprehensive training.
      </p>
    </BlogPost>
  )
}
