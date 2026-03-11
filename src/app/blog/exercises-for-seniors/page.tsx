import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Seniors: Stay Strong, Mobile, and Independent | Foundational Rehab',
  description: 'Safe and effective exercises for seniors to maintain strength, balance, and independence. Includes chair exercises, balance training, and gentle mobility work.',
};

export default function ExercisesForSeniorsPage() {
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
            <span>9 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Seniors: Stay Strong, Mobile, and Independent
          </h1>
          <p className="text-xl text-gray-600">
            The right exercises can add years of independence to your life. Here&apos;s how to stay strong at any age.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Exercise isn&apos;t optional as we age—it&apos;s essential. After 50, we lose muscle mass at about 1-2% per year. Without intervention, this leads to weakness, falls, and loss of independence.
          </p>
          <p>
            The good news? You can rebuild strength at any age. Studies show people in their 80s and 90s can still gain muscle with the right program. It&apos;s never too late to start.
          </p>

          <h2>The Four Pillars of Senior Fitness</h2>
          <ul>
            <li><strong>Balance:</strong> The #1 priority for fall prevention</li>
            <li><strong>Strength:</strong> Maintain muscle to stay independent</li>
            <li><strong>Flexibility:</strong> Keep joints moving through full range</li>
            <li><strong>Cardio:</strong> Heart health and endurance for daily activities</li>
          </ul>
          <p>
            A complete program includes all four. Let&apos;s break down each one.
          </p>

          <h2>Balance Exercises (Priority #1)</h2>
          <p>
            Falls are the leading cause of injury in seniors. Balance training is your best defense.
          </p>

          <h3>Single Leg Stand</h3>
          <ol>
            <li>Stand near a chair or counter for safety</li>
            <li>Shift weight to one leg</li>
            <li>Lift the other foot slightly off the ground</li>
            <li>Hold as long as possible (goal: 30 seconds)</li>
            <li>Switch legs</li>
          </ol>
          <p><em>Do 3 times each leg, daily</em></p>
          <p>
            <strong>Progressions:</strong> Light finger touch → no hands → eyes closed
          </p>

          <h3>Heel-to-Toe Walk</h3>
          <ol>
            <li>Walk in a straight line</li>
            <li>Place your heel directly in front of your other foot&apos;s toes</li>
            <li>Take 20 steps</li>
            <li>Use a wall for support if needed</li>
          </ol>
          <p><em>Do 2-3 times daily</em></p>

          <h3>Weight Shifts</h3>
          <ol>
            <li>Stand with feet hip-width apart</li>
            <li>Slowly shift weight to your right foot</li>
            <li>Lift left foot slightly</li>
            <li>Hold 5 seconds</li>
            <li>Shift back to center, then left</li>
          </ol>
          <p><em>Do 10 each direction</em></p>

          <h3>Sit-to-Stand (Also Strength!)</h3>
          <ol>
            <li>Sit on edge of a sturdy chair</li>
            <li>Feet flat on floor, shoulder-width apart</li>
            <li>Lean forward slightly</li>
            <li>Stand up without using your hands</li>
            <li>Sit back down slowly—don&apos;t plop</li>
          </ol>
          <p><em>Do 10 reps, 2-3 times daily</em></p>
          <p>
            <strong>This is the single most important exercise for independence.</strong> If you struggle, use hands on armrests and work toward hands-free.
          </p>

          <h2>Strength Exercises</h2>
          <p>
            Muscle keeps you independent. Focus on legs, core, and functional movements.
          </p>

          <h3>Wall Push-Ups</h3>
          <ol>
            <li>Stand arm&apos;s length from a wall</li>
            <li>Place hands on wall at shoulder height</li>
            <li>Bend elbows, lean toward wall</li>
            <li>Push back to start</li>
          </ol>
          <p><em>Do 10-15 reps, 2-3 sets</em></p>
          <p>Progress to counter push-ups, then floor push-ups as you get stronger.</p>

          <h3>Seated Leg Extensions</h3>
          <ol>
            <li>Sit tall in a chair</li>
            <li>Extend one leg straight out</li>
            <li>Squeeze your thigh muscle at the top</li>
            <li>Hold 2 seconds</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Do 12-15 each leg, 2-3 sets</em></p>
          <p>Strengthens quadriceps—essential for walking and stairs.</p>

          <h3>Seated Marching</h3>
          <ol>
            <li>Sit tall, feet flat</li>
            <li>Lift one knee toward chest</li>
            <li>Lower and lift the other</li>
            <li>Continue alternating</li>
          </ol>
          <p><em>Do for 1-2 minutes</em></p>

          <h3>Standing Calf Raises</h3>
          <ol>
            <li>Stand behind a chair, hands on the back</li>
            <li>Rise up onto your toes</li>
            <li>Hold briefly at the top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Do 15-20 reps, 2-3 sets</em></p>

          <h3>Seated Rows (with Band)</h3>
          <ol>
            <li>Sit tall, resistance band looped under feet</li>
            <li>Hold band handles with arms extended</li>
            <li>Pull elbows back, squeezing shoulder blades</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Do 12-15 reps, 2-3 sets</em></p>

          <h3>Standing Hip Abduction</h3>
          <ol>
            <li>Stand behind a chair, holding the back</li>
            <li>Lift one leg out to the side</li>
            <li>Keep your body upright—don&apos;t lean</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Do 10-12 each leg, 2-3 sets</em></p>
          <p>Strengthens hip muscles important for stability.</p>

          <h2>Flexibility Exercises</h2>
          <p>
            Maintain range of motion to keep moving comfortably.
          </p>

          <h3>Neck Stretches</h3>
          <ol>
            <li>Sit or stand tall</li>
            <li>Drop your right ear toward right shoulder</li>
            <li>Hold 30 seconds</li>
            <li>Repeat on left</li>
            <li>Drop chin to chest, hold 30 seconds</li>
          </ol>

          <h3>Shoulder Rolls</h3>
          <ol>
            <li>Shrug shoulders up toward ears</li>
            <li>Roll them back and down</li>
            <li>Do 10 circles backward</li>
            <li>Then 10 forward</li>
          </ol>

          <h3>Seated Spinal Twist</h3>
          <ol>
            <li>Sit tall in a chair</li>
            <li>Place right hand on left knee</li>
            <li>Gently twist to the left</li>
            <li>Hold 30 seconds</li>
            <li>Switch sides</li>
          </ol>

          <h3>Seated Hamstring Stretch</h3>
          <ol>
            <li>Sit on edge of chair</li>
            <li>Extend one leg, heel on floor</li>
            <li>Hinge forward from hips (keep back flat)</li>
            <li>Hold 30 seconds each leg</li>
          </ol>

          <h3>Calf Stretch</h3>
          <ol>
            <li>Stand facing a wall, hands on wall</li>
            <li>Step one foot back, heel down</li>
            <li>Lean forward until you feel the stretch</li>
            <li>Hold 30 seconds each leg</li>
          </ol>

          <h2>Cardio for Seniors</h2>
          <p>
            Aim for 150 minutes per week of moderate activity. Best options:
          </p>
          <ul>
            <li><strong>Walking:</strong> The gold standard. Start with 10-15 minutes, build up.</li>
            <li><strong>Water aerobics:</strong> Easy on joints, great resistance</li>
            <li><strong>Stationary cycling:</strong> Low impact, good for knees</li>
            <li><strong>Dancing:</strong> Fun and social—great for the brain too</li>
            <li><strong>Chair aerobics:</strong> Seated marching, arm movements, etc.</li>
          </ul>

          <h2>Sample Weekly Schedule</h2>

          <h3>Beginner (Just Starting)</h3>
          <ul>
            <li><strong>Monday:</strong> Balance exercises (10 min) + Walking (10-15 min)</li>
            <li><strong>Tuesday:</strong> Stretching routine (10 min)</li>
            <li><strong>Wednesday:</strong> Strength exercises (15-20 min)</li>
            <li><strong>Thursday:</strong> Walking (15-20 min) + Balance exercises (5 min)</li>
            <li><strong>Friday:</strong> Stretching (10 min)</li>
            <li><strong>Saturday:</strong> Strength exercises (15-20 min)</li>
            <li><strong>Sunday:</strong> Rest or gentle walking</li>
          </ul>

          <h3>Intermediate (Some Exercise Background)</h3>
          <ul>
            <li><strong>Monday:</strong> Strength (20-30 min) + Balance (5 min)</li>
            <li><strong>Tuesday:</strong> Walking or cycling (20-30 min)</li>
            <li><strong>Wednesday:</strong> Stretching (15 min) + Balance (10 min)</li>
            <li><strong>Thursday:</strong> Strength (20-30 min)</li>
            <li><strong>Friday:</strong> Walking or water aerobics (30 min)</li>
            <li><strong>Saturday:</strong> Balance + Stretching (20 min)</li>
            <li><strong>Sunday:</strong> Gentle activity or rest</li>
          </ul>

          <h2>Safety Tips</h2>
          <ul>
            <li><strong>Start slowly:</strong> You can always add more later</li>
            <li><strong>Have support nearby:</strong> Chair, wall, or person when doing balance work</li>
            <li><strong>Listen to your body:</strong> Some discomfort is normal; pain is not</li>
            <li><strong>Stay hydrated:</strong> Drink water before, during, and after</li>
            <li><strong>Wear proper footwear:</strong> Supportive shoes with good grip</li>
            <li><strong>Check with your doctor:</strong> Especially if you have heart conditions, balance issues, or joint replacements</li>
          </ul>

          <h2>Common Concerns Addressed</h2>

          <h3>&quot;I have arthritis&quot;</h3>
          <p>
            Movement is medicine for arthritis. Low-impact exercises like walking, swimming, and gentle strength training actually reduce pain and stiffness. Start gentle, progress slowly.
          </p>

          <h3>&quot;I&apos;m afraid of falling&quot;</h3>
          <p>
            That fear is valid—but avoiding activity increases fall risk. Balance training is your best protection. Always have support nearby when practicing.
          </p>

          <h3>&quot;I have joint replacements&quot;</h3>
          <p>
            Most exercises are fine after recovery. Avoid high-impact activities and extreme ranges of motion. Check with your surgeon about specific restrictions.
          </p>

          <h3>&quot;I&apos;m too old to start&quot;</h3>
          <p>
            Research consistently shows people in their 80s and 90s benefit from exercise. You can build strength and improve balance at any age. Start where you are.
          </p>

          <h2>Signs You Should Stop and Consult a Doctor</h2>
          <ul>
            <li>Chest pain or pressure</li>
            <li>Severe shortness of breath</li>
            <li>Dizziness or fainting</li>
            <li>Unusual fatigue</li>
            <li>Joint pain that persists after exercise</li>
            <li>Swelling in joints</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Exercise is the closest thing we have to a fountain of youth. It preserves muscle, prevents falls, maintains independence, and improves quality of life at every age.
          </p>
          <p>
            You don&apos;t need a gym. You don&apos;t need equipment. You just need consistency. Start with balance and strength—even 10-15 minutes daily makes a real difference.
          </p>
          <p>
            The best time to start was 20 years ago. The second best time is today.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates safe, progressive exercise programs designed for your fitness level and health conditions.
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
