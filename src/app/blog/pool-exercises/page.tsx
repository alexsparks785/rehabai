import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Pool Exercises: Low-Impact Water Workouts for All Fitness Levels | FoundationalRehab',
  description: 'Discover effective pool exercises for cardio, strength, and rehabilitation. Water workouts are gentle on joints while building real fitness.',
  keywords: ['pool exercises', 'water aerobics', 'aquatic exercise', 'low impact workout', 'swimming pool workout'],
}

export default function PoolExercises() {
  return (
    <BlogPost
      title="Pool Exercises: Low-Impact Water Workouts for All Fitness Levels"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Cardio"
      tags={['cardio', 'low impact', 'aquatic', 'rehabilitation', 'joint-friendly']}
    >
      <p className="lead">
        Water exercise combines the benefits of resistance training and cardio while reducing
        joint stress by up to 90%. Whether you're recovering from injury, managing arthritis,
        or just want a refreshing workout, the pool delivers.
      </p>

      <h2>Why Water Exercise Works</h2>
      <ul>
        <li><strong>Buoyancy:</strong> Reduces body weight stress on joints by 50-90%</li>
        <li><strong>Resistance:</strong> Water is 12x denser than air—every movement builds strength</li>
        <li><strong>Hydrostatic pressure:</strong> Reduces swelling and improves circulation</li>
        <li><strong>Temperature:</strong> Warm water relaxes muscles and reduces pain</li>
        <li><strong>Multi-directional resistance:</strong> Work muscles through all planes of motion</li>
        <li><strong>Cardiovascular:</strong> Heart rate benefits similar to land exercise</li>
      </ul>

      <h2>Who Benefits Most</h2>
      <ul>
        <li>Arthritis and joint pain sufferers</li>
        <li>Post-surgery rehabilitation</li>
        <li>Chronic back pain</li>
        <li>Fibromyalgia</li>
        <li>Pregnancy</li>
        <li>Overweight individuals starting exercise</li>
        <li>Seniors wanting safe exercise</li>
        <li>Athletes cross-training or recovering</li>
      </ul>

      <h2>Pool Depth Guide</h2>
      <ul>
        <li><strong>Shallow (waist-deep):</strong> Walking, basic exercises, beginners</li>
        <li><strong>Chest-deep:</strong> Most exercises, good balance of buoyancy and resistance</li>
        <li><strong>Deep water:</strong> No impact, flotation belt needed, advanced cardio</li>
      </ul>

      <h2>Cardio Exercises</h2>

      <h3>Water Walking</h3>
      <p><strong>Great for:</strong> Beginners, warm-up, arthritis, back pain</p>
      <ol>
        <li>Walk across pool in waist to chest-deep water</li>
        <li>Exaggerate arm swing</li>
        <li>Take longer strides than on land</li>
        <li>Walk forward, backward, and sideways</li>
        <li>5-15 minutes continuous</li>
      </ol>
      <p><strong>Progression:</strong> Add water dumbbells, increase speed, walk on toes</p>

      <h3>Water Jogging</h3>
      <p><strong>Great for:</strong> Cardio without impact</p>
      <ol>
        <li>Jog in place or across pool</li>
        <li>Keep torso upright</li>
        <li>Pump arms vigorously</li>
        <li>Land on balls of feet</li>
        <li>Intervals: 30 seconds fast, 30 seconds easy</li>
      </ol>

      <h3>High Knees</h3>
      <p><strong>Great for:</strong> Hip flexors, cardio intensity</p>
      <ol>
        <li>March in place, driving knees high</li>
        <li>Aim for waist height</li>
        <li>Pump opposite arm with each leg</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Jumping Jacks</h3>
      <p><strong>Great for:</strong> Full body cardio, hip abductors</p>
      <ol>
        <li>Standard jumping jack motion</li>
        <li>Water resistance makes it challenging</li>
        <li>Jump feet wide, arms overhead</li>
        <li>Jump feet together, arms down</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Cross-Country Ski</h3>
      <p><strong>Great for:</strong> Hip flexors, glutes, coordination</p>
      <ol>
        <li>Alternating lunge position</li>
        <li>Switch legs in jumping motion</li>
        <li>Opposite arm swings forward</li>
        <li>Stay upright, don't lean forward</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Aqua Jogging (Deep Water)</h3>
      <p><strong>Great for:</strong> Runners, zero impact cardio</p>
      <ol>
        <li>Wear flotation belt in deep end</li>
        <li>Running motion without touching bottom</li>
        <li>Keep body vertical</li>
        <li>Pump arms naturally</li>
        <li>10-30 minutes continuous</li>
      </ol>

      <h2>Lower Body Exercises</h2>

      <h3>Water Squats</h3>
      <p><strong>Great for:</strong> Quads, glutes, learning squat pattern</p>
      <ol>
        <li>Stand with feet shoulder-width</li>
        <li>Squat down, keeping chest up</li>
        <li>Thighs parallel or below</li>
        <li>Stand by driving through heels</li>
        <li>15-20 repetitions</li>
      </ol>
      <p><strong>Progression:</strong> Jump squats, single-leg squat holds</p>

      <h3>Leg Kicks (Front)</h3>
      <p><strong>Great for:</strong> Hip flexors, quads</p>
      <ol>
        <li>Hold pool edge for support</li>
        <li>Kick one leg forward, keep it straight</li>
        <li>Control return</li>
        <li>15-20 each leg</li>
      </ol>

      <h3>Leg Kicks (Side)</h3>
      <p><strong>Great for:</strong> Hip abductors, glute med</p>
      <ol>
        <li>Hold pool edge, stand sideways</li>
        <li>Kick outside leg out to side</li>
        <li>Keep torso upright—no leaning</li>
        <li>15-20 each leg</li>
      </ol>

      <h3>Leg Kicks (Back)</h3>
      <p><strong>Great for:</strong> Glutes, hip extensors</p>
      <ol>
        <li>Hold pool edge, face the wall</li>
        <li>Kick leg straight back</li>
        <li>Squeeze glute at top</li>
        <li>Don't arch lower back excessively</li>
        <li>15-20 each leg</li>
      </ol>

      <h3>Calf Raises</h3>
      <p><strong>Great for:</strong> Calves, ankle stability</p>
      <ol>
        <li>Stand in shallow water</li>
        <li>Rise onto toes</li>
        <li>Lower with control</li>
        <li>20-30 repetitions</li>
      </ol>

      <h3>Lunge Walk</h3>
      <p><strong>Great for:</strong> Quads, glutes, balance</p>
      <ol>
        <li>Walk across pool in lunges</li>
        <li>Step forward, lower back knee</li>
        <li>Push through front heel to next lunge</li>
        <li>Pool length and back</li>
      </ol>

      <h2>Upper Body Exercises</h2>

      <h3>Arm Circles</h3>
      <p><strong>Great for:</strong> Shoulders, warm-up</p>
      <ol>
        <li>Arms extended to sides, under water</li>
        <li>Small circles forward, 20 seconds</li>
        <li>Small circles backward, 20 seconds</li>
        <li>Large circles both directions</li>
      </ol>

      <h3>Chest Press</h3>
      <p><strong>Great for:</strong> Chest, shoulders, triceps</p>
      <ol>
        <li>Stand with arms in front, palms facing out</li>
        <li>Push arms forward against water</li>
        <li>Bring arms back to starting position</li>
        <li>15-20 repetitions</li>
      </ol>
      <p><strong>Progression:</strong> Use water dumbbells or webbed gloves</p>

      <h3>Arm Pulls</h3>
      <p><strong>Great for:</strong> Back, biceps</p>
      <ol>
        <li>Arms extended forward, palms facing you</li>
        <li>Pull arms back, bending elbows</li>
        <li>Squeeze shoulder blades together</li>
        <li>Return with control</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Bicep Curls</h3>
      <p><strong>Great for:</strong> Biceps</p>
      <ol>
        <li>Arms at sides, palms up</li>
        <li>Curl hands toward shoulders</li>
        <li>Water provides resistance both directions</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Tricep Pushdowns</h3>
      <p><strong>Great for:</strong> Triceps</p>
      <ol>
        <li>Elbows at sides, bent 90°</li>
        <li>Push hands down and back</li>
        <li>Straighten arms against water resistance</li>
        <li>Return with control</li>
        <li>15-20 repetitions</li>
      </ol>

      <h2>Core Exercises</h2>

      <h3>Standing Crunches</h3>
      <p><strong>Great for:</strong> Abs without lying down</p>
      <ol>
        <li>Stand with feet wide, hands behind head</li>
        <li>Lift one knee while crunching down</li>
        <li>Elbow meets opposite knee</li>
        <li>Return, switch sides</li>
        <li>20 total (10 each side)</li>
      </ol>

      <h3>Flutter Kicks (Holding Edge)</h3>
      <p><strong>Great for:</strong> Lower abs, hip flexors</p>
      <ol>
        <li>Hold pool edge, body horizontal</li>
        <li>Flutter kick legs up and down</li>
        <li>Keep kicks small and fast</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Bicycle Kicks</h3>
      <p><strong>Great for:</strong> Abs, hip flexors</p>
      <ol>
        <li>Back against pool wall, arms on edge</li>
        <li>Lift legs, cycling motion</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Noodle Plank</h3>
      <p><strong>Great for:</strong> Core stability</p>
      <ol>
        <li>Hold pool noodle under arms</li>
        <li>Float in plank position</li>
        <li>Keep body straight, core tight</li>
        <li>Hold 20-60 seconds</li>
      </ol>

      <h2>Sample Pool Workouts</h2>

      <h3>Beginner Aqua Fitness (30 minutes)</h3>
      <ol>
        <li><strong>Warm-up (5 min):</strong> Easy water walking</li>
        <li><strong>Cardio (10 min):</strong> Alternate 1 min jogging, 1 min walking × 5</li>
        <li><strong>Lower body (5 min):</strong> Squats, leg kicks (front, side, back)</li>
        <li><strong>Upper body (5 min):</strong> Arm circles, chest press, arm pulls</li>
        <li><strong>Cool-down (5 min):</strong> Easy walking, gentle stretching</li>
      </ol>

      <h3>Intermediate Cardio Blast (30 minutes)</h3>
      <ol>
        <li><strong>Warm-up (5 min):</strong> Brisk walking, arm circles</li>
        <li><strong>Intervals (20 min):</strong></li>
        <li>— 1 min high knees</li>
        <li>— 1 min jumping jacks</li>
        <li>— 1 min cross-country ski</li>
        <li>— 1 min water jogging</li>
        <li>— 1 min recovery walk</li>
        <li>— Repeat 4 times</li>
        <li><strong>Cool-down (5 min):</strong> Easy walking, stretching</li>
      </ol>

      <h3>Joint-Friendly Full Body (45 minutes)</h3>
      <ol>
        <li><strong>Warm-up (5 min):</strong> Walking all directions</li>
        <li><strong>Lower body (10 min):</strong> Squats (20), lunges (10 each), all leg kicks (15 each direction each leg)</li>
        <li><strong>Cardio (10 min):</strong> Water walking/jogging intervals</li>
        <li><strong>Upper body (10 min):</strong> All arm exercises, 15-20 each</li>
        <li><strong>Core (5 min):</strong> Standing crunches, flutter kicks, noodle plank</li>
        <li><strong>Cool-down (5 min):</strong> Gentle walking, stretching</li>
      </ol>

      <h3>Deep Water Running (40 minutes)</h3>
      <p>Wear flotation belt, deep end:</p>
      <ol>
        <li><strong>Warm-up (5 min):</strong> Easy jogging</li>
        <li><strong>Workout (30 min):</strong></li>
        <li>— 5 min moderate pace</li>
        <li>— 1 min hard effort, 1 min easy × 10</li>
        <li>— 5 min moderate pace</li>
        <li><strong>Cool-down (5 min):</strong> Easy jogging, treading water</li>
      </ol>

      <h2>Equipment Options</h2>
      <ul>
        <li><strong>Flotation belt:</strong> Essential for deep water exercise</li>
        <li><strong>Water dumbbells:</strong> Foam dumbbells that create resistance</li>
        <li><strong>Pool noodle:</strong> Balance, flotation, resistance exercises</li>
        <li><strong>Webbed gloves:</strong> Increase upper body resistance</li>
        <li><strong>Kickboard:</strong> Upper body support for leg exercises</li>
        <li><strong>Aqua jogger:</strong> Belt for deep water running</li>
      </ul>

      <h2>Tips for Success</h2>
      <ul>
        <li><strong>Water temperature:</strong> 83-88°F ideal for exercise, warmer for arthritis</li>
        <li><strong>Stay hydrated:</strong> You sweat even in water</li>
        <li><strong>Sunscreen:</strong> For outdoor pools</li>
        <li><strong>Water shoes:</strong> Protect feet, improve traction</li>
        <li><strong>Start shallow:</strong> Move deeper as you gain confidence</li>
        <li><strong>Classes:</strong> Water aerobics classes provide motivation and instruction</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Pool exercise offers a unique combination of resistance, cardio, and joint relief that's
        hard to match on land. Whether you're recovering from injury, managing chronic pain, or
        just looking for an effective workout that's easy on your body, the pool delivers. Start
        with walking and simple movements, then progress as your fitness and confidence grow.
      </p>
    </BlogPost>
  )
}
