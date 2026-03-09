import Link from 'next/link';

export const metadata = {
  title: 'Postpartum Exercise: Safe Return to Fitness After Baby | Foundational Rehab',
  description: 'When and how to start exercising after giving birth, including timelines, safe exercises, and warning signs to watch for.',
};

export default function PostpartumExercisePage() {
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
            <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Special Populations</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Postpartum Exercise: Safe Return to Fitness After Baby
          </h1>
          <p className="text-xl text-gray-600">
            Your body just did something incredible. Here&apos;s how to rebuild safely.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            After having a baby, you might be eager to &quot;get your body back.&quot; But postpartum recovery isn&apos;t about bouncing back—it&apos;s about rebuilding. Your body changed significantly during pregnancy, and it needs time and the right approach to heal.
          </p>
          <p>
            This guide covers when to start, what exercises are safe, and how to progress without setbacks.
          </p>

          <h2>When Can You Start Exercising?</h2>

          <h3>Vaginal Delivery</h3>
          <ul>
            <li><strong>Gentle walking:</strong> As soon as you feel ready, often within days</li>
            <li><strong>Pelvic floor exercises:</strong> Can start within the first week (gentle Kegels)</li>
            <li><strong>Light exercise:</strong> Usually okay after 2-4 weeks</li>
            <li><strong>Moderate exercise:</strong> Typically 4-6 weeks postpartum</li>
            <li><strong>Intense exercise:</strong> After 6-week checkup and clearance</li>
          </ul>

          <h3>C-Section</h3>
          <ul>
            <li><strong>Walking:</strong> Gentle walks as tolerated, usually within a week</li>
            <li><strong>Light exercise:</strong> After 6-8 weeks, with clearance</li>
            <li><strong>Abdominal exercises:</strong> Wait until incision is healed and you have clearance</li>
            <li><strong>Intense exercise:</strong> Usually 8-12 weeks postpartum</li>
          </ul>
          <p>
            <strong>Important:</strong> These are general guidelines. Always get clearance from your healthcare provider, especially before returning to intense activity.
          </p>

          <h2>Priority #1: Pelvic Floor Recovery</h2>
          <p>
            Your pelvic floor supported a growing baby for 9 months. It needs attention before you focus on anything else.
          </p>

          <h3>Signs Your Pelvic Floor Needs Work</h3>
          <ul>
            <li>Leaking urine when you cough, sneeze, laugh, or exercise</li>
            <li>Feeling of heaviness or pressure in the pelvis</li>
            <li>Difficulty controlling bowel movements or gas</li>
            <li>Pain during intercourse</li>
          </ul>

          <h3>Basic Pelvic Floor Exercises</h3>
          <ul>
            <li><strong>Kegels:</strong> Contract pelvic floor muscles (like stopping urine flow), hold 5-10 seconds, release. Repeat 10 times, 3x daily.</li>
            <li><strong>Connection breath:</strong> Inhale, let belly and pelvic floor relax. Exhale, gently engage pelvic floor and deep abs.</li>
          </ul>
          <p>
            <strong>Note:</strong> If you have significant symptoms, see a pelvic floor physical therapist. They&apos;re invaluable for postpartum recovery.
          </p>

          <h2>Priority #2: Core Reconnection</h2>
          <p>
            Pregnancy stretches and separates your abdominal muscles (diastasis recti is common). You need to rebuild the core-pelvic floor connection before doing traditional ab exercises.
          </p>

          <h3>Safe Early Core Exercises</h3>
          <ul>
            <li><strong>Diaphragmatic breathing</strong> — Breathe into belly, coordinate with pelvic floor</li>
            <li><strong>Heel slides</strong> — Lying on back, slowly slide one heel out and back</li>
            <li><strong>Dead bug (modified)</strong> — Lying on back, slowly lower one arm overhead while keeping core engaged</li>
            <li><strong>Bird dog (gentle)</strong> — On all fours, extend opposite arm and leg with control</li>
          </ul>

          <h3>Exercises to AVOID Initially</h3>
          <ul>
            <li>Crunches, sit-ups, traditional planks</li>
            <li>Leg raises</li>
            <li>Heavy lifting</li>
            <li>Anything that causes your belly to &quot;dome&quot; or bulge</li>
          </ul>

          <h2>Progressive Return to Exercise</h2>

          <h3>Phase 1: Foundation (0-6 weeks)</h3>
          <ul>
            <li>Gentle walking (start with 10-15 minutes)</li>
            <li>Pelvic floor exercises</li>
            <li>Diaphragmatic breathing</li>
            <li>Gentle stretching</li>
            <li>Focus on rest and recovery</li>
          </ul>

          <h3>Phase 2: Rebuild (6-12 weeks)</h3>
          <ul>
            <li>Longer walks (20-30 minutes)</li>
            <li>Core reconnection exercises</li>
            <li>Light resistance training (bodyweight or light weights)</li>
            <li>Low-impact cardio (swimming, cycling)</li>
            <li>Postnatal yoga or Pilates</li>
          </ul>

          <h3>Phase 3: Strengthen (12+ weeks)</h3>
          <ul>
            <li>Progressive strength training</li>
            <li>Return to higher intensity cardio gradually</li>
            <li>Running (if cleared and pelvic floor is ready)</li>
            <li>Group fitness classes</li>
          </ul>

          <h2>Warning Signs to Stop and Seek Help</h2>
          <ul>
            <li><strong>Bleeding:</strong> Heavy bleeding or bleeding that increases with activity</li>
            <li><strong>Pain:</strong> Sharp or increasing pain, especially in pelvis or C-section incision</li>
            <li><strong>Leaking:</strong> Urinary incontinence during exercise</li>
            <li><strong>Heaviness:</strong> Feeling of something falling out of vagina</li>
            <li><strong>Doming:</strong> Belly bulging outward during core exercises</li>
            <li><strong>Exhaustion:</strong> Extreme fatigue beyond normal new-parent tiredness</li>
          </ul>

          <h2>Special Considerations</h2>

          <h3>Breastfeeding</h3>
          <ul>
            <li>Wear a supportive sports bra</li>
            <li>Feed or pump before exercise for comfort</li>
            <li>Stay well hydrated</li>
            <li>Exercise doesn&apos;t affect milk supply when nutrition is adequate</li>
          </ul>

          <h3>Sleep Deprivation</h3>
          <ul>
            <li>Prioritize sleep over exercise when needed</li>
            <li>Gentle movement may actually help energy levels</li>
            <li>Don&apos;t push through exhaustion</li>
          </ul>

          <h3>Diastasis Recti</h3>
          <ul>
            <li>Check for abdominal separation (or have it assessed)</li>
            <li>Modify exercises to avoid worsening separation</li>
            <li>Work with a pelvic floor PT if gap is significant</li>
          </ul>

          <h2>Sample Week (6-12 Weeks Postpartum)</h2>
          <p>
            <strong>Monday:</strong> 20-min walk + pelvic floor/core exercises (10 min)
          </p>
          <p>
            <strong>Tuesday:</strong> Postnatal yoga or Pilates video (20-30 min)
          </p>
          <p>
            <strong>Wednesday:</strong> 25-min walk
          </p>
          <p>
            <strong>Thursday:</strong> Light resistance training (15-20 min) + stretching
          </p>
          <p>
            <strong>Friday:</strong> 20-min walk + pelvic floor/core exercises
          </p>
          <p>
            <strong>Saturday:</strong> Longer walk or swim if available
          </p>
          <p>
            <strong>Sunday:</strong> Rest or gentle stretching
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Postpartum fitness isn&apos;t about &quot;bouncing back&quot;—it&apos;s about rebuilding a body that just accomplished something incredible. Prioritize pelvic floor and core recovery before chasing intensity. Listen to your body, progress gradually, and don&apos;t compare yourself to anyone else&apos;s timeline.
          </p>
          <p>
            If something doesn&apos;t feel right—pain, leaking, pressure—that&apos;s your body telling you to slow down or get help. A pelvic floor physical therapist can be the best investment in your postpartum recovery.
          </p>
          <p>
            Be patient with yourself. Your body will get stronger, but it needs time and the right approach.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready for safe postpartum exercises?
          </h3>
          <p className="text-gray-600 mb-4">
            Get guided workouts designed for your recovery stage.
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
