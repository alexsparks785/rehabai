import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Better Sleep: Move More, Sleep Better | Foundational Rehab',
  description: 'The right exercises at the right time can dramatically improve your sleep quality. Learn what, when, and how much.',
};

export default function ExercisesForBetterSleepPage() {
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
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Wellness</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Better Sleep: Move More, Sleep Better
          </h1>
          <p className="text-xl text-gray-600">
            Exercise is one of the most effective natural sleep aids—if you do it right.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Struggling with sleep? Before reaching for supplements or medications, try exercise. Research consistently shows that regular physical activity improves both how fast you fall asleep and how deeply you sleep.
          </p>
          <p>
            But timing and type matter. Here&apos;s how to use exercise to sleep better—without accidentally making things worse.
          </p>

          <h2>How Exercise Improves Sleep</h2>
          <p>
            Exercise affects sleep through multiple pathways:
          </p>
          <ul>
            <li><strong>Body temperature</strong> — Exercise raises core temperature; the subsequent drop signals sleepiness</li>
            <li><strong>Adenosine</strong> — Physical activity increases this sleep-promoting compound</li>
            <li><strong>Anxiety reduction</strong> — Movement lowers cortisol and quiets the mind</li>
            <li><strong>Circadian rhythm</strong> — Regular exercise helps regulate your internal clock</li>
            <li><strong>Sleep drive</strong> — Physical fatigue increases your body&apos;s need for restorative sleep</li>
          </ul>
          <p>
            The result? People who exercise regularly fall asleep faster, spend more time in deep sleep, and wake up less during the night.
          </p>

          <h2>Best Types of Exercise for Sleep</h2>

          <h3>Aerobic Exercise</h3>
          <p>
            The most researched for sleep benefits:
          </p>
          <ul>
            <li><strong>Walking</strong> — Simple, effective, low barrier to entry</li>
            <li><strong>Cycling</strong> — Great option if walking bothers your joints</li>
            <li><strong>Swimming</strong> — Full-body cardio with temperature benefits</li>
            <li><strong>Jogging</strong> — More intense; finish earlier in the day</li>
          </ul>
          <p>
            <strong>How much:</strong> 30 minutes of moderate aerobic exercise most days of the week
          </p>

          <h3>Resistance Training</h3>
          <p>
            Also improves sleep quality:
          </p>
          <ul>
            <li>Strength training 2-3 times per week</li>
            <li>May be especially helpful for sleep anxiety</li>
            <li>Creates physical fatigue that promotes deeper sleep</li>
          </ul>

          <h3>Yoga and Gentle Movement</h3>
          <p>
            Particularly good for calming the nervous system:
          </p>
          <ul>
            <li><strong>Gentle yoga</strong> — Restorative poses, not power yoga</li>
            <li><strong>Stretching</strong> — Releases muscle tension before bed</li>
            <li><strong>Tai Chi</strong> — Meditative movement; excellent for sleep</li>
            <li><strong>Deep breathing</strong> — Activates parasympathetic nervous system</li>
          </ul>
          <p>
            <strong>Key benefit:</strong> Can be done close to bedtime without disrupting sleep
          </p>

          <h2>Timing: When to Exercise for Better Sleep</h2>
          
          <h3>Morning Exercise</h3>
          <ul>
            <li>Helps regulate circadian rhythm (especially outdoor exercise)</li>
            <li>Morning sunlight + movement = powerful sleep signal</li>
            <li>No risk of interfering with evening sleep</li>
            <li>Good for people who struggle to wake up</li>
          </ul>

          <h3>Afternoon Exercise (2-6 PM)</h3>
          <ul>
            <li>Often considered optimal for sleep</li>
            <li>Body temperature peaks, then drops in evening</li>
            <li>Allows time to wind down before bed</li>
            <li>May provide the strongest sleep benefits</li>
          </ul>

          <h3>Evening Exercise</h3>
          <ul>
            <li>Conventional wisdom says avoid it—but research is mixed</li>
            <li>Moderate exercise 1-2 hours before bed may be fine</li>
            <li>Avoid intense exercise within 1 hour of bedtime</li>
            <li>Individual responses vary—experiment</li>
          </ul>
          <p>
            <strong>Bottom line:</strong> Exercise at whatever time you&apos;ll actually do it. The worst time to exercise for sleep is not at all.
          </p>

          <h2>Exercises to Avoid Before Bed</h2>
          <p>
            These can interfere with sleep if done too close to bedtime:
          </p>
          <ul>
            <li><strong>High-intensity interval training (HIIT)</strong> — Too stimulating</li>
            <li><strong>Heavy weightlifting</strong> — Spikes cortisol and heart rate</li>
            <li><strong>Competitive sports</strong> — Mental arousal can linger</li>
            <li><strong>Running/intense cardio</strong> — Raises core temperature too much</li>
          </ul>
          <p>
            Allow 2-3 hours between intense exercise and sleep. Gentle exercise is fine closer to bedtime.
          </p>

          <h2>A Sleep-Promoting Evening Routine</h2>
          <p>
            Try this gentle 15-minute routine 30-60 minutes before bed:
          </p>
          
          <h3>1. Child&apos;s Pose (1 minute)</h3>
          <ul>
            <li>Kneel, sit back on heels, fold forward</li>
            <li>Arms extended or by sides</li>
            <li>Breathe deeply into your back</li>
          </ul>

          <h3>2. Supine Twist (2 minutes)</h3>
          <ul>
            <li>Lie on back, knees to chest</li>
            <li>Drop both knees to one side</li>
            <li>Hold 1 minute, switch sides</li>
          </ul>

          <h3>3. Legs Up the Wall (3 minutes)</h3>
          <ul>
            <li>Lie on back, legs straight up against wall</li>
            <li>Arms relaxed by sides</li>
            <li>Let gravity drain tension from legs</li>
          </ul>

          <h3>4. Gentle Neck Stretches (2 minutes)</h3>
          <ul>
            <li>Seated or lying down</li>
            <li>Slowly tilt ear to shoulder each side</li>
            <li>Gentle chin to chest</li>
          </ul>

          <h3>5. Diaphragmatic Breathing (5 minutes)</h3>
          <ul>
            <li>Lie on back, knees bent or straight</li>
            <li>Hand on belly, breathe into your hand</li>
            <li>Inhale 4 counts, exhale 6 counts</li>
            <li>Focus only on breath</li>
          </ul>

          <h2>How Long Until You See Results?</h2>
          <p>
            Don&apos;t expect instant results:
          </p>
          <ul>
            <li><strong>Acute:</strong> You may sleep better the same night after exercise</li>
            <li><strong>Consistent benefits:</strong> Build over 4-8 weeks of regular exercise</li>
            <li><strong>Full effect:</strong> Chronic exercisers have significantly better sleep quality</li>
          </ul>
          <p>
            Be patient. The sleep benefits of exercise compound over time.
          </p>

          <h2>Special Considerations</h2>
          <ul>
            <li><strong>Insomnia:</strong> Exercise helps, but don&apos;t use it as a &quot;tire yourself out&quot; strategy—that can backfire</li>
            <li><strong>Sleep apnea:</strong> Exercise + weight loss can significantly improve symptoms</li>
            <li><strong>Night shift workers:</strong> Exercise timing becomes trickier; experiment carefully</li>
            <li><strong>Older adults:</strong> Even light exercise improves sleep; tai chi is particularly effective</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Regular exercise is one of the best things you can do for your sleep—and it&apos;s free, has no side effects, and improves your health in countless other ways.
          </p>
          <p>
            The ideal approach: 30+ minutes of moderate exercise most days, preferably in the morning or afternoon, combined with gentle stretching or yoga in the evening. But the most important thing is consistency—any exercise is better than none.
          </p>
          <p>
            If you&apos;re not currently exercising and struggling with sleep, start small. A daily 15-minute walk can make a noticeable difference within weeks. Your body wants to move, and your sleep will improve when you let it.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to move better and sleep better?
          </h3>
          <p className="text-gray-600 mb-4">
            Get personalized exercise routines that fit your schedule and goals.
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
