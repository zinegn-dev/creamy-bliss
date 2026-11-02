"use client";



export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">A Little Scoop of Happiness</p>

          <h1>Make Every Scoop a Little Sweeter!</h1>

          <p className="hero-description">
            Discover your favorite flavors and make every moment a little
            sweeter with Creamy Bliss.
          </p>

          <a href="/flavors" className="hero-button">
            Explore Our Flavors
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/image.png"
            alt="Delicious ice cream scoops"
          />
        </div>
      </section>
    </main>
  );
}





