// import React from "react"
// export default function About() 
// {
//   return (
//     <div>
//       <h1>About Component</h1>
//     </div>
//   )
// }
import React from "react";
import './About.css'; 

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="mission-statement">
        Our mission is to provide exceptional customer service and support, ensuring that every interaction enhances our clients' experience.
      </p>
      
      <h2>Our Story</h2>
      <p>
        Founded in 2023, we began as a small team of dedicated professionals passionate about customer service. Over the years, we have grown into a highly skilled team committed to delivering quality support and building lasting relationships with our clients.
      </p>
      
      <h2>Meet the Team</h2>
      <ul className="team-list">
        <li>
          <strong>Jane Doe</strong> - CEO
          <p>With over 10 years of experience in the customer service industry, Jane leads our team with a vision for excellence and client satisfaction.</p>
        </li>
        <li>
          <strong>John Smith</strong> - Operations Manager
          <p>John oversees daily operations, ensuring our team is equipped to provide the highest level of service to our clients.</p>
        </li>
        <li>
          <strong>Alice Johnson</strong> - Team Leader
          <p>Alice is responsible for training and mentoring our customer support representatives, fostering a culture of empathy and professionalism.</p>
        </li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have any questions or would like to learn more about our call center services, feel free to reach out:</p>
      <p>Email: <a href="mailto:support@callcenter.com">support@callcenter.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
    </div>
  );
}