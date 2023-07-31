import './skeleton-about.scss';

export default function SkeletonCard({ loading }: { loading: boolean }) {
  return loading ? (
    <div className="loader">
      <section aria-label="Skeleton loader" className="loader__inner">
        <p aria-label="Skeleton loader text" className="loader__text">Skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">More skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">Even more skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">Even more skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">Even more skeleton loading text</p>
        <p aria-label="Skeleton loader text" className="loader__text">Even more skeleton loading text</p>
      </section>
    </div>
  ) : null;
}
