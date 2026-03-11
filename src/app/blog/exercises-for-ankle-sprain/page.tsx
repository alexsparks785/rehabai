import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Ankle Sprain Recovery: Complete Rehab Guide | FoundationalRehab',
  description: 'Recover from ankle sprain with progressive exercises. Includes range of motion, strengthening, balance training, and return to activity protocols.',
  keywords: ['ankle sprain exercises', 'sprained ankle rehab', 'ankle rehabilitation', 'ankle strengthening', 'ankle sprain recovery'],
}

export default function ExercisesForAnkleSprain() {
  return (
    <BlogPost
      title="Exercises for Ankle Sprain Recovery: Complete Rehab Guide"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Rehabilitation"
      tags={['rehabilitation', 'ankle', 'injury recovery', 'balance']}
    >
      <p className="lead">
        Ankle sprains are common but often poorly rehabilitated, leading to chronic instability
        and re-injury. Here's how to recover properly and build an ankle that's stronger than before.
      </p>

      <h2>Understanding Ankle Sprains</h2>
      <p>
        Most ankle sprains are inversion sprains - the foot rolls inward, stretching or tearing
        the ligaments on the outside of the ankle (most commonly the ATFL - anterior talofibular
        ligament).
      </p>

      <h3>Sprain Grades</h3>
      <ul>
        <li><strong>Grade 1 (Mild):</strong> Ligament stretched but not torn. Minimal swelling, can walk</li>
        <li><strong>Grade 2 (Moderate):</strong> Partial tear. Moderate swelling, pain with walking, some instability</li>
        <li><strong>Grade 3 (Severe):</strong> Complete tear. Severe swelling, unable to bear weight, significant instability</li>
      </ul>
      <p>
        This guide is appropriate for Grade 1-2 sprains. Grade 3 sprains should be evaluated
        by a medical professional.
      </p>

      <h2>Acute Phase (Days 1-3): RICE/PRICE</h2>
      <p>
        Immediately after injury:
      </p>
      <ul>
        <li><strong>Protection:</strong> Brace or wrap to prevent further injury</li>
        <li><strong>Rest:</strong> Avoid activities that cause pain</li>
        <li><strong>Ice:</strong> 15-20 minutes every 2-3 hours</li>
        <li><strong>Compression:</strong> Elastic bandage to control swelling</li>
        <li><strong>Elevation:</strong> Above heart level when possible</li>
      </ul>
      <p>
        <strong>Note:</strong> Complete immobilization is no longer recommended. Early controlled
        movement helps healing.
      </p>

      <h2>Phase 1: Range of Motion (Days 2-7)</h2>
      <p>
        Begin gentle movement as soon as tolerable to prevent stiffness.
      </p>

      <h3>Ankle Alphabet</h3>
      <ol>
        <li>Sit with leg elevated</li>
        <li>Use your foot to "write" the alphabet in the air</li>
        <li>Move only your ankle, not your whole leg</li>
        <li>2-3 times daily</li>
      </ol>

      <h3>Ankle Circles</h3>
      <ol>
        <li>Sit with leg elevated</li>
        <li>Slowly circle ankle clockwise</li>
        <li>Then counterclockwise</li>
        <li>10 circles each direction, 2-3 times daily</li>
      </ol>

      <h3>Ankle Pumps</h3>
      <ol>
        <li>Sit or lie down</li>
        <li>Point toes away from you (plantarflexion)</li>
        <li>Pull toes toward you (dorsiflexion)</li>
        <li>20-30 reps, multiple times daily</li>
      </ol>

      <h3>Towel Stretch</h3>
      <ol>
        <li>Sit with leg straight</li>
        <li>Loop towel around ball of foot</li>
        <li>Gently pull towel to stretch calf</li>
        <li>Hold 30 seconds, 3 times</li>
      </ol>

      <h2>Phase 2: Strengthening (Week 1-3)</h2>
      <p>
        Begin when you can walk without significant pain.
      </p>

      <h3>Isometric Exercises (No Movement)</h3>
      <p>Press against an immovable object to strengthen without stressing the ligaments.</p>

      <p><strong>4-Way Isometrics:</strong></p>
      <ol>
        <li>Sit with foot against wall or table leg</li>
        <li>Push foot inward (inversion) - hold 10 seconds</li>
        <li>Push foot outward (eversion) - hold 10 seconds</li>
        <li>Push foot down (plantarflexion) - hold 10 seconds</li>
        <li>Push foot up (dorsiflexion) - hold 10 seconds</li>
        <li>10 reps each direction, 2-3 times daily</li>
      </ol>

      <h3>Resistance Band Exercises</h3>
      <p>Progress to these when isometrics are pain-free.</p>

      <p><strong>Dorsiflexion:</strong></p>
      <ol>
        <li>Anchor band to fixed object</li>
        <li>Loop around top of foot</li>
        <li>Pull toes toward you against resistance</li>
        <li>3 sets of 15</li>
      </ol>

      <p><strong>Plantarflexion:</strong></p>
      <ol>
        <li>Loop band around ball of foot</li>
        <li>Hold ends in hands</li>
        <li>Point toes away against resistance</li>
        <li>3 sets of 15</li>
      </ol>

      <p><strong>Inversion:</strong></p>
      <ol>
        <li>Cross injured foot over other leg</li>
        <li>Anchor band under non-injured foot</li>
        <li>Turn injured foot inward against resistance</li>
        <li>3 sets of 15</li>
      </ol>

      <p><strong>Eversion (Most Important):</strong></p>
      <ol>
        <li>Anchor band to fixed object on injured side</li>
        <li>Turn foot outward against resistance</li>
        <li>This strengthens the muscles that protect against re-injury</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>Calf Raises</h3>
      <ol>
        <li>Start with both feet, progress to single-leg</li>
        <li>Rise up on toes, lower slowly</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h2>Phase 3: Balance and Proprioception (Week 2-6)</h2>
      <p>
        This is the most neglected phase. Poor proprioception (joint position sense) is the
        main reason people re-sprain ankles. Don't skip this.
      </p>

      <h3>Single-Leg Balance</h3>
      <p><strong>Progression:</strong></p>
      <ol>
        <li>Stand on injured leg, eyes open - 30 seconds</li>
        <li>Stand on injured leg, eyes closed - 30 seconds</li>
        <li>Single-leg balance on pillow or cushion - 30 seconds</li>
        <li>Single-leg balance with head turns - 30 seconds</li>
        <li>Single-leg balance while catching/throwing ball</li>
      </ol>
      <p>Progress to next level when current level is easy.</p>

      <h3>Single-Leg Reaches</h3>
      <ol>
        <li>Stand on injured leg</li>
        <li>Reach other leg forward, backward, and to sides</li>
        <li>Maintain balance throughout</li>
        <li>5 reaches each direction</li>
      </ol>

      <h3>Wobble Board/BOSU</h3>
      <p>If available, unstable surfaces challenge proprioception further:</p>
      <ol>
        <li>Two-leg stand on wobble board</li>
        <li>Single-leg stand on wobble board</li>
        <li>Single-leg balance on BOSU</li>
        <li>30-60 seconds each</li>
      </ol>

      <h2>Phase 4: Functional Exercises (Week 4-8)</h2>
      <p>
        Progress when walking is pain-free and balance is solid.
      </p>

      <h3>Heel Walking</h3>
      <ol>
        <li>Walk on heels only, toes up</li>
        <li>30 seconds</li>
        <li>Strengthens tibialis anterior (front of shin)</li>
      </ol>

      <h3>Toe Walking</h3>
      <ol>
        <li>Walk on toes, heels up</li>
        <li>30 seconds</li>
        <li>Strengthens calves</li>
      </ol>

      <h3>Lateral Shuffles</h3>
      <ol>
        <li>Athletic stance, knees bent</li>
        <li>Shuffle sideways, staying low</li>
        <li>10 yards each direction</li>
      </ol>

      <h3>Single-Leg Hops (Late Stage)</h3>
      <p>Only begin when cleared and confident:</p>
      <ol>
        <li>Small hops in place on injured leg</li>
        <li>Hops forward and backward</li>
        <li>Hops side to side</li>
        <li>Hop and stick landing (control)</li>
      </ol>

      <h2>Return to Sport Criteria</h2>
      <p>Before returning to sport, you should have:</p>
      <ul>
        <li>Full, pain-free range of motion</li>
        <li>Equal strength compared to other ankle</li>
        <li>Single-leg balance equal to other leg</li>
        <li>Able to hop and land without pain or instability</li>
        <li>Able to perform sport-specific movements (cutting, jumping) without issues</li>
        <li>Psychological readiness (confidence in the ankle)</li>
      </ul>

      <h2>Timeline Overview</h2>
      <ul>
        <li><strong>Grade 1:</strong> 1-3 weeks to return to activity</li>
        <li><strong>Grade 2:</strong> 3-6 weeks to return to activity</li>
        <li><strong>Grade 3:</strong> 6-12+ weeks, may need immobilization or surgery</li>
      </ul>
      <p>
        These are general guidelines. Progression depends on individual healing and symptoms.
      </p>

      <h2>Preventing Re-Injury</h2>
      <p>
        Once you've sprained an ankle, you're more likely to sprain it again. Prevention strategies:
      </p>
      <ul>
        <li><strong>Continue balance training:</strong> Even after recovery, do single-leg balance 2-3x/week</li>
        <li><strong>Ankle strengthening:</strong> Maintain calf and eversion strength</li>
        <li><strong>Brace during high-risk activity:</strong> Consider lace-up brace for sports</li>
        <li><strong>Tape:</strong> Athletic tape can provide support if you know how to apply it</li>
        <li><strong>Proper footwear:</strong> Supportive shoes for your activity</li>
        <li><strong>Warm up:</strong> Dynamic ankle movements before activity</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <p>Seek medical evaluation if:</p>
      <ul>
        <li>Unable to bear weight</li>
        <li>Severe swelling that doesn't improve</li>
        <li>Ankle looks deformed</li>
        <li>Numbness or tingling</li>
        <li>No improvement after 1-2 weeks of home treatment</li>
        <li>Repeated sprains (may indicate chronic instability)</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Proper ankle sprain rehab goes beyond just waiting for pain to stop. The balance and
        proprioception training in Phase 3 is critical - it's what prevents the chronic
        instability that leads to repeated sprains.
      </p>
      <p>
        Progress through each phase systematically. Don't rush back to activity before you've
        rebuilt strength and stability. A few extra weeks of rehab now prevents months of
        problems later.
      </p>
    </BlogPost>
  )
}
