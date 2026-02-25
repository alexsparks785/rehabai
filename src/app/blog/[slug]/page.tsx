'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

// Blog post content - will be replaced with MDX/CMS later
const posts: Record<string, {
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  'understanding-low-back-pain': {
    title: 'Understanding Low Back Pain: Causes, Myths, and Modern Treatment',
    date: '2026-02-25',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read',
    content: `
## The Scope of the Problem

Low back pain is one of the most common health complaints worldwide. Studies show that approximately **80% of adults** will experience significant low back pain at some point in their lives. It's the leading cause of disability globally and accounts for more missed workdays than any other condition.

Yet despite how common it is, low back pain remains widely misunderstood—by patients and healthcare providers alike.

## What Actually Causes Low Back Pain?

Here's something that surprises most people: **in 85-90% of low back pain cases, we cannot identify a specific structural cause**. This is called "non-specific low back pain," and it's the most common type.

This doesn't mean the pain isn't real—it absolutely is. But it means that the old model of "find the broken part and fix it" often doesn't apply.

### Common Myths About Back Pain

**Myth 1: "My MRI shows a bulging disc, so that's causing my pain."**

Reality: Studies of people with NO back pain show that disc bulges, herniations, and degenerative changes are extremely common—and increase with age. Many people walking around pain-free have "abnormal" MRI findings. The presence of structural changes doesn't prove they're causing pain.

**Myth 2: "I should rest until the pain goes away."**

Reality: Prolonged rest actually makes back pain worse. Modern evidence strongly supports **staying active** and returning to normal activities as soon as possible. Movement is medicine.

**Myth 3: "My back is fragile and I need to protect it."**

Reality: The spine is remarkably strong and resilient. Fear of movement (called "kinesiophobia") is actually one of the biggest predictors of chronic pain. Your back can handle load—it needs load to stay healthy.

**Myth 4: "I need surgery to fix my back."**

Reality: For non-specific low back pain, surgery is rarely indicated and often no more effective than conservative treatment. Even for conditions like disc herniations, most cases resolve without surgery.

## What Actually Works?

Research consistently shows these approaches are effective for low back pain:

### 1. Stay Active
Movement is the single most important thing you can do. This doesn't mean pushing through severe pain, but it does mean avoiding bed rest and maintaining as much normal activity as possible.

### 2. Exercise
Structured exercise programs—including strength training, mobility work, and aerobic exercise—are among the most effective treatments. The specific type matters less than doing it consistently.

### 3. Address Contributing Factors
Poor sleep, high stress, sedentary lifestyle, and unhelpful beliefs about pain all contribute to back pain. Addressing these factors often helps more than focusing solely on the back itself.

### 4. Progressive Loading
Your back needs to be loaded progressively to build resilience. This means gradually increasing demands through exercise rather than avoiding all challenge.

## The Role of Physical Therapy

A good physical therapist can help you:
- Understand what's happening with your back
- Develop a progressive exercise program
- Address movement patterns that may be contributing
- Build confidence in your body's capacity

However, PT isn't magic—it works through the mechanisms above. The exercises and education you receive are the treatment, not passive modalities.

## When to Seek Help

While most low back pain is benign, see a healthcare provider if you have:
- Pain following significant trauma
- Progressive weakness in the legs
- Loss of bladder or bowel control
- Unexplained weight loss
- Pain that wakes you from sleep consistently
- Pain lasting more than 12 weeks without improvement

## The Bottom Line

Low back pain is common, usually not dangerous, and typically improves with time and appropriate activity. The best things you can do are:

1. **Stay calm** — catastrophizing about pain makes it worse
2. **Stay active** — movement is your friend
3. **Exercise regularly** — build a resilient back
4. **Address lifestyle factors** — sleep, stress, and overall health matter

Your back is strong. Treat it that way.

---

*Foundational Rehab provides evidence-based guidance for recovery and pain management. Our AI-powered programs are designed to help you move better and feel better.*
    `
  },
  'movement-is-medicine': {
    title: 'Movement Is Medicine: Why Rest Isn\'t Always Best',
    date: '2026-02-24',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read',
    content: `
## The Old Paradigm: Rest and Protect

For decades, the standard advice for musculoskeletal pain was simple: rest until it heals. Don't move, don't stress it, let the body repair itself.

This made intuitive sense. If something hurts, stop doing the thing that hurts. Wait for it to get better.

But we now know this advice is often **exactly wrong**.

## What the Research Shows

Study after study has demonstrated that prolonged rest leads to:
- **Muscle weakness** — unused muscles atrophy quickly
- **Decreased flexibility** — tissues tighten and stiffen
- **Reduced pain tolerance** — the nervous system becomes more sensitive
- **Worse outcomes** — slower recovery and higher rates of chronic pain

Meanwhile, early movement and return to activity consistently shows:
- Faster recovery times
- Lower rates of chronic pain
- Better functional outcomes
- Improved psychological well-being

## Why Movement Helps

### 1. Tissues Need Load to Heal

Tendons, ligaments, muscles, and even bones require mechanical stress to remodel properly. When you move and load tissues, you stimulate repair processes. Complete rest actually impairs healing.

### 2. Movement Reduces Pain Sensitivity

Physical activity releases endorphins and other pain-modulating chemicals. Regular movement literally changes how your nervous system processes pain signals, making you less sensitive over time.

### 3. Movement Prevents Deconditioning

When you stop moving, everything gets worse: cardiovascular fitness drops, muscles weaken, coordination deteriorates. This deconditioning creates a vicious cycle where movement becomes harder and more painful.

### 4. Movement Builds Confidence

One of the biggest factors in chronic pain is fear of movement. When you successfully move and exercise without catastrophe, you build confidence in your body. This confidence is therapeutic.

## The Right Kind of Movement

This doesn't mean "push through severe pain" or "no pain, no gain." That's the opposite extreme, and it's also wrong.

The goal is **appropriate movement**:

- **Modify, don't stop** — If running hurts, walk. If standing hurts, sit sometimes. But keep moving.
- **Start where you are** — Begin with movements you can do, even if they're small
- **Progress gradually** — Slowly increase duration, intensity, and complexity
- **Listen to your body** — Some discomfort during activity is normal; severe pain is a signal to back off

## Practical Applications

### For Back Pain
Research strongly supports staying active with back pain. Walking, swimming, gentle strength training—these all help. Bed rest makes back pain worse.

### For Tendon Issues
Tendons heal best with progressive loading. This often means exercises that load the affected tendon in a controlled way, gradually increasing demand.

### For Arthritis
Movement is one of the most effective treatments for osteoarthritis. It maintains joint health, strengthens supporting muscles, and reduces pain.

### After Injury
Even after significant injuries, early controlled movement typically leads to better outcomes than prolonged immobilization.

## Making It Practical

**Start small:** Even 5 minutes of gentle movement counts.

**Be consistent:** Daily movement beats occasional intense exercise.

**Find what you enjoy:** Sustainable movement is movement you'll actually do.

**Progress gradually:** Add a little more each week.

**Expect some discomfort:** Mild discomfort during exercise is often okay; sharp or severe pain is not.

## The Mental Shift

Perhaps the most important change is psychological. Instead of thinking of your body as fragile and needing protection, recognize it as **adaptable and resilient**.

Your body is designed to move. It gets stronger when challenged. Pain doesn't always mean damage.

Movement isn't just exercise—it's medicine. And unlike most medicines, the side effects are almost all positive.

---

*Start your movement journey with Foundational Rehab. Our personalized programs meet you where you are and help you progress safely.*
    `
  },
  'building-hip-mobility': {
    title: 'Building Hip Mobility: The Foundation of Pain-Free Movement',
    date: '2026-02-23',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read',
    content: `
## Why Hip Mobility Matters

Your hips are the center of your body's movement system. They connect your upper and lower body, support your spine, and generate power for walking, running, and virtually every athletic movement.

When your hips don't move well, problems cascade in both directions:
- **Up to your back:** Limited hip mobility forces your lumbar spine to compensate, often leading to low back pain
- **Down to your knees:** Poor hip function changes how forces travel through your legs, stressing the knees

Restoring healthy hip mobility is often the single most impactful thing you can do for overall movement quality.

## What Is Hip Mobility?

Hip mobility refers to the range of motion available at your hip joint. The hip is a ball-and-socket joint capable of movement in multiple directions:

- **Flexion:** Bringing your knee toward your chest
- **Extension:** Moving your leg behind you
- **Abduction:** Moving your leg out to the side
- **Adduction:** Moving your leg toward the midline
- **Internal rotation:** Rotating your thigh inward
- **External rotation:** Rotating your thigh outward

Most people have significant limitations in at least some of these movements—often without realizing it.

## Why Modern Life Kills Hip Mobility

Our hips are designed for diverse, full-range movement. But modern life delivers:

### Prolonged Sitting
The average adult sits 6-8 hours per day. Sitting keeps hips in a flexed, narrowed position for hours at a time. Over time, hip flexors tighten and glutes weaken.

### Limited Movement Variety
We walk forward, sit down, stand up. That's about it. We rarely move laterally, rotate through full ranges, or challenge our hips in diverse ways.

### Lack of Deep Squatting
In many cultures, deep squatting is a resting position used throughout life. This maintains hip mobility naturally. Most Westerners lose this capacity in childhood and never regain it.

## Assessing Your Hip Mobility

Try these simple tests:

### Deep Squat Test
Can you squat fully down with heels on the floor, knees tracking over toes, and torso relatively upright? If not, you likely have hip (and/or ankle) mobility limitations.

### 90-90 Test
Sit on the floor with both legs bent at 90 degrees—one in front (externally rotated) and one to the side (internally rotated). Can you sit tall without leaning? Can you switch sides smoothly?

### Hip Flexor Length Test
In a lunge position with back knee down, can your back thigh reach vertical while keeping your pelvis neutral? If your back arches or your pelvis tips forward, your hip flexors are tight.

## Building Better Hip Mobility

### Principle 1: Daily Practice
Hip mobility improves with consistent, frequent work. Five minutes daily beats thirty minutes weekly.

### Principle 2: Move Through Full Ranges
Don't just stretch—move. Controlled movement through full ranges builds both mobility and stability.

### Principle 3: Load the New Ranges
Once you can access a range of motion, strengthen it. Passive flexibility without strength is unstable and often temporary.

## Key Exercises

### 90-90 Hip Switches
Sit in the 90-90 position. Lift both legs slightly and switch to the opposite 90-90. This builds hip rotation mobility and control.

### Deep Squat Holds
Hold a deep squat (using support if needed) for time. Start with 30 seconds, build to several minutes. This restores fundamental hip flexion capacity.

### Hip CARs (Controlled Articular Rotations)
Standing on one leg, draw the largest possible circle with your opposite knee. This explores and expands your hip's full range of motion.

### Half-Kneeling Hip Flexor Stretch
In a lunge position with back knee down, tuck your pelvis under and shift forward. Hold 30-60 seconds per side. Add arm reaches for more effect.

### Pigeon Pose Progressions
The classic pigeon stretch, but done actively—contracting into the stretch, then relaxing deeper. This builds external rotation.

## Programming Considerations

**For maintenance:** 5-10 minutes daily of hip mobility work
**For improvement:** 15-20 minutes daily, plus loaded exercises in training
**For significant limitations:** Dedicated mobility sessions, possibly with professional guidance

## The Long Game

Hip mobility takes time to build—especially if you've lost significant range. But the investment pays dividends across your entire body.

Better hips mean:
- Less back pain
- Healthier knees
- More powerful movement
- Reduced injury risk
- Better athletic performance
- More comfortable daily life

Start where you are, work consistently, and trust the process.

---

*Foundational Rehab includes targeted hip mobility work in all lower body programs. Our AI-guided approach helps you progress safely based on your current capabilities.*
    `
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-yellow-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-yellow-400">
            Foundational Rehab
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              App
            </Link>
            <Link href="/blog" className="text-white font-medium">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-yellow-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.date}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-invert prose-yellow max-w-none">
          {post.content.split('\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-white">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-semibold mt-8 mb-3 text-white">{paragraph.slice(4)}</h3>;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <p key={idx} className="font-semibold text-white my-4">{paragraph.slice(2, -2)}</p>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={idx} className="text-gray-300 ml-6 my-1">{paragraph.slice(2)}</li>;
            }
            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="border-gray-700 my-8" />;
            }
            if (paragraph.trim() === '') return null;
            
            // Handle inline bold/emphasis
            const formattedText = paragraph
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>')
              .replace(/\*([^*]+)\*/g, '<em>$1</em>');
            
            return (
              <p 
                key={idx} 
                className="text-gray-300 leading-relaxed my-4"
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Recovery?</h2>
          <p className="text-gray-400 mb-6">
            Get personalized rehab programs powered by AI guidance and evidence-based protocols.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Try the App Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2026 Foundational Rehab. Evidence-based recovery guidance.
        </div>
      </footer>
    </div>
  );
}
