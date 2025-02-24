// import React from "react"
// export default function Home() 
// {
//   return (
//     <div>
//       <h1>Home Component</h1>
//     </div>
//   )
// }
import React from "react";
import './Home.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Our Application!</h1>
        <p>Your one-stop solution for all your needs.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>Discover the capabilities of our first feature that makes your life easier.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Explore how our second feature can help you achieve your goals.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Learn about our third feature and how it stands out from the rest.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us Today!</h2>
        <p>Be part of our community and enjoy exclusive benefits.</p>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
}