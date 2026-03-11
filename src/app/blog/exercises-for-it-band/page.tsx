import Link from 'next/link';

export const metadata = {
  title: 'Exercises for IT Band Syndrome: Relieve Outer Knee and Hip Pain | Foundational Rehab',
  description: 'IT band syndrome causing outer knee or hip pain? Learn the best stretches, foam rolling techniques, and strengthening exercises to fix IT band tightness for good.',
};

export default function ExercisesForITBandPage() {
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
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for IT Band Syndrome: Relieve Outer Knee and Hip Pain
          </h1>
          <p className="text-xl text-gray-600">
            IT band syndrome is one of the most common causes of lateral knee pain in runners and cyclists. Here&apos;s how to fix it.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            That sharp pain on the outside of your knee? The aching along your outer thigh? It&apos;s likely your iliotibial (IT) band—a thick band of connective tissue running from your hip to your knee. The good news: it responds well to the right exercises.
          </p>

          <h2>Understanding IT Band Syndrome</h2>
          <p>
            The IT band isn&apos;t a muscle—it&apos;s fascia, and you can&apos;t actually stretch it much. What you CAN do is address the muscles that attach to it (glutes, TFL) and reduce the friction where it crosses the knee.
          </p>
          <p>
            IT band syndrome typically develops from:
          </p>
          <ul>
            <li><strong>Weak glutes</strong> — Especially the gluteus medius</li>
            <li><strong>Overuse</strong> — Sudden increases in running or cycling volume</li>
            <li><strong>Poor hip stability</strong> — Your knee collapses inward during activity</li>
            <li><strong>Tight hip flexors and TFL</strong> — The tensor fasciae latae muscle</li>
          </ul>

          <h2>Foam Rolling for the IT Band</h2>
          <p>
            Foam rolling the IT band directly is often painful and not very effective—you&apos;re rolling on fascia, not muscle. Instead, focus on the muscles around it:
          </p>

          <h3>Quad/TFL Roll</h3>
          <ol>
            <li>Lie face down with roller under your outer thigh, just below the hip</li>
            <li>Roll slowly from hip to mid-thigh (the TFL and outer quad)</li>
            <li>When you find a tender spot, hold for 30-60 seconds</li>
            <li>Bend and straighten your knee while holding on tight spots</li>
          </ol>
          <p><em>Duration: 2 minutes per side</em></p>

          <h3>Glute Roll</h3>
          <ol>
            <li>Sit on the foam roller, cross one ankle over the opposite knee</li>
            <li>Lean toward the crossed leg side</li>
            <li>Roll slowly through the glute, finding tender areas</li>
            <li>Hold on tight spots for 30-60 seconds</li>
          </ol>
          <p><em>Duration: 2 minutes per side</em></p>

          <h2>Stretches That Actually Help</h2>

          <h3>Standing IT Band Stretch</h3>
          <ol>
            <li>Stand with your affected leg crossed behind the other</li>
            <li>Lean your hips away from the affected side</li>
            <li>Reach the same-side arm overhead and lean further</li>
            <li>You should feel a stretch along your outer hip and thigh</li>
          </ol>
          <p><em>Hold: 30-60 seconds, 2-3 times per side</em></p>

          <h3>Pigeon Pose Variation</h3>
          <ol>
            <li>Start on all fours, bring one knee forward toward your hand</li>
            <li>Extend the back leg straight behind you</li>
            <li>Lower your hips toward the floor</li>
            <li>Adjust the front shin angle for comfort</li>
          </ol>
          <p><em>Hold: 60-90 seconds per side</em></p>

          <h3>90/90 Hip Stretch</h3>
          <ol>
            <li>Sit with both legs bent at 90 degrees (front and back)</li>
            <li>Front shin is parallel to your torso, back shin behind you</li>
            <li>Sit tall, then lean forward over the front leg</li>
            <li>Feel the stretch in your outer hip</li>
          </ol>
          <p><em>Hold: 60 seconds per side</em></p>

          <h2>Strengthening Exercises (The Real Fix)</h2>
          <p>
            Stretching and rolling provide relief, but strengthening your glutes—especially the gluteus medius—is what actually fixes IT band syndrome long-term.
          </p>

          <h3>Clamshells</h3>
          <ol>
            <li>Lie on your side with knees bent 90 degrees, feet together</li>
            <li>Keep your feet touching as you lift the top knee</li>
            <li>Don&apos;t let your hips roll backward</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20 per side, 3 sets. Add a band for more challenge.</em></p>

          <h3>Side-Lying Hip Abduction</h3>
          <ol>
            <li>Lie on your side with bottom leg bent for stability</li>
            <li>Keep top leg straight, foot parallel to the floor (not pointed up)</li>
            <li>Lift the leg to about 45 degrees</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 15-20 per side, 3 sets</em></p>

          <h3>Single-Leg Glute Bridge</h3>
          <ol>
            <li>Lie on your back, one foot flat on floor, other leg extended</li>
            <li>Drive through the planted heel to lift your hips</li>
            <li>Keep your hips level—don&apos;t let one side drop</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-12 per side, 3 sets</em></p>

          <h3>Lateral Band Walks</h3>
          <ol>
            <li>Place a resistance band around your ankles (or above knees for easier)</li>
            <li>Stand in a quarter squat position</li>
            <li>Step sideways, keeping tension in the band</li>
            <li>Don&apos;t let your knees cave inward</li>
          </ol>
          <p><em>Reps: 15-20 steps each direction, 3 sets</em></p>

          <h3>Single-Leg Deadlift</h3>
          <ol>
            <li>Stand on one leg, slight bend in the knee</li>
            <li>Hinge at the hips, reaching toward the floor</li>
            <li>Keep your back flat and hips square</li>
            <li>Return to standing by driving through the glute</li>
          </ol>
          <p><em>Reps: 8-10 per side, 3 sets</em></p>

          <h2>Complete IT Band Rehab Routine</h2>
          <p>
            Do this routine 3-4 times per week for best results:
          </p>

          <h3>Phase 1: Release (5 minutes)</h3>
          <ul>
            <li>TFL/Outer quad roll: 2 minutes per side</li>
            <li>Glute roll: 1 minute per side</li>
          </ul>

          <h3>Phase 2: Stretch (5 minutes)</h3>
          <ul>
            <li>Standing IT band stretch: 45 seconds per side</li>
            <li>90/90 hip stretch: 60 seconds per side</li>
            <li>Pigeon pose: 60 seconds per side</li>
          </ul>

          <h3>Phase 3: Strengthen (10 minutes)</h3>
          <ul>
            <li>Clamshells: 15 reps × 3 sets per side</li>
            <li>Single-leg glute bridge: 10 reps × 3 sets per side</li>
            <li>Lateral band walks: 15 steps × 3 sets each direction</li>
            <li>Single-leg deadlift: 8 reps × 2 sets per side</li>
          </ul>

          <h2>Running and Cycling Modifications</h2>
          <p>During recovery:</p>
          <ul>
            <li><strong>Reduce volume</strong> — Cut mileage by 50% initially</li>
            <li><strong>Avoid hills and stairs</strong> — These aggravate IT band friction</li>
            <li><strong>Check your form</strong> — Avoid overstriding and hip drop</li>
            <li><strong>Increase gradually</strong> — No more than 10% mileage increase per week</li>
            <li><strong>Consider gait analysis</strong> — A professional can spot biomechanical issues</li>
          </ul>

          <h2>When to See a Professional</h2>
          <p>
            See a physical therapist or sports medicine doctor if:
          </p>
          <ul>
            <li>Pain doesn&apos;t improve after 2-3 weeks of exercises</li>
            <li>Pain is severe or getting worse</li>
            <li>You have swelling or locking in the knee</li>
            <li>Pain occurs during walking, not just running</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            IT band syndrome is frustrating, but it&apos;s very treatable. The key is understanding that it&apos;s usually a hip strength and stability problem, not an IT band flexibility problem. Focus on building strong, stable hips, and the outer knee pain will resolve.
          </p>
          <p>
            Most people see significant improvement within 4-6 weeks of consistent strengthening work.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a personalized IT band rehab program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get exercises tailored to your specific situation, with progressions and modifications.
          </p>
          <Link 
            href="/app" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try Foundational Rehab Free
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2026 Foundational Rehab. Move better, feel better.</p>
        </div>
      </footer>
    </div>
  );
}
