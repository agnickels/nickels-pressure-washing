import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Nickels Pressure Washing</h1>
        <p>Clean driveways, patios, and more — professionally done</p>
      </header>

      <section className="services">
        <h2>What We Do</h2>
        <ul>
          <li>✅ Driveway Pressure Washing</li>
          <li>✅ Patio and Sidewalk Cleaning</li>
          <li>✅ Soft Washing for Siding</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
<p>Email: <a href="mailto:a.nickels08@icloud.com">a.nickels08@icloud.com</a></p>
<p>Phone: <a href="tel:5866658135">(586) 665-8135</a></p>
      </section>
    <section className="quote-form">
  <h2>Request a Free Quote</h2>
  <form
    action="https://formsubmit.co/a.nickels08@icloud.com"
    method="POST"
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}
  >
    {/* FormSubmit spam prevention */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="New Quote Request from Website" />

    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <input type="tel" name="phone" placeholder="Your Phone Number" required />
    <textarea name="message" placeholder="Describe the area(s) you'd like cleaned" rows="4" required></textarea>

    <button type="submit">Send Request</button>
  </form>
</section>


<div style={{ marginTop: '2rem' }}>
  <h3>Service Area</h3>
  <p>We proudly serve Mount Clemens and surrounding areas in Michigan.</p>
  <div style={{ marginTop: '1rem' }}>
    <iframe
  title="Mount Clemens Service Area"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.3335295082716!2d-82.88379892408275!3d42.59725522482661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e8b8c5c2248b%3A0xb160b137ea779d9f!2sMount%20Clemens%2C%20MI%2048043!5e0!3m2!1sen!2sus!4v1720642994582!5m2!1sen!2sus"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

<footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
  © {new Date().getFullYear()} Nickels Pressure Washing • <a href="https://nickelspressurewashing.org">nickelspressurewashing.org</a>
</footer>

    </div>
  );
}

export default App;
