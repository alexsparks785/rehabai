import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Shin Splints Exercises: Heal and Prevent Medial Tibial Stress Syndrome',
  description: 'Exercises for shin splints (MTSS) to reduce pain, strengthen the lower leg, and prevent recurrence. Calf stretches, tibialis strengthening, and return-to-running protocol.',
  keywords: ['shin splints exercises', 'MTSS exercises', 'medial tibial stress syndrome exercises', 'shin pain exercises', 'tibialis exercises'],
}

export default function ShinSplintsExercises() {
  return (
    <BlogPost
      title="Shin Splints Exercises: Heal and Prevent Medial Tibial Stress Syndrome"
      publishDate="2026-03-20"
      readTime="10 min read"
      author="FoundationalRehab Team"
      heroAlt="Person doing lower leg strengthening exercises for shin splints"
    >
      <p className="lead">
        Shin splints (medial tibial stress syndrome) cause pain along the inner shin bone, typically from running or other high-impact activities. It's one of the most common overuse injuries in runners and athletes. The right exercises can help you recover, strengthen the lower leg, and prevent the pain from returning.
      </p>

      <h2>Understanding Shin Splints</h2>
      <p>
        Shin splints involve irritation where muscles and connective tissue attach to the tibia (shin bone). The condition develops from:
      </p>
      <ul>
        <li>Overuse—too much, too soon</li>
        <li>Running on hard surfaces</li>
        <li>Worn-out or improper footwear</li>
        <li>Flat feet or overpronation</li>
        <li>Weak calf or shin muscles</li>
        <li>Tight calf muscles</li>
      </ul>
      <p>
        Symptoms include:
      </p>
      <ul>
        <li>Pain along the inner lower leg (shin bone)</li>
        <li>Tenderness along a section of the shin (usually 4+ inches)</li>
        <li>Pain that starts during exercise and may continue after</li>
        <li>Mild swelling in the area</li>
        <li>Pain worse at the beginning of runs, may warm up</li>
      </ul>
      <p>
        <strong>Important:</strong> If pain is localized to one small spot and worsens despite rest, see a doctor to rule out stress fracture.
      </p>

      <h2>Initial Management</h2>
      <ul>
        <li><strong>Reduce or stop aggravating activity:</strong> Running, jumping, high-impact work</li>
        <li><strong>Ice:</strong> 15-20 minutes after activity</li>
        <li><strong>Cross-train:</strong> Swimming, cycling, pool running maintain fitness without impact</li>
        <li><strong>Don't push through pain:</strong> It will only worsen</li>
      </ul>

      <h2>Stretching Exercises</h2>
      <p>
        Tight calf muscles increase stress on the shin. Stretch regularly.
      </p>

      <h3>1. Standing Calf Stretch (Gastrocnemius)</h3>
      <ul>
        <li>Face a wall, hands at shoulder height</li>
        <li>Step back with affected leg, keep it straight, heel on floor</li>
        <li>Lean into wall until you feel stretch in upper calf</li>
        <li>Hold 30-45 seconds</li>
        <li>Repeat 3 times, several times daily</li>
      </ul>

      <h3>2. Soleus Stretch (Bent Knee)</h3>
      <ul>
        <li>Same position as above</li>
        <li>Bend the back knee slightly while keeping heel down</li>
        <li>Feel stretch lower in calf, closer to ankle</li>
        <li>Hold 30-45 seconds</li>
        <li>Repeat 3 times</li>
      </ul>

      <h3>3. Step Stretch</h3>
      <ul>
        <li>Stand on a step with heels hanging off</li>
        <li>Let one heel drop below step level</li>
        <li>Hold 30-45 seconds</li>
        <li>Switch legs</li>
        <li>Don't bounce</li>
      </ul>

      <h3>4. Kneeling Shin Stretch</h3>
      <ul>
        <li>Kneel with tops of feet flat on floor</li>
        <li>Sit back toward heels</li>
        <li>Feel stretch along front of shins and ankles</li>
        <li>Hold 30 seconds</li>
      </ul>

      <h2>Strengthening Exercises</h2>
      <p>
        Strong lower leg muscles reduce stress on the tibia.
      </p>

      <h3>1. Toe Raises (Tibialis Anterior)</h3>
      <ul>
        <li>Stand with back against wall</li>
        <li>Lift your toes and forefeet off the ground while keeping heels down</li>
        <li>Hold 2-3 seconds at top</li>
        <li>Lower slowly</li>
        <li>3 sets of 15-20 reps</li>
      </ul>

      <h3>2. Heel Raises</h3>
      <ul>
        <li>Stand with feet hip-width apart</li>
        <li>Rise up onto balls of feet</li>
        <li>Hold 2-3 seconds at top</li>
        <li>Lower slowly (3-4 seconds)</li>
        <li>3 sets of 15-20 reps</li>
        <li>Progress to single-leg heel raises</li>
      </ul>

      <h3>3. Eccentric Heel Drops</h3>
      <ul>
        <li>Stand on a step, heels hanging off edge</li>
        <li>Rise up on both feet</li>
        <li>Shift weight to one foot</li>
        <li>Lower heel slowly below step level (5 seconds)</li>
        <li>Use both feet to rise back up</li>
        <li>3 sets of 10-15 reps each leg</li>
      </ul>

      <h3>4. Resisted Dorsiflexion</h3>
      <ul>
        <li>Sit with legs extended, band around forefoot</li>
        <li>Anchor band in front of you</li>
        <li>Pull toes toward shin against resistance</li>
        <li>Return slowly</li>
        <li>3 sets of 15 reps</li>
      </ul>

      <h3>5. Resisted Plantarflexion</h3>
      <ul>
        <li>Band around forefoot, anchored behind you</li>
        <li>Point foot down against resistance</li>
        <li>Return slowly</li>
        <li>3 sets of 15 reps</li>
      </ul>

      <h3>6. Towel Scrunches</h3>
      <ul>
        <li>Sit with foot on a towel on the floor</li>
        <li>Use toes to scrunch towel toward you</li>
        <li>Repeat until towel is fully bunched</li>
        <li>2-3 times each foot</li>
      </ul>

      <h3>7. Single-Leg Balance</h3>
      <ul>
        <li>Stand on one foot</li>
        <li>Hold 30-60 seconds</li>
        <li>Progress to eyes closed, unstable surface</li>
        <li>Builds ankle and lower leg stability</li>
      </ul>

      <h2>Hip Strengthening</h2>
      <p>
        Weak hips can affect running mechanics and contribute to shin splints.
      </p>

      <h3>1. Clamshells</h3>
      <ul>
        <li>Lie on side, hips and knees bent</li>
        <li>Lift top knee, keeping feet together</li>
        <li>15-20 reps each side</li>
      </ul>

      <h3>2. Glute Bridge</h3>
      <ul>
        <li>Lie on back, knees bent</li>
        <li>Lift hips toward ceiling</li>
        <li>Hold 5 seconds</li>
        <li>15-20 reps</li>
      </ul>

      <h3>3. Side-Lying Hip Abduction</h3>
      <ul>
        <li>Lie on side, lift top leg toward ceiling</li>
        <li>Keep hip from rotating forward</li>
        <li>15-20 reps each side</li>
      </ul>

      <h2>Return to Running</h2>
      <p>
        Only return when:
      </p>
      <ul>
        <li>Pain-free with daily activities</li>
        <li>No tenderness when pressing on shin</li>
        <li>Can hop on affected leg without pain</li>
      </ul>

      <h3>Sample Return Protocol</h3>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Run/walk: 1 min run / 2 min walk × 10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Run/walk: 2 min run / 1 min walk × 8</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Run/walk: 3 min run / 1 min walk × 6</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Continuous easy running 15-20 min</td>
          </tr>
          <tr>
            <td>5+</td>
            <td>Increase duration 10% per week</td>
          </tr>
        </tbody>
      </table>
      <p>
        If pain returns, back off and reassess. Don't push through it.
      </p>

      <h2>Prevention</h2>
      <ul>
        <li><strong>Increase mileage gradually:</strong> No more than 10% per week</li>
        <li><strong>Proper footwear:</strong> Replace running shoes every 300-500 miles</li>
        <li><strong>Running surface:</strong> Vary surfaces; avoid always running on concrete</li>
        <li><strong>Maintain flexibility:</strong> Stretch calves regularly</li>
        <li><strong>Strengthen lower legs:</strong> Continue exercises even when pain-free</li>
        <li><strong>Address biomechanics:</strong> Consider gait analysis, orthotics if overpronating</li>
      </ul>

      <h2>When to Seek Help</h2>
      <p>
        See a healthcare provider if:
      </p>
      <ul>
        <li>Pain is severe or localized to one small spot (stress fracture concern)</li>
        <li>Pain doesn't improve after 2-3 weeks of rest and exercises</li>
        <li>Pain worsens despite treatment</li>
        <li>You have swelling, redness, or warmth</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Shin splints result from overuse and muscle/tendon stress on the tibia</li>
        <li>Rest from aggravating activities is essential initially</li>
        <li>Stretch tight calves and strengthen the tibialis anterior</li>
        <li>Hip strength affects running mechanics—include hip exercises</li>
        <li>Return to running gradually with a walk/run protocol</li>
        <li>Prevent recurrence with proper progression, footwear, and ongoing strengthening</li>
        <li>Localized pain that worsens may be stress fracture—get evaluated</li>
      </ul>

      <p>
        Shin splints are frustrating, but they're very treatable. Give your legs the rest they need, strengthen the muscles that support the tibia, and return to running gradually. With the right approach, you'll be back on the road or trail—and stronger than before.
      </p>
    </BlogPost>
  )
}
