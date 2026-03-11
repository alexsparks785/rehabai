import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Postnatal Exercises: Safe Recovery After Pregnancy | FoundationalRehab',
  description: 'Rebuild core strength and fitness after pregnancy with safe postnatal exercises. Includes pelvic floor work, diastasis recti considerations, and progressive routines.',
  keywords: ['postnatal exercises', 'postpartum workout', 'after pregnancy exercise', 'pelvic floor exercises', 'diastasis recti exercises'],
}

export default function ExercisesForPostnatalRecovery() {
  return (
    <BlogPost
      title="Postnatal Exercises: Safe Recovery After Pregnancy"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Rehabilitation"
      tags={['postnatal', 'core', 'pelvic floor', 'recovery']}
    >
      <p className="lead">
        Recovering strength after pregnancy requires patience and the right approach. These
        exercises rebuild your core, pelvic floor, and overall fitness safely.
      </p>

      <h2>Before You Start</h2>
      <p>
        Get clearance from your healthcare provider before starting exercise - typically at
        your 6-week postpartum checkup. Those who had C-sections or complications may need
        to wait longer.
      </p>

      <h3>Signs You're Ready</h3>
      <ul>
        <li>Cleared by healthcare provider</li>
        <li>Bleeding has stopped or is very light</li>
        <li>No pain with basic movements</li>
        <li>Feeling generally recovered from birth</li>
      </ul>

      <h3>Red Flags to Stop Exercise</h3>
      <ul>
        <li>Increased bleeding</li>
        <li>Pain (pelvic, abdominal, or C-section site)</li>
        <li>Leaking urine during exercise</li>
        <li>Heaviness or bulging in the pelvis</li>
        <li>Dizziness or extreme fatigue</li>
      </ul>

      <h2>Phase 1: Early Recovery (0-6 Weeks)</h2>
      <p>
        Gentle exercises that can begin soon after birth (with provider approval).
      </p>

      <h3>Diaphragmatic Breathing</h3>
      <p>Reconnect with your core and pelvic floor through breath.</p>
      <ol>
        <li>Lie on back with knees bent</li>
        <li>Place hands on belly</li>
        <li>Inhale: Let belly rise, feel ribs expand</li>
        <li>Exhale: Belly falls, gently engage pelvic floor (like stopping pee)</li>
        <li>5-10 breaths, several times daily</li>
      </ol>

      <h3>Pelvic Floor Activation (Kegels)</h3>
      <ol>
        <li>Inhale and relax pelvic floor</li>
        <li>Exhale and gently lift pelvic floor (squeeze and lift)</li>
        <li>Hold 5 seconds</li>
        <li>Fully release</li>
        <li>10 reps, 3 times daily</li>
      </ol>
      <p><strong>Key:</strong> The release is as important as the contraction. Don't just clench.</p>

      <h3>Gentle Walking</h3>
      <ul>
        <li>Short, easy walks when comfortable</li>
        <li>Start with 5-10 minutes</li>
        <li>Increase gradually based on how you feel</li>
      </ul>

      <h3>Heel Slides</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Exhale, engage core gently</li>
        <li>Slide one heel away, straightening leg</li>
        <li>Slide back</li>
        <li>10 per leg</li>
      </ol>

      <h2>Check for Diastasis Recti</h2>
      <p>
        Diastasis recti (abdominal separation) is common after pregnancy. Check before
        progressing to more demanding core exercises.
      </p>

      <h3>Self-Check</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Place fingers horizontally above belly button</li>
        <li>Lift head and shoulders slightly (mini crunch)</li>
        <li>Feel for a gap between the muscles</li>
        <li>Check above, at, and below belly button</li>
      </ol>
      <p>
        A gap of 2+ finger widths that doesn't tension when you engage may indicate diastasis
        that needs attention before progressing. Consider seeing a pelvic floor PT.
      </p>

      <h2>Phase 2: Rebuilding Foundation (6-12 Weeks)</h2>

      <h3>Dead Bug (Modified)</h3>
      <ol>
        <li>Lie on back, knees bent 90°, arms toward ceiling</li>
        <li>Press lower back into floor</li>
        <li>Exhale and slowly lower ONE leg (heel toward floor)</li>
        <li>Keep lower back pressed down</li>
        <li>Return and switch legs</li>
        <li>10 per leg</li>
      </ol>
      <p><strong>If back arches:</strong> Don't lower leg as far. Build up gradually.</p>

      <h3>Glute Bridges</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Exhale, engage pelvic floor</li>
        <li>Lift hips toward ceiling</li>
        <li>Squeeze glutes at top</li>
        <li>Lower with control</li>
        <li>15 reps</li>
      </ol>

      <h3>Bird Dog (Modified)</h3>
      <ol>
        <li>On hands and knees</li>
        <li>Keep core engaged, back flat</li>
        <li>Extend ONE leg back (arm stays down)</li>
        <li>Hold 5 seconds, return</li>
        <li>10 per leg</li>
      </ol>
      <p>Progress to opposite arm + leg when ready.</p>

      <h3>Clamshells</h3>
      <ol>
        <li>Lie on side, knees bent</li>
        <li>Keep feet together, lift top knee</li>
        <li>Don't let hips roll back</li>
        <li>15-20 per side</li>
      </ol>

      <h3>Wall Push-Ups</h3>
      <ol>
        <li>Hands on wall, body at angle</li>
        <li>Exhale as you push away</li>
        <li>Keep core engaged</li>
        <li>15 reps</li>
      </ol>

      <h2>Phase 3: Progressive Strengthening (12+ Weeks)</h2>
      <p>
        After 12 weeks, if Phase 2 exercises are easy and you have no symptoms (leaking,
        pain, pressure), progress to these.
      </p>

      <h3>Bodyweight Squats</h3>
      <ol>
        <li>Feet shoulder-width apart</li>
        <li>Exhale on the way up</li>
        <li>Keep core engaged throughout</li>
        <li>15-20 reps</li>
      </ol>

      <h3>Full Dead Bug</h3>
      <ol>
        <li>Opposite arm and leg extend simultaneously</li>
        <li>Lower back stays pressed to floor</li>
        <li>10 per side</li>
      </ol>

      <h3>Full Bird Dog</h3>
      <ol>
        <li>Opposite arm and leg extend</li>
        <li>Hold 5 seconds</li>
        <li>10 per side</li>
      </ol>

      <h3>Pallof Press</h3>
      <ol>
        <li>Band or cable at chest height</li>
        <li>Press straight out, resist rotation</li>
        <li>Hold 3 seconds, return</li>
        <li>10 per side</li>
      </ol>

      <h3>Incline Push-Ups</h3>
      <ol>
        <li>Hands on bench or step</li>
        <li>Progress to lower surfaces over time</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Lunges</h3>
      <ol>
        <li>Start with reverse lunges (more stable)</li>
        <li>Exhale on the way up</li>
        <li>10 per leg</li>
      </ol>

      <h2>Exercises to Avoid or Modify Early On</h2>
      <ul>
        <li><strong>Crunches/sit-ups:</strong> Can worsen diastasis and increase intra-abdominal pressure</li>
        <li><strong>Planks:</strong> Wait until core foundation is rebuilt</li>
        <li><strong>Running/jumping:</strong> Wait until pelvic floor can handle impact</li>
        <li><strong>Heavy lifting:</strong> Progress gradually</li>
        <li><strong>Deep twisting:</strong> Avoid until diastasis has healed</li>
      </ul>

      <h2>Sample Postnatal Routines</h2>

      <h3>Early Recovery (0-6 Weeks) - 10 minutes</h3>
      <ol>
        <li>Diaphragmatic breathing: 10 breaths</li>
        <li>Pelvic floor activation: 10 reps</li>
        <li>Heel slides: 10 per leg</li>
        <li>Glute squeezes: 10 reps</li>
        <li>Gentle walking: 5-10 minutes</li>
      </ol>

      <h3>Foundation Building (6-12 Weeks) - 20 minutes</h3>
      <ol>
        <li>Diaphragmatic breathing: 5 breaths</li>
        <li>Pelvic floor activation: 10 reps</li>
        <li>Modified dead bug: 10 per leg</li>
        <li>Glute bridges: 15 reps</li>
        <li>Bird dog (leg only): 10 per side</li>
        <li>Clamshells: 15 per side</li>
        <li>Wall push-ups: 15 reps</li>
        <li>Walking: 15-20 minutes</li>
      </ol>

      <h3>Progressive Strengthening (12+ Weeks) - 30 minutes</h3>
      <ol>
        <li>Warm-up: Walking 5 minutes</li>
        <li>Squats: 15 reps</li>
        <li>Full dead bug: 10 per side</li>
        <li>Glute bridges: 15 reps</li>
        <li>Full bird dog: 10 per side</li>
        <li>Reverse lunges: 10 per leg</li>
        <li>Incline push-ups: 12 reps</li>
        <li>Pallof press: 10 per side</li>
        <li>Clamshells with band: 15 per side</li>
      </ol>

      <h2>When to See a Pelvic Floor PT</h2>
      <p>Consider professional help if you have:</p>
      <ul>
        <li>Urine leakage during exercise, coughing, or sneezing</li>
        <li>Pelvic heaviness or pressure</li>
        <li>Pain with exercise or intercourse</li>
        <li>Diastasis recti that doesn't improve</li>
        <li>Unable to feel pelvic floor muscles working</li>
        <li>Uncertainty about your readiness to progress</li>
      </ul>

      <h2>Tips for Success</h2>
      <ul>
        <li><strong>Be patient:</strong> Recovery takes 6-12+ months</li>
        <li><strong>Listen to your body:</strong> More isn't better if you're not ready</li>
        <li><strong>Exhale on effort:</strong> Helps manage intra-abdominal pressure</li>
        <li><strong>Rest when needed:</strong> Sleep deprivation affects recovery</li>
        <li><strong>Stay hydrated:</strong> Especially if breastfeeding</li>
        <li><strong>Progress gradually:</strong> Add volume/intensity slowly</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Postnatal recovery is a journey, not a race. Start with breathing and pelvic floor
        work, rebuild your foundation with gentle exercises, and progress only when ready.
        Watch for warning signs and don't hesitate to seek professional help.
      </p>
      <p>
        Your body did something amazing. Give it the time and care it needs to recover properly,
        and you'll build a stronger foundation than before.
      </p>
    </BlogPost>
  )
}
