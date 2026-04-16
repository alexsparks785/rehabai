import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Foundational Rehab',
  description: 'Evidence-based guides on back pain recovery, exercises, and the foundational approach to lasting relief.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  // Group posts by category
  const categories = [...new Set(posts.map((p) => p.category || 'Uncategorized'))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-xl text-gray-600">
            Evidence-based guides on back pain recovery, exercises, and the foundational approach to lasting relief.
          </p>
          <p className="text-sm text-gray-500 mt-2">{posts.length.toLocaleString()} articles</p>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            All ({posts.length})
          </span>
          {categories.slice(0, 10).map((category) => (
            <span
              key={category}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {category} ({posts.filter((p) => p.category === category).length})
            </span>
          ))}
        </div>

        {/* Posts List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  {post.category && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                  )}
                  {post.readingTime && <span>{post.readingTime}</span>}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                {post.date && (
                  <p className="text-xs text-gray-400 mt-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2026 Foundational Rehab. Evidence-based recovery for everyone.</p>
        </div>
      </footer>
    </div>
  );
}
