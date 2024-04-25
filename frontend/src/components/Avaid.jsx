import React from "react";
import '../styles/Avaid.css';

function NavBar() {
  let titles1 = ['ABOUT', 'VISION', 'APPROACH'];
  let titles2 = ['INNOVATION', 'DIGITIZATION'];
  let descriptions = [
    "Learn about our rich heritage, values, and journey that define who we are as a company. Discover the story behind our brand, our commitment to excellence, and how we've evolved over the years to become a leader in our industry.",
    "Explore our ambitious vision for the future and how we aspire to make a meaningful impact in the world. Delve into our long-term goals, strategic initiatives, and our unwavering dedication to innovation and sustainability.",
    "Gain insights into our unique approach to business and how we differentiate ourselves in the market. Discover our customer-centric philosophy, focus on quality and service, and the meticulous attention to detail that sets us apart from the competition.",
    "Dive into the realm of innovation and creativity at our company. Explore how we harness the latest technologies, foster a culture of experimentation, and continually push the boundaries to drive progress and stay ahead in a rapidly changing world.",
    "Discover how we embrace the digital revolution to enhance efficiency, agility, and customer experience. Learn about our digital transformation journey, the cutting-edge tools and technologies we leverage, and how we adapt to thrive in the digital age."
  ];

  return (
    <div className="avaid-container">
      <div className="avaid-box">
      {titles1.map((title, index) => (
        <div className="avaid-item" key={index}>
          <h2 className="avaid-title">{title}</h2>
          <p className="avaid-description">{descriptions[index]}</p>
        </div>
      ))}
      </div>
      <div className="avaid-box">
      {titles2.map((title, index) => (
        <div className="avaid-item" key={index}>
          <h2 className="avaid-title">{title}</h2>
          <p className="avaid-description">{descriptions[index]}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default NavBar;
