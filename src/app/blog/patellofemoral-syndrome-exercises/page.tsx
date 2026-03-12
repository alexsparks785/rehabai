import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Patellofemoral Syndrome Exercises: Fix Runner\'s Knee | FoundationalRehab',
  description: 'Evidence-based exercises for patellofemoral pain syndrome (runner\'s knee). Learn hip strengthening, quad exercises, and activity modifications for lasting relief.',
  keywords: ['patellofemoral syndrome exercises', 'runner\'s knee exercises', 'PFPS treatment', 'anterior knee pain', 'kneecap pain exercises'],
  openGraph: {
    title: 'Patellofemoral Syndrome Exercises: Fix Runner\'s Knee',
    description: 'Comprehensive exercise guide for patellofemoral pain syndrome relief and prevention.',
    type: 'article',
  },
};

export default function PatellofemoralSyndromeExercises() {
  return (
    <BlogPost
      title="Patellofemoral Syndrome Exercises: Fix Runner's Knee"
      publishedDate="2026-03-12"
      readTime="10 min read"
      tags={["Knee", "Running", "Rehabilitation"]}
    >
      <p className="lead">
        That aching pain at the front of your knee when you run, climb stairs, or sit 
        too long? It&apos;s likely patellofemoral pain syndrome (PFPS), commonly called 
        runner&apos;s knee. Despite the name, you don&apos;t have to be a runner to get it—and 
        the solution usually involves your hips more than your knees.
      </p>

      <h2>Understanding Patellofemoral Pain Syndrome</h2>
      <p>
        PFPS occurs when the kneecap (patella) doesn&apos;t track properly in its groove 
        on the thighbone (femur). This causes irritation of the cartilage on the 
        underside of the kneecap and surrounding tissues.
      </p>

      <h3>Common Causes</h3>
      <ul>
        <li><strong>Weak hip muscles:</strong> Poor control of the femur affects patellar tracking</li>
        <li><strong>Quad imbalance:</strong> Weak VMO (inner quad) vs. strong outer quad</li>
        <li><strong>Overuse:</strong> Too much, too soon, too often</li>
        <li><strong>Tight structures:</strong> IT band, quads, hamstrings, calves</li>
        <li><strong>Foot mechanics:</strong> Overpronation affects knee alignment</li>
        <li><strong>Training errors:</strong> Sudden increases in volume or intensity</li>
      </ul>

      <h3>Typical Symptoms</h3>
      <ul>
        <li>Aching pain around or behind the kneecap</li>
        <li>Worse with stairs (especially going down), squatting, running</li>
        <li>&quot;Movie theater sign&quot;: Pain after prolonged sitting with knee bent</li>
        <li>Grinding or crunching sensation (crepitus)</li>
        <li>Knee &quot;gives way&quot; or feels unstable</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="font-semibold text-blue-800">The Hip-Knee Connection</p>
        <p className="text-blue-700">
          Research consistently shows that hip strengthening is MORE effective than 
          quad-only exercises for PFPS. When your hip muscles are weak, your thighbone 
          rotates inward, pushing the kneecap outward against its groove. Fix the hip, 
          fix the tracking.
        </p>
      </div>

      <h2>Phase 1: Pain Control and Load Management</h2>
      <p>
        First priority: reduce irritation while maintaining activity.
      </p>

      <h3>Modify Aggravating Activities</h3>
      <ul>
        <li><strong>Running:</strong> Reduce mileage by 50%, avoid hills initially</li>
        <li><strong>Stairs:</strong> Lead with your good leg going up, affected leg going down</li>
        <li><strong>Sitting:</strong> Straighten your knee periodically, avoid prolonged flexion</li>
        <li><strong>Squats/lunges:</strong> Limit depth to pain-free range</li>
      </ul>

      <h3>Quad Sets</h3>
      <p>
        Gentle quad activation without joint stress:
      </p>
      <ol>
        <li>Sit or lie with leg straight</li>
        <li>Tighten your quadriceps, pushing the back of your knee down</li>
        <li>Focus on the inner quad (VMO) near the kneecap</li>
        <li>Hold 5-10 seconds</li>
        <li>3 sets of 15-20, several times daily</li>
      </ol>

      <h3>Straight Leg Raises</h3>
      <ol>
        <li>Lie on your back, one knee bent, affected leg straight</li>
        <li>Tighten your quad (do a quad set)</li>
        <li>Lift the straight leg about 12 inches</li>
        <li>Hold 2-3 seconds, lower slowly</li>
        <li>3 sets of 15</li>
      </ol>

      <h2>Phase 2: Hip Strengthening (The Key)</h2>
      <p>
        This is where the magic happens. Strong hips control femoral rotation and 
        improve patellar tracking.
      </p>

      <h3>Clamshells</h3>
      <p>
        Targets gluteus medius:
      </p>
      <ol>
        <li>Lie on your side, hips stacked, knees bent 45 degrees</li>
        <li>Keep feet together, lift top knee toward ceiling</li>
        <li>Don&apos;t let your pelvis rock backward</li>
        <li>Lower with control</li>
        <li>3 sets of 20 each side</li>
        <li>Add a resistance band when this becomes easy</li>
      </ol>

      <h3>Side-Lying Hip Abduction</h3>
      <ol>
        <li>Lie on your side, bottom knee bent for stability</li>
        <li>Top leg straight, foot pointing forward (not up)</li>
        <li>Lift top leg 6-8 inches, keeping it in line with body or slightly behind</li>
        <li>3 sets of 15-20 each side</li>
      </ol>

      <h3>Glute Bridge</h3>
      <ol>
        <li>Lie on your back, knees bent, feet flat</li>
        <li>Squeeze glutes and lift hips until body forms straight line</li>
        <li>Don&apos;t hyperextend your back</li>
        <li>Hold 2-3 seconds at top</li>
        <li>3 sets of 15</li>
      </ol>

      <h3>Single-Leg Glute Bridge</h3>
      <p>
        Progress from double-leg when ready:
      </p>
      <ol>
        <li>Set up for regular bridge</li>
        <li>Extend one leg straight</li>
        <li>Drive through your planted heel to lift hips</li>
        <li>Keep hips level—don&apos;t let the unsupported side drop</li>
        <li>3 sets of 10-12 each side</li>
      </ol>

      <h3>Lateral Band Walks (Monster Walks)</h3>
      <ol>
        <li>Place resistance band around ankles or just above knees</li>
        <li>Stand with knees slightly bent, feet hip-width apart</li>
        <li>Step sideways, maintaining tension on the band</li>
        <li>Don&apos;t let feet come together—maintain the width</li>
        <li>15-20 steps each direction, 2-3 sets</li>
      </ol>

      <h3>Hip Hikes</h3>
      <p>
        Strengthens the hip abductors in a functional position:
      </p>
      <ol>
        <li>Stand on a step with one leg hanging off the side</li>
        <li>Keep your standing leg straight</li>
        <li>Drop the hanging hip down (pelvis tilts), then &quot;hike&quot; it up</li>
        <li>The motion comes from your standing hip, not your back</li>
        <li>3 sets of 15 each side</li>
      </ol>

      <h2>Phase 3: Knee Strengthening</h2>
      <p>
        Once hips are stronger, progress to more knee-focused strengthening.
      </p>

      <h3>Terminal Knee Extension</h3>
      <p>
        Isolates the VMO (inner quad):
      </p>
      <ol>
        <li>Place a resistance band around a sturdy object at knee height</li>
        <li>Step into the band so it&apos;s behind your knee</li>
        <li>Start with knee bent about 30 degrees</li>
        <li>Straighten your knee against the band&apos;s resistance</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>Step-Downs</h3>
      <p>
        Critical for stair tolerance:
      </p>
      <ol>
        <li>Stand on a 4-6 inch step</li>
        <li>Slowly lower your non-stance foot toward the ground</li>
        <li>Touch your heel lightly, don&apos;t transfer weight</li>
        <li>Return to standing</li>
        <li>Focus on keeping your knee tracking over your 2nd toe—no caving inward</li>
        <li>3 sets of 10-15 each leg</li>
      </ol>

      <h3>Wall Sits</h3>
      <p>
        Isometric quad strengthening in a controlled position:
      </p>
      <ol>
        <li>Lean against a wall, feet about 2 feet from wall</li>
        <li>Slide down until knees are bent 45-60 degrees (not deeper initially)</li>
        <li>Hold 20-60 seconds</li>
        <li>Progress deeper as tolerated (but stop before 90 degrees if painful)</li>
      </ol>

      <h3>Mini Squats</h3>
      <ol>
        <li>Stand with feet hip-width apart</li>
        <li>Squat down 45-60 degrees (quarter squat)</li>
        <li>Keep weight on heels, knees tracking over toes</li>
        <li>Push through heels to stand</li>
        <li>3 sets of 15</li>
      </ol>

      <h3>Single-Leg Squat (Progression)</h3>
      <p>
        Once double-leg exercises are pain-free:
      </p>
      <ol>
        <li>Stand on one leg</li>
        <li>Slowly lower into a partial squat (start with 30-45 degrees)</li>
        <li>Focus on keeping knee from collapsing inward</li>
        <li>Use a mirror or video to check form</li>
        <li>3 sets of 8-12 each leg</li>
      </ol>

      <h2>Flexibility Work</h2>
      <p>
        Tightness contributes to poor tracking. Address these areas:
      </p>

      <h3>Quad Stretch</h3>
      <ol>
        <li>Stand holding something for balance</li>
        <li>Grab your ankle and pull heel toward buttock</li>
        <li>Keep knees together, tuck your tailbone under</li>
        <li>Hold 30-60 seconds each side</li>
      </ol>

      <h3>IT Band Foam Rolling</h3>
      <p>
        The IT band attaches near the kneecap and affects tracking:
      </p>
      <ol>
        <li>Lie on your side with foam roller under outer thigh</li>
        <li>Roll from hip to just above knee</li>
        <li>Pause on tender spots for 30-60 seconds</li>
        <li>2-3 minutes each side</li>
      </ol>

      <h3>Calf Stretch</h3>
      <p>
        Tight calves affect knee mechanics:
      </p>
      <ol>
        <li>Stand facing a wall, one foot back</li>
        <li>Keep rear heel on ground, leg straight</li>
        <li>Lean into wall until you feel stretch in calf</li>
        <li>Hold 30 seconds</li>
        <li>Repeat with knee slightly bent (hits soleus)</li>
      </ol>

      <h3>Hip Flexor Stretch</h3>
      <ol>
        <li>Half-kneeling position, back knee on cushion</li>
        <li>Tuck tailbone under (posterior pelvic tilt)</li>
        <li>Shift weight forward slightly</li>
        <li>Feel stretch in front of back hip</li>
        <li>Hold 30-60 seconds each side</li>
      </ol>

      <h2>Sample Weekly Program</h2>

      <h3>Phase 1-2 (Weeks 1-4)</h3>
      <p><strong>Daily:</strong></p>
      <ul>
        <li>Quad sets: 3 × 15</li>
        <li>Straight leg raises: 3 × 15</li>
        <li>Clamshells: 3 × 20</li>
        <li>Glute bridge: 3 × 15</li>
        <li>Quad stretch: 2 × 30 sec</li>
        <li>IT band rolling: 2 min each side</li>
      </ul>

      <h3>Phase 3 (Weeks 5-8)</h3>
      <p><strong>3-4 times per week:</strong></p>
      <ol>
        <li>Clamshells with band: 3 × 20</li>
        <li>Single-leg glute bridge: 3 × 12</li>
        <li>Lateral band walks: 2 × 20 steps each way</li>
        <li>Hip hikes: 3 × 15</li>
        <li>Terminal knee extension: 3 × 15</li>
        <li>Step-downs: 3 × 12</li>
        <li>Mini squats: 3 × 15</li>
        <li>Wall sit: 3 × 30-60 sec</li>
        <li>All stretches from Phase 1</li>
      </ol>

      <h3>Phase 4 (Weeks 9+)</h3>
      <p>
        Add single-leg squats, progress resistance, begin return to running 
        (if applicable) with a structured program.
      </p>

      <h2>Return to Running Protocol</h2>
      <p>
        If running is your goal, don&apos;t rush back. Follow these criteria:
      </p>

      <h3>Prerequisites</h3>
      <ul>
        <li>Pain-free walking for 30+ minutes</li>
        <li>Pain-free single-leg squat to 60+ degrees</li>
        <li>Step-downs pain-free on both sides</li>
        <li>Can hop on affected leg without pain</li>
      </ul>

      <h3>Return Protocol</h3>
      <ol>
        <li><strong>Week 1:</strong> Walk 4 min, jog 1 min × 4 (20 min total)</li>
        <li><strong>Week 2:</strong> Walk 3 min, jog 2 min × 4</li>
        <li><strong>Week 3:</strong> Walk 2 min, jog 3 min × 4</li>
        <li><strong>Week 4:</strong> Walk 1 min, jog 4 min × 4</li>
        <li><strong>Week 5:</strong> Continuous jog 15-20 min</li>
        <li><strong>Week 6+:</strong> Increase by 10% per week</li>
      </ol>

      <h3>Running Form Tips</h3>
      <ul>
        <li>Increase cadence (aim for 170-180 steps/min)</li>
        <li>Land with foot under your body, not in front</li>
        <li>Avoid overstriding</li>
        <li>Consider gait analysis if problems persist</li>
      </ul>

      <h2>What If Pain Persists?</h2>
      <ul>
        <li><strong>Check form:</strong> Poor exercise technique can perpetuate the problem</li>
        <li><strong>Consider orthotics:</strong> If you overpronate, foot support may help</li>
        <li><strong>Patellar taping:</strong> Can provide short-term relief during exercise</li>
        <li><strong>See a PT:</strong> Hands-on assessment can identify specific deficits</li>
        <li><strong>Don&apos;t ignore it:</strong> Persistent PFPS can lead to cartilage damage</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Hip strength is crucial:</strong> Often more important than quad exercises</li>
        <li><strong>Control the femur:</strong> Strong glutes keep the thighbone from rotating in</li>
        <li><strong>Progress gradually:</strong> Start with isometrics, progress to dynamic exercises</li>
        <li><strong>Don&apos;t neglect flexibility:</strong> IT band, quads, calves all affect tracking</li>
        <li><strong>Modify, don&apos;t stop:</strong> Reduce irritating activities but stay active</li>
        <li><strong>Be patient:</strong> PFPS typically takes 6-12 weeks to resolve with consistent work</li>
      </ul>

      <p>
        Patellofemoral pain syndrome is frustrating but very treatable. The key is 
        recognizing that knee pain often comes from hip weakness. Build strong, 
        stable hips, maintain flexibility, and progress your activities gradually. 
        Most people see significant improvement within 4-8 weeks and full resolution 
        within 3-6 months.
      </p>
    </BlogPost>
  );
}
