import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Weight Loss: What Actually Works | Foundational Rehab',
  description: 'Discover the most effective exercises for weight loss. Learn why strength training beats cardio, how to structure workouts, and what the science says.',
};

export default function ExercisesForWeightLossPage() {
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
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Wellness</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Weight Loss: What Actually Works
          </h1>
          <p className="text-xl text-gray-600">
            Exercise alone won&apos;t make you lose weight—but the right exercise makes everything work better.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Let&apos;s be honest: you can&apos;t out-exercise a bad diet. Weight loss is primarily about calorie balance, and diet is the bigger lever. But exercise is still crucial—it preserves muscle, boosts metabolism, and makes the whole process more sustainable.
          </p>
          <p>
            Here&apos;s what actually works for weight loss, based on science and real-world results.
          </p>

          <h2>The Truth About Exercise and Weight Loss</h2>
          <ul>
            <li><strong>Diet creates the deficit:</strong> It&apos;s much easier to eat 500 fewer calories than burn 500 extra</li>
            <li><strong>Exercise preserves muscle:</strong> Without it, you lose muscle along with fat</li>
            <li><strong>Muscle boosts metabolism:</strong> More muscle = more calories burned at rest</li>
            <li><strong>Exercise improves body composition:</strong> You can weigh the same but look completely different</li>
            <li><strong>Movement increases NEAT:</strong> Non-exercise activity thermogenesis (daily movement) matters more than workouts</li>
          </ul>

          <h2>The Best Exercises for Weight Loss</h2>

          <h3>1. Strength Training (Priority #1)</h3>
          <p>
            Surprised? Most people think cardio is king for weight loss. But strength training:
          </p>
          <ul>
            <li><strong>Preserves muscle</strong> during a calorie deficit (cardio doesn&apos;t)</li>
            <li><strong>Builds metabolism</strong>—muscle burns calories 24/7</li>
            <li><strong>Creates the &quot;toned&quot; look</strong> people actually want</li>
            <li><strong>Burns calories during and after</strong> workouts (EPOC effect)</li>
            <li><strong>Improves insulin sensitivity</strong>—helps your body use food better</li>
          </ul>
          <p>
            <strong>Recommendation:</strong> 2-4 strength sessions per week. Focus on compound movements—squats, deadlifts, presses, rows.
          </p>

          <h3>2. Walking (Underrated King)</h3>
          <p>
            Walking is the most underrated fat loss tool. Benefits:
          </p>
          <ul>
            <li><strong>Low impact:</strong> Can do it every day without burnout</li>
            <li><strong>Burns primarily fat:</strong> Low intensity = higher fat oxidation</li>
            <li><strong>Doesn&apos;t increase appetite:</strong> Unlike intense cardio</li>
            <li><strong>Reduces stress:</strong> Lower cortisol = better fat loss</li>
            <li><strong>Adds up:</strong> 10,000 steps = ~400-500 calories</li>
          </ul>
          <p>
            <strong>Recommendation:</strong> Aim for 7,000-10,000 steps daily. Walk after meals for blood sugar benefits.
          </p>

          <h3>3. HIIT (High-Intensity Interval Training)</h3>
          <p>
            Short bursts of intense effort followed by rest. Effective but demanding.
          </p>
          <ul>
            <li><strong>Time-efficient:</strong> 20-30 minutes is plenty</li>
            <li><strong>High calorie burn:</strong> Both during and after (EPOC)</li>
            <li><strong>Improves cardiovascular fitness</strong> quickly</li>
            <li><strong>Can increase appetite:</strong> Watch for compensatory eating</li>
          </ul>
          <p>
            <strong>Recommendation:</strong> 1-2 sessions per week max. More than that is hard to recover from.
          </p>

          <h3>4. Steady-State Cardio</h3>
          <p>
            Traditional cardio—running, cycling, swimming at moderate intensity.
          </p>
          <ul>
            <li><strong>Burns calories:</strong> About 100 calories per 10 minutes of running</li>
            <li><strong>Improves heart health:</strong> Real cardiovascular benefits</li>
            <li><strong>Can increase hunger:</strong> Many people eat back the calories</li>
            <li><strong>Risk of muscle loss:</strong> Especially if overdone without strength training</li>
          </ul>
          <p>
            <strong>Recommendation:</strong> 1-3 sessions per week, 20-45 minutes. Don&apos;t rely on it exclusively.
          </p>

          <h2>Sample Weight Loss Exercise Programs</h2>

          <h3>Beginner (3 days/week)</h3>
          <ul>
            <li><strong>Mon:</strong> Full body strength (30 min)</li>
            <li><strong>Wed:</strong> Walk 30 min + light stretching</li>
            <li><strong>Fri:</strong> Full body strength (30 min)</li>
            <li><strong>Daily:</strong> 7,000+ steps</li>
          </ul>

          <h3>Intermediate (4-5 days/week)</h3>
          <ul>
            <li><strong>Mon:</strong> Strength—lower body</li>
            <li><strong>Tue:</strong> Walk 30-45 min</li>
            <li><strong>Wed:</strong> Strength—upper body</li>
            <li><strong>Thu:</strong> HIIT (20 min) or rest</li>
            <li><strong>Fri:</strong> Full body strength</li>
            <li><strong>Sat:</strong> Long walk or active recovery</li>
            <li><strong>Daily:</strong> 8,000-10,000 steps</li>
          </ul>

          <h3>Advanced (5-6 days/week)</h3>
          <ul>
            <li><strong>Mon:</strong> Strength—push focus</li>
            <li><strong>Tue:</strong> Strength—pull focus + 20 min cardio</li>
            <li><strong>Wed:</strong> HIIT or active recovery</li>
            <li><strong>Thu:</strong> Strength—legs</li>
            <li><strong>Fri:</strong> Strength—upper + cardio</li>
            <li><strong>Sat:</strong> Long steady cardio or active fun</li>
            <li><strong>Daily:</strong> 10,000+ steps</li>
          </ul>

          <h2>Best Exercises by Calorie Burn</h2>
          <p>
            Approximate calories burned per 30 minutes (155 lb person):
          </p>
          <ul>
            <li><strong>Running (6 mph):</strong> 300 calories</li>
            <li><strong>HIIT:</strong> 250-400 calories</li>
            <li><strong>Cycling (vigorous):</strong> 260 calories</li>
            <li><strong>Swimming:</strong> 220 calories</li>
            <li><strong>Strength training:</strong> 110-220 calories (plus afterburn)</li>
            <li><strong>Walking (brisk):</strong> 140 calories</li>
          </ul>
          <p>
            <strong>Note:</strong> Calorie burn varies significantly by individual. Don&apos;t obsess over exact numbers.
          </p>

          <h2>NEAT: The Secret Weapon</h2>
          <p>
            Non-Exercise Activity Thermogenesis (NEAT) is all the movement that isn&apos;t formal exercise:
          </p>
          <ul>
            <li>Walking around the office</li>
            <li>Taking stairs</li>
            <li>Fidgeting</li>
            <li>Standing vs sitting</li>
            <li>Housework, gardening</li>
          </ul>
          <p>
            NEAT can account for 200-900 calories per day. When people diet, NEAT often drops unconsciously—you move less without realizing it. Combat this by:
          </p>
          <ul>
            <li>Tracking steps</li>
            <li>Taking walking meetings</li>
            <li>Standing desk</li>
            <li>Parking far away</li>
            <li>Taking stairs always</li>
          </ul>

          <h2>Common Weight Loss Exercise Mistakes</h2>

          <h3>Mistake 1: Only Doing Cardio</h3>
          <p>
            Cardio burns calories but doesn&apos;t preserve muscle. You&apos;ll lose weight—but you&apos;ll lose muscle too, ending up &quot;skinny fat.&quot;
          </p>
          <p><strong>Fix:</strong> Prioritize strength training. Add cardio as a supplement.</p>

          <h3>Mistake 2: Eating Back Exercise Calories</h3>
          <p>
            &quot;I burned 500 calories, so I can eat this extra meal.&quot; Problem: calorie burn estimates are often wrong, and you negate the deficit.
          </p>
          <p><strong>Fix:</strong> Don&apos;t eat extra because you exercised. Let the deficit do its work.</p>

          <h3>Mistake 3: Too Much HIIT</h3>
          <p>
            HIIT is effective but stressful. Too much leads to burnout, elevated cortisol, and increased appetite.
          </p>
          <p><strong>Fix:</strong> Limit HIIT to 1-2 sessions per week. Fill in with walking and strength training.</p>

          <h3>Mistake 4: Ignoring NEAT</h3>
          <p>
            Doing a 30-minute workout then sitting all day doesn&apos;t move the needle much.
          </p>
          <p><strong>Fix:</strong> Track steps. Stay active throughout the day.</p>

          <h3>Mistake 5: Thinking Exercise Will Fix Diet</h3>
          <p>
            You cannot out-train a bad diet. A single donut can exceed a whole workout&apos;s calorie burn.
          </p>
          <p><strong>Fix:</strong> Focus on nutrition first. Exercise supports the process.</p>

          <h2>The Ideal Weight Loss Exercise Stack</h2>
          <ol>
            <li><strong>Strength training:</strong> 2-4x per week</li>
            <li><strong>Daily walking:</strong> 7,000-10,000 steps</li>
            <li><strong>Optional cardio:</strong> 1-3x per week</li>
            <li><strong>HIIT:</strong> 0-2x per week</li>
            <li><strong>Maximize NEAT:</strong> Move throughout the day</li>
          </ol>

          <h2>The Bottom Line</h2>
          <p>
            Exercise alone won&apos;t cause significant weight loss. But combined with proper nutrition, it transforms your body composition, preserves muscle, and makes the whole process more sustainable.
          </p>
          <p>
            Prioritize strength training. Walk a lot. Add cardio strategically. And remember: the best exercise for weight loss is the one you&apos;ll actually do consistently.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a weight loss exercise program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized workout plans optimized for fat loss and muscle preservation.
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
