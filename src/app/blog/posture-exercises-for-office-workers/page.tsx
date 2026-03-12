import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Posture Exercises for Office Workers: Fix Desk Posture | FoundationalRehab',
  description: 'Combat desk posture with targeted exercises for office workers. Fix forward head, rounded shoulders, and tight hip flexors from sitting all day.',
  keywords: ['posture exercises office', 'desk posture', 'sitting posture exercises', 'computer posture', 'office stretches'],
  openGraph: {
    title: 'Posture Exercises for Office Workers: Fix Desk Posture',
    description: 'Comprehensive exercise guide to combat the effects of desk work on your posture.',
    type: 'article',
  },
};

export default function PostureExercisesForOfficeWorkers() {
  return (
    <BlogPost
      title="Posture Exercises for Office Workers: Fix Desk Posture"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Posture", "Office Health", "Back Pain", "Neck Pain"]}
    >
      <p className="lead">
        8+ hours hunched over a keyboard, staring at a screen—your body adapts to 
        what you do most. The result: forward head, rounded shoulders, tight hip 
        flexors, and a weak posterior chain. Here&apos;s how to undo the damage and 
        build posture that doesn&apos;t hurt.
      </p>

      <h2>The Desk Posture Pattern</h2>
      <p>
        Prolonged sitting creates predictable imbalances:
      </p>

      <h3>What Gets Tight</h3>
      <ul>
        <li><strong>Chest muscles (pecs):</strong> Pull shoulders forward</li>
        <li><strong>Upper trapezius:</strong> Constant tension from stress and poor positioning</li>
        <li><strong>Levator scapulae:</strong> Contributes to neck pain and stiffness</li>
        <li><strong>Hip flexors:</strong> Shortened from constant sitting</li>
        <li><strong>Hamstrings:</strong> Chronically shortened (seems contradictory but true)</li>
      </ul>

      <h3>What Gets Weak</h3>
      <ul>
        <li><strong>Deep neck flexors:</strong> Head drifts forward</li>
        <li><strong>Lower/middle trapezius:</strong> Can&apos;t pull shoulders back</li>
        <li><strong>Rhomboids:</strong> Shoulder blade control suffers</li>
        <li><strong>Core:</strong> Slumping doesn&apos;t require engagement</li>
        <li><strong>Glutes:</strong> Literally sitting on them all day turns them off</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="font-semibold text-blue-800">The Pattern</p>
        <p className="text-blue-700">
          Forward head → rounded shoulders → increased thoracic kyphosis → anterior 
          pelvic tilt OR posterior pelvic tilt (depends on the person) → overall 
          loss of spinal curves and muscle imbalances.
        </p>
      </div>

      <h2>Stretches for Tight Muscles</h2>

      <h3>Doorway Pec Stretch</h3>
      <ol>
        <li>Stand in doorway, forearm on frame at 90°</li>
        <li>Step through with same-side foot</li>
        <li>Feel stretch across chest</li>
        <li>Hold 30-45 seconds</li>
        <li>Repeat at different arm heights (low, middle, high)</li>
        <li>3 positions each side</li>
      </ol>

      <h3>Upper Trapezius Stretch</h3>
      <ol>
        <li>Sit or stand, hold chair seat or reach toward floor with one hand</li>
        <li>Tilt head away from that side (ear toward opposite shoulder)</li>
        <li>Gently add pressure with opposite hand</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h3>Levator Scapulae Stretch</h3>
      <ol>
        <li>Turn head 45° toward one side</li>
        <li>Look down toward that armpit</li>
        <li>Use hand on same side to gently add pressure</li>
        <li>Feel stretch on back/side of neck</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h3>Hip Flexor Stretch</h3>
      <ol>
        <li>Half-kneeling position, back knee on cushion</li>
        <li>Tuck tailbone under (posterior pelvic tilt)—CRITICAL</li>
        <li>Squeeze back glute</li>
        <li>Shift weight forward slightly</li>
        <li>Hold 45-60 seconds each side</li>
      </ol>

      <h3>Thoracic Extension (Foam Roller)</h3>
      <ol>
        <li>Lie on foam roller placed horizontally under upper back</li>
        <li>Support head with hands</li>
        <li>Let upper back extend over the roller</li>
        <li>Move roller to different levels of upper back</li>
        <li>30-60 seconds at each position</li>
      </ol>

      <h2>Strengthening for Weak Muscles</h2>

      <h3>Chin Tucks</h3>
      <p>
        Strengthens deep neck flexors, corrects forward head:
      </p>
      <ol>
        <li>Sit or stand with good posture</li>
        <li>Draw chin straight back (make a double chin)</li>
        <li>Hold 5-10 seconds</li>
        <li>10-15 reps, multiple times daily</li>
      </ol>

      <h3>Wall Angels</h3>
      <ol>
        <li>Stand with back against wall</li>
        <li>Arms in goalpost position (elbows bent 90°)</li>
        <li>Keep back of head, upper back, and arms touching wall</li>
        <li>Slide arms up and down</li>
        <li>If you can&apos;t maintain contact, work on pec stretching first</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Face Pulls</h3>
      <ol>
        <li>Band or cable at face height</li>
        <li>Pull toward face, elbows high and wide</li>
        <li>At the end, externally rotate (pull hands apart)</li>
        <li>Squeeze shoulder blades at finish</li>
        <li>3 sets of 15</li>
      </ol>

      <h3>Band Pull-Aparts</h3>
      <ol>
        <li>Hold band at shoulder height, arms extended</li>
        <li>Pull band apart by squeezing shoulder blades</li>
        <li>Keep arms straight throughout</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>Prone Y-T-W Raises</h3>
      <ol>
        <li>Lie face down on bench or floor</li>
        <li><strong>Y:</strong> Arms at 45°, thumbs up, lift</li>
        <li><strong>T:</strong> Arms straight out to sides, lift</li>
        <li><strong>W:</strong> Elbows bent, rotate up as you lift</li>
        <li>10 reps each position</li>
      </ol>

      <h3>Glute Bridges</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Squeeze glutes, lift hips</li>
        <li>Don&apos;t hyperextend—stop when hips are level with knees/shoulders</li>
        <li>Hold 3-5 seconds at top</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Dead Bug</h3>
      <ol>
        <li>Lie on back, arms toward ceiling, knees bent 90°</li>
        <li>Flatten lower back against floor—maintain throughout</li>
        <li>Slowly lower opposite arm and leg</li>
        <li>Return before back arches</li>
        <li>3 sets of 10 each side</li>
      </ol>

      <h2>At-Desk Exercises</h2>
      <p>
        Do these throughout the day without leaving your desk:
      </p>

      <h3>Seated Chin Tucks</h3>
      <ol>
        <li>Sit tall, draw chin back</li>
        <li>Hold 5 seconds</li>
        <li>5-10 reps every hour</li>
      </ol>

      <h3>Seated Shoulder Blade Squeezes</h3>
      <ol>
        <li>Squeeze shoulder blades together and down</li>
        <li>Hold 5 seconds</li>
        <li>10 reps</li>
      </ol>

      <h3>Seated Chest Opener</h3>
      <ol>
        <li>Clasp hands behind back</li>
        <li>Squeeze shoulder blades, lift chest</li>
        <li>Hold 15-20 seconds</li>
      </ol>

      <h3>Seated Hip Flexor Stretch</h3>
      <ol>
        <li>Sit on front edge of chair</li>
        <li>Let one leg drop back</li>
        <li>Tuck tailbone under</li>
        <li>Feel stretch in front of hip</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h3>Seated Thoracic Rotation</h3>
      <ol>
        <li>Sit tall, hands behind head</li>
        <li>Rotate upper body to one side</li>
        <li>Keep hips facing forward</li>
        <li>5-10 rotations each side</li>
      </ol>

      <h2>Movement Breaks</h2>
      <p>
        Every 30-60 minutes, take a movement break:
      </p>

      <h3>2-Minute Break</h3>
      <ol>
        <li>Stand up and walk around</li>
        <li>Arm circles: 10 forward, 10 back</li>
        <li>Shoulder shrugs: 10 reps</li>
        <li>Torso twists: 10 each side</li>
        <li>Standing hip flexor stretch: 20 sec each side</li>
      </ol>

      <h3>5-Minute Break</h3>
      <ol>
        <li>Walk (stairs if available)</li>
        <li>Doorway pec stretch: 20 sec each position</li>
        <li>Upper trap stretch: 20 sec each side</li>
        <li>Hip flexor stretch: 30 sec each side</li>
        <li>10 squats</li>
        <li>10 wall push-ups</li>
      </ol>

      <h2>Ergonomic Setup</h2>
      <p>
        Exercise helps, but so does not creating the problem in the first place:
      </p>

      <h3>Monitor</h3>
      <ul>
        <li>Top of screen at eye level</li>
        <li>Arm&apos;s length away</li>
        <li>Directly in front of you (not off to one side)</li>
      </ul>

      <h3>Chair</h3>
      <ul>
        <li>Feet flat on floor (or footrest)</li>
        <li>Knees at 90° or slightly open</li>
        <li>Back supported with natural curves maintained</li>
        <li>Armrests at elbow height if used</li>
      </ul>

      <h3>Keyboard/Mouse</h3>
      <ul>
        <li>Elbows at 90-100°</li>
        <li>Wrists neutral (not bent up or down)</li>
        <li>Mouse close to keyboard</li>
      </ul>

      <h2>Daily Routines</h2>

      <h3>Morning Routine (10 min)</h3>
      <ol>
        <li>Cat-cow stretches: 10 reps</li>
        <li>Thoracic rotation: 10 each side</li>
        <li>Hip flexor stretch: 45 sec each side</li>
        <li>Doorway pec stretch: 30 sec each position</li>
        <li>Wall angels: 2 × 10</li>
        <li>Glute bridges: 2 × 12</li>
      </ol>

      <h3>During Work (every hour)</h3>
      <ol>
        <li>Chin tucks: 10 reps</li>
        <li>Shoulder blade squeezes: 10 reps</li>
        <li>Stand and move for 1-2 minutes</li>
      </ol>

      <h3>Evening Routine (15 min)</h3>
      <ol>
        <li>Foam roller thoracic extension: 2 min</li>
        <li>All neck stretches: 30 sec each</li>
        <li>Doorway pec stretch: 30 sec each position</li>
        <li>Hip flexor stretch: 60 sec each side</li>
        <li>Prone Y-T-W: 10 reps each</li>
        <li>Face pulls or band pull-aparts: 3 × 15</li>
        <li>Dead bug: 2 × 10 each side</li>
        <li>Glute bridges: 3 × 12</li>
      </ol>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Stretch what&apos;s tight:</strong> Pecs, upper traps, hip flexors</li>
        <li><strong>Strengthen what&apos;s weak:</strong> Deep neck flexors, lower traps, glutes, core</li>
        <li><strong>Move frequently:</strong> Every 30-60 minutes, break up sitting</li>
        <li><strong>Fix your setup:</strong> Ergonomics prevent the problem from worsening</li>
        <li><strong>Consistency wins:</strong> Small daily efforts beat occasional big sessions</li>
        <li><strong>Chin tucks are key:</strong> Address forward head multiple times daily</li>
      </ul>

      <p>
        Desk work doesn&apos;t have to destroy your posture. Combat the effects of sitting 
        with targeted stretching and strengthening, take frequent movement breaks, and 
        optimize your workstation setup. Your spine will thank you—and so will your 
        energy levels, mood, and productivity.
      </p>
    </BlogPost>
  );
}
