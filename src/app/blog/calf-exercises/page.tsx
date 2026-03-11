import Link from 'next/link';

export const metadata = {
  title: 'Calf Exercises: Build Bigger, Stronger Calves | Foundational Rehab',
  description: 'The best exercises for calf development. Learn how to train both calf muscles effectively with proven exercises and workout routines.',
};

export default function CalfExercisesPage() {
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
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Strength</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calf Exercises: Build Bigger, Stronger Calves
          </h1>
          <p className="text-xl text-gray-600">
            Stubborn calves? You&apos;re probably not training them right. Here&apos;s how to actually grow them.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Calves are notoriously stubborn. Many people train them and see minimal results. The secret? Most people don&apos;t train them hard enough, often enough, or through a full range of motion.
          </p>
          <p>
            Let&apos;s fix that.
          </p>

          <h2>Calf Anatomy</h2>
          <p>Your calves have two main muscles:</p>
          <ul>
            <li><strong>Gastrocnemius:</strong> The larger, visible muscle. Has two heads that create the &quot;diamond&quot; shape. Works when knee is straight.</li>
            <li><strong>Soleus:</strong> Lies underneath the gastrocnemius. Wider and flatter. Works when knee is bent.</li>
          </ul>
          <p>
            <strong>Key insight:</strong> You must train both muscles for complete calf development. Straight-knee exercises hit gastrocnemius. Bent-knee exercises hit soleus.
          </p>

          <h2>Best Calf Exercises</h2>

          <h3>Standing Calf Raises (Gastrocnemius)</h3>
          <ol>
            <li>Stand on edge of step, heels hanging off</li>
            <li>Rise up onto toes as high as possible</li>
            <li>Squeeze at the top (2 seconds)</li>
            <li>Lower slowly below step level for full stretch</li>
          </ol>
          <p><em>Reps: 15-20, 4-6 sets</em></p>
          <p>
            <strong>Key:</strong> Full range of motion is everything. Go all the way up, all the way down.
          </p>

          <h3>Seated Calf Raises (Soleus)</h3>
          <ol>
            <li>Sit on seated calf machine (or with weight on knees)</li>
            <li>Balls of feet on platform, heels hanging off</li>
            <li>Raise heels as high as possible</li>
            <li>Lower below platform for full stretch</li>
          </ol>
          <p><em>Reps: 15-20, 4-6 sets</em></p>
          <p>
            The bent knee takes the gastrocnemius out of the movement, targeting the soleus.
          </p>

          <h3>Single-Leg Calf Raises</h3>
          <ol>
            <li>Stand on one leg on edge of step</li>
            <li>Hold something for balance</li>
            <li>Rise up on toes, squeeze at top</li>
            <li>Lower slowly below step level</li>
          </ol>
          <p><em>Reps: 12-15 each leg, 3-4 sets</em></p>
          <p>Fixes imbalances and allows you to focus on each calf.</p>

          <h3>Donkey Calf Raises</h3>
          <ol>
            <li>Stand on step, hinge forward at hips</li>
            <li>Hold onto something sturdy</li>
            <li>Let heels hang below step</li>
            <li>Rise up onto toes</li>
            <li>Lower with stretch</li>
          </ol>
          <p><em>Reps: 15-20, 3-4 sets</em></p>
          <p>The hip-flexed position provides a greater stretch.</p>

          <h3>Leg Press Calf Raises</h3>
          <ol>
            <li>Sit in leg press machine</li>
            <li>Place just balls of feet on bottom of platform</li>
            <li>Press through toes to extend ankles</li>
            <li>Lower for full stretch</li>
          </ol>
          <p><em>Reps: 15-20, 4 sets</em></p>
          <p>Allows for heavy loading in a safe position.</p>

          <h3>Smith Machine Calf Raises</h3>
          <ol>
            <li>Stand under Smith machine bar on shoulders</li>
            <li>Balls of feet on raised surface or plates</li>
            <li>Rise up, squeeze, lower with stretch</li>
          </ol>
          <p><em>Reps: 12-15, 4 sets</em></p>

          <h3>Farmer&apos;s Walk on Toes</h3>
          <ol>
            <li>Hold heavy dumbbells or kettlebells</li>
            <li>Walk on your toes</li>
            <li>Maintain raised heel position throughout</li>
          </ol>
          <p><em>Distance: 30-50 steps, 3 sets</em></p>

          <h2>Bodyweight Calf Exercises</h2>
          <p>No equipment? These still work:</p>

          <h3>Wall Calf Raises</h3>
          <ol>
            <li>Face wall, hands on wall for balance</li>
            <li>Rise onto toes</li>
            <li>Lower slowly</li>
            <li>Progress to single-leg</li>
          </ol>

          <h3>Stair Calf Raises</h3>
          <ol>
            <li>Stand on edge of stair, heels hanging</li>
            <li>Full range calf raises</li>
            <li>Hold railing for balance</li>
          </ol>

          <h3>Jump Rope</h3>
          <p>Great for calf endurance and coordination. Stay on balls of feet.</p>

          <h2>Sample Calf Workouts</h2>

          <h3>Basic Calf Routine</h3>
          <ul>
            <li>Standing calf raises: 15 × 4</li>
            <li>Seated calf raises: 15 × 4</li>
          </ul>
          <p><em>Do 2-3 times per week</em></p>

          <h3>High Volume Calf Blast</h3>
          <ul>
            <li>Standing calf raises: 20 × 5</li>
            <li>Seated calf raises: 20 × 5</li>
            <li>Single-leg calf raises: 15 each × 3</li>
          </ul>

          <h3>Quick Calf Finisher (5 min)</h3>
          <ul>
            <li>Standing calf raises: 25 × 2</li>
            <li>Seated calf raises: 25 × 2</li>
          </ul>
          <p>Add to end of leg day.</p>

          <h3>Bodyweight Calf Workout</h3>
          <ul>
            <li>Single-leg calf raises on stair: 20 each × 4</li>
            <li>Regular calf raises: 30 × 3</li>
            <li>Calf raise holds (top position): 30 sec × 3</li>
          </ul>

          <h2>Calf Training Secrets</h2>

          <h3>1. Full Range of Motion</h3>
          <p>
            This is the #1 mistake. People bounce through partial reps. Go all the way up (maximum contraction) and all the way down (full stretch). This alone will transform your calf training.
          </p>

          <h3>2. Train Both Muscles</h3>
          <p>
            Always include both straight-knee (gastrocnemius) and bent-knee (soleus) exercises. Both contribute to calf size.
          </p>

          <h3>3. High Frequency</h3>
          <p>
            Calves recover quickly. Training them 3-4 times per week is often better than once. They&apos;re used to being worked constantly when walking.
          </p>

          <h3>4. High Reps</h3>
          <p>
            Calves respond well to higher rep ranges (15-25+). They have a high proportion of slow-twitch fibers.
          </p>

          <h3>5. Pause at the Top</h3>
          <p>
            Squeeze for 1-2 seconds at peak contraction. No bouncing. This eliminates momentum and maximizes muscle tension.
          </p>

          <h3>6. Slow Negatives</h3>
          <p>
            Lower the weight over 3-4 seconds. The eccentric (lowering) phase is where a lot of muscle damage occurs.
          </p>

          <h2>Weekly Calf Training Schedule</h2>
          <ul>
            <li><strong>Monday (Leg Day):</strong> Standing calf raises 4 × 15, Seated 4 × 15</li>
            <li><strong>Wednesday (Upper Day):</strong> Single-leg calf raises 3 × 12 each</li>
            <li><strong>Friday (Full Body):</strong> Leg press calf raises 4 × 20</li>
          </ul>

          <h2>Why Your Calves Won&apos;t Grow (Common Mistakes)</h2>
          <ul>
            <li><strong>Partial reps:</strong> Not going through full range of motion</li>
            <li><strong>Bouncing:</strong> Using momentum instead of muscle</li>
            <li><strong>Training once a week:</strong> Not enough frequency for stubborn calves</li>
            <li><strong>Only standing exercises:</strong> Missing the soleus entirely</li>
            <li><strong>Going too heavy:</strong> Sacrificing range of motion for weight</li>
            <li><strong>Not enough volume:</strong> Calves need more sets than you think</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Calf development requires full range of motion, both standing and seated exercises, high frequency, and patience. Most people give up before giving their calves a real chance.
          </p>
          <p>
            Train them 3-4 times per week, use strict form with full stretch and contraction, and watch them grow.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete leg program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates balanced lower body programs that don&apos;t neglect your calves.
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
