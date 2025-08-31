import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Profile Image */}
        <div className="hero-img">
          <img
            src="https://i.ibb.co/Zpt3mHrB/Profile.jpg"   // place profile.jpg inside public/images/
            alt="Ashutosh Ojha"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // fallback avatar
            }}
          />
        </div>

        {/* Centered Text */}
        <div className="hero-text">
          <h1>Hi, I'm Ashutosh Ojha</h1>
          <p>Aspiring Software Engineer | Web Developer | AI Enthusiast</p>
          <a href="#projects" className="cta">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
