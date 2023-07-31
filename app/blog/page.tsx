import Posts from '../components/Posts';
import './blog.scss';

export default function BlogPage() {
  return (
    <main className="blog">
      <h1 className="blog__title">
        Blog
        <span className="blog__title--lilac">.</span>
      </h1>
      <article>
        <Posts />
      </article>
    </main>
  );
}
