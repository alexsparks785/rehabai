import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Thoracic Outlet Syndrome Exercises: Relieve Nerve and Vascular Compression | FoundationalRehab',
  description: 'Evidence-based exercises for thoracic outlet syndrome (TOS). Learn stretches, strengthening, and postural corrections for nerve and vascular symptom relief.',
  keywords: ['thoracic outlet syndrome exercises', 'TOS treatment', 'scalene stretches', 'first rib mobilization', 'arm numbness exercises'],
  openGraph: {
    title: 'Thoracic Outlet Syndrome Exercises',
    description: 'Comprehensive exercise guide for thoracic outlet syndrome relief.',
    type: 'article',
  },
};

export default function ThoracicOutletSyndromeExercises() {
  return (
    <BlogPost
      title="Thoracic Outlet Syndrome Exercises: Relieve Nerve and Vascular Compression"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Neck Pain", "Nerve", "Rehabilitation", "Posture"]}
    >
      <p className="lead">
        Numbness down your arm, cold fingers, or aching in your neck and shoulder 
        that gets worse when you raise your arms overhead—these could be signs of 
        thoracic outlet syndrome (TOS). This often-misdiagnosed condition responds 
        well to targeted exercise when properly identified.
      </p>

      <h2>Understanding Thoracic Outlet Syndrome</h2>
      <p>
        The thoracic outlet is the space between your collarbone and first rib where 
        nerves and blood vessels pass from your neck to your arm. When this space 
        narrows, compression occurs.
      </p>

      <h3>Types of TOS</h3>
      <ul>
        <li>
          <strong>Neurogenic TOS (95%):</strong> Compression of the brachial plexus 
          nerves. Causes pain, numbness, tingling, weakness in arm/hand.
        </li>
        <li>
          <strong>Venous TOS (4%):</strong> Compression of the subclavian vein. 
          Causes arm swelling, discoloration, heaviness.
        </li>
        <li>
          <strong>Arterial TOS (1%):</strong> Compression of the subclavian artery. 
          Causes coldness, pallor, weakness. Medical emergency if acute.
        </li>
      </ul>

      <h3>Common Causes</h3>
      <ul>
        <li>Poor posture (forward head, rounded shoulders)</li>
        <li>Tight scalene muscles</li>
        <li>Elevated first rib</li>
        <li>Cervical rib (extra rib—congenital)</li>
        <li>Repetitive overhead activity</li>
        <li>Trauma (whiplash, clavicle fracture)</li>
        <li>Muscle hypertrophy (weightlifters)</li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <p className="font-semibold text-red-800">When to Seek Immediate Care</p>
        <p className="text-red-700">
          Sudden arm swelling, color changes (blue/pale), severe pain, or weakness 
          requires immediate medical evaluation. Arterial TOS can be a vascular 
          emergency. Most TOS is neurogenic and manageable, but rule out serious 
          vascular involvement first.
        </p>
      </div>

      <h2>Posture Correction: The Foundation</h2>
      <p>
        Poor posture is the most common contributor to TOS. Correcting it opens 
        the thoracic outlet.
      </p>

      <h3>Chin Tucks</h3>
      <ol>
        <li>Sit or stand with good posture</li>
        <li>Draw chin straight back (make a double chin)</li>
        <li>Hold 5 seconds</li>
        <li>10-15 reps, multiple times daily</li>
      </ol>

      <h3>Shoulder Blade Squeezes</h3>
      <ol>
        <li>Sit or stand tall</li>
        <li>Squeeze shoulder blades together and down</li>
        <li>Don&apos;t shrug—keep shoulders away from ears</li>
        <li>Hold 5 seconds</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Wall Angels</h3>
      <ol>
        <li>Stand with back against wall</li>
        <li>Arms in goalpost position (elbows bent 90°)</li>
        <li>Keep back of head, upper back, and arms touching wall</li>
        <li>Slide arms up and down</li>
        <li>2-3 sets of 10</li>
      </ol>

      <h2>Scalene Stretches</h2>
      <p>
        The scalene muscles on the side of your neck are often tight in TOS. 
        They directly compress the thoracic outlet when shortened.
      </p>

      <h3>Anterior Scalene Stretch</h3>
      <ol>
        <li>Sit in a chair, hold the seat with one hand</li>
        <li>Tilt head away from that side (ear toward opposite shoulder)</li>
        <li>Rotate head slightly toward the stretched side</li>
        <li>Look up slightly</li>
        <li>Hold 20-30 seconds each side</li>
        <li>Should feel stretch on front/side of neck</li>
      </ol>

      <h3>Middle Scalene Stretch</h3>
      <ol>
        <li>Same starting position</li>
        <li>Tilt head away from anchored side</li>
        <li>Keep face pointing forward (no rotation)</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h3>Posterior Scalene Stretch</h3>
      <ol>
        <li>Same starting position</li>
        <li>Tilt head away from anchored side</li>
        <li>Rotate head slightly away from stretched side</li>
        <li>Look down slightly</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h2>Pectoralis Stretches</h2>
      <p>
        Tight pecs pull shoulders forward, narrowing the thoracic outlet.
      </p>

      <h3>Doorway Pec Stretch</h3>
      <ol>
        <li>Stand in doorway, forearm on frame at 90°</li>
        <li>Step through with same-side foot</li>
        <li>Feel stretch across chest</li>
        <li>Hold 30-45 seconds</li>
        <li>Repeat at different arm heights (low, middle, high)</li>
      </ol>

      <h3>Corner Stretch</h3>
      <ol>
        <li>Face a corner, forearms on each wall</li>
        <li>Lean into corner</li>
        <li>Feel stretch across both sides of chest</li>
        <li>Hold 30-45 seconds</li>
      </ol>

      <h2>First Rib Mobilization</h2>
      <p>
        An elevated first rib reduces space in the thoracic outlet.
      </p>

      <h3>First Rib Self-Mobilization</h3>
      <ol>
        <li>Place a tennis ball or lacrosse ball behind your collarbone, above the first rib</li>
        <li>Lean against a wall to apply pressure</li>
        <li>Take deep breaths—feel the rib move down with exhale</li>
        <li>Gently roll side to side</li>
        <li>1-2 minutes each side</li>
        <li>Caution: This area has important structures—be gentle</li>
      </ol>

      <h3>Breath Work for First Rib</h3>
      <ol>
        <li>Sit comfortably, one hand on upper chest</li>
        <li>Inhale through nose, directing breath to belly (not chest)</li>
        <li>Exhale slowly, letting shoulders drop</li>
        <li>Focus on keeping upper chest still during breathing</li>
        <li>5-10 breaths, several times daily</li>
      </ol>

      <h2>Nerve Glides</h2>
      <p>
        Gentle nerve mobilization can reduce symptoms when nerves are compressed.
      </p>

      <h3>Brachial Plexus Glide</h3>
      <ol>
        <li>Stand with arm at side</li>
        <li>Tilt head away from that side</li>
        <li>Extend arm out to side at 90°, palm up</li>
        <li>Slowly extend wrist (fingers toward ceiling)</li>
        <li>Hold 3-5 seconds, release</li>
        <li>10-15 reps each side</li>
        <li>Should feel gentle stretch, not pain or strong tingling</li>
      </ol>

      <h3>ULTT1 (Upper Limb Tension Test as Glide)</h3>
      <ol>
        <li>Lie on back, shoulder at edge of bed</li>
        <li>Arm out to side at 90°, palm up</li>
        <li>Straighten elbow</li>
        <li>Extend wrist back</li>
        <li>Tilt head away from arm (increases tension)</li>
        <li>Tilt head toward arm (decreases tension)</li>
        <li>Oscillate head position 10-15 times</li>
      </ol>

      <h2>Strengthening Exercises</h2>
      <p>
        Strengthen the muscles that support good posture and open the thoracic outlet.
      </p>

      <h3>Lower Trapezius Strengthening</h3>
      <ol>
        <li>Lie face down, arms overhead in Y position</li>
        <li>Lift arms slightly, squeezing shoulder blades down and together</li>
        <li>Hold 5 seconds</li>
        <li>3 sets of 10</li>
      </ol>

      <h3>Serratus Anterior Strengthening</h3>
      <ol>
        <li>Wall push-up position</li>
        <li>Push through hands, rounding upper back (protraction)</li>
        <li>Return to start</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Deep Neck Flexor Training</h3>
      <ol>
        <li>Lie on back without pillow</li>
        <li>Perform chin tuck, flattening neck curve</li>
        <li>Hold 10 seconds</li>
        <li>3 sets of 10</li>
      </ol>

      <h3>Rows</h3>
      <ol>
        <li>Band or cable row</li>
        <li>Focus on squeezing shoulder blades together</li>
        <li>Keep shoulders down throughout</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h2>Lifestyle Modifications</h2>

      <h3>Sleep Position</h3>
      <ul>
        <li>Avoid sleeping on affected side</li>
        <li>Don&apos;t sleep with arm overhead</li>
        <li>Use a supportive pillow that keeps neck neutral</li>
      </ul>

      <h3>Workstation Ergonomics</h3>
      <ul>
        <li>Monitor at eye level</li>
        <li>Keyboard at elbow height</li>
        <li>Avoid reaching forward or overhead repeatedly</li>
        <li>Take breaks every 30-60 minutes</li>
      </ul>

      <h3>Activities to Modify or Avoid</h3>
      <ul>
        <li>Prolonged overhead work</li>
        <li>Heavy carrying (especially with straps on shoulders)</li>
        <li>Sleeping with arm under head</li>
        <li>Swimming (especially freestyle with arms overhead)</li>
      </ul>

      <h2>Daily Exercise Routine</h2>

      <h3>Morning (10 minutes)</h3>
      <ol>
        <li>Chin tucks: 15 reps</li>
        <li>Shoulder blade squeezes: 15 reps</li>
        <li>Scalene stretches (all three): 20 sec each side</li>
        <li>Doorway pec stretch: 30 sec each height</li>
        <li>Brachial plexus glides: 10 each side</li>
        <li>Diaphragmatic breathing: 10 breaths</li>
      </ol>

      <h3>Strength Days (3x per week, add to morning routine)</h3>
      <ol>
        <li>Wall angels: 2 × 10</li>
        <li>Lower trap Y raises: 3 × 10</li>
        <li>Serratus wall push-ups: 3 × 12</li>
        <li>Rows: 3 × 12</li>
        <li>Deep neck flexor holds: 3 × 10 sec</li>
      </ol>

      <h2>Progress Indicators</h2>
      <p>Signs that treatment is working:</p>
      <ul>
        <li>Decreased frequency of numbness/tingling</li>
        <li>Less pain with overhead activities</li>
        <li>Improved posture (noticeable in mirror)</li>
        <li>Better arm strength and grip</li>
        <li>Able to sleep without symptoms</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <ul>
        <li>No improvement after 6-8 weeks of consistent exercise</li>
        <li>Worsening symptoms</li>
        <li>Significant weakness in arm or hand</li>
        <li>Muscle wasting (visible shrinking)</li>
        <li>Color changes in arm or hand</li>
        <li>Need to rule out other conditions (cervical disc, carpal tunnel)</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Posture is primary:</strong> Forward head and rounded shoulders compress the outlet</li>
        <li><strong>Stretch the scalenes:</strong> These muscles directly narrow the thoracic outlet</li>
        <li><strong>Open the chest:</strong> Tight pecs pull shoulders forward</li>
        <li><strong>Mobilize the first rib:</strong> An elevated first rib reduces space</li>
        <li><strong>Strengthen postural muscles:</strong> Lower traps, serratus, deep neck flexors</li>
        <li><strong>Be patient:</strong> TOS often takes 3-6 months to significantly improve</li>
        <li><strong>Rule out vascular TOS:</strong> Swelling or color changes need medical evaluation</li>
      </ul>

      <p>
        Thoracic outlet syndrome can be frustrating to diagnose and treat, but most 
        neurogenic cases respond well to consistent postural correction, stretching, 
        and strengthening. Focus on opening the space where compression occurs, and 
        be patient—improvement often takes months but is achievable.
      </p>
    </BlogPost>
  );
}
