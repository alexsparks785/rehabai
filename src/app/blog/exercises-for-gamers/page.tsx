import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Gamers: Combat the Effects of Long Gaming Sessions | FoundationalRehab',
  description: 'Essential exercises for gamers to prevent wrist pain, back problems, and eye strain. Stay healthy while gaming with these routines.',
  keywords: ['exercises for gamers', 'gamer workout', 'gaming posture', 'gamer wrist pain', 'gaming health'],
}

export default function ExercisesForGamers() {
  return (
    <BlogPost
      title="Exercises for Gamers: Combat the Effects of Long Gaming Sessions"
      author="Alex Sparks"
      date="2026-03-12"
      readTime="9 min read"
      category="Occupational Health"
      tags={['gamers', 'posture', 'wrist pain', 'back pain', 'desk exercises']}
    >
      <p className="lead">
        Gaming is demanding on your body in ways you might not realize. Hours of sitting,
        repetitive hand movements, and intense focus create specific physical problems.
        Here's how to stay healthy and game longer.
      </p>

      <h2>Physical Demands of Gaming</h2>
      <ul>
        <li><strong>Wrist and hand stress:</strong> Repetitive mouse/controller movements</li>
        <li><strong>Neck strain:</strong> Forward head posture looking at screens</li>
        <li><strong>Back pain:</strong> Prolonged sitting, often with poor posture</li>
        <li><strong>Hip tightness:</strong> Constant hip flexion from sitting</li>
        <li><strong>Eye strain:</strong> Intense screen focus</li>
        <li><strong>Shoulder tension:</strong> Arms forward, shoulders rounded</li>
      </ul>

      <h2>Quick Break Routine (Every Hour)</h2>
      <p>Set a timer. Do this during loading screens or between matches. 2-3 minutes.</p>

      <h3>Stand and Move (30 seconds)</h3>
      <ol>
        <li>Stand up</li>
        <li>Walk around briefly</li>
        <li>Shake out hands and arms</li>
      </ol>

      <h3>Wrist Circles (30 seconds)</h3>
      <ol>
        <li>10 circles each direction</li>
        <li>Spread fingers wide, make fists</li>
        <li>Repeat 5 times</li>
      </ol>

      <h3>Neck Stretches (30 seconds)</h3>
      <ol>
        <li>Ear to shoulder, 10 seconds each side</li>
        <li>Chin tucks: 5 reps</li>
      </ol>

      <h3>Shoulder Rolls (30 seconds)</h3>
      <ol>
        <li>10 backward shoulder rolls</li>
        <li>Squeeze shoulder blades together, hold 3 seconds</li>
      </ol>

      <h3>20-20-20 Eye Rule</h3>
      <ol>
        <li>Every 20 minutes</li>
        <li>Look at something 20 feet away</li>
        <li>For 20 seconds</li>
      </ol>

      <h2>Wrist and Hand Exercises</h2>
      <p>Critical for preventing carpal tunnel and tendonitis.</p>

      <h3>Wrist Flexor Stretch</h3>
      <ol>
        <li>Extend arm, palm up</li>
        <li>Use other hand to pull fingers down and back</li>
        <li>Feel stretch in inner forearm</li>
        <li>Hold 20-30 seconds each arm</li>
      </ol>

      <h3>Wrist Extensor Stretch</h3>
      <ol>
        <li>Extend arm, palm down</li>
        <li>Use other hand to push fingers toward body</li>
        <li>Feel stretch on top of forearm</li>
        <li>Hold 20-30 seconds each arm</li>
      </ol>

      <h3>Prayer Stretch</h3>
      <ol>
        <li>Palms together in front of chest</li>
        <li>Lower hands while keeping palms together</li>
        <li>Feel stretch in wrists</li>
        <li>Hold 20-30 seconds</li>
      </ol>

      <h3>Reverse Prayer</h3>
      <ol>
        <li>Back of hands together, fingers pointing down</li>
        <li>Raise hands while keeping contact</li>
        <li>Hold 20-30 seconds</li>
      </ol>

      <h3>Finger Spreads</h3>
      <ol>
        <li>Spread fingers as wide as possible</li>
        <li>Hold 5 seconds</li>
        <li>Make tight fist</li>
        <li>Repeat 10 times</li>
      </ol>

      <h3>Thumb Stretches</h3>
      <ol>
        <li>Pull thumb gently away from hand</li>
        <li>Hold 10 seconds</li>
        <li>Pull thumb across palm</li>
        <li>Hold 10 seconds</li>
        <li>Both directions, both thumbs</li>
      </ol>

      <h2>Neck and Shoulder Exercises</h2>

      <h3>Chin Tucks</h3>
      <p><strong>Essential for forward head posture.</strong></p>
      <ol>
        <li>Sit or stand tall</li>
        <li>Pull chin straight back (make a double chin)</li>
        <li>Hold 5 seconds</li>
        <li>10 repetitions</li>
        <li>Do multiple times daily</li>
      </ol>

      <h3>Upper Trap Stretch</h3>
      <ol>
        <li>Sit, grab seat with right hand</li>
        <li>Tilt head left, ear toward shoulder</li>
        <li>Gently add pressure with left hand</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h3>Levator Scapulae Stretch</h3>
      <ol>
        <li>Turn head 45° to one side</li>
        <li>Look down toward armpit</li>
        <li>Add gentle pressure with hand</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h3>Doorway Chest Stretch</h3>
      <ol>
        <li>Stand in doorway, forearm on frame</li>
        <li>Step through, rotate away</li>
        <li>Feel stretch in chest and front of shoulder</li>
        <li>Hold 30 seconds each side</li>
        <li>Do at three arm heights (low, middle, high)</li>
      </ol>

      <h3>Wall Angels</h3>
      <ol>
        <li>Back against wall</li>
        <li>Arms in "W" position against wall</li>
        <li>Slide arms up to "Y" and back down</li>
        <li>Keep arms touching wall</li>
        <li>10 slow repetitions</li>
      </ol>

      <h2>Back and Hip Exercises</h2>

      <h3>Cat-Cow</h3>
      <ol>
        <li>Hands and knees</li>
        <li>Round spine up (cat)</li>
        <li>Arch spine, look up (cow)</li>
        <li>10 slow repetitions</li>
      </ol>

      <h3>Hip Flexor Stretch</h3>
      <ol>
        <li>Half-kneeling position</li>
        <li>Tuck tailbone, squeeze back glute</li>
        <li>Shift weight forward slightly</li>
        <li>Hold 30-45 seconds each side</li>
      </ol>

      <h3>Seated Figure-4 Stretch</h3>
      <ol>
        <li>Sit, cross one ankle over opposite knee</li>
        <li>Sit tall, lean forward slightly</li>
        <li>Feel stretch in outer hip</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h3>Glute Bridges</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Lift hips, squeeze glutes</li>
        <li>Hold 3 seconds at top</li>
        <li>15-20 repetitions</li>
      </ol>

      <h2>Strengthening Exercises</h2>
      <p>Do 2-3 times per week to counteract sitting posture.</p>

      <h3>Face Pulls (with band)</h3>
      <ol>
        <li>Band at face height</li>
        <li>Pull toward face, elbows high</li>
        <li>Externally rotate at end</li>
        <li>3 × 15</li>
      </ol>

      <h3>Band Pull-Aparts</h3>
      <ol>
        <li>Hold band at chest height</li>
        <li>Pull apart, squeezing shoulder blades</li>
        <li>3 × 20</li>
      </ol>

      <h3>Rows</h3>
      <ol>
        <li>Dumbbell, cable, or inverted rows</li>
        <li>Pull to torso, squeeze back</li>
        <li>3 × 12</li>
      </ol>

      <h3>Planks</h3>
      <ol>
        <li>Forearms on floor, body straight</li>
        <li>Hold 30-60 seconds</li>
        <li>3 sets</li>
      </ol>

      <h3>Squats</h3>
      <ol>
        <li>Counteracts sitting all day</li>
        <li>Bodyweight or goblet squat</li>
        <li>3 × 15</li>
      </ol>

      <h2>Sample Gamer Wellness Routine</h2>

      <h3>Pre-Gaming (5 minutes)</h3>
      <ol>
        <li>Wrist circles and stretches: 1 minute</li>
        <li>Neck stretches: 1 minute</li>
        <li>Shoulder rolls: 30 seconds</li>
        <li>Hip circles: 30 seconds</li>
        <li>10 squats</li>
        <li>10 glute bridges</li>
      </ol>

      <h3>During Gaming (Every Hour)</h3>
      <ol>
        <li>Stand up, walk around</li>
        <li>Wrist circles and finger spreads</li>
        <li>Chin tucks × 5</li>
        <li>Shoulder rolls</li>
        <li>20-20-20 eye break</li>
      </ol>

      <h3>Post-Gaming (10 minutes)</h3>
      <ol>
        <li>Wrist stretches (flexor and extensor): 2 minutes</li>
        <li>Neck stretches: 2 minutes</li>
        <li>Doorway chest stretch: 2 minutes</li>
        <li>Hip flexor stretch: 2 minutes</li>
        <li>Cat-cow: 10 reps</li>
        <li>Child's pose: 1 minute</li>
      </ol>

      <h3>Strength Day (3x/week, 20 minutes)</h3>
      <ol>
        <li>Face pulls: 3 × 15</li>
        <li>Rows: 3 × 12</li>
        <li>Push-ups: 3 × 10-15</li>
        <li>Squats: 3 × 15</li>
        <li>Planks: 3 × 30 seconds</li>
        <li>Glute bridges: 3 × 15</li>
      </ol>

      <h2>Setup Tips for Prevention</h2>
      <ul>
        <li><strong>Monitor height:</strong> Top of screen at eye level</li>
        <li><strong>Chair height:</strong> Feet flat, thighs parallel to floor</li>
        <li><strong>Keyboard/mouse:</strong> Elbows at 90°, wrists neutral</li>
        <li><strong>Lumbar support:</strong> Small pillow or rolled towel in lower back</li>
        <li><strong>Lighting:</strong> Reduce glare, avoid dark room with bright screen</li>
        <li><strong>Take breaks:</strong> Use game breaks/loading screens for movement</li>
      </ul>

      <h2>Warning Signs to Watch</h2>
      <ul>
        <li>Tingling or numbness in hands/fingers</li>
        <li>Persistent wrist pain</li>
        <li>Headaches after gaming</li>
        <li>Neck pain that doesn't resolve</li>
        <li>Back pain that worsens over time</li>
      </ul>
      <p><strong>If symptoms persist, see a healthcare provider.</strong></p>

      <h2>The Bottom Line</h2>
      <p>
        Gaming doesn't have to wreck your body. Take breaks every hour, do wrist and neck
        exercises regularly, and add strength training to counteract poor posture. Your
        performance will actually improve when your body isn't fighting pain and stiffness.
        Healthy gamers are better gamers.
      </p>
    </BlogPost>
  )
}
