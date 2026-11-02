
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Creamy Bliss</h2>
        <p className="content">
          A Little Scoop of Happiness
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <Link href="/">Home</Link>
        <Link href="/flavors">Flavors</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <p className="copyright">
        © 2026 Creamy Bliss. All rights reserved.
      </p>
    </footer>
  );
}