import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clamshell Exercise: How to Do It Right for Stronger Hips',
  description: 'Master the clamshell exercise with proper form. Learn variations, common mistakes, and how to use clamshells for hip strength, injury prevention, and glute activation.',
  keywords: ['clamshell exercise', 'hip strengthening', 'glute medius exercise', 'clamshell variations', 'hip abduction exercise', 'glute activation'],
  openGraph: {
    title: 'Clamshell Exercise: How to Do It Right for Stronger Hips',
    description: 'Master the clamshell exercise with proper form. Learn variations, common mistakes, and how to use clamshells for hip strength, injury prevention, and glute activation.',
    type: 'article',
  },
}

export default function ClamshellExercisePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <h1>Clamshell Exercise: How to Do It Right for Stronger Hips</h1>
        
        <p className="lead">
          The clamshell is one of the most prescribed exercises in physical therapy—and one of the most butchered. Done correctly, it's a powerful tool for hip stability and glute activation. Done wrong, it's a waste of time. Here's how to get it right.
        </p>

        <h2>Why the Clamshell Matters</h2>
        
        <p>
          The clamshell primarily targets the <strong>gluteus medius</strong>—a muscle on the side of your hip that's crucial for:
        </p>

        <ul>
          <li><strong>Pelvic stability:</strong> Keeps your pelvis level when standing on one leg</li>
          <li><strong>Knee health:</strong> Weak glute med causes knee cave and patellofemoral pain</li>
          <li><strong>Hip function:</strong> Essential for walking, running, climbing stairs</li>
          <li><strong>Lower back support:</strong> Hip weakness forces the lower back to compensate</li>
        </ul>

        <p>
          When the glute medius is weak, other muscles—like the TFL, piriformis, and lower back—take over. This leads to IT band issues, hip impingement, knee pain, and back problems.
        </p>

        <h2>Perfect Clamshell Form</h2>

        <h3>Setup</h3>
        <ol>
          <li>Lie on your side with hips stacked directly on top of each other</li>
          <li>Bend your knees to approximately 45 degrees</li>
          <li>Keep your feet together, aligned with your spine</li>
          <li>Rest your head on your bottom arm or a pillow</li>
          <li>Place your top hand on your hip (this is key for feedback)</li>
        </ol>

        <h3>The Movement</h3>
        <ol>
          <li>Keeping your feet glued together, lift your top knee toward the ceiling</li>
          <li>Rotate from the hip—your knee should lift like a clamshell opening</li>
          <li>Lift until you feel your glute engage, typically 30-45 degrees</li>
          <li>Pause at the top for 1-2 seconds</li>
          <li>Lower slowly with control—this is as important as lifting</li>
          <li>Repeat for 15-20 reps</li>
        </ol>

        <h2>Common Mistakes (And How to Fix Them)</h2>

        <h3>1. Rolling Your Pelvis Back</h3>
        <p><strong>The mistake:</strong> Your top hip rolls backward as you lift your knee, making the movement easier but bypassing the glute medius.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Keep your hand on your top hip—it should not move at all</li>
          <li>Imagine a wall behind you that your back must stay pressed against</li>
          <li>Reduce your range of motion if needed to maintain pelvis position</li>
        </ul>

        <h3>2. Lifting Too High</h3>
        <p><strong>The mistake:</strong> Going for maximum range of motion, which recruits hip flexors and lower back instead of glute medius.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Quality over quantity—a 30-degree lift with perfect form beats a 60-degree lift with compensation</li>
          <li>Stop when you feel your pelvis start to move</li>
          <li>The target is hip external rotation, not maximum knee height</li>
        </ul>

        <h3>3. Using Momentum</h3>
        <p><strong>The mistake:</strong> Swinging the leg up quickly and letting it drop.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Lift for 2 counts, hold for 1, lower for 2 counts</li>
          <li>The lowering phase should be controlled—gravity shouldn't do the work</li>
          <li>Pause at both top and bottom of the movement</li>
        </ul>

        <h3>4. Letting Feet Separate</h3>
        <p><strong>The mistake:</strong> Your top foot lifts along with your knee.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Press your feet firmly together throughout the entire movement</li>
          <li>Think of your heels as glued to each other</li>
          <li>If they keep separating, reduce your knee lift height</li>
        </ul>

        <h3>5. Wrong Hip Position</h3>
        <p><strong>The mistake:</strong> Hips positioned at 90 degrees (thighs parallel to torso), which changes the target muscle.</p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>Position hips at approximately 45 degrees (knees slightly in front of hips)</li>
          <li>Your body should form a slight "V" shape, not an "L"</li>
        </ul>

        <h2>Clamshell Progressions</h2>

        <h3>Level 1: Standard Clamshell</h3>
        <p>Master the basic form with bodyweight only. Aim for 20 controlled reps with zero pelvis movement.</p>

        <h3>Level 2: Mini Band Clamshell</h3>
        <ol>
          <li>Place a resistance band around your thighs, just above the knees</li>
          <li>Perform the clamshell against the band's resistance</li>
          <li>Start with a light band and progress to heavier resistance</li>
        </ol>
        <p><strong>Tip:</strong> The band should challenge you but not force compensations.</p>

        <h3>Level 3: Elevated Clamshell</h3>
        <ol>
          <li>Set up for a standard clamshell</li>
          <li>Lift both feet about 6 inches off the ground</li>
          <li>Perform the clamshell while keeping feet elevated</li>
          <li>This adds core engagement and increases glute demand</li>
        </ol>

        <h3>Level 4: Clamshell with Hip Extension</h3>
        <ol>
          <li>Set up for a clamshell with a band above knees</li>
          <li>Lift your top knee (standard clamshell)</li>
          <li>While keeping the knee lifted, extend your top leg straight</li>
          <li>Return the knee to bent position, then lower</li>
          <li>This adds glute max engagement</li>
        </ol>

        <h3>Level 5: Clamshell in Side Plank</h3>
        <ol>
          <li>Set up in a side plank on your elbow with knees bent</li>
          <li>Lift your hips off the ground</li>
          <li>Perform clamshells while maintaining the side plank</li>
          <li>This is advanced—master previous levels first</li>
        </ol>

        <h2>Clamshell Variations</h2>

        <h3>Reverse Clamshell</h3>
        <p>Targets hip internal rotation—often neglected.</p>
        <ol>
          <li>Lie on your side with knees bent, feet together</li>
          <li>Instead of lifting your knee, lift your top foot toward the ceiling</li>
          <li>Keep your knees glued together</li>
          <li>This rotates your hip internally</li>
        </ol>

        <h3>Clamshell with Hip Flexion</h3>
        <ol>
          <li>Set up for a clamshell but pull your knees higher toward your chest (hips at 90 degrees)</li>
          <li>Perform the clamshell from this position</li>
          <li>This targets the glute med in a different range and adds posterior glute max</li>
        </ol>

        <h3>Wall Clamshell</h3>
        <ol>
          <li>Lie on your side with your back against a wall</li>
          <li>Set up for a clamshell with your entire back touching the wall</li>
          <li>Perform clamshells—the wall prevents pelvic rolling</li>
          <li>Great for learning proper form</li>
        </ol>

        <h2>Programming Clamshells</h2>

        <h3>For Activation (Before Workouts)</h3>
        <ul>
          <li>15-20 reps per side, 1 set</li>
          <li>Light band or bodyweight only</li>
          <li>Focus on feeling the glute work, not fatigue</li>
        </ul>

        <h3>For Strength (Rehab or Strength Training)</h3>
        <ul>
          <li>15-20 reps per side, 2-3 sets</li>
          <li>Use a band that makes the last 5 reps challenging</li>
          <li>3 times per week</li>
        </ul>

        <h3>For Rehabilitation</h3>
        <ul>
          <li>20-30 reps per side (higher reps, lower intensity)</li>
          <li>2-3 sets</li>
          <li>Daily or every other day</li>
          <li>Progress slowly and prioritize form over resistance</li>
        </ul>

        <h2>When to Use Clamshells</h2>

        <h3>Ideal For:</h3>
        <ul>
          <li><strong>Knee pain:</strong> Especially patellofemoral syndrome and IT band issues</li>
          <li><strong>Hip pain:</strong> Hip bursitis (greater trochanteric pain), hip impingement, labral issues</li>
          <li><strong>Lower back pain:</strong> When hip weakness is contributing</li>
          <li><strong>Runners:</strong> Pre-run activation and injury prevention</li>
          <li><strong>Pregnancy:</strong> Safe and effective for hip stability</li>
          <li><strong>Post-surgery:</strong> Hip or knee surgery rehabilitation</li>
        </ul>

        <h3>Progress Beyond Clamshells When:</h3>
        <p>Clamshells are a foundation exercise, but you should progress to more functional movements as you get stronger:</p>
        <ul>
          <li>Standing hip abduction</li>
          <li>Lateral band walks</li>
          <li>Single-leg deadlifts</li>
          <li>Side-lying hip abduction</li>
          <li>Single-leg squats and step-ups</li>
        </ul>

        <h2>Complete Glute Medius Routine</h2>

        <p>A complete routine that progresses from isolated to functional:</p>

        <ol>
          <li><strong>Clamshells:</strong> 15 reps each side</li>
          <li><strong>Side-lying hip abduction:</strong> 15 reps each side</li>
          <li><strong>Glute bridge:</strong> 15 reps (for glute max)</li>
          <li><strong>Lateral band walks:</strong> 10 steps each direction</li>
          <li><strong>Single-leg balance:</strong> 30 seconds each leg</li>
        </ol>

        <p>Perform 2-3 rounds, 3 times per week.</p>

        <h2>Testing Your Glute Medius</h2>

        <h3>Single-Leg Stance Test</h3>
        <ol>
          <li>Stand on one leg in front of a mirror</li>
          <li>Watch your pelvis—does the opposite side drop?</li>
          <li>Does your knee cave inward?</li>
          <li>A positive Trendelenburg sign (hip drop) indicates glute med weakness</li>
        </ol>

        <h3>Step-Down Test</h3>
        <ol>
          <li>Stand on a step or box on one leg</li>
          <li>Slowly lower your other foot toward the ground</li>
          <li>Watch for knee cave or pelvis rotation</li>
          <li>Difficulty controlling this movement = weak glute medius</li>
        </ol>

        <h2>Feeling It in the Wrong Place?</h2>

        <h3>Feeling It in Your TFL (Front of Hip)</h3>
        <ul>
          <li>Reduce range of motion</li>
          <li>Focus on rotating from deep in the hip, not hiking the knee</li>
          <li>Pre-fatigue the TFL with foam rolling</li>
          <li>Try the wall clamshell to ensure proper pelvis position</li>
        </ul>

        <h3>Feeling It in Your Lower Back</h3>
        <ul>
          <li>Your pelvis is rolling—focus on stabilization</li>
          <li>Reduce range of motion significantly</li>
          <li>Try placing your bottom hand on your lower back to feel if it's moving</li>
        </ul>

        <h3>Feeling Nothing at All</h3>
        <ul>
          <li>Add a band for resistance</li>
          <li>Focus on the squeeze at the top</li>
          <li>Slow down the movement dramatically</li>
          <li>Try the elevated clamshell variation</li>
        </ul>

        <h2>Key Takeaways</h2>

        <ul>
          <li>Pelvis stability is everything—your hip should not move at all during the lift</li>
          <li>Quality over quantity—small, controlled movements beat large, sloppy ones</li>
          <li>Lower slowly—the eccentric phase is as important as the lift</li>
          <li>Keep feet together throughout the entire movement</li>
          <li>Progress with bands, then variations, then more functional exercises</li>
          <li>Use clamshells for activation, rehabilitation, or as part of a glute training routine</li>
        </ul>

        <p>
          The clamshell may look simple, but doing it correctly requires attention to detail. Master the basics before adding resistance, and you'll build the hip stability that transfers to everything you do.
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
