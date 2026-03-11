import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: "Exercises for Parkinson's Disease: Movement to Slow Progression | FoundationalRehab",
  description: "Evidence-based exercises for Parkinson's disease that improve balance, mobility, and quality of life. Includes specific programs and safety tips.",
  keywords: ["Parkinson's exercises", "Parkinson's disease exercise", "balance exercises Parkinson's", "LSVT BIG", "boxing for Parkinson's"],
}

export default function ExercisesForParkinsons() {
  return (
    <BlogPost
      title="Exercises for Parkinson's Disease: Movement to Slow Progression"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="10 min read"
      category="Rehabilitation"
      tags={['rehabilitation', "Parkinson's", 'balance', 'mobility', 'neurological']}
    >
      <p className="lead">
        Exercise is neuroprotective for Parkinson's disease. Research shows intensive exercise
        can slow disease progression, improve mobility, and enhance quality of life. Movement
        is medicine—here's how to use it.
      </p>

      <h2>Why Exercise Is Essential</h2>
      <ul>
        <li><strong>Slows progression:</strong> High-intensity exercise may slow motor symptom decline</li>
        <li><strong>Improves mobility:</strong> Counteracts bradykinesia (slowness of movement)</li>
        <li><strong>Reduces fall risk:</strong> Balance and strength training prevent falls</li>
        <li><strong>Fights rigidity:</strong> Stretching and movement combat muscle stiffness</li>
        <li><strong>Supports mood:</strong> Reduces depression and anxiety common in PD</li>
        <li><strong>Maintains function:</strong> Preserves ability to do daily activities</li>
      </ul>

      <h2>Key Principles</h2>

      <h3>Amplitude Training</h3>
      <p>
        Parkinson's causes movements to become smaller over time. Combat this by thinking
        "BIG"—make movements larger and more exaggerated than feels natural.
      </p>
      <ul>
        <li>Take bigger steps when walking</li>
        <li>Swing arms with exaggeration</li>
        <li>Reach farther in exercises</li>
        <li>Speak louder (LSVT LOUD program)</li>
      </ul>

      <h3>High Intensity Helps</h3>
      <p>
        Research suggests higher-intensity exercise may have greater neuroprotective effects.
        Work at 70-85% of maximum heart rate when medically appropriate.
      </p>

      <h3>Consistency Over Perfection</h3>
      <p>
        Regular exercise matters more than perfect exercise. Aim for daily movement of some kind.
      </p>

      <h2>Evidence-Based Programs</h2>

      <h3>LSVT BIG</h3>
      <p>
        A standardized, research-backed program that focuses on large amplitude movements.
        Typically done with a certified therapist but principles can be applied independently.
      </p>
      <ul>
        <li>Focus: Exaggerated, big movements</li>
        <li>Duration: 16 sessions over 4 weeks (traditional)</li>
        <li>Key phrase: "Think BIG"</li>
      </ul>

      <h3>Rock Steady Boxing</h3>
      <p>
        Non-contact boxing adapted for Parkinson's. Shown to improve balance, speed, gait,
        and quality of life.
      </p>
      <ul>
        <li>Punching combinations (no contact)</li>
        <li>Footwork drills</li>
        <li>Core work</li>
        <li>Balance challenges</li>
        <li>Available at many gyms nationwide</li>
      </ul>

      <h3>Dance</h3>
      <p>
        Tango, in particular, has strong research support. Other dance forms help too.
      </p>
      <ul>
        <li>Combines cognitive challenge with movement</li>
        <li>Works on balance and weight shifting</li>
        <li>Social and enjoyable</li>
        <li>Improves gait and reduces freezing</li>
      </ul>

      <h3>Cycling</h3>
      <p>
        "Forced exercise" cycling (pedaling faster than preferred) shows particular benefit.
      </p>
      <ul>
        <li>Stationary or regular bikes</li>
        <li>Tandem cycling with a partner</li>
        <li>Pedaling cadence 80-90 RPM recommended</li>
      </ul>

      <h2>Balance Exercises</h2>
      <p>
        Falls are a major concern with Parkinson's. Practice balance daily with these exercises.
      </p>

      <h3>Single-Leg Stand</h3>
      <ol>
        <li>Hold sturdy surface (counter or chair)</li>
        <li>Lift one foot slightly off floor</li>
        <li>Hold 10-30 seconds</li>
        <li>Switch legs</li>
        <li>Progress: lighter hand touch, then no hands</li>
      </ol>

      <h3>Tandem Stance</h3>
      <ol>
        <li>Stand heel-to-toe (like on a tightrope)</li>
        <li>Hold wall or counter as needed</li>
        <li>Hold 10-30 seconds</li>
        <li>Switch which foot is forward</li>
      </ol>

      <h3>Weight Shifts</h3>
      <ol>
        <li>Stand feet hip-width apart</li>
        <li>Shift weight fully to right foot</li>
        <li>Hold 3 seconds</li>
        <li>Shift fully to left foot</li>
        <li>10 shifts each direction</li>
      </ol>

      <h3>Heel-Toe Walking</h3>
      <ol>
        <li>Walk in a line, heel touching toe each step</li>
        <li>Use wall or partner for safety</li>
        <li>10-20 steps forward</li>
        <li>Turn carefully, return</li>
      </ol>

      <h3>Multidirectional Reaching</h3>
      <ol>
        <li>Stand stable</li>
        <li>Reach forward as far as possible</li>
        <li>Return to center</li>
        <li>Reach to each side, backward (with support)</li>
        <li>5 reaches each direction</li>
      </ol>

      <h2>Gait Training</h2>

      <h3>Big Steps Walking</h3>
      <ol>
        <li>Walk with exaggerated, long steps</li>
        <li>Swing arms with intention</li>
        <li>Count steps or use a metronome</li>
        <li>Think "BIG" with every step</li>
      </ol>

      <h3>Turning Practice</h3>
      <ol>
        <li>Practice turns slowly and deliberately</li>
        <li>Don't pivot—take multiple small steps</li>
        <li>Look in direction you're turning first</li>
        <li>"Clock face" turns: 90°, 180° practice</li>
      </ol>

      <h3>Obstacle Navigation</h3>
      <ol>
        <li>Practice stepping over objects (rolled towel)</li>
        <li>Walk through doorways deliberately</li>
        <li>Practice starting and stopping on command</li>
      </ol>

      <h3>Cueing Strategies for Freezing</h3>
      <ul>
        <li><strong>Visual cues:</strong> Step over a line (real or imagined)</li>
        <li><strong>Auditory cues:</strong> Metronome, music, counting out loud</li>
        <li><strong>Weight shift:</strong> Rock side to side to initiate walking</li>
        <li><strong>Marching:</strong> Exaggerated high-knee march to break freeze</li>
      </ul>

      <h2>Flexibility and Mobility</h2>
      <p>
        Combat rigidity with daily stretching. Hold each stretch 30-60 seconds.
      </p>

      <h3>Trunk Rotation</h3>
      <ol>
        <li>Sit or stand tall</li>
        <li>Rotate upper body to right</li>
        <li>Hold 30 seconds</li>
        <li>Rotate to left</li>
        <li>Keep hips facing forward</li>
      </ol>

      <h3>Chest Opener</h3>
      <ol>
        <li>Stand in doorway, hands on frame</li>
        <li>Step through gently</li>
        <li>Feel stretch across chest</li>
        <li>Hold 30-60 seconds</li>
        <li>Combats forward posture</li>
      </ol>

      <h3>Hip Flexor Stretch</h3>
      <ol>
        <li>Half-kneeling position</li>
        <li>Tuck tailbone under (posterior pelvic tilt)</li>
        <li>Lean forward slightly</li>
        <li>Feel stretch in front of back hip</li>
        <li>30 seconds each side</li>
      </ol>

      <h3>Calf Stretch</h3>
      <ol>
        <li>Face wall, hands on wall</li>
        <li>Step one foot back, heel down</li>
        <li>Lean into wall</li>
        <li>30 seconds each leg</li>
      </ol>

      <h3>Neck Stretches</h3>
      <ol>
        <li>Gentle chin tucks (make double chin)</li>
        <li>Ear to shoulder (no rotation)</li>
        <li>Hold each 15-30 seconds</li>
        <li>Never force range of motion</li>
      </ol>

      <h2>Strength Training</h2>
      <p>
        Maintain muscle mass and power. 2-3 times per week, all major muscle groups.
      </p>

      <h3>Chair Squat</h3>
      <ol>
        <li>Stand in front of chair</li>
        <li>Slowly sit down with control</li>
        <li>Stand up without using hands</li>
        <li>Focus on controlled descent</li>
        <li>10-15 repetitions</li>
      </ol>

      <h3>Wall Push-Up</h3>
      <ol>
        <li>Hands on wall, shoulder height</li>
        <li>Bend elbows, lean in</li>
        <li>Push back to start</li>
        <li>10-15 repetitions</li>
        <li>Progress to lower surfaces</li>
      </ol>

      <h3>Heel Raises</h3>
      <ol>
        <li>Hold counter for balance</li>
        <li>Rise onto toes</li>
        <li>Lower slowly</li>
        <li>15-20 repetitions</li>
      </ol>

      <h3>Step-Ups</h3>
      <ol>
        <li>Use bottom stair or low step</li>
        <li>Step up with right foot</li>
        <li>Bring left foot up</li>
        <li>Step down with control</li>
        <li>10 each leg</li>
      </ol>

      <h3>Resistance Band Rows</h3>
      <ol>
        <li>Secure band in front of you</li>
        <li>Pull elbows back, squeeze shoulder blades</li>
        <li>Control return</li>
        <li>15 repetitions</li>
      </ol>

      <h2>Sample Weekly Schedule</h2>

      <h3>Early Stage</h3>
      <ul>
        <li><strong>Daily:</strong> Stretching (10-15 min) + balance practice (5 min)</li>
        <li><strong>3x/week:</strong> Aerobic exercise 30-45 min (cycling, walking, dance)</li>
        <li><strong>2x/week:</strong> Strength training 20-30 min</li>
        <li><strong>Optional:</strong> Boxing, tai chi, or dance class</li>
      </ul>

      <h3>Moderate Stage</h3>
      <ul>
        <li><strong>Daily:</strong> Stretching (15 min) + gait practice (10 min)</li>
        <li><strong>3x/week:</strong> Aerobic exercise 20-30 min (supervised if needed)</li>
        <li><strong>2x/week:</strong> Strength training with support</li>
        <li><strong>Daily:</strong> Balance exercises with safety measures</li>
      </ul>

      <h2>Safety Considerations</h2>

      <h3>Fall Prevention</h3>
      <ul>
        <li>Exercise near sturdy support (counter, chair, wall)</li>
        <li>Remove tripping hazards from exercise area</li>
        <li>Wear supportive, non-slip footwear</li>
        <li>Have someone nearby during balance exercises</li>
        <li>Use gait belt if history of falls</li>
      </ul>

      <h3>Timing with Medications</h3>
      <ul>
        <li>Exercise during "on" times when medications are working</li>
        <li>Typically 1-2 hours after taking levodopa</li>
        <li>Avoid exercise during "off" periods</li>
        <li>Know your medication schedule</li>
      </ul>

      <h3>When to Stop</h3>
      <ul>
        <li>Dizziness or lightheadedness</li>
        <li>Chest pain or unusual shortness of breath</li>
        <li>Severe fatigue</li>
        <li>Significant increase in tremor</li>
        <li>Confusion or disorientation</li>
      </ul>

      <h2>Working with Professionals</h2>
      <ul>
        <li><strong>Neurologist:</strong> Exercise prescription, medication timing</li>
        <li><strong>Physical therapist:</strong> Gait training, balance, personalized programs</li>
        <li><strong>Occupational therapist:</strong> Daily activity modifications</li>
        <li><strong>Speech therapist:</strong> LSVT LOUD for voice, swallowing</li>
        <li><strong>Exercise physiologist:</strong> Fitness programming</li>
        <li><strong>Certified boxing/dance instructor:</strong> Specialized PD programs</li>
      </ul>

      <h2>Motivation and Adherence</h2>
      <ul>
        <li><strong>Join a class:</strong> Parkinson's exercise groups provide community</li>
        <li><strong>Exercise with a partner:</strong> Accountability and safety</li>
        <li><strong>Track progress:</strong> Celebrate improvements, however small</li>
        <li><strong>Make it fun:</strong> Dance, boxing, games—not just "exercise"</li>
        <li><strong>Start small:</strong> 10 minutes is better than nothing</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Exercise is one of the most powerful tools for managing Parkinson's disease. High-intensity
        aerobic exercise, strength training, balance work, and stretching all play important roles.
        The key is thinking BIG—make movements larger than they feel, work at challenging intensities,
        and stay consistent. Movement truly is medicine for the Parkinson's brain.
      </p>
    </BlogPost>
  )
}
