import { notFound } from 'next/navigation';
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import getSortedPostsData from '../../../lib/posts';
import 'app/components/posts.scss';

export async function generateStaticParams() {
  const posts = await getSortedPostsData(); // deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData(); // deduped
  const { postId } = params;

  const blogPost = posts.find((post) => post.id === postId);

  if (!blogPost) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: blogPost.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData(); // deduped
  const { postId } = params;

  const blogPost = posts.find((post) => post.id === postId);
  // console.log('blog post', blogPost);

  if (!blogPost) {
    return notFound();
  }

  // here??

  const { title, date, contentHtml } = blogPost;

  const pubDate = getFormattedDate(date);

  return (
    <main className="blog__post">
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Link href="/blog">Back to the blog</Link>
      </article>
    </main>
  );
}
