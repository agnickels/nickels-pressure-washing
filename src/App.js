import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Nickels Pressure Washing</h1>
      <p>Expert pressure washing for driveways, patios, and more.</p>
      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} Nickels Pressure Washing — <a href="https://nickelspressurewashing.org">nickelspressurewashing.org</a>
      </footer>
    </div>
  );
}

export default App;