import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Warm Up Before Running: The Complete Pre-Run Routine | FoundationalRehab',
  description: 'The best warm-up routine before running to prevent injury and improve performance. Dynamic stretches and activation exercises for runners.',
  keywords: ['warm up before running', 'running warm up', 'pre-run stretches', 'dynamic stretches for runners', 'running warm up routine'],
}

export default function WarmUpBeforeRunning() {
  return (
    <BlogPost
      title="Warm Up Before Running: The Complete Pre-Run Routine"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="8 min read"
      category="Running"
      tags={['running', 'warm-up', 'injury prevention', 'dynamic stretching']}
    >
      <p className="lead">
        A proper warm-up prepares your muscles, elevates your heart rate, and reduces injury
        risk. Skip it and you're running on cold muscles—a recipe for strains and poor
        performance.
      </p>

      <h2>Why Warm-Up Matters for Runners</h2>
      <ul>
        <li><strong>Increases blood flow:</strong> Delivers oxygen to working muscles</li>
        <li><strong>Raises muscle temperature:</strong> Warm muscles are more pliable</li>
        <li><strong>Activates nervous system:</strong> Improves muscle firing patterns</li>
        <li><strong>Lubricates joints:</strong> Synovial fluid flows better when warm</li>
        <li><strong>Mental preparation:</strong> Transitions your mind to run mode</li>
        <li><strong>Reduces injury risk:</strong> Cold muscles strain more easily</li>
      </ul>

      <h2>What NOT to Do</h2>
      <ul>
        <li><strong>Static stretching:</strong> Holding stretches reduces power output before running</li>
        <li><strong>Skipping warm-up entirely:</strong> "I'll warm up as I go" isn't enough</li>
        <li><strong>Too intense too fast:</strong> Warm-up should be gradual</li>
        <li><strong>Same routine for all runs:</strong> Speed work needs more warm-up than easy runs</li>
      </ul>

      <h2>The 5-Minute Quick Warm-Up</h2>
      <p>For easy runs when time is tight.</p>

      <ol>
        <li><strong>Walk (1 min):</strong> Brisk walk to get moving</li>
        <li><strong>Leg swings forward/back (30 sec each leg):</strong> Hold support, swing leg</li>
        <li><strong>Leg swings side to side (30 sec each leg):</strong> Cross body and out</li>
        <li><strong>Walking high knees (30 sec):</strong> Drive knees up, walk forward</li>
        <li><strong>Walking butt kicks (30 sec):</strong> Kick heels toward glutes</li>
        <li><strong>Easy jog (1 min):</strong> Very slow pace to finish warm-up</li>
      </ol>

      <h2>The Complete 10-Minute Warm-Up</h2>
      <p>Recommended for most runs.</p>

      <h3>Phase 1: General Movement (2 minutes)</h3>
      <ol>
        <li><strong>Brisk walk:</strong> 1 minute</li>
        <li><strong>Easy jog:</strong> 1 minute (conversational pace)</li>
      </ol>

      <h3>Phase 2: Dynamic Stretches (4 minutes)</h3>
      <ol>
        <li><strong>Leg swings (forward/back):</strong> 10 each leg</li>
        <li><strong>Leg swings (side to side):</strong> 10 each leg</li>
        <li><strong>Walking lunges:</strong> 10 total steps</li>
        <li><strong>Walking quad pulls:</strong> 10 total steps</li>
        <li><strong>Hip circles:</strong> 5 each direction, each leg</li>
        <li><strong>Ankle circles:</strong> 10 each direction, each foot</li>
      </ol>

      <h3>Phase 3: Activation Drills (3 minutes)</h3>
      <ol>
        <li><strong>High knees:</strong> 20 meters</li>
        <li><strong>Butt kicks:</strong> 20 meters</li>
        <li><strong>A-skips:</strong> 20 meters</li>
        <li><strong>Carioca (grapevine):</strong> 20 meters each direction</li>
      </ol>

      <h3>Phase 4: Build-Up (1 minute)</h3>
      <ol>
        <li><strong>Strides:</strong> 2-3 x 50-80 meters at gradually increasing pace</li>
        <li>Start easy, build to run pace, coast to stop</li>
      </ol>

      <h2>Pre-Speed Work Warm-Up (15 minutes)</h2>
      <p>For tempo runs, intervals, or races. More thorough preparation needed.</p>

      <h3>Phase 1: Easy Running (5 minutes)</h3>
      <ol>
        <li>Start with walk, progress to easy jog</li>
        <li>By minute 5, should be at easy running pace</li>
      </ol>

      <h3>Phase 2: Dynamic Stretches (4 minutes)</h3>
      <ol>
        <li>All stretches from 10-minute routine</li>
        <li>Add: Walking toe touches (10 steps)</li>
        <li>Add: Walking knee hugs (10 steps)</li>
        <li>Add: Walking figure-4 (10 steps)</li>
      </ol>

      <h3>Phase 3: Running Drills (3 minutes)</h3>
      <ol>
        <li><strong>High knees:</strong> 2 × 20 meters</li>
        <li><strong>Butt kicks:</strong> 2 × 20 meters</li>
        <li><strong>A-skips:</strong> 2 × 20 meters</li>
        <li><strong>B-skips:</strong> 2 × 20 meters</li>
        <li><strong>Straight-leg bounds:</strong> 2 × 20 meters</li>
      </ol>

      <h3>Phase 4: Strides (3 minutes)</h3>
      <ol>
        <li>4-6 × 80-100 meters</li>
        <li>Build from easy to near-sprint</li>
        <li>Walk back recovery</li>
        <li>Focus on form and turnover</li>
      </ol>

      <h2>Dynamic Stretch Descriptions</h2>

      <h3>Leg Swings (Forward/Back)</h3>
      <ol>
        <li>Hold wall or post for balance</li>
        <li>Swing one leg forward and back like a pendulum</li>
        <li>Keep leg relatively straight</li>
        <li>Increase range gradually</li>
        <li>10 swings each leg</li>
      </ol>

      <h3>Leg Swings (Side to Side)</h3>
      <ol>
        <li>Face wall, hands on wall</li>
        <li>Swing leg across body, then out to side</li>
        <li>Keep hips facing forward</li>
        <li>10 swings each leg</li>
      </ol>

      <h3>Walking Lunges</h3>
      <ol>
        <li>Step forward into lunge</li>
        <li>Lower back knee toward ground</li>
        <li>Push through front heel, step into next lunge</li>
        <li>Keep torso upright</li>
      </ol>

      <h3>Walking Quad Pulls</h3>
      <ol>
        <li>Walk forward, pull one heel to glute</li>
        <li>Brief hold (1-2 seconds)</li>
        <li>Step forward, pull other heel</li>
        <li>Maintain balance and posture</li>
      </ol>

      <h3>A-Skips</h3>
      <ol>
        <li>Skip forward with high knee drive</li>
        <li>Drive knee up, opposite arm forward</li>
        <li>Quick ground contact</li>
        <li>Focus on rhythm and height</li>
      </ol>

      <h3>B-Skips</h3>
      <ol>
        <li>Like A-skip but extend leg forward at top</li>
        <li>Drive knee up, then extend/paw down</li>
        <li>Pulls hamstring through running motion</li>
      </ol>

      <h3>Carioca (Grapevine)</h3>
      <ol>
        <li>Move laterally, crossing feet in front and behind</li>
        <li>Rotate hips with each step</li>
        <li>Stay on balls of feet</li>
        <li>Go both directions</li>
      </ol>

      <h2>Warm-Up by Run Type</h2>

      <h3>Easy/Recovery Run</h3>
      <ul>
        <li>5-minute quick warm-up is sufficient</li>
        <li>Or just start very slow and build in</li>
        <li>First 5-10 minutes of run can be warm-up</li>
      </ul>

      <h3>Long Run</h3>
      <ul>
        <li>5-10 minute warm-up</li>
        <li>Start the run easy, build pace gradually</li>
        <li>Dynamic stretches optional but helpful</li>
      </ul>

      <h3>Tempo Run</h3>
      <ul>
        <li>Full 10-minute warm-up</li>
        <li>Include 2-4 strides before tempo effort</li>
        <li>Need to be fully warm before sustained effort</li>
      </ul>

      <h3>Intervals/Speed Work</h3>
      <ul>
        <li>15-minute thorough warm-up</li>
        <li>Include all drills and 4-6 strides</li>
        <li>Should break a light sweat before first interval</li>
      </ul>

      <h3>Race Day</h3>
      <ul>
        <li>15-20 minute warm-up</li>
        <li>Finish 5-10 minutes before start</li>
        <li>Include strides at race pace</li>
        <li>Stay warm until gun goes off</li>
      </ul>

      <h2>Cold Weather Modifications</h2>
      <ul>
        <li>Warm up indoors if possible</li>
        <li>Extend warm-up time by 5-10 minutes</li>
        <li>Keep moving—don't stand still between exercises</li>
        <li>Wear extra layers during warm-up, shed before run</li>
        <li>Dynamic movements more important than ever</li>
      </ul>

      <h2>Common Warm-Up Mistakes</h2>
      <ul>
        <li><strong>Static stretching pre-run:</strong> Save it for after</li>
        <li><strong>Too short:</strong> 2 minutes isn't enough for hard efforts</li>
        <li><strong>Too intense:</strong> Warm-up shouldn't tire you out</li>
        <li><strong>Stopping before running:</strong> Go straight from warm-up to run</li>
        <li><strong>Skipping for easy runs:</strong> Even easy runs need some prep</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        A proper warm-up takes 5-15 minutes but pays off in injury prevention and better
        performance. Use dynamic stretches (not static), include running drills for faster
        workouts, and always finish with strides before speed work. Your muscles will thank
        you from the first step.
      </p>
    </BlogPost>
  )
}
