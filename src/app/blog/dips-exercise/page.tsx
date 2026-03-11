import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Dips Exercise: Build Chest, Shoulders, and Triceps | FoundationalRehab',
  description: 'Master dips for upper body strength. Includes proper form, chest vs tricep emphasis, progressions from beginner to weighted, and shoulder safety tips.',
  keywords: ['dips exercise', 'parallel bar dips', 'chest dips', 'tricep dips', 'bodyweight exercise'],
}

export default function DipsExercise() {
  return (
    <BlogPost
      title="Dips Exercise: Build Chest, Shoulders, and Triceps"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="8 min read"
      category="Strength Training"
      tags={['strength', 'chest', 'triceps', 'bodyweight']}
    >
      <p className="lead">
        Dips are one of the best upper body exercises - they build the chest, shoulders, and
        triceps with just your bodyweight. Here's how to do them safely and effectively.
      </p>

      <h2>Why Dips Are Effective</h2>
      <ul>
        <li><strong>Compound movement:</strong> Works multiple large muscle groups simultaneously</li>
        <li><strong>Bodyweight strength:</strong> Builds functional pushing power</li>
        <li><strong>Scalable:</strong> Progress from assisted to weighted</li>
        <li><strong>Chest development:</strong> Excellent for lower chest when done correctly</li>
        <li><strong>Tricep builder:</strong> One of the best tricep exercises available</li>
      </ul>

      <h2>Muscles Worked</h2>
      <ul>
        <li><strong>Primary:</strong> Chest (pectoralis major), triceps, anterior deltoids</li>
        <li><strong>Secondary:</strong> Rhomboids, lats, core (stabilization)</li>
      </ul>
      <p>
        You can shift emphasis between chest and triceps by adjusting your body position.
      </p>

      <h2>Proper Dip Form</h2>

      <h3>Setup</h3>
      <ol>
        <li>Grip parallel bars with hands slightly wider than shoulder-width</li>
        <li>Jump up and straighten arms to support your body</li>
        <li>Shoulders down and back (don't shrug)</li>
        <li>Core tight, legs can be straight or crossed behind you</li>
      </ol>

      <h3>The Movement</h3>
      <ol>
        <li>Lower your body by bending elbows</li>
        <li>Continue until upper arms are parallel to floor (or slightly below)</li>
        <li>Keep elbows from flaring too wide</li>
        <li>Push back up to starting position</li>
        <li>Lock out arms at top (full extension)</li>
      </ol>

      <h3>Key Cues</h3>
      <ul>
        <li><strong>"Shoulders down"</strong> - Don't let shoulders shrug up toward ears</li>
        <li><strong>"Control the descent"</strong> - Don't drop into the bottom position</li>
        <li><strong>"Elbows back"</strong> - Not straight out to the sides</li>
        <li><strong>"Full lockout"</strong> - Straighten arms completely at the top</li>
      </ul>

      <h2>Chest Dips vs Tricep Dips</h2>

      <h3>For Chest Emphasis</h3>
      <ul>
        <li>Lean torso forward (about 30-45 degrees)</li>
        <li>Wider grip if bars allow</li>
        <li>Flare elbows out slightly</li>
        <li>Go deeper into the stretch</li>
        <li>Look down during the movement</li>
      </ul>

      <h3>For Tricep Emphasis</h3>
      <ul>
        <li>Keep torso upright (vertical)</li>
        <li>Narrower grip</li>
        <li>Keep elbows tucked close to body</li>
        <li>Focus on elbow extension at the top</li>
        <li>Look forward or slightly up</li>
      </ul>

      <h2>Dip Progressions</h2>

      <h3>Level 1: Bench Dips</h3>
      <p>Learn the pushing pattern with feet on the ground.</p>
      <ol>
        <li>Hands on bench behind you, fingers forward</li>
        <li>Feet on floor (bent knees = easier, straight legs = harder)</li>
        <li>Lower until upper arms are parallel to floor</li>
        <li>Push back up</li>
        <li>3 sets of 12-15</li>
      </ol>
      <p><strong>Note:</strong> Bench dips can stress shoulders more than parallel bar dips. Progress to bars when ready.</p>

      <h3>Level 2: Assisted Dips (Band)</h3>
      <p>Use a resistance band for assistance.</p>
      <ol>
        <li>Loop band over parallel bars</li>
        <li>Place knees or feet in band</li>
        <li>Band helps push you up</li>
        <li>Progress to thinner bands over time</li>
        <li>3 sets of 8-12</li>
      </ol>

      <h3>Level 3: Assisted Dips (Machine)</h3>
      <p>If available, assisted dip machine allows precise load reduction.</p>

      <h3>Level 4: Bodyweight Dips</h3>
      <p>Full dips with no assistance.</p>
      <ol>
        <li>Focus on full range of motion</li>
        <li>Control the negative (lowering phase)</li>
        <li>3-4 sets of 6-12 reps</li>
      </ol>

      <h3>Level 5: Weighted Dips</h3>
      <p>Add external load for continued progress.</p>
      <ul>
        <li>Dip belt with plates</li>
        <li>Dumbbell between feet or knees</li>
        <li>Weighted vest</li>
        <li>Chains</li>
      </ul>
      <p>Start with 10-15 lbs and progress gradually.</p>

      <h2>Common Mistakes</h2>

      <h3>1. Going Too Deep</h3>
      <p>
        Dipping too low can stress the shoulder joint, especially with heavy weight or poor mobility.
      </p>
      <p><strong>Fix:</strong> Stop when upper arms are parallel to floor. Only go deeper if you have the mobility and it's pain-free.</p>

      <h3>2. Shoulders Rolling Forward</h3>
      <p>
        Letting shoulders round forward at the bottom puts them in a vulnerable position.
      </p>
      <p><strong>Fix:</strong> Keep chest up, shoulders back. Don't collapse at the bottom.</p>

      <h3>3. Partial Reps</h3>
      <p>
        Not going deep enough or not fully locking out reduces the exercise's effectiveness.
      </p>
      <p><strong>Fix:</strong> Full range of motion - parallel depth and full lockout at top.</p>

      <h3>4. Flaring Elbows Excessively</h3>
      <p>
        Elbows pointing straight out increases shoulder stress.
      </p>
      <p><strong>Fix:</strong> Keep elbows at roughly 45 degrees from your body.</p>

      <h3>5. Swinging</h3>
      <p>
        Using momentum by swinging legs reduces muscle work and increases injury risk.
      </p>
      <p><strong>Fix:</strong> Keep body controlled. Legs still or crossed behind you.</p>

      <h2>Dip Variations</h2>

      <h3>Ring Dips</h3>
      <p>Dips on gymnastic rings - significantly harder.</p>
      <ul>
        <li>Unstable surface requires more stabilization</li>
        <li>Greater range of motion possible</li>
        <li>Better for shoulder health (can turn hands naturally)</li>
        <li>Master bar dips first</li>
      </ul>

      <h3>Korean Dips</h3>
      <p>Dips with bars behind you instead of at your sides.</p>
      <ul>
        <li>Different angle of push</li>
        <li>More shoulder flexibility required</li>
        <li>Advanced variation</li>
      </ul>

      <h3>Straight Bar Dips</h3>
      <p>Dips on a single straight bar (pull-up bar).</p>
      <ul>
        <li>Different hand position</li>
        <li>Requires leaning forward more</li>
        <li>Good for transitioning to muscle-ups</li>
      </ul>

      <h3>Negative Dips</h3>
      <p>Focus on the lowering phase only.</p>
      <ol>
        <li>Jump or step up to top position</li>
        <li>Lower yourself as slowly as possible (5-10 seconds)</li>
        <li>Reset and repeat</li>
      </ol>
      <p><strong>Use for:</strong> Building strength toward full dips.</p>

      <h2>Dip Workouts</h2>

      <h3>Beginner (Building to First Dip)</h3>
      <ol>
        <li>Bench dips: 3x12</li>
        <li>Band-assisted dips: 3x8-10</li>
        <li>Negative dips: 3x5 (5-second lowering)</li>
      </ol>

      <h3>Intermediate Push Workout</h3>
      <ol>
        <li>Dips: 4x8-12</li>
        <li>Push-ups: 3x15</li>
        <li>Overhead press: 3x10</li>
        <li>Tricep extension: 3x12</li>
      </ol>

      <h3>Advanced Chest Focus</h3>
      <ol>
        <li>Weighted dips (forward lean): 4x6-8</li>
        <li>Incline dumbbell press: 3x10</li>
        <li>Cable flyes: 3x12</li>
        <li>Bodyweight dips to failure</li>
      </ol>

      <h3>Dip + Pull-Up Superset</h3>
      <p>Alternate between pushing and pulling:</p>
      <ol>
        <li>Dips: 8 reps</li>
        <li>Rest 30 seconds</li>
        <li>Pull-ups: 8 reps</li>
        <li>Rest 60 seconds</li>
        <li>Repeat 4-5 rounds</li>
      </ol>

      <h2>Shoulder Safety</h2>
      <p>
        Dips have a reputation for being hard on shoulders. Here's how to do them safely:
      </p>
      <ul>
        <li><strong>Warm up:</strong> Shoulder circles, band pull-aparts, and light push-ups before dips</li>
        <li><strong>Control the movement:</strong> Don't drop into the bottom position</li>
        <li><strong>Don't go too deep:</strong> Parallel is sufficient for most people</li>
        <li><strong>Keep shoulders back:</strong> Don't let them roll forward</li>
        <li><strong>Progress gradually:</strong> Don't add weight until bodyweight dips are solid</li>
        <li><strong>Listen to pain:</strong> If dips hurt your shoulders, regress or substitute</li>
      </ul>

      <h2>Dips vs Push-Ups vs Bench Press</h2>
      <ul>
        <li><strong>Dips:</strong> More tricep emphasis, lower chest focus, bodyweight-based</li>
        <li><strong>Push-ups:</strong> More core involvement, scalable difficulty, very accessible</li>
        <li><strong>Bench press:</strong> Easiest to load heavy, upper/mid chest focus, requires equipment</li>
      </ul>
      <p>All three are valuable - ideally include a mix in your training.</p>

      <h2>The Bottom Line</h2>
      <p>
        Dips are a phenomenal upper body builder that should be in most training programs.
        Start with assisted variations if needed, progress to bodyweight, then add weight.
        Prioritize shoulder safety by controlling the movement and not going excessively deep.
      </p>
      <p>
        Whether you want bigger triceps, a stronger chest, or better pushing strength, dips
        deliver. Master the form, progress patiently, and enjoy the gains.
      </p>
    </BlogPost>
  )
}
