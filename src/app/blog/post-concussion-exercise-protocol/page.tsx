import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Post-Concussion Exercise Protocol: Safe Return to Activity',
  description: 'Evidence-based exercise protocol for concussion recovery. Learn the graduated return-to-activity steps, symptom monitoring, and safe progression after head injury.',
  keywords: ['post-concussion exercises', 'concussion recovery exercises', 'return to play protocol', 'concussion rehabilitation', 'exercise after concussion'],
}

export default function PostConcussionExerciseProtocol() {
  return (
    <BlogPost
      title="Post-Concussion Exercise Protocol: Safe Return to Activity"
      publishDate="2026-03-20"
      readTime="11 min read"
      author="FoundationalRehab Team"
      heroAlt="Person doing light exercise as part of concussion recovery"
    >
      <p className="lead">
        Recovering from a concussion requires a careful, graduated approach to physical activity. The old advice of "complete rest until symptoms resolve" has been replaced by evidence showing that controlled, sub-symptom-threshold exercise actually speeds recovery. This guide explains how to safely progress from rest to full activity after a concussion.
      </p>

      <h2>Understanding Concussion Recovery</h2>
      <p>
        A concussion is a brain injury caused by a bump, blow, or jolt to the head. Recovery involves:
      </p>
      <ul>
        <li>Initial rest period (24-48 hours of relative rest)</li>
        <li>Gradual return to cognitive activities (school, work)</li>
        <li>Graduated return to physical activity</li>
      </ul>
      <p>
        Common symptoms include:
      </p>
      <ul>
        <li>Headache</li>
        <li>Dizziness or balance problems</li>
        <li>Fatigue</li>
        <li>Difficulty concentrating or remembering</li>
        <li>Sensitivity to light and noise</li>
        <li>Sleep disturbances</li>
        <li>Mood changes</li>
      </ul>
      <p>
        <strong>Key principle:</strong> Exercise should be done at a level that doesn't significantly worsen symptoms. Some mild, temporary symptom increase is acceptable.
      </p>

      <h2>When to Start Exercising</h2>
      <p>
        Current guidelines recommend:
      </p>
      <ul>
        <li><strong>First 24-48 hours:</strong> Relative rest (light walking is okay)</li>
        <li><strong>After 24-48 hours:</strong> Begin light aerobic exercise if symptoms allow</li>
        <li><strong>Don't wait for symptoms to fully resolve</strong> before starting light activity</li>
      </ul>
      <p>
        Starting light exercise early (within days, not weeks) is associated with faster recovery.
      </p>

      <h2>The Buffalo Concussion Treadmill Test</h2>
      <p>
        Before starting a return-to-sport protocol, a supervised treadmill test can determine your symptom threshold (the heart rate at which symptoms increase). This helps guide safe exercise intensity.
      </p>
      <p>
        If you don't have access to this test, use the symptom rating approach below.
      </p>

      <h2>Symptom Monitoring</h2>
      <p>
        Rate your symptoms on a 0-10 scale before, during, and after exercise:
      </p>
      <ul>
        <li><strong>0:</strong> No symptoms</li>
        <li><strong>1-3:</strong> Mild symptoms</li>
        <li><strong>4-6:</strong> Moderate symptoms</li>
        <li><strong>7-10:</strong> Severe symptoms</li>
      </ul>
      <p>
        <strong>Guidelines:</strong>
      </p>
      <ul>
        <li>Exercise should not increase symptoms more than 2 points</li>
        <li>Symptoms should return to baseline within 1 hour after exercise</li>
        <li>If symptoms spike significantly, stop and rest</li>
      </ul>

      <h2>Graduated Return-to-Activity Protocol</h2>
      <p>
        Progress through each stage only when you can complete it without significant symptom worsening. Spend a minimum of 24 hours at each stage.
      </p>

      <h3>Stage 1: Symptom-Limited Activity</h3>
      <ul>
        <li><strong>Activity:</strong> Daily activities that don't provoke symptoms</li>
        <li><strong>Examples:</strong> Light walking, gentle household tasks</li>
        <li><strong>Duration:</strong> 10-15 minutes</li>
        <li><strong>Goal:</strong> Gradual return to daily activities</li>
        <li><strong>Proceed when:</strong> Can do light activity without significant symptom increase</li>
      </ul>

      <h3>Stage 2: Light Aerobic Exercise</h3>
      <ul>
        <li><strong>Activity:</strong> Walking, stationary cycling, swimming</li>
        <li><strong>Intensity:</strong> Keep heart rate below 70% max (or below symptom threshold)</li>
        <li><strong>Duration:</strong> 10-20 minutes</li>
        <li><strong>Avoid:</strong> Resistance training, activities with head movement or impact</li>
        <li><strong>Goal:</strong> Increase heart rate</li>
        <li><strong>Proceed when:</strong> Can complete 20 minutes without symptom worsening</li>
      </ul>

      <h3>Stage 3: Sport-Specific Exercise</h3>
      <ul>
        <li><strong>Activity:</strong> Running drills, skating, sport-specific movements</li>
        <li><strong>Intensity:</strong> Moderate—can progress to harder efforts</li>
        <li><strong>Duration:</strong> 20-30 minutes</li>
        <li><strong>Avoid:</strong> Any activities with head impact or contact</li>
        <li><strong>Goal:</strong> Add movement and coordination</li>
        <li><strong>Proceed when:</strong> Can complete sport-specific drills without symptoms</li>
      </ul>

      <h3>Stage 4: Non-Contact Training Drills</h3>
      <ul>
        <li><strong>Activity:</strong> More complex training drills, resistance exercises</li>
        <li><strong>Intensity:</strong> Higher intensity, closer to game-level</li>
        <li><strong>Duration:</strong> Full training sessions (without contact)</li>
        <li><strong>Avoid:</strong> Contact or collision</li>
        <li><strong>Goal:</strong> Exercise, coordination, and increased thinking</li>
        <li><strong>Proceed when:</strong> Can complete full non-contact practice</li>
      </ul>

      <h3>Stage 5: Full Contact Practice</h3>
      <ul>
        <li><strong>Activity:</strong> Full contact practice after medical clearance</li>
        <li><strong>Intensity:</strong> Normal training intensity</li>
        <li><strong>Goal:</strong> Restore confidence and assess functional skills</li>
        <li><strong>Requirement:</strong> Medical clearance before this stage</li>
        <li><strong>Proceed when:</strong> No symptoms during full contact practice</li>
      </ul>

      <h3>Stage 6: Return to Sport</h3>
      <ul>
        <li><strong>Activity:</strong> Normal game play</li>
        <li><strong>Requirements:</strong> 
          <ul>
            <li>Medical clearance</li>
            <li>Completed all previous stages without symptoms</li>
            <li>Full cognitive recovery</li>
          </ul>
        </li>
      </ul>

      <h2>If Symptoms Return</h2>
      <p>
        If symptoms significantly worsen during any stage:
      </p>
      <ol>
        <li>Stop the activity</li>
        <li>Rest until symptoms return to baseline</li>
        <li>Return to the previous stage</li>
        <li>Try to progress again after 24 hours</li>
      </ol>
      <p>
        Don't push through significant symptom increases—this can delay recovery.
      </p>

      <h2>Sub-Symptom Threshold Exercise</h2>
      <p>
        For prolonged concussion recovery (symptoms lasting more than 2 weeks), controlled aerobic exercise at 80% of your symptom threshold can help. This should be supervised by a healthcare provider familiar with concussion management.
      </p>

      <h3>Sample Sub-Threshold Program</h3>
      <ul>
        <li>Stationary bike or treadmill walking</li>
        <li>Start at 10-15 minutes</li>
        <li>Keep heart rate below the level that triggers symptoms</li>
        <li>Gradually increase duration and intensity</li>
        <li>Do 5-6 days per week</li>
      </ul>

      <h2>Vestibular and Balance Exercises</h2>
      <p>
        If you have dizziness or balance problems, these exercises may help (best done under guidance of a vestibular physical therapist):
      </p>

      <h3>1. Gaze Stabilization</h3>
      <ul>
        <li>Hold a card with a letter at arm's length</li>
        <li>Focus on the letter</li>
        <li>Turn head side to side while keeping eyes on the letter</li>
        <li>Start slow, progress to faster movements</li>
        <li>30 seconds to 1 minute, several times daily</li>
      </ul>

      <h3>2. Standing Balance</h3>
      <ul>
        <li>Stand with feet together, eyes open—30-60 seconds</li>
        <li>Progress to eyes closed</li>
        <li>Progress to tandem stance (heel to toe)</li>
        <li>Progress to single-leg stance</li>
      </ul>

      <h3>3. Walking with Head Turns</h3>
      <ul>
        <li>Walk in a straight line while turning head side to side</li>
        <li>Start slowly</li>
        <li>Progress speed as tolerated</li>
      </ul>

      <h2>Cognitive Recovery</h2>
      <p>
        Return to school/work should also be gradual:
      </p>
      <ul>
        <li>Start with light cognitive tasks (reading, computer work) for short periods</li>
        <li>Take breaks when symptoms increase</li>
        <li>Gradually increase duration and complexity</li>
        <li>Full return to cognitive demands should parallel physical return</li>
      </ul>

      <h2>When to Seek Help</h2>
      <p>
        Contact a healthcare provider if:
      </p>
      <ul>
        <li>Symptoms worsen over time</li>
        <li>Symptoms persist beyond 2-4 weeks (adults) or 4 weeks (children)</li>
        <li>You develop new symptoms</li>
        <li>You have severe headaches, repeated vomiting, or seizures</li>
        <li>You have significant memory problems or confusion</li>
        <li>You have weakness, numbness, or coordination problems</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Brief initial rest (24-48 hours), then gradual return to activity</li>
        <li>Early, controlled exercise speeds recovery—don't wait weeks to start</li>
        <li>Progress through stages only when symptoms allow</li>
        <li>Monitor symptoms before, during, and after exercise</li>
        <li>If symptoms significantly worsen, step back to the previous stage</li>
        <li>Get medical clearance before contact activities</li>
        <li>Most concussions resolve within 2-4 weeks with proper management</li>
      </ul>

      <p>
        Concussion recovery requires patience and careful progression, but most people recover fully. The key is finding the right balance—enough activity to promote recovery without pushing so hard that symptoms worsen. Follow the graduated protocol, listen to your body, and work with healthcare providers if symptoms persist. Your brain will heal.
      </p>
    </BlogPost>
  )
}
