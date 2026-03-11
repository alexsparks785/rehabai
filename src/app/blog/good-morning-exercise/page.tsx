import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Good Morning Exercise: Build Posterior Chain Strength | FoundationalRehab',
  description: 'Master the good morning exercise for stronger hamstrings, glutes, and lower back. Includes proper form, variations, and programming for all levels.',
  keywords: ['good morning exercise', 'barbell good morning', 'hip hinge exercise', 'posterior chain', 'hamstring exercise'],
}

export default function GoodMorningExercise() {
  return (
    <BlogPost
      title="Good Morning Exercise: Build Posterior Chain Strength"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="8 min read"
      category="Strength Training"
      tags={['strength', 'posterior chain', 'hip hinge', 'hamstrings']}
    >
      <p className="lead">
        The good morning builds strength in the hamstrings, glutes, and lower back - the entire
        posterior chain. Here's how to do it safely and effectively.
      </p>

      <h2>What Is the Good Morning?</h2>
      <p>
        The good morning is a hip hinge movement where you bow forward at the hips while keeping
        your back flat, then return to standing. It's called a "good morning" because the movement
        resembles a formal bow.
      </p>

      <h3>Muscles Worked</h3>
      <ul>
        <li><strong>Hamstrings:</strong> Primary movers, stretched at bottom</li>
        <li><strong>Glutes:</strong> Drive hip extension to stand</li>
        <li><strong>Erector spinae:</strong> Keep back flat throughout</li>
        <li><strong>Core:</strong> Stabilizes spine during movement</li>
      </ul>

      <h2>Why Do Good Mornings?</h2>
      <ul>
        <li><strong>Hamstring strength:</strong> Builds strength in lengthened position (where injuries happen)</li>
        <li><strong>Deadlift carryover:</strong> Strengthens the hip hinge pattern</li>
        <li><strong>Back strength:</strong> Isometric work for erectors</li>
        <li><strong>Squat improvement:</strong> Helps prevent "good morning squats" by building posterior chain</li>
        <li><strong>Injury prevention:</strong> Strengthens muscles prone to injury</li>
      </ul>

      <h2>Good Morning Form</h2>

      <h3>Setup (Barbell)</h3>
      <ol>
        <li>Bar on upper back (high bar position) or across rear delts (low bar)</li>
        <li>Feet shoulder-width apart</li>
        <li>Slight bend in knees</li>
        <li>Core braced, chest up</li>
      </ol>

      <h3>The Movement</h3>
      <ol>
        <li>Push hips back, letting torso hinge forward</li>
        <li>Keep back flat - don't round</li>
        <li>Lower until you feel hamstring stretch (typically 45-90 degrees forward)</li>
        <li>Maintain slight knee bend throughout</li>
        <li>Drive hips forward to return to standing</li>
        <li>Squeeze glutes at top</li>
      </ol>

      <h3>Key Cues</h3>
      <ul>
        <li><strong>"Push hips back"</strong> - Not just bending forward</li>
        <li><strong>"Flat back"</strong> - No rounding at any point</li>
        <li><strong>"Soft knees"</strong> - Slight bend, not locked, not squatting</li>
        <li><strong>"Stop at the stretch"</strong> - Don't go lower than your mobility allows</li>
      </ul>

      <h2>Common Mistakes</h2>

      <h3>1. Rounding the Back</h3>
      <p>
        The most dangerous mistake. A rounded back under load can cause disc injuries.
      </p>
      <p><strong>Fix:</strong> Only go as low as you can with a flat back. Use less weight.</p>

      <h3>2. Going Too Low</h3>
      <p>
        Trying to get parallel to the floor when mobility doesn't allow it forces rounding.
      </p>
      <p><strong>Fix:</strong> Stop when you feel hamstring stretch or when back wants to round - whichever comes first.</p>

      <h3>3. Locking Knees</h3>
      <p>
        Straight legs shift stress to the lower back and limit hamstring stretch.
      </p>
      <p><strong>Fix:</strong> Maintain slight knee bend throughout.</p>

      <h3>4. Using Too Much Weight Too Soon</h3>
      <p>
        Good mornings feel awkward at first. Heavy weight before mastering the pattern is risky.
      </p>
      <p><strong>Fix:</strong> Start with bodyweight, progress to empty bar, then add weight gradually.</p>

      <h3>5. Squatting Instead of Hinging</h3>
      <p>
        If your knees bend significantly, you're squatting, not hinging.
      </p>
      <p><strong>Fix:</strong> Knees should stay at the same angle throughout. Hips push back, not down.</p>

      <h2>Good Morning Progressions</h2>

      <h3>Level 1: Bodyweight Good Morning</h3>
      <p>Learn the hip hinge pattern safely.</p>
      <ol>
        <li>Hands behind head or across chest</li>
        <li>Hinge forward with flat back</li>
        <li>3 sets of 15 reps</li>
      </ol>

      <h3>Level 2: Resistance Band Good Morning</h3>
      <p>Add light resistance.</p>
      <ol>
        <li>Stand on band, loop around neck</li>
        <li>Perform good morning against band tension</li>
        <li>3 sets of 12-15 reps</li>
      </ol>

      <h3>Level 3: Empty Barbell Good Morning</h3>
      <p>Get used to bar position and loading.</p>
      <ol>
        <li>Start with just the bar (45 lbs)</li>
        <li>Focus on perfect form</li>
        <li>3 sets of 10-12 reps</li>
      </ol>

      <h3>Level 4: Loaded Barbell Good Morning</h3>
      <p>Progress weight slowly.</p>
      <ol>
        <li>Add weight in small increments</li>
        <li>3-4 sets of 8-12 reps</li>
        <li>Good mornings don't need to be heavy to be effective</li>
      </ol>

      <h2>Good Morning Variations</h2>

      <h3>Seated Good Morning</h3>
      <p>Removes hamstring stretch, isolates lower back.</p>
      <ol>
        <li>Sit on bench with bar on back</li>
        <li>Hinge forward at hips</li>
        <li>Return to upright</li>
      </ol>
      <p><strong>Use for:</strong> Lower back strength focus, those with tight hamstrings.</p>

      <h3>Zercher Good Morning</h3>
      <p>Bar held in crook of elbows instead of on back.</p>
      <ul>
        <li>Different loading position</li>
        <li>More core demand</li>
        <li>Can be easier on shoulders</li>
      </ul>

      <h3>Single-Leg Good Morning</h3>
      <p>Unilateral version for balance and single-leg strength.</p>
      <ol>
        <li>Stand on one leg</li>
        <li>Hinge forward, extending other leg behind for balance</li>
        <li>Similar to single-leg RDL but with bar on back</li>
      </ol>

      <h3>Pause Good Morning</h3>
      <p>Add a pause at the bottom.</p>
      <ol>
        <li>Hinge down to stretched position</li>
        <li>Hold 2-3 seconds</li>
        <li>Drive back up</li>
      </ol>
      <p><strong>Effect:</strong> Builds strength in the weakest position, improves control.</p>

      <h3>Safety Squat Bar Good Morning</h3>
      <p>If available, the safety squat bar is excellent for good mornings.</p>
      <ul>
        <li>Handles in front reduce shoulder strain</li>
        <li>Forward-loaded position challenges erectors more</li>
      </ul>

      <h2>Good Morning Programming</h2>

      <h3>As a Main Lift</h3>
      <ul>
        <li>4 sets of 6-10 reps</li>
        <li>Moderate weight (not maximal)</li>
        <li>Focus on quality, not grinding reps</li>
      </ul>

      <h3>As an Accessory</h3>
      <ul>
        <li>3 sets of 10-15 reps</li>
        <li>Lighter weight, higher reps</li>
        <li>After squats or deadlifts</li>
      </ul>

      <h3>For Hamstring Hypertrophy</h3>
      <ul>
        <li>3-4 sets of 12-15 reps</li>
        <li>Controlled tempo (3 seconds down, 2 seconds up)</li>
        <li>Feel the stretch and contraction</li>
      </ul>

      <h3>Sample Posterior Chain Day</h3>
      <ol>
        <li>Romanian deadlift: 4x8</li>
        <li>Good mornings: 3x12</li>
        <li>Glute bridge: 3x15</li>
        <li>Nordic curl: 3x5</li>
      </ol>

      <h2>Good Morning vs RDL</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #ccc'}}>
            <th style={{padding: '0.5rem', textAlign: 'left'}}>Factor</th>
            <th style={{padding: '0.5rem', textAlign: 'left'}}>Good Morning</th>
            <th style={{padding: '0.5rem', textAlign: 'left'}}>RDL</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #eee'}}>
            <td style={{padding: '0.5rem'}}>Bar position</td>
            <td style={{padding: '0.5rem'}}>On back</td>
            <td style={{padding: '0.5rem'}}>In hands</td>
          </tr>
          <tr style={{borderBottom: '1px solid #eee'}}>
            <td style={{padding: '0.5rem'}}>Erector demand</td>
            <td style={{padding: '0.5rem'}}>Higher</td>
            <td style={{padding: '0.5rem'}}>Lower</td>
          </tr>
          <tr style={{borderBottom: '1px solid #eee'}}>
            <td style={{padding: '0.5rem'}}>Grip limitation</td>
            <td style={{padding: '0.5rem'}}>None</td>
            <td style={{padding: '0.5rem'}}>Yes</td>
          </tr>
          <tr style={{borderBottom: '1px solid #eee'}}>
            <td style={{padding: '0.5rem'}}>Load capacity</td>
            <td style={{padding: '0.5rem'}}>Lower</td>
            <td style={{padding: '0.5rem'}}>Higher</td>
          </tr>
          <tr>
            <td style={{padding: '0.5rem'}}>Learning curve</td>
            <td style={{padding: '0.5rem'}}>Steeper</td>
            <td style={{padding: '0.5rem'}}>More intuitive</td>
          </tr>
        </tbody>
      </table>
      <p>Both are excellent - RDLs are often recommended first, then add good mornings as you advance.</p>

      <h2>Safety Considerations</h2>
      <ul>
        <li><strong>Start light:</strong> This is not a max effort exercise</li>
        <li><strong>Stop before form breaks:</strong> Round back = stop the set</li>
        <li><strong>Use safety bars:</strong> If in a rack, set safeties just below bottom position</li>
        <li><strong>Don't bounce:</strong> Controlled movement throughout</li>
        <li><strong>Respect your mobility:</strong> Don't force range of motion</li>
      </ul>

      <h2>Who Should Avoid Good Mornings?</h2>
      <ul>
        <li>Acute lower back injury (wait until cleared)</li>
        <li>Those who can't maintain a flat back (work on hip hinge pattern first)</li>
        <li>Very tight hamstrings (improve flexibility, use RDLs first)</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Good mornings are an excellent posterior chain builder when done correctly. They
        strengthen the hamstrings, glutes, and back in a way that transfers to deadlifts,
        squats, and athletics.
      </p>
      <p>
        Start with bodyweight to master the hip hinge, progress to an empty bar, then
        add weight conservatively. This is a technique-dependent exercise - form always
        trumps load. Your posterior chain will thank you.
      </p>
    </BlogPost>
  )
}
