import Link from "next/link";
import { InfoCard } from "@/components/info-card";

const plants = [
  {
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A cluster of leafy green plants in soft window light",
    label: "The easygoing one",
    title: "Golden pothos",
    description:
      "Happy to trail from a shelf, forgiving if you forget a watering, and lovely in almost any room.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
    imageAlt: "An easy-care indoor plant with sculptural upright leaves",
    label: "The low-light lover",
    title: "Snake plant",
    description:
      "Its upright leaves bring a little drama while asking for very little attention in return.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A lush green houseplant growing indoors",
    label: "The independent one",
    title: "ZZ plant",
    description:
      "Glossy leaves and a slow-and-steady nature make this a relaxed choice for busy weeks.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" /> A friendlier kind of plant guide
          </span>
          <h1>A little greener, <em>every day.</em></h1>
          <p>
            You don’t need a green thumb to grow something lovely. Start with
            one good plant, a little light, and advice that makes sense.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#easy-plants">
              Meet your first plant <span aria-hidden="true">↓</span>
            </Link>
            <Link className="text-link" href="/care">
              Browse the care guide <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-icon" aria-hidden="true">✳</span>
            <span>Good plants. No guesswork. Room to grow.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div
            className="hero-photo"
            role="img"
            aria-label="A sculptural green succulent in a pale pot"
          />
          <div className="photo-caption">
            <span className="caption-icon" aria-hidden="true">✿</span>
            <span>
              <strong>Start where you are.</strong>
              <small>Every plant person starts somewhere.</small>
            </span>
          </div>
          <span className="photo-index">01 / GROW AT YOUR OWN PACE</span>
        </div>
      </section>

      <section className="intro-strip" aria-label="Our approach">
        <p>LESS PRESSURE, MORE POTTING.</p>
        <span aria-hidden="true">✳</span>
        <p>PLANTS FOR REAL LIFE.</p>
        <span aria-hidden="true">✳</span>
        <p>GROWING IS A PRACTICE.</p>
      </section>

      <section className="plant-section section-shell" id="easy-plants">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A good place to begin</span>
            <h2>Meet your <em>first</em> plant.</h2>
          </div>
          <p>
            Easy-to-love plants for all kinds of homes, schedules, and
            first-time plant parents.
          </p>
        </div>
        <div className="card-grid">
          {plants.map((plant) => (
            <InfoCard key={plant.title} {...plant} href="/care" />
          ))}
        </div>
      </section>

      <section className="care-promo section-shell">
        <div className="promo-mark" aria-hidden="true">✳</div>
        <div className="promo-copy">
          <span className="eyebrow">Small steps, happy leaves</span>
          <h2>Care for your plants, <em>not by the calendar.</em></h2>
          <p>
            Learn the simple signs your plant is asking for water, better
            light, or just a little more room.
          </p>
        </div>
        <Link className="button button-light" href="/care">
          Explore plant care <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
