import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Exercise After Back Surgery: Safe Recovery Guide | FoundationalRehab',
  description: 'Guidelines for exercising after lumbar fusion, discectomy, and laminectomy. Learn safe movements, progressions, and precautions for spinal surgery recovery.',
  keywords: ['exercise after back surgery', 'lumbar fusion recovery', 'discectomy exercises', 'spine surgery rehab', 'post spinal surgery'],
  openGraph: {
    title: 'Exercise After Back Surgery: Safe Recovery Guide',
    description: 'Safe exercise progressions for recovery from spinal surgery.',
    type: 'article',
  },
};

export default function ExerciseAfterBackSurgery() {
  return (
    <BlogPost
      title="Exercise After Back Surgery: Safe Recovery Guide"
      publishedDate="2026-03-12"
      readTime="10 min read"
      tags={["Back Pain", "Post-Surgery", "Rehabilitation"]}
    >
      <p className="lead">
        Back surgery can be life-changing—but the surgery itself is just the beginning. 
        Your recovery depends heavily on appropriate exercise and rehabilitation. Here&apos;s 
        how to progress safely after common spinal procedures.
      </p>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <p className="font-semibold text-red-800">Important Disclaimer</p>
        <p className="text-red-700">
          Every surgery and patient is different. This guide provides general information, 
          but your surgeon&apos;s specific instructions take precedence. Follow their protocol 
          and attend all follow-up appointments.
        </p>
      </div>

      <h2>Common Back Surgeries</h2>

      <h3>Discectomy/Microdiscectomy</h3>
      <p>
        Removal of herniated disc material pressing on nerves. Generally faster 
        recovery than fusion; focuses on protecting the healing disc while 
        rebuilding function.
      </p>

      <h3>Laminectomy</h3>
      <p>
        Removal of part of the vertebral bone (lamina) to relieve pressure on 
        spinal cord or nerves. Creates more space but may affect stability.
      </p>

      <h3>Spinal Fusion</h3>
      <p>
        Joining two or more vertebrae together with bone graft and hardware. 
        Longest recovery—the bone must fuse solidly (3-6+ months). Most restrictive 
        early precautions.
      </p>

      <h2>General Timeline</h2>

      <h3>Week 1-2: Initial Recovery</h3>
      <ul>
        <li>Focus on rest and wound healing</li>
        <li>Walking is encouraged (short, frequent walks)</li>
        <li>Avoid bending, lifting, twisting (BLT precautions)</li>
        <li>Log roll technique for getting in/out of bed</li>
      </ul>

      <h3>Weeks 2-6: Early Mobility</h3>
      <ul>
        <li>Gradually increase walking distance</li>
        <li>Begin gentle exercises as cleared by surgeon</li>
        <li>Continue avoiding BLT movements</li>
        <li>Physical therapy often starts during this phase</li>
      </ul>

      <h3>Weeks 6-12: Progressive Loading</h3>
      <ul>
        <li>More exercises added based on healing</li>
        <li>Precautions may be loosened</li>
        <li>Begin core stabilization program</li>
        <li>For fusion: bone still healing—no heavy lifting</li>
      </ul>

      <h3>3-6+ Months: Return to Activity</h3>
      <ul>
        <li>Gradual return to normal activities</li>
        <li>For fusion: imaging confirms bone healing before progressing</li>
        <li>Full return to exercise/sports varies by procedure and patient</li>
      </ul>

      <h2>Early Phase Exercises (Weeks 2-6)</h2>
      <p>
        These are typically safe after clearance from your surgeon. Start gentle 
        and progress slowly.
      </p>

      <h3>Walking</h3>
      <p>
        The most important exercise early on:
      </p>
      <ul>
        <li>Start with 5-10 minute walks, 3-4 times daily</li>
        <li>Gradually increase duration before intensity</li>
        <li>Flat surfaces initially</li>
        <li>Good footwear with support</li>
      </ul>

      <h3>Ankle Pumps</h3>
      <ol>
        <li>Lying or sitting, pump ankles up and down</li>
        <li>Promotes circulation, prevents blood clots</li>
        <li>20-30 reps, every 1-2 hours while awake</li>
      </ol>

      <h3>Heel Slides</h3>
      <ol>
        <li>Lie on back, slowly slide heel toward buttock</li>
        <li>Keep lower back stable</li>
        <li>Slide back out</li>
        <li>10-15 reps each leg</li>
      </ol>

      <h3>Pelvic Tilts</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Gently flatten lower back against floor</li>
        <li>Hold 5 seconds, release</li>
        <li>10-15 reps</li>
      </ol>

      <h3>Abdominal Bracing</h3>
      <ol>
        <li>Lie on back, knees bent</li>
        <li>Tighten abs as if bracing for a punch</li>
        <li>Keep breathing normally</li>
        <li>Hold 5-10 seconds</li>
        <li>10-15 reps</li>
      </ol>

      <h2>Mid Phase Exercises (Weeks 6-12)</h2>
      <p>
        Progress to these when cleared by your surgeon or physical therapist.
      </p>

      <h3>Bridging</h3>
      <ol>
        <li>Lie on back, knees bent, feet flat</li>
        <li>Tighten abs, squeeze glutes, lift hips</li>
        <li>Keep spine neutral—don&apos;t over-arch</li>
        <li>Hold 5 seconds at top</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Bird Dog (Modified)</h3>
      <ol>
        <li>Hands and knees, spine neutral</li>
        <li>Lift ONE limb at a time (arm OR leg)</li>
        <li>Progress to opposite arm and leg together</li>
        <li>Move slowly with no spinal rotation</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <h3>Dead Bug (Modified)</h3>
      <ol>
        <li>Lie on back, arms toward ceiling, knees bent 90°</li>
        <li>Lower ONE limb at a time</li>
        <li>Keep lower back flat against floor</li>
        <li>Progress to opposite arm and leg</li>
        <li>3 sets of 8-10 each side</li>
      </ol>

      <h3>Side-Lying Hip Abduction</h3>
      <ol>
        <li>Lie on side, spine neutral</li>
        <li>Lift top leg, keeping body still</li>
        <li>3 sets of 12-15 each side</li>
      </ol>

      <h3>Clamshells</h3>
      <ol>
        <li>Side-lying, knees bent 45°</li>
        <li>Keep feet together, lift top knee</li>
        <li>Don&apos;t let pelvis roll back</li>
        <li>3 sets of 15 each side</li>
      </ol>

      <h2>Later Phase Exercises (3+ Months)</h2>
      <p>
        Only progress to these when your surgeon/PT clears you and fusion is 
        confirmed (if applicable).
      </p>

      <h3>Plank (Modified to Full)</h3>
      <ol>
        <li>Start on forearms and knees</li>
        <li>Progress to forearms and toes</li>
        <li>Keep spine neutral—no sagging or piking</li>
        <li>Build from 10-second holds to 30+ seconds</li>
      </ol>

      <h3>Partial Squats</h3>
      <ol>
        <li>Stand with support available</li>
        <li>Squat to 30-45° only</li>
        <li>Keep back straight, weight on heels</li>
        <li>3 sets of 10-12</li>
      </ol>

      <h3>Step-Ups (Low Step)</h3>
      <ol>
        <li>4-6 inch step initially</li>
        <li>Step up, controlling the movement</li>
        <li>Step down with control</li>
        <li>3 sets of 10 each leg</li>
      </ol>

      <h3>Stationary Bike</h3>
      <ol>
        <li>Upright position (not recumbent initially)</li>
        <li>Seat high enough to avoid excessive flexion</li>
        <li>Low resistance</li>
        <li>Start with 10-15 minutes</li>
      </ol>

      <h2>Movements to Avoid</h2>

      <h3>Early Phase (First 6-12 Weeks)</h3>
      <ul>
        <li><strong>Bending forward:</strong> Use hip hinge or squat to pick things up</li>
        <li><strong>Twisting:</strong> Turn your whole body, not just your spine</li>
        <li><strong>Lifting:</strong> Nothing over 5-10 lbs (surgeon&apos;s guidance)</li>
        <li><strong>Sit-ups/crunches:</strong> Excessive spinal flexion under load</li>
        <li><strong>Toe touches:</strong> Loaded spinal flexion</li>
        <li><strong>Running/jumping:</strong> High impact on healing spine</li>
      </ul>

      <h3>Longer Term (Varies by Procedure)</h3>
      <ul>
        <li>Heavy deadlifts and squats (may be restricted long-term after fusion)</li>
        <li>Contact sports (discuss with surgeon)</li>
        <li>High-impact activities (running, jumping—timing varies)</li>
        <li>Extreme spinal positions (deep backbends, extreme rotation)</li>
      </ul>

      <h2>Daily Movement Tips</h2>

      <h3>Log Roll Technique</h3>
      <p>
        For getting in/out of bed:
      </p>
      <ol>
        <li>Keep spine straight as a unit</li>
        <li>Roll onto your side as one piece</li>
        <li>Push up with arms while swinging legs off bed</li>
        <li>Reverse to get back in</li>
      </ol>

      <h3>Sitting</h3>
      <ul>
        <li>Limit sitting to 20-30 minutes at a time initially</li>
        <li>Use lumbar support (rolled towel works)</li>
        <li>Keep feet flat on floor</li>
        <li>Stand and walk briefly before sitting again</li>
      </ul>

      <h3>Standing Up</h3>
      <ol>
        <li>Scoot to edge of chair</li>
        <li>Keep back straight, lean forward from hips</li>
        <li>Push through legs to stand</li>
        <li>Don&apos;t round your back</li>
      </ol>

      <h2>Sample Weekly Schedule</h2>

      <h3>Weeks 4-6 (After Clearance)</h3>
      <p><strong>Daily:</strong></p>
      <ul>
        <li>Walking: 15-20 min, 3-4 times</li>
        <li>Ankle pumps: 20-30 reps, 3-4 times</li>
        <li>Pelvic tilts: 10-15 reps</li>
        <li>Abdominal bracing: 10 × 10-second holds</li>
        <li>Heel slides: 10-15 each leg</li>
      </ul>

      <h3>Weeks 8-12</h3>
      <p><strong>Daily:</strong></p>
      <ul>
        <li>Walking: 20-30 min, 2-3 times</li>
        <li>Core exercises: bridges, bird dog, dead bug</li>
      </ul>

      <p><strong>3x per week:</strong></p>
      <ol>
        <li>Bridges: 3 × 12</li>
        <li>Bird dog: 3 × 10 each side</li>
        <li>Dead bug: 3 × 10 each side</li>
        <li>Clamshells: 3 × 15 each side</li>
        <li>Side-lying hip abduction: 3 × 12 each side</li>
      </ol>

      <h2>Red Flags—When to Call Your Surgeon</h2>
      <ul>
        <li>New or worsening leg weakness</li>
        <li>Loss of bladder or bowel control</li>
        <li>Fever or signs of infection at incision site</li>
        <li>Significant increase in pain</li>
        <li>New numbness or tingling in legs</li>
        <li>Pain that doesn&apos;t respond to prescribed medication</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Follow your surgeon&apos;s protocol:</strong> It takes precedence over general guidelines</li>
        <li><strong>Walking is essential:</strong> The foundation of early recovery</li>
        <li><strong>BLT precautions early:</strong> Avoid bending, lifting, twisting initially</li>
        <li><strong>Core stability is key:</strong> Build the support system for your spine</li>
        <li><strong>Progress slowly:</strong> Better to progress too slowly than too fast</li>
        <li><strong>Fusion takes time:</strong> 3-6+ months for bone to solidify</li>
        <li><strong>Long-term exercise helps:</strong> Staying active protects your surgery results</li>
      </ul>

      <p>
        Recovery from back surgery requires patience and consistency. The exercises 
        feel simple—because they need to be. Your spine is healing, and the goal is 
        to support that process while gradually rebuilding strength and function. 
        Trust the timeline, communicate with your healthcare team, and you&apos;ll give 
        yourself the best chance at a successful outcome.
      </p>
    </BlogPost>
  );
}
