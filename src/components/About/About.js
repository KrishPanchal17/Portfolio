import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="https://krishpanchal17.github.io/Portfolio/bgm.png" alt="profile" />
          </ScrollAnimation>

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <h2>Hello! I'm <strong>Krish Panchal</strong></h2>
              <p>
                I'm currently a third-year B.Tech student in Computer Science and Engineering at the Symbiosis Institute of Technology, Pune. With a strong passion for Web Development and Data Structures & Algorithms (DSA), I'm continually motivated to explore efficient, dynamic solutions to complex challenges.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <h3><strong>Educational Background:</strong></h3>
              <ul>
                <li>
                  <strong>Bachelor's Degree (B.Tech)</strong> in Computer Science and Engineering<br />
                  <em>Symbiosis Institute of Technology, Pune</em><br />
                  Current CGPA: <strong>7.70</strong>
                </li>
                <li>
                  <strong>12th Grade</strong> – Namo Rims Junior College, Maharashtra Board<br />
                  Percentage: <strong>74%</strong>
                </li>
                <li>
                  <strong>10th Grade</strong> – Amanora School, CBSE, Pune<br />
                  Percentage: <strong>93%</strong>
                </li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <h3><strong>Certifications:</strong></h3>
              <ul>
                <li>Data Structures & Algorithms (DSA) in Java – Scalar Topics</li>
                <li>Data Structures & Algorithms (DSA) in C++ – Scalar Topics</li>
                <li>Introduction to HTML, CSS, and JavaScript – Coursera</li>
                <li>Introduction to C++ – Simplilearn</li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <h3><strong>Co-Curricular and Extracurricular Activities:</strong></h3>
              <ul>
                <li>
                  <strong>Programming Committee Member</strong> – CodeX Club of College<br />
                  Served from August 2023 to August 2024, collaborating with peers on programming initiatives and fostering a community of coding enthusiasts.
                </li>
                <li>
                  <strong>Volunteering and Service Learning</strong><br />
                  Worked with NGOs, teaching students and aiding in transitioning data to online formats. This experience honed my skills in communication, data management, and making a positive community impact.
                </li>
              </ul>
            </ScrollAnimation>


            <ScrollAnimation animateIn="fadeInLeft">
              <h3><strong>Hobbies and Interests:</strong></h3>
              <p>
                Outside of academics, I enjoy playing cricket, listening to music, and playing the piano. These hobbies keep me balanced and help me approach challenges with fresh perspectives.
              </p>
            </ScrollAnimation><br></br>
            <ScrollAnimation animateIn="fadeInLeft">
              <p>
                As I prepare for a career in technology, I’m enthusiastic about tackling more advanced projects that allow me to create impactful, innovative solutions. Working in collaborative environments brings out my best work, and I’m excited to contribute to projects that drive positive change.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <h3 className="tagline2">Technologies I'm Proficient In</h3>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
