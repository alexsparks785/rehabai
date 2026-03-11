import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Arthritis: Safe Movement for Joint Pain Relief | Foundational Rehab',
  description: 'Exercise is medicine for arthritis. Learn the best exercises for joint pain, stiffness, and inflammation—without making symptoms worse.',
};

export default function ExercisesForArthritisPage() {
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
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Rehab</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Arthritis: Safe Movement for Joint Pain Relief
          </h1>
          <p className="text-xl text-gray-600">
            Exercise is one of the most effective treatments for arthritis. Here&apos;s how to move safely and reduce pain.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            When your joints hurt, exercise feels counterintuitive. But avoiding movement is the worst thing you can do for arthritis. Regular exercise reduces pain, improves function, and slows disease progression.
          </p>
          <p>
            The key is doing the <em>right</em> exercises, the <em>right</em> way. Let&apos;s break down what works.
          </p>

          <h2>Why Exercise Helps Arthritis</h2>
          <ul>
            <li><strong>Strengthens muscles:</strong> Strong muscles protect and support joints</li>
            <li><strong>Improves lubrication:</strong> Movement pumps synovial fluid through joints</li>
            <li><strong>Reduces stiffness:</strong> Regular motion prevents joints from &quot;freezing&quot;</li>
            <li><strong>Decreases inflammation:</strong> Exercise has anti-inflammatory effects</li>
            <li><strong>Maintains range of motion:</strong> Use it or lose it</li>
            <li><strong>Supports weight management:</strong> Less weight = less joint stress</li>
          </ul>
          <p>
            Research consistently shows: people with arthritis who exercise have less pain and better function than those who don&apos;t.
          </p>

          <h2>Types of Arthritis: Exercise Considerations</h2>

          <h3>Osteoarthritis (OA)</h3>
          <p>
            The &quot;wear and tear&quot; type. Focus on:
          </p>
          <ul>
            <li>Low-impact cardio (walking, swimming, cycling)</li>
            <li>Strength training to support joints</li>
            <li>Range of motion exercises</li>
            <li>Avoiding high-impact activities on affected joints</li>
          </ul>

          <h3>Rheumatoid Arthritis (RA)</h3>
          <p>
            An autoimmune condition. Additional considerations:
          </p>
          <ul>
            <li>Avoid exercise during flares</li>
            <li>Gentle range of motion during active inflammation</li>
            <li>Progress slowly when symptoms improve</li>
            <li>Work with your rheumatologist on exercise timing</li>
          </ul>

          <h2>Range of Motion Exercises</h2>
          <p>
            Do these daily to maintain joint mobility. Move gently through your full available range.
          </p>

          <h3>Finger Exercises</h3>
          <ol>
            <li><strong>Finger spread:</strong> Spread fingers wide, hold 5 seconds, relax. Repeat 10 times.</li>
            <li><strong>Finger bends:</strong> Bend each finger to touch palm, one at a time. 5 times each.</li>
            <li><strong>Thumb circles:</strong> Circle your thumb 10 times each direction.</li>
            <li><strong>Fist open/close:</strong> Make a gentle fist, then spread fingers wide. 10 times.</li>
          </ol>

          <h3>Wrist Circles</h3>
          <ol>
            <li>Extend your arms in front of you</li>
            <li>Make slow circles with your wrists</li>
            <li>10 circles each direction</li>
          </ol>

          <h3>Shoulder Circles</h3>
          <ol>
            <li>Shrug shoulders up toward ears</li>
            <li>Roll them back and down</li>
            <li>10 circles backward, 10 forward</li>
          </ol>

          <h3>Ankle Circles</h3>
          <ol>
            <li>Sit or lie down</li>
            <li>Lift one foot off the ground</li>
            <li>Circle your ankle slowly</li>
            <li>10 circles each direction, each ankle</li>
          </ol>

          <h3>Knee Bends</h3>
          <ol>
            <li>Sit in a chair</li>
            <li>Slowly straighten one knee</li>
            <li>Hold 3 seconds</li>
            <li>Slowly bend back to starting position</li>
            <li>10 times each leg</li>
          </ol>

          <h2>Strengthening Exercises</h2>
          <p>
            Strong muscles take pressure off joints. Focus on gentle, controlled movements.
          </p>

          <h3>Wall Push-Ups</h3>
          <ol>
            <li>Stand arm&apos;s length from a wall</li>
            <li>Place hands on wall at shoulder height</li>
            <li>Bend elbows, lean toward wall</li>
            <li>Push back to start</li>
          </ol>
          <p><em>Do 10-15 reps, 2 sets</em></p>

          <h3>Chair Sit-to-Stand</h3>
          <ol>
            <li>Sit on edge of a sturdy chair</li>
            <li>Stand up using legs (use hands on armrests if needed)</li>
            <li>Sit back down slowly—don&apos;t plop</li>
          </ol>
          <p><em>Do 8-10 reps, 2 sets</em></p>
          <p>This strengthens quads and glutes—critical for knee and hip arthritis.</p>

          <h3>Seated Leg Extensions</h3>
          <ol>
            <li>Sit tall in a chair</li>
            <li>Extend one leg straight out</li>
            <li>Hold 3-5 seconds, squeezing thigh</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Do 10-12 each leg, 2 sets</em></p>

          <h3>Calf Raises</h3>
          <ol>
            <li>Stand behind a chair, hands on back</li>
            <li>Rise up onto your toes</li>
            <li>Hold briefly</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Do 10-15 reps, 2 sets</em></p>

          <h3>Resistance Band Exercises</h3>
          <p>
            Bands provide gentle, adjustable resistance. Good options:
          </p>
          <ul>
            <li><strong>Seated rows:</strong> Band under feet, pull elbows back</li>
            <li><strong>Lateral band walks:</strong> Band around ankles, sidestep</li>
            <li><strong>Band pull-aparts:</strong> Hold band in front, pull hands apart</li>
          </ul>

          <h2>Low-Impact Cardio</h2>
          <p>
            Aim for 150 minutes per week. Best options for arthritic joints:
          </p>

          <h3>Walking</h3>
          <p>
            The gold standard. Start with 10-15 minutes, gradually increase. Good shoes matter.
          </p>

          <h3>Swimming/Water Aerobics</h3>
          <p>
            Water supports your body weight—reducing joint stress by up to 90%. Ideal for all types of arthritis.
          </p>

          <h3>Cycling (Stationary or Regular)</h3>
          <p>
            Low impact on knees and hips. Keep resistance moderate.
          </p>

          <h3>Elliptical</h3>
          <p>
            Smooth motion without impact. Good alternative to treadmill.
          </p>

          <h2>Exercises by Joint</h2>

          <h3>Knee Arthritis</h3>
          <ul>
            <li>Quad sets (tighten thigh, hold 5 seconds)</li>
            <li>Straight leg raises</li>
            <li>Seated leg extensions</li>
            <li>Step-ups (low step)</li>
            <li>Cycling (low resistance)</li>
            <li>Swimming</li>
          </ul>
          <p><strong>Avoid:</strong> Deep squats, lunges, high-impact jumping</p>

          <h3>Hip Arthritis</h3>
          <ul>
            <li>Hip circles (standing or lying)</li>
            <li>Clamshells</li>
            <li>Bridges</li>
            <li>Standing hip abduction</li>
            <li>Walking, swimming, cycling</li>
          </ul>
          <p><strong>Avoid:</strong> Excessive hip flexion, crossing legs</p>

          <h3>Hand/Finger Arthritis</h3>
          <ul>
            <li>Finger spreads and bends</li>
            <li>Putty or stress ball squeezes</li>
            <li>Thumb opposition (touch each fingertip)</li>
            <li>Gentle grip exercises</li>
          </ul>
          <p><strong>Tip:</strong> Warm hands in warm water before exercises</p>

          <h3>Shoulder Arthritis</h3>
          <ul>
            <li>Pendulum swings</li>
            <li>Wall slides</li>
            <li>External rotation with band (low resistance)</li>
            <li>Passive range of motion (use good arm to move affected arm)</li>
          </ul>
          <p><strong>Avoid:</strong> Heavy overhead pressing</p>

          <h3>Spine Arthritis</h3>
          <ul>
            <li>Cat-cow stretches (gentle)</li>
            <li>Pelvic tilts</li>
            <li>Bird dogs</li>
            <li>Dead bugs</li>
            <li>Walking</li>
          </ul>
          <p><strong>Avoid:</strong> Extreme flexion or extension, heavy lifting</p>

          <h2>Sample Weekly Schedule</h2>
          <ul>
            <li><strong>Daily:</strong> Range of motion exercises (10 min)</li>
            <li><strong>Mon/Wed/Fri:</strong> Strengthening (15-20 min)</li>
            <li><strong>Tue/Thu/Sat:</strong> Low-impact cardio (20-30 min)</li>
            <li><strong>Sunday:</strong> Gentle stretching or rest</li>
          </ul>

          <h2>Managing Flares</h2>
          <p>
            When joints are actively inflamed:
          </p>
          <ul>
            <li><strong>Reduce intensity</strong> but don&apos;t stop completely</li>
            <li><strong>Focus on gentle range of motion</strong> to prevent stiffness</li>
            <li><strong>Skip strength training</strong> until inflammation subsides</li>
            <li><strong>Use ice</strong> after gentle movement</li>
            <li><strong>Listen to your body</strong>—pain that lasts &gt;2 hours after exercise means you did too much</li>
          </ul>

          <h2>Exercise Tips for Arthritis</h2>
          <ul>
            <li><strong>Warm up:</strong> 5-10 minutes of gentle movement before exercise</li>
            <li><strong>Start low, go slow:</strong> You can always add more</li>
            <li><strong>Move through pain-free range:</strong> Some discomfort is okay; sharp pain is not</li>
            <li><strong>Exercise when stiffness is lowest:</strong> Often mid-morning or after a warm shower</li>
            <li><strong>Use heat before, ice after:</strong> Heat loosens joints; ice reduces post-exercise swelling</li>
            <li><strong>Be consistent:</strong> Regular movement beats occasional intense sessions</li>
            <li><strong>Protect your joints:</strong> Use proper form, avoid overloading affected joints</li>
          </ul>

          <h2>The 2-Hour Rule</h2>
          <p>
            If your pain is worse 2 hours after exercise than before, you did too much. Scale back next time.
          </p>
          <p>
            Some discomfort during exercise is normal. Pain that persists or worsens is a sign to adjust.
          </p>

          <h2>When to See a Professional</h2>
          <ul>
            <li>Significant increase in joint swelling</li>
            <li>New or worsening pain that doesn&apos;t improve</li>
            <li>Joints that feel &quot;locked&quot; or give way</li>
            <li>Fever along with joint symptoms (could indicate infection)</li>
            <li>Difficulty with basic daily activities</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Exercise is one of the most powerful treatments for arthritis—often as effective as medication for pain relief. The key is finding the right type and dose for your body.
          </p>
          <p>
            Start gently, stay consistent, and listen to your joints. Movement is medicine.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Need an arthritis-friendly exercise program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized, joint-safe exercise programs based on your specific condition and limitations.
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
