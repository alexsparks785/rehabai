import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Soccer Players: Build Speed, Power, and Endurance | FoundationalRehab',
  description: 'Soccer-specific exercises to improve speed, agility, endurance, and injury prevention. Complete training guide for soccer players.',
  keywords: ['soccer exercises', 'soccer workout', 'soccer training', 'soccer fitness', 'soccer injury prevention'],
}

export default function ExercisesForSoccerPlayers() {
  return (
    <BlogPost
      title="Exercises for Soccer Players: Build Speed, Power, and Endurance"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="10 min read"
      category="Sports Performance"
      tags={['soccer', 'sports', 'agility', 'endurance', 'injury prevention']}
    >
      <p className="lead">
        Soccer requires a unique combination of endurance, speed, agility, and power. A
        90-minute match involves 10-13km of running with hundreds of direction changes,
        sprints, and explosive movements. Train accordingly.
      </p>

      <h2>Physical Demands of Soccer</h2>
      <ul>
        <li><strong>Aerobic endurance:</strong> Sustaining effort for 90+ minutes</li>
        <li><strong>Repeated sprint ability:</strong> Recover between high-intensity bursts</li>
        <li><strong>Change of direction:</strong> Cutting, turning, lateral movement</li>
        <li><strong>Single-leg power:</strong> Kicking, jumping, landing</li>
        <li><strong>Core stability:</strong> Balance during tackles and aerial duels</li>
        <li><strong>Hip mobility:</strong> Kicking range and injury prevention</li>
      </ul>

      <h2>Injury Prevention (FIFA 11+)</h2>
      <p>
        The FIFA 11+ warm-up program reduces soccer injuries by 30-50%. Do this before
        training and games.
      </p>

      <h3>Part 1: Running (8 minutes)</h3>
      <ol>
        <li>Straight running</li>
        <li>Hip out (open hip while running)</li>
        <li>Hip in (close hip while running)</li>
        <li>Circling partner</li>
        <li>Shoulder contact with partner</li>
        <li>Quick forward and backward sprints</li>
      </ol>

      <h3>Part 2: Strength/Plyometrics (10 minutes)</h3>
      <ol>
        <li>Plank variations (3 × 20-30 sec)</li>
        <li>Side plank (3 × 20-30 sec each)</li>
        <li>Nordic hamstring curls (3-5 reps)</li>
        <li>Single-leg balance (30 sec each)</li>
        <li>Squats (10-15 reps)</li>
        <li>Jumping/landing practice (10 reps)</li>
      </ol>

      <h3>Part 3: Running (2 minutes)</h3>
      <ol>
        <li>Across the pitch with direction changes</li>
        <li>Bounding/high knees</li>
        <li>Plant and cut</li>
      </ol>

      <h2>Speed and Agility</h2>

      <h3>Ladder Drills</h3>
      <p><strong>Why:</strong> Foot speed, coordination, quick ground contact</p>
      <ul>
        <li>Two feet in each square</li>
        <li>Lateral shuffle through ladder</li>
        <li>In-out-in-out pattern</li>
        <li>Icky shuffle</li>
        <li>2-3 sets each drill</li>
      </ul>

      <h3>Cone Drills</h3>
      <p><strong>Why:</strong> Change of direction, deceleration</p>

      <h4>5-10-5 (Pro Agility)</h4>
      <ol>
        <li>Start at middle cone</li>
        <li>Sprint 5 yards to one side</li>
        <li>Touch and sprint 10 yards to other side</li>
        <li>Touch and sprint 5 yards back through start</li>
        <li>4-6 reps</li>
      </ol>

      <h4>T-Drill</h4>
      <ol>
        <li>Sprint forward to center cone</li>
        <li>Shuffle left, touch cone</li>
        <li>Shuffle right past center to far cone, touch</li>
        <li>Shuffle back to center</li>
        <li>Backpedal to start</li>
        <li>4-6 reps</li>
      </ol>

      <h4>Box Drill</h4>
      <ol>
        <li>Set up 10-yard square with cones</li>
        <li>Sprint forward, shuffle right, backpedal, shuffle left</li>
        <li>Go both directions</li>
        <li>4 reps each direction</li>
      </ol>

      <h3>Sprint Training</h3>
      <p><strong>Why:</strong> Match sprint demands (most are 10-30m)</p>
      <ul>
        <li>10m sprints × 6-8</li>
        <li>20m sprints × 4-6</li>
        <li>Flying 20s (build-up then sprint 20m) × 4</li>
        <li>Full recovery between reps (walk back)</li>
      </ul>

      <h2>Lower Body Strength</h2>

      <h3>Goblet Squat</h3>
      <p><strong>Why:</strong> Foundational leg strength</p>
      <ol>
        <li>Hold weight at chest</li>
        <li>Squat deep, knees tracking over toes</li>
        <li>Drive through heels</li>
        <li>3 × 10-12</li>
      </ol>

      <h3>Romanian Deadlift</h3>
      <p><strong>Why:</strong> Hamstring strength, injury prevention</p>
      <ol>
        <li>Hinge at hips, slight knee bend</li>
        <li>Lower weight along legs</li>
        <li>Feel hamstring stretch</li>
        <li>Drive hips forward to stand</li>
        <li>3 × 10</li>
      </ol>

      <h3>Single-Leg Squat (Pistol Progression)</h3>
      <p><strong>Why:</strong> Single-leg strength for kicking, balance</p>
      <ol>
        <li>Start with box single-leg squat</li>
        <li>Progress to assisted pistol</li>
        <li>Work toward full pistol</li>
        <li>3 × 6-8 each leg</li>
      </ol>

      <h3>Nordic Hamstring Curl</h3>
      <p><strong>Why:</strong> Proven to reduce hamstring injuries by 50%+</p>
      <ol>
        <li>Kneel, partner holds ankles</li>
        <li>Lower body forward slowly (eccentric)</li>
        <li>Catch yourself with hands</li>
        <li>Push back up, repeat</li>
        <li>3 × 5-8 (progress slowly)</li>
      </ol>

      <h3>Lateral Lunge</h3>
      <p><strong>Why:</strong> Lateral strength, adductor flexibility</p>
      <ol>
        <li>Step wide to one side</li>
        <li>Sit back into that hip</li>
        <li>Push back to center</li>
        <li>3 × 10 each side</li>
      </ol>

      <h2>Power and Plyometrics</h2>

      <h3>Box Jumps</h3>
      <ol>
        <li>Stand facing box</li>
        <li>Jump onto box, land softly</li>
        <li>Step down, reset</li>
        <li>3 × 6-8</li>
      </ol>

      <h3>Broad Jumps</h3>
      <ol>
        <li>Jump forward for maximum distance</li>
        <li>Land softly, absorb with legs</li>
        <li>3 × 5</li>
      </ol>

      <h3>Single-Leg Hops</h3>
      <ol>
        <li>Hop forward on one leg</li>
        <li>Focus on controlled landing</li>
        <li>3 × 5 each leg</li>
      </ol>

      <h3>Lateral Bounds</h3>
      <ol>
        <li>Jump sideways from one leg to other</li>
        <li>Stick each landing briefly</li>
        <li>3 × 8 each direction</li>
      </ol>

      <h2>Core Stability</h2>

      <h3>Plank Variations</h3>
      <ol>
        <li>Standard plank: 3 × 30-45 sec</li>
        <li>Side plank: 3 × 20-30 sec each</li>
        <li>Plank with shoulder tap: 3 × 10 each</li>
      </ol>

      <h3>Dead Bug</h3>
      <ol>
        <li>Lie on back, arms up, knees bent 90°</li>
        <li>Lower opposite arm and leg</li>
        <li>Keep lower back pressed to floor</li>
        <li>3 × 10 each side</li>
      </ol>

      <h3>Pallof Press</h3>
      <ol>
        <li>Cable or band at chest height</li>
        <li>Stand perpendicular, press hands out</li>
        <li>Resist rotation</li>
        <li>3 × 10 each side</li>
      </ol>

      <h3>Copenhagen Plank</h3>
      <p><strong>Why:</strong> Adductor strength, groin injury prevention</p>
      <ol>
        <li>Side plank with top leg on bench</li>
        <li>Hold body straight</li>
        <li>3 × 15-20 sec each side</li>
      </ol>

      <h2>Conditioning</h2>

      <h3>Interval Running</h3>
      <p><strong>Mimics match demands.</strong></p>
      <ul>
        <li>30 sec sprint, 30 sec jog × 10-15</li>
        <li>Or: 200m hard, 200m easy × 6-10</li>
        <li>Progress volume over weeks</li>
      </ul>

      <h3>Small-Sided Games</h3>
      <ul>
        <li>Most soccer-specific conditioning</li>
        <li>3v3, 4v4, 5v5 in small areas</li>
        <li>4-6 minute games with short rest</li>
        <li>Combines technical and physical work</li>
      </ul>

      <h2>Sample Weekly Schedule (In-Season)</h2>
      <ul>
        <li><strong>Monday:</strong> Recovery (foam roll, light stretching)</li>
        <li><strong>Tuesday:</strong> Team training + strength (light, 20 min)</li>
        <li><strong>Wednesday:</strong> Team training</li>
        <li><strong>Thursday:</strong> Speed/agility work + strength (moderate)</li>
        <li><strong>Friday:</strong> Light team training or rest</li>
        <li><strong>Saturday:</strong> MATCH DAY</li>
        <li><strong>Sunday:</strong> Recovery or light activity</li>
      </ul>

      <h2>Sample Weekly Schedule (Off-Season)</h2>
      <ul>
        <li><strong>Monday:</strong> Strength - Lower body (45 min)</li>
        <li><strong>Tuesday:</strong> Speed/agility + conditioning (45 min)</li>
        <li><strong>Wednesday:</strong> Strength - Upper body + core (40 min)</li>
        <li><strong>Thursday:</strong> Technical work + light conditioning</li>
        <li><strong>Friday:</strong> Strength - Full body (40 min)</li>
        <li><strong>Saturday:</strong> Pickup game or sport-specific conditioning</li>
        <li><strong>Sunday:</strong> Rest</li>
      </ul>

      <h2>Common Soccer Injuries and Prevention</h2>
      <ul>
        <li><strong>Hamstring strains:</strong> Nordic curls, RDLs, adequate warm-up</li>
        <li><strong>Groin strains:</strong> Copenhagen planks, adductor strengthening</li>
        <li><strong>ACL tears:</strong> Landing mechanics, single-leg strength, FIFA 11+</li>
        <li><strong>Ankle sprains:</strong> Balance training, ankle strengthening</li>
        <li><strong>Hip flexor strains:</strong> Mobility work, gradual kicking progression</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Soccer fitness requires training multiple energy systems and movement patterns. Use
        the FIFA 11+ warm-up before every session, prioritize hamstring and groin strength
        for injury prevention, and include agility work that mimics game demands. In-season,
        maintain fitness without overtraining. Off-season, build your foundation.
      </p>
    </BlogPost>
  )
}
