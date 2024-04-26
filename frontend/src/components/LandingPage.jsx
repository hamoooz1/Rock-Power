import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to My Website</h1>
        <p>This is a simple landing page built with React</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Contact information goes here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
