import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Anxiety: Calm Your Mind Through Movement | Foundational Rehab',
  description: 'Specific exercises that help reduce anxiety symptoms naturally. Learn what types work best and how to use movement for mental health.',
};

export default function ExercisesForAnxietyPage() {
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
            Exercises for Anxiety: Calm Your Mind Through Movement
          </h1>
          <p className="text-xl text-gray-600">
            Your body and mind are connected. The right movement can quiet the anxious noise.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            When anxiety hits, your body goes into fight-or-flight mode. Heart racing, muscles tense, thoughts spiraling. Exercise might seem like the last thing you want to do—but it&apos;s actually one of the most effective ways to break the cycle.
          </p>
          <p>
            Here&apos;s how to use movement to manage anxiety, which types work best, and how to start when you&apos;re feeling overwhelmed.
          </p>

          <h2>Why Exercise Helps Anxiety</h2>
          <p>
            Exercise calms anxiety through multiple pathways:
          </p>
          <ul>
            <li><strong>Burns stress hormones</strong> — Physical activity metabolizes cortisol and adrenaline</li>
            <li><strong>Releases endorphins</strong> — Natural mood boosters and pain relievers</li>
            <li><strong>Interrupts rumination</strong> — Physical focus breaks the thought spiral</li>
            <li><strong>Reduces muscle tension</strong> — Releases the physical holding from stress</li>
            <li><strong>Improves sleep</strong> — Better sleep means better anxiety regulation</li>
            <li><strong>Builds confidence</strong> — Accomplishment counters the helplessness of anxiety</li>
          </ul>
          <p>
            Research consistently shows exercise is as effective as medication for mild to moderate anxiety—with only positive side effects.
          </p>

          <h2>Best Types of Exercise for Anxiety</h2>

          <h3>1. Rhythmic Aerobic Exercise</h3>
          <p>
            Repetitive movements that get you into a flow state:
          </p>
          <ul>
            <li><strong>Walking</strong> — Simple, accessible, can be meditative</li>
            <li><strong>Running/Jogging</strong> — Powerful anxiety relief (the &quot;runner&apos;s high&quot;)</li>
            <li><strong>Cycling</strong> — Rhythmic, can be done indoors</li>
            <li><strong>Swimming</strong> — Water provides calming sensory input</li>
            <li><strong>Dancing</strong> — Combines movement with music (double benefit)</li>
          </ul>
          <p>
            <strong>Why it works:</strong> Rhythmic movement is hypnotic—it naturally quiets the anxious mind.
          </p>

          <h3>2. Yoga</h3>
          <p>
            Combines movement with breath and mindfulness:
          </p>
          <ul>
            <li>Activates the parasympathetic nervous system (rest and digest)</li>
            <li>Teaches breath control—a key anxiety management tool</li>
            <li>Builds body awareness</li>
            <li>Research shows consistent anxiety reduction</li>
          </ul>
          <p>
            <strong>Best styles for anxiety:</strong> Hatha, restorative, yin, gentle vinyasa. Avoid hot yoga or power yoga when actively anxious.
          </p>

          <h3>3. Tai Chi and Qigong</h3>
          <p>
            Slow, meditative movement:
          </p>
          <ul>
            <li>Gentle enough for anyone</li>
            <li>Strong research support for anxiety reduction</li>
            <li>Combines movement, breath, and mindfulness</li>
            <li>Particularly good for older adults or those with physical limitations</li>
          </ul>

          <h3>4. Strength Training</h3>
          <p>
            Often overlooked for mental health:
          </p>
          <ul>
            <li>Provides a sense of control and accomplishment</li>
            <li>Physical exertion releases tension</li>
            <li>Improves self-efficacy (belief in your capabilities)</li>
            <li>Research shows significant anxiety reduction</li>
          </ul>

          <h2>Quick Anxiety-Relief Exercises</h2>
          <p>
            When anxiety hits hard, try these:
          </p>

          <h3>1. The 5-Minute Walk</h3>
          <ul>
            <li>Get outside if possible</li>
            <li>Walk at a comfortable pace</li>
            <li>Focus on your feet hitting the ground</li>
            <li>Notice 5 things you see, 4 you hear, 3 you feel</li>
          </ul>

          <h3>2. Shaking</h3>
          <ul>
            <li>Stand and shake your hands vigorously for 30 seconds</li>
            <li>Shake your whole body for 1-2 minutes</li>
            <li>Let the movement be loose and uncontrolled</li>
            <li>This releases stored tension and stress hormones</li>
          </ul>

          <h3>3. Progressive Muscle Relaxation</h3>
          <ul>
            <li>Tense each muscle group for 5 seconds</li>
            <li>Release and notice the relaxation</li>
            <li>Work from feet to head</li>
            <li>Takes 5-10 minutes</li>
          </ul>

          <h3>4. Box Breathing with Movement</h3>
          <ul>
            <li>Inhale 4 counts while raising arms overhead</li>
            <li>Hold 4 counts at the top</li>
            <li>Exhale 4 counts while lowering arms</li>
            <li>Hold 4 counts at bottom</li>
            <li>Repeat 4-8 times</li>
          </ul>

          <h2>Building an Anxiety-Reducing Exercise Habit</h2>
          <ul>
            <li><strong>Start small</strong> — 10 minutes is enough to feel effects</li>
            <li><strong>Consistency over intensity</strong> — Daily gentle movement beats weekly intense workouts</li>
            <li><strong>Do what you enjoy</strong> — Dreading exercise adds stress; find something you like</li>
            <li><strong>Morning movement</strong> — Sets a calmer tone for the day</li>
            <li><strong>Track your mood</strong> — Notice the before/after to reinforce the habit</li>
          </ul>

          <h2>When Exercise Makes Anxiety Worse</h2>
          <p>
            Sometimes exercise can increase anxiety:
          </p>
          <ul>
            <li><strong>Too intense</strong> — High intensity can trigger panic-like sensations</li>
            <li><strong>Monitoring sensations</strong> — Noticing heart rate/breathing can increase anxiety</li>
            <li><strong>Performance pressure</strong> — Competitive or goal-focused exercise adds stress</li>
          </ul>
          <p>
            <strong>Solution:</strong> Start with gentle, non-competitive exercise. As you build confidence, you can increase intensity.
          </p>

          <h2>Sample Weekly Routine for Anxiety</h2>
          <ul>
            <li><strong>Monday:</strong> 30-min walk + 5-min stretching</li>
            <li><strong>Tuesday:</strong> 20-min yoga video</li>
            <li><strong>Wednesday:</strong> 25-min strength training</li>
            <li><strong>Thursday:</strong> 30-min walk or dance</li>
            <li><strong>Friday:</strong> 20-min yoga or Tai Chi</li>
            <li><strong>Saturday:</strong> Longer walk, hike, or swim</li>
            <li><strong>Sunday:</strong> Gentle stretching, rest</li>
          </ul>
          <p>
            <strong>Daily:</strong> 5-10 minute morning movement (stretching, walk, yoga)
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Exercise is one of the most powerful natural tools for managing anxiety. It works immediately (single session benefits) and long-term (regular exercise reduces baseline anxiety).
          </p>
          <p>
            You don&apos;t need to run marathons or do intense workouts. A daily walk, some yoga, and occasional strength training can make a significant difference in how you feel. The key is consistency—showing up regularly, even when you don&apos;t feel like it.
          </p>
          <p>
            Start today. A 10-minute walk might be the best thing you do for your mental health this week.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to move for your mental health?
          </h3>
          <p className="text-gray-600 mb-4">
            Get gentle, anxiety-friendly exercise routines tailored to you.
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
