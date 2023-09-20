import './skeleton-post.scss';

export default function SkeletonPost() {
  return (
    <div className="loader">
      <section aria-label="Skeleton loader" className="loader__inner">
        <p aria-label="Skeleton loader text" className="loader__text">Skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">Even more skeleton loading text</p>
      </section>
    </div>
  );
}
