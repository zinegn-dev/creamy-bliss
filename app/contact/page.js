
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formMessage, setFormMessage] = useState("");

  return (
    <main>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a question? We'd love to hear from you!</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setFormMessage("Thank you! Your message has been received.");
            event.currentTarget.reset();
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            required
          />

          <input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            required
          />

          <textarea
            placeholder="Your message"
            aria-label="Your message"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {formMessage && (
          <p className="form-message" role="status">
            {formMessage}
          </p>
        )}
      </section>
    </main>
  );
}
