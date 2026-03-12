import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Functional Movement Exercises: Train for Real Life | FoundationalRehab',
  description: 'Build strength that transfers to daily activities. Learn the fundamental movement patterns and exercises that improve real-world function.',
  keywords: ['functional movement', 'functional fitness', 'movement patterns', 'functional training', 'real world strength'],
  openGraph: {
    title: 'Functional Movement Exercises: Train for Real Life',
    description: 'Exercise that transfers to daily activities and real-world function.',
    type: 'article',
  },
};

export default function FunctionalMovementExercises() {
  return (
    <BlogPost
      title="Functional Movement Exercises: Train for Real Life"
      publishedDate="2026-03-12"
      readTime="10 min read"
      tags={["Functional Fitness", "Strength Training", "Movement"]}
    >
      <p className="lead">
        Can you lift heavy in the gym but struggle to pick up groceries without 
        tweaking your back? You might be strong, but not functionally strong. 
        Functional training builds strength that actually transfers to real life—
        picking things up, carrying them, pushing, pulling, and moving through space.
      </p>

      <h2>The 7 Fundamental Movement Patterns</h2>
      <p>
        Every human movement is a variation of these basic patterns. Master them, 
        and you&apos;ll be prepared for anything life throws at you.
      </p>

      <h3>1. Squat (Lower Body Push)</h3>
      <p>
        <strong>Real-world applications:</strong> Sitting down, standing up, picking 
        things off the floor, getting out of a car.
      </p>

      <h4>Goblet Squat</h4>
      <ol>
        <li>Hold weight at chest level</li>
        <li>Feet shoulder-width or slightly wider</li>
        <li>Squat down, keeping chest up and weight on heels</li>
        <li>Elbows track inside knees</li>
        <li>Drive through heels to stand</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h4>Bodyweight Squat</h4>
      <ol>
        <li>Arms in front for counterbalance</li>
        <li>Sit back and down as if into a chair</li>
        <li>Depth as your mobility allows</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>2. Hinge (Posterior Chain)</h3>
      <p>
        <strong>Real-world applications:</strong> Picking up anything heavy from the 
        floor, bending to tie shoes, lifting kids.
      </p>

      <h4>Romanian Deadlift (RDL)</h4>
      <ol>
        <li>Hold weights in front of thighs</li>
        <li>Push hips BACK (not down)</li>
        <li>Keep slight knee bend, back flat</li>
        <li>Feel hamstring stretch, then squeeze glutes to return</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h4>Kettlebell Deadlift</h4>
      <ol>
        <li>Kettlebell between feet</li>
        <li>Hinge at hips, grab handle</li>
        <li>Drive through heels, squeeze glutes to stand</li>
        <li>Return weight to floor with control</li>
        <li>3 sets of 10</li>
      </ol>

      <h3>3. Lunge (Single-Leg)</h3>
      <p>
        <strong>Real-world applications:</strong> Walking, stairs, stepping over obstacles, 
        getting up from the floor.
      </p>

      <h4>Reverse Lunge</h4>
      <ol>
        <li>Step back with one leg</li>
        <li>Lower until back knee nearly touches floor</li>
        <li>Front knee stays over ankle</li>
        <li>Drive through front heel to stand</li>
        <li>3 sets of 10-12 each leg</li>
      </ol>

      <h4>Walking Lunge</h4>
      <ol>
        <li>Step forward into lunge</li>
        <li>Drive through front heel to bring back leg forward</li>
        <li>Continue alternating</li>
        <li>2-3 sets of 10-12 each leg</li>
      </ol>

      <h3>4. Push (Upper Body)</h3>
      <p>
        <strong>Real-world applications:</strong> Pushing doors, getting up from the 
        floor, putting things on high shelves.
      </p>

      <h4>Push-Up</h4>
      <ol>
        <li>Hands slightly wider than shoulders</li>
        <li>Body in straight line from head to heels</li>
        <li>Lower chest to floor, elbows at 45°</li>
        <li>Push back up</li>
        <li>3 sets of as many as possible with good form</li>
      </ol>

      <h4>Overhead Press</h4>
      <ol>
        <li>Weights at shoulder height</li>
        <li>Press straight up, finishing with arms overhead</li>
        <li>Lower with control</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>5. Pull (Upper Body)</h3>
      <p>
        <strong>Real-world applications:</strong> Opening doors, pulling objects toward 
        you, climbing, rowing activities.
      </p>

      <h4>Dumbbell Row</h4>
      <ol>
        <li>One hand and knee on bench</li>
        <li>Pull dumbbell toward hip</li>
        <li>Squeeze shoulder blade at top</li>
        <li>Lower with control</li>
        <li>3 sets of 10-12 each arm</li>
      </ol>

      <h4>Inverted Row</h4>
      <ol>
        <li>Hang from a bar or TRX at an angle</li>
        <li>Pull chest toward bar</li>
        <li>Keep body straight throughout</li>
        <li>Lower with control</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h3>6. Carry (Loaded Locomotion)</h3>
      <p>
        <strong>Real-world applications:</strong> Carrying groceries, luggage, kids, 
        moving furniture.
      </p>

      <h4>Farmer&apos;s Walk</h4>
      <ol>
        <li>Hold heavy weights at sides</li>
        <li>Walk with upright posture</li>
        <li>Shoulders back, core braced</li>
        <li>3 sets of 30-60 seconds or distance</li>
      </ol>

      <h4>Suitcase Carry</h4>
      <ol>
        <li>Hold weight in one hand only</li>
        <li>Walk without leaning to either side</li>
        <li>Core works hard to prevent lateral lean</li>
        <li>30-45 seconds each side</li>
      </ol>

      <h3>7. Rotation/Anti-Rotation (Core)</h3>
      <p>
        <strong>Real-world applications:</strong> Throwing, swinging, twisting to reach, 
        resisting forces that try to twist you.
      </p>

      <h4>Pallof Press</h4>
      <ol>
        <li>Band or cable at chest height</li>
        <li>Stand sideways to anchor</li>
        <li>Press hands straight out, resisting rotation</li>
        <li>Hold 2-3 seconds, return</li>
        <li>3 sets of 10-12 each side</li>
      </ol>

      <h4>Medicine Ball Rotational Throw</h4>
      <ol>
        <li>Stand sideways to wall</li>
        <li>Rotate hips and throw ball into wall</li>
        <li>Catch and rotate back</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <h2>Multi-Planar Movement</h2>
      <p>
        Life doesn&apos;t happen in one plane. Include movements in all three:
      </p>
      <ul>
        <li><strong>Sagittal:</strong> Forward/back (squats, lunges, running)</li>
        <li><strong>Frontal:</strong> Side to side (lateral lunges, side shuffles)</li>
        <li><strong>Transverse:</strong> Rotational (wood chops, throwing)</li>
      </ul>

      <h3>Lateral Lunge</h3>
      <ol>
        <li>Step wide to one side</li>
        <li>Bend that knee, keeping other leg straight</li>
        <li>Push back to start</li>
        <li>3 sets of 10 each side</li>
      </ol>

      <h3>Lateral Shuffle</h3>
      <ol>
        <li>Athletic stance</li>
        <li>Shuffle sideways, staying low</li>
        <li>Don&apos;t let feet come together</li>
        <li>3 sets of 30 seconds each direction</li>
      </ol>

      <h2>Ground-Based Movements</h2>
      <p>
        Getting up and down from the floor is crucial for independence, especially 
        as we age.
      </p>

      <h3>Turkish Get-Up</h3>
      <ol>
        <li>Lie on back, one arm pointing to ceiling</li>
        <li>Roll to elbow, then hand</li>
        <li>Lift hips, sweep leg through to kneeling</li>
        <li>Stand up, then reverse the process</li>
        <li>Start with no weight, progress slowly</li>
        <li>3-5 reps each side</li>
      </ol>

      <h3>Get-Up/Get-Down</h3>
      <ol>
        <li>From standing, lower yourself to the floor</li>
        <li>Lie flat on your back</li>
        <li>Get back up to standing</li>
        <li>Try to use your hands as little as possible</li>
        <li>5-10 reps</li>
      </ol>

      <h2>Sample Functional Workout</h2>

      <h3>Full-Body Routine (30-40 min, 3x/week)</h3>
      <p><strong>Warm-Up (5 min):</strong></p>
      <ul>
        <li>Walking lunges: 10 each leg</li>
        <li>Arm circles: 10 each direction</li>
        <li>Hip circles: 10 each direction</li>
        <li>Bodyweight squats: 10</li>
      </ul>

      <p><strong>Strength Circuit (25 min):</strong></p>
      <ol>
        <li>Goblet Squat: 3 × 12</li>
        <li>Push-Ups: 3 × 10-15</li>
        <li>Romanian Deadlift: 3 × 10</li>
        <li>Dumbbell Row: 3 × 10 each arm</li>
        <li>Reverse Lunge: 3 × 10 each leg</li>
        <li>Overhead Press: 3 × 10</li>
        <li>Farmer&apos;s Walk: 3 × 30-45 seconds</li>
        <li>Pallof Press: 3 × 10 each side</li>
      </ol>

      <p><strong>Cooldown:</strong></p>
      <ul>
        <li>Hip flexor stretch: 30 sec each side</li>
        <li>Chest stretch: 30 sec</li>
        <li>Hamstring stretch: 30 sec each side</li>
      </ul>

      <h2>Progressions by Age/Ability</h2>

      <h3>Beginner/Older Adult</h3>
      <ul>
        <li>Chair squats (sit to chair, stand up)</li>
        <li>Wall push-ups</li>
        <li>Supported lunges (hold wall or chair)</li>
        <li>Seated rows with band</li>
        <li>Light carries</li>
      </ul>

      <h3>Intermediate</h3>
      <ul>
        <li>Full squats with body weight or light weight</li>
        <li>Push-ups from floor</li>
        <li>Unassisted lunges</li>
        <li>Dumbbell rows</li>
        <li>Moderate farmer&apos;s walks</li>
      </ul>

      <h3>Advanced</h3>
      <ul>
        <li>Weighted squats (goblet, barbell)</li>
        <li>Challenging push-up variations</li>
        <li>Weighted lunges</li>
        <li>Heavy carries</li>
        <li>Complex movements (Turkish get-ups)</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Train movements, not muscles:</strong> Focus on patterns, not isolation</li>
        <li><strong>7 patterns cover it all:</strong> Squat, hinge, lunge, push, pull, carry, rotate</li>
        <li><strong>Move in all planes:</strong> Include lateral and rotational work</li>
        <li><strong>Practice ground transitions:</strong> Getting up and down from the floor matters</li>
        <li><strong>Carries are underrated:</strong> Walking with weight builds incredible functional strength</li>
        <li><strong>Progress appropriately:</strong> Start where you are, build gradually</li>
        <li><strong>Real life is the test:</strong> Can you do what you need to do without pain?</li>
      </ul>

      <p>
        Functional training isn&apos;t about doing exercises on unstable surfaces or 
        using weird equipment. It&apos;s about training the fundamental movement patterns 
        that make up all human activity. Master these patterns, and you&apos;ll be strong 
        for life—in the gym and out of it.
      </p>
    </BlogPost>
  );
}
