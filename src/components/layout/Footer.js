import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          <span className="site-footer__name">© {site.name}</span>
          <span aria-hidden="true"> · </span>
          Based in {site.location.city}, {site.location.region}{" "}
          {site.location.postalCode}
        </p>
        <p className="site-footer__credit">
          Site by{" "}
          <a
            href="https://samir-portfolio-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samir Shaikh
          </a>
        </p>
      </div>
    </footer>
  );
}
