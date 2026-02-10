import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
