import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Groin Strain Exercises: Recovery and Prevention Guide | FoundationalRehab',
  description: 'Evidence-based exercises for groin strain recovery. Learn progressive strengthening, stretching, and return-to-sport protocols for adductor injuries.',
  keywords: ['groin strain exercises', 'adductor strain recovery', 'pulled groin treatment', 'groin injury rehab', 'adductor strengthening'],
  openGraph: {
    title: 'Groin Strain Exercises: Recovery and Prevention Guide',
    description: 'Comprehensive exercise guide for groin strain recovery and prevention.',
    type: 'article',
  },
};

export default function GroinStrainExercises() {
  return (
    <BlogPost
      title="Groin Strain Exercises: Recovery and Prevention Guide"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Hip", "Sports Injury", "Rehabilitation"]}
    >
      <p className="lead">
        A groin strain—that sharp pain in your inner thigh when you kick, sprint, 
        or change direction—can sideline you for weeks if not handled properly. 
        The adductor muscles are stubborn healers, but the right progressive rehab 
        gets you back faster and stronger than before.
      </p>

      <h2>Understanding Groin Strains</h2>
      <p>
        The groin refers to the adductor muscle group on your inner thigh. These 
        muscles pull your leg toward your midline (adduction) and are crucial for 
        stability during single-leg activities, cutting, and kicking.
      </p>

      <h3>Strain Grades</h3>
      <ul>
        <li><strong>Grade 1 (Mild):</strong> Minor fiber damage, minimal pain, little strength loss. Recovery: 1-2 weeks.</li>
        <li><strong>Grade 2 (Moderate):</strong> Partial tear, significant pain, noticeable weakness. Recovery: 3-6 weeks.</li>
        <li><strong>Grade 3 (Severe):</strong> Complete tear, severe pain, major strength loss. Recovery: 8-12+ weeks, may need surgery.</li>
      </ul>

      <h3>Common Causes</h3>
      <ul>
        <li>Sudden acceleration or direction change</li>
        <li>Kicking (especially soccer, hockey)</li>
        <li>Overstretching (splits, wide lunges)</li>
        <li>Inadequate warm-up</li>
        <li>Weak or fatigued adductors</li>
        <li>Previous groin injury (biggest risk factor)</li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <p className="font-semibold text-red-800">When to Seek Medical Attention</p>
        <p className="text-red-700">
          See a doctor if you heard a &quot;pop,&quot; have severe bruising, can&apos;t bear 
          weight, or have pain in the lower abdomen (possible sports hernia). 
          Grade 3 tears may need imaging and specialist evaluation.
        </p>
      </div>

      <h2>Phase 1: Acute Phase (Days 1-5)</h2>
      <p>
        Protect the injury while maintaining gentle movement.
      </p>

      <h3>PRICE Protocol</h3>
      <ul>
        <li><strong>Protection:</strong> Avoid activities that cause pain</li>
        <li><strong>Rest:</strong> Relative rest—not complete immobility</li>
        <li><strong>Ice:</strong> 15-20 minutes every 2-3 hours for first 48-72 hours</li>
        <li><strong>Compression:</strong> Compression shorts can provide support</li>
        <li><strong>Elevation:</strong> When resting, elevate the leg slightly</li>
      </ul>

      <h3>Gentle Range of Motion</h3>
      <p>
        Early movement promotes healing, but stay within pain-free ranges:
      </p>
      <ol>
        <li>Lie on your back, gently slide the affected leg out to the side</li>
        <li>Only go as far as is comfortable—no stretching sensation</li>
        <li>Slide back to center</li>
        <li>10-15 reps, 3-4 times daily</li>
      </ol>

      <h3>Isometric Adduction (Pain-Free)</h3>
      <p>
        Begin isometrics when they can be done without pain:
      </p>
      <ol>
        <li>Lie on your back, knees bent, feet flat</li>
        <li>Place a pillow or ball between your knees</li>
        <li>Gently squeeze (20-30% effort initially)</li>
        <li>Hold 5-10 seconds</li>
        <li>10 reps, 3 sets, several times daily</li>
      </ol>

      <h2>Phase 2: Early Rehabilitation (Days 5-14)</h2>
      <p>
        Progress to longer holds and gentle stretching as pain allows.
      </p>

      <h3>Progressive Isometrics</h3>
      <ol>
        <li>Same squeeze exercise as Phase 1</li>
        <li>Gradually increase effort (40%, 60%, 80%)</li>
        <li>Hold for longer (15-30 seconds)</li>
        <li>Progress to squeezing at different knee angles</li>
      </ol>

      <h3>Side-Lying Adduction</h3>
      <ol>
        <li>Lie on your injured side</li>
        <li>Top leg bent and placed in front for stability</li>
        <li>Lift your bottom (injured) leg toward the ceiling</li>
        <li>Keep the movement controlled and pain-free</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h3>Gentle Adductor Stretch</h3>
      <p>
        Only when stretching doesn&apos;t reproduce pain:
      </p>
      <ol>
        <li>Sit on the floor, soles of feet together (butterfly position)</li>
        <li>Let knees drop gently—DON&apos;T push them down</li>
        <li>Sit tall, feel mild stretch in inner thighs</li>
        <li>Hold 20-30 seconds</li>
        <li>This should feel like gentle tension, not pain</li>
      </ol>

      <h3>Supine Hip Flexion/Extension</h3>
      <p>
        Maintains hip mobility without stressing adductors:
      </p>
      <ol>
        <li>Lie on your back</li>
        <li>Slide heel toward buttock, then back out</li>
        <li>Keep the motion in the sagittal plane (no side movement)</li>
        <li>15-20 reps each leg</li>
      </ol>

      <h2>Phase 3: Strengthening (Weeks 2-4)</h2>
      <p>
        Progressive loading is key. The Copenhagen adduction protocol has strong 
        research support for groin injury rehab and prevention.
      </p>

      <h3>Copenhagen Adduction (Progression)</h3>
      <p>
        <strong>Level 1: Short Lever</strong>
      </p>
      <ol>
        <li>Side plank position with top leg on a bench, bottom leg free</li>
        <li>Top leg bent at knee (knee on bench, not foot)</li>
        <li>Lift bottom leg to meet the bench</li>
        <li>Hold 2-3 seconds, lower with control</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <p>
        <strong>Level 2: Long Lever</strong>
      </p>
      <ol>
        <li>Same position but top leg straight (foot on bench)</li>
        <li>This increases the lever arm and difficulty</li>
        <li>Lift bottom leg to meet bench</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <p>
        <strong>Level 3: Full Copenhagen</strong>
      </p>
      <ol>
        <li>Side plank on elbow, top foot on bench</li>
        <li>Lift hips AND bottom leg simultaneously</li>
        <li>Hold the side plank position with adductor engagement</li>
        <li>3 sets of 5-8 each side</li>
      </ol>

      <h3>Standing Adduction with Band</h3>
      <ol>
        <li>Attach band to a low anchor point</li>
        <li>Loop around the ankle of your injured leg</li>
        <li>Stand sideways to the anchor</li>
        <li>Pull your leg across your body against resistance</li>
        <li>Control the return</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Sumo Squat</h3>
      <ol>
        <li>Wide stance, toes turned out 30-45 degrees</li>
        <li>Squat down, keeping knees tracking over toes</li>
        <li>Feel adductors working to control the movement</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Lateral Lunge</h3>
      <ol>
        <li>Stand with feet together</li>
        <li>Step wide to one side, bending that knee</li>
        <li>Keep the other leg straight</li>
        <li>Push back to start</li>
        <li>Start shallow, progress deeper as tolerated</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <h2>Phase 4: Sport-Specific Preparation (Weeks 4-6+)</h2>
      <p>
        Progress to dynamic movements that mimic your sport demands.
      </p>

      <h3>Lateral Shuffles</h3>
      <ol>
        <li>Athletic stance, feet hip-width apart</li>
        <li>Shuffle sideways, staying low</li>
        <li>Start slow, progress speed as tolerated</li>
        <li>2-3 sets of 30-60 seconds</li>
      </ol>

      <h3>Carioca (Grapevine)</h3>
      <ol>
        <li>Move sideways, crossing one foot in front, then behind</li>
        <li>Rotate hips with each crossover</li>
        <li>Challenges adductors in a dynamic pattern</li>
        <li>2-3 sets of 30-60 seconds each direction</li>
      </ol>

      <h3>Resisted Kicking</h3>
      <p>
        For soccer, hockey, martial arts:
      </p>
      <ol>
        <li>Attach band to ankle</li>
        <li>Practice kicking motion against resistance</li>
        <li>Start with slow, controlled movements</li>
        <li>Progress to faster, more powerful kicks</li>
        <li>3 sets of 10-15 each leg</li>
      </ol>

      <h3>Cutting Progressions</h3>
      <ol>
        <li><strong>45-degree cuts:</strong> Jog into a 45-degree direction change</li>
        <li><strong>90-degree cuts:</strong> Progress to sharper angles</li>
        <li><strong>Reactive cuts:</strong> Respond to visual cues</li>
        <li>Start at 50% speed, progress to 100%</li>
      </ol>

      <h2>Return to Sport Criteria</h2>
      <p>
        Don&apos;t rush back. Meet these benchmarks first:
      </p>
      <ul>
        <li>Full, pain-free range of motion</li>
        <li>Equal strength to uninjured side (test with Copenhagen hold)</li>
        <li>Can perform sport-specific movements at full speed without pain</li>
        <li>No pain the day after intense training</li>
        <li>Psychologically ready and confident</li>
      </ul>

      <h3>Return Protocol</h3>
      <ol>
        <li><strong>Week 1:</strong> Light jogging, 50% intensity drills</li>
        <li><strong>Week 2:</strong> Increase to 75% intensity</li>
        <li><strong>Week 3:</strong> Full training without contact</li>
        <li><strong>Week 4:</strong> Full training with contact/competition</li>
      </ol>

      <h2>Prevention Program</h2>
      <p>
        The Copenhagen adduction protocol significantly reduces groin injury risk. 
        Include it in your regular training:
      </p>

      <h3>In-Season Maintenance</h3>
      <ul>
        <li>Copenhagen adduction: 2-3 sets of 5-8, 2x per week</li>
        <li>Sumo squats: 2 sets of 10, 2x per week</li>
        <li>Dynamic adductor stretches in warm-up</li>
      </ul>

      <h3>Pre-Season Preparation</h3>
      <ul>
        <li>Build up Copenhagen progressions over 4-6 weeks</li>
        <li>Include lateral lunges and Cossack squats</li>
        <li>Gradually increase cutting and kicking intensity</li>
      </ul>

      <h2>Sample Weekly Program</h2>

      <h3>Phase 2-3 (Weeks 2-4)</h3>
      <p><strong>Daily:</strong></p>
      <ul>
        <li>Isometric adduction: 3 × 15 sec holds</li>
        <li>Gentle butterfly stretch: 3 × 20 sec</li>
      </ul>

      <p><strong>Every other day:</strong></p>
      <ol>
        <li>Side-lying adduction: 3 × 12</li>
        <li>Copenhagen Level 1: 3 × 8 each side</li>
        <li>Standing band adduction: 3 × 12</li>
        <li>Sumo squat: 3 × 10</li>
        <li>Lateral lunge (shallow): 2 × 8 each side</li>
      </ol>

      <h3>Phase 4 (Weeks 4-6)</h3>
      <p><strong>3x per week:</strong></p>
      <ol>
        <li>Copenhagen Level 2-3: 3 × 8 each side</li>
        <li>Sumo squat (weighted): 3 × 10</li>
        <li>Lateral lunge (full depth): 3 × 10 each side</li>
        <li>Cossack squat: 2 × 8 each side</li>
        <li>Lateral shuffles: 3 × 45 sec</li>
        <li>Carioca: 2 × 30 sec each direction</li>
        <li>Sport-specific drills at progressive intensity</li>
      </ol>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Don&apos;t stretch aggressively early:</strong> Protect the healing tissue first</li>
        <li><strong>Isometrics before dynamics:</strong> Build strength safely before adding movement</li>
        <li><strong>Copenhagen protocol works:</strong> Strong evidence for both rehab and prevention</li>
        <li><strong>Progress gradually:</strong> Rush the return, and you&apos;ll likely re-injure</li>
        <li><strong>Prevention is key:</strong> Previous groin injury is the biggest risk factor for future injury</li>
        <li><strong>Meet criteria before returning:</strong> Equal strength, full ROM, pain-free sport movements</li>
      </ul>

      <p>
        Groin strains are frustrating because they feel better before they&apos;re fully 
        healed, tempting you to return too soon. Be patient, follow the progression, 
        and you&apos;ll come back stronger with a lower risk of re-injury. The Copenhagen 
        adduction protocol is your best friend—both for recovery and for making sure 
        this doesn&apos;t happen again.
      </p>
    </BlogPost>
  );
}
