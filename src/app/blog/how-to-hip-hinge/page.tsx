import Link from 'next/link';

export const metadata = {
  title: 'How to Hip Hinge: Master This Essential Movement | Foundational Rehab',
  description: 'The hip hinge is fundamental to safe lifting and athletic performance. Complete guide with drills and progressions.',
};

export default function HowToHipHingePage() {
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
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Education</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <time>March 9, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Hip Hinge: Master This Essential Movement
          </h1>
          <p className="text-xl text-gray-600">
            The hip hinge protects your back and unlocks your posterior chain.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            The hip hinge is one of the most important movement patterns to master. It&apos;s how you should pick things up, bend over, and load your posterior chain (hamstrings, glutes, back). A proper hip hinge protects your spine and enables safe, powerful movement.
          </p>

          <h2>What Is a Hip Hinge?</h2>
          <p>
            A hip hinge is bending at the hips while keeping your spine neutral. Instead of rounding your back to reach down, you push your hips back and let your torso come forward while maintaining spinal alignment.
          </p>
          <p>
            <strong>Hip hinge vs. squat:</strong>
          </p>
          <ul>
            <li><strong>Squat:</strong> Knees bend significantly, hips drop down</li>
            <li><strong>Hip hinge:</strong> Hips push back, minimal knee bend, torso comes forward</li>
          </ul>

          <h2>Why It Matters</h2>
          <ul>
            <li><strong>Protects your back</strong> — Neutral spine during bending/lifting</li>
            <li><strong>Activates posterior chain</strong> — Loads hamstrings and glutes</li>
            <li><strong>Foundation for exercises</strong> — Deadlifts, kettlebell swings, good mornings</li>
            <li><strong>Daily function</strong> — Picking things up, bending over</li>
          </ul>

          <h2>The Hip Hinge Movement</h2>

          <h3>Setup</h3>
          <ul>
            <li>Stand with feet hip to shoulder-width apart</li>
            <li>Slight bend in knees (not locked)</li>
            <li>Weight in mid-foot to heels</li>
            <li>Core braced, chest up</li>
          </ul>

          <h3>The Movement</h3>
          <ol>
            <li><strong>Initiate with hips</strong> — Push your hips straight back</li>
            <li><strong>Keep spine neutral</strong> — Back stays flat, not rounded</li>
            <li><strong>Knees stay relatively still</strong> — They may bend slightly, but hips do the work</li>
            <li><strong>Feel hamstrings stretch</strong> — As you hinge, hamstrings load</li>
            <li><strong>Stop when you can&apos;t maintain flat back</strong> — Usually when torso is near parallel</li>
            <li><strong>Drive hips forward to return</strong> — Squeeze glutes at the top</li>
          </ol>

          <h2>Common Mistakes</h2>

          <h3>1. Rounding the Lower Back</h3>
          <p><strong>Problem:</strong> Back rounds as you hinge forward</p>
          <p><strong>Fix:</strong> Don&apos;t go as deep; focus on pushing hips back; use mirror or video</p>

          <h3>2. Bending Knees Too Much (Squatting)</h3>
          <p><strong>Problem:</strong> Turns into a squat instead of hinge</p>
          <p><strong>Fix:</strong> Push hips back first; knees stay relatively stable</p>

          <h3>3. Not Loading Hamstrings</h3>
          <p><strong>Problem:</strong> No stretch felt in hamstrings</p>
          <p><strong>Fix:</strong> Push hips further back; keep shins more vertical</p>

          <h3>4. Hyperextending at the Top</h3>
          <p><strong>Problem:</strong> Overarching back at lockout</p>
          <p><strong>Fix:</strong> Squeeze glutes to finish, but keep ribs down</p>

          <h2>Hip Hinge Drills</h2>

          <h3>1. Wall Tap Drill</h3>
          <ul>
            <li>Stand about 6 inches from wall, facing away</li>
            <li>Push hips back until they touch wall</li>
            <li>Step further away and repeat</li>
            <li>Practice until you can hinge deeply without wall</li>
          </ul>
          <p><em>Best drill for beginners.</em></p>

          <h3>2. Dowel/Broomstick Drill</h3>
          <ul>
            <li>Hold dowel against back: contact at head, upper back, tailbone</li>
            <li>Hinge while maintaining all three contact points</li>
            <li>If you lose contact, you&apos;re rounding or arching</li>
          </ul>

          <h3>3. Hands-on-Hips Drill</h3>
          <ul>
            <li>Place hands in hip crease (where thigh meets torso)</li>
            <li>Hinge by pushing hands back with your hips</li>
            <li>Helps you feel the hip movement</li>
          </ul>

          <h3>4. Kettlebell Between Legs</h3>
          <ul>
            <li>Hold kettlebell or weight between legs</li>
            <li>Hinge, letting weight hang straight down</li>
            <li>Drive hips forward to stand</li>
            <li>Weight provides feedback on spine position</li>
          </ul>

          <h2>Hip Hinge Exercises</h2>
          <p>
            Once you&apos;ve mastered the pattern, progress to these exercises:
          </p>

          <h3>Bodyweight</h3>
          <ul>
            <li><strong>Good morning:</strong> Hands behind head, hinge</li>
            <li><strong>Single-leg RDL (no weight):</strong> One-leg balance hinge</li>
          </ul>

          <h3>Weighted</h3>
          <ul>
            <li><strong>Romanian deadlift (RDL):</strong> Hinge with weight along legs</li>
            <li><strong>Conventional deadlift:</strong> Hinge to pick weight from floor</li>
            <li><strong>Kettlebell swing:</strong> Explosive hip hinge</li>
            <li><strong>Cable pull-through:</strong> Hinge against cable resistance</li>
          </ul>

          <h2>Daily Practice</h2>
          <ul>
            <li>Practice 10-20 bodyweight hip hinges daily</li>
            <li>Use the pattern when picking things up</li>
            <li>Notice when you bend over—are you hinging or rounding?</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            The hip hinge is fundamental. It protects your back by keeping the spine neutral during bending and lifting. It loads your posterior chain—hamstrings and glutes—which are often weak and neglected. And it&apos;s the foundation for some of the best strength exercises.
          </p>
          <p>
            Master this pattern with the drills, practice it daily, and use it in real life. Your back will thank you.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want to master fundamental movement patterns?
          </h3>
          <p className="text-gray-600 mb-4">
            Get guided instruction on squats, hinges, and more.
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
