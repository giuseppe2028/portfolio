import {Container, Row, Col, Button} from "react-bootstrap";
import { PageSubtitle, PageTitle } from "./TextComponents.jsx";
import image from "../assets/react.svg"
import {ButtonLink} from "./ButtonLink.jsx";
export function About() {
    return (
        <Container className="d-flex flex-column align-items-center py-5" style={{ maxWidth: "900px" }}>
            <Row className="mb-3">
                <h6 className="text-muted">More About Me</h6>
            </Row>
            <Row className="mb-4">
                <h1 className="text-center" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>A Student with High Attention to Personal Projects</h1>
            </Row>
            <Row>
                <Col>
                    <p className="about-text">
                        I am a Master’s degree student with a strong passion for personal projects. I graduated with a
                        Bachelor’s degree from the University of Palermo, where I worked on various university projects that
                        allowed me to collaborate in teams and develop strong communication skills, even with people from
                        around the world. In addition, I dedicated time to personal projects to expand my knowledge and
                        skills.
                    </p>

                    <p className="about-text">
                        When I’m not coding, I focus on staying updated with the latest technologies and on personal growth.
                        I also enjoy working with electronics.
                    </p>

                    <p className="about-text">
                        I have also contributed to an open-source project, which helped me understand the importance of
                        working with large codebases and reviewing code written by others.
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start mt-3">
                <Col>
                    <ButtonLink image = "public/images/github.svg" text="Github" onClick={()=>{
                        window.open("https://github.com/giuseppe2028", "_blank");
                    }}/>
                </Col>
                <Col>
                    <ButtonLink image = "public/images/linkedin.svg" text="LinkedIn" onClick={()=>{
                        window.open("https://www.linkedin.com/in/giuseppe-barone-749210215/", "_blank");
                    }}/>
                </Col>
            </Row>
        </Container>
    );
}




