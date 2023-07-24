/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
import './skeleton-card.scss';

export default function SkeletonCard({ loading }: { loading: boolean }) {
  return loading ? (
    <article className="is-loading">
      <div className="is-loading__image"></div>
      <div className="is-loading__content">
        <h3 className="is-loading__title"></h3>
        <p className="is-loading__text"></p>
        <p className="is-loading__text"></p>
        <p className="is-loading__text"></p>
      </div>
    </article>
  ) : null;
}
