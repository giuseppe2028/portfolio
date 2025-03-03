import {Button, Col, Container, Row} from "react-bootstrap";
import profileImage from "../assets/profileImage.jpeg";

export function HomeSection() {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col md={6} className="mt-4">
                    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
                        <h1>Hello <span style={{ fontSize: "1.2em" }}>👋</span>, I'm <strong>Giuseppe Barone</strong></h1>
                        <p style={{ fontSize: "1.2em", color: "#555" }}>
                            Master's degree student - Software Engineering at <br />
                            <strong>Politecnico of Turin</strong>
                        </p>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <img
                        src={profileImage}
                        alt="Giuseppe Barone"
                        style={{ width: "80%", maxWidth: "300px", borderRadius: "50%" }}
                    />
                </Col>
            </Row>
            <Row>
                <Button>Get Resume</Button>
            </Row>
        </Container>
    );
}