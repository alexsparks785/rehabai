import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  contentHtml?: string;
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): PostData | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '',
    readingTime: data.readingTime || '',
    category: data.category || '',
    tags: data.tags || [],
    contentHtml: content, // Raw markdown for now
  };
}

export async function getPostWithHtml(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '',
    readingTime: data.readingTime || '',
    category: data.category || '',
    tags: data.tags || [],
    contentHtml,
  };
}

export function getAllPosts(): PostData[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PostData => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function getRecentPosts(limit: number = 10): PostData[] {
  return getAllPosts().slice(0, limit);
}
