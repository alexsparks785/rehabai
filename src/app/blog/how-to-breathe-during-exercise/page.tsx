import Link from 'next/link';

export const metadata = {
  title: 'How to Breathe During Exercise: Complete Guide | Foundational Rehab',
  description: 'Proper breathing improves performance and prevents injury. Learn how to breathe for different types of exercise.',
};

export default function HowToBreatheDuringExercisePage() {
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
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Education</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Breathe During Exercise: Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Breathing wrong can limit performance and increase injury risk. Here&apos;s how to do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Most people don&apos;t think about breathing during exercise—they just do it. But proper breathing can improve your performance, protect your spine, and help you train harder and longer. Different exercises require different breathing strategies.
          </p>

          <h2>Why Breathing Matters</h2>
          <ul>
            <li><strong>Oxygen delivery</strong> — Muscles need oxygen to work</li>
            <li><strong>Core stability</strong> — Proper breathing creates intra-abdominal pressure</li>
            <li><strong>Performance</strong> — Good breathing = more reps, more power</li>
            <li><strong>Blood pressure</strong> — Poor breathing can spike BP dangerously</li>
            <li><strong>Recovery</strong> — Breathing between sets aids recovery</li>
          </ul>

          <h2>Breathing for Strength Training</h2>

          <h3>The Basic Rule</h3>
          <ul>
            <li><strong>Exhale during exertion</strong> (the hard part)</li>
            <li><strong>Inhale during the easier part</strong></li>
          </ul>

          <h3>Examples</h3>
          <ul>
            <li><strong>Push-up:</strong> Inhale going down, exhale pushing up</li>
            <li><strong>Squat:</strong> Inhale going down, exhale standing up</li>
            <li><strong>Bicep curl:</strong> Exhale curling up, inhale lowering</li>
            <li><strong>Bench press:</strong> Inhale lowering bar, exhale pressing</li>
          </ul>

          <h3>The Valsalva Maneuver (Heavy Lifting)</h3>
          <p>
            For heavy lifts, experienced lifters often use the Valsalva:
          </p>
          <ul>
            <li>Take a deep breath before the rep</li>
            <li>Brace your core (like someone&apos;s going to punch you)</li>
            <li>Hold breath during the rep</li>
            <li>Exhale after completing the rep</li>
          </ul>
          <p>
            <strong>Caution:</strong> This temporarily increases blood pressure. Avoid if you have heart conditions or high blood pressure. For most people doing moderate weights, regular exhale-on-exertion is fine.
          </p>

          <h2>Breathing for Cardio</h2>

          <h3>Running and Jogging</h3>
          <ul>
            <li>Breathe rhythmically in sync with your steps</li>
            <li>Common patterns: 3:2 (inhale 3 steps, exhale 2) or 2:2</li>
            <li>Breathe through nose and mouth—mouth breathing is fine during intensity</li>
            <li>If you can&apos;t hold a conversation, slow down (unless doing interval training)</li>
          </ul>

          <h3>Cycling</h3>
          <ul>
            <li>Deep, rhythmic breaths</li>
            <li>Belly breathing preferred over shallow chest breathing</li>
            <li>Sync with cadence if helpful</li>
          </ul>

          <h3>Swimming</h3>
          <ul>
            <li>Exhale continuously underwater</li>
            <li>Inhale quickly when head turns</li>
            <li>Don&apos;t hold breath underwater (common mistake)</li>
          </ul>

          <h3>HIIT</h3>
          <ul>
            <li>During work: breathe as needed—gasping is normal</li>
            <li>During rest: focus on deep recovery breaths</li>
            <li>Belly breathing helps recovery between intervals</li>
          </ul>

          <h2>Breathing for Stretching and Yoga</h2>
          <ul>
            <li>Breathe slowly and deeply</li>
            <li>Exhale as you deepen a stretch</li>
            <li>Never hold your breath during stretches</li>
            <li>Diaphragmatic (belly) breathing preferred</li>
            <li>Use breath to relax into positions</li>
          </ul>

          <h2>Breathing for Core Exercises</h2>

          <h3>Planks</h3>
          <ul>
            <li>Don&apos;t hold your breath!</li>
            <li>Breathe normally, keeping core braced</li>
            <li>Small, controlled breaths</li>
          </ul>

          <h3>Crunches/Sit-ups</h3>
          <ul>
            <li>Exhale as you crunch up</li>
            <li>Inhale as you lower</li>
          </ul>

          <h3>Dead Bugs/Bird Dogs</h3>
          <ul>
            <li>Exhale as you extend</li>
            <li>Inhale as you return</li>
            <li>Maintain core engagement throughout</li>
          </ul>

          <h2>Diaphragmatic Breathing (Belly Breathing)</h2>
          <p>
            This is how you should breathe most of the time:
          </p>
          <ol>
            <li>Place hand on belly</li>
            <li>Inhale through nose, letting belly rise (chest stays relatively still)</li>
            <li>Exhale through mouth, belly falls</li>
            <li>Practice 5-10 minutes daily</li>
          </ol>
          <p>
            Most people chest-breathe (shallow), which is less efficient and can increase stress.
          </p>

          <h2>Common Breathing Mistakes</h2>
          <ul>
            <li><strong>Holding breath during moderate exercise</strong> — Causes unnecessary BP spikes</li>
            <li><strong>Shallow chest breathing</strong> — Less efficient, increases fatigue</li>
            <li><strong>Breathing too fast</strong> — Can cause hyperventilation</li>
            <li><strong>Forgetting to breathe</strong> — Concentration can make you hold breath</li>
            <li><strong>Reverse breathing</strong> — Inhaling on exertion (wrong)</li>
          </ul>

          <h2>Quick Reference</h2>
          <ul>
            <li><strong>Strength training:</strong> Exhale on effort, inhale on return</li>
            <li><strong>Cardio:</strong> Rhythmic breathing, belly breaths, mouth is fine</li>
            <li><strong>Stretching:</strong> Slow exhale to deepen, never hold breath</li>
            <li><strong>Core work:</strong> Keep breathing while braced</li>
            <li><strong>Heavy lifts:</strong> Brace and brief hold okay (Valsalva) if healthy</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Proper breathing improves performance, protects your body, and helps you train harder. The simple rule—exhale on exertion—works for most exercises. For cardio, focus on rhythmic belly breathing. And never sacrifice breath control for an extra rep.
          </p>
          <p>
            If breathing feels wrong or you get dizzy, stop and reset. Good breathing should feel natural once you learn the patterns.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want exercise guidance with proper form?
          </h3>
          <p className="text-gray-600 mb-4">
            Get workouts that include breathing cues and technique tips.
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
