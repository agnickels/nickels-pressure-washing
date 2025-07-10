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
        <p>Email: <a href="mailto:nickels@example.com">nickels@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Nickels Pressure Washing •{" "}
          <a href="https://nickelspressurewashing.org">nickelspressurewashing.org</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
