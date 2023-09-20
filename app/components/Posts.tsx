'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/posts';
import ListItem from './ListItem';
import 'app/components/posts.scss';
import SkeletonPost from './skeleton-post/SkeletonPost';

type PostsProps = {
  posts: BlogPost[];
};

export default function Posts({ posts }: PostsProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="posts">
      <ul className="posts__list">
        {posts.map((post: any) => (
          loading ? <SkeletonPost key={post.id} /> : <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
