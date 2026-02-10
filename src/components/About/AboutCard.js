import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Animesh Dubey</span>{" "}
            from <span className="purple">Vellore, India</span>.
            <br />
            I’m currently pursuing my B.Tech in{" "}
            <span className="purple">Computer Science and Engineering</span> at{" "}
            <span className="purple">Vellore Institute of Technology</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Animesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
