import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Exercises for Nurses: Stay Strong Through Long Shifts | FoundationalRehab',
  description: 'Exercise and stretching routines designed for nurses and healthcare workers. Prevent injury, reduce pain, and maintain energy during demanding shifts.',
  keywords: ['exercises for nurses', 'nurse workout', 'healthcare worker fitness', 'shift worker exercise', 'standing all day exercises'],
}

export default function ExercisesForNurses() {
  return (
    <BlogPost
      title="Exercises for Nurses: Stay Strong Through Long Shifts"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Occupational Health"
      tags={['nurses', 'healthcare', 'occupational health', 'back pain', 'injury prevention']}
    >
      <p className="lead">
        Nursing is one of the most physically demanding professions. Long shifts on your feet,
        patient lifting, awkward positions, and emotional stress all take a toll. The right
        exercises can protect your body and extend your career.
      </p>

      <h2>Physical Demands of Nursing</h2>
      <ul>
        <li><strong>Standing 8-12 hours:</strong> Leg fatigue, foot pain, varicose veins</li>
        <li><strong>Patient handling:</strong> Back injuries, shoulder strain</li>
        <li><strong>Forward bending:</strong> Lower back stress from bedside care</li>
        <li><strong>Awkward postures:</strong> Reaching, twisting during procedures</li>
        <li><strong>Repetitive tasks:</strong> Documentation, medication administration</li>
        <li><strong>Emotional/mental stress:</strong> Contributes to physical tension</li>
      </ul>

      <h2>Key Areas to Address</h2>
      <ul>
        <li>Lower back strength and flexibility</li>
        <li>Core stability for lifting</li>
        <li>Leg endurance for standing</li>
        <li>Shoulder and upper back strength</li>
        <li>Foot and ankle care</li>
        <li>Stress management</li>
      </ul>

      <h2>Pre-Shift Routine (5-10 minutes)</h2>
      <p>Do before your shift to prepare your body.</p>

      <h3>Dynamic Warm-Up</h3>
      <ol>
        <li><strong>March in place:</strong> 1 minute, get blood flowing</li>
        <li><strong>Hip circles:</strong> 10 each direction</li>
        <li><strong>Arm circles:</strong> 10 forward, 10 backward</li>
        <li><strong>Torso twists:</strong> 10 each side</li>
        <li><strong>Standing cat-cow:</strong> 10 reps</li>
        <li><strong>Calf raises:</strong> 15 reps</li>
        <li><strong>Bodyweight squats:</strong> 10 reps</li>
      </ol>

      <h2>During-Shift Exercises (Break Time)</h2>
      <p>Quick movements when you have 1-5 minutes.</p>

      <h3>1-Minute Break</h3>
      <ul>
        <li>Shoulder rolls: 10 each direction</li>
        <li>Neck stretches: 15 seconds each side</li>
        <li>Ankle circles: 10 each foot</li>
      </ul>

      <h3>2-Minute Break</h3>
      <ul>
        <li>Wall push-ups: 10 reps</li>
        <li>Standing quad stretch: 20 seconds each</li>
        <li>Calf stretch against wall: 20 seconds each</li>
        <li>Deep breaths: 30 seconds</li>
      </ul>

      <h3>5-Minute Break</h3>
      <ol>
        <li>Walk around (different than your usual route)</li>
        <li>Standing hip flexor stretch: 30 seconds each</li>
        <li>Standing figure-4 stretch: 30 seconds each</li>
        <li>Chin tucks: 10 reps</li>
        <li>Wall chest stretch: 30 seconds each side</li>
        <li>Deep breathing: 1 minute</li>
      </ol>

      <h2>Post-Shift Recovery (10-15 minutes)</h2>
      <p>Release tension and aid recovery after your shift.</p>

      <h3>Lower Back Relief</h3>
      <ol>
        <li><strong>Knee-to-chest stretch:</strong> 30 seconds each leg</li>
        <li><strong>Supine spinal twist:</strong> 30 seconds each side</li>
        <li><strong>Child's pose:</strong> 1 minute</li>
        <li><strong>Cat-cow:</strong> 10 slow reps</li>
      </ol>

      <h3>Leg Recovery</h3>
      <ol>
        <li><strong>Legs up wall:</strong> 3-5 minutes (reduces swelling)</li>
        <li><strong>Seated hamstring stretch:</strong> 30 seconds each</li>
        <li><strong>Calf stretch:</strong> 30 seconds each</li>
        <li><strong>Foam roll calves:</strong> 1 minute each (if available)</li>
      </ol>

      <h3>Upper Body Release</h3>
      <ol>
        <li><strong>Doorway chest stretch:</strong> 30 seconds each position</li>
        <li><strong>Thread the needle:</strong> 5 each side</li>
        <li><strong>Neck stretches:</strong> All directions, 20 seconds each</li>
      </ol>

      <h2>Off-Day Strength Training</h2>
      <p>Build resilience with 2-3 strength sessions per week.</p>

      <h3>Core and Back Focus (Essential)</h3>
      <ol>
        <li><strong>Bird dog:</strong> 3 × 10 each side</li>
        <li><strong>Dead bug:</strong> 3 × 10 each side</li>
        <li><strong>Glute bridge:</strong> 3 × 15</li>
        <li><strong>Plank:</strong> 3 × 20-30 seconds</li>
        <li><strong>Side plank:</strong> 3 × 15-20 seconds each</li>
      </ol>

      <h3>Lower Body Strength</h3>
      <ol>
        <li><strong>Goblet squat:</strong> 3 × 12</li>
        <li><strong>Romanian deadlift:</strong> 3 × 10</li>
        <li><strong>Step-ups:</strong> 3 × 10 each leg</li>
        <li><strong>Calf raises:</strong> 3 × 20</li>
      </ol>

      <h3>Upper Body Strength</h3>
      <ol>
        <li><strong>Push-ups:</strong> 3 × 10-15</li>
        <li><strong>Rows:</strong> 3 × 12</li>
        <li><strong>Shoulder press:</strong> 3 × 10</li>
        <li><strong>Face pulls:</strong> 3 × 15</li>
      </ol>

      <h3>Full Workout (30 minutes)</h3>
      <p>Complete routine for off days:</p>
      <ol>
        <li><strong>Warm-up:</strong> 5 minutes (dynamic movement)</li>
        <li>Goblet Squat: 3 × 12</li>
        <li>Romanian Deadlift: 3 × 10</li>
        <li>Push-Ups: 3 × 10-15</li>
        <li>Rows: 3 × 12</li>
        <li>Dead Bug: 3 × 10 each</li>
        <li>Glute Bridge: 3 × 15</li>
        <li>Face Pulls: 3 × 15</li>
        <li><strong>Stretch:</strong> 5 minutes</li>
      </ol>

      <h2>Safe Patient Handling Tips</h2>
      <p>Technique matters as much as strength.</p>
      <ul>
        <li><strong>Get close:</strong> Bring patient close to your body before lifting</li>
        <li><strong>Bend knees, not back:</strong> Use leg power, keep spine neutral</li>
        <li><strong>Tighten core:</strong> Brace abs before any lift</li>
        <li><strong>Don't twist:</strong> Move feet to turn, don't rotate spine</li>
        <li><strong>Use equipment:</strong> Gait belts, slide sheets, lifts when available</li>
        <li><strong>Ask for help:</strong> Two-person assist when needed</li>
        <li><strong>Know your limits:</strong> Don't be a hero—protect your career</li>
      </ul>

      <h2>Foot Care and Exercises</h2>
      <p>Your feet carry you through every shift.</p>

      <h3>Daily Foot Care</h3>
      <ul>
        <li>Quality supportive shoes (replace every 6-12 months)</li>
        <li>Compression socks for circulation</li>
        <li>Custom orthotics if needed</li>
        <li>Elevate feet after shifts</li>
      </ul>

      <h3>Foot Exercises</h3>
      <ol>
        <li><strong>Toe spreads:</strong> Spread toes wide, hold 5 seconds, 10 reps</li>
        <li><strong>Towel scrunches:</strong> Scrunch towel with toes, 30 seconds</li>
        <li><strong>Calf raises:</strong> Full range of motion, 20 reps</li>
        <li><strong>Ankle circles:</strong> 10 each direction each foot</li>
        <li><strong>Plantar fascia stretch:</strong> Pull toes back, 30 seconds each</li>
      </ol>

      <h2>Stress Management</h2>
      <p>Mental stress creates physical tension.</p>

      <h3>Quick Stress Relief</h3>
      <ul>
        <li><strong>Box breathing:</strong> 4 counts in, hold, out, hold—repeat 4 times</li>
        <li><strong>Shoulder drop:</strong> Shrug shoulders to ears, hold, release completely</li>
        <li><strong>Jaw release:</strong> Unclench jaw, let it hang slightly open</li>
        <li><strong>Eye rest:</strong> Close eyes, look into distance for 20 seconds</li>
      </ul>

      <h3>Off-Day Recovery</h3>
      <ul>
        <li>Prioritize sleep (blackout curtains for day sleepers)</li>
        <li>Epsom salt baths for muscle recovery</li>
        <li>Gentle yoga or stretching</li>
        <li>Walking outdoors (different from work walking)</li>
        <li>Social connection (non-work friends)</li>
      </ul>

      <h2>Sample Weekly Schedule</h2>

      <h3>3×12 Hour Shift Pattern</h3>
      <ul>
        <li><strong>Work Day 1:</strong> Pre-shift warm-up, break stretches, post-shift recovery</li>
        <li><strong>Work Day 2:</strong> Pre-shift warm-up, break stretches, post-shift recovery</li>
        <li><strong>Work Day 3:</strong> Pre-shift warm-up, break stretches, post-shift recovery</li>
        <li><strong>Day Off 1:</strong> Strength workout (30 min) + extended stretching</li>
        <li><strong>Day Off 2:</strong> Light activity (walk, yoga) + recovery focus</li>
        <li><strong>Day Off 3:</strong> Strength workout (30 min)</li>
        <li><strong>Day Off 4:</strong> Active rest (whatever you enjoy)</li>
      </ul>

      <h2>Warning Signs to Address</h2>
      <p>Don't ignore these—they get worse:</p>
      <ul>
        <li>Persistent back pain (more than a few days)</li>
        <li>Numbness or tingling in hands or feet</li>
        <li>Sharp pain with specific movements</li>
        <li>Swelling that doesn't resolve with rest</li>
        <li>Pain that wakes you at night</li>
        <li>Difficulty performing your job safely</li>
      </ul>
      <p><strong>Action:</strong> See occupational health or your doctor</p>

      <h2>The Bottom Line</h2>
      <p>
        Nursing is hard on the body, but you can protect yourself with the right approach.
        Warm up before shifts, stretch when you can, recover after, and build strength on
        off days. Your core and back are your foundation—prioritize them. Safe patient
        handling techniques and good footwear matter as much as exercise. Take care of
        yourself so you can take care of others.
      </p>
    </BlogPost>
  )
}
