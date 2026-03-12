import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Posterior Tibial Tendonitis Exercises: Rehab Your Arch Support | FoundationalRehab',
  description: 'Evidence-based exercises for posterior tibial tendon dysfunction (PTTD). Learn strengthening progressions to restore arch support and prevent flat foot.',
  keywords: ['posterior tibial tendonitis', 'PTTD exercises', 'tibialis posterior strengthening', 'arch support exercises', 'adult acquired flatfoot'],
  openGraph: {
    title: 'Posterior Tibial Tendonitis Exercises: Rehab Your Arch Support',
    description: 'Comprehensive guide to posterior tibial tendon dysfunction rehabilitation.',
    type: 'article',
  },
};

export default function PosteriorTibialTendonitisExercises() {
  return (
    <BlogPost
      title="Posterior Tibial Tendonitis Exercises: Rehab Your Arch Support"
      publishedDate="2026-03-12"
      readTime="9 min read"
      tags={["Foot Pain", "Ankle", "Rehabilitation", "Tendinitis"]}
    >
      <p className="lead">
        The posterior tibial tendon is the unsung hero of your arch—when it weakens 
        or becomes inflamed, your arch collapses, your ankle rolls in, and pain follows. 
        Left untreated, posterior tibial tendon dysfunction (PTTD) leads to adult-acquired 
        flatfoot. The good news: caught early, it responds well to targeted exercise.
      </p>

      <h2>Understanding PTTD</h2>
      <p>
        The posterior tibial tendon runs from your calf, behind your inner ankle bone, 
        and attaches to bones in your midfoot. Its job: support your arch and control 
        pronation (inward rolling) during walking and running.
      </p>

      <h3>Stages of PTTD</h3>
      <ul>
        <li><strong>Stage 1:</strong> Tendon inflamed but intact. Arch normal. Pain along inner ankle.</li>
        <li><strong>Stage 2:</strong> Tendon elongated/partially torn. Arch beginning to flatten. Can still do single-leg heel raise.</li>
        <li><strong>Stage 3:</strong> Flat foot is rigid. Cannot do single-leg heel raise. May need surgery.</li>
        <li><strong>Stage 4:</strong> Ankle joint affected. Requires surgical intervention.</li>
      </ul>
      <p>
        <strong>The earlier you address PTTD, the better.</strong> Stage 1-2 responds 
        well to conservative treatment. Stage 3-4 often requires surgical intervention.
      </p>

      <h3>Risk Factors</h3>
      <ul>
        <li>Age over 40 (most common in women 40-60)</li>
        <li>Obesity</li>
        <li>Diabetes or hypertension</li>
        <li>Previous ankle injury</li>
        <li>High-impact activities (running, basketball)</li>
        <li>Pre-existing flat feet</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="font-semibold text-yellow-800">Self-Test: Single-Leg Heel Raise</p>
        <p className="text-yellow-700">
          Stand on one foot and try to rise onto your toes. If you cannot do this 
          on the affected side, or it causes significant pain, you likely have 
          PTTD that needs attention. See a professional for staging.
        </p>
      </div>

      <h2>Phase 1: Reduce Pain and Protect</h2>
      <p>
        In the acute phase, reduce stress on the tendon while it heals.
      </p>

      <h3>Activity Modification</h3>
      <ul>
        <li>Reduce or stop high-impact activities temporarily</li>
        <li>Avoid prolonged standing or walking on hard surfaces</li>
        <li>Use supportive footwear with arch support</li>
        <li>Consider a temporary walking boot for severe cases</li>
      </ul>

      <h3>Orthotics/Arch Support</h3>
      <p>
        External support reduces stress on the tendon:
      </p>
      <ul>
        <li>Over-the-counter arch supports for mild cases</li>
        <li>Custom orthotics for moderate-severe cases</li>
        <li>Arizona brace or similar for Stage 2+</li>
      </ul>

      <h3>Ice</h3>
      <p>
        Apply ice behind the inner ankle for 15-20 minutes after activity or when 
        painful. A frozen water bottle rolled under the arch can also help.
      </p>

      <h3>Gentle Range of Motion</h3>
      <ol>
        <li>Ankle circles: 10 each direction</li>
        <li>Alphabet: Write letters with your toes</li>
        <li>Towel stretch for calves: 30 seconds</li>
      </ol>

      <h2>Phase 2: Isometric Strengthening</h2>
      <p>
        Strengthen the tendon without movement—safe even when painful.
      </p>

      <h3>Isometric Inversion</h3>
      <ol>
        <li>Sit with your foot flat on the floor</li>
        <li>Place your other foot against the inside of your affected foot</li>
        <li>Push inward (try to turn sole inward) against resistance</li>
        <li>Hold 10 seconds</li>
        <li>3 sets of 10 reps</li>
      </ol>

      <h3>Isometric Heel Raise</h3>
      <ol>
        <li>Stand on both feet, holding support</li>
        <li>Rise onto toes halfway</li>
        <li>Hold this position for 30-45 seconds</li>
        <li>3-5 reps</li>
        <li>Progress to single-leg holds as able</li>
      </ol>

      <h2>Phase 3: Eccentric Strengthening</h2>
      <p>
        Eccentric (lengthening) exercises are particularly effective for tendon 
        rehabilitation.
      </p>

      <h3>Eccentric Heel Raises</h3>
      <ol>
        <li>Stand on a step with heels hanging off</li>
        <li>Rise onto toes using BOTH feet</li>
        <li>Shift weight to affected foot</li>
        <li>Lower slowly (3-5 seconds) on affected foot only</li>
        <li>Use both feet to rise again</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Resisted Inversion</h3>
      <ol>
        <li>Sit with leg extended, resistance band around foot</li>
        <li>Anchor band to something stable on the outside</li>
        <li>Turn foot inward against resistance</li>
        <li>Slowly return (eccentric phase is key)</li>
        <li>3 sets of 15</li>
      </ol>

      <h3>Short Foot Exercise</h3>
      <p>
        Activates intrinsic foot muscles and supports the posterior tibial tendon:
      </p>
      <ol>
        <li>Sit with foot flat on floor</li>
        <li>Try to shorten your foot by drawing the ball toward the heel</li>
        <li>Your arch should rise, but toes stay flat (don&apos;t curl them)</li>
        <li>Hold 5-10 seconds</li>
        <li>3 sets of 10</li>
        <li>Progress to standing when mastered seated</li>
      </ol>

      <h2>Phase 4: Progressive Loading</h2>
      <p>
        Build strength and endurance for return to full activity.
      </p>

      <h3>Single-Leg Heel Raises</h3>
      <ol>
        <li>Stand on one foot (affected side), holding support</li>
        <li>Rise onto toes as high as possible</li>
        <li>Lower slowly with control</li>
        <li>Goal: 25 reps with good form</li>
        <li>When you can do this, you&apos;re making great progress</li>
      </ol>

      <h3>Step-Ups (Medial Emphasis)</h3>
      <ol>
        <li>Stand next to a step (6-8 inches)</li>
        <li>Step up with affected foot</li>
        <li>Focus on keeping arch supported—don&apos;t let ankle roll in</li>
        <li>Step down with control</li>
        <li>3 sets of 12-15</li>
      </ol>

      <h3>Single-Leg Balance</h3>
      <ol>
        <li>Stand on affected foot</li>
        <li>Maintain arch position (use short foot cue)</li>
        <li>Hold 30-60 seconds</li>
        <li>Progress to eyes closed, then unstable surfaces</li>
      </ol>

      <h3>Resisted Plantarflexion with Inversion</h3>
      <ol>
        <li>Band around forefoot, anchored high and to the outside</li>
        <li>Push foot down and in against resistance</li>
        <li>This mimics the posterior tibial tendon&apos;s function</li>
        <li>3 sets of 15</li>
      </ol>

      <h2>Hip Strengthening</h2>
      <p>
        Weak hips contribute to excessive pronation. Include these:
      </p>

      <h3>Clamshells</h3>
      <ol>
        <li>Side-lying, knees bent 45°</li>
        <li>Lift top knee, keeping feet together</li>
        <li>3 sets of 20 each side</li>
      </ol>

      <h3>Side-Lying Hip Abduction</h3>
      <ol>
        <li>Lie on side, top leg straight</li>
        <li>Lift top leg 6-8 inches</li>
        <li>3 sets of 15 each side</li>
      </ol>

      <h3>Monster Walks</h3>
      <ol>
        <li>Band around ankles</li>
        <li>Walk sideways, maintaining tension</li>
        <li>15 steps each direction, 2-3 sets</li>
      </ol>

      <h2>Stretching</h2>
      <p>
        Tight calves increase stress on the posterior tibial tendon.
      </p>

      <h3>Gastrocnemius Stretch</h3>
      <ol>
        <li>Face wall, one foot back, heel down, knee straight</li>
        <li>Lean into wall</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h3>Soleus Stretch</h3>
      <ol>
        <li>Same position, but bend the back knee</li>
        <li>This targets the deeper calf muscle</li>
        <li>Hold 30 seconds each side</li>
      </ol>

      <h2>Sample Weekly Program</h2>

      <h3>Phase 2-3 (Weeks 2-6)</h3>
      <p><strong>Daily:</strong></p>
      <ol>
        <li>Ice: 15-20 min after activity</li>
        <li>Gentle ankle ROM: 10 circles each direction</li>
        <li>Isometric inversion: 3 × 10 (10 sec holds)</li>
        <li>Short foot exercise: 3 × 10</li>
        <li>Calf stretches: 30 sec each (gastroc and soleus)</li>
      </ol>

      <p><strong>Every other day:</strong></p>
      <ol>
        <li>Eccentric heel raises: 3 × 12</li>
        <li>Resisted inversion: 3 × 15</li>
        <li>Clamshells: 3 × 20</li>
        <li>Single-leg balance: 3 × 30 sec</li>
      </ol>

      <h3>Phase 4 (Weeks 6-12+)</h3>
      <p><strong>3-4 times per week:</strong></p>
      <ol>
        <li>Single-leg heel raises: Build to 3 × 25</li>
        <li>Step-ups: 3 × 15</li>
        <li>Resisted plantarflexion/inversion: 3 × 15</li>
        <li>Monster walks: 2 × 15 steps each way</li>
        <li>Single-leg balance on unstable surface: 3 × 45 sec</li>
        <li>Short foot exercise standing: 3 × 10</li>
        <li>Calf stretches: 30 sec each</li>
      </ol>

      <h2>Return to Activity</h2>
      <p>
        Criteria for returning to running or high-impact activities:
      </p>
      <ul>
        <li>Pain-free with daily activities</li>
        <li>Can do 25 single-leg heel raises with good form</li>
        <li>Equal calf strength to unaffected side</li>
        <li>No pain with hopping on affected leg</li>
      </ul>

      <h3>Return Protocol</h3>
      <ol>
        <li>Start with walking—gradually increase duration</li>
        <li>Progress to walk-run intervals</li>
        <li>Gradually increase running volume (10% per week)</li>
        <li>Continue strengthening exercises 2-3x per week</li>
        <li>Use orthotics or supportive shoes during return</li>
      </ol>

      <h2>When to Seek Help</h2>
      <ul>
        <li>Cannot do a single-leg heel raise</li>
        <li>Visible flattening of the arch</li>
        <li>Pain that doesn&apos;t improve with 4-6 weeks of conservative treatment</li>
        <li>Swelling or warmth along the tendon</li>
        <li>Ankle instability or giving way</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Catch it early:</strong> Stage 1-2 responds well to exercise; Stage 3-4 often needs surgery</li>
        <li><strong>Support the arch:</strong> Orthotics reduce tendon stress during healing</li>
        <li><strong>Short foot exercise:</strong> Key for activating intrinsic support</li>
        <li><strong>Eccentric strengthening:</strong> Most effective for tendon rehab</li>
        <li><strong>Don&apos;t forget hips:</strong> Weak hips contribute to excessive pronation</li>
        <li><strong>Single-leg heel raise test:</strong> Can&apos;t do it? See a professional</li>
        <li><strong>Be patient:</strong> Tendon healing takes 3-6 months</li>
      </ul>

      <p>
        Posterior tibial tendon dysfunction is progressive—it gets worse without 
        intervention. The good news is that early-stage PTTD responds well to 
        consistent strengthening and support. Take inner ankle pain seriously, 
        start the exercises early, and you can prevent the cascade toward flat 
        foot and more serious problems.
      </p>
    </BlogPost>
  );
}
