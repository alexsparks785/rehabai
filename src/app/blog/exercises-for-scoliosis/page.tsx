import Link from 'next/link';

export const metadata = {
  title: 'Exercises for Scoliosis: Manage Spinal Curvature Safely | Foundational Rehab',
  description: 'Living with scoliosis? Learn the best exercises to improve posture, reduce pain, and strengthen your spine. Safe movements for mild to moderate curves.',
};

export default function ExercisesForScoliosisPage() {
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
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Rehab</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <time>March 11, 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercises for Scoliosis: Manage Spinal Curvature Safely
          </h1>
          <p className="text-xl text-gray-600">
            Exercise can&apos;t cure scoliosis, but it can reduce pain, improve function, and help you live fully with your unique spine.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Scoliosis—a lateral curve of the spine—affects about 3% of the population. While exercise won&apos;t straighten your spine, research shows it can significantly reduce pain, improve posture, and prevent progression.
          </p>
          <p>
            The key is working with your curve, not against it.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <p className="text-blue-800 font-medium">📝 Note:</p>
            <p className="text-blue-700 mt-2">These exercises are for mild to moderate scoliosis (curves under 40°). If you have severe scoliosis, work with a Schroth-trained physical therapist or scoliosis specialist for personalized guidance.</p>
          </div>

          <h2>Understanding Your Scoliosis</h2>
          <p>
            Most scoliosis involves:
          </p>
          <ul>
            <li><strong>Lateral curve:</strong> Spine curves to the side</li>
            <li><strong>Rotation:</strong> Vertebrae twist along with the curve</li>
            <li><strong>Muscle imbalances:</strong> One side tighter/stronger than the other</li>
          </ul>
          <p>
            Common patterns include C-curves (single curve) and S-curves (two curves that somewhat balance each other).
          </p>

          <h2>Goals of Scoliosis Exercise</h2>
          <ul>
            <li>Reduce muscle imbalances</li>
            <li>Improve body awareness and posture</li>
            <li>Strengthen core stability</li>
            <li>Increase spinal mobility</li>
            <li>Reduce pain and discomfort</li>
            <li>Potentially slow curve progression</li>
          </ul>

          <h2>Core Stabilization Exercises</h2>

          <h3>Dead Bug</h3>
          <ol>
            <li>Lie on your back, arms reaching to ceiling, knees bent 90°</li>
            <li>Press lower back into floor—maintain this throughout</li>
            <li>Slowly lower opposite arm and leg toward floor</li>
            <li>Don&apos;t let your back arch—keep it pressed down</li>
            <li>Return and switch sides</li>
          </ol>
          <p><em>Reps: 10 per side, 2-3 sets</em></p>

          <h3>Bird Dog</h3>
          <ol>
            <li>Start on all fours, spine neutral</li>
            <li>Extend one arm and opposite leg</li>
            <li>Keep hips and shoulders level—no rotation</li>
            <li>Hold 5 seconds, return, switch sides</li>
            <li>Move slowly and with control</li>
          </ol>
          <p><em>Reps: 10 per side, 2-3 sets</em></p>

          <h3>Side Plank (Modified)</h3>
          <ol>
            <li>Lie on your side, prop up on elbow</li>
            <li>Keep knees bent for easier version</li>
            <li>Lift hips so body forms a straight line</li>
            <li>Focus on keeping your spine straight—not sagging</li>
          </ol>
          <p><em>Hold: 15-30 seconds per side, 3 sets</em></p>
          <p><strong>For scoliosis:</strong> Spend more time on your convex side (the outside of your curve) to strengthen the weaker muscles.</p>

          <h3>Plank</h3>
          <ol>
            <li>Forearms and toes on ground</li>
            <li>Body forms a straight line from head to heels</li>
            <li>Engage core—don&apos;t let hips sag or pike</li>
            <li>Breathe normally</li>
          </ol>
          <p><em>Hold: 20-60 seconds, 3 sets</em></p>

          <h2>Stretching for Muscle Imbalances</h2>

          <h3>Cat-Cow</h3>
          <ol>
            <li>On all fours, hands under shoulders, knees under hips</li>
            <li>Cow: Drop belly, lift chest and tailbone</li>
            <li>Cat: Round spine, tuck chin and tailbone</li>
            <li>Move slowly, feel each vertebra</li>
          </ol>
          <p><em>Reps: 10-15 cycles</em></p>

          <h3>Child&apos;s Pose (Modified for Scoliosis)</h3>
          <ol>
            <li>Kneel, sit back on heels</li>
            <li>Reach arms forward, forehead to floor</li>
            <li>Walk your hands toward your convex side (outside of curve)</li>
            <li>Feel the stretch on the tight side</li>
          </ol>
          <p><em>Hold: 30-60 seconds</em></p>

          <h3>Thread the Needle</h3>
          <ol>
            <li>Start on all fours</li>
            <li>Reach one arm under your body toward the opposite side</li>
            <li>Let your shoulder and head lower toward floor</li>
            <li>Feel the rotation through your thoracic spine</li>
          </ol>
          <p><em>Hold: 20-30 seconds per side</em></p>
          <p><strong>For scoliosis:</strong> Rotate toward your concave side (inside of curve) to open it up.</p>

          <h3>Doorway Chest Stretch</h3>
          <ol>
            <li>Stand in a doorway, forearms on door frame</li>
            <li>Elbows at shoulder height</li>
            <li>Step through gently, feeling chest stretch</li>
          </ol>
          <p><em>Hold: 30 seconds, 2-3 times</em></p>
          <p>Important for scoliosis because the chest muscles often become tight and pull shoulders forward.</p>

          <h2>Schroth-Inspired Exercises</h2>
          <p>
            The Schroth Method is the gold standard for scoliosis exercise. These are simplified versions of Schroth principles:
          </p>

          <h3>Wall Arm Slides</h3>
          <ol>
            <li>Stand with back against wall, feet 6 inches out</li>
            <li>Press lower back, upper back, and head into wall</li>
            <li>Raise arms to &quot;goal post&quot; position against wall</li>
            <li>Slide arms up and down while maintaining contact</li>
            <li>Focus on keeping both shoulders even against the wall</li>
          </ol>
          <p><em>Reps: 10-15</em></p>

          <h3>Rotational Angular Breathing (Simplified)</h3>
          <ol>
            <li>Sit or stand tall</li>
            <li>Place hands on your rib cage</li>
            <li>Breathe deeply into the concave (collapsed) side of your curve</li>
            <li>Try to expand the ribs on that side</li>
            <li>Exhale slowly</li>
          </ol>
          <p><em>Reps: 10 breaths, several times daily</em></p>
          <p>This helps counteract the asymmetrical breathing pattern that develops with scoliosis.</p>

          <h2>Strengthening the Weak Side</h2>
          <p>
            In scoliosis, muscles on the convex side (outside of curve) are usually overstretched and weak. Focus extra attention here.
          </p>

          <h3>Single-Arm Row (Convex Side)</h3>
          <ol>
            <li>Support yourself on a bench, one hand and knee down</li>
            <li>Hold weight in the convex-side hand</li>
            <li>Row the weight up, squeezing shoulder blade</li>
            <li>Lower with control</li>
          </ol>
          <p><em>Reps: 12-15, 2-3 sets (extra set on convex side)</em></p>

          <h3>Side Plank Holds (Convex Side)</h3>
          <p>
            Spend more time in side plank on your convex side to build strength where it&apos;s needed most.
          </p>

          <h2>Complete Scoliosis Routine</h2>

          <h3>Daily Routine (15 minutes)</h3>
          <ul>
            <li>Cat-cow: 10 cycles</li>
            <li>Dead bug: 8 per side</li>
            <li>Bird dog: 8 per side</li>
            <li>Modified child&apos;s pose (toward convex side): 45 seconds</li>
            <li>Side plank (convex side): 30 seconds × 2</li>
            <li>Side plank (concave side): 30 seconds × 1</li>
            <li>Rotational breathing: 10 breaths</li>
            <li>Wall arm slides: 10 reps</li>
          </ul>

          <h2>Exercises to Approach with Caution</h2>
          <ul>
            <li><strong>Heavy overhead lifting:</strong> Can compress the spine asymmetrically</li>
            <li><strong>Extreme backbends:</strong> May increase curve</li>
            <li><strong>High-impact jumping:</strong> Puts stress on uneven spine</li>
            <li><strong>Rotation under heavy load:</strong> Like weighted Russian twists</li>
          </ul>
          <p>
            This doesn&apos;t mean avoid all these forever—just be cautious and work with a professional if you want to include them.
          </p>

          <h2>Safe Activities for Scoliosis</h2>
          <ul>
            <li><strong>Swimming:</strong> Excellent—supports spine while building strength</li>
            <li><strong>Walking:</strong> Low impact, good for overall health</li>
            <li><strong>Pilates:</strong> Focus on core stability and body awareness</li>
            <li><strong>Yoga:</strong> With modifications for your curve</li>
            <li><strong>Cycling:</strong> Low spinal load</li>
          </ul>

          <h2>When to See a Specialist</h2>
          <ul>
            <li>Curves greater than 25-30° (especially if still growing)</li>
            <li>Pain that doesn&apos;t improve with exercise</li>
            <li>Neurological symptoms (numbness, weakness)</li>
            <li>Curve that&apos;s progressing</li>
          </ul>
          <p>
            Look for a physical therapist trained in the Schroth Method or SEAS (Scientific Exercise Approach to Scoliosis).
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Scoliosis is a part of you, not a limitation. With consistent exercise focused on:
          </p>
          <ol>
            <li>Core stability</li>
            <li>Muscle balance (strengthen the weak, stretch the tight)</li>
            <li>Body awareness and posture</li>
            <li>Breathing into the concave side</li>
          </ol>
          <p>
            You can reduce pain, improve function, and live actively with your unique spine.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want a personalized scoliosis exercise program?
          </h3>
          <p className="text-gray-600 mb-4">
            Get exercises tailored to your curve pattern and fitness level.
          </p>
          <Link 
            href="/app" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try Foundational Rehab Free
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2026 Foundational Rehab. Move better, feel better.</p>
        </div>
      </footer>
    </div>
  );
}
