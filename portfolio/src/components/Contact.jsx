import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import {ButtonLink} from "./ButtonLink.jsx";
export const Contact = () => {
    return (
        <Container className="ps-0 pe-0">
            <Row className="text-center">
                <h2>Contact Me</h2>
            </Row>
            <Row className="justify-content-center text-center ps-0 pe-0 ms-0 me-0">
                <Col md="auto">
                    <p className="text">
                        Please contact me directly at{" "}
                        <a href="mailto:giuseppebarone2028@gmail.com" style={{ textDecoration: "none"}}>
                            giuseppebarone2028@gmail.com
                        </a>{" "}
                        or through this form.
                    </p>
                    <Form style={{ margin: "auto",marginTop: "25px", width: "100%"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control required type="email" placeholder="Your email" style={{height:50,borderRadius:10}} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                placeholder="Your Message"
                                style={{ height: "300px", borderRadius: "10px" }}
                            />
                        </Form.Group>

                        <ButtonLink
                            type="submit"
                            style={{ justifyContent: "end" }}
                            text={<><i className="bi bi-send me-2"></i> Submit</>}
                            onClick={() => {
                                const email = document.getElementById("formBasicEmail").value;
                                const message = document.getElementById("formBasicMessage").value;

                                if (email && message) {
                                    const subject = "Contact Form Submission";
                                    const body = `From: ${email}%0D%0A%0D%0A${message}`;
                                    window.location.href = `mailto:giuseppebarone2028@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                } else {
                                    alert("Please fill in both fields before submitting.");
                                }
                            }}
                        />
                        </Form>
                </Col>
            </Row>
        </Container>
    );
};