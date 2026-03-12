import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Plyometric Exercises: Build Explosive Power Safely | FoundationalRehab',
  description: 'Complete guide to plyometric training for power and athleticism. Learn proper progression, technique, and programming for safe, effective jump training.',
  keywords: ['plyometric exercises', 'jump training', 'explosive power', 'box jumps', 'plyometrics for beginners'],
  openGraph: {
    title: 'Plyometric Exercises: Build Explosive Power Safely',
    description: 'Master plyometric training with proper progression and technique.',
    type: 'article',
  },
};

export default function PlyometricExercises() {
  return (
    <BlogPost
      title="Plyometric Exercises: Build Explosive Power Safely"
      publishedDate="2026-03-12"
      readTime="10 min read"
      tags={["Sports Performance", "Power", "Athletic Training"]}
    >
      <p className="lead">
        Plyometrics—jump training that builds explosive power—can transform your 
        athleticism. But done wrong, they&apos;re a fast track to injury. This guide 
        covers proper progression from beginner to advanced, technique essentials, 
        and programming that builds power while keeping you healthy.
      </p>

      <h2>What Are Plyometrics?</h2>
      <p>
        Plyometric exercises use the stretch-shortening cycle: a rapid stretch of 
        the muscle (eccentric) immediately followed by a powerful contraction (concentric). 
        This trains your muscles and nervous system to produce maximum force in minimum time.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Increased vertical jump and horizontal power</li>
        <li>Faster sprint acceleration</li>
        <li>Improved reactive strength and agility</li>
        <li>Better neuromuscular coordination</li>
        <li>Increased bone density</li>
        <li>Enhanced athletic performance across sports</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>
        Before starting plyometrics, you should have:
      </p>
      <ul>
        <li>Good base of strength (squat 1.5x bodyweight is a common guideline)</li>
        <li>Sound landing mechanics</li>
        <li>No current lower body injuries</li>
        <li>Adequate mobility (full squat depth)</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">Safety First</p>
        <p className="text-yellow-700">
          Plyometrics are high-impact. If you&apos;re new to training, build a strength 
          base first. If you have joint issues, start with low-impact variations 
          and progress slowly. Quality always beats quantity.
        </p>
      </div>

      <h2>Landing Mechanics: The Foundation</h2>
      <p>
        Before jumping, learn to land. Poor landing mechanics cause most plyometric injuries.
      </p>

      <h3>Proper Landing Position</h3>
      <ul>
        <li><strong>Feet:</strong> Shoulder-width apart, slight toe-out</li>
        <li><strong>Knees:</strong> Bent, tracking over toes (not caving in)</li>
        <li><strong>Hips:</strong> Pushed back, absorbing force</li>
        <li><strong>Chest:</strong> Up, not hunched forward</li>
        <li><strong>Arms:</strong> In front for balance</li>
        <li><strong>Sound:</strong> Quiet landing (loud = poor absorption)</li>
      </ul>

      <h3>Landing Drills</h3>
      <p><strong>Altitude Drops:</strong></p>
      <ol>
        <li>Stand on a low box (6-12 inches)</li>
        <li>Step off (don&apos;t jump) and land in athletic position</li>
        <li>Stick the landing—hold 2-3 seconds</li>
        <li>Focus on quiet, controlled landing</li>
        <li>3 sets of 5</li>
      </ol>

      <h2>Beginner Plyometrics</h2>
      <p>
        Start here if you&apos;re new to jump training. Master these before progressing.
      </p>

      <h3>Pogo Jumps</h3>
      <ol>
        <li>Stand with feet together</li>
        <li>Small, quick jumps using only ankles (minimal knee bend)</li>
        <li>Stay on balls of feet</li>
        <li>Focus on quick ground contact</li>
        <li>3 sets of 15-20 jumps</li>
      </ol>

      <h3>Squat Jumps</h3>
      <ol>
        <li>Start in quarter squat position</li>
        <li>Jump straight up, extending fully</li>
        <li>Land softly, reset, repeat</li>
        <li>Don&apos;t rush—focus on each rep</li>
        <li>3 sets of 8-10</li>
      </ol>

      <h3>Box Step-Ups with Hop</h3>
      <ol>
        <li>Step onto low box (12-18 inches)</li>
        <li>Drive up explosively, adding small hop at top</li>
        <li>Step down with control</li>
        <li>3 sets of 8 each leg</li>
      </ol>

      <h3>Broad Jump (Standing Long Jump)</h3>
      <ol>
        <li>Stand with feet shoulder-width apart</li>
        <li>Swing arms back, hinge at hips</li>
        <li>Explosively jump forward</li>
        <li>Land softly, stick the landing</li>
        <li>3 sets of 5</li>
      </ol>

      <h2>Intermediate Plyometrics</h2>
      <p>
        Progress here after 4-6 weeks of beginner work with good technique.
      </p>

      <h3>Box Jumps</h3>
      <ol>
        <li>Stand facing a box (start 12-20 inches)</li>
        <li>Quick countermovement (quarter squat + arm swing)</li>
        <li>Jump onto box, landing softly</li>
        <li>Stand fully, step down (don&apos;t jump down initially)</li>
        <li>3-4 sets of 5</li>
      </ol>

      <h3>Depth Jumps</h3>
      <ol>
        <li>Stand on box (12-18 inches)</li>
        <li>Step off, land, immediately jump up</li>
        <li>Minimize ground contact time</li>
        <li>This is reactive—quick off the ground</li>
        <li>3 sets of 5</li>
      </ol>

      <h3>Split Squat Jumps</h3>
      <ol>
        <li>Start in lunge position</li>
        <li>Jump up explosively</li>
        <li>Switch legs in the air</li>
        <li>Land in opposite lunge position</li>
        <li>3 sets of 6-8 each side</li>
      </ol>

      <h3>Lateral Bounds</h3>
      <ol>
        <li>Stand on one leg</li>
        <li>Jump laterally to other leg</li>
        <li>Stick the landing briefly, then bound back</li>
        <li>Focus on controlled single-leg landings</li>
        <li>3 sets of 6-8 each direction</li>
      </ol>

      <h3>Tuck Jumps</h3>
      <ol>
        <li>Jump straight up</li>
        <li>Pull knees toward chest at peak</li>
        <li>Extend legs for landing</li>
        <li>Land softly, reset</li>
        <li>3 sets of 6-8</li>
      </ol>

      <h2>Advanced Plyometrics</h2>
      <p>
        Only progress here with excellent technique and adequate strength base.
      </p>

      <h3>Single-Leg Box Jumps</h3>
      <ol>
        <li>Stand on one leg facing low box</li>
        <li>Jump onto box, landing on same leg</li>
        <li>Requires excellent single-leg stability</li>
        <li>3 sets of 4-5 each leg</li>
      </ol>

      <h3>Depth Jump to Box Jump</h3>
      <ol>
        <li>Step off box, land, immediately jump onto second box</li>
        <li>Combines depth jump reactivity with box jump</li>
        <li>3 sets of 4-5</li>
      </ol>

      <h3>Hurdle Hops</h3>
      <ol>
        <li>Set up 3-5 small hurdles (6-12 inches)</li>
        <li>Jump over consecutively without pausing</li>
        <li>Minimal ground contact between hurdles</li>
        <li>3 sets of 3-5 hurdles</li>
      </ol>

      <h3>Single-Leg Bounds (Triple Jump Style)</h3>
      <ol>
        <li>Hop forward on one leg repeatedly</li>
        <li>Cover maximum distance with each hop</li>
        <li>Focus on powerful push-off and stable landing</li>
        <li>3 sets of 4-6 hops each leg</li>
      </ol>

      <h2>Upper Body Plyometrics</h2>
      <p>
        Explosive upper body power for throwing, punching, and pushing sports.
      </p>

      <h3>Plyo Push-Ups</h3>
      <ol>
        <li>Standard push-up position</li>
        <li>Lower with control</li>
        <li>Push explosively so hands leave ground</li>
        <li>Land softly, immediately descend into next rep</li>
        <li>3 sets of 6-10</li>
      </ol>

      <h3>Medicine Ball Chest Pass</h3>
      <ol>
        <li>Hold med ball at chest, stand facing wall</li>
        <li>Explosively pass ball to wall</li>
        <li>Catch and immediately throw again</li>
        <li>3 sets of 8-10</li>
      </ol>

      <h3>Medicine Ball Slam</h3>
      <ol>
        <li>Hold ball overhead</li>
        <li>Slam it into ground as hard as possible</li>
        <li>Use whole body—not just arms</li>
        <li>3 sets of 8-10</li>
      </ol>

      <h2>Programming Guidelines</h2>

      <h3>Volume</h3>
      <ul>
        <li><strong>Beginners:</strong> 40-60 foot contacts per session</li>
        <li><strong>Intermediate:</strong> 80-100 foot contacts</li>
        <li><strong>Advanced:</strong> 100-140 foot contacts</li>
      </ul>
      <p>
        A &quot;foot contact&quot; is each time your foot hits the ground. A box jump = 2 contacts 
        (landing on box + stepping down).
      </p>

      <h3>Frequency</h3>
      <ul>
        <li>2-3 sessions per week maximum</li>
        <li>48-72 hours between plyometric sessions</li>
        <li>Don&apos;t do heavy leg strength and plyo on same day</li>
      </ul>

      <h3>Intensity Progression</h3>
      <ol>
        <li><strong>Low:</strong> Jumps in place, small hops</li>
        <li><strong>Medium:</strong> Box jumps, broad jumps</li>
        <li><strong>High:</strong> Depth jumps, single-leg work</li>
        <li>Spend 4-6 weeks at each level before progressing</li>
      </ol>

      <h3>Rest Periods</h3>
      <ul>
        <li>Full recovery between sets (1-3 minutes)</li>
        <li>Plyometrics train power, not endurance</li>
        <li>If you&apos;re too tired to jump explosively, rest longer</li>
      </ul>

      <h2>Sample Programs</h2>

      <h3>Beginner (Weeks 1-6)</h3>
      <p><strong>2x per week:</strong></p>
      <ol>
        <li>Altitude drops: 3 × 5</li>
        <li>Pogo jumps: 3 × 15</li>
        <li>Squat jumps: 3 × 8</li>
        <li>Broad jumps: 3 × 5</li>
        <li>Total: ~60 contacts</li>
      </ol>

      <h3>Intermediate (Weeks 7-12)</h3>
      <p><strong>2-3x per week:</strong></p>
      <ol>
        <li>Box jumps: 4 × 5</li>
        <li>Depth jumps: 3 × 5</li>
        <li>Split squat jumps: 3 × 8</li>
        <li>Lateral bounds: 3 × 8</li>
        <li>Total: ~80-100 contacts</li>
      </ol>

      <h3>Advanced (Weeks 13+)</h3>
      <p><strong>2-3x per week:</strong></p>
      <ol>
        <li>Depth jump to box jump: 3 × 5</li>
        <li>Single-leg box jumps: 3 × 4 each</li>
        <li>Hurdle hops: 3 × 5 hurdles</li>
        <li>Single-leg bounds: 3 × 5 each</li>
        <li>Total: ~100-120 contacts</li>
      </ol>

      <h2>Common Mistakes</h2>

      <h3>1. Skipping the Basics</h3>
      <p>
        Jumping to advanced exercises without mastering landing and basic jumps 
        leads to injury. Earn progression through consistency.
      </p>

      <h3>2. Too Much Volume</h3>
      <p>
        More isn&apos;t better. High-volume plyometrics with poor recovery leads to 
        overuse injuries and diminished power.
      </p>

      <h3>3. Poor Landing Mechanics</h3>
      <p>
        Knees caving in, landing stiff-legged, or loud landings indicate poor 
        technique that must be corrected.
      </p>

      <h3>4. Training Fatigued</h3>
      <p>
        Plyometrics should be done fresh. Don&apos;t do them after heavy leg work or 
        at the end of a long practice.
      </p>

      <h3>5. Ignoring Recovery</h3>
      <p>
        Plyometrics are demanding. Sleep, nutrition, and adequate rest between 
        sessions are essential.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Master landing first:</strong> Quiet, controlled landings prevent injury</li>
        <li><strong>Progress systematically:</strong> 4-6 weeks at each level before advancing</li>
        <li><strong>Quality over quantity:</strong> Every rep should be explosive and controlled</li>
        <li><strong>Respect volume:</strong> 40-140 contacts depending on level</li>
        <li><strong>Rest fully:</strong> Power training requires complete recovery between sets</li>
        <li><strong>Build a strength base:</strong> Stronger athletes handle plyometrics better</li>
      </ul>

      <p>
        Plyometric training is one of the most effective ways to build athletic 
        power—when done correctly. Take time to master the fundamentals, progress 
        systematically, and prioritize quality over quantity. Your vertical jump, 
        sprint speed, and overall athleticism will thank you.
      </p>
    </BlogPost>
  );
}
