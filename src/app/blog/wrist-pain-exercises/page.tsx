import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Wrist Pain Exercises: Strengthen and Relieve Wrist Pain | FoundationalRehab',
  description: 'Exercises for wrist pain from typing, lifting, and daily activities. Learn stretches, strengthening, and ergonomic tips for healthy wrists.',
  keywords: ['wrist pain exercises', 'wrist strengthening', 'wrist stretches', 'wrist pain from typing', 'wrist mobility'],
  openGraph: {
    title: 'Wrist Pain Exercises: Strengthen and Relieve Wrist Pain',
    description: 'Comprehensive guide to wrist pain relief through exercise and ergonomics.',
    type: 'article',
  },
};

export default function WristPainExercises() {
  return (
    <BlogPost
      title="Wrist Pain Exercises: Strengthen and Relieve Wrist Pain"
      publishedDate="2026-03-12"
      readTime="8 min read"
      tags={["Wrist", "Hand", "Rehabilitation", "Office Health"]}
    >
      <p className="lead">
        Your wrists take a beating—typing, lifting, gripping, scrolling. When they 
        start to hurt, everything becomes harder. Whether your wrist pain comes from 
        overuse, weakness, or poor ergonomics, targeted exercises can help restore 
        strength and eliminate pain.
      </p>

      <h2>Common Causes of Wrist Pain</h2>
      <ul>
        <li><strong>Overuse:</strong> Repetitive motions (typing, gaming, manual work)</li>
        <li><strong>Weakness:</strong> Insufficient strength for demands placed on wrists</li>
        <li><strong>Poor ergonomics:</strong> Awkward wrist positions during work</li>
        <li><strong>Tight forearm muscles:</strong> Tension transfers to the wrist</li>
        <li><strong>Conditions:</strong> Carpal tunnel, tendinitis, arthritis, ganglion cysts</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">When to See a Doctor</p>
        <p className="text-yellow-700">
          Seek evaluation if you have numbness/tingling (especially at night), 
          significant swelling, inability to grip objects, or pain that doesn&apos;t 
          improve with rest and exercise after 2-3 weeks.
        </p>
      </div>

      <h2>Stretches for Wrist Pain</h2>
      <p>
        Stretching relieves tension and maintains mobility. Do these gently—never 
        force into pain.
      </p>

      <h3>Wrist Flexor Stretch</h3>
      <ol>
        <li>Extend your arm in front, palm up</li>
        <li>Use other hand to gently pull fingers toward floor</li>
        <li>Keep elbow straight</li>
        <li>Feel stretch on inner forearm</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h3>Wrist Extensor Stretch</h3>
      <ol>
        <li>Extend your arm in front, palm down</li>
        <li>Use other hand to gently push hand down and toward you</li>
        <li>Keep elbow straight</li>
        <li>Feel stretch on outer forearm</li>
        <li>Hold 20-30 seconds each side</li>
      </ol>

      <h3>Prayer Stretch</h3>
      <ol>
        <li>Press palms together in front of chest</li>
        <li>Slowly lower hands while keeping palms together</li>
        <li>Stop when you feel stretch in wrists</li>
        <li>Hold 20-30 seconds</li>
      </ol>

      <h3>Reverse Prayer Stretch</h3>
      <ol>
        <li>Press backs of hands together, fingers pointing down</li>
        <li>Gently raise hands while maintaining contact</li>
        <li>Feel stretch on top of wrists</li>
        <li>Hold 20-30 seconds</li>
      </ol>

      <h3>Tabletop Stretch</h3>
      <ol>
        <li>Place palms flat on table, fingers pointing toward you</li>
        <li>Gently lean back, keeping palms flat</li>
        <li>Feel stretch in wrists and forearms</li>
        <li>Hold 15-20 seconds</li>
      </ol>

      <h2>Strengthening Exercises</h2>
      <p>
        Stronger wrists handle stress better. Start with light resistance and progress.
      </p>

      <h3>Wrist Curls (Flexion)</h3>
      <ol>
        <li>Rest forearm on table or thigh, palm up, wrist hanging off edge</li>
        <li>Hold light weight (1-5 lbs) or resistance band</li>
        <li>Curl wrist upward</li>
        <li>Lower slowly (3 seconds down)</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Reverse Wrist Curls (Extension)</h3>
      <ol>
        <li>Same position, but palm down</li>
        <li>Raise back of hand toward ceiling</li>
        <li>Lower slowly</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Radial Deviation</h3>
      <ol>
        <li>Hold a hammer or weighted rod at the end (heavy end away from you)</li>
        <li>Rest forearm on table, thumb pointing up</li>
        <li>Tip the weight upward (toward thumb side)</li>
        <li>Lower with control</li>
        <li>2-3 sets of 10-12</li>
      </ol>

      <h3>Ulnar Deviation</h3>
      <ol>
        <li>Same position as radial deviation</li>
        <li>Tip the weight downward (toward pinky side)</li>
        <li>Raise with control</li>
        <li>2-3 sets of 10-12</li>
      </ol>

      <h3>Pronation/Supination</h3>
      <ol>
        <li>Hold a hammer or weighted rod in the middle</li>
        <li>Elbow bent 90°, arm at side</li>
        <li>Rotate forearm so palm faces up (supination)</li>
        <li>Then rotate so palm faces down (pronation)</li>
        <li>2-3 sets of 15 rotations</li>
      </ol>

      <h3>Grip Strengthening</h3>
      <ol>
        <li>Squeeze a stress ball or grip strengthener</li>
        <li>Hold 5-10 seconds</li>
        <li>Release completely</li>
        <li>3 sets of 10-15</li>
      </ol>

      <h3>Finger Extensions</h3>
      <ol>
        <li>Place a rubber band around all five fingers</li>
        <li>Spread fingers apart against the resistance</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h2>Mobility Exercises</h2>
      <p>
        Maintain full wrist range of motion with these daily exercises.
      </p>

      <h3>Wrist Circles</h3>
      <ol>
        <li>Make a gentle fist</li>
        <li>Circle wrist in both directions</li>
        <li>10-15 circles each direction</li>
      </ol>

      <h3>Wrist Flexion/Extension</h3>
      <ol>
        <li>Arm extended, palm down</li>
        <li>Move hand up (extension) then down (flexion)</li>
        <li>Move through full comfortable range</li>
        <li>15-20 reps</li>
      </ol>

      <h3>Radial/Ulnar Deviation</h3>
      <ol>
        <li>Arm extended, thumb pointing up</li>
        <li>Move hand toward thumb (radial) then pinky (ulnar)</li>
        <li>15-20 reps</li>
      </ol>

      <h2>Nerve Glides</h2>
      <p>
        If you have tingling or numbness, nerve glides may help. Perform gently.
      </p>

      <h3>Median Nerve Glide</h3>
      <ol>
        <li>Start with arm at side, elbow bent, wrist bent forward</li>
        <li>Slowly straighten elbow while extending wrist back</li>
        <li>Move through range smoothly—never force</li>
        <li>10-15 reps each arm</li>
      </ol>

      <h3>Ulnar Nerve Glide</h3>
      <ol>
        <li>Make an &quot;OK&quot; sign with thumb and index finger</li>
        <li>Flip hand to look through the OK like glasses</li>
        <li>Extend arm out to side</li>
        <li>Tilt head away from extended arm</li>
        <li>Hold 3-5 seconds, release</li>
        <li>10 reps each side</li>
      </ol>

      <h2>Daily Routine for Wrist Health</h2>

      <h3>Morning Wake-Up (2-3 minutes)</h3>
      <ol>
        <li>Wrist circles: 10 each direction</li>
        <li>Flexion/extension: 15 reps</li>
        <li>Prayer stretch: 20 seconds</li>
        <li>Finger spreads: 10 reps</li>
      </ol>

      <h3>Work Break (Every 1-2 Hours, 1-2 minutes)</h3>
      <ol>
        <li>Wrist flexor stretch: 15 sec each</li>
        <li>Wrist extensor stretch: 15 sec each</li>
        <li>Wrist circles: 10 each direction</li>
        <li>Shake hands out</li>
      </ol>

      <h3>Strengthening Routine (3x per week, 10-15 minutes)</h3>
      <ol>
        <li>Wrist curls: 3 × 12</li>
        <li>Reverse wrist curls: 3 × 12</li>
        <li>Radial deviation: 2 × 10</li>
        <li>Ulnar deviation: 2 × 10</li>
        <li>Pronation/supination: 2 × 15</li>
        <li>Grip squeezes: 3 × 10</li>
        <li>Finger extensions: 3 × 15</li>
        <li>All stretches: 20 sec each</li>
      </ol>

      <h2>Ergonomic Tips</h2>

      <h3>Typing/Computer Work</h3>
      <ul>
        <li>Keep wrists in neutral—not bent up, down, or to the side</li>
        <li>Keyboard at elbow height or slightly below</li>
        <li>Use a wrist rest for pauses, not while typing</li>
        <li>Consider an ergonomic keyboard or vertical mouse</li>
        <li>Take breaks every 30-60 minutes</li>
      </ul>

      <h3>Phone Use</h3>
      <ul>
        <li>Avoid excessive thumb scrolling/texting</li>
        <li>Use voice-to-text when possible</li>
        <li>Hold phone with both hands</li>
        <li>Rest phone on a surface when watching videos</li>
      </ul>

      <h3>Lifting</h3>
      <ul>
        <li>Keep wrists straight when gripping</li>
        <li>Don&apos;t use a thumbs-out grip for heavy objects</li>
        <li>Use your whole hand, not just fingers</li>
        <li>Build grip strength to handle load demands</li>
      </ul>

      <h2>Exercises for Specific Conditions</h2>

      <h3>Carpal Tunnel</h3>
      <ul>
        <li>Nerve glides (above)</li>
        <li>Wrist stretches (avoid extreme positions)</li>
        <li>Strengthen grip and forearm</li>
        <li>Night splint keeps wrist neutral while sleeping</li>
      </ul>

      <h3>Wrist Tendinitis</h3>
      <ul>
        <li>Ice for acute pain</li>
        <li>Eccentric strengthening (slow lowering phase)</li>
        <li>Gradual loading—don&apos;t rush back</li>
        <li>Address contributing factors (ergonomics, overuse)</li>
      </ul>

      <h3>Weightlifting Wrist Pain</h3>
      <ul>
        <li>Use wrist wraps for heavy pressing (but not all the time)</li>
        <li>Strengthen wrists without wraps for lighter work</li>
        <li>Check grip width—too narrow or wide causes wrist strain</li>
        <li>Front rack mobility for cleans/front squats</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Stretch tight muscles:</strong> Forearm tension transfers to the wrist</li>
        <li><strong>Strengthen all directions:</strong> Flexion, extension, and rotation all matter</li>
        <li><strong>Take breaks:</strong> Repetitive strain needs periodic relief</li>
        <li><strong>Fix ergonomics:</strong> Neutral wrist position reduces strain</li>
        <li><strong>Nerve glides help:</strong> If you have tingling, include them</li>
        <li><strong>Build grip strength:</strong> Strong grip protects the wrist</li>
        <li><strong>Be consistent:</strong> Daily mobility + regular strengthening = healthy wrists</li>
      </ul>

      <p>
        Wrist pain often comes from the combination of overuse, weakness, and poor 
        positioning. Address all three—stretch what&apos;s tight, strengthen what&apos;s weak, 
        and fix your ergonomics. Most wrist pain responds well to consistent exercise 
        within a few weeks. If it doesn&apos;t improve, get it evaluated to rule out 
        conditions that need specific treatment.
      </p>
    </BlogPost>
  );
}
