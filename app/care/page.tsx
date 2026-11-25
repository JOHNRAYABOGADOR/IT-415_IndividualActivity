import Link from "next/link";
import { InfoCard } from "@/components/info-card";

const basics = [
  {
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sunlight illuminating the leaves of an indoor plant",
    label: "01 / Light",
    title: "Follow the light",
    description:
      "A bright spot out of harsh direct sun suits many houseplants. Turn the pot now and then so every side gets its moment.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Healthy green leaves growing in a sunlit room",
    label: "02 / Water",
    title: "Check before you pour",
    description:
      "Touch the top inch of soil first. If it still feels damp, wait a few days; if it’s dry, water slowly until it drains.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A healthy potted plant in a simple terracotta pot",
    label: "03 / Room to grow",
    title: "Keep it comfortable",
    description:
      "Choose a pot with drainage, keep leaves clear of cold drafts, and give your plant a little breathing room.",
  },
];

export default function CarePage() {
  return (
    <main>
      <section className="care-hero">
        <div className="care-hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> The simple care guide
          </span>
          <h1>Less worrying. <em>More growing.</em></h1>
          <p>
            Plant care isn’t a perfect schedule. It’s a few small habits and
            learning to notice what your plant needs.
          </p>
          <Link className="button button-dark" href="#care-basics">
            Start with the basics <span aria-hidden="true">↓</span>
          </Link>
          <span className="care-page-note">A LITTLE GUIDE FOR YOUR EVERYDAY.</span>
        </div>
        <div className="care-hero-image" role="img" aria-label="Lush green plants growing in a sunlit home" />
      </section>

      <section className="care-basics section-shell" id="care-basics">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Three things to remember</span>
            <h2>Keep it <em>simple.</em></h2>
          </div>
          <p>
            You don’t need a shelf full of tools. A little attention goes a
            long way.
          </p>
        </div>
        <div className="card-grid">
          {basics.map((basic) => (
            <InfoCard key={basic.title} {...basic} href="#weekly-check-in" />
          ))}
        </div>
      </section>

      <section className="weekly-check section-shell" id="weekly-check-in">
        <div className="weekly-image" role="img" aria-label="A calm, green corner filled with houseplants" />
        <div className="weekly-copy">
          <span className="eyebrow">Your five-minute check-in</span>
          <h2>A small moment of care goes a <em>long way.</em></h2>
          <p>
            Once a week, take a look at your plant. No strict schedule, no
            special kit—just a chance to notice how it’s doing.
          </p>
          <ul className="check-list">
            <li><span aria-hidden="true">✓</span> Feel the soil before watering.</li>
            <li><span aria-hidden="true">✓</span> Look for new growth or tired leaves.</li>
            <li><span aria-hidden="true">✓</span> Turn the pot toward the light.</li>
          </ul>
          <Link className="text-link" href="/">
            Back to the plant guide <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="closing-note">
        <span aria-hidden="true">✳</span>
        <p>There’s no such thing as a perfect plant parent.</p>
        <span className="closing-subtitle">Just you, showing up for one little leaf.</span>
      </section>
    </main>
  );
}
