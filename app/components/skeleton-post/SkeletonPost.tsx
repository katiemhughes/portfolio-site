import './skeleton-post.scss';

export default function SkeletonPost() {
  return (
    <div className="loader-blog">
      <section aria-label="Skeleton loader" className="loader-blog__inner">
        <p aria-label="Skeleton loader text" className="loader-blog__text">Skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader-blog__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader-blog__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader-blog__text">Even more skeleton loading text</p>
      </section>
    </div>
  );
}
