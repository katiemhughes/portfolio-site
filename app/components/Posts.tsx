import getSortedPostsData from '@/lib/posts';
import ListItem from './ListItem';
import 'app/components/posts.scss';

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="posts">
      <ul className="posts__list">
        {posts.map((post: any) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
