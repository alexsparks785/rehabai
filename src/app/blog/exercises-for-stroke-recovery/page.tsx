import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Stroke Recovery: Regain Movement and Independence | FoundationalRehab',
  description: 'Evidence-based exercises for stroke recovery to improve strength, mobility, balance, and independence. Safe rehabilitation guide for stroke survivors.',
  keywords: ['stroke exercises', 'stroke recovery exercises', 'stroke rehabilitation', 'post stroke exercises', 'hemiplegia exercises'],
}

export default function ExercisesForStrokeRecovery() {
  return (
    <BlogPost
      title="Exercises for Stroke Recovery: Regain Movement and Independence"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="11 min read"
      category="Rehabilitation"
      tags={['rehabilitation', 'stroke', 'neurological', 'mobility', 'strength']}
    >
      <p className="lead">
        Exercise is essential for stroke recovery. The brain can rewire itself through
        neuroplasticity, and repetitive, task-specific practice drives this recovery. Here's
        how to exercise safely and effectively after a stroke.
      </p>

      <h2>Why Exercise Matters After Stroke</h2>
      <ul>
        <li><strong>Neuroplasticity:</strong> Repeated movement helps brain rewire around damaged areas</li>
        <li><strong>Prevents complications:</strong> Reduces risk of blood clots, pneumonia, muscle wasting</li>
        <li><strong>Improves function:</strong> Regains ability to perform daily activities</li>
        <li><strong>Reduces spasticity:</strong> Stretching and movement manage muscle tightness</li>
        <li><strong>Prevents second stroke:</strong> Exercise addresses cardiovascular risk factors</li>
        <li><strong>Improves mood:</strong> Reduces depression and anxiety common after stroke</li>
      </ul>

      <h2>Key Principles</h2>

      <h3>Repetition Is Key</h3>
      <p>
        Research shows hundreds to thousands of repetitions are needed for neural changes.
        More practice = more recovery. Aim for high-repetition, task-specific practice.
      </p>

      <h3>Use the Affected Side</h3>
      <p>
        It's tempting to compensate with the unaffected side. Whenever safe, challenge the
        affected limbs to promote recovery.
      </p>

      <h3>Task-Specific Practice</h3>
      <p>
        Practice the activities you want to improve. If you want to walk better, practice
        walking. If you want to use your hand, practice hand movements.
      </p>

      <h3>Challenge Appropriately</h3>
      <p>
        Exercises should be challenging but achievable. Too easy = no improvement. Too hard
        = frustration and compensation patterns.
      </p>

      <h2>Upper Limb Exercises</h2>

      <h3>Passive Range of Motion (if unable to move actively)</h3>
      <p><strong>Why:</strong> Maintains joint mobility, reduces stiffness, provides sensory input</p>
      <ol>
        <li>Use unaffected hand (or caregiver assists)</li>
        <li>Move affected arm through full range</li>
        <li>Shoulder: flexion, abduction, rotation</li>
        <li>Elbow: bending and straightening</li>
        <li>Wrist and fingers: flexion, extension, rotation</li>
        <li>10-15 repetitions each movement, 2-3 times daily</li>
      </ol>

      <h3>Table Slides (Active-Assisted)</h3>
      <p><strong>Why:</strong> Encourages active participation with support</p>
      <ol>
        <li>Sit at table, affected arm on smooth surface</li>
        <li>Clasp hands together</li>
        <li>Slide arms forward on table</li>
        <li>Slide back to start</li>
        <li>Slide side to side</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Shoulder Flexion</h3>
      <p><strong>Why:</strong> Rebuilds shoulder strength and control</p>
      <ol>
        <li>Seated or lying down</li>
        <li>Lift affected arm forward and up</li>
        <li>Use unaffected arm to assist if needed</li>
        <li>Lower slowly</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Elbow Flexion/Extension</h3>
      <p><strong>Why:</strong> Essential for self-care tasks</p>
      <ol>
        <li>Arm supported on table or armrest</li>
        <li>Bend elbow, bringing hand toward shoulder</li>
        <li>Straighten arm</li>
        <li>10-15 repetitions</li>
        <li>Progress to holding light weight</li>
      </ol>

      <h3>Wrist Flexion/Extension</h3>
      <p><strong>Why:</strong> Important for grip and hand function</p>
      <ol>
        <li>Rest forearm on table, hand over edge</li>
        <li>Bend wrist up, then down</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Finger Exercises</h3>
      <p><strong>Why:</strong> Fine motor recovery for daily tasks</p>
      <ol>
        <li>Make a fist, then straighten fingers</li>
        <li>Touch thumb to each fingertip</li>
        <li>Spread fingers apart, bring together</li>
        <li>Pick up small objects (coins, pegs)</li>
        <li>Multiple times daily</li>
      </ol>

      <h2>Lower Limb Exercises</h2>

      <h3>Passive Range of Motion</h3>
      <ol>
        <li>Hip: flexion, abduction, rotation</li>
        <li>Knee: bending and straightening</li>
        <li>Ankle: pointing toes up and down, circles</li>
        <li>10-15 repetitions each, 2-3 times daily</li>
      </ol>

      <h3>Bridging</h3>
      <p><strong>Why:</strong> Hip and core strength for transfers and walking</p>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Lift hips off bed/floor</li>
        <li>Hold 3-5 seconds</li>
        <li>Lower slowly</li>
        <li>10-15 repetitions</li>
      </ol>
      <p><strong>Progression:</strong> Hold longer, march in place while bridged</p>

      <h3>Hip Flexion (Marching)</h3>
      <p><strong>Why:</strong> Hip strength for walking</p>
      <ol>
        <li>Seated in chair</li>
        <li>Lift knee toward chest</li>
        <li>Lower foot to floor</li>
        <li>Alternate legs</li>
        <li>10-15 each leg</li>
      </ol>

      <h3>Knee Extension</h3>
      <p><strong>Why:</strong> Quad strength for standing and walking</p>
      <ol>
        <li>Seated in chair</li>
        <li>Straighten one leg, hold 3 seconds</li>
        <li>Lower slowly</li>
        <li>10-15 each leg</li>
      </ol>

      <h3>Ankle Pumps</h3>
      <p><strong>Why:</strong> Circulation, ankle mobility, calf activation</p>
      <ol>
        <li>Sitting or lying</li>
        <li>Point toes away, then pull toes up</li>
        <li>20-30 repetitions</li>
        <li>Do frequently throughout day</li>
      </ol>

      <h3>Heel Raises</h3>
      <p><strong>Why:</strong> Calf strength for push-off in walking</p>
      <ol>
        <li>Stand holding support</li>
        <li>Rise onto toes</li>
        <li>Lower with control</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Sit-to-Stand</h3>
      <p><strong>Why:</strong> Critical functional movement</p>
      <ol>
        <li>Sit at edge of firm chair</li>
        <li>Feet flat, slightly back</li>
        <li>Lean forward ("nose over toes")</li>
        <li>Push through legs to stand</li>
        <li>Sit down slowly with control</li>
        <li>10 repetitions</li>
      </ol>
      <p><strong>Key cue:</strong> "Use both legs equally"</p>

      <h2>Balance Exercises</h2>

      <h3>Weight Shifts</h3>
      <ol>
        <li>Stand holding support</li>
        <li>Shift weight to affected leg</li>
        <li>Hold 5-10 seconds</li>
        <li>Shift to unaffected leg</li>
        <li>10 shifts each direction</li>
      </ol>

      <h3>Single-Leg Stand (Affected Side)</h3>
      <ol>
        <li>Stand near support</li>
        <li>Lift unaffected leg slightly</li>
        <li>Balance on affected leg</li>
        <li>Hold as long as possible</li>
        <li>Use support as needed</li>
        <li>Work toward 30 seconds</li>
      </ol>

      <h3>Tandem Standing</h3>
      <ol>
        <li>Stand with one foot in front of other (heel to toe)</li>
        <li>Hold near support</li>
        <li>Practice both foot positions</li>
        <li>Hold 10-30 seconds</li>
      </ol>

      <h3>Reaching Activities</h3>
      <ol>
        <li>Stand holding support with one hand</li>
        <li>Reach forward, sideways, and across body</li>
        <li>Challenge balance while maintaining safety</li>
        <li>10 reaches each direction</li>
      </ol>

      <h2>Walking Practice</h2>

      <h3>Pre-Gait Exercises</h3>
      <ul>
        <li>Weight shifting side to side</li>
        <li>Marching in place</li>
        <li>Stepping forward and back</li>
        <li>Stepping sideways</li>
      </ul>

      <h3>Walking Tips</h3>
      <ul>
        <li>Use appropriate assistive device (walker, cane)</li>
        <li>Focus on equal weight bearing</li>
        <li>Take your time—quality over speed</li>
        <li>Practice on different surfaces as able</li>
        <li>Work with physical therapist on gait pattern</li>
      </ul>

      <h3>Stair Practice</h3>
      <p>When cleared by your therapist:</p>
      <ul>
        <li><strong>Going up:</strong> Lead with stronger leg ("up with the good")</li>
        <li><strong>Going down:</strong> Lead with weaker leg ("down with the bad")</li>
        <li>Always use handrail</li>
        <li>Practice with supervision initially</li>
      </ul>

      <h2>Managing Spasticity</h2>
      <p>
        Muscle tightness (spasticity) is common after stroke. Regular stretching helps manage it.
      </p>

      <h3>Upper Limb Stretches</h3>
      <ul>
        <li><strong>Finger extension:</strong> Gently straighten fingers, hold 30 seconds</li>
        <li><strong>Wrist extension:</strong> Gently bend wrist back, hold 30 seconds</li>
        <li><strong>Elbow extension:</strong> Straighten arm fully, hold 30 seconds</li>
        <li><strong>Shoulder stretch:</strong> Bring arm across body or overhead</li>
      </ul>

      <h3>Lower Limb Stretches</h3>
      <ul>
        <li><strong>Calf stretch:</strong> Stand facing wall, stretch back leg</li>
        <li><strong>Hamstring stretch:</strong> Seated, straighten leg, lean forward</li>
        <li><strong>Hip flexor stretch:</strong> Lying or standing lunge position</li>
      </ul>
      <p>Hold stretches 30-60 seconds, 2-3 times daily</p>

      <h2>Sample Exercise Programs</h2>

      <h3>Early Recovery (Limited Movement)</h3>
      <p>3 times daily:</p>
      <ol>
        <li>Passive range of motion: All joints, 10 reps each</li>
        <li>Ankle pumps: 20 reps</li>
        <li>Bridging: 10 reps (if able)</li>
        <li>Active-assisted arm exercises: 10-15 reps</li>
        <li>Stretching: 30 seconds each tight muscle</li>
      </ol>

      <h3>Intermediate Recovery (Some Movement)</h3>
      <p>2 times daily:</p>
      <ol>
        <li>Table slides: 20 reps</li>
        <li>Arm exercises (flexion, elbow, wrist): 15 each</li>
        <li>Seated marching: 20 total</li>
        <li>Knee extension: 15 each leg</li>
        <li>Sit-to-stand: 10 reps</li>
        <li>Weight shifts: 10 each direction</li>
        <li>Standing balance: 30 seconds each leg</li>
        <li>Walking practice: 5-10 minutes</li>
      </ol>

      <h3>Later Recovery (More Function)</h3>
      <p>Daily:</p>
      <ol>
        <li>Active arm exercises with resistance: 15 each</li>
        <li>Fine motor practice: 10 minutes</li>
        <li>Sit-to-stand: 15 reps</li>
        <li>Balance exercises: 10 minutes</li>
        <li>Walking: 15-30 minutes</li>
        <li>Stair practice: As appropriate</li>
        <li>Cardiovascular exercise: As cleared (stationary bike, etc.)</li>
      </ol>

      <h2>When to Get Help</h2>
      <ul>
        <li>Significant increase in spasticity</li>
        <li>New weakness or numbness</li>
        <li>Falls or near-falls</li>
        <li>Increasing pain</li>
        <li>Signs of another stroke (sudden weakness, speech changes, confusion)</li>
      </ul>

      <h2>Working with Your Team</h2>
      <ul>
        <li><strong>Neurologist:</strong> Medical management, stroke prevention</li>
        <li><strong>Physical therapist:</strong> Mobility, balance, walking, exercises</li>
        <li><strong>Occupational therapist:</strong> Daily activities, arm/hand function</li>
        <li><strong>Speech therapist:</strong> Swallowing, communication</li>
        <li><strong>Caregivers:</strong> Home exercise assistance, safety</li>
      </ul>

      <h2>Important Safety Reminders</h2>
      <ul>
        <li>Always have support nearby for standing/walking exercises</li>
        <li>Clear fall hazards from exercise area</li>
        <li>Don't push through pain</li>
        <li>Stay hydrated</li>
        <li>Monitor blood pressure if directed</li>
        <li>Progress gradually—recovery takes time</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Recovery after stroke requires consistent, repetitive exercise targeting affected limbs
        and functions. The brain can rewire itself, but it needs practice—lots of it. Work with
        your rehabilitation team, stay consistent, and celebrate every improvement. Recovery
        continues for months and even years after stroke.
      </p>
    </BlogPost>
  )
}
