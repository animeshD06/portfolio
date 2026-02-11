import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import CMSdemo from "../../Assets/Projects/CMSdemo.mp4";
import athleixDemo from "../../Assets/Projects/athletixDemo.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={CMSdemo}
              isBlog={false}
              title="Crowd Management System (CMS)"
              description="Efficient Crowd Management for Events & Public Spaces Real-time AI Surveillance, Safety Alerts, Data Analytics, Emergency Response, and Crowd Control with Heatmap Visualization and Tracking (YOLO11x)."
              ghLink="https://github.com/animeshD06/Crowd-Management-System-software.git"
              demoLink="https://github.com/animeshD06/Crowd-Management-System-software.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={athleixDemo}
              isBlog={false}
              title="Athletix - Sports E-commerce Platform"
              description="A modern, feature-rich e-commerce platform for premium sports gear and athletic wear."
              ghLink="https://github.com/animeshD06/Athletix.git"
              demoLink="https://athletix-drab.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TerraGuard"
              description="TerraGuard is a comprehensive Android application designed to enhance personal safety and emergency preparedness"
              ghLink="https://github.com/animeshD06/TeraGaurd.git"
              demoLink="https://github.com/animeshD06/TeraGaurd.git"              
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
