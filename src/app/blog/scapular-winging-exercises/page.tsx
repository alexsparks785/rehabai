import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Scapular Winging Exercises: Fix Your Winged Shoulder Blade | FoundationalRehab',
  description: 'Exercises to correct scapular winging from serratus anterior weakness. Learn strengthening progressions for proper shoulder blade control and function.',
  keywords: ['scapular winging exercises', 'winged scapula treatment', 'serratus anterior strengthening', 'shoulder blade sticking out', 'scapular dyskinesis'],
  openGraph: {
    title: 'Scapular Winging Exercises: Fix Your Winged Shoulder Blade',
    description: 'Comprehensive guide to correcting scapular winging through targeted exercise.',
    type: 'article',
  },
};

export default function ScapularWingingExercises() {
  return (
    <BlogPost
      title="Scapular Winging Exercises: Fix Your Winged Shoulder Blade"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Shoulder", "Rehabilitation", "Posture"]}
    >
      <p className="lead">
        When your shoulder blade sticks out like a wing instead of lying flat against 
        your ribcage, you have scapular winging. It looks concerning, can cause shoulder 
        pain, and limits overhead strength—but in most cases, it&apos;s correctable with 
        the right exercises.
      </p>

      <h2>Understanding Scapular Winging</h2>
      <p>
        The scapula (shoulder blade) should glide smoothly along your ribcage as you 
        move your arm. When the muscles that control this movement are weak or damaged, 
        the scapula lifts away from the ribs—creating a visible &quot;wing.&quot;
      </p>

      <h3>Types of Scapular Winging</h3>
      <ul>
        <li>
          <strong>Medial winging (most common):</strong> Inner border lifts off. 
          Usually from serratus anterior weakness.
        </li>
        <li>
          <strong>Lateral winging:</strong> Outer border lifts off. Usually from 
          trapezius weakness.
        </li>
      </ul>

      <h3>Common Causes</h3>
      <ul>
        <li><strong>Nerve injury:</strong> Long thoracic nerve (serratus anterior) or spinal accessory nerve (trapezius)</li>
        <li><strong>Muscle weakness:</strong> From disuse, poor posture, or imbalanced training</li>
        <li><strong>Trauma:</strong> Direct injury to shoulder or nerve</li>
        <li><strong>Surgical complication:</strong> After certain chest or neck surgeries</li>
        <li><strong>Overuse:</strong> Repetitive overhead activities without proper conditioning</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">Nerve Injury vs. Weakness</p>
        <p className="text-yellow-700">
          True nerve injuries (like long thoracic nerve palsy) need medical evaluation 
          and may take months to years to recover. Muscle weakness from disuse or 
          imbalance responds well to exercise within weeks to months. If you have 
          sudden onset winging, especially after injury or surgery, see a doctor.
        </p>
      </div>

      <h2>Self-Assessment</h2>
      <h3>Wall Push-Up Test</h3>
      <ol>
        <li>Stand facing a wall, hands at shoulder height</li>
        <li>Slowly push away from the wall (like a push-up)</li>
        <li>Have someone watch your shoulder blades</li>
        <li>If one or both wing out prominently, you have scapular winging</li>
      </ol>

      <h3>Arm Elevation Test</h3>
      <ol>
        <li>Stand with back visible (shirtless or tight shirt)</li>
        <li>Slowly raise arms overhead</li>
        <li>Watch for asymmetric movement or winging</li>
      </ol>

      <h2>Serratus Anterior Exercises</h2>
      <p>
        The serratus anterior is the primary muscle that keeps the scapula flat 
        against the ribs. Strengthening it is essential for most cases of medial winging.
      </p>

      <h3>Serratus Punch (Supine)</h3>
      <ol>
        <li>Lie on your back, arm pointing toward ceiling</li>
        <li>Push your shoulder blade off the floor, reaching toward ceiling</li>
        <li>Your shoulder blade protracts (moves away from spine)</li>
        <li>Return shoulder blade to floor</li>
        <li>3 sets of 15</li>
        <li>Progress to holding a light weight</li>
      </ol>

      <h3>Push-Up Plus</h3>
      <p>
        The &quot;plus&quot; is the key—extra protraction at the top:
      </p>
      <ol>
        <li>Start in push-up position (or on knees, or against wall)</li>
        <li>Perform a push-up</li>
        <li>At the top, push further, rounding your upper back</li>
        <li>Feel shoulder blades spread apart</li>
        <li>Return to normal push-up position</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h3>Wall Slides with Lift-Off</h3>
      <ol>
        <li>Stand with back against wall</li>
        <li>Arms in goalpost position (elbows bent 90°, backs of arms against wall)</li>
        <li>Slide arms up while maintaining wall contact</li>
        <li>At the top, push arms away from wall slightly (serratus activation)</li>
        <li>Lower and repeat</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Dynamic Hug</h3>
      <ol>
        <li>Hold a resistance band with arms extended in front</li>
        <li>Pull band apart slightly (to create tension)</li>
        <li>Now reach forward, protracting shoulder blades (like hugging a large tree)</li>
        <li>Return to start</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Bear Crawl Hold</h3>
      <ol>
        <li>Hands and knees position</li>
        <li>Lift knees 1-2 inches off floor</li>
        <li>Push hard through your hands, spreading shoulder blades</li>
        <li>Don&apos;t let shoulder blades wing—keep them flat</li>
        <li>Hold 20-30 seconds, 3-5 reps</li>
      </ol>

      <h2>Trapezius Exercises</h2>
      <p>
        For lateral winging or overall scapular control, strengthen the trapezius.
      </p>

      <h3>Prone Y Raises</h3>
      <ol>
        <li>Lie face down on bench or floor</li>
        <li>Arms hanging, thumbs up</li>
        <li>Raise arms at 45° angle (forming Y shape)</li>
        <li>Squeeze shoulder blades together</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Prone T Raises</h3>
      <ol>
        <li>Same position</li>
        <li>Raise arms straight out to sides (forming T)</li>
        <li>Squeeze shoulder blades</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Prone W Raises</h3>
      <ol>
        <li>Same position, elbows bent 90°</li>
        <li>Lift arms forming W shape</li>
        <li>Rotate forearms up as you lift</li>
        <li>3 sets of 10</li>
      </ol>

      <h3>Face Pulls</h3>
      <ol>
        <li>Band or cable at face height</li>
        <li>Pull toward face, elbows high and wide</li>
        <li>At the end, externally rotate (pull hands apart)</li>
        <li>Squeeze shoulder blades together at finish</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Shrugs (Upper Traps)</h3>
      <ol>
        <li>Stand holding weights at sides</li>
        <li>Shrug shoulders toward ears</li>
        <li>Hold 2 seconds at top</li>
        <li>Lower with control</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h2>Rhomboid Exercises</h2>
      <p>
        The rhomboids retract (squeeze together) the shoulder blades and help 
        control scapular position.
      </p>

      <h3>Band Pull-Aparts</h3>
      <ol>
        <li>Hold band at shoulder height, arms extended</li>
        <li>Pull band apart by squeezing shoulder blades</li>
        <li>Keep arms straight throughout</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>Rows (Various)</h3>
      <ol>
        <li>Cable, dumbbell, or band rows</li>
        <li>Focus on scapular retraction FIRST, then elbow pull</li>
        <li>Squeeze shoulder blades at the finish</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h2>Scapular Control Drills</h2>
      <p>
        These exercises teach you to control scapular movement consciously.
      </p>

      <h3>Scapular Clocks</h3>
      <ol>
        <li>Stand or lie face down</li>
        <li>Move shoulder blades through all positions:</li>
        <li>Up (elevation) → Back (retraction) → Down (depression) → Forward (protraction)</li>
        <li>Make smooth circles in both directions</li>
        <li>10 circles each direction</li>
      </ol>

      <h3>Floor Angels</h3>
      <ol>
        <li>Lie on back, knees bent, low back flat</li>
        <li>Arms at sides, backs of hands on floor</li>
        <li>Slide arms up toward head (like making a snow angel)</li>
        <li>Keep arms in contact with floor throughout</li>
        <li>Focus on proper scapular movement</li>
        <li>3 sets of 10</li>
      </ol>

      <h3>Quadruped Rocking</h3>
      <ol>
        <li>Hands and knees position</li>
        <li>Rock forward, allowing shoulder blades to wing slightly</li>
        <li>Rock back, pushing through hands to set shoulder blades flat</li>
        <li>Feel the difference between winged and controlled positions</li>
        <li>15-20 reps</li>
      </ol>

      <h2>Sample Weekly Program</h2>

      <h3>Daily (5-10 minutes)</h3>
      <ol>
        <li>Scapular clocks: 10 circles each direction</li>
        <li>Serratus punch (supine): 2 × 15</li>
        <li>Floor angels: 2 × 10</li>
        <li>Band pull-aparts: 2 × 15</li>
      </ol>

      <h3>Strength Days (3x per week, 20 minutes)</h3>
      <ol>
        <li>Push-up plus: 3 × 10-12</li>
        <li>Wall slides with lift-off: 3 × 10</li>
        <li>Prone Y-T-W: 2 × 10 each</li>
        <li>Face pulls: 3 × 12</li>
        <li>Rows (any variation): 3 × 10</li>
        <li>Bear crawl hold: 3 × 20 sec</li>
        <li>Dynamic hug: 2 × 12</li>
      </ol>

      <h2>Progression</h2>
      <h3>Phase 1 (Weeks 1-4): Activation</h3>
      <ul>
        <li>Focus on feeling the muscles work</li>
        <li>Light or no resistance</li>
        <li>Higher reps (15-20)</li>
        <li>Daily practice</li>
      </ul>

      <h3>Phase 2 (Weeks 5-8): Strengthening</h3>
      <ul>
        <li>Add resistance (bands, light weights)</li>
        <li>Moderate reps (10-15)</li>
        <li>Increase push-up difficulty (incline → knee → full)</li>
      </ul>

      <h3>Phase 3 (Weeks 9+): Integration</h3>
      <ul>
        <li>Incorporate into regular training</li>
        <li>Progress to loaded overhead movements</li>
        <li>Maintain with 2-3x per week scapular work</li>
      </ul>

      <h2>When to Seek Help</h2>
      <ul>
        <li>Sudden onset of winging (especially after trauma or surgery)</li>
        <li>No improvement after 6-8 weeks of consistent exercise</li>
        <li>Associated pain or weakness in the arm</li>
        <li>Numbness or tingling</li>
        <li>Winging appeared after a viral illness (may indicate nerve involvement)</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Serratus anterior is key:</strong> Push-up plus and serratus punches are essential</li>
        <li><strong>Address all scapular muscles:</strong> Traps, rhomboids, and serratus work together</li>
        <li><strong>Consistency matters:</strong> Daily activation work accelerates improvement</li>
        <li><strong>Progress slowly:</strong> Master control before adding load</li>
        <li><strong>Watch for nerve issues:</strong> Sudden onset needs medical evaluation</li>
        <li><strong>Be patient:</strong> Noticeable improvement usually takes 6-12 weeks</li>
      </ul>

      <p>
        Scapular winging from muscle weakness responds well to consistent, targeted 
        exercise. Focus on activating and strengthening the serratus anterior and 
        supporting scapular muscles, and you should see improvement within a few 
        months. If winging came on suddenly or doesn&apos;t improve with exercise, get 
        evaluated to rule out nerve injury.
      </p>
    </BlogPost>
  );
}
