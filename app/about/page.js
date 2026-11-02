
// export default function AboutPage() {
//   return (
//     <main>
//       <section id="about" className="about-section">
//         <h2>About Creamy Bliss</h2>
//         <p>
//           At Creamy Bliss, we believe every scoop should bring a little happiness.
//           Discover delightful flavors and make your everyday moments sweeter.
//         </p>
//       </section>
//     </main>
//   );
// }



export default function AboutPage() {
  return (
    <main>
      <section id="about" className="about-section">
        <div className="about-content">
          <p className="about-tagline">About Us</p>

          <h2>About Creamy Bliss</h2>

          <p className="about-description">
            At Creamy Bliss, we believe every scoop should bring a little
            happiness. Discover delightful flavors and make your everyday
            moments sweeter.
          </p>

          <a href="/flavors" className="about-button">
            Our Flavors
          </a>
        </div>

        <div className="about-image">
          <img
            src="/images/image.png"
            alt="A delicious bowl of ice cream"
          />
        </div>
      </section>
    </main>
  );
}

