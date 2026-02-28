'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

// Blog posts data - will be replaced with CMS/MDX later
const blogPosts: BlogPost[] = [
  {
    slug: 'tight-hamstrings-causes-fixes',
    title: 'Tight Hamstrings: Why Stretching Isn\'t Working',
    excerpt: 'Stretching every day but still tight? The problem isn\'t your hamstrings—it\'s your approach. Here\'s what actually works.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Flexibility',
    readTime: '7 min read'
  },
  {
    slug: 'thoracic-spine-mobility',
    title: 'Thoracic Spine Mobility: Unlock Your Upper Back',
    excerpt: 'Stiff upper back causing neck pain, shoulder issues, or headaches? Your thoracic spine is the hidden culprit—here\'s how to unlock it.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read'
  },
  {
    slug: 'hip-flexor-pain-relief',
    title: 'Hip Flexor Pain: Why It Happens and How to Fix It',
    excerpt: 'That tight, achy feeling in the front of your hip? Desk work is the culprit. Learn why stretching alone won\'t fix it—and what actually will.',
    date: '2026-02-28',
    author: 'Foundational Rehab',
    category: 'Hips',
    readTime: '8 min read'
  },
  {
    slug: 'it-band-syndrome-treatment',
    title: 'IT Band Syndrome: Why Foam Rolling Isn\'t Enough',
    excerpt: 'Outer knee pain from running or cycling? IT band syndrome is common—but most treatment approaches miss the real cause. Here\'s what actually works.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Running',
    readTime: '7 min read'
  },
  {
    slug: 'ankle-mobility-exercises',
    title: 'Ankle Mobility: The Missing Link in Your Movement',
    excerpt: 'Stiff ankles cause problems everywhere—knees, hips, back. Learn why ankle mobility matters and the best exercises to improve it fast.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '6 min read'
  },
  {
    slug: 'neck-pain-relief-exercises',
    title: 'Neck Pain Relief: Exercises That Actually Work',
    excerpt: 'Stiff neck, tension headaches, and upper back tightness? Most neck pain comes from how we live—and responds well to the right exercises.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Neck',
    readTime: '7 min read'
  },
  {
    slug: 'plantar-fasciitis-recovery',
    title: 'Plantar Fasciitis: Why Your Heel Hurts and How to Fix It',
    excerpt: 'That stabbing heel pain in the morning? Plantar fasciitis affects 1 in 10 people. Learn what actually works for recovery—and what\'s a waste of time.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Feet',
    readTime: '7 min read'
  },
  {
    slug: 'knee-pain-squatting-fix',
    title: 'Knee Pain When Squatting: Causes, Fixes, and When to Worry',
    excerpt: 'Front knee pain during squats is frustrating but usually fixable. Learn what\'s actually causing it, which exercises help, and how to squat pain-free again.',
    date: '2026-02-27',
    author: 'Foundational Rehab',
    category: 'Knees',
    readTime: '8 min read'
  },
  {
    slug: 'sciatica-exercises-relief',
    title: 'Sciatica Exercises: Evidence-Based Moves for Lasting Relief',
    excerpt: 'Sciatica pain shooting down your leg? Learn which exercises actually help (and which make it worse), plus a progressive program for long-term relief.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Exercise',
    readTime: '9 min read'
  },
  {
    slug: 'shoulder-pain-rotator-cuff',
    title: 'Shoulder Pain and Rotator Cuff: A Complete Guide to Recovery',
    excerpt: 'From diagnosis to full recovery—everything you need to know about rotator cuff issues, including exercises that actually work and timelines to expect.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Shoulders',
    readTime: '10 min read'
  },
  {
    slug: 'desk-posture-pain-relief',
    title: 'Desk Posture: How to Fix Pain From Sitting All Day',
    excerpt: 'Neck tension, upper back pain, and stiff hips from desk work? Here\'s the science of why sitting hurts and practical fixes you can do at your desk.',
    date: '2026-02-26',
    author: 'Foundational Rehab',
    category: 'Posture',
    readTime: '7 min read'
  },
  {
    slug: 'understanding-low-back-pain',
    title: 'Understanding Low Back Pain: Causes, Myths, and Modern Treatment',
    excerpt: 'Low back pain affects 80% of people at some point in their lives. Learn what actually causes it, debunk common myths, and discover evidence-based approaches to relief.',
    date: '2026-02-25',
    author: 'Foundational Rehab',
    category: 'Education',
    readTime: '8 min read'
  },
  {
    slug: 'movement-is-medicine',
    title: 'Movement Is Medicine: Why Rest Isn\'t Always Best',
    excerpt: 'The old advice to "rest until the pain goes away" is outdated. Research shows that appropriate movement is one of the most effective treatments for musculoskeletal pain.',
    date: '2026-02-24',
    author: 'Foundational Rehab',
    category: 'Recovery',
    readTime: '6 min read'
  },
  {
    slug: 'building-hip-mobility',
    title: 'Building Hip Mobility: The Foundation of Pain-Free Movement',
    excerpt: 'Your hips are the engine of your body. When they\'re tight or weak, problems cascade up to your back and down to your knees. Here\'s how to restore healthy hip function.',
    date: '2026-02-23',
    author: 'Foundational Rehab',
    category: 'Mobility',
    readTime: '7 min read'
  }
];

export default function BlogPage() {
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
              Home
            </Link>
            <Link href="/blog" className="text-white font-medium">
              Articles
            </Link>
            <Link href="/app" className="text-gray-400 hover:text-white transition">
              App
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recovery <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Evidence-based guidance for pain relief, mobility, and building a body that moves well.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-yellow-400 font-medium flex items-center gap-2">
                    Read more 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
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
