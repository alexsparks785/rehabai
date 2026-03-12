import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Cool Down After Running: Post-Run Recovery Routine | FoundationalRehab',
  description: 'The best cool-down routine after running to speed recovery and prevent injury. Static stretches and recovery exercises for runners.',
  keywords: ['cool down after running', 'post-run stretches', 'running cool down', 'stretches after running', 'runner recovery'],
}

export default function CoolDownAfterRunning() {
  return (
    <BlogPost
      title="Cool Down After Running: Post-Run Recovery Routine"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="8 min read"
      category="Running"
      tags={['running', 'cool-down', 'recovery', 'stretching', 'injury prevention']}
    >
      <p className="lead">
        What you do after running matters as much as the run itself. A proper cool-down
        helps your body transition from effort to recovery, reduces muscle soreness, and
        improves flexibility over time.
      </p>

      <h2>Why Cool-Down Matters</h2>
      <ul>
        <li><strong>Gradual heart rate reduction:</strong> Prevents blood pooling in legs</li>
        <li><strong>Clears metabolic waste:</strong> Helps flush lactic acid</li>
        <li><strong>Reduces muscle soreness:</strong> Less DOMS (delayed onset muscle soreness)</li>
        <li><strong>Improves flexibility:</strong> Warm muscles stretch better</li>
        <li><strong>Prevents dizziness:</strong> Gradual transition is safer</li>
        <li><strong>Mental transition:</strong> Signals workout is complete</li>
      </ul>

      <h2>The 5-Minute Quick Cool-Down</h2>
      <p>Minimum effective routine for easy runs.</p>

      <h3>Walk (2 minutes)</h3>
      <p>Don't stop suddenly—walk until heart rate drops and breathing normalizes.</p>

      <h3>Quick Stretches (3 minutes)</h3>
      <p>Hold each 20-30 seconds:</p>
      <ol>
        <li><strong>Standing quad stretch:</strong> Pull heel to glute</li>
        <li><strong>Standing calf stretch:</strong> Against wall or curb</li>
        <li><strong>Standing hamstring stretch:</strong> Foot on low surface</li>
        <li><strong>Hip flexor stretch:</strong> Lunge position</li>
      </ol>

      <h2>The Complete 10-Minute Cool-Down</h2>
      <p>Recommended for most runs.</p>

      <h3>Phase 1: Easy Movement (3 minutes)</h3>
      <ol>
        <li><strong>Slow jog:</strong> 1-2 minutes, very easy pace</li>
        <li><strong>Walk:</strong> 1-2 minutes until breathing normalizes</li>
      </ol>

      <h3>Phase 2: Static Stretches (7 minutes)</h3>
      <p>Hold each stretch 30-45 seconds. Breathe deeply, don't bounce.</p>

      <h4>Calves</h4>
      <ol>
        <li><strong>Wall calf stretch (gastrocnemius):</strong> Straight back leg</li>
        <li><strong>Bent-knee calf stretch (soleus):</strong> Slight knee bend</li>
      </ol>

      <h4>Quads and Hip Flexors</h4>
      <ol>
        <li><strong>Standing quad stretch:</strong> Pull heel toward glute</li>
        <li><strong>Kneeling hip flexor stretch:</strong> Lunge, tuck tailbone</li>
      </ol>

      <h4>Hamstrings</h4>
      <ol>
        <li><strong>Standing hamstring:</strong> Foot elevated, hinge forward</li>
        <li><strong>Seated hamstring:</strong> Legs extended, reach toward toes</li>
      </ol>

      <h4>Glutes and Hips</h4>
      <ol>
        <li><strong>Figure-4 stretch:</strong> Ankle on opposite knee</li>
        <li><strong>Pigeon pose:</strong> Or lying variation</li>
      </ol>

      <h4>IT Band and Outer Hip</h4>
      <ol>
        <li><strong>Standing IT band stretch:</strong> Cross legs, lean away</li>
      </ol>

      <h2>Extended Recovery Cool-Down (15-20 minutes)</h2>
      <p>After hard workouts, long runs, or races.</p>

      <h3>Phase 1: Active Recovery (5 minutes)</h3>
      <ol>
        <li>Very slow jog: 2 minutes</li>
        <li>Walk: 3 minutes</li>
      </ol>

      <h3>Phase 2: Complete Stretch Routine (10-12 minutes)</h3>
      <p>Hold each 45-60 seconds:</p>

      <h4>Lower Leg</h4>
      <ol>
        <li>Calf stretch (straight leg): Each side</li>
        <li>Calf stretch (bent knee): Each side</li>
        <li>Tibialis stretch: Point toes, press top of foot down</li>
      </ol>

      <h4>Upper Leg</h4>
      <ol>
        <li>Quad stretch: Each side</li>
        <li>Hamstring stretch: Each side</li>
        <li>Adductor stretch: Wide stance, lean to each side</li>
      </ol>

      <h4>Hips</h4>
      <ol>
        <li>Hip flexor/psoas stretch: Deep lunge, each side</li>
        <li>Pigeon pose: Each side</li>
        <li>Figure-4 (piriformis): Each side</li>
        <li>90/90 hip stretch: Each side</li>
      </ol>

      <h4>Back and Core</h4>
      <ol>
        <li>Child's pose: 45 seconds</li>
        <li>Cat-cow: 10 slow reps</li>
        <li>Supine spinal twist: Each side</li>
      </ol>

      <h3>Phase 3: Optional Foam Rolling (5-10 minutes)</h3>
      <ol>
        <li>Calves: 1 minute each</li>
        <li>Quads: 1 minute each</li>
        <li>IT band: 1 minute each</li>
        <li>Glutes: 1 minute each</li>
        <li>Upper back: 1 minute</li>
      </ol>

      <h2>Stretch Descriptions</h2>

      <h3>Standing Quad Stretch</h3>
      <ol>
        <li>Stand on one leg (hold support if needed)</li>
        <li>Pull opposite heel toward glute</li>
        <li>Keep knees together</li>
        <li>Stand tall, don't lean forward</li>
        <li>30-45 seconds each leg</li>
      </ol>

      <h3>Kneeling Hip Flexor Stretch</h3>
      <ol>
        <li>Half-kneeling position</li>
        <li>Tuck tailbone under (posterior pelvic tilt)</li>
        <li>Squeeze back glute</li>
        <li>Lean forward slightly</li>
        <li>Feel stretch in front of back hip</li>
        <li>45-60 seconds each side</li>
      </ol>

      <h3>Pigeon Pose</h3>
      <ol>
        <li>From hands and knees, slide one knee forward</li>
        <li>Lower hips toward floor</li>
        <li>Back leg extends straight behind</li>
        <li>Keep hips square</li>
        <li>Fold forward for deeper stretch</li>
        <li>45-60 seconds each side</li>
      </ol>

      <h3>Figure-4 Stretch (Supine)</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Cross one ankle over opposite knee</li>
        <li>Pull bottom leg toward chest</li>
        <li>Feel stretch in outer hip of crossed leg</li>
        <li>45-60 seconds each side</li>
      </ol>

      <h3>Standing IT Band Stretch</h3>
      <ol>
        <li>Cross one leg behind the other</li>
        <li>Lean away from back leg</li>
        <li>Push hip of back leg outward</li>
        <li>Feel stretch along outer thigh</li>
        <li>30-45 seconds each side</li>
      </ol>

      <h2>Cool-Down by Run Type</h2>

      <h3>Easy Run</h3>
      <ul>
        <li>5-minute quick cool-down is sufficient</li>
        <li>Focus on calves, quads, hip flexors</li>
      </ul>

      <h3>Long Run</h3>
      <ul>
        <li>10-15 minute complete cool-down</li>
        <li>All major muscle groups</li>
        <li>Consider foam rolling</li>
        <li>Don't skip—recovery is crucial</li>
      </ul>

      <h3>Speed Work/Intervals</h3>
      <ul>
        <li>10-minute cool-down minimum</li>
        <li>Easy jog for 5-10 minutes before stopping</li>
        <li>Thorough stretching</li>
      </ul>

      <h3>Race</h3>
      <ul>
        <li>Keep walking after finish line</li>
        <li>15-20 minute extended routine when possible</li>
        <li>Gentle stretching—don't force tight muscles</li>
        <li>Light foam rolling later in day</li>
      </ul>

      <h2>Additional Recovery Tips</h2>

      <h3>Hydration</h3>
      <ul>
        <li>Drink within 30 minutes of finishing</li>
        <li>Replace fluids based on sweat loss</li>
        <li>Include electrolytes for runs over 60 minutes</li>
      </ul>

      <h3>Nutrition</h3>
      <ul>
        <li>Eat within 30-60 minutes after hard runs</li>
        <li>Include protein and carbs (3:1 carb to protein ratio)</li>
        <li>Chocolate milk is a simple recovery option</li>
      </ul>

      <h3>Compression</h3>
      <ul>
        <li>Compression socks after long runs can help</li>
        <li>Elevate legs for 10-15 minutes</li>
      </ul>

      <h2>Common Cool-Down Mistakes</h2>
      <ul>
        <li><strong>Stopping suddenly:</strong> Always transition with walking</li>
        <li><strong>Skipping entirely:</strong> Even 5 minutes helps</li>
        <li><strong>Bouncing in stretches:</strong> Hold steady, breathe</li>
        <li><strong>Stretching cold:</strong> Walk/jog first if you waited too long</li>
        <li><strong>Rushing:</strong> Let heart rate drop before stretching</li>
        <li><strong>Ignoring tight spots:</strong> Spend extra time on problem areas</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        A proper cool-down takes 5-15 minutes but significantly impacts recovery. Walk until
        your heart rate drops, then stretch all major muscle groups while they're warm.
        After hard efforts, add foam rolling and take extra time. Your future runs depend
        on how well you recover from today's run.
      </p>
    </BlogPost>
  )
}
