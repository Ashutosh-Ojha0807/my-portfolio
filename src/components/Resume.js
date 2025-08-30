import React from "react";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>

      <div className="resume-card">
        {/* Resume Preview Image */}
        <div className="resume-img">
          <img
            src="/images/resume-preview.png"  // place resume-preview.png inside public/images/
            alt="Resume Preview"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"; // fallback icon
            }}
          />
        </div>

        {/* Text + Download Button */}
        <div className="resume-text">
          <p>
            Interested in my journey and skills? You can download my full resume here:
          </p>
          <a href="/Ashutosh_Ojha_resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
