import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Core Exercises for Back Pain: Build a Protective Core | FoundationalRehab',
  description: 'Safe core exercises for people with back pain. Learn how to strengthen your core without aggravating your back, plus exercises to avoid.',
  keywords: ['core exercises for back pain', 'back pain core workout', 'safe ab exercises', 'low back pain exercises', 'core strengthening for spine'],
  openGraph: {
    title: 'Core Exercises for Back Pain: Build a Protective Core',
    description: 'Safe and effective core exercises for people with lower back pain.',
    type: 'article',
  },
};

export default function CoreExercisesForBackPain() {
  return (
    <BlogPost
      title="Core Exercises for Back Pain: Build a Protective Core"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Core", "Back Pain", "Rehabilitation"]}
    >
      <p className="lead">
        You&apos;ve been told to strengthen your core to help your back pain—but every 
        time you try crunches, your back hurts more. Here&apos;s the truth: traditional 
        ab exercises often make back pain worse. You need core exercises designed 
        for spinal stability, not spinal movement.
      </p>

      <h2>Why Core Strength Matters for Back Pain</h2>
      <p>
        Your core isn&apos;t just your abs—it&apos;s a cylinder of muscles that wraps around 
        your trunk: rectus abdominis (six-pack), obliques, transverse abdominis (deep 
        stabilizer), erector spinae (back muscles), multifidus (deep back stabilizers), 
        diaphragm (top), and pelvic floor (bottom).
      </p>
      <p>
        When this system works well, it creates a stable foundation that protects your 
        spine. When it&apos;s weak or uncoordinated, your spine takes excessive stress.
      </p>

      <h3>The Problem with Traditional Ab Exercises</h3>
      <p>
        Crunches, sit-ups, and leg raises involve repeated spinal flexion under load. 
        For people with disc issues, this increases pressure on the discs and can 
        worsen pain. Research by Dr. Stuart McGill shows these movements can actually 
        damage spinal discs over time.
      </p>

      <h3>The Solution: Anti-Movement Training</h3>
      <p>
        A spine-safe core workout focuses on <strong>resisting</strong> movement rather 
        than creating it:
      </p>
      <ul>
        <li><strong>Anti-extension:</strong> Resisting arching (plank)</li>
        <li><strong>Anti-flexion:</strong> Resisting rounding (back extension hold)</li>
        <li><strong>Anti-rotation:</strong> Resisting twisting (Pallof press)</li>
        <li><strong>Anti-lateral flexion:</strong> Resisting side bending (side plank)</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="font-semibold text-blue-800">The McGill Big 3</p>
        <p className="text-blue-700">
          Spine researcher Dr. Stuart McGill identified three exercises that build 
          core stability without stressing the spine: the curl-up, side plank, and 
          bird dog. These form the foundation of back-safe core training.
        </p>
      </div>

      <h2>McGill Big 3 Exercises</h2>

      <h3>1. Modified Curl-Up</h3>
      <p>
        NOT a crunch—minimal spinal movement:
      </p>
      <ol>
        <li>Lie on back, one knee bent, one leg straight</li>
        <li>Place hands under your lower back to maintain natural curve</li>
        <li>Brace your core (like bracing for a punch)</li>
        <li>Lift only your head and shoulders slightly—NOT a full sit-up</li>
        <li>Hold 7-8 seconds</li>
        <li>Switch legs halfway through your sets</li>
        <li>Pyramid: 6-4-2 reps with 20-30 sec rest between sets</li>
      </ol>

      <h3>2. Side Plank</h3>
      <p>
        Builds lateral stability critical for spine health:
      </p>
      <ol>
        <li>Lie on side, forearm on floor, elbow under shoulder</li>
        <li>Stack your hips, knees bent at 90° (beginner) or legs straight (advanced)</li>
        <li>Lift hips so body forms straight line</li>
        <li>Hold 7-8 seconds per rep</li>
        <li>Pyramid: 6-4-2 reps each side</li>
      </ol>

      <h3>3. Bird Dog</h3>
      <p>
        Coordinates opposite arm/leg movement while stabilizing spine:
      </p>
      <ol>
        <li>Hands and knees position, spine neutral</li>
        <li>Brace core, then slowly extend opposite arm and leg</li>
        <li>Keep hips level—don&apos;t rotate or sway</li>
        <li>Hold 7-8 seconds</li>
        <li>Return, switch sides</li>
        <li>Pyramid: 6-4-2 reps each side</li>
      </ol>

      <h2>Foundational Exercises</h2>

      <h3>Diaphragmatic Breathing</h3>
      <p>
        The foundation of core stability:
      </p>
      <ol>
        <li>Lie on back, knees bent, one hand on chest, one on belly</li>
        <li>Breathe in through nose—belly rises, chest stays still</li>
        <li>Exhale slowly, feel gentle abdominal engagement</li>
        <li>5-10 breaths, 2-3 times daily</li>
      </ol>

      <h3>Dead Bug</h3>
      <ol>
        <li>Lie on back, arms toward ceiling, knees bent 90°</li>
        <li>Flatten lower back against floor—maintain throughout</li>
        <li>Slowly lower opposite arm and leg</li>
        <li>Return before your back arches</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <h3>Glute Bridge</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Squeeze glutes, lift hips until body is straight</li>
        <li>Don&apos;t hyperextend—stop when hips are in line with knees and shoulders</li>
        <li>Hold 3-5 seconds at top</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h2>Anti-Movement Exercises</h2>

      <h3>Forearm Plank</h3>
      <ol>
        <li>Forearms and toes on floor, body in straight line</li>
        <li>Don&apos;t let hips sag or pike up</li>
        <li>Squeeze glutes, brace abs</li>
        <li>Hold 10-30 seconds, rest, repeat</li>
        <li>3-5 sets</li>
      </ol>

      <h3>Pallof Press (Anti-Rotation)</h3>
      <ol>
        <li>Stand sideways to a cable or band anchor at chest height</li>
        <li>Hold handle at chest with both hands</li>
        <li>Press arms straight out, resisting the rotation</li>
        <li>Hold 3-5 seconds, return to chest</li>
        <li>10-15 reps each side</li>
      </ol>

      <h3>Suitcase Carry (Anti-Lateral Flexion)</h3>
      <ol>
        <li>Hold a weight in one hand (dumbbell, kettlebell)</li>
        <li>Walk with upright posture—don&apos;t lean to either side</li>
        <li>30-60 seconds each hand</li>
        <li>2-3 sets</li>
      </ol>

      <h3>Tall Kneeling Pallof Hold</h3>
      <ol>
        <li>Kneel on both knees, band anchored to side</li>
        <li>Press band straight out from chest</li>
        <li>Hold 20-30 seconds</li>
        <li>2-3 sets each side</li>
      </ol>

      <h2>Exercises to Avoid (or Modify)</h2>

      <h3>Avoid</h3>
      <ul>
        <li><strong>Traditional crunches:</strong> Repeated spinal flexion under load</li>
        <li><strong>Sit-ups:</strong> Even worse—full range spinal flexion with hip flexor pull</li>
        <li><strong>Leg raises (lying):</strong> Places huge load on lower back</li>
        <li><strong>Russian twists:</strong> Flexion + rotation under load</li>
        <li><strong>V-ups:</strong> Extreme spinal flexion</li>
      </ul>

      <h3>Modifications</h3>
      <ul>
        <li><strong>Instead of crunches:</strong> McGill curl-up or dead bug</li>
        <li><strong>Instead of leg raises:</strong> Dead bug with leg lowering</li>
        <li><strong>Instead of Russian twists:</strong> Pallof press</li>
        <li><strong>Instead of V-ups:</strong> Bird dog or hollow body hold (if tolerated)</li>
      </ul>

      <h2>Progression Guidelines</h2>

      <h3>Week 1-2: Foundation</h3>
      <ul>
        <li>Diaphragmatic breathing: Daily</li>
        <li>Dead bug (arm only): 3 × 10</li>
        <li>Glute bridge: 3 × 10</li>
        <li>Bird dog: 3 × 8 each side</li>
        <li>Modified curl-up: 6-4-2 pyramid</li>
      </ul>

      <h3>Week 3-4: Build Duration</h3>
      <ul>
        <li>Add McGill Big 3 (full protocol)</li>
        <li>Dead bug (full): 3 × 10 each side</li>
        <li>Plank: Build to 3 × 20 seconds</li>
        <li>Side plank: 6-4-2 pyramid each side</li>
      </ul>

      <h3>Week 5+: Add Challenge</h3>
      <ul>
        <li>Pallof press: 3 × 12 each side</li>
        <li>Suitcase carry: 3 × 30 sec each side</li>
        <li>Single-leg glute bridge: 3 × 10 each side</li>
        <li>Plank variations (body saw, arm reach)</li>
      </ul>

      <h2>Sample Routines</h2>

      <h3>Daily Maintenance (10 min)</h3>
      <ol>
        <li>Diaphragmatic breathing: 10 breaths</li>
        <li>McGill curl-up: 6-4-2</li>
        <li>Side plank: 6-4-2 each side</li>
        <li>Bird dog: 6-4-2 each side</li>
        <li>Glute bridge: 2 × 10</li>
      </ol>

      <h3>Full Core Workout (20 min, 3x/week)</h3>
      <ol>
        <li>Diaphragmatic breathing: 10 breaths</li>
        <li>Dead bug: 3 × 10 each side</li>
        <li>McGill curl-up: 6-4-2</li>
        <li>Side plank: 6-4-2 each side</li>
        <li>Bird dog: 6-4-2 each side</li>
        <li>Plank: 3 × 20-30 sec</li>
        <li>Pallof press: 3 × 10 each side</li>
        <li>Glute bridge: 3 × 12</li>
        <li>Suitcase carry: 2 × 30 sec each side</li>
      </ol>

      <h2>Tips for Success</h2>

      <h3>Quality Over Quantity</h3>
      <p>
        Perfect form on fewer reps beats sloppy form on many. If your back hurts 
        during an exercise, you&apos;re either doing it wrong or it&apos;s not right for you yet.
      </p>

      <h3>Brace, Don&apos;t Hollow</h3>
      <p>
        Brace your core as if someone is about to punch you—don&apos;t suck your belly in. 
        Bracing creates stability; hollowing creates instability.
      </p>

      <h3>Progress Slowly</h3>
      <p>
        Add time or reps gradually. If an exercise causes back pain, regress to an 
        easier version.
      </p>

      <h3>Consistency Wins</h3>
      <p>
        10 minutes daily beats 60 minutes once a week. The McGill Big 3 done daily 
        creates lasting change.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Skip the crunches:</strong> Repeated spinal flexion worsens many back problems</li>
        <li><strong>Train stability:</strong> Anti-movement exercises (plank, Pallof, carries) protect the spine</li>
        <li><strong>McGill Big 3:</strong> Curl-up, side plank, bird dog are proven spine-safe</li>
        <li><strong>Brace, don&apos;t hollow:</strong> Create stiffness, not a vacuum</li>
        <li><strong>Quality matters:</strong> Perfect form on every rep</li>
        <li><strong>Be consistent:</strong> Daily short sessions beat occasional long ones</li>
        <li><strong>Listen to your back:</strong> If it hurts, modify or regress</li>
      </ul>

      <p>
        A strong core can dramatically reduce back pain—but only if you train it 
        correctly. Focus on stability exercises that protect your spine rather than 
        movement exercises that stress it. The McGill Big 3 and anti-movement training 
        will build the protective core you need without making your back worse.
      </p>
    </BlogPost>
  );
}
