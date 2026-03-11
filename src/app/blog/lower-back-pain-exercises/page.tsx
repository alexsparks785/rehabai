import Link from 'next/link';

export const metadata = {
  title: 'Lower Back Pain Exercises: Relieve Pain and Build Stability | Foundational Rehab',
  description: 'Safe exercises for lower back pain relief. Evidence-based movements to reduce pain, strengthen your core, and prevent future episodes.',
};

export default function LowerBackPainExercisesPage() {
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
            Lower Back Pain Exercises: Relieve Pain and Build Stability
          </h1>
          <p className="text-xl text-gray-600">
            Movement is medicine for back pain. The right exercises can reduce pain, restore function, and prevent future episodes.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Lower back pain affects nearly everyone at some point. The instinct is to rest—but prolonged rest often makes it worse. Gentle, targeted movement is one of the most effective treatments.
          </p>
          <p>
            Here&apos;s what actually works, based on research and clinical practice.
          </p>

          <h2>Important: When to See a Doctor</h2>
          <p>Seek medical attention if you have:</p>
          <ul>
            <li>Pain that radiates down your leg past the knee</li>
            <li>Numbness, tingling, or weakness in legs/feet</li>
            <li>Loss of bladder or bowel control</li>
            <li>Pain following trauma or fall</li>
            <li>Pain that worsens at night or when lying down</li>
            <li>Unexplained weight loss with back pain</li>
            <li>Fever along with back pain</li>
          </ul>
          <p>These could indicate something more serious that requires medical evaluation.</p>

          <h2>Direction Preference: Flexion vs Extension</h2>
          <p>
            Not all back pain is the same. Some backs feel better with bending forward (flexion), others with arching backward (extension).
          </p>
          <p><strong>Test yourself:</strong></p>
          <ul>
            <li><strong>Lie face down, then prop up on elbows.</strong> If this feels good or reduces leg symptoms, you may be &quot;extension-preferring.&quot;</li>
            <li><strong>Lie on back, bring knees to chest.</strong> If this feels better, you may be &quot;flexion-preferring.&quot;</li>
          </ul>
          <p>Choose exercises that match your preference. If unsure, try gentle versions of both and see what helps.</p>

          <h2>Phase 1: Acute Pain Relief</h2>
          <p>When pain is sharp and movement is limited. Focus on gentle movement and pain relief.</p>

          <h3>Pelvic Tilts</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Flatten your lower back into the floor (posterior tilt)</li>
            <li>Then arch your lower back (anterior tilt)</li>
            <li>Move gently between positions</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 times daily</em></p>
          <p>Gets the spine moving without loading it.</p>

          <h3>Knee-to-Chest Stretch</h3>
          <ol>
            <li>Lie on back</li>
            <li>Bring one knee toward chest</li>
            <li>Hold behind thigh</li>
            <li>Hold 20-30 seconds</li>
            <li>Switch sides, then both knees together</li>
          </ol>
          <p><em>Sets: 2-3 each, multiple times daily</em></p>

          <h3>Cat-Cow</h3>
          <ol>
            <li>On all fours, hands under shoulders, knees under hips</li>
            <li>Inhale: drop belly, look up (cow)</li>
            <li>Exhale: round spine, tuck chin (cat)</li>
            <li>Move slowly through pain-free range</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 times daily</em></p>
          <p>Gently mobilizes the entire spine.</p>

          <h3>Supported Lying (Rest Position)</h3>
          <ol>
            <li>Lie on back</li>
            <li>Place pillows under knees or calves</li>
            <li>Rest here to unload the spine</li>
          </ol>
          <p>Use when pain is high. Short rest periods are okay; avoid prolonged bed rest.</p>

          <h2>Phase 2: Core Stabilization</h2>
          <p>As acute pain subsides. Build the muscular support system for your spine.</p>

          <h3>Dead Bug</h3>
          <ol>
            <li>Lie on back, arms toward ceiling, knees bent 90°</li>
            <li>Press lower back firmly into floor</li>
            <li>Slowly lower opposite arm and leg toward floor</li>
            <li>Only go as far as you can keep back flat</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 8-10 each side, 2-3 sets</em></p>
          <p>The gold standard for back-safe core training.</p>

          <h3>Bird Dog</h3>
          <ol>
            <li>On all fours</li>
            <li>Extend right arm and left leg</li>
            <li>Keep back flat—don&apos;t rotate</li>
            <li>Hold 3-5 seconds</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 8-10 each side, 2-3 sets</em></p>

          <h3>Glute Bridge</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Push through heels, lift hips</li>
            <li>Squeeze glutes at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 2-3 sets</em></p>
          <p>Strengthens glutes, which support the lower back.</p>

          <h3>Modified Side Plank</h3>
          <ol>
            <li>Lie on side, propped on elbow</li>
            <li>Knees bent 90 degrees</li>
            <li>Lift hips off ground</li>
            <li>Hold, keeping body straight from knees to head</li>
          </ol>
          <p><em>Hold: 15-30 seconds each side, 2-3 sets</em></p>

          <h3>Plank (When Ready)</h3>
          <ol>
            <li>Forearms on ground, body straight</li>
            <li>Don&apos;t let hips sag</li>
            <li>Squeeze glutes, brace core</li>
          </ol>
          <p><em>Hold: 20-30 seconds, 2-3 sets</em></p>
          <p>Progress duration gradually. Stop if back pain increases.</p>

          <h2>Phase 3: Strengthening and Function</h2>
          <p>Once pain is minimal. Build strength for long-term protection.</p>

          <h3>Hip Hinge (Bodyweight)</h3>
          <ol>
            <li>Stand feet hip-width</li>
            <li>Push hips back, slight knee bend</li>
            <li>Keep back flat, chest up</li>
            <li>Feel hamstrings stretch</li>
            <li>Drive hips forward to stand</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Learn this pattern before any deadlift variations.</p>

          <h3>Goblet Squat</h3>
          <ol>
            <li>Hold weight at chest</li>
            <li>Squat with good form</li>
            <li>Keep chest up, knees tracking over toes</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Farmer&apos;s Carries</h3>
          <ol>
            <li>Hold weights at sides</li>
            <li>Walk with perfect posture</li>
            <li>Core braced, shoulders back</li>
          </ol>
          <p><em>Distance: 30-50 steps, 3 sets</em></p>
          <p>Builds functional core strength for daily activities.</p>

          <h3>Romanian Deadlift (Light)</h3>
          <ol>
            <li>Light dumbbells in front of thighs</li>
            <li>Hinge at hips, lowering weights along legs</li>
            <li>Keep back flat, feel hamstring stretch</li>
            <li>Drive hips forward to return</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Start light. Progress gradually.</p>

          <h2>Hip Stretches for Back Pain</h2>
          <p>Tight hips often contribute to lower back pain.</p>

          <h3>Hip Flexor Stretch</h3>
          <ol>
            <li>Half-kneeling position</li>
            <li>Tuck tailbone (squeeze back glute)</li>
            <li>Shift weight forward</li>
            <li>Hold 30-60 seconds each side</li>
          </ol>

          <h3>Figure-4 Stretch (Piriformis)</h3>
          <ol>
            <li>Lie on back</li>
            <li>Cross right ankle over left knee</li>
            <li>Pull left thigh toward chest</li>
            <li>Hold 30-60 seconds each side</li>
          </ol>

          <h3>Child&apos;s Pose</h3>
          <ol>
            <li>Kneel, sit back on heels</li>
            <li>Fold forward, arms extended</li>
            <li>Rest forehead on floor</li>
            <li>Hold 1-2 minutes</li>
          </ol>

          <h2>Daily Back Care Routine (10 min)</h2>
          <ul>
            <li>Cat-cow: 10 reps</li>
            <li>Pelvic tilts: 10 reps</li>
            <li>Knee-to-chest stretch: 30 sec each</li>
            <li>Dead bug: 8 each side</li>
            <li>Bird dog: 8 each side</li>
            <li>Glute bridges: 12 reps</li>
            <li>Hip flexor stretch: 30 sec each</li>
            <li>Child&apos;s pose: 1 minute</li>
          </ul>

          <h2>What to Avoid with Back Pain</h2>
          <ul>
            <li><strong>Prolonged sitting:</strong> Get up every 30-60 minutes</li>
            <li><strong>Heavy lifting (initially):</strong> Wait until pain subsides</li>
            <li><strong>Sit-ups and crunches:</strong> High spinal load, often aggravating</li>
            <li><strong>Toe touches:</strong> Loaded flexion can irritate discs</li>
            <li><strong>Bed rest:</strong> Short term okay, but prolonged rest worsens outcomes</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Movement is the best medicine for most lower back pain. Start gentle, build core stability, and gradually return to normal activities. The goal isn&apos;t just to eliminate pain—it&apos;s to build a back that&apos;s strong enough to handle life.
          </p>
          <p>
            Be patient. Most back pain improves significantly within 6-12 weeks with consistent effort.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Need a back pain program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized back care routines based on your specific pain pattern.
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
