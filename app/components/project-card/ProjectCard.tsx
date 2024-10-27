/* eslint-disable max-len */
import Image from 'next/image';
import './project-card.scss';

export type Project = {
  imageSrc: string,
  imageAlt: string,
  cardTitle: string,
  cardContent: string,
  sourceCodeHref: string,
  liveSiteHref: string,
  tech: { text: string, link: string }[],
};

type ProjectCardProps = {
  project: Project
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project__card">
      <Image className="card__image" alt={project.imageAlt} src={project.imageSrc} width={250} height={250} />
      <div className="card__text-container">
        <h3 className="card__title">{project.cardTitle}</h3>
        <p className="card__content">{project.cardContent}</p>
        <div className="card__code">
          <a className="code__link" href={project.sourceCodeHref} target="_blank" rel="noreferrer">Source code</a>
          <a className="code__link" href={project.liveSiteHref} target="_blank" rel="noreferrer">Live site</a>
        </div>
        <div className="card__links">
          {project.tech.map((techType, index) => (
            <a className="card__link" key={index} href={techType.link} target="_blank" rel="noreferrer">{techType.text}</a>
          ))}
        </div>
      </div>
    </article>
  );
}
