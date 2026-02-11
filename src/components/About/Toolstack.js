import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDocker } from "react-icons/si";
import { FaGitAlt, FaChrome } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsStars fontSize="24px" />
        <div className="tech-icons-text">Antigravity</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <VscCode fontSize="24px" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChrome fontSize="24px" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize="24px" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize="24px" />
        <div className="tech-icons-text">Docker</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
