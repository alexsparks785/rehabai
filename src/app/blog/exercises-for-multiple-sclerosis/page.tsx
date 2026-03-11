import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Multiple Sclerosis: Safe Movement for MS Management | FoundationalRehab',
  description: 'Evidence-based exercises for multiple sclerosis to improve strength, balance, fatigue, and quality of life. Safe guidelines for all MS stages.',
  keywords: ['MS exercises', 'multiple sclerosis exercise', 'MS workout', 'MS fatigue exercise', 'MS balance exercises'],
}

export default function ExercisesForMS() {
  return (
    <BlogPost
      title="Exercises for Multiple Sclerosis: Safe Movement for MS Management"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="10 min read"
      category="Rehabilitation"
      tags={['rehabilitation', 'MS', 'neurological', 'balance', 'fatigue management']}
    >
      <p className="lead">
        Exercise is safe and beneficial for people with multiple sclerosis. Research shows regular
        physical activity improves strength, balance, mood, and fatigue—without triggering relapses.
        Here's how to exercise smart with MS.
      </p>

      <h2>Why Exercise Matters for MS</h2>
      <ul>
        <li><strong>Reduces fatigue:</strong> Counterintuitive but proven—exercise decreases MS fatigue</li>
        <li><strong>Improves strength:</strong> Maintains muscle mass and function</li>
        <li><strong>Enhances balance:</strong> Reduces fall risk</li>
        <li><strong>Supports mood:</strong> Reduces depression and anxiety common in MS</li>
        <li><strong>Maintains mobility:</strong> Preserves walking ability longer</li>
        <li><strong>May be neuroprotective:</strong> Some research suggests exercise benefits brain health</li>
        <li><strong>Does NOT trigger relapses:</strong> Exercise is safe during stable periods</li>
      </ul>

      <h2>Key Principles for MS Exercise</h2>

      <h3>1. Manage Heat</h3>
      <p>
        Heat sensitivity (Uhthoff's phenomenon) affects many people with MS. Temporary symptom
        worsening with heat is common but not harmful.
      </p>
      <ul>
        <li>Exercise in cool environments (air conditioning, fans)</li>
        <li>Early morning or evening when cooler</li>
        <li>Pool exercise (cool water, 80-84°F)</li>
        <li>Cooling vests during and after exercise</li>
        <li>Cold water to drink during workout</li>
        <li>Pre-cool with cold shower or ice packs</li>
      </ul>

      <h3>2. Manage Fatigue</h3>
      <ul>
        <li>Exercise during your best time of day</li>
        <li>Shorter sessions (10-30 minutes) may work better than long ones</li>
        <li>Plan rest time after exercise</li>
        <li>Don't push through extreme fatigue</li>
        <li>Seated exercises conserve energy</li>
      </ul>

      <h3>3. Progress Gradually</h3>
      <ul>
        <li>Start below what you think you can do</li>
        <li>Increase by small amounts (5-10% per week)</li>
        <li>Some days will be better than others</li>
        <li>Consistency matters more than intensity</li>
      </ul>

      <h2>Aerobic Exercise</h2>
      <p>
        Aim for 2-3 sessions per week, 10-30 minutes each. Build up gradually.
      </p>

      <h3>Best Options</h3>
      <ul>
        <li><strong>Walking:</strong> Most accessible, use assistive devices as needed</li>
        <li><strong>Recumbent cycling:</strong> Seated, stable, good for leg weakness</li>
        <li><strong>Aquatic exercise:</strong> Cool water, buoyancy support, low impact</li>
        <li><strong>Arm ergometer:</strong> Upper body cardio if legs are affected</li>
        <li><strong>Seated aerobics:</strong> Chair-based cardio routines</li>
      </ul>

      <h3>Intensity Guidelines</h3>
      <ul>
        <li><strong>Moderate intensity:</strong> Can talk but not sing</li>
        <li><strong>Rate of perceived exertion:</strong> 3-5 on 10-point scale</li>
        <li><strong>Heart rate:</strong> 60-75% of maximum (if not on beta blockers)</li>
        <li>Stop if symptoms worsen significantly</li>
      </ul>

      <h2>Strength Training</h2>
      <p>
        2-3 sessions per week, allowing rest days between. Focus on major muscle groups.
      </p>

      <h3>Seated Leg Press (or Chair Squats)</h3>
      <ol>
        <li>Sit in sturdy chair with armrests</li>
        <li>Press through feet to stand</li>
        <li>Use armrests for assistance as needed</li>
        <li>Sit down with control</li>
        <li>8-15 repetitions</li>
      </ol>

      <h3>Seated Leg Extension</h3>
      <ol>
        <li>Sit tall, feet flat</li>
        <li>Extend one leg straight</li>
        <li>Hold 3-5 seconds</li>
        <li>Lower with control</li>
        <li>10-15 each leg</li>
      </ol>
      <p><strong>Progression:</strong> Add ankle weights (1-3 lbs)</p>

      <h3>Seated Heel Raises</h3>
      <ol>
        <li>Sit tall, feet flat</li>
        <li>Rise onto balls of feet</li>
        <li>Lower with control</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Seated Marching</h3>
      <ol>
        <li>Sit tall, feet flat</li>
        <li>Lift one knee toward chest</li>
        <li>Lower and switch</li>
        <li>Alternate for 20-30 total</li>
      </ol>

      <h3>Wall Push-Up</h3>
      <ol>
        <li>Stand arm's length from wall</li>
        <li>Hands on wall at shoulder height</li>
        <li>Bend elbows, lean toward wall</li>
        <li>Push back to start</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Seated Row (Resistance Band)</h3>
      <ol>
        <li>Sit with band around feet or anchored</li>
        <li>Pull elbows back, squeezing shoulder blades</li>
        <li>Return with control</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Bicep Curls (Seated)</h3>
      <ol>
        <li>Sit with light dumbbells or band</li>
        <li>Curl toward shoulders</li>
        <li>Lower with control</li>
        <li>12-15 repetitions</li>
      </ol>

      <h3>Shoulder Press</h3>
      <ol>
        <li>Sit tall, weights at shoulders</li>
        <li>Press overhead</li>
        <li>Lower to shoulders</li>
        <li>10-12 repetitions</li>
      </ol>

      <h2>Balance Exercises</h2>
      <p>
        Practice daily. Always near a sturdy support (counter, chair, wall).
      </p>

      <h3>Weight Shifts</h3>
      <ol>
        <li>Stand holding support</li>
        <li>Shift weight fully to right foot</li>
        <li>Hold 5-10 seconds</li>
        <li>Shift to left foot</li>
        <li>10 shifts each direction</li>
      </ol>

      <h3>Single-Leg Stand</h3>
      <ol>
        <li>Hold sturdy support</li>
        <li>Lift one foot slightly off floor</li>
        <li>Hold 10-30 seconds</li>
        <li>Switch legs</li>
        <li>Progress: lighter touch, no hands</li>
      </ol>

      <h3>Heel-to-Toe Stand</h3>
      <ol>
        <li>Stand beside counter</li>
        <li>Place one foot directly in front of other</li>
        <li>Hold 10-30 seconds</li>
        <li>Switch which foot is forward</li>
      </ol>

      <h3>Heel-to-Toe Walking</h3>
      <ol>
        <li>Walk along counter or wall</li>
        <li>Place heel of one foot touching toe of other</li>
        <li>10-20 steps</li>
        <li>Turn carefully, return</li>
      </ol>

      <h3>Side Stepping</h3>
      <ol>
        <li>Stand facing counter</li>
        <li>Step sideways along counter</li>
        <li>10 steps right, 10 steps left</li>
        <li>Keep hips level, don't lean</li>
      </ol>

      <h2>Flexibility and Stretching</h2>
      <p>
        Daily stretching helps manage spasticity and maintain range of motion.
        Hold each stretch 30-60 seconds.
      </p>

      <h3>Calf Stretch</h3>
      <ol>
        <li>Face wall, hands on wall</li>
        <li>Step one foot back, heel down</li>
        <li>Lean into wall, feel calf stretch</li>
        <li>30-60 seconds each leg</li>
      </ol>

      <h3>Hamstring Stretch (Seated)</h3>
      <ol>
        <li>Sit on edge of chair</li>
        <li>Extend one leg straight, heel on floor</li>
        <li>Hinge forward at hips</li>
        <li>Feel stretch in back of thigh</li>
        <li>30-60 seconds each leg</li>
      </ol>

      <h3>Hip Flexor Stretch</h3>
      <ol>
        <li>Stand holding chair</li>
        <li>Step one foot back into lunge position</li>
        <li>Tuck tailbone, squeeze back glute</li>
        <li>Feel stretch in front of back hip</li>
        <li>30-60 seconds each side</li>
      </ol>

      <h3>Chest Stretch</h3>
      <ol>
        <li>Stand in doorway, hands on frame</li>
        <li>Step through gently</li>
        <li>Feel stretch across chest</li>
        <li>30-60 seconds</li>
      </ol>

      <h3>Neck Stretches</h3>
      <ol>
        <li>Sit tall</li>
        <li>Gently tilt ear toward shoulder</li>
        <li>Hold 20-30 seconds</li>
        <li>Repeat other side</li>
        <li>Chin to chest, hold</li>
      </ol>

      <h2>Yoga and Tai Chi</h2>
      <p>
        Both have research support for MS. Benefits include improved balance, flexibility,
        fatigue, and quality of life.
      </p>
      <ul>
        <li><strong>Yoga:</strong> Choose gentle or chair yoga classes</li>
        <li><strong>Tai Chi:</strong> Slow, flowing movements improve balance</li>
        <li>Look for MS-specific or adaptive classes</li>
        <li>Start with seated versions if needed</li>
      </ul>

      <h2>Sample Weekly Schedule</h2>

      <h3>Mild MS / Good Function</h3>
      <ul>
        <li><strong>Monday:</strong> 20-30 min walking or cycling + stretching</li>
        <li><strong>Tuesday:</strong> Strength training (20 min) + balance (10 min)</li>
        <li><strong>Wednesday:</strong> Rest or gentle yoga (15-20 min)</li>
        <li><strong>Thursday:</strong> 20-30 min aerobic + stretching</li>
        <li><strong>Friday:</strong> Strength training (20 min) + balance (10 min)</li>
        <li><strong>Weekend:</strong> Light activity (walking, swimming) or rest</li>
      </ul>

      <h3>Moderate MS / Some Limitations</h3>
      <ul>
        <li><strong>Monday:</strong> 15-20 min seated aerobics or pool + stretching</li>
        <li><strong>Tuesday:</strong> Seated strength (15 min) + balance with support</li>
        <li><strong>Wednesday:</strong> Rest or gentle stretching only</li>
        <li><strong>Thursday:</strong> 15-20 min aerobic (recumbent bike) + stretching</li>
        <li><strong>Friday:</strong> Seated strength (15 min) + balance</li>
        <li><strong>Weekend:</strong> Rest, gentle walking as tolerated</li>
      </ul>

      <h3>More Significant Limitations</h3>
      <ul>
        <li><strong>Daily:</strong> Stretching and range of motion (10-15 min)</li>
        <li><strong>3x/week:</strong> Seated strength exercises (10-15 min)</li>
        <li><strong>2-3x/week:</strong> Seated aerobics or arm ergometer (10-15 min)</li>
        <li><strong>Daily:</strong> Whatever movement is possible—all activity counts</li>
      </ul>

      <h2>During Relapses</h2>
      <ul>
        <li>Rest during acute relapse</li>
        <li>No vigorous exercise until symptoms stabilize</li>
        <li>Gentle stretching and range of motion may be okay</li>
        <li>Resume exercise gradually after relapse ends</li>
        <li>May need to rebuild from lower baseline</li>
        <li>Consult your neurologist before resuming</li>
      </ul>

      <h2>When to Stop or Modify</h2>
      <ul>
        <li>Significant worsening of MS symptoms</li>
        <li>Extreme fatigue that doesn't recover</li>
        <li>Feeling worse 24 hours after exercise</li>
        <li>New neurological symptoms</li>
        <li>Dizziness, chest pain, or difficulty breathing</li>
      </ul>
      <p><strong>Temporary symptom worsening with heat is normal and not harmful—it resolves with cooling.</strong></p>

      <h2>Working with Professionals</h2>
      <ul>
        <li><strong>Neurologist:</strong> Exercise clearance, understanding your MS status</li>
        <li><strong>Physical therapist:</strong> Personalized exercise program, gait training</li>
        <li><strong>Occupational therapist:</strong> Energy conservation, daily activity strategies</li>
        <li><strong>Exercise physiologist:</strong> Fitness programming with MS knowledge</li>
        <li><strong>MS-certified fitness professionals:</strong> Specialized training</li>
      </ul>

      <h2>Motivation Tips</h2>
      <ul>
        <li>Exercise with a friend or group</li>
        <li>Track your progress (even small wins)</li>
        <li>Find activities you actually enjoy</li>
        <li>Set realistic, achievable goals</li>
        <li>Remember: some exercise is always better than none</li>
        <li>Join MS exercise programs or support groups</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Exercise is safe and beneficial for people with MS at all stages. The key is managing
        heat, respecting fatigue, and progressing gradually. Focus on what you CAN do, not
        what you can't. Regular physical activity improves strength, balance, mood, and
        fatigue—helping you live better with MS.
      </p>
    </BlogPost>
  )
}
