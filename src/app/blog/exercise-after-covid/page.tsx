import Link from 'next/link';

export const metadata = {
  title: 'Returning to Exercise After COVID: A Safe Approach | Foundational Rehab',
  description: 'How to get back to fitness after COVID-19 infection without overdoing it. Week-by-week return protocol and warning signs to watch.',
};

export default function ExerciseAfterCovidPage() {
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
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Recovery</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Returning to Exercise After COVID: A Safe Approach
          </h1>
          <p className="text-xl text-gray-600">
            COVID can affect your body longer than you think. Here&apos;s how to return to exercise safely without setbacks.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            You&apos;ve recovered from COVID-19 and you&apos;re eager to get back to your workouts. But jumping in where you left off is a mistake—one that can set you back weeks or even months.
          </p>
          <p>
            COVID affects multiple body systems, and even &quot;mild&quot; cases can leave lasting fatigue and reduced exercise tolerance. This guide will help you return to exercise safely and recognize warning signs that you need to slow down.
          </p>

          <h2>Why You Can&apos;t Just Pick Up Where You Left Off</h2>
          <p>
            COVID-19 isn&apos;t just a respiratory illness. It can affect:
          </p>
          <ul>
            <li><strong>Cardiovascular system</strong> — Heart muscle inflammation (myocarditis) can occur even with mild COVID</li>
            <li><strong>Lungs</strong> — Reduced capacity and oxygen exchange</li>
            <li><strong>Energy systems</strong> — Mitochondrial dysfunction leading to persistent fatigue</li>
            <li><strong>Autonomic nervous system</strong> — Heart rate variability and blood pressure regulation</li>
            <li><strong>Muscles</strong> — Deconditioning from rest, sometimes direct muscle effects</li>
          </ul>
          <p>
            These effects can persist even after you test negative and feel &quot;better.&quot; Exercising too intensely too soon can trigger a relapse or reveal heart issues you didn&apos;t know you had.
          </p>

          <h2>Before You Start: When Is It Safe?</h2>
          <p>
            <strong>Wait at least 7-10 days</strong> after symptoms resolve before any exercise. If you had moderate or severe COVID, wait longer and consult your doctor.
          </p>
          <p>
            <strong>Get medical clearance if you experienced:</strong>
          </p>
          <ul>
            <li>Chest pain or tightness during COVID</li>
            <li>Shortness of breath beyond normal respiratory symptoms</li>
            <li>Heart palpitations or racing heart</li>
            <li>Hospitalization or supplemental oxygen</li>
            <li>Any cardiac symptoms during recovery</li>
          </ul>
          <p>
            Some doctors recommend cardiac screening (ECG, possibly echocardiogram) before returning to intense exercise, especially for athletes.
          </p>

          <h2>The Gradual Return Protocol</h2>
          <p>
            This 5-phase approach takes 2-4+ weeks depending on severity and individual response:
          </p>

          <h3>Phase 1: Preparation (Days 1-3)</h3>
          <ul>
            <li>Light activity only: walking, gentle stretching</li>
            <li>Keep heart rate below 70% of max (&lt;120 bpm for most people)</li>
            <li>Duration: 15 minutes maximum</li>
            <li>Monitor for symptoms during and for 24 hours after</li>
          </ul>
          <p>
            <strong>Proceed to Phase 2 if:</strong> No symptoms, normal energy next day
          </p>

          <h3>Phase 2: Light Activity (Days 4-7)</h3>
          <ul>
            <li>Walking, easy cycling, light yoga</li>
            <li>Heart rate below 80% max</li>
            <li>Duration: 20-30 minutes</li>
            <li>RPE (rate of perceived exertion): 3-4 out of 10</li>
          </ul>
          <p>
            <strong>Proceed to Phase 3 if:</strong> Completing workouts without unusual fatigue
          </p>

          <h3>Phase 3: Moderate Activity (Days 8-14)</h3>
          <ul>
            <li>Add light resistance training (bodyweight or very light weights)</li>
            <li>Moderate cardio intervals</li>
            <li>Duration: 30-45 minutes</li>
            <li>RPE: 5-6 out of 10</li>
          </ul>
          <p>
            <strong>Proceed to Phase 4 if:</strong> Energy levels feel near-normal
          </p>

          <h3>Phase 4: Challenging Activity (Week 3)</h3>
          <ul>
            <li>Return to normal training types</li>
            <li>Reduce intensity to 70-80% of pre-COVID levels</li>
            <li>Normal duration</li>
            <li>RPE: 6-7 out of 10</li>
          </ul>

          <h3>Phase 5: Full Return (Week 4+)</h3>
          <ul>
            <li>Gradually return to pre-COVID intensity</li>
            <li>Listen to your body</li>
            <li>Full recovery may take 4-8 weeks or longer</li>
          </ul>

          <h2>Warning Signs to Stop Immediately</h2>
          <p>
            Stop exercise and contact your doctor if you experience:
          </p>
          <ul>
            <li><strong>Chest pain or tightness</strong> — Could indicate myocarditis</li>
            <li><strong>Heart palpitations or racing heart</strong> — Abnormal heart rhythm</li>
            <li><strong>Unusual shortness of breath</strong> — Beyond normal exertion</li>
            <li><strong>Dizziness or lightheadedness</strong> — Blood pressure or oxygen issues</li>
            <li><strong>Extreme fatigue after mild exercise</strong> — Post-exertional malaise</li>
            <li><strong>Symptom return</strong> — Any COVID symptoms coming back</li>
          </ul>
          <p>
            Post-exertional malaise (PEM) is particularly important. If you feel significantly worse 24-48 hours after exercise, you&apos;re doing too much too soon.
          </p>

          <h2>Special Considerations for Long COVID</h2>
          <p>
            If symptoms persist beyond 4 weeks (long COVID), exercise requires extra caution:
          </p>
          <ul>
            <li><strong>Don&apos;t push through fatigue</strong> — Unlike normal exercise, pushing makes it worse</li>
            <li><strong>Pacing is critical</strong> — Stay well within your energy envelope</li>
            <li><strong>Heart rate monitoring</strong> — Keep below the threshold that triggers symptoms</li>
            <li><strong>Work with specialists</strong> — Long COVID clinics and knowledgeable PTs can help</li>
          </ul>
          <p>
            Traditional &quot;no pain, no gain&quot; advice can cause harm with long COVID. The goal is to do what you can tolerate without triggering symptom flares.
          </p>

          <h2>Tips for a Successful Return</h2>
          <ul>
            <li><strong>Track everything</strong> — Keep a log of exercise, symptoms, and energy levels</li>
            <li><strong>Prioritize sleep</strong> — Recovery happens during rest</li>
            <li><strong>Stay hydrated</strong> — Dehydration worsens COVID effects</li>
            <li><strong>Be patient</strong> — Fitness will return; pushing too hard delays it</li>
            <li><strong>Start with low-impact</strong> — Walking, cycling, swimming before running or HIIT</li>
            <li><strong>Separate symptoms</strong> — Know the difference between normal exertion and concerning signs</li>
          </ul>

          <h2>What About Athletes?</h2>
          <p>
            Competitive athletes should be extra cautious. Myocarditis risk is real, and training through it can be dangerous. Most sports medicine guidelines recommend:
          </p>
          <ul>
            <li>Cardiac screening before return to intense training</li>
            <li>Extended rest periods for athletes who had symptomatic COVID</li>
            <li>Gradual return over 2-4+ weeks</li>
            <li>No competition until fully cleared</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Returning to exercise after COVID isn&apos;t about willpower—it&apos;s about giving your body time to fully recover. A gradual, phased approach protects your heart, prevents setbacks, and actually gets you back to full fitness faster than pushing too hard too soon.
          </p>
          <p>
            Listen to your body. If something feels wrong, stop and get checked out. Most people recover fully, but the timeline varies significantly. Be patient with yourself and trust the process.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to rebuild your fitness?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized recovery exercises designed for a safe return to activity.
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
