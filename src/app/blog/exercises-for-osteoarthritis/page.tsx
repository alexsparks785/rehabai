import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Exercises for Osteoarthritis: Move Better with Less Pain | FoundationalRehab',
  description: 'Evidence-based exercises for osteoarthritis in knees, hips, hands, and spine. Learn how movement helps arthritis and which exercises are safe and effective.',
  keywords: ['osteoarthritis exercises', 'arthritis exercise', 'knee arthritis exercises', 'hip arthritis exercises', 'exercise for joint pain'],
  openGraph: {
    title: 'Exercises for Osteoarthritis: Move Better with Less Pain',
    description: 'Comprehensive exercise guide for managing osteoarthritis symptoms.',
    type: 'article',
  },
};

export default function ExercisesForOsteoarthritis() {
  return (
    <BlogPost
      title="Exercises for Osteoarthritis: Move Better with Less Pain"
      publishedDate="2026-03-12"
      readTime="10 min read"
      tags={["Arthritis", "Joint Pain", "Rehabilitation"]}
    >
      <p className="lead">
        &quot;Exercise with arthritis? Won&apos;t that make it worse?&quot; Actually, the opposite 
        is true. Regular exercise is one of the most effective treatments for 
        osteoarthritis—reducing pain, improving function, and potentially slowing 
        progression. Here&apos;s how to do it safely.
      </p>

      <h2>Why Exercise Helps Arthritis</h2>
      <p>
        It seems counterintuitive, but movement is medicine for arthritic joints:
      </p>
      <ul>
        <li><strong>Cartilage nutrition:</strong> Cartilage has no blood supply—it gets nutrients through compression and release during movement</li>
        <li><strong>Joint lubrication:</strong> Movement stimulates synovial fluid production</li>
        <li><strong>Muscle support:</strong> Stronger muscles reduce load on joints</li>
        <li><strong>Pain reduction:</strong> Exercise releases natural pain-relieving endorphins</li>
        <li><strong>Weight management:</strong> Less weight = less joint stress</li>
        <li><strong>Reduced stiffness:</strong> Regular movement prevents the &quot;rusty hinge&quot; effect</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="font-semibold text-blue-800">The Research</p>
        <p className="text-blue-700">
          Exercise is recommended as first-line treatment for knee and hip OA by 
          every major medical organization. Studies show it&apos;s as effective as 
          pain medication for many people—without the side effects.
        </p>
      </div>

      <h2>General Principles</h2>

      <h3>The 2-Hour Pain Rule</h3>
      <p>
        Some discomfort during exercise is normal with arthritis. Use this guideline:
      </p>
      <ul>
        <li>Mild discomfort during exercise is OK</li>
        <li>Pain that increases during exercise = stop or modify</li>
        <li>If pain is worse 2 hours after exercise = you did too much</li>
        <li>If pain returns to baseline within 2 hours = you&apos;re on track</li>
      </ul>

      <h3>Start Low, Go Slow</h3>
      <ul>
        <li>Begin with shorter sessions (10-15 minutes)</li>
        <li>Low intensity initially</li>
        <li>Increase gradually (10-20% per week)</li>
        <li>Some days will be better than others—adjust accordingly</li>
      </ul>

      <h3>Consistency Over Intensity</h3>
      <ul>
        <li>Daily movement is better than occasional intense sessions</li>
        <li>&quot;Motion is lotion&quot;—keep joints moving regularly</li>
        <li>Missing a day is fine; missing a week sets you back</li>
      </ul>

      <h2>Knee Osteoarthritis</h2>

      <h3>Quad Sets</h3>
      <ol>
        <li>Sit or lie with leg straight</li>
        <li>Tighten quadriceps, pushing back of knee down</li>
        <li>Hold 5-10 seconds</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h3>Straight Leg Raises</h3>
      <ol>
        <li>Lie on back, one knee bent, other leg straight</li>
        <li>Tighten quad, lift straight leg 6-12 inches</li>
        <li>Hold 2-3 seconds, lower slowly</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Mini Squats</h3>
      <ol>
        <li>Stand with feet shoulder-width apart</li>
        <li>Squat down 30-45° (pain-free range)</li>
        <li>Keep weight on heels</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Step-Ups (Low Step)</h3>
      <ol>
        <li>Use a 4-6 inch step</li>
        <li>Step up with one leg, don&apos;t push off with back leg</li>
        <li>Step down with control</li>
        <li>2-3 sets of 10 each leg</li>
      </ol>

      <h3>Hamstring Curls</h3>
      <ol>
        <li>Stand holding something for balance</li>
        <li>Bend knee, bringing heel toward buttock</li>
        <li>Lower slowly</li>
        <li>3 sets of 12-15 each leg</li>
      </ol>

      <h2>Hip Osteoarthritis</h2>

      <h3>Hip Marching</h3>
      <ol>
        <li>Sit in a chair</li>
        <li>Lift one knee toward ceiling</li>
        <li>Lower with control</li>
        <li>Alternate legs, 20-30 total reps</li>
      </ol>

      <h3>Standing Hip Extension</h3>
      <ol>
        <li>Hold onto a chair for balance</li>
        <li>Keep leg straight, extend it behind you</li>
        <li>Squeeze glute at end range</li>
        <li>Don&apos;t arch your back</li>
        <li>3 sets of 12 each leg</li>
      </ol>

      <h3>Standing Hip Abduction</h3>
      <ol>
        <li>Hold onto chair for balance</li>
        <li>Lift leg out to the side</li>
        <li>Keep hips level, don&apos;t lean</li>
        <li>3 sets of 12 each leg</li>
      </ol>

      <h3>Glute Bridges</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Squeeze glutes, lift hips</li>
        <li>Hold 2-3 seconds at top</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Clamshells</h3>
      <ol>
        <li>Side-lying, knees bent 45°</li>
        <li>Keep feet together, lift top knee</li>
        <li>Don&apos;t let pelvis roll back</li>
        <li>3 sets of 15 each side</li>
      </ol>

      <h2>Hand Osteoarthritis</h2>

      <h3>Finger Spreads</h3>
      <ol>
        <li>Place hand flat on table</li>
        <li>Spread fingers apart as far as comfortable</li>
        <li>Bring back together</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Finger Touches</h3>
      <ol>
        <li>Touch thumb to each fingertip</li>
        <li>Make an &quot;O&quot; shape with each</li>
        <li>10 cycles</li>
      </ol>

      <h3>Fist to Flat</h3>
      <ol>
        <li>Make a gentle fist</li>
        <li>Open hand fully, spreading fingers</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Grip Strengthening</h3>
      <ol>
        <li>Squeeze a soft ball or putty</li>
        <li>Hold 5 seconds</li>
        <li>Release</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Wrist Circles</h3>
      <ol>
        <li>Circle wrists in both directions</li>
        <li>10 circles each way</li>
      </ol>

      <h2>Spine Osteoarthritis</h2>

      <h3>Cat-Cow</h3>
      <ol>
        <li>On hands and knees</li>
        <li>Arch back up (cat), then let it sag (cow)</li>
        <li>Move slowly through comfortable range</li>
        <li>10-15 cycles</li>
      </ol>

      <h3>Pelvic Tilts</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Flatten low back against floor (posterior tilt)</li>
        <li>Then arch slightly (anterior tilt)</li>
        <li>10-15 gentle oscillations</li>
      </ol>

      <h3>Knee to Chest</h3>
      <ol>
        <li>Lie on back, pull one knee toward chest</li>
        <li>Hold 20-30 seconds</li>
        <li>Switch sides</li>
        <li>Repeat 2-3 times each</li>
      </ol>

      <h3>Trunk Rotation</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Let knees drop gently to one side</li>
        <li>Hold 20-30 seconds</li>
        <li>Repeat other side</li>
      </ol>

      <h2>Cardio for Arthritis</h2>
      <p>
        Low-impact cardio improves overall health without stressing joints:
      </p>

      <h3>Best Options</h3>
      <ul>
        <li><strong>Walking:</strong> Start with 10-15 minutes, build up gradually</li>
        <li><strong>Swimming/Water aerobics:</strong> Excellent—buoyancy reduces joint load by 90%</li>
        <li><strong>Cycling:</strong> Low impact, good for knees (adjust seat height)</li>
        <li><strong>Elliptical:</strong> Low impact, weight-bearing</li>
        <li><strong>Recumbent bike:</strong> Good for severe hip or knee OA</li>
      </ul>

      <h3>Frequency Goal</h3>
      <ul>
        <li>150 minutes per week of moderate activity</li>
        <li>Can be broken into 10-15 minute sessions</li>
        <li>Build up gradually—don&apos;t start at full volume</li>
      </ul>

      <h2>Water Exercise</h2>
      <p>
        Pool exercise is particularly beneficial for arthritis:
      </p>
      <ul>
        <li>Warm water (83-88°F) relaxes muscles and reduces pain</li>
        <li>Buoyancy reduces joint loading significantly</li>
        <li>Water resistance provides gentle strengthening</li>
        <li>Many communities offer arthritis-specific pool classes</li>
      </ul>

      <h3>Pool Exercises</h3>
      <ul>
        <li>Walking in chest-deep water</li>
        <li>Leg swings (forward/back, side to side)</li>
        <li>Knee lifts</li>
        <li>Hip circles</li>
        <li>Water jogging with flotation belt</li>
      </ul>

      <h2>Sample Weekly Schedule</h2>

      <h3>Knee/Hip OA Program</h3>
      <p><strong>Daily:</strong></p>
      <ul>
        <li>Range of motion exercises: 5-10 minutes</li>
        <li>Walking or other low-impact cardio: 15-30 minutes</li>
      </ul>

      <p><strong>3x per week (strength):</strong></p>
      <ol>
        <li>Quad sets: 3 × 10</li>
        <li>Straight leg raises: 3 × 10</li>
        <li>Mini squats: 3 × 10</li>
        <li>Glute bridges: 3 × 12</li>
        <li>Clamshells: 3 × 12 each side</li>
        <li>Standing hip abduction: 2 × 10 each</li>
        <li>Hamstring curls: 2 × 10 each</li>
      </ol>

      <h2>Managing Flares</h2>
      <p>
        Arthritis has good days and bad days. During flares:
      </p>
      <ul>
        <li>Don&apos;t stop moving completely</li>
        <li>Reduce intensity and duration</li>
        <li>Focus on gentle range of motion</li>
        <li>Ice after activity if swollen</li>
        <li>Return to normal routine as symptoms allow</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Exercise is treatment:</strong> First-line recommendation for OA</li>
        <li><strong>Motion is lotion:</strong> Regular movement lubricates and nourishes joints</li>
        <li><strong>2-hour rule:</strong> Pain should return to baseline within 2 hours post-exercise</li>
        <li><strong>Strength protects:</strong> Strong muscles reduce load on arthritic joints</li>
        <li><strong>Water is wonderful:</strong> Pool exercise is ideal for painful joints</li>
        <li><strong>Consistency wins:</strong> Daily gentle movement beats occasional intense sessions</li>
        <li><strong>Adjust for flares:</strong> Modify, don&apos;t stop, during bad days</li>
      </ul>

      <p>
        Osteoarthritis doesn&apos;t mean you have to stop moving—it means you have to 
        keep moving. The right exercise program can reduce pain, improve function, 
        and help you maintain the active life you want. Start where you are, progress 
        gradually, and make movement a daily habit.
      </p>
    </BlogPost>
  );
}
