import getSortedPostsData from '@/lib/posts';
import Posts from '../components/Posts';
import './blog.scss';

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <main className="blog">
      <h1 className="blog__title">
        Blog
        <span className="blog__title--lilac">.</span>
      </h1>
      <article>
        <Posts posts={posts} />
      </article>
    </main>
  );
}
