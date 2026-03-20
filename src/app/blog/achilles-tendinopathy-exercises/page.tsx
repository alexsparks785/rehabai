import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Achilles Tendinopathy Exercises: Heal Your Achilles Tendon',
  description: 'Evidence-based exercises for Achilles tendinopathy. Learn the Alfredson protocol, heavy slow resistance, and progressive loading to heal Achilles tendon pain.',
  keywords: ['Achilles tendinopathy exercises', 'Achilles tendon exercises', 'Achilles heel exercises', 'calf exercises Achilles', 'eccentric heel drops'],
}

export default function AchillesTendinopathyExercises() {
  return (
    <BlogPost
      title="Achilles Tendinopathy Exercises: Heal Your Achilles Tendon"
      publishDate="2026-03-20"
      readTime="11 min read"
      author="FoundationalRehab Team"
      heroAlt="Person doing eccentric heel drops for Achilles tendon rehabilitation"
    >
      <p className="lead">
        Achilles tendinopathy is a painful condition affecting the Achilles tendon—the thick cord connecting your calf muscles to your heel. It's common in runners and active adults. The good news: exercise, particularly eccentric loading, is the gold standard treatment and leads to recovery for most people.
      </p>

      <h2>Understanding Achilles Tendinopathy</h2>
      <p>
        The Achilles tendon can become painful and dysfunctional from:
      </p>
      <ul>
        <li>Overuse—too much, too soon</li>
        <li>Tight or weak calf muscles</li>
        <li>Sudden increases in activity</li>
        <li>Poor footwear or running technique</li>
        <li>Age-related changes in the tendon</li>
      </ul>
      <p>
        There are two main types:
      </p>
      <ul>
        <li><strong>Midportion:</strong> Pain and thickening 2-6 cm above the heel (most common)</li>
        <li><strong>Insertional:</strong> Pain where the tendon attaches to the heel bone</li>
      </ul>
      <p>
        Symptoms include:
      </p>
      <ul>
        <li>Pain in the Achilles tendon, especially with activity</li>
        <li>Morning stiffness that improves with walking</li>
        <li>Tenderness when squeezing the tendon</li>
        <li>Thickening or nodule in the tendon</li>
        <li>Pain that may "warm up" but returns after activity</li>
      </ul>

      <h2>Why Loading Works</h2>
      <p>
        Rest alone doesn't heal tendinopathy—it just reduces pain temporarily. Tendons need progressive loading to:
      </p>
      <ul>
        <li>Stimulate healing and remodeling</li>
        <li>Increase strength and load capacity</li>
        <li>Reduce pain over time</li>
      </ul>
      <p>
        Some discomfort during exercises is acceptable (up to 4-5/10 pain), but symptoms shouldn't progressively worsen.
      </p>

      <h2>The Alfredson Protocol (Eccentric Loading)</h2>
      <p>
        This is the classic protocol for midportion Achilles tendinopathy.
      </p>

      <h3>Eccentric Heel Drops</h3>
      <ul>
        <li>Stand on a step with balls of feet on edge, heels hanging off</li>
        <li>Rise up on both feet (concentric phase)</li>
        <li>Shift weight to the affected leg</li>
        <li>Slowly lower that heel below step level (3-5 seconds)—this is the eccentric phase</li>
        <li>Use both legs to rise back up</li>
        <li>Do NOT do the lifting phase on the affected leg alone—use both legs to rise</li>
      </ul>
      <p>
        <strong>Protocol:</strong>
      </p>
      <ul>
        <li>3 sets of 15 reps with knee straight (targets gastrocnemius)</li>
        <li>3 sets of 15 reps with knee slightly bent (targets soleus)</li>
        <li>Do both versions, twice daily</li>
        <li>That's 180 total reps per day</li>
        <li>Continue for 12 weeks</li>
        <li>Add weight (backpack, weighted vest) as it becomes easier</li>
      </ul>

      <h2>Heavy Slow Resistance (HSR)</h2>
      <p>
        An alternative approach that's equally effective with less volume.
      </p>

      <h3>Heel Raises (Heavy Slow)</h3>
      <ul>
        <li>Can be done on a step, leg press machine, or seated calf raise</li>
        <li>Use a weight that allows 8-15 reps with good form</li>
        <li>3 seconds up, 3 seconds down (slow both phases)</li>
        <li>Start with 3 sets of 15 reps</li>
        <li>Progress to 4 sets of 8 reps with heavier weight over 12 weeks</li>
        <li>Do 3 times per week (not daily)</li>
      </ul>
      <p>
        HSR requires gym access but has lower daily volume than Alfredson.
      </p>

      <h2>Insertional Achilles Tendinopathy</h2>
      <p>
        If your pain is at the heel bone attachment, modify the exercises:
      </p>
      <ul>
        <li><strong>Avoid going below neutral:</strong> Don't drop heel below the level of the forefoot</li>
        <li><strong>Do heel raises on flat ground only:</strong> Not on a step</li>
        <li><strong>Avoid stretching:</strong> Stretching compresses the insertion and can worsen symptoms</li>
        <li><strong>Isometrics may help:</strong> Hold at the top of a heel raise for 30-45 seconds</li>
      </ul>

      <h2>Stretching (Midportion Only)</h2>
      <p>
        For midportion tendinopathy, gentle stretching can help. <strong>Avoid stretching for insertional tendinopathy.</strong>
      </p>

      <h3>Standing Calf Stretch</h3>
      <ul>
        <li>Wall stretch with affected leg back, knee straight, heel down</li>
        <li>Hold 30-45 seconds</li>
        <li>Repeat 3 times, 2-3 times daily</li>
      </ul>

      <h3>Bent-Knee Calf Stretch</h3>
      <ul>
        <li>Same position but bend the back knee</li>
        <li>Targets the soleus muscle</li>
        <li>Hold 30-45 seconds</li>
      </ul>

      <h2>Progressive Return to Running</h2>
      <p>
        Return to running when:
      </p>
      <ul>
        <li>Pain is minimal with daily activities (2/10 or less)</li>
        <li>Can do single-leg heel raises without significant pain</li>
        <li>Morning stiffness is minimal</li>
      </ul>

      <h3>Sample Protocol</h3>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Walk/jog: 1 min jog / 2 min walk × 10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Walk/jog: 2 min jog / 1 min walk × 8</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Walk/jog: 4 min jog / 1 min walk × 5</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Continuous easy jogging 15-20 min</td>
          </tr>
          <tr>
            <td>5+</td>
            <td>Increase duration 10% per week</td>
          </tr>
        </tbody>
      </table>
      <p>
        Continue strengthening exercises throughout and after return to running.
      </p>

      <h2>Activity Modifications</h2>
      <ul>
        <li><strong>Reduce running volume:</strong> Cut mileage by 50% or more initially</li>
        <li><strong>Avoid hills and speed work:</strong> High Achilles load</li>
        <li><strong>Shoe heel lift:</strong> Temporary heel insert can reduce tendon strain</li>
        <li><strong>Cross-train:</strong> Cycling, swimming maintain fitness with less Achilles load</li>
        <li><strong>Avoid minimalist shoes:</strong> During recovery, use cushioned, supportive shoes</li>
      </ul>

      <h2>Sample Weekly Program</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Frequency</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfredson (eccentric)</td>
            <td>2x daily</td>
            <td>6 sets of 15 (knee straight + bent)</td>
          </tr>
          <tr>
            <td>Heavy Slow Resistance</td>
            <td>3x weekly</td>
            <td>3-4 sets of 8-15 reps</td>
          </tr>
        </tbody>
      </table>
      <p>
        Choose one approach and stick with it for 12 weeks.
      </p>

      <h2>When to Seek Help</h2>
      <p>
        See a healthcare provider if:
      </p>
      <ul>
        <li>Pain doesn't improve after 8-12 weeks of consistent loading</li>
        <li>Pain is severe or getting worse</li>
        <li>You felt a pop or sudden pain (possible rupture)</li>
        <li>Tendon is very swollen or you can't bear weight</li>
        <li>You have pain at rest that wakes you at night</li>
      </ul>
      <p>
        Treatment options include physical therapy, shockwave therapy, PRP injections, and rarely surgery.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Achilles tendinopathy responds to progressive loading, not rest</li>
        <li>Eccentric heel drops (Alfredson protocol) are the gold standard</li>
        <li>Heavy slow resistance is an effective alternative with less daily volume</li>
        <li>For insertional tendinopathy: don't go below neutral, avoid stretching</li>
        <li>Some pain during exercises is acceptable (4-5/10 max)</li>
        <li>Recovery takes 12+ weeks—be patient and consistent</li>
        <li>Continue strengthening even after pain resolves</li>
      </ul>

      <p>
        Achilles tendinopathy is frustrating, but the treatment is clear: load the tendon progressively. Whether you choose eccentric drops or heavy slow resistance, commit to the program for 12 weeks. Your Achilles will get stronger, the pain will resolve, and you'll be back to running stronger than before.
      </p>
    </BlogPost>
  )
}
