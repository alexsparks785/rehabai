import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Ankle Sprain Prevention: Strengthen and Protect Your Ankles | FoundationalRehab',
  description: 'Prevent ankle sprains with targeted strengthening, balance training, and proprioception exercises. Essential for athletes and anyone with weak ankles.',
  keywords: ['ankle sprain prevention', 'weak ankles', 'ankle strengthening', 'ankle stability exercises', 'prevent rolled ankle'],
  openGraph: {
    title: 'Ankle Sprain Prevention: Strengthen and Protect Your Ankles',
    description: 'Build bulletproof ankles with targeted strengthening and balance training.',
    type: 'article',
  },
};

export default function AnkleSpainPrevention() {
  return (
    <BlogPost
      title="Ankle Sprain Prevention: Strengthen and Protect Your Ankles"
      publishedDate="2026-03-12"
      readTime="8 min read"
      tags={["Ankle", "Prevention", "Sports Performance", "Balance"]}
    >
      <p className="lead">
        Once you sprain an ankle, you&apos;re much more likely to sprain it again. Up to 
        70% of people who sprain their ankle will re-sprain it—unless they specifically 
        train to prevent it. Whether you&apos;ve had ankle problems before or want to avoid 
        them, these exercises build the stability and reflexes that protect your ankles.
      </p>

      <h2>Why Ankles Are Vulnerable</h2>
      <p>
        The lateral (outside) ankle ligaments are the most commonly sprained ligaments 
        in the body. They&apos;re vulnerable because:
      </p>
      <ul>
        <li>The ankle moves through a large range of motion</li>
        <li>The outside ligaments are weaker than the inside ligaments</li>
        <li>The bony structure favors inward rolling (inversion)</li>
        <li>Fast direction changes and uneven surfaces challenge stability</li>
      </ul>

      <h3>Risk Factors</h3>
      <ul>
        <li><strong>Previous sprain:</strong> The biggest risk factor for future sprains</li>
        <li><strong>Poor balance:</strong> Can&apos;t react quickly to perturbations</li>
        <li><strong>Weak peroneals:</strong> Muscles that prevent inversion</li>
        <li><strong>Reduced proprioception:</strong> Don&apos;t sense ankle position well</li>
        <li><strong>Sports with cutting/jumping:</strong> Basketball, soccer, volleyball, trail running</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="font-semibold text-blue-800">The Research</p>
        <p className="text-blue-700">
          Balance training reduces ankle sprain risk by up to 50% in athletes. 
          Proprioceptive training is the single most effective intervention for 
          preventing recurrent sprains.
        </p>
      </div>

      <h2>Strength Exercises</h2>
      <p>
        Strong muscles around the ankle provide active stability and can prevent 
        the ankle from rolling too far.
      </p>

      <h3>Resisted Eversion (Peroneal Strengthening)</h3>
      <p>
        The peroneals prevent the ankle from rolling outward—crucial for sprain prevention:
      </p>
      <ol>
        <li>Sit with legs extended, resistance band around forefoot</li>
        <li>Anchor band to a fixed point on your inner side</li>
        <li>Turn foot outward against resistance (eversion)</li>
        <li>Slowly return to start</li>
        <li>3 sets of 15-20 each foot</li>
      </ol>

      <h3>Resisted Inversion</h3>
      <ol>
        <li>Same setup, but band anchored on your outer side</li>
        <li>Turn foot inward against resistance</li>
        <li>3 sets of 15-20 each foot</li>
      </ol>

      <h3>Resisted Dorsiflexion</h3>
      <ol>
        <li>Band anchored in front of you, around forefoot</li>
        <li>Pull toes toward shin against resistance</li>
        <li>3 sets of 15-20 each foot</li>
      </ol>

      <h3>Resisted Plantarflexion</h3>
      <ol>
        <li>Band anchored behind you</li>
        <li>Point toes away from you against resistance</li>
        <li>3 sets of 15-20 each foot</li>
      </ol>

      <h3>Calf Raises (All Variations)</h3>
      <p><strong>Double-leg:</strong></p>
      <ol>
        <li>Stand on edge of step, heels hanging off</li>
        <li>Rise up onto toes, lower below step level</li>
        <li>3 sets of 15-20</li>
      </ol>

      <p><strong>Single-leg:</strong></p>
      <ol>
        <li>Same movement, one foot</li>
        <li>3 sets of 12-15 each foot</li>
      </ol>

      <p><strong>Bent-knee (soleus focus):</strong></p>
      <ol>
        <li>Knees bent 20-30 degrees throughout</li>
        <li>3 sets of 15-20</li>
      </ol>

      <h3>Tibialis Anterior Raises</h3>
      <ol>
        <li>Sit on edge of chair or bench</li>
        <li>Lift toes toward shin (dorsiflexion)</li>
        <li>Can add resistance by having partner press down on toes</li>
        <li>3 sets of 20</li>
      </ol>

      <h2>Balance and Proprioception</h2>
      <p>
        This is where the real injury prevention happens. Balance training teaches 
        your nervous system to react quickly when your ankle is challenged.
      </p>

      <h3>Single-Leg Stance Progressions</h3>
      <p><strong>Level 1: Eyes Open, Firm Surface</strong></p>
      <ol>
        <li>Stand on one foot</li>
        <li>Hold 30-60 seconds</li>
        <li>3 sets each leg</li>
      </ol>

      <p><strong>Level 2: Eyes Closed</strong></p>
      <ol>
        <li>Same position, close your eyes</li>
        <li>Much harder—removes visual balance cues</li>
        <li>Hold 20-30 seconds, build to 60</li>
      </ol>

      <p><strong>Level 3: Unstable Surface</strong></p>
      <ol>
        <li>Stand on foam pad, BOSU ball, or folded towel</li>
        <li>Eyes open first, then progress to eyes closed</li>
        <li>Hold 30-60 seconds</li>
      </ol>

      <p><strong>Level 4: Dynamic Challenges</strong></p>
      <ol>
        <li>Single-leg stance while catching a ball</li>
        <li>Single-leg stance while moving arms or turning head</li>
        <li>Single-leg stance with perturbations (partner gently pushes you)</li>
      </ol>

      <h3>BOSU Ball Training</h3>
      <ol>
        <li>Stand on BOSU (dome side up) with both feet</li>
        <li>Progress to single-leg</li>
        <li>Add squats, reaches, or ball catches</li>
        <li>Try dome-side down for greater challenge</li>
      </ol>

      <h3>Wobble Board</h3>
      <ol>
        <li>Stand on wobble board, try to keep edges from touching ground</li>
        <li>Rock forward/back, side/side, then circles</li>
        <li>Progress to single-leg</li>
        <li>2-3 minutes per session</li>
      </ol>

      <h2>Dynamic Exercises</h2>
      <p>
        Progress to exercises that challenge the ankle during movement.
      </p>

      <h3>Single-Leg Hops (Stable)</h3>
      <ol>
        <li>Hop in place on one foot</li>
        <li>Focus on controlled, soft landings</li>
        <li>3 sets of 15-20 hops each foot</li>
      </ol>

      <h3>Four-Square Hops</h3>
      <ol>
        <li>Imagine a + on the ground, stand in center</li>
        <li>Hop forward, back to center, back, center, left, center, right, center</li>
        <li>Progress to single-leg</li>
        <li>2-3 sets</li>
      </ol>

      <h3>Lateral Hops</h3>
      <ol>
        <li>Hop side to side over a line or small object</li>
        <li>Land and stabilize briefly between hops</li>
        <li>Progress to continuous hopping</li>
        <li>3 sets of 10-15 each direction</li>
      </ol>

      <h3>Single-Leg Landing Practice</h3>
      <ol>
        <li>Jump forward off both feet</li>
        <li>Land on one foot, stick the landing</li>
        <li>Focus on controlled landing—knee over toe, no wobble</li>
        <li>3 sets of 8-10 each foot</li>
      </ol>

      <h2>Sport-Specific Drills</h2>

      <h3>Cutting Drills</h3>
      <ol>
        <li>Run forward, plant and cut 45-90 degrees</li>
        <li>Focus on controlled planting with good ankle position</li>
        <li>Progress speed as control improves</li>
      </ol>

      <h3>Ladder Drills</h3>
      <ol>
        <li>Quick feet through agility ladder</li>
        <li>Emphasizes rapid, controlled foot placement</li>
        <li>Various patterns: in-in-out-out, lateral shuffles, etc.</li>
      </ol>

      <h3>Reactive Agility</h3>
      <ol>
        <li>React to visual or verbal cues to change direction</li>
        <li>Adds cognitive demand to physical challenge</li>
        <li>More sport-realistic than planned movements</li>
      </ol>

      <h2>Sample Prevention Program</h2>

      <h3>Beginner (Weeks 1-4)</h3>
      <p><strong>Daily (10 min):</strong></p>
      <ol>
        <li>Ankle circles: 10 each direction, each foot</li>
        <li>Resisted eversion: 2 × 15 each foot</li>
        <li>Single-leg stance: 3 × 30 sec each foot</li>
        <li>Double-leg calf raises: 2 × 15</li>
      </ol>

      <h3>Intermediate (Weeks 5-8)</h3>
      <p><strong>3-4x per week (15 min):</strong></p>
      <ol>
        <li>4-way resistance band: 2 × 15 each direction</li>
        <li>Single-leg calf raises: 3 × 12 each</li>
        <li>Single-leg stance eyes closed: 3 × 30 sec each</li>
        <li>Single-leg stance on foam: 3 × 30 sec each</li>
        <li>Single-leg hops: 2 × 15 each foot</li>
      </ol>

      <h3>Advanced (Weeks 9+)</h3>
      <p><strong>3x per week (20 min):</strong></p>
      <ol>
        <li>4-way resistance band: 2 × 20 each direction</li>
        <li>Single-leg calf raises: 3 × 15 each</li>
        <li>BOSU single-leg balance: 3 × 45 sec each</li>
        <li>Four-square hops (single-leg): 2 sets</li>
        <li>Lateral hops: 3 × 15 each direction</li>
        <li>Cutting drills: 5 min</li>
        <li>Single-leg landing practice: 2 × 10 each foot</li>
      </ol>

      <h2>Additional Prevention Strategies</h2>

      <h3>Ankle Bracing/Taping</h3>
      <ul>
        <li>Effective for preventing re-injury in high-risk sports</li>
        <li>Lace-up braces provide good support with less bulk than taping</li>
        <li>Use for games/high-risk activities, not all the time</li>
        <li>Don&apos;t rely solely on bracing—still need to strengthen</li>
      </ul>

      <h3>Footwear</h3>
      <ul>
        <li>Appropriate shoes for the activity</li>
        <li>Good fit—not too loose</li>
        <li>Replace worn shoes (check midsole compression)</li>
        <li>High-tops provide some support but aren&apos;t magic</li>
      </ul>

      <h3>Warm-Up</h3>
      <ul>
        <li>Dynamic warm-up before sports</li>
        <li>Include ankle circles and light balance work</li>
        <li>Sport-specific movements at lower intensity</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Balance training is essential:</strong> Most effective intervention for preventing sprains</li>
        <li><strong>Strengthen the peroneals:</strong> These muscles actively prevent inversion sprains</li>
        <li><strong>Progress systematically:</strong> Stable → unstable → dynamic → sport-specific</li>
        <li><strong>Close your eyes:</strong> Removes visual compensation, challenges proprioception</li>
        <li><strong>Practice landing:</strong> Controlled single-leg landings reduce injury risk</li>
        <li><strong>Maintenance matters:</strong> Continue prevention exercises even when feeling good</li>
        <li><strong>Previous injury = higher risk:</strong> If you&apos;ve sprained before, prevention is even more important</li>
      </ul>

      <p>
        Ankle sprains don&apos;t have to be inevitable. With consistent balance training, 
        targeted strengthening, and proper progression to dynamic exercises, you can 
        significantly reduce your risk of spraining—or re-spraining—your ankle. 
        Invest 10-20 minutes a few times per week, and build ankles that can handle 
        whatever you throw at them.
      </p>
    </BlogPost>
  );
}
