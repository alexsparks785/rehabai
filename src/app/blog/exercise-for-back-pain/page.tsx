import Link from 'next/link';

export const metadata = {
  title: 'Exercise for Back Pain: What Works and What to Avoid | Foundational Rehab',
  description: 'Movement is medicine for most back pain. Learn which exercises help, which to avoid, and how to build a pain-free back.',
};

export default function ExerciseForBackPainPage() {
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
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Pain Relief</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercise for Back Pain: What Works and What to Avoid
          </h1>
          <p className="text-xl text-gray-600">
            The research is clear: for most back pain, movement is the best medicine.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            If you have back pain, your instinct might be to rest and avoid movement. That instinct is usually wrong. For the vast majority of back pain, staying active and doing the right exercises leads to faster recovery and prevents future episodes.
          </p>
          <p>
            Here&apos;s what actually works for back pain, what to avoid, and how to build a resilient spine.
          </p>

          <h2>Why Exercise Helps Back Pain</h2>
          <ul>
            <li><strong>Increases blood flow</strong> — Delivers nutrients and removes waste from healing tissues</li>
            <li><strong>Reduces stiffness</strong> — Movement prevents muscles and joints from tightening up</li>
            <li><strong>Builds support</strong> — Stronger core and back muscles protect the spine</li>
            <li><strong>Modulates pain</strong> — Exercise changes how your brain processes pain signals</li>
            <li><strong>Prevents deconditioning</strong> — Avoiding movement makes pain worse long-term</li>
          </ul>
          <p>
            Research consistently shows that people who stay active recover faster than those who rest. Bed rest is now considered harmful for most back pain.
          </p>

          <h2>First: Rule Out Red Flags</h2>
          <p>
            <strong>See a doctor immediately if you have:</strong>
          </p>
          <ul>
            <li>Loss of bladder or bowel control</li>
            <li>Numbness in groin/saddle area</li>
            <li>Progressive leg weakness</li>
            <li>Back pain with fever</li>
            <li>History of cancer with new back pain</li>
            <li>Back pain from significant trauma</li>
          </ul>
          <p>
            These are rare but require immediate medical attention. For most back pain, exercise is safe and beneficial.
          </p>

          <h2>Best Exercises for Back Pain</h2>

          <h3>1. Walking</h3>
          <p>
            Simple but effective:
          </p>
          <ul>
            <li>Start with short walks (10-15 minutes)</li>
            <li>Gradually increase duration</li>
            <li>Gentle, rhythmic motion reduces stiffness</li>
            <li>Can be done even with significant pain</li>
          </ul>

          <h3>2. Core Stabilization</h3>
          <p>
            The foundation of back health:
          </p>
          <ul>
            <li><strong>Bird dog</strong> — On all fours, extend opposite arm and leg</li>
            <li><strong>Dead bug</strong> — On back, lower opposite arm and leg while keeping back flat</li>
            <li><strong>Plank</strong> — Hold straight body position (start with modified version)</li>
            <li><strong>Side plank</strong> — Builds lateral core stability</li>
          </ul>

          <h3>3. Hip and Glute Strengthening</h3>
          <p>
            Weak hips often contribute to back pain:
          </p>
          <ul>
            <li><strong>Glute bridges</strong> — Lie on back, lift hips</li>
            <li><strong>Clamshells</strong> — Side-lying, open and close knees</li>
            <li><strong>Hip hikes</strong> — Stand on one leg, drop and lift opposite hip</li>
          </ul>

          <h3>4. Mobility Work</h3>
          <p>
            Keep the spine moving:
          </p>
          <ul>
            <li><strong>Cat-cow</strong> — Alternate arching and rounding spine</li>
            <li><strong>Knee-to-chest</strong> — Pull one or both knees toward chest</li>
            <li><strong>Pelvic tilts</strong> — Flatten and arch lower back rhythmically</li>
            <li><strong>Trunk rotations</strong> — Gentle twisting while lying on back</li>
          </ul>

          <h3>5. Extension Exercises (For Many People)</h3>
          <p>
            Particularly helpful for disc-related pain:
          </p>
          <ul>
            <li><strong>Prone press-ups</strong> — Lie face down, press up while keeping hips down</li>
            <li><strong>Standing extension</strong> — Hands on lower back, gently arch backward</li>
          </ul>
          <p>
            <em>Note: Extension helps many people but not everyone. If it increases your pain, stop.</em>
          </p>

          <h2>Exercises to Approach with Caution</h2>
          <p>
            These aren&apos;t universally bad, but they aggravate some types of back pain:
          </p>
          <ul>
            <li><strong>Toe touches</strong> — Loaded forward bending can stress discs</li>
            <li><strong>Sit-ups/crunches</strong> — Create high spinal compression</li>
            <li><strong>Leg raises</strong> — Can strain lower back if core is weak</li>
            <li><strong>Heavy deadlifts</strong> — Not during acute pain episodes</li>
            <li><strong>High-impact activities</strong> — Running, jumping during flare-ups</li>
          </ul>
          <p>
            Once your back is stronger and pain-free, many of these can be reintroduced gradually.
          </p>

          <h2>Exercise by Pain Type</h2>

          <h3>If Pain Is Worse with Sitting/Bending Forward</h3>
          <ul>
            <li>Often disc-related</li>
            <li>Extension exercises usually help</li>
            <li>Avoid prolonged sitting and forward bending</li>
            <li>Focus on hip hinge mechanics</li>
          </ul>

          <h3>If Pain Is Worse with Standing/Walking</h3>
          <ul>
            <li>May be stenosis or facet-related</li>
            <li>Flexion exercises often help</li>
            <li>Cycling or swimming may be better than walking</li>
            <li>Avoid prolonged standing and extension</li>
          </ul>

          <h3>If Pain Is on One Side</h3>
          <ul>
            <li>May have directional preference</li>
            <li>Try side-gliding exercises toward the painful side</li>
            <li>Asymmetrical core exercises can help</li>
          </ul>

          <h2>Sample Back Pain Exercise Routine</h2>
          <p>
            <strong>Do this daily during recovery:</strong>
          </p>
          <ul>
            <li>5-min walk to warm up</li>
            <li>Cat-cow: 10 reps</li>
            <li>Pelvic tilts: 10 reps</li>
            <li>Knee-to-chest: 30 sec each side</li>
            <li>Bird dog: 8 reps each side</li>
            <li>Glute bridge: 10 reps</li>
            <li>Dead bug: 8 reps each side</li>
            <li>Prone press-up (if tolerated): 10 reps</li>
            <li>5-10 min walk</li>
          </ul>
          <p>
            <strong>Total time:</strong> 15-20 minutes
          </p>

          <h2>Building a Pain-Free Back Long-Term</h2>
          <ul>
            <li><strong>Consistency over intensity</strong> — Daily gentle exercise beats occasional hard workouts</li>
            <li><strong>Progressive overload</strong> — Gradually increase demands on your back</li>
            <li><strong>Address the whole chain</strong> — Hips, glutes, and thoracic spine affect your lower back</li>
            <li><strong>Don&apos;t fear movement</strong> — Your back is strong and resilient</li>
            <li><strong>Manage stress</strong> — Psychological factors significantly affect back pain</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            For the vast majority of back pain, exercise is the best treatment. Walking, core stabilization, hip strengthening, and mobility work form the foundation of a healthy back. Staying active, even when it&apos;s uncomfortable, leads to faster recovery than resting.
          </p>
          <p>
            Start gentle, stay consistent, and gradually build strength. Your back is more resilient than you think—it just needs the right stimulus to heal and get stronger.
          </p>
          <p>
            If pain persists beyond 6-8 weeks or you have any red flag symptoms, see a healthcare provider. But for most people, the prescription is simple: keep moving.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to build a stronger, pain-free back?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercises based on your specific back pain.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Foundational Rehab Free
          </Link>
        </div>
      </article>
    </div>
  );
}
