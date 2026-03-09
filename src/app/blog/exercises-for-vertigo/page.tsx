import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Vertigo: Vestibular Rehabilitation at Home | Foundational Rehab',
  description: 'Reduce dizziness and improve balance with vestibular exercises. Home-based vertigo rehabilitation guide.',
};

export default function ExercisesForVertigoPage() {
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
            Exercises for Vertigo: Vestibular Rehabilitation at Home
          </h1>
          <p className="text-xl text-gray-600">
            Dizziness and balance problems can improve with the right exercises.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Vertigo—the sensation that you or your surroundings are spinning—can be debilitating. While you should see a doctor to determine the cause, vestibular rehabilitation exercises can significantly reduce symptoms and improve balance for many types of vertigo.
          </p>

          <h2>Important: See a Doctor First</h2>
          <p>
            <strong>Get evaluated before starting exercises if you have:</strong>
          </p>
          <ul>
            <li>New or severe vertigo</li>
            <li>Vertigo with hearing loss</li>
            <li>Vertigo with severe headache</li>
            <li>Vertigo with weakness, numbness, or vision changes</li>
            <li>Vertigo after head injury</li>
          </ul>
          <p>
            These could indicate conditions requiring specific treatment. Once serious causes are ruled out, these exercises can help.
          </p>

          <h2>How Vestibular Exercises Work</h2>
          <ul>
            <li><strong>Habituation</strong> — Repeated exposure reduces sensitivity to movements that cause dizziness</li>
            <li><strong>Gaze stabilization</strong> — Improves ability to keep vision steady during head movement</li>
            <li><strong>Balance training</strong> — Enhances stability and reduces fall risk</li>
          </ul>
          <p>
            The brain learns to compensate for vestibular dysfunction through consistent practice.
          </p>

          <h2>Gaze Stabilization Exercises</h2>

          <h3>1. VOR x1 (Horizontal)</h3>
          <ul>
            <li>Hold a card with a letter at arm&apos;s length</li>
            <li>Focus on the letter</li>
            <li>Turn head side to side while keeping eyes on the letter</li>
            <li>Start slowly, gradually increase speed</li>
            <li>1 minute, 3x daily</li>
          </ul>

          <h3>2. VOR x1 (Vertical)</h3>
          <ul>
            <li>Same exercise, but move head up and down</li>
            <li>Keep eyes focused on the letter</li>
            <li>1 minute, 3x daily</li>
          </ul>

          <h3>3. VOR x2</h3>
          <ul>
            <li>Hold card at arm&apos;s length</li>
            <li>Move head and card in opposite directions</li>
            <li>Keep eyes on the letter</li>
            <li>1 minute, 3x daily</li>
          </ul>

          <h2>Habituation Exercises</h2>
          <p>
            These provoke mild dizziness to help your brain adapt. Stop if dizziness becomes severe.
          </p>

          <h3>4. Brandt-Daroff Exercises</h3>
          <ul>
            <li>Sit on edge of bed</li>
            <li>Quickly lie down on one side, nose pointed up at 45°</li>
            <li>Stay 30 seconds or until dizziness stops</li>
            <li>Return to sitting, wait 30 seconds</li>
            <li>Repeat on other side</li>
            <li>5 reps each side, 2-3x daily</li>
          </ul>

          <h3>5. Eye Movements (Sitting)</h3>
          <ul>
            <li>Look up and down (20 times)</li>
            <li>Look side to side (20 times)</li>
            <li>Start slow, increase speed</li>
          </ul>

          <h3>6. Head Movements (Sitting)</h3>
          <ul>
            <li>Turn head side to side (20 times)</li>
            <li>Tilt head up and down (20 times)</li>
            <li>Eyes can be open or closed</li>
          </ul>

          <h2>Balance Exercises</h2>

          <h3>7. Standing Balance</h3>
          <ul>
            <li>Stand with feet together, arms at sides</li>
            <li>Hold 30-60 seconds</li>
            <li>Progress: eyes closed</li>
            <li>Progress: feet in tandem (heel-to-toe)</li>
            <li>Progress: single leg stance</li>
          </ul>

          <h3>8. Weight Shifts</h3>
          <ul>
            <li>Stand with feet hip-width apart</li>
            <li>Shift weight side to side</li>
            <li>Then forward and back</li>
            <li>20 shifts each direction</li>
          </ul>

          <h3>9. Tandem Walking</h3>
          <ul>
            <li>Walk heel-to-toe in a straight line</li>
            <li>10-20 steps</li>
            <li>Use wall for support initially</li>
          </ul>

          <h3>10. Head Turns While Walking</h3>
          <ul>
            <li>Walk in a straight line</li>
            <li>Turn head side to side while walking</li>
            <li>Start with slow turns, increase speed</li>
            <li>20-30 feet</li>
          </ul>

          <h2>For BPPV (Positional Vertigo)</h2>
          <p>
            If your vertigo is triggered by head position changes (like looking up or rolling over in bed), it may be BPPV. These specific maneuvers can help:
          </p>

          <h3>Epley Maneuver (for posterior canal BPPV)</h3>
          <ul>
            <li>Sit on bed, turn head 45° toward affected side</li>
            <li>Quickly lie back with head hanging over edge</li>
            <li>Wait 30 seconds</li>
            <li>Turn head 90° to opposite side</li>
            <li>Wait 30 seconds</li>
            <li>Roll onto that side, head facing floor</li>
            <li>Wait 30 seconds</li>
            <li>Sit up slowly</li>
          </ul>
          <p><em>Note: Best performed first time with a healthcare provider to ensure correct technique.</em></p>

          <h2>Sample Daily Program</h2>
          <p>
            <strong>Morning:</strong>
          </p>
          <ul>
            <li>VOR x1 horizontal: 1 min</li>
            <li>VOR x1 vertical: 1 min</li>
            <li>Standing balance: 1 min</li>
          </ul>
          <p>
            <strong>Midday:</strong>
          </p>
          <ul>
            <li>Eye movements: 20 reps each direction</li>
            <li>Head movements: 20 reps each direction</li>
            <li>Weight shifts: 20 each direction</li>
          </ul>
          <p>
            <strong>Evening:</strong>
          </p>
          <ul>
            <li>Brandt-Daroff: 5 reps each side</li>
            <li>Tandem walking: 20 steps</li>
            <li>Standing balance (eyes closed): 30 sec</li>
          </ul>

          <h2>Tips for Success</h2>
          <ul>
            <li><strong>Expect some dizziness</strong> — Mild symptoms during exercises means they&apos;re working</li>
            <li><strong>Stay safe</strong> — Exercise near a wall or support initially</li>
            <li><strong>Be consistent</strong> — Daily practice is essential for improvement</li>
            <li><strong>Progress gradually</strong> — Increase difficulty as you improve</li>
            <li><strong>Be patient</strong> — Improvement takes weeks to months</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Vestibular exercises can significantly reduce vertigo and improve balance for many conditions. The key is consistent daily practice. Your brain is remarkably adaptable—given the right stimulus through these exercises, it can learn to compensate for vestibular dysfunction.
          </p>
          <p>
            Start slowly, stay safe, and be patient. Most people see meaningful improvement within 4-6 weeks of consistent practice.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want guided balance exercises?
          </h3>
          <p className="text-gray-600 mb-4">
            Get progressive vestibular and balance training routines.
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
