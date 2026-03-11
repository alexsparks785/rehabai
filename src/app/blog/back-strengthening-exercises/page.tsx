import Link from 'next/link';

export const metadata = {
  title: 'Back Strengthening Exercises: Build a Stronger, Pain-Free Back | Foundational Rehab',
  description: 'The best exercises to strengthen your back, prevent pain, and improve posture. Includes bodyweight, dumbbell, and gym exercises for all levels.',
};

export default function BackStrengtheningExercisesPage() {
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
            Back Strengthening Exercises: Build a Stronger, Pain-Free Back
          </h1>
          <p className="text-xl text-gray-600">
            A strong back is the foundation of good posture, pain prevention, and overall fitness. Here&apos;s how to build one.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Your back isn&apos;t just one muscle—it&apos;s a complex system of muscles that support your spine, move your arms, and keep you upright. Neglecting back training leads to poor posture, pain, and injury.
          </p>
          <p>
            Whether you want to fix back pain, improve posture, or build a stronger physique, these exercises will get you there.
          </p>

          <h2>Understanding Your Back Muscles</h2>
          <ul>
            <li><strong>Latissimus dorsi (lats):</strong> The large &quot;wing&quot; muscles that give your back width</li>
            <li><strong>Trapezius (traps):</strong> Upper, middle, and lower portions from neck to mid-back</li>
            <li><strong>Rhomboids:</strong> Between shoulder blades—critical for posture</li>
            <li><strong>Erector spinae:</strong> Run along your spine—keep you upright</li>
            <li><strong>Rear deltoids:</strong> Back of shoulders—work with back muscles</li>
          </ul>
          <p>
            A complete back workout targets all of these.
          </p>

          <h2>Bodyweight Back Exercises</h2>
          <p>No equipment needed—just your body and some floor space.</p>

          <h3>Superman</h3>
          <ol>
            <li>Lie face down, arms extended overhead</li>
            <li>Simultaneously lift your arms, chest, and legs off the ground</li>
            <li>Squeeze your back muscles at the top</li>
            <li>Hold 2-3 seconds</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Bird Dog</h3>
          <ol>
            <li>Start on all fours, hands under shoulders, knees under hips</li>
            <li>Extend your right arm forward and left leg back</li>
            <li>Keep your back flat—don&apos;t let hips rotate</li>
            <li>Hold 3-5 seconds</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 10 each side, 3 sets</em></p>
          <p>Excellent for spinal stability and lower back strength.</p>

          <h3>Prone Y-T-W Raises</h3>
          <ol>
            <li>Lie face down, arms extended</li>
            <li><strong>Y:</strong> Raise arms at 45-degree angle (forming a Y), thumbs up. Hold 3 sec.</li>
            <li><strong>T:</strong> Raise arms straight out to sides (forming a T). Hold 3 sec.</li>
            <li><strong>W:</strong> Bend elbows 90 degrees, squeeze shoulder blades, raise arms. Hold 3 sec.</li>
          </ol>
          <p><em>Reps: 8-10 of each position, 2-3 sets</em></p>
          <p>Targets lower traps and rhomboids—the posture muscles.</p>

          <h3>Reverse Snow Angels</h3>
          <ol>
            <li>Lie face down, arms at your sides</li>
            <li>Lift arms and chest slightly off ground</li>
            <li>Sweep arms overhead in an arc (like making a snow angel)</li>
            <li>Return to sides</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Inverted Rows (Bodyweight Rows)</h3>
          <ol>
            <li>Set a bar at waist height (or use a sturdy table)</li>
            <li>Lie underneath, grab the bar with overhand grip</li>
            <li>Keep body straight from head to heels</li>
            <li>Pull your chest to the bar</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 8-12, 3 sets</em></p>
          <p>The best bodyweight back exercise. Adjust difficulty by changing your body angle.</p>

          <h2>Dumbbell Back Exercises</h2>

          <h3>Dumbbell Rows</h3>
          <ol>
            <li>Place left hand and knee on a bench</li>
            <li>Hold dumbbell in right hand, arm hanging</li>
            <li>Pull the dumbbell to your hip, elbow close to body</li>
            <li>Squeeze your back at the top</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 10-12 each arm, 3 sets</em></p>

          <h3>Bent-Over Dumbbell Rows</h3>
          <ol>
            <li>Stand with feet hip-width, dumbbells in hands</li>
            <li>Hinge at hips until torso is nearly parallel to floor</li>
            <li>Let arms hang straight down</li>
            <li>Pull both dumbbells to your sides</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Dumbbell Reverse Flyes</h3>
          <ol>
            <li>Hinge forward at hips, slight knee bend</li>
            <li>Hold light dumbbells, arms hanging</li>
            <li>Raise arms out to sides, squeezing shoulder blades</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Targets rear delts and rhomboids.</p>

          <h3>Dumbbell Pullovers</h3>
          <ol>
            <li>Lie on a bench, one dumbbell held over your chest</li>
            <li>Keep slight bend in elbows</li>
            <li>Lower the weight behind your head in an arc</li>
            <li>Feel the stretch in your lats</li>
            <li>Pull back to starting position</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Dumbbell Shrugs</h3>
          <ol>
            <li>Stand holding heavy dumbbells at your sides</li>
            <li>Shrug shoulders up toward ears</li>
            <li>Hold at the top for 2 seconds</li>
            <li>Lower slowly</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>
          <p>Builds upper traps.</p>

          <h2>Gym/Barbell Back Exercises</h2>

          <h3>Barbell Rows</h3>
          <ol>
            <li>Stand with feet hip-width, barbell in front</li>
            <li>Hinge at hips, grab bar with overhand grip</li>
            <li>Pull bar to lower chest/upper belly</li>
            <li>Squeeze shoulder blades at top</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 8-10, 4 sets</em></p>
          <p>One of the best mass-building back exercises.</p>

          <h3>Deadlifts</h3>
          <ol>
            <li>Stand with feet hip-width, bar over mid-foot</li>
            <li>Hinge and grip bar just outside legs</li>
            <li>Chest up, back flat</li>
            <li>Drive through floor, standing up with the bar</li>
            <li>Hinge back down with control</li>
          </ol>
          <p><em>Reps: 5-8, 4 sets</em></p>
          <p>The king of back exercises—works entire posterior chain.</p>

          <h3>Lat Pulldowns</h3>
          <ol>
            <li>Sit at lat pulldown machine, thighs secured</li>
            <li>Grab bar wider than shoulder-width</li>
            <li>Pull bar to upper chest</li>
            <li>Squeeze lats at bottom</li>
            <li>Control the weight back up</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Pull-Ups/Chin-Ups</h3>
          <ol>
            <li>Hang from bar, hands shoulder-width or wider</li>
            <li>Pull yourself up until chin clears bar</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: As many as possible, 3-4 sets</em></p>
          <p>Can&apos;t do pull-ups? Use assisted machine or resistance bands.</p>

          <h3>Seated Cable Rows</h3>
          <ol>
            <li>Sit at cable row machine, feet on platform</li>
            <li>Grab handle, arms extended</li>
            <li>Pull handle to belly button</li>
            <li>Squeeze shoulder blades together</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>

          <h3>Face Pulls</h3>
          <ol>
            <li>Set cable at face height with rope attachment</li>
            <li>Pull rope toward face, separating hands</li>
            <li>Squeeze shoulder blades, externally rotate shoulders</li>
            <li>Return slowly</li>
          </ol>
          <p><em>Reps: 15-20, 3 sets</em></p>
          <p>Essential for shoulder health and posture.</p>

          <h2>Lower Back Specific Exercises</h2>

          <h3>Back Extensions (Hyperextensions)</h3>
          <ol>
            <li>Position yourself on back extension bench</li>
            <li>Cross arms over chest or behind head</li>
            <li>Lower torso toward floor</li>
            <li>Raise back up until body is straight (don&apos;t hyperextend)</li>
          </ol>
          <p><em>Reps: 12-15, 3 sets</em></p>

          <h3>Good Mornings</h3>
          <ol>
            <li>Stand with feet hip-width, barbell on upper back</li>
            <li>Slight bend in knees</li>
            <li>Hinge at hips, lowering torso toward parallel</li>
            <li>Keep back flat throughout</li>
            <li>Return to standing</li>
          </ol>
          <p><em>Reps: 10-12, 3 sets</em></p>
          <p><strong>Use light weight</strong>—this is an accessory movement.</p>

          <h2>Sample Back Workouts</h2>

          <h3>Beginner (Bodyweight Only)</h3>
          <ul>
            <li>Bird dogs: 10 each side × 3</li>
            <li>Supermans: 12 reps × 3</li>
            <li>Prone Y-T-W: 8 each × 2</li>
            <li>Inverted rows (elevated): 8-10 × 3</li>
          </ul>

          <h3>Intermediate (Dumbbells)</h3>
          <ul>
            <li>Dumbbell rows: 10 each × 3</li>
            <li>Bent-over dumbbell rows: 10 × 3</li>
            <li>Reverse flyes: 12 × 3</li>
            <li>Dumbbell pullovers: 10 × 3</li>
            <li>Shrugs: 12 × 3</li>
          </ul>

          <h3>Advanced (Full Gym)</h3>
          <ul>
            <li>Deadlifts: 5 × 4</li>
            <li>Barbell rows: 8 × 4</li>
            <li>Pull-ups: Max reps × 4</li>
            <li>Seated cable rows: 10 × 3</li>
            <li>Face pulls: 15 × 3</li>
            <li>Back extensions: 12 × 3</li>
          </ul>

          <h2>Tips for Better Back Training</h2>
          <ul>
            <li><strong>Squeeze your shoulder blades:</strong> On every pulling exercise, focus on bringing shoulder blades together</li>
            <li><strong>Control the negative:</strong> Lower weights slowly to maximize muscle work</li>
            <li><strong>Mind-muscle connection:</strong> Think about your back muscles working</li>
            <li><strong>Don&apos;t ego lift:</strong> Use weight you can control with good form</li>
            <li><strong>Balance your training:</strong> Match back volume with chest volume</li>
            <li><strong>Include horizontal and vertical pulls:</strong> Rows AND pulldowns/pull-ups</li>
          </ul>

          <h2>The Bottom Line</h2>
          <p>
            A strong back is the foundation of a healthy, functional body. It supports your spine, improves your posture, and prevents the pain that comes from our desk-bound lives.
          </p>
          <p>
            Start where you are—bodyweight exercises are enough to build significant strength. Progress to weights as you get stronger. Train your back 2-3 times per week, and you&apos;ll feel the difference within weeks.
          </p>
        </div>

        {/* Author/CTA section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Want a personalized back strengthening program?</h3>
          <p className="text-gray-700 mb-4">
            Foundational Rehab creates custom workout plans based on your equipment, experience level, and goals.
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
