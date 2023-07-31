import './skeleton-card.scss';

export default function SkeletonAbout({ loading }: { loading: boolean }) {
  return loading ? (
    <article aria-label="Skeleton loading card" className="is-loading">
      <div aria-label="Skeleton loading card image" className="is-loading__image" />
      <div className="is-loading__content">
        <h3 aria-label="Skeleton loading card title" className="is-loading__title">Skeleton loading card</h3>
        <p aria-label="Skeleton loading card text" className="is-loading__text">Skeleton loading text</p>
        <p aria-label="Skeleton loading card text" className="is-loading__text">More skeleton loading text</p>
        <p aria-label="Skeleton loading card text" className="is-loading__text">More skeleton loading text</p>
      </div>
    </article>
  ) : null;
}
