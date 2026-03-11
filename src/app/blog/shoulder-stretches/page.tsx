import Link from 'next/link';

export const metadata = {
  title: 'Shoulder Stretches: Relieve Tension and Improve Mobility | Foundational Rehab',
  description: 'The best shoulder stretches for tight muscles, poor posture, and shoulder pain. Target your chest, lats, and rotator cuff with proper technique.',
};

export default function ShoulderStretchesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Stretching</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shoulder Stretches: Relieve Tension and Improve Mobility
          </h1>
          <p className="text-xl text-gray-600">
            Tight shoulders affect everything from your posture to your workout performance. Here&apos;s how to open them up properly.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Shoulders carry more tension than almost any other body part. Between desk work, phone use, and stress, they creep up toward our ears and round forward—causing pain, limited mobility, and poor posture.
          </p>
          <p>
            The solution isn&apos;t just stretching the shoulders themselves. You need to address the chest, lats, and upper back too. Let&apos;s break it down.
          </p>

          <h2>Why Your Shoulders Get Tight</h2>
          <ul>
            <li><strong>Desk posture:</strong> Shoulders round forward, chest tightens</li>
            <li><strong>Phone use:</strong> Arms in front of body for hours</li>
            <li><strong>Stress:</strong> Tension accumulates in upper traps</li>
            <li><strong>Overtraining pressing:</strong> Chest and front delts overpower back muscles</li>
            <li><strong>Weak rotator cuff:</strong> Instability causes protective tightening</li>
          </ul>

          <h2>Upper Trapezius Stretches</h2>
          <p>
            The upper traps run from your neck to your shoulders. They&apos;re the #1 tension zone.
          </p>

          <h3>Ear-to-Shoulder Stretch</h3>
          <ol>
            <li>Sit or stand tall</li>
            <li>Drop your right ear toward your right shoulder</li>
            <li>Keep left shoulder down (don&apos;t let it hike up)</li>
            <li>For more stretch: gently press your head with your right hand</li>
            <li>Hold 30 seconds, switch sides</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>

          <h3>Levator Scapulae Stretch</h3>
          <ol>
            <li>Turn your head 45 degrees to the right</li>
            <li>Drop your chin toward your armpit</li>
            <li>Place right hand on back of head and gently add pressure</li>
            <li>You&apos;ll feel this in the back/side of your neck</li>
            <li>Hold 30 seconds, switch sides</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>
          <p>This targets the levator scapulae—often the source of &quot;shoulder&quot; tension.</p>

          <h2>Chest Stretches (Critical for Shoulder Mobility)</h2>
          <p>
            Tight chest muscles pull shoulders forward. You must stretch them to restore shoulder position.
          </p>

          <h3>Doorway Chest Stretch</h3>
          <ol>
            <li>Stand in a doorway</li>
            <li>Place forearms on door frame, elbows at shoulder height</li>
            <li>Step one foot forward and lean through the doorway</li>
            <li>You should feel the stretch across your chest</li>
            <li>Hold 30-60 seconds</li>
          </ol>
          <p><em>Sets: 3</em></p>
          <p>
            <strong>Variations:</strong> Change elbow height to stretch different parts of the chest—lower for upper pec, higher for lower pec.
          </p>

          <h3>Floor Chest Stretch</h3>
          <ol>
            <li>Lie face down</li>
            <li>Extend your right arm out to the side at 90 degrees</li>
            <li>Roll onto your right side, using your left hand for support</li>
            <li>Feel the stretch in your right chest and shoulder</li>
            <li>Hold 30-60 seconds each side</li>
          </ol>
          <p><em>Sets: 2-3 each side</em></p>

          <h2>Lat Stretches</h2>
          <p>
            The latissimus dorsi connects your arm to your spine. Tight lats limit overhead mobility.
          </p>

          <h3>Child&apos;s Pose with Reach</h3>
          <ol>
            <li>Kneel on the floor, sit back on your heels</li>
            <li>Extend arms forward on the floor</li>
            <li>Walk your hands to the right while keeping hips centered</li>
            <li>Feel the stretch in your left lat</li>
            <li>Hold 30 seconds, switch sides</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>

          <h3>Standing Lat Stretch</h3>
          <ol>
            <li>Stand facing a doorway or pole</li>
            <li>Grab the frame with your right hand at waist height</li>
            <li>Step back and push your hips away from your hand</li>
            <li>Let your torso rotate slightly</li>
            <li>Hold 30 seconds each side</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>

          <h3>Overhead Lat Stretch</h3>
          <ol>
            <li>Stand next to a wall or doorway</li>
            <li>Raise your right arm overhead and grab the frame</li>
            <li>Lean away, pushing your right hip out</li>
            <li>Feel the stretch along your entire right side</li>
            <li>Hold 30 seconds each side</li>
          </ol>
          <p><em>Sets: 2-3 each side</em></p>

          <h2>Rotator Cuff Stretches</h2>
          <p>
            The rotator cuff stabilizes your shoulder. Tight rotator cuff muscles limit rotation.
          </p>

          <h3>Sleeper Stretch (Internal Rotation)</h3>
          <ol>
            <li>Lie on your right side, right arm out in front at 90 degrees</li>
            <li>Bend your right elbow to 90 degrees (forearm pointing up)</li>
            <li>Use your left hand to gently push your right forearm toward the floor</li>
            <li>Keep your shoulder blade flat on the surface</li>
            <li>Hold 30 seconds</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>
          <p>
            <strong>Caution:</strong> This is an aggressive stretch. Don&apos;t force it if you have shoulder pain.
          </p>

          <h3>Cross-Body Stretch (Posterior Shoulder)</h3>
          <ol>
            <li>Bring your right arm across your body at chest height</li>
            <li>Use your left hand to pull it closer to your chest</li>
            <li>Keep your right shoulder down (don&apos;t let it hike up)</li>
            <li>Feel the stretch in the back of your shoulder</li>
            <li>Hold 30 seconds each side</li>
          </ol>
          <p><em>Sets: 3 each side</em></p>

          <h2>Dynamic Shoulder Stretches (Pre-Workout)</h2>

          <h3>Arm Circles</h3>
          <ol>
            <li>Extend arms out to sides</li>
            <li>Make small circles forward (30 seconds)</li>
            <li>Gradually make circles larger</li>
            <li>Reverse direction (30 seconds)</li>
          </ol>

          <h3>Shoulder CARS (Controlled Articular Rotations)</h3>
          <ol>
            <li>Stand tall, arms at sides</li>
            <li>Slowly raise one arm forward and up overhead</li>
            <li>Rotate it behind you and back down to your side</li>
            <li>Make the biggest circle possible while keeping torso still</li>
          </ol>
          <p><em>Do 5 forward, 5 backward, each arm</em></p>

          <h3>Thread the Needle</h3>
          <ol>
            <li>Start on all fours</li>
            <li>Reach your right arm under your body toward the left</li>
            <li>Let your right shoulder and head lower to the floor</li>
            <li>Return and reach to the ceiling, opening your chest</li>
          </ol>
          <p><em>Do 8-10 each side</em></p>

          <h3>Band Pull-Aparts</h3>
          <ol>
            <li>Hold a resistance band in front of you, arms extended</li>
            <li>Pull the band apart by squeezing your shoulder blades</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Do 15-20 reps</em></p>

          <h2>Sample Shoulder Stretching Routines</h2>

          <h3>Quick Daily Routine (5 minutes)</h3>
          <ul>
            <li>Ear-to-shoulder stretch: 30 sec each</li>
            <li>Doorway chest stretch: 45 sec</li>
            <li>Cross-body stretch: 30 sec each</li>
            <li>Arm circles: 30 sec each direction</li>
          </ul>

          <h3>Deep Flexibility Session (15 minutes)</h3>
          <ul>
            <li>Arm circles: 1 minute</li>
            <li>Thread the needle: 8 each side</li>
            <li>Doorway chest stretch (3 heights): 30 sec each</li>
            <li>Floor chest stretch: 45 sec each</li>
            <li>Child&apos;s pose with reach: 30 sec each</li>
            <li>Overhead lat stretch: 30 sec each</li>
            <li>Sleeper stretch: 30 sec each</li>
            <li>Cross-body stretch: 30 sec each</li>
            <li>Ear-to-shoulder stretch: 30 sec each</li>
          </ul>

          <h3>Pre-Upper Body Workout</h3>
          <ul>
            <li>Arm circles: 30 sec each direction</li>
            <li>Shoulder CARS: 5 each direction</li>
            <li>Band pull-aparts: 15 reps</li>
            <li>Thread the needle: 5 each side</li>
            <li>Doorway chest stretch: 30 sec</li>
          </ul>

          <h2>Common Shoulder Stretching Mistakes</h2>
          <ul>
            <li><strong>Only stretching shoulders:</strong> Chest and lats need attention too</li>
            <li><strong>Forcing range of motion:</strong> Stretch to mild tension, not pain</li>
            <li><strong>Hiking the shoulder:</strong> Keep shoulders down during stretches</li>
            <li><strong>Ignoring strengthening:</strong> Combine stretching with rotator cuff exercises</li>
            <li><strong>Stretching cold:</strong> Warm up first or stretch after activity</li>
          </ul>

          <h2>When Stretching Isn&apos;t Enough</h2>
          <p>
            See a professional if you have:
          </p>
          <ul>
            <li>Sharp pain with stretching</li>
            <li>Shoulder pain that radiates down your arm</li>
            <li>Clicking, catching, or locking</li>
            <li>Significant strength loss</li>
            <li>History of shoulder dislocation</li>
            <li>Pain that doesn&apos;t improve after 2-3 weeks of stretching</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Shoulder mobility requires a multi-angle approach. Stretch your chest, lats, upper traps, and rotator cuff muscles. Combine stretching with strengthening—especially for the mid and lower traps, rhomboids, and rotator cuff.
          </p>
          <p>
            Five minutes daily beats an hour once a week. Consistency wins.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete shoulder mobility program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized routines targeting your specific shoulder limitations.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </article>
    </div>
  );
}
