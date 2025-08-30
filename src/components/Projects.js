import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Disaster Surveillance System</h3>
        <p>
          Developed an autonomous robotic vehicle using Arduino Uno, ESP32-CAM, and
          ultrasonic sensors to navigate through debris in train accidents and landslides.
          Integrated real-time video streaming and obstacle detection to assist rescue teams.
        </p>
      </div>

      <div className="project">
        <h3>Career Visualization Tool</h3>
        <p>
          An interactive career guidance platform to explore career paths, set goals, and
          analyze skill gaps. Features include flowcharts, milestone tracking, self-assessment
          quizzes, and mentor matching with responsive UI and database support.
        </p>
      </div>
    </section>
  );
}

export default Projects;
