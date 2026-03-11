import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'BPPV Exercises: Epley Maneuver and Vertigo Relief | FoundationalRehab',
  description: 'Learn the Epley maneuver and other exercises to treat BPPV vertigo at home. Step-by-step instructions for repositioning maneuvers and vestibular rehabilitation.',
  keywords: ['BPPV exercises', 'Epley maneuver', 'vertigo exercises', 'positional vertigo', 'vestibular exercises'],
}

export default function ExercisesForVertigoBPPV() {
  return (
    <BlogPost
      title="BPPV Exercises: Epley Maneuver and Vertigo Relief"
      author="Alex Sparks"
      date="2026-03-11"
      readTime="9 min read"
      category="Rehabilitation"
      tags={['rehabilitation', 'vertigo', 'vestibular', 'balance']}
    >
      <p className="lead">
        Benign Paroxysmal Positional Vertigo (BPPV) causes intense spinning sensations triggered
        by head movements. The good news: specific maneuvers can treat it effectively at home.
      </p>

      <h2>Understanding BPPV</h2>
      <p>
        BPPV occurs when tiny calcium crystals (otoconia) in your inner ear become dislodged
        and move into the semicircular canals. When you move your head, these crystals shift
        and send false signals to your brain, causing vertigo.
      </p>

      <h3>BPPV Symptoms</h3>
      <ul>
        <li>Brief episodes of spinning (usually less than 60 seconds)</li>
        <li>Triggered by specific head movements (rolling over in bed, looking up, bending over)</li>
        <li>Nausea (sometimes vomiting)</li>
        <li>Unsteadiness</li>
        <li>Nystagmus (involuntary eye movements) during episodes</li>
      </ul>

      <h3>What Triggers BPPV?</h3>
      <ul>
        <li>Rolling over in bed</li>
        <li>Getting out of bed</li>
        <li>Tilting head back (looking up, at hairdresser)</li>
        <li>Bending forward</li>
        <li>Quick head turns</li>
      </ul>

      <h3>Which Ear Is Affected?</h3>
      <p>
        The affected ear is usually the one facing down when vertigo is worst. If rolling to
        your right side triggers worse vertigo, your right ear is likely affected.
      </p>

      <h2>The Epley Maneuver</h2>
      <p>
        The Epley maneuver is the most effective treatment for posterior canal BPPV (the most
        common type). It repositions the crystals out of the semicircular canal.
      </p>

      <div style={{background: '#fef3c7', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem'}}>
        <p><strong>Important:</strong> These instructions are for RIGHT ear BPPV. If your LEFT ear is affected, mirror all directions (left becomes right, right becomes left).</p>
      </div>

      <h3>Epley Maneuver for Right Ear BPPV</h3>
      <p><strong>Setup:</strong> Sit on bed with legs extended. Place a pillow behind you so it will be under your shoulders (not head) when you lie back.</p>

      <p><strong>Step 1:</strong></p>
      <ol>
        <li>Turn head 45 degrees to the RIGHT</li>
        <li>Quickly lie back with head still turned (head ends up hanging slightly off pillow)</li>
        <li>Wait 30 seconds (may experience vertigo - this is normal)</li>
      </ol>

      <p><strong>Step 2:</strong></p>
      <ol>
        <li>Turn head 90 degrees to the LEFT (now looking 45° left)</li>
        <li>Keep body in same position</li>
        <li>Wait 30 seconds</li>
      </ol>

      <p><strong>Step 3:</strong></p>
      <ol>
        <li>Roll your entire body onto your left side</li>
        <li>Turn head another 90 degrees so you're looking at the floor</li>
        <li>Wait 30 seconds</li>
      </ol>

      <p><strong>Step 4:</strong></p>
      <ol>
        <li>Slowly sit up, keeping head tilted down</li>
        <li>Return head to neutral position</li>
      </ol>

      <p><strong>After the maneuver:</strong></p>
      <ul>
        <li>Wait 10 minutes before lying down</li>
        <li>Sleep propped up at 45° that night (optional but may help)</li>
        <li>Avoid lying on affected side for 24 hours</li>
        <li>Repeat 3 times per day until symptoms resolve</li>
      </ul>

      <h2>The Half-Somersault Maneuver (Foster Maneuver)</h2>
      <p>
        An alternative to Epley that some find easier to do alone. Same effectiveness for
        posterior canal BPPV.
      </p>

      <h3>For Right Ear BPPV</h3>
      <p><strong>Step 1:</strong> Kneel on floor, then sit back on heels.</p>
      <p><strong>Step 2:</strong> Tilt head back and look at ceiling. Wait 30 seconds.</p>
      <p><strong>Step 3:</strong> Put head down on floor (like preparing for a somersault). Turn head toward RIGHT elbow. Wait 30 seconds.</p>
      <p><strong>Step 4:</strong> Keeping head turned toward right elbow, raise head to back level (still on hands and knees). Wait 30 seconds.</p>
      <p><strong>Step 5:</strong> Keeping head turned right, sit back up onto heels. Then return head to neutral.</p>

      <h2>The Brandt-Daroff Exercises</h2>
      <p>
        Unlike the repositioning maneuvers, Brandt-Daroff exercises work through habituation -
        training your brain to ignore the false signals. They're useful when:
      </p>
      <ul>
        <li>Epley doesn't fully resolve symptoms</li>
        <li>BPPV keeps recurring</li>
        <li>You're not sure which ear is affected</li>
      </ul>

      <p><strong>How to do them:</strong></p>
      <ol>
        <li>Sit on edge of bed</li>
        <li>Quickly lie down on RIGHT side with nose pointed 45° up</li>
        <li>Stay 30 seconds (or until vertigo stops)</li>
        <li>Sit up and wait 30 seconds</li>
        <li>Quickly lie down on LEFT side with nose pointed 45° up</li>
        <li>Stay 30 seconds</li>
        <li>Sit up</li>
        <li>This is 1 rep. Do 5 reps, 3 times per day</li>
      </ol>

      <p><strong>Duration:</strong> Continue for 2-3 weeks or until symptom-free for 2 consecutive days.</p>

      <h2>Gaze Stabilization Exercises</h2>
      <p>
        These help your vestibular system recalibrate after BPPV, especially if you have
        lingering unsteadiness.
      </p>

      <h3>Exercise 1: VOR x1</h3>
      <ol>
        <li>Hold a business card or your thumb at arm's length</li>
        <li>Focus on the target</li>
        <li>Turn head side to side while keeping eyes fixed on target</li>
        <li>Start slowly, gradually increase speed</li>
        <li>1 minute, 3 times per day</li>
      </ol>

      <h3>Exercise 2: VOR x1 Vertical</h3>
      <ol>
        <li>Same as above, but nod head up and down</li>
        <li>Keep eyes fixed on target</li>
        <li>1 minute, 3 times per day</li>
      </ol>

      <h3>Exercise 3: Walking with Head Turns</h3>
      <ol>
        <li>Walk in a straight line</li>
        <li>Turn head side to side while walking</li>
        <li>Keep eyes on where you're going</li>
        <li>30-60 seconds, progress to busier environments</li>
      </ol>

      <h2>Balance Exercises for Post-BPPV Recovery</h2>
      <p>
        Even after crystals are repositioned, you may have lingering unsteadiness. These
        exercises help restore balance confidence.
      </p>

      <h3>Standing Balance Progression</h3>
      <ol>
        <li>Feet together, eyes open: 30 seconds</li>
        <li>Feet together, eyes closed: 30 seconds</li>
        <li>Tandem stance (heel-to-toe), eyes open: 30 seconds</li>
        <li>Tandem stance, eyes closed: 30 seconds</li>
        <li>Single leg, eyes open: 30 seconds each</li>
        <li>Single leg, eyes closed: 30 seconds each</li>
      </ol>

      <h3>Dynamic Balance</h3>
      <ol>
        <li>Walk heel-to-toe in straight line</li>
        <li>Walk with head turns (side to side)</li>
        <li>Walk and stop quickly on command</li>
        <li>Walk and turn 180° periodically</li>
      </ol>

      <h2>Treatment Protocol</h2>

      <h3>Acute BPPV (First Week)</h3>
      <ol>
        <li>Perform Epley maneuver 3x per day</li>
        <li>If no improvement in 3-4 days, try opposite ear</li>
        <li>Sleep slightly elevated first night after Epley</li>
        <li>Avoid positions that trigger vertigo when possible</li>
      </ol>

      <h3>Persistent BPPV (After 1 Week)</h3>
      <ol>
        <li>Continue Epley or switch to Brandt-Daroff</li>
        <li>Add gaze stabilization exercises</li>
        <li>Begin balance exercises</li>
        <li>See a vestibular specialist if no improvement</li>
      </ol>

      <h3>Recovery Phase</h3>
      <ol>
        <li>Continue gaze stabilization 2x daily for 2-4 weeks</li>
        <li>Progress balance exercises</li>
        <li>Gradually return to normal activities</li>
        <li>Know that BPPV can recur (50% within 5 years)</li>
      </ol>

      <h2>When to See a Doctor</h2>
      <p>Seek medical evaluation if:</p>
      <ul>
        <li>Vertigo lasts more than 1-2 minutes per episode (may not be BPPV)</li>
        <li>Vertigo is constant (not triggered by position changes)</li>
        <li>You have hearing loss, tinnitus, or ear fullness</li>
        <li>Numbness, weakness, slurred speech, or vision changes (stroke symptoms - call 911)</li>
        <li>Symptoms don't improve after 2-3 weeks of maneuvers</li>
        <li>Severe vomiting or inability to function</li>
        <li>Recent head injury</li>
      </ul>

      <h2>Preventing BPPV Recurrence</h2>
      <p>
        BPPV commonly recurs. To reduce risk:
      </p>
      <ul>
        <li>Maintain adequate vitamin D levels (deficiency linked to BPPV)</li>
        <li>Get enough calcium for bone/crystal health</li>
        <li>Keep head elevated 30° when sleeping (if prone to recurrence)</li>
        <li>Avoid sleeping on the previously affected ear</li>
        <li>When getting out of bed, sit up slowly, pause, then stand</li>
      </ul>

      <h2>Important Precautions</h2>
      <ul>
        <li><strong>Don't drive</strong> if you have active vertigo</li>
        <li><strong>Clear space</strong> around you when doing maneuvers (you may become dizzy)</li>
        <li><strong>Have someone nearby</strong> the first time you do repositioning maneuvers</li>
        <li><strong>Stop and rest</strong> if you experience severe nausea or vomiting</li>
        <li><strong>Neck issues:</strong> Be cautious with Epley if you have cervical spine problems</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        BPPV is very treatable - the Epley maneuver successfully resolves symptoms in about
        80% of cases within 1-3 treatments. The key is identifying the affected ear and
        performing the maneuver correctly.
      </p>
      <p>
        If vertigo doesn't resolve with home maneuvers, see a vestibular specialist. They
        can confirm the diagnosis, identify which canal is affected, and perform maneuvers
        with greater precision.
      </p>
    </BlogPost>
  )
}
