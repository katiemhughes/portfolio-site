import { notFound } from 'next/navigation';
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import getSortedPostsData, { getPostData } from '../../../lib/posts';
import 'app/components/posts.scss';

export function generateStaticParams() {
  const posts = getSortedPostsData(); // deduped

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

export async function PostParagraphs(
  { params }: { params: { postId: string } },
) {
  const posts = await getSortedPostsData(); // deduped
  const { postId } = params;
  const { htmlParagraphsFormatted } = await getPostData(postId);

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return (
    <div className="posts__shortened" dangerouslySetInnerHTML={{ __html: htmlParagraphsFormatted }} />
  );
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData(); // deduped
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

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
