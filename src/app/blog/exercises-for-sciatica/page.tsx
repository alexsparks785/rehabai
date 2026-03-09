import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Sciatica: Relieve Nerve Pain Naturally | Foundational Rehab',
  description: 'The right exercises can calm sciatic nerve pain. Learn which stretches and movements help—and which to avoid.',
};

export default function ExercisesForSciaticaPage() {
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
            Exercises for Sciatica: Relieve Nerve Pain Naturally
          </h1>
          <p className="text-xl text-gray-600">
            That shooting pain down your leg? Exercise can help—if you do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Sciatica—pain that radiates from your lower back down through your buttock and leg—can be debilitating. But for most people, the right exercises provide significant relief. The key is understanding what&apos;s causing your sciatica and choosing exercises accordingly.
          </p>

          <h2>When to See a Doctor Immediately</h2>
          <p>
            <strong>Seek emergency care if you have:</strong>
          </p>
          <ul>
            <li>Loss of bladder or bowel control</li>
            <li>Numbness in groin/saddle area</li>
            <li>Sudden severe weakness in your leg</li>
            <li>Sciatica after significant trauma</li>
          </ul>
          <p>
            These are signs of cauda equina syndrome, a rare but serious condition requiring immediate treatment.
          </p>

          <h2>Understanding Sciatica Causes</h2>
          <p>
            Sciatica has different causes, and the best exercises depend on yours:
          </p>
          <ul>
            <li><strong>Disc herniation</strong> — Disc bulges and presses on nerve (most common)</li>
            <li><strong>Spinal stenosis</strong> — Narrowing of spinal canal (more common with age)</li>
            <li><strong>Piriformis syndrome</strong> — Piriformis muscle compresses sciatic nerve</li>
          </ul>

          <h3>Key Distinction</h3>
          <ul>
            <li><strong>Disc-related sciatica:</strong> Usually worse with sitting and forward bending; better with standing and extension</li>
            <li><strong>Stenosis-related sciatica:</strong> Usually worse with standing and walking; better with sitting and flexion</li>
          </ul>
          <p>
            Pay attention to what makes your symptoms better or worse—this guides exercise selection.
          </p>

          <h2>Exercises for Disc-Related Sciatica</h2>
          <p>
            If your pain is worse with sitting and forward bending, these extension-based exercises often help:
          </p>

          <h3>1. Prone Lying</h3>
          <ul>
            <li>Lie face down, arms at sides</li>
            <li>Simply rest in this position</li>
            <li>Start with 5-10 minutes</li>
            <li>May feel uncomfortable initially but often helps</li>
          </ul>

          <h3>2. Prone Press-Ups (McKenzie Extension)</h3>
          <ul>
            <li>Lie face down</li>
            <li>Place hands under shoulders</li>
            <li>Press up, keeping hips on floor</li>
            <li>Let lower back arch</li>
            <li>Lower and repeat 10 times</li>
            <li>Do every 2-3 hours</li>
          </ul>
          <p><em>This is often the most effective exercise for disc herniations.</em></p>

          <h3>3. Standing Extension</h3>
          <ul>
            <li>Stand with hands on lower back</li>
            <li>Gently lean backward</li>
            <li>Hold 2-3 seconds</li>
            <li>Return to standing</li>
            <li>Repeat 10 times</li>
          </ul>
          <p><em>Good for when you can&apos;t lie down.</em></p>

          <h2>Exercises for Stenosis-Related Sciatica</h2>
          <p>
            If your pain is worse with standing and walking, flexion-based exercises often help:
          </p>

          <h3>4. Knees-to-Chest</h3>
          <ul>
            <li>Lie on back</li>
            <li>Pull both knees toward chest</li>
            <li>Hold 30-60 seconds</li>
            <li>Repeat 2-3 times</li>
          </ul>

          <h3>5. Seated Forward Bend</h3>
          <ul>
            <li>Sit in chair</li>
            <li>Slowly bend forward, letting arms hang</li>
            <li>Hold 30 seconds</li>
            <li>Return slowly</li>
          </ul>

          <h3>6. Stationary Bike</h3>
          <ul>
            <li>Cycling position opens the spine</li>
            <li>Often well-tolerated with stenosis</li>
            <li>Start with 5-10 minutes, progress gradually</li>
          </ul>

          <h2>Exercises for All Types of Sciatica</h2>

          <h3>7. Sciatic Nerve Glide</h3>
          <ul>
            <li>Sit on chair, slouch slightly</li>
            <li>Straighten affected leg while looking up</li>
            <li>Bend knee and look down</li>
            <li>Gentle movement, not aggressive stretching</li>
            <li>10-15 repetitions, 2-3 times daily</li>
          </ul>
          <p><em>Helps the nerve move freely through tissues.</em></p>

          <h3>8. Figure-4 Stretch (Piriformis)</h3>
          <ul>
            <li>Lie on back</li>
            <li>Cross ankle over opposite knee</li>
            <li>Pull bottom thigh toward chest</li>
            <li>Hold 30-60 seconds each side</li>
          </ul>
          <p><em>Especially helpful if piriformis is contributing.</em></p>

          <h3>9. Cat-Cow</h3>
          <ul>
            <li>On hands and knees</li>
            <li>Alternate arching and rounding back</li>
            <li>Gentle movement, stay in pain-free range</li>
            <li>10-15 repetitions</li>
          </ul>

          <h3>10. Walking</h3>
          <ul>
            <li>Short walks often help (start with 5-10 minutes)</li>
            <li>Keep moving—prolonged sitting often worsens symptoms</li>
            <li>May need to start very short if stenosis-related</li>
          </ul>

          <h2>Exercises to Avoid (Initially)</h2>
          <ul>
            <li><strong>Heavy lifting</strong> — Especially with bending</li>
            <li><strong>High-impact activities</strong> — Running, jumping</li>
            <li><strong>Toe touches</strong> — If disc-related</li>
            <li><strong>Prolonged standing</strong> — If stenosis-related</li>
            <li><strong>Any exercise that increases leg symptoms</strong></li>
          </ul>

          <h2>General Guidelines</h2>
          <ul>
            <li><strong>Centralization is good</strong> — If exercises make leg pain retreat toward the back, that&apos;s progress</li>
            <li><strong>Peripheralization is bad</strong> — If pain moves further down the leg, stop that exercise</li>
            <li><strong>Some back discomfort is okay</strong> — Especially if leg symptoms improve</li>
            <li><strong>Frequency matters</strong> — Doing exercises several times daily beats once</li>
            <li><strong>Be patient</strong> — Nerves heal slowly; improvement takes weeks to months</li>
          </ul>

          <h2>Sample Routine (Disc-Related)</h2>
          <p>
            <strong>Every 2-3 hours:</strong>
          </p>
          <ul>
            <li>Prone press-ups: 10 reps</li>
            <li>Standing extension: 10 reps</li>
          </ul>
          <p>
            <strong>2-3 times daily:</strong>
          </p>
          <ul>
            <li>Sciatic nerve glide: 10-15 reps</li>
            <li>Figure-4 stretch: 30 sec each side</li>
            <li>Short walk: 5-15 minutes</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Most sciatica improves with the right exercises—but &quot;right&quot; depends on what&apos;s causing it. Pay attention to what makes symptoms better or worse. Extension exercises (press-ups) often help disc-related sciatica, while flexion exercises help stenosis.
          </p>
          <p>
            Be consistent, be patient, and watch for centralization of symptoms. If exercises make leg symptoms worse, try a different approach. And if you have any red flag symptoms, see a doctor immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want personalized sciatica exercises?
          </h3>
          <p className="text-gray-600 mb-4">
            Get a program tailored to your specific symptoms.
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
