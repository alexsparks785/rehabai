'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ChevronRight, BookOpen, Zap, Target, Users, ArrowRight, Menu, X } from 'lucide-react';

// Content categories
const categories = [
  { id: 'back-pain', name: 'Lower Back Pain', icon: '🦴', count: 12, color: 'from-blue-500/20 to-blue-600/20' },
  { id: 'sciatica', name: 'Sciatica', icon: '⚡', count: 8, color: 'from-purple-500/20 to-purple-600/20' },
  { id: 'mobility', name: 'Hip & Mobility', icon: '🏃', count: 10, color: 'from-green-500/20 to-green-600/20' },
  { id: 'shoulders', name: 'Shoulder Pain', icon: '💪', count: 6, color: 'from-orange-500/20 to-orange-600/20' },
  { id: 'posture', name: 'Posture & Desk Work', icon: '🪑', count: 7, color: 'from-teal-500/20 to-teal-600/20' },
  { id: 'recovery', name: 'Recovery Science', icon: '🧠', count: 9, color: 'from-pink-500/20 to-pink-600/20' },
];

// Featured articles
const featuredArticles = [
  {
    slug: 'understanding-low-back-pain',
    title: 'Understanding Low Back Pain: What Actually Causes It',
    excerpt: '80% of adults experience back pain. Learn what\'s really happening and why most advice is wrong.',
    category: 'Education',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'sciatica-exercises-relief',
    title: 'Sciatica Exercises That Actually Work',
    excerpt: 'Evidence-based exercises for lasting relief, not temporary fixes.',
    category: 'Exercise',
    readTime: '9 min',
  },
  {
    slug: 'movement-is-medicine',
    title: 'Why Rest Makes Pain Worse',
    excerpt: 'The counterintuitive truth about movement and recovery.',
    category: 'Recovery',
    readTime: '6 min',
  },
];

// Quick tips
const quickTips = [
  { title: 'Morning Back Stiffness?', tip: 'Try cat-cow stretches before getting out of bed. 10 reps, gentle and slow.' },
  { title: 'Sitting All Day?', tip: 'Stand up every 30 minutes. Even 30 seconds helps reset your posture.' },
  { title: 'Pain After Exercise?', tip: 'Some soreness is normal. Sharp or worsening pain means back off.' },
  { title: 'Sleeping Position', tip: 'Side sleepers: pillow between knees. Back sleepers: pillow under knees.' },
];

// Troubleshooting guides
const troubleshootingGuides = [
  { title: 'My back hurts when I...', items: ['Sit for long periods', 'Bend forward', 'Stand up from sitting', 'Wake up in the morning'] },
  { title: 'The pain shoots down my...', items: ['Buttock only', 'Back of thigh', 'Calf or foot', 'Front of thigh'] },
  { title: 'It gets worse when I...', items: ['Sit', 'Stand', 'Walk', 'Lie down'] },
];

export default function EducationLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="text-yellow-400">Foundational</span> Rehab
            </Link>
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/blog" className="text-gray-300 hover:text-white transition">Articles</Link>
              <Link href="/guides" className="text-gray-300 hover:text-white transition">Quick Guides</Link>
              <Link href="#troubleshoot" className="text-gray-300 hover:text-white transition">Troubleshoot</Link>
              <Link href="/app" className="px-4 py-2 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition">
                Try the App
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3">
              <Link href="/blog" className="block text-gray-300 hover:text-white">Articles</Link>
              <Link href="/guides" className="block text-gray-300 hover:text-white">Quick Guides</Link>
              <Link href="#troubleshoot" className="block text-gray-300 hover:text-white">Troubleshoot</Link>
              <Link href="/app" className="block px-4 py-2 bg-yellow-500 text-black rounded-full font-medium text-center">
                Try the App
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Understand Your Pain.<br />
            <span className="text-yellow-400">Fix It Yourself.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            First-principles education for people tired of generic advice. 
            Learn what's actually happening in your body and what you can do about it.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search topics, exercises, or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
            />
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-yellow-400" />
              <span>50+ In-Depth Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-yellow-400" />
              <span>Evidence-Based Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={18} className="text-yellow-400" />
              <span>Actionable Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span>Browse by Topic</span>
            <ChevronRight size={20} className="text-gray-500" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.id}`}
                className={`p-6 rounded-xl bg-gradient-to-br ${cat.color} border border-gray-800 hover:border-yellow-500/50 transition group`}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold mb-1 group-hover:text-yellow-400 transition">{cat.name}</h3>
                <p className="text-sm text-gray-400">{cat.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-4 py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Start Here</h2>
            <Link href="/blog" className="text-yellow-400 hover:underline flex items-center gap-1">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={`bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className={`font-bold mb-2 group-hover:text-yellow-400 transition ${idx === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">💡 Quick Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {quickTips.map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="font-semibold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshoot" className="px-4 py-12 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">🔍 Troubleshoot Your Pain</h2>
          <p className="text-gray-400 mb-8">Select what describes your situation to find relevant content.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {troubleshootingGuides.map((guide, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">{guide.title}</h3>
                <div className="space-y-2">
                  {guide.items.map((item, i) => (
                    <button
                      key={i}
                      className="w-full text-left px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-yellow-500/20 hover:text-yellow-400 transition text-sm"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">First Principles</h3>
              <p className="text-gray-400 text-sm">
                We explain WHY things work, not just what to do. Understanding your body makes you better at fixing it.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-400 text-sm">
                Every recommendation is backed by research. No bro-science, no outdated advice, no "trust me."
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">Actionable</h3>
              <p className="text-gray-400 text-sm">
                You'll always leave with something you can do TODAY. Reading is nice, doing is better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Guided Recovery?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our app creates personalized exercise programs based on your specific condition, 
              tracks your progress, and adapts as you improve.
            </p>
            <Link 
              href="/app"
              className="inline-block px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
            >
              Try the App Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Foundational Rehab</h3>
              <p className="text-sm text-gray-400">
                Evidence-based education for lasting recovery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-300">Topics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog?category=back-pain" className="hover:text-white">Lower Back Pain</Link></li>
                <li><Link href="/blog?category=sciatica" className="hover:text-white">Sciatica</Link></li>
                <li><Link href="/blog?category=mobility" className="hover:text-white">Mobility</Link></li>
                <li><Link href="/blog?category=shoulders" className="hover:text-white">Shoulder Pain</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-300">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog" className="hover:text-white">All Articles</Link></li>
                <li><Link href="#troubleshoot" className="hover:text-white">Troubleshooting</Link></li>
                <li><Link href="/app" className="hover:text-white">Exercise App</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-300">Disclaimer</h4>
              <p className="text-xs text-gray-500">
                This content is for educational purposes only and is not a substitute for professional medical advice. 
                Consult a healthcare provider for diagnosis and treatment.
              </p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            © 2026 Foundational Rehab. Built with evidence, not hype.
          </div>
        </div>
      </footer>
    </div>
  );
}
