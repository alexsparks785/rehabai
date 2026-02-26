'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';

// Quick guides - short, actionable content
const quickGuides = [
  {
    id: 'morning-routine',
    title: '5-Minute Morning Back Routine',
    description: 'Start your day right with these quick moves',
    duration: '5 min',
    steps: [
      { title: 'Knee-to-Chest (30 sec each side)', detail: 'Lying on back, pull one knee gently toward chest. Keep opposite leg straight or bent.' },
      { title: 'Cat-Cow (1 min)', detail: 'On hands and knees, alternate between arching back up and letting belly drop. Move slowly with breath.' },
      { title: 'Pelvic Tilts (1 min)', detail: 'Lying on back, knees bent. Flatten lower back against floor, then arch slightly. Small, controlled movements.' },
      { title: 'Supine Twist (30 sec each side)', detail: 'Lying on back, drop both knees to one side while keeping shoulders down. Gentle stretch only.' },
      { title: 'Bird-Dog (1 min)', detail: 'On hands and knees, extend opposite arm and leg. Hold 5 seconds, switch sides. Keep core stable.' },
    ],
    category: 'routine',
  },
  {
    id: 'desk-break',
    title: '2-Minute Desk Reset',
    description: 'Quick relief when you\'ve been sitting too long',
    duration: '2 min',
    steps: [
      { title: 'Chin Tucks (20 sec)', detail: 'Pull chin straight back, making a double chin. Hold 3 seconds, repeat 5x.' },
      { title: 'Shoulder Rolls (20 sec)', detail: '5 big circles backward, squeezing shoulder blades at the back.' },
      { title: 'Seated Twist (20 sec each side)', detail: 'Sit tall, rotate torso to one side, hold chair for gentle assist.' },
      { title: 'Standing Hip Flexor (30 sec each side)', detail: 'Step one foot back, tuck pelvis under, lean forward slightly into stretch.' },
    ],
    category: 'routine',
  },
  {
    id: 'flare-up-protocol',
    title: 'Back Pain Flare-Up: First 24 Hours',
    description: 'What to do when pain spikes',
    duration: '24 hours',
    steps: [
      { title: 'Don\'t Panic', detail: 'Flare-ups are normal and usually settle within days. Catastrophizing makes pain worse.' },
      { title: 'Keep Moving (Gently)', detail: 'Bed rest makes things worse. Walk, do gentle movements, stay active within comfort.' },
      { title: 'Ice or Heat', detail: 'Use what feels better. Ice for 15-20 min can help acute inflammation. Heat relaxes muscles.' },
      { title: 'Sleep Position', detail: 'Side: pillow between knees. Back: pillow under knees. Avoid stomach sleeping.' },
      { title: 'Anti-inflammatory (if appropriate)', detail: 'OTC options like ibuprofen can help short-term. Check with pharmacist if unsure.' },
      { title: 'Avoid Aggravating Movements', detail: 'Note what makes it worse and temporarily avoid. But don\'t stop moving entirely.' },
    ],
    category: 'protocol',
  },
  {
    id: 'before-bed',
    title: 'Bedtime Back Release',
    description: 'Decompress your spine before sleep',
    duration: '5 min',
    steps: [
      { title: 'Child\'s Pose (1 min)', detail: 'Knees wide, sit back toward heels, arms extended. Breathe deeply and relax.' },
      { title: 'Supine Figure-4 (1 min each side)', detail: 'On back, cross ankle over opposite knee, pull uncrossed leg toward chest.' },
      { title: 'Knees-to-Chest (1 min)', detail: 'Hug both knees toward chest, rock gently side to side.' },
      { title: 'Supine Twist (30 sec each side)', detail: 'Both knees drop to one side, arms out. Let gravity do the work.' },
    ],
    category: 'routine',
  },
  {
    id: 'sciatic-relief',
    title: 'Sciatica Quick Relief',
    description: 'Calm down nerve irritation',
    duration: '10 min',
    steps: [
      { title: 'Prone Press-Up (2 min)', detail: 'Lie face down. Press up on hands, keeping hips on floor. Hold 2 sec, lower. Repeat 10x.' },
      { title: 'Sciatic Nerve Glide (2 min)', detail: 'On back, affected leg raised. Slowly straighten knee while flexing ankle, then bend knee and point toes.' },
      { title: 'Piriformis Stretch (2 min each side)', detail: 'On back, cross affected leg over other thigh. Pull uncrossed leg toward chest.' },
      { title: 'Gentle Walking (4 min)', detail: 'Low-impact movement helps. Walk slowly and let things calm down.' },
    ],
    category: 'protocol',
  },
  {
    id: 'posture-check',
    title: 'Posture Self-Assessment',
    description: 'Check your alignment in 60 seconds',
    duration: '1 min',
    steps: [
      { title: 'Wall Test', detail: 'Stand with heels, butt, shoulders, and head against wall. Can you do it comfortably? Note what\'s hard.' },
      { title: 'Head Position', detail: 'Is your head jutting forward? Your ear should align over your shoulder.' },
      { title: 'Shoulder Position', detail: 'Are shoulders rounded forward? Can you pull them back easily?' },
      { title: 'Pelvis Position', detail: 'Is your lower back excessively arched or flattened? Aim for neutral.' },
    ],
    category: 'assessment',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-yellow-400">Foundational</span> Rehab
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Articles</Link>
            <Link href="/guides" className="text-white font-medium">Quick Guides</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-yellow-400 hover:underline mb-4 inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Quick Guides</h1>
          <p className="text-xl text-gray-400">
            Short, actionable protocols you can use right now. No fluff, just steps.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {quickGuides.map((guide) => (
              <div 
                key={guide.id}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full capitalize">
                          {guide.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock size={12} /> {guide.duration}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold">{guide.title}</h2>
                      <p className="text-gray-400 text-sm mt-1">{guide.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {guide.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{step.title}</h3>
                          <p className="text-gray-400 text-sm">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Want Deeper Understanding?</h2>
          <p className="text-gray-400 mb-6">
            Our long-form articles explain the why behind every recommendation.
          </p>
          <Link 
            href="/blog"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Read Full Articles
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
