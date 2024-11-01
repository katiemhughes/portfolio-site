import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import { BlogPost } from '@/lib/posts';
import PostParagraphs from './PostParagraphs';
import 'app/components/posts.scss';

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="posts__post">
      <p className="posts__date">{formattedDate}</p>
      <Link className="posts__title" href={`/posts/${id}`}>{title}</Link>
      <br />
      <PostParagraphs
        post={post}
      />
    </li>
  );
}
