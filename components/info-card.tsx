import Link from "next/link";

type InfoCardProps = {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
  href: string;
};

export function InfoCard({
  image,
  imageAlt,
  label,
  title,
  description,
  href,
}: InfoCardProps) {
  return (
    <article className="info-card">
      <Link className="card-image-link" href={href} aria-label={`Read about ${title}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="card-image" src={image} alt={imageAlt} loading="lazy" />
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="card-copy">
        <span className="eyebrow">{label}</span>
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
