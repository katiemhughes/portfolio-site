import { BlogPost } from '@/lib/posts';

export default function PostParagraphs({ post }: { post: BlogPost }) {
  const { htmlParagraphsFormatted } = post;

  return (
    <div className="posts__shortened" dangerouslySetInnerHTML={{ __html: htmlParagraphsFormatted }} />
  );
}
