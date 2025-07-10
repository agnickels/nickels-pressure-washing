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

<div style={{ marginTop: '2rem' }}>
  <h3>Service Area</h3>
  <p>We proudly serve Mount Clemens and surrounding areas in Michigan.</p>
  <div style={{ marginTop: '1rem' }}>
    <iframe
      title="Service Area"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94028.85793517643!2d-82.99769458830309!3d42.67481120186527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e9f5a491236d%3A0x9bdbce8f6a0b1ecb!2sMacomb%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1720554079086!5m2!1sen!2sus"
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
