import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate about the realization and development of web projects,
              I naturally oriented myself towards a career as a web developer.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> Html/Css, ReactJS, Laravel and Wordpress. </b>
              </i>
              <br />
              <br />
              <i>
                <b className="blue"> Clever, dynamic and always at the forefront of new technologies, </b>I like to take up challenges and make it a point of honor to deliver 
                high-performance applications{" "}
                <b className="blue">
                that meet customer needs.
                </b>
              </i>
              <br />
              <br />
              Today I want to join a dynamic and young company, so I will be happy 
              to join your team as a <b className="blue">Web developer.</b>
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}
export default Home2;
