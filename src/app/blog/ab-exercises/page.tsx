import Link from 'next/link';

export const metadata = {
  title: 'Ab Exercises: The Best Moves for a Stronger Midsection | Foundational Rehab',
  description: 'Build defined abs with these effective exercises. From beginner to advanced, learn the best ab workouts for visible results.',
};

export default function AbExercisesPage() {
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
            <span>7 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ab Exercises: The Best Moves for a Stronger Midsection
          </h1>
          <p className="text-xl text-gray-600">
            Want visible abs? You need the right exercises—and realistic expectations about what it takes.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Let&apos;s be real: visible abs are made in the kitchen. No amount of crunches will reveal your six-pack if it&apos;s covered by body fat. But training your abs makes them bigger and stronger—so when you do lean out, there&apos;s actually something to show.
          </p>
          <p>
            Here are the most effective ab exercises, organized by difficulty and function.
          </p>

          <h2>The Truth About Abs</h2>
          <ul>
            <li><strong>Everyone has abs</strong>—they&apos;re just often hidden under fat</li>
            <li><strong>Spot reduction doesn&apos;t work</strong>—ab exercises don&apos;t burn belly fat specifically</li>
            <li><strong>Diet determines visibility</strong>—typically need 10-15% body fat (men) or 15-22% (women)</li>
            <li><strong>Training builds the muscle</strong>—bigger abs show through at higher body fat</li>
          </ul>

          <h2>Upper Ab Exercises</h2>

          <h3>Crunches</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Hands behind head (don&apos;t pull on neck)</li>
            <li>Lift shoulder blades off ground</li>
            <li>Think about bringing ribs toward hips</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>The classic. Simple but effective when done right.</p>

          <h3>Cable Crunches</h3>
          <ol>
            <li>Kneel facing cable machine with rope attachment</li>
            <li>Hold rope behind your head</li>
            <li>Crunch down, bringing elbows toward knees</li>
            <li>Return with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Allows you to add resistance and progressively overload.</p>

          <h3>Decline Crunches</h3>
          <ol>
            <li>Lie on decline bench, feet hooked</li>
            <li>Cross arms over chest or hands behind head</li>
            <li>Crunch up, lifting shoulder blades</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h2>Lower Ab Exercises</h2>

          <h3>Reverse Crunches</h3>
          <ol>
            <li>Lie on back, arms at sides</li>
            <li>Lift knees toward chest</li>
            <li>Curl hips off the floor</li>
            <li>Lower legs back to start</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Focus on curling the pelvis, not just swinging legs.</p>

          <h3>Leg Raises</h3>
          <ol>
            <li>Lie flat, hands under hips for support</li>
            <li>Keep legs straight (or slightly bent)</li>
            <li>Lift legs until perpendicular to floor</li>
            <li>Lower slowly without touching floor</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Keep lower back pressed into floor throughout.</p>

          <h3>Hanging Leg Raises</h3>
          <ol>
            <li>Hang from pull-up bar</li>
            <li>Raise legs until parallel to floor (or higher)</li>
            <li>Lower with control—don&apos;t swing</li>
          </ol>
          <p><em>Reps: 10-15, 3 sets</em></p>
          <p>Progress: bent knees → straight legs → toes to bar.</p>

          <h3>Dead Bug</h3>
          <ol>
            <li>Lie on back, arms toward ceiling, knees bent 90°</li>
            <li>Press lower back firmly into floor</li>
            <li>Lower opposite arm and leg toward floor</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 10 each side, 3 sets</em></p>
          <p>Doesn&apos;t look hard—until you do it right.</p>

          <h2>Oblique Exercises</h2>

          <h3>Bicycle Crunches</h3>
          <ol>
            <li>Lie on back, hands behind head</li>
            <li>Bring right elbow toward left knee</li>
            <li>Simultaneously extend right leg</li>
            <li>Alternate sides in a pedaling motion</li>
          </ol>
          <p><em>Reps: 15 each side, 3 sets</em></p>
          <p>One of the most effective ab exercises according to EMG studies.</p>

          <h3>Russian Twists</h3>
          <ol>
            <li>Sit with knees bent, feet off floor (or on floor for easier)</li>
            <li>Lean back slightly, holding weight or clasping hands</li>
            <li>Rotate torso side to side</li>
            <li>Touch weight to floor on each side</li>
          </ol>
          <p><em>Reps: 15 each side, 3 sets</em></p>

          <h3>Side Plank</h3>
          <ol>
            <li>Lie on side, prop up on forearm</li>
            <li>Lift hips—body straight from head to feet</li>
            <li>Don&apos;t let hips sag</li>
          </ol>
          <p><em>Hold: 30-45 seconds each side, 3 sets</em></p>

          <h3>Woodchops</h3>
          <ol>
            <li>Stand with cable or weight at one shoulder</li>
            <li>Rotate and pull diagonally across body to opposite hip</li>
            <li>Control the return</li>
          </ol>
          <p><em>Reps: 12-15 each side, 3 sets</em></p>
          <p>Great functional movement for rotational power.</p>

          <h3>Heel Touches</h3>
          <ol>
            <li>Lie on back, knees bent, feet flat</li>
            <li>Lift shoulders slightly off ground</li>
            <li>Reach right hand toward right heel</li>
            <li>Return and reach left hand toward left heel</li>
          </ol>
          <p><em>Reps: 20 each side, 3 sets</em></p>

          <h2>Isometric Exercises</h2>

          <h3>Plank</h3>
          <ol>
            <li>Forearms on ground, body straight</li>
            <li>Squeeze glutes, brace core</li>
            <li>Don&apos;t let hips sag or pike</li>
          </ol>
          <p><em>Hold: 30-60 seconds, 3 sets</em></p>
          <p>The foundation of core stability.</p>

          <h3>Hollow Body Hold</h3>
          <ol>
            <li>Lie on back</li>
            <li>Press lower back into floor</li>
            <li>Lift shoulders and legs off ground</li>
            <li>Arms extended by ears or sides</li>
            <li>Hold the &quot;banana&quot; shape</li>
          </ol>
          <p><em>Hold: 20-30 seconds, 3 sets</em></p>
          <p>Gymnasts use this constantly—it works.</p>

          <h3>L-Sit (Advanced)</h3>
          <ol>
            <li>Sit between two elevated surfaces (parallettes, chairs)</li>
            <li>Press down, lifting body off ground</li>
            <li>Extend legs straight in front of you</li>
            <li>Hold</li>
          </ol>
          <p><em>Hold: 10-30 seconds, 3 sets</em></p>

          <h2>Sample Ab Workouts</h2>

          <h3>Beginner (10 min)</h3>
          <ul>
            <li>Crunches: 15 × 3</li>
            <li>Reverse crunches: 12 × 3</li>
            <li>Plank: 30 sec × 3</li>
          </ul>

          <h3>Intermediate (15 min)</h3>
          <ul>
            <li>Bicycle crunches: 15 each × 3</li>
            <li>Leg raises: 12 × 3</li>
            <li>Russian twists: 15 each × 3</li>
            <li>Dead bugs: 10 each × 3</li>
            <li>Plank: 45 sec × 2</li>
          </ul>

          <h3>Advanced (20 min)</h3>
          <ul>
            <li>Hanging leg raises: 12 × 3</li>
            <li>Cable crunches: 15 × 3</li>
            <li>Woodchops: 12 each × 3</li>
            <li>Hollow body hold: 30 sec × 3</li>
            <li>Side plank: 45 sec each × 2</li>
            <li>Ab wheel rollouts: 10 × 3</li>
          </ul>

          <h3>Quick 5-Minute Finisher</h3>
          <ul>
            <li>Bicycle crunches: 20 each</li>
            <li>Reverse crunches: 15</li>
            <li>Plank: 45 sec</li>
            <li>Repeat 2x</li>
          </ul>

          <h2>Ab Training Tips</h2>
          <ul>
            <li><strong>Train abs 3-4x per week:</strong> They recover fast</li>
            <li><strong>Quality over quantity:</strong> 15 slow reps beat 50 fast ones</li>
            <li><strong>Progressive overload applies:</strong> Add reps, sets, or resistance</li>
            <li><strong>Don&apos;t neglect obliques:</strong> They create the &quot;V&quot; taper</li>
            <li><strong>Breathe properly:</strong> Exhale on the contraction</li>
            <li><strong>Include isometrics:</strong> Planks and holds build stability</li>
            <li><strong>Don&apos;t over-rely on hip flexors:</strong> Focus on curling spine, not lifting legs</li>
          </ul>

          <h2>Common Ab Training Mistakes</h2>
          <ul>
            <li><strong>Doing hundreds of reps:</strong> Your abs respond to progressive overload like any muscle</li>
            <li><strong>Only doing crunches:</strong> Hit all angles—upper, lower, obliques, isometric</li>
            <li><strong>Pulling on your neck:</strong> Hands support head, don&apos;t yank it</li>
            <li><strong>Using momentum:</strong> Slow, controlled reps work the muscle harder</li>
            <li><strong>Neglecting diet:</strong> You can&apos;t out-train a bad diet for visible abs</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Building strong abs requires the right exercises, progressive challenge, and hitting all parts of your midsection. But remember: visible abs are primarily a function of body fat percentage.
          </p>
          <p>
            Train your abs hard, eat in a way that supports your goals, and the results will come.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete ab training program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates personalized core and ab routines based on your fitness level.
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
