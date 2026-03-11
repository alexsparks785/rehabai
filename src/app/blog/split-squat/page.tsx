import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Split Squat: Build Single-Leg Strength and Fix Imbalances',
  description: 'Master the split squat for leg strength and muscle balance. Learn proper form, progressions from static split squat to Bulgarian, and how to fix common mistakes.',
  keywords: ['split squat', 'Bulgarian split squat', 'single leg exercise', 'leg strength', 'split squat form', 'unilateral exercise'],
  openGraph: {
    title: 'Split Squat: Build Single-Leg Strength and Fix Imbalances',
    description: 'Master the split squat for leg strength and muscle balance. Learn proper form, progressions from static split squat to Bulgarian, and how to fix common mistakes.',
    type: 'article',
  },
}

export default function SplitSquatPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <h1>Split Squat: Build Single-Leg Strength and Fix Imbalances</h1>
        
        <p className="lead">
          The split squat is one of the most effective exercises for building leg strength, fixing imbalances, and improving athletic performance. By working one leg at a time, you address the weaknesses that bilateral exercises like squats can hide. Here's how to master this essential movement.
        </p>

        <h2>Why Split Squats Are Essential</h2>
        
        <h3>Benefits</h3>
        <ul>
          <li><strong>Fixes imbalances:</strong> Each leg works independently—no hiding behind the stronger side</li>
          <li><strong>Builds stability:</strong> Challenges balance and single-leg stability</li>
          <li><strong>Sport-specific:</strong> Most athletic movements are single-leg (running, cutting, jumping)</li>
          <li><strong>Reduces injury risk:</strong> Addresses asymmetries that can lead to injury</li>
          <li><strong>Easier on the lower back:</strong> Less spinal load than heavy back squats</li>
          <li><strong>Hip flexor stretch:</strong> The rear leg gets a stretch while working</li>
        </ul>

        <h3>Muscles Worked</h3>
        <ul>
          <li><strong>Quadriceps:</strong> Primary mover, especially front leg</li>
          <li><strong>Glutes:</strong> Hip extension and stabilization</li>
          <li><strong>Hamstrings:</strong> Assist in hip extension</li>
          <li><strong>Adductors:</strong> Stabilization</li>
          <li><strong>Core:</strong> Maintains upright posture and stability</li>
          <li><strong>Hip flexors:</strong> Rear leg gets stretched</li>
        </ul>

        <h2>How to Do the Split Squat</h2>

        <h3>Setup</h3>
        <ol>
          <li>Start in a staggered stance, feet hip-width apart front-to-back</li>
          <li>Front foot flat on the floor, about 2-3 feet in front of rear foot</li>
          <li>Rear foot: heel elevated, ball of foot on ground</li>
          <li>Torso upright, core engaged</li>
          <li>Weight distributed 80% on front leg, 20% on rear leg</li>
        </ol>

        <h3>The Movement</h3>
        <ol>
          <li>Lower yourself by bending both knees</li>
          <li>Descend until your rear knee nearly touches the floor (or as low as comfortable)</li>
          <li>Front knee should track over your toes—not caving in or pushing too far forward</li>
          <li>Keep your torso upright—don't lean forward</li>
          <li>Drive through your front foot (primarily heel and mid-foot) to stand back up</li>
          <li>Keep rear leg relatively passive—it's there for balance, not power</li>
        </ol>

        <h3>Key Cues</h3>
        <ul>
          <li><strong>"Straight down, straight up":</strong> Think of lowering vertically, not forward</li>
          <li><strong>"80/20 weight distribution":</strong> Most work in the front leg</li>
          <li><strong>"Knee over toes, not past":</strong> Some forward knee travel is fine, but not excessive</li>
          <li><strong>"Tall torso":</strong> Don't lean forward—stay upright</li>
          <li><strong>"Front heel stays down":</strong> Drive through the whole front foot</li>
        </ul>

        <h2>Common Mistakes (And How to Fix Them)</h2>

        <h3>1. Stance Too Narrow (Side-to-Side)</h3>
        <p><strong>The mistake:</strong> Feet in a straight line, like walking a tightrope—very wobbly.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Keep feet hip-width apart side-to-side</li>
          <li>Think "train tracks" not "tightrope"</li>
          <li>This gives you a stable base</li>
        </ul>

        <h3>2. Stance Too Short (Front-to-Back)</h3>
        <p><strong>The mistake:</strong> Feet too close together, causing the front knee to push way forward.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Take a bigger step forward—2-3 feet between feet</li>
          <li>When you lower, front shin should be fairly vertical</li>
          <li>You should feel it in your glutes and quads, not just your knee</li>
        </ul>

        <h3>3. Knee Caving In</h3>
        <p><strong>The mistake:</strong> Front knee collapses inward, especially on the way up.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Actively push the knee outward—track it over your middle toes</li>
          <li>This often indicates weak glute medius</li>
          <li>Practice with a mini band above knees to reinforce proper tracking</li>
        </ul>

        <h3>4. Leaning Forward</h3>
        <p><strong>The mistake:</strong> Torso tips forward, putting more stress on the lower back.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Keep your chest up and proud</li>
          <li>Think about lowering straight down</li>
          <li>If you're using weights, try goblet hold to counterbalance</li>
        </ul>

        <h3>5. Rising Onto Front Toes</h3>
        <p><strong>The mistake:</strong> Front heel comes off the ground as you descend.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Keep front heel firmly planted throughout</li>
          <li>Drive through the whole front foot to stand</li>
          <li>If this happens consistently, work on ankle mobility or take a slightly longer stance</li>
        </ul>

        <h2>Split Squat Progressions</h2>

        <h3>Level 1: Static Split Squat (Bodyweight)</h3>
        <p>Master the basic pattern first:</p>
        <ol>
          <li>Bodyweight only</li>
          <li>Both feet stay planted throughout the set</li>
          <li>Focus on depth, form, and control</li>
          <li>10-15 reps per leg</li>
        </ol>

        <h3>Level 2: Split Squat with Pause</h3>
        <ol>
          <li>Pause at the bottom for 2-3 seconds</li>
          <li>Eliminates momentum and builds strength at the hardest point</li>
          <li>8-12 reps per leg</li>
        </ol>

        <h3>Level 3: Goblet Split Squat</h3>
        <ol>
          <li>Hold a dumbbell or kettlebell at your chest</li>
          <li>The weight acts as a counterbalance, often improving form</li>
          <li>Progress weight as strength improves</li>
        </ol>

        <h3>Level 4: Dumbbell Split Squat</h3>
        <ol>
          <li>Hold dumbbells at your sides</li>
          <li>Allows heavier loading than goblet position</li>
          <li>Grip may become limiting at heavy weights</li>
        </ol>

        <h3>Level 5: Rear Foot Elevated Split Squat (Bulgarian Split Squat)</h3>
        <ol>
          <li>Place rear foot on a bench or box (12-18 inches high)</li>
          <li>Front foot 2-3 feet in front of the bench</li>
          <li>Increased range of motion and front leg demand</li>
          <li>This is a significant jump in difficulty—build up to it</li>
        </ol>

        <h3>Level 6: Front Foot Elevated Split Squat</h3>
        <ol>
          <li>Front foot on a small platform (2-4 inches)</li>
          <li>Increases range of motion at the bottom</li>
          <li>Greater glute and hamstring involvement</li>
          <li>Can be combined with rear foot elevation (deficit Bulgarian)</li>
        </ol>

        <h2>Bulgarian Split Squat Deep Dive</h2>

        <p>
          The Bulgarian split squat deserves special attention—it's one of the most effective leg exercises period.
        </p>

        <h3>Setup Tips</h3>
        <ul>
          <li><strong>Bench height:</strong> 12-18 inches typical (regular bench works)</li>
          <li><strong>Rear foot position:</strong> Laces down or ball of foot—both work, find what's comfortable</li>
          <li><strong>Front foot distance:</strong> Start closer than you think, adjust based on knee position</li>
        </ul>

        <h3>Common Issues</h3>
        <ul>
          <li><strong>Balance problems:</strong> Keep feet hip-width apart side-to-side; hold onto something initially if needed</li>
          <li><strong>Rear foot discomfort:</strong> Try different foot positions; pad the bench; use a squat wedge</li>
          <li><strong>Front knee pain:</strong> Check that you're not too close to the bench; ensure proper tracking</li>
        </ul>

        <h2>Split Squat Variations</h2>

        <h3>1.5 Rep Split Squat</h3>
        <ol>
          <li>Lower to the bottom</li>
          <li>Come halfway up</li>
          <li>Go back to the bottom</li>
          <li>Then stand all the way up</li>
          <li>That's one rep—brutal for quad development</li>
        </ol>

        <h3>Spanish Squat (Band-Assisted)</h3>
        <ol>
          <li>Loop a band around a sturdy anchor and behind your knees</li>
          <li>Perform split squats with the band pulling you forward</li>
          <li>Allows a more vertical shin and can reduce knee stress</li>
          <li>Great for those with patellar issues</li>
        </ol>

        <h3>Walking Lunge</h3>
        <ol>
          <li>Dynamic version—step forward into lunge, then step through to next lunge</li>
          <li>More metabolic and coordination-demanding</li>
          <li>Great for conditioning</li>
        </ol>

        <h3>Reverse Lunge</h3>
        <ol>
          <li>Step backward into split squat position, then return</li>
          <li>Often easier on the knees than forward lunge</li>
          <li>More glute emphasis</li>
        </ol>

        <h2>Programming Split Squats</h2>

        <h3>For Muscle Building</h3>
        <ul>
          <li>3-4 sets of 8-12 reps per leg</li>
          <li>Moderate to heavy weight</li>
          <li>Rest 90 seconds between legs</li>
          <li>2 times per week</li>
        </ul>

        <h3>For Strength</h3>
        <ul>
          <li>4-5 sets of 5-8 reps per leg</li>
          <li>Heavy weight (Bulgarian split squats can get very heavy)</li>
          <li>Rest 2-3 minutes between legs</li>
          <li>Progress weight over time</li>
        </ul>

        <h3>For Fixing Imbalances</h3>
        <ul>
          <li>Start with weaker leg first</li>
          <li>Match reps exactly—don't do extra on the strong side</li>
          <li>Use same weight for both legs</li>
          <li>May need to add extra set or two for weaker side</li>
        </ul>

        <h3>As Part of Leg Day</h3>
        <p>Sample workout:</p>
        <ol>
          <li><strong>Back Squat:</strong> 4 × 6</li>
          <li><strong>Bulgarian Split Squat:</strong> 3 × 10 per leg</li>
          <li><strong>Romanian Deadlift:</strong> 3 × 10</li>
          <li><strong>Leg Curl:</strong> 3 × 12</li>
          <li><strong>Calf Raises:</strong> 4 × 15</li>
        </ol>

        <h2>Split Squat vs. Lunge</h2>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Split Squat</th>
              <th>Lunge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feet</td>
              <td>Stay in place</td>
              <td>Step forward/back/sideways</td>
            </tr>
            <tr>
              <td>Stability demand</td>
              <td>Lower</td>
              <td>Higher (dynamic movement)</td>
            </tr>
            <tr>
              <td>Weight capacity</td>
              <td>Can go heavier</td>
              <td>Balance limits weight</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Strength building</td>
              <td>Conditioning, athletic training</td>
            </tr>
            <tr>
              <td>Easier for</td>
              <td>Beginners</td>
              <td>Those with good coordination</td>
            </tr>
          </tbody>
        </table>

        <h2>Who Should Do Split Squats?</h2>

        <h3>Essential For:</h3>
        <ul>
          <li><strong>Athletes:</strong> Sport movements are mostly single-leg</li>
          <li><strong>Anyone with imbalances:</strong> One leg stronger than the other</li>
          <li><strong>Those with back issues:</strong> Less spinal load than bilateral squats</li>
          <li><strong>Home gym folks:</strong> Can go heavy with minimal equipment</li>
          <li><strong>Everyone:</strong> Single-leg strength is fundamental</li>
        </ul>

        <h3>Start Cautiously If:</h3>
        <ul>
          <li><strong>Significant knee issues:</strong> Start bodyweight, control range of motion</li>
          <li><strong>Very poor balance:</strong> Hold onto something initially</li>
        </ul>

        <h2>Key Takeaways</h2>

        <ul>
          <li>Split squats build single-leg strength and fix imbalances bilateral exercises miss</li>
          <li>Keep feet hip-width apart side-to-side (train tracks, not tightrope)</li>
          <li>80% of the weight and work should be in the front leg</li>
          <li>Keep torso upright and front knee tracking over toes</li>
          <li>Progress from static split squat to Bulgarian as you get stronger</li>
          <li>Include 1-2 times per week in your leg training</li>
          <li>Start weaker leg first when addressing imbalances</li>
        </ul>

        <p>
          The split squat is a non-negotiable exercise if you're serious about leg development and injury prevention. Master the basics, progress through the variations, and watch your single-leg strength transform.
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> This content is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for any health concerns.
          </p>
        </div>
      </article>
    </main>
  )
}
