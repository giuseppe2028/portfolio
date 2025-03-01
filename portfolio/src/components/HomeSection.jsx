import {Col, Container, Row} from "react-bootstrap";
import profileImage from "../assets/profileImage.jpeg";

export function HomeSection() {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col md={6}>
                    <h1>Hello Mano, I'm Giuseppe Barone</h1>
                    <h2>Master's degree student - Software Engineering at Politecnico of Turin</h2>
                </Col>
                <Col md={6} className="text-center">
                    <img src={profileImage} alt="profileImage"
                         style={{width: "80%", maxWidth: "300px", borderRadius: "50%"}}/>
                </Col>
            </Row>
        </Container>
    )
}
