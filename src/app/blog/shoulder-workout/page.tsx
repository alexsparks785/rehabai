import Link from 'next/link';

export const metadata = {
  title: 'Shoulder Workout: Build Boulder Shoulders | Foundational Rehab',
  description: 'Complete shoulder workout guide for bigger, stronger delts. Hit all three heads with the best exercises for shoulder development.',
};

export default function ShoulderWorkoutPage() {
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
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shoulder Workout: Build Boulder Shoulders
          </h1>
          <p className="text-xl text-gray-600">
            Wide, capped shoulders create the V-taper that makes your physique stand out. Here&apos;s how to build them.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Shoulders are involved in almost every upper body movement. Well-developed delts make you look wider, improve your pressing strength, and are essential for a balanced physique.
          </p>

          <h2>Shoulder Anatomy</h2>
          <p>The deltoid has three heads:</p>
          <ul>
            <li><strong>Anterior (front) delt:</strong> Trained with pressing and front raises</li>
            <li><strong>Lateral (side) delt:</strong> Trained with lateral raises—creates width</li>
            <li><strong>Posterior (rear) delt:</strong> Trained with reverse flyes and face pulls</li>
          </ul>
          <p>
            <strong>Key insight:</strong> Most people overtrain front delts (from all the pressing) and undertrain side and rear delts. Balance is everything.
          </p>

          <h2>Best Shoulder Exercises</h2>

          <h3>Overhead Press (Barbell)</h3>
          <ol>
            <li>Bar at shoulder level, grip slightly wider than shoulders</li>
            <li>Brace core, squeeze glutes</li>
            <li>Press straight overhead</li>
            <li>Lock out with biceps by ears</li>
            <li>Lower to shoulders with control</li>
          </ol>
          <p><em>Reps: 6-10, 4 sets</em></p>
          <p>The king of shoulder exercises for overall mass and strength.</p>

          <h3>Dumbbell Shoulder Press</h3>
          <ol>
            <li>Seated or standing, dumbbells at shoulder level</li>
            <li>Press straight overhead</li>
            <li>Lower to shoulders</li>
          </ol>
          <p><em>Reps: 8-12, 3-4 sets</em></p>
          <p>Greater range of motion than barbell. Fixes imbalances.</p>

          <h3>Arnold Press</h3>
          <ol>
            <li>Start with dumbbells at shoulders, palms facing you</li>
            <li>Press up while rotating palms to face forward</li>
            <li>Reverse on the way down</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Hits all three heads through the rotation.</p>

          <h3>Lateral Raises</h3>
          <ol>
            <li>Dumbbells at sides</li>
            <li>Slight bend in elbows (maintain throughout)</li>
            <li>Raise arms out to sides until shoulder height</li>
            <li>Control the lowering—don&apos;t swing</li>
          </ol>
          <p><em>Reps: 12-20, 3-4 sets</em></p>
          <p>The #1 exercise for shoulder width. Light weight, strict form.</p>

          <h3>Cable Lateral Raises</h3>
          <ol>
            <li>Stand sideways to low cable</li>
            <li>Raise arm out to side against resistance</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Constant tension throughout. Great for mind-muscle connection.</p>

          <h3>Front Raises</h3>
          <ol>
            <li>Dumbbells or plate in front of thighs</li>
            <li>Raise to shoulder height</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-15, 2-3 sets</em></p>
          <p>Often not needed—front delts get hit by all pressing. Include sparingly.</p>

          <h3>Rear Delt Flyes</h3>
          <ol>
            <li>Hinge forward at hips, or lie on incline bench</li>
            <li>Dumbbells hanging, slight elbow bend</li>
            <li>Raise arms out to sides</li>
            <li>Squeeze shoulder blades at top</li>
          </ol>
          <p><em>Reps: 12-20, 3-4 sets</em></p>
          <p>Critical for balanced shoulders and posture.</p>

          <h3>Face Pulls</h3>
          <ol>
            <li>Cable at face height with rope attachment</li>
            <li>Pull toward face, separating the rope</li>
            <li>Externally rotate at end position</li>
            <li>Squeeze rear delts and upper back</li>
          </ol>
          <p><em>Reps: 15-20, 3-4 sets</em></p>
          <p>Essential for shoulder health. Do these every upper body day.</p>

          <h3>Upright Rows</h3>
          <ol>
            <li>Barbell or dumbbells in front of thighs</li>
            <li>Pull up along body, elbows leading</li>
            <li>Stop when elbows reach shoulder height</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p>Controversial—can irritate shoulders. Use wide grip if you include them.</p>

          <h3>Pike Push-Ups</h3>
          <ol>
            <li>Push-up position, walk feet toward hands</li>
            <li>Hips high, forming inverted V</li>
            <li>Lower head toward floor</li>
            <li>Push back up</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>Bodyweight overhead pressing movement.</p>

          <h2>Sample Shoulder Workouts</h2>

          <h3>Beginner Shoulders</h3>
          <ul>
            <li>Dumbbell shoulder press: 10 × 3</li>
            <li>Lateral raises: 12 × 3</li>
            <li>Rear delt flyes: 12 × 3</li>
          </ul>

          <h3>Intermediate Shoulders</h3>
          <ul>
            <li>Overhead press: 8 × 4</li>
            <li>Dumbbell shoulder press: 10 × 3</li>
            <li>Lateral raises: 15 × 4</li>
            <li>Face pulls: 15 × 3</li>
            <li>Rear delt flyes: 12 × 3</li>
          </ul>

          <h3>Advanced Shoulders</h3>
          <ul>
            <li>Overhead press: 6 × 5</li>
            <li>Arnold press: 10 × 3</li>
            <li>Lateral raises: 15 × 5 (light, strict)</li>
            <li>Cable lateral raises: 12 × 3</li>
            <li>Rear delt flyes: 15 × 4</li>
            <li>Face pulls: 20 × 3</li>
          </ul>

          <h3>Shoulder Width Focus</h3>
          <ul>
            <li>Dumbbell shoulder press: 10 × 3</li>
            <li>Lateral raises: 15 × 5</li>
            <li>Cable lateral raises: 12 × 3</li>
            <li>Wide-grip upright rows: 12 × 3</li>
          </ul>

          <h3>Bodyweight Shoulders</h3>
          <ul>
            <li>Pike push-ups: max × 4</li>
            <li>Wall handstand hold: 30 sec × 3</li>
            <li>Rear delt push-ups: 10 × 3</li>
            <li>Arm circles: 30 sec × 2 each direction</li>
          </ul>

          <h2>Shoulder Training Tips</h2>
          <ul>
            <li><strong>Prioritize side delts:</strong> They create the width everyone wants</li>
            <li><strong>Light weight on raises:</strong> Heavy cheating defeats the purpose</li>
            <li><strong>Face pulls are mandatory:</strong> For health and rear delt development</li>
            <li><strong>Warm up thoroughly:</strong> Shoulders are injury-prone</li>
            <li><strong>Don&apos;t forget rear delts:</strong> Most undertrained head</li>
            <li><strong>High reps for isolation:</strong> 12-20 reps on raises</li>
            <li><strong>Control the negative:</strong> Don&apos;t swing the weights</li>
          </ul>

          <h2>Common Shoulder Mistakes</h2>
          <ul>
            <li><strong>Too much pressing:</strong> Front delts get overworked</li>
            <li><strong>Neglecting rear delts:</strong> Creates imbalance and injury risk</li>
            <li><strong>Heavy lateral raises:</strong> Just use your traps instead</li>
            <li><strong>Skipping warm-up:</strong> Shoulders need it more than most</li>
            <li><strong>Bad pressing form:</strong> Flaring elbows strains rotator cuff</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            Boulder shoulders require balanced training of all three heads. Press for overall mass, lateral raise for width, and never neglect your rear delts. Keep isolation weights light and form strict.
          </p>
          <p>
            Train shoulders 1-2 times per week, include face pulls every session, and watch them grow.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a complete shoulder program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates balanced workout plans for full shoulder development.
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
