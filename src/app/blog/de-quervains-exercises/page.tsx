import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'De Quervain\'s Tenosynovitis Exercises: Heal Thumb and Wrist Pain | FoundationalRehab',
  description: 'Evidence-based exercises for de Quervain\'s tenosynovitis (thumb tendinitis). Learn stretches, strengthening exercises, and activity modifications for relief.',
  keywords: ['de Quervain\'s exercises', 'thumb tendinitis exercises', 'wrist tendonitis treatment', 'mommy thumb exercises', 'de Quervain\'s tenosynovitis'],
  openGraph: {
    title: 'De Quervain\'s Tenosynovitis Exercises: Heal Thumb and Wrist Pain',
    description: 'Comprehensive exercise guide for de Quervain\'s tenosynovitis relief and prevention.',
    type: 'article',
  },
};

export default function DeQuervainExercises() {
  return (
    <BlogPost
      title="De Quervain's Tenosynovitis Exercises: Heal Thumb and Wrist Pain"
      publishedDate="2026-03-12"
      readTime="8 min read"
      tags={["Wrist", "Hand", "Rehabilitation", "Tendinitis"]}
    >
      <p className="lead">
        That sharp pain on the thumb side of your wrist when you grip, twist, or 
        pick things up? It&apos;s likely de Quervain&apos;s tenosynovitis—inflammation of the 
        tendons that control your thumb. Also called &quot;mommy thumb&quot; (common in new 
        parents) or &quot;gamer&apos;s thumb,&quot; it responds well to targeted exercises and 
        activity modification.
      </p>

      <h2>Understanding De Quervain&apos;s Tenosynovitis</h2>
      <p>
        Two tendons (abductor pollicis longus and extensor pollicis brevis) run through 
        a tunnel on the thumb side of your wrist. When irritated, the tunnel&apos;s sheath 
        swells, creating friction and pain every time you move your thumb.
      </p>

      <h3>Common Causes</h3>
      <ul>
        <li><strong>Repetitive thumb motions:</strong> Texting, gaming, knitting, gardening</li>
        <li><strong>Lifting with thumbs:</strong> Picking up babies, heavy pots, luggage</li>
        <li><strong>Pregnancy/postpartum:</strong> Hormonal changes plus new lifting demands</li>
        <li><strong>Awkward wrist positions:</strong> Prolonged deviation during activities</li>
        <li><strong>Direct trauma:</strong> Hits or falls on the hand</li>
      </ul>

      <h3>Diagnostic Test: Finkelstein&apos;s Test</h3>
      <ol>
        <li>Make a fist with your thumb tucked inside your fingers</li>
        <li>Bend your wrist toward your pinky side (ulnar deviation)</li>
        <li>If this reproduces your pain sharply, the test is positive</li>
      </ol>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">Early Intervention Matters</p>
        <p className="text-yellow-700">
          De Quervain&apos;s can become chronic if ignored. The earlier you address it 
          with rest, modification, and exercises, the faster it resolves. Don&apos;t 
          push through the pain—it will only get worse.
        </p>
      </div>

      <h2>Phase 1: Rest and Protection</h2>
      <p>
        In the acute phase, the priority is reducing inflammation and avoiding 
        aggravating movements.
      </p>

      <h3>Activity Modifications</h3>
      <ul>
        <li><strong>Avoid thumbs-out grip:</strong> Keep thumbs alongside fingers when lifting</li>
        <li><strong>Use both hands:</strong> Don&apos;t carry heavy objects one-handed</li>
        <li><strong>Modify phone use:</strong> Use voice-to-text, put phone on speaker</li>
        <li><strong>Scoop, don&apos;t grab:</strong> When picking up babies, scoop under the body</li>
        <li><strong>Avoid pinching:</strong> Use larger grips on tools, utensils, pens</li>
      </ul>

      <h3>Thumb Spica Splint</h3>
      <p>
        A splint that immobilizes the thumb and wrist can provide significant relief:
      </p>
      <ul>
        <li>Wear it especially at night (prevents awkward positions while sleeping)</li>
        <li>During the day for aggravating activities</li>
        <li>Remove for exercises (unless too painful)</li>
        <li>Don&apos;t wear 24/7 long-term—this can cause stiffness</li>
      </ul>

      <h3>Ice</h3>
      <p>
        Apply ice to the painful area for 15-20 minutes, several times daily. 
        Ice massage can be particularly effective—freeze water in a paper cup, 
        peel back the top, and rub the ice directly on the wrist.
      </p>

      <h2>Phase 2: Gentle Stretching</h2>
      <p>
        Once acute pain decreases, gentle stretching helps maintain mobility and 
        reduce tension on the tendons.
      </p>

      <h3>Finkelstein Stretch (Gentle)</h3>
      <p>
        The same position as the test, but used as a controlled stretch:
      </p>
      <ol>
        <li>Make a fist with thumb tucked inside fingers</li>
        <li>Gently bend wrist toward pinky side</li>
        <li>Stop when you feel a stretch—NOT sharp pain</li>
        <li>Hold 15-30 seconds</li>
        <li>Repeat 3-5 times, several times daily</li>
      </ol>
      <p>
        <strong>Key:</strong> This should produce a stretching sensation, not reproduce 
        your acute pain. If it&apos;s too painful, skip it and return to it later.
      </p>

      <h3>Thumb Extension Stretch</h3>
      <ol>
        <li>Place your palm flat on a table</li>
        <li>Gently lift your thumb away from the table while keeping other fingers down</li>
        <li>Hold 5-10 seconds</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Prayer Stretch</h3>
      <p>
        General wrist flexibility:
      </p>
      <ol>
        <li>Press palms together in front of chest</li>
        <li>Slowly lower hands while keeping palms together</li>
        <li>Feel stretch in wrists and forearms</li>
        <li>Hold 15-30 seconds</li>
      </ol>

      <h3>Reverse Prayer Stretch</h3>
      <ol>
        <li>Press backs of hands together, fingers pointing down</li>
        <li>Gently raise hands while keeping contact</li>
        <li>Feel stretch on top of wrists</li>
        <li>Hold 15-30 seconds</li>
      </ol>

      <h2>Phase 3: Strengthening Exercises</h2>
      <p>
        Once pain has significantly decreased, gradually strengthen the tendons 
        to prevent recurrence.
      </p>

      <h3>Isometric Thumb Extension</h3>
      <p>
        Start here—strengthening without movement:
      </p>
      <ol>
        <li>Place palm flat on table, fingers relaxed</li>
        <li>Place other hand on top of thumb</li>
        <li>Try to lift thumb against resistance (thumb doesn&apos;t actually move)</li>
        <li>Hold 5-10 seconds, moderate effort</li>
        <li>10 reps, 3 sets</li>
      </ol>

      <h3>Resisted Thumb Extension</h3>
      <p>
        Progress when isometrics are pain-free:
      </p>
      <ol>
        <li>Place a rubber band around all five fingertips</li>
        <li>Spread thumb away from fingers against the band&apos;s resistance</li>
        <li>Return slowly with control</li>
        <li>15-20 reps, 2-3 sets</li>
      </ol>

      <h3>Eccentric Wrist Extension</h3>
      <p>
        Eccentrics (lengthening under load) are particularly helpful for tendon healing:
      </p>
      <ol>
        <li>Rest forearm on table, hand hanging off edge, palm down</li>
        <li>Hold a light weight (1-2 lbs) or can of soup</li>
        <li>Use your other hand to lift the weight into wrist extension</li>
        <li>Slowly lower the weight (3-5 seconds) using only the affected wrist</li>
        <li>Use other hand to lift again—don&apos;t lift with affected wrist</li>
        <li>3 sets of 10-15 reps</li>
      </ol>

      <h3>Radial Deviation Strengthening</h3>
      <p>
        Strengthens muscles that work alongside the affected tendons:
      </p>
      <ol>
        <li>Hold a hammer or weighted rod at the end (handle toward you)</li>
        <li>Rest forearm on table with thumb pointing up</li>
        <li>Slowly rotate wrist so hammer tips up toward thumb side</li>
        <li>Lower with control</li>
        <li>2-3 sets of 10-15 reps</li>
      </ol>

      <h3>Grip Strengthening (Later Phase)</h3>
      <p>
        Once pain is minimal, rebuild overall grip strength:
      </p>
      <ol>
        <li>Use a stress ball or putty</li>
        <li>Squeeze and hold for 5-10 seconds</li>
        <li>10-15 reps</li>
        <li>Ensure this doesn&apos;t reproduce thumb/wrist pain</li>
      </ol>

      <h2>Nerve Glides</h2>
      <p>
        The radial nerve runs near the affected tendons. Gentle nerve glides can 
        help if you have symptoms radiating up your forearm.
      </p>

      <h3>Radial Nerve Glide</h3>
      <ol>
        <li>Stand with arm at side</li>
        <li>Make a fist with thumb wrapped inside</li>
        <li>Bend wrist down (flexion)</li>
        <li>Turn arm so palm faces behind you (internal rotation)</li>
        <li>Slowly tilt head away from that side</li>
        <li>You should feel a stretch along the outer arm</li>
        <li>Hold 5 seconds, release, repeat 10 times</li>
        <li>Perform gently—never force into pain</li>
      </ol>

      <h2>Daily Exercise Routine</h2>

      <h3>Acute Phase (3-5 minutes, 3-4x daily)</h3>
      <ol>
        <li>Ice: 15-20 minutes</li>
        <li>Gentle thumb movements: 10 circles each direction</li>
        <li>Prayer stretch: 30 seconds</li>
        <li>Reverse prayer: 30 seconds</li>
        <li>Isometric thumb extension: 5 × 5-second holds</li>
      </ol>

      <h3>Strengthening Phase (10-15 minutes, daily)</h3>
      <ol>
        <li>Finkelstein stretch: 3 × 30 seconds</li>
        <li>Thumb extension stretch: 10 reps</li>
        <li>Prayer and reverse prayer: 30 sec each</li>
        <li>Resisted thumb extension: 3 × 15</li>
        <li>Eccentric wrist extension: 3 × 12</li>
        <li>Radial deviation: 2 × 12</li>
        <li>Radial nerve glide: 10 reps</li>
        <li>Grip strengthening: 2 × 10 (if tolerated)</li>
      </ol>

      <h2>Ergonomic Modifications</h2>

      <h3>For Phone/Computer Use</h3>
      <ul>
        <li>Use voice-to-text when possible</li>
        <li>Hold phone with both hands</li>
        <li>Rest phone on a surface rather than holding</li>
        <li>Use a stylus instead of thumbs</li>
        <li>Take frequent breaks from texting/typing</li>
      </ul>

      <h3>For New Parents</h3>
      <ul>
        <li>Scoop baby under bottom and head—avoid grabbing under armpits</li>
        <li>Keep wrists straight when lifting (not bent)</li>
        <li>Use a nursing pillow to support baby&apos;s weight</li>
        <li>Alternate which hand you use for repetitive tasks</li>
        <li>Ask for help with lifting when possible</li>
      </ul>

      <h3>For Manual Work</h3>
      <ul>
        <li>Use tools with larger, padded handles</li>
        <li>Avoid repetitive pinching motions</li>
        <li>Take breaks every 15-20 minutes during repetitive tasks</li>
        <li>Use power tools when available instead of manual</li>
      </ul>

      <h2>Recovery Timeline</h2>
      <ul>
        <li><strong>Mild cases:</strong> 2-4 weeks with rest and modification</li>
        <li><strong>Moderate cases:</strong> 4-8 weeks with consistent treatment</li>
        <li><strong>Severe/chronic cases:</strong> 3-6 months, may need medical intervention</li>
      </ul>

      <h2>When to Seek Medical Help</h2>
      <ul>
        <li>No improvement after 4-6 weeks of conservative treatment</li>
        <li>Severe pain that limits daily activities</li>
        <li>Visible swelling that doesn&apos;t decrease</li>
        <li>Numbness or tingling in thumb or hand</li>
        <li>Locking or catching of the thumb</li>
      </ul>

      <h3>Medical Treatment Options</h3>
      <ul>
        <li><strong>Corticosteroid injection:</strong> Highly effective for de Quervain&apos;s (70-80% success)</li>
        <li><strong>Physical therapy:</strong> Hands-on treatment plus guided exercises</li>
        <li><strong>Surgery:</strong> Rarely needed, reserved for cases that don&apos;t respond to other treatment</li>
      </ul>

      <h2>Prevention Tips</h2>
      <ul>
        <li>Vary repetitive tasks—don&apos;t do the same motion for extended periods</li>
        <li>Use proper lifting technique (thumbs alongside fingers, not gripping)</li>
        <li>Maintain good wrist posture—avoid prolonged bent positions</li>
        <li>Strengthen forearm and hand muscles regularly</li>
        <li>Address pain early—don&apos;t wait until it becomes severe</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Rest isn&apos;t enough:</strong> Activity modification plus exercises is more effective than rest alone</li>
        <li><strong>Splinting helps:</strong> Especially at night and during aggravating activities</li>
        <li><strong>Progress gradually:</strong> Move from isometric to resisted to eccentric exercises</li>
        <li><strong>Modify your activities:</strong> Change HOW you do things, not just whether you do them</li>
        <li><strong>Be patient:</strong> Tendon healing takes time—expect weeks, not days</li>
        <li><strong>Injections work:</strong> If conservative treatment fails, cortisone injections are very effective</li>
      </ul>

      <p>
        De Quervain&apos;s tenosynovitis is painful and frustrating, but it responds well 
        to proper treatment. The combination of rest, activity modification, and progressive 
        exercise resolves most cases within 4-8 weeks. If you&apos;re a new parent, gamer, 
        or anyone doing repetitive thumb work, pay attention to early warning signs 
        and address them before they become chronic.
      </p>
    </BlogPost>
  );
}
