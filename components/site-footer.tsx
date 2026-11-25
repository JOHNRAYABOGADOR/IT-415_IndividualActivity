import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M25.7 5.2C15.2 5.3 7 9.5 7 17.3c0 4 2.8 6.4 6.4 6.4 7.7 0 12.2-8.6 12.3-18.5Z"
                fill="currentColor"
              />
              <path
                d="M5.5 27c3.4-7 8.3-11.8 15.2-15.6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <span>little leaf</span>
        </Link>
        <p>A little more green, one day at a time.</p>
        <Link className="footer-link" href="/care">
          A simple care guide <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </footer>
  );
}
