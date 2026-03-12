import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Return to Running After Injury: Safe Comeback Guide | FoundationalRehab',
  description: 'A structured guide to returning to running after injury. Learn the run-walk method, progression timelines, and signs you\'re ready to increase mileage.',
  keywords: ['return to running', 'running after injury', 'run walk method', 'comeback from injury', 'running progression'],
  openGraph: {
    title: 'Return to Running After Injury: Safe Comeback Guide',
    description: 'Structured protocols for safely returning to running after injury.',
    type: 'article',
  },
};

export default function ReturnToRunningAfterInjury() {
  return (
    <BlogPost
      title="Return to Running After Injury: Safe Comeback Guide"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Running", "Return to Sport", "Rehabilitation"]}
    >
      <p className="lead">
        You&apos;ve rehabbed the injury, the pain is mostly gone, and you&apos;re itching to 
        run again. But rush it, and you&apos;ll be back on the sidelines. Here&apos;s how to 
        return to running safely—with protocols that actually work.
      </p>

      <h2>Before You Start: Are You Ready?</h2>
      <p>
        Running is high-impact. Before attempting to run, you should meet these criteria:
      </p>

      <h3>General Criteria</h3>
      <ul>
        <li>Pain-free walking for 30+ minutes</li>
        <li>Full range of motion in the injured area</li>
        <li>Good strength (can do single-leg exercises without pain)</li>
        <li>Can hop on the injured leg without pain</li>
        <li>No swelling after activity</li>
        <li>Clearance from healthcare provider if applicable</li>
      </ul>

      <h3>The Hop Test</h3>
      <p>
        A simple self-test: hop on your injured leg 10-15 times. If this causes 
        pain, you&apos;re not ready to run.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">The Golden Rule</p>
        <p className="text-yellow-700">
          If you&apos;re not sure you&apos;re ready, you&apos;re probably not ready. Another week 
          of preparation is better than another month of re-injury.
        </p>
      </div>

      <h2>The Run-Walk Method</h2>
      <p>
        The run-walk method is the safest way to return to running. It allows 
        progressive loading while giving tissues recovery intervals.
      </p>

      <h3>Week 1</h3>
      <ul>
        <li>Walk 4 minutes, jog 1 minute</li>
        <li>Repeat 4-5 times (20-25 min total)</li>
        <li>3 sessions this week (non-consecutive days)</li>
        <li>Jog at conversational pace—easy enough to talk</li>
      </ul>

      <h3>Week 2</h3>
      <ul>
        <li>Walk 3 minutes, jog 2 minutes</li>
        <li>Repeat 4-5 times (20-25 min total)</li>
        <li>3-4 sessions this week</li>
      </ul>

      <h3>Week 3</h3>
      <ul>
        <li>Walk 2 minutes, jog 3 minutes</li>
        <li>Repeat 4-5 times (20-25 min total)</li>
        <li>3-4 sessions this week</li>
      </ul>

      <h3>Week 4</h3>
      <ul>
        <li>Walk 1 minute, jog 4 minutes</li>
        <li>Repeat 4-5 times (20-25 min total)</li>
        <li>4 sessions this week</li>
      </ul>

      <h3>Week 5</h3>
      <ul>
        <li>Continuous jog 15-20 minutes</li>
        <li>3-4 sessions</li>
        <li>Still at easy/conversational pace</li>
      </ul>

      <h3>Week 6+</h3>
      <ul>
        <li>Increase duration by 5-10% per week</li>
        <li>Build to your pre-injury volume over several weeks/months</li>
        <li>Add intensity only after volume is restored</li>
      </ul>

      <h2>The 10% Rule (With Caveats)</h2>
      <p>
        The traditional advice is to increase weekly mileage by no more than 10%. 
        This is a reasonable guideline, but apply common sense:
      </p>
      <ul>
        <li>10% of 5 miles is only 0.5 miles—bigger jumps are fine at low volumes</li>
        <li>10% of 50 miles is 5 miles—that might be too much for some</li>
        <li>Consider 10% as a ceiling, not a target</li>
        <li>Some weeks, maintain or even reduce slightly</li>
      </ul>

      <h2>Monitoring Your Return</h2>

      <h3>Good Signs (Keep Progressing)</h3>
      <ul>
        <li>No pain during or after running</li>
        <li>No increased stiffness next morning</li>
        <li>No swelling</li>
        <li>Running feels easier over time</li>
        <li>Eager to run more (but holding back appropriately)</li>
      </ul>

      <h3>Warning Signs (Pull Back)</h3>
      <ul>
        <li>Pain during running</li>
        <li>Pain after running that lasts more than 24 hours</li>
        <li>Pain that gets worse as the run continues</li>
        <li>Swelling</li>
        <li>Altered gait or compensating</li>
        <li>Increasing stiffness over time</li>
      </ul>

      <h3>The Next-Day Test</h3>
      <p>
        The most important assessment: how do you feel the morning after a run?
      </p>
      <ul>
        <li><strong>Same as before running:</strong> Good—maintain or progress</li>
        <li><strong>Slightly sore but improves quickly:</strong> Acceptable—maintain current level</li>
        <li><strong>Noticeably worse:</strong> You did too much—back off</li>
      </ul>

      <h2>Return Protocols by Injury</h2>

      <h3>Plantar Fasciitis</h3>
      <ul>
        <li>Pain-free walking and single-leg heel raises first</li>
        <li>Start with very short run intervals (30-60 seconds)</li>
        <li>Run on soft surfaces initially</li>
        <li>Continue stretching and strengthening during return</li>
        <li>Often takes longer than expected—be patient</li>
      </ul>

      <h3>IT Band Syndrome</h3>
      <ul>
        <li>Complete hip strengthening program first</li>
        <li>Start on flat surfaces—avoid hills and cambered roads</li>
        <li>Increase frequency before duration</li>
        <li>Continue hip exercises 3x/week during return</li>
      </ul>

      <h3>Shin Splints</h3>
      <ul>
        <li>Pain-free hopping test required</li>
        <li>Start with low-impact intervals (run-walk on treadmill or track)</li>
        <li>Avoid hard surfaces initially</li>
        <li>Progress to longer continuous runs slowly</li>
        <li>Consider gait analysis if recurring</li>
      </ul>

      <h3>Achilles Tendinopathy</h3>
      <ul>
        <li>Complete eccentric loading program first</li>
        <li>Single-leg heel raises should be pain-free (25+ reps)</li>
        <li>Start with flat running—no hills</li>
        <li>Continue calf strengthening during return</li>
        <li>Often requires 12+ weeks to fully return</li>
      </ul>

      <h3>Runner&apos;s Knee (PFPS)</h3>
      <ul>
        <li>Single-leg squat should be pain-free</li>
        <li>Step-downs should be controlled without pain</li>
        <li>Start on flat surfaces</li>
        <li>Avoid downhill running initially</li>
        <li>Continue quad and hip strengthening</li>
      </ul>

      <h3>Stress Fracture</h3>
      <ul>
        <li>Medical clearance required</li>
        <li>Typically 6-8 weeks of no running minimum</li>
        <li>Very gradual return—slower than other injuries</li>
        <li>Start with walk-jog intervals every other day</li>
        <li>Consider AlterG (anti-gravity treadmill) if available</li>
      </ul>

      <h2>Cross-Training During Return</h2>
      <p>
        Maintain fitness while limiting running impact:
      </p>
      <ul>
        <li><strong>Pool running:</strong> Zero impact, sport-specific</li>
        <li><strong>Cycling:</strong> Low impact, builds leg endurance</li>
        <li><strong>Elliptical:</strong> Low impact, somewhat running-specific</li>
        <li><strong>Swimming:</strong> Zero impact, full-body fitness</li>
        <li><strong>Rowing:</strong> Low impact, builds cardiovascular fitness</li>
      </ul>

      <h2>Form and Cadence</h2>
      <p>
        Your return is a good time to optimize running form:
      </p>

      <h3>Increase Cadence</h3>
      <ul>
        <li>Aim for 170-180 steps per minute</li>
        <li>Higher cadence = shorter stride = less impact per step</li>
        <li>Use a metronome app to practice</li>
        <li>Increase gradually (5% at a time)</li>
      </ul>

      <h3>Avoid Overstriding</h3>
      <ul>
        <li>Foot should land under your body, not in front</li>
        <li>Landing ahead acts as a brake and increases impact</li>
        <li>Think &quot;quick, light feet&quot;</li>
      </ul>

      <h2>Sample Return-to-Running Plan</h2>
      <p>
        For someone recovering from a moderate soft tissue injury (e.g., mild hamstring 
        strain, resolved IT band syndrome):
      </p>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Week</th>
            <th className="border border-gray-300 p-2">Session Format</th>
            <th className="border border-gray-300 p-2">Frequency</th>
            <th className="border border-gray-300 p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">4 min walk / 1 min jog × 5</td>
            <td className="border border-gray-300 p-2">3x</td>
            <td className="border border-gray-300 p-2">Very easy pace</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">3 min walk / 2 min jog × 5</td>
            <td className="border border-gray-300 p-2">3x</td>
            <td className="border border-gray-300 p-2">Check next-day response</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">2 min walk / 3 min jog × 5</td>
            <td className="border border-gray-300 p-2">4x</td>
            <td className="border border-gray-300 p-2">Add one session</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">1 min walk / 4 min jog × 5</td>
            <td className="border border-gray-300 p-2">4x</td>
            <td className="border border-gray-300 p-2">Almost continuous</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5</td>
            <td className="border border-gray-300 p-2">20 min continuous</td>
            <td className="border border-gray-300 p-2">4x</td>
            <td className="border border-gray-300 p-2">Easy pace throughout</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">6</td>
            <td className="border border-gray-300 p-2">25 min continuous</td>
            <td className="border border-gray-300 p-2">4x</td>
            <td className="border border-gray-300 p-2">Build duration</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">7-12</td>
            <td className="border border-gray-300 p-2">Increase 10%/week</td>
            <td className="border border-gray-300 p-2">4-5x</td>
            <td className="border border-gray-300 p-2">Build to pre-injury volume</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Meet criteria first:</strong> Pain-free walking, hopping, and basic strength</li>
        <li><strong>Use run-walk intervals:</strong> Progressive loading with built-in recovery</li>
        <li><strong>Monitor the next day:</strong> How you feel 24 hours later matters most</li>
        <li><strong>10% is a ceiling:</strong> Some weeks, maintain or reduce</li>
        <li><strong>Volume before intensity:</strong> Build mileage first, add speed later</li>
        <li><strong>Cross-train:</strong> Maintain fitness while limiting impact</li>
        <li><strong>Continue strength work:</strong> The exercises that got you healthy keep you healthy</li>
        <li><strong>Patience pays:</strong> A few extra weeks now beats months of re-injury</li>
      </ul>

      <p>
        Returning to running after injury requires patience, structure, and honest 
        self-assessment. The run-walk method and gradual progression have helped 
        countless runners come back stronger than before. Trust the process, listen 
        to your body, and you&apos;ll be logging miles again soon.
      </p>
    </BlogPost>
  );
}
