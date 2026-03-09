import Link from 'next/link';

export const metadata = {
  title: 'Stretches for Runners: Pre-Run, Post-Run, and Recovery | Foundational Rehab',
  description: 'The right stretches at the right time keep runners healthy and performing well. Complete guide to runner stretching.',
};

export default function StretchesForRunnersPage() {
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
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Mobility</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stretches for Runners: Pre-Run, Post-Run, and Recovery
          </h1>
          <p className="text-xl text-gray-600">
            Stretching for runners isn&apos;t one-size-fits-all. Timing and type matter.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Runners have a complicated relationship with stretching. Some swear by it, others skip it entirely. The truth? Stretching matters—but the type and timing make all the difference between helping and hurting your running.
          </p>
          <p>
            Here&apos;s the evidence-based approach to stretching for runners.
          </p>

          <h2>The Big Picture: When to Stretch What</h2>
          <ul>
            <li><strong>Before running:</strong> Dynamic stretches (movement-based)</li>
            <li><strong>After running:</strong> Static stretches (hold positions)</li>
            <li><strong>Recovery days:</strong> Longer static stretching, foam rolling</li>
          </ul>
          <p>
            This isn&apos;t arbitrary—research shows static stretching before running can temporarily reduce power and performance, while dynamic movement prepares muscles for activity.
          </p>

          <h2>Pre-Run: Dynamic Warm-Up (5-10 minutes)</h2>
          <p>
            These movements increase blood flow, activate muscles, and prepare your body for running:
          </p>

          <h3>1. Leg Swings (Front to Back)</h3>
          <ul>
            <li>Hold something for balance</li>
            <li>Swing one leg forward and back</li>
            <li>Keep swings controlled, gradually increase range</li>
            <li>15-20 swings each leg</li>
          </ul>

          <h3>2. Leg Swings (Side to Side)</h3>
          <ul>
            <li>Face your support</li>
            <li>Swing leg across body and out to side</li>
            <li>15-20 swings each leg</li>
          </ul>

          <h3>3. Walking Lunges</h3>
          <ul>
            <li>Step forward into lunge</li>
            <li>Keep front knee over ankle</li>
            <li>Push off and step into next lunge</li>
            <li>10 each leg</li>
          </ul>

          <h3>4. High Knees</h3>
          <ul>
            <li>Jog in place, driving knees high</li>
            <li>Pump arms naturally</li>
            <li>20-30 seconds</li>
          </ul>

          <h3>5. Butt Kicks</h3>
          <ul>
            <li>Jog in place, kicking heels to glutes</li>
            <li>Quick, light movement</li>
            <li>20-30 seconds</li>
          </ul>

          <h3>6. A-Skips</h3>
          <ul>
            <li>Skip forward, driving one knee up</li>
            <li>Opposite arm swings forward</li>
            <li>10-15 each leg</li>
          </ul>

          <h2>Post-Run: Static Stretches (5-10 minutes)</h2>
          <p>
            Hold each stretch 30-60 seconds. Don&apos;t bounce. Breathe and relax into the stretch.
          </p>

          <h3>1. Standing Quad Stretch</h3>
          <ul>
            <li>Stand on one leg (hold something if needed)</li>
            <li>Pull foot toward glute</li>
            <li>Keep knees together</li>
            <li>Feel stretch in front of thigh</li>
          </ul>

          <h3>2. Standing Calf Stretch</h3>
          <ul>
            <li>Face wall, hands on wall</li>
            <li>Step one foot back, keep heel down</li>
            <li>Lean into wall until you feel calf stretch</li>
            <li>Repeat with back knee slightly bent (hits soleus)</li>
          </ul>

          <h3>3. Standing Hamstring Stretch</h3>
          <ul>
            <li>Place heel on low surface (curb, step)</li>
            <li>Keep leg straight, hinge forward at hips</li>
            <li>Keep back flat, not rounded</li>
          </ul>

          <h3>4. Hip Flexor Stretch</h3>
          <ul>
            <li>Kneel on one knee (pad if needed)</li>
            <li>Front foot flat, knee at 90°</li>
            <li>Tuck pelvis under, lean slightly forward</li>
            <li>Feel stretch in front of back hip</li>
          </ul>

          <h3>5. Figure-4 Glute Stretch</h3>
          <ul>
            <li>Lie on back</li>
            <li>Cross ankle over opposite knee</li>
            <li>Pull bottom leg toward chest</li>
            <li>Feel stretch in outer hip/glute</li>
          </ul>

          <h3>6. IT Band Stretch</h3>
          <ul>
            <li>Stand, cross one leg behind the other</li>
            <li>Lean away from back leg</li>
            <li>Feel stretch along outer thigh</li>
          </ul>

          <h2>Recovery Day Routine (15-20 minutes)</h2>
          <p>
            On rest days, you can do longer, deeper stretching:
          </p>
          <ul>
            <li>All post-run stretches, held 60-90 seconds each</li>
            <li>Add: pigeon pose for deep hip opening</li>
            <li>Add: seated forward fold for hamstrings and back</li>
            <li>Add: supine twist for lower back</li>
            <li>Foam rolling: quads, hamstrings, calves, IT band (2-3 minutes per area)</li>
          </ul>

          <h2>Stretches for Common Runner Problems</h2>

          <h3>Tight IT Band / Knee Pain</h3>
          <ul>
            <li>Standing IT band stretch</li>
            <li>Foam rolling outer thigh</li>
            <li>Hip strengthening (often the root cause)</li>
          </ul>

          <h3>Tight Calves / Achilles Issues</h3>
          <ul>
            <li>Wall calf stretch (straight and bent knee)</li>
            <li>Eccentric calf raises</li>
            <li>Foam rolling calves</li>
          </ul>

          <h3>Tight Hip Flexors / Lower Back Pain</h3>
          <ul>
            <li>Kneeling hip flexor stretch</li>
            <li>Couch stretch</li>
            <li>Glute strengthening</li>
          </ul>

          <h3>Hamstring Tightness</h3>
          <ul>
            <li>Standing or lying hamstring stretch</li>
            <li>Active hamstring stretches (leg swings)</li>
            <li>Eccentric hamstring work (Nordic curls)</li>
          </ul>

          <h2>Common Mistakes Runners Make</h2>
          <ul>
            <li><strong>Static stretching before running</strong> — Can reduce power; save it for after</li>
            <li><strong>Skipping the warm-up</strong> — Cold muscles don&apos;t stretch well or perform well</li>
            <li><strong>Bouncing in stretches</strong> — Creates micro-tears; hold steady instead</li>
            <li><strong>Stretching through pain</strong> — Discomfort is okay, pain is not</li>
            <li><strong>Only stretching after hard runs</strong> — Every run deserves a cool-down</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            For runners, stretching isn&apos;t optional—but it needs to be done right. Dynamic warm-up before you run, static stretching after, and deeper work on recovery days. This approach keeps muscles healthy, reduces injury risk, and may even improve performance.
          </p>
          <p>
            The 10-15 minutes you invest in proper stretching pays off in fewer injuries and more enjoyable miles. Don&apos;t skip it.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want a complete runner&apos;s mobility program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized stretching routines based on your running goals.
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
