import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from 'emailjs-com';
import { ButtonLink } from "./ButtonLink.jsx";
import { useState } from "react";
import {useTranslation} from "react-i18next";

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formRef = useRef(null); // Riferimento alla form

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita il refresh della pagina

        const serviceId = "service_mry8kte";
        const templateId = "template_1gzi1af";
        const userId = "qjldNalz1-HLrXPIt";

        const templateParams = {
            user_email: email,
            message: message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log("Email inviata con successo!", response.status, response.text);
                alert("Messaggio inviato con successo!");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {
                console.error("Errore nell'invio dell'email", err);
                alert("Errore nell'invio del messaggio, riprova più tardi.");
            });
    };
    const {t} = useTranslation();
    return (
        <Container className="ps-0 pe-0" ref={formRef}>
            <Row className="text-center">
                <h2>{t('ContactTitle')}</h2>
            </Row>
            <Row className="justify-content-center text-center ps-0 pe-0 ms-0 me-0">
                <Col md="auto">
                    <p className="text" dangerouslySetInnerHTML={{ __html: t('contactSubtitle') }}>
                    </p>
                    <Form style={{ margin: "auto", marginTop: "25px", width: "100%" }} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                required
                                type="email"
                                placeholder={t('Your email')}
                                style={{ height: 50, borderRadius: 10 }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                placeholder={t("Your Message")}
                                style={{ height: "300px", borderRadius: "10px" }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>

                        <div className="custom-submit">
                            <ButtonLink
                                type="submit"
                                style={{ justifyContent: "end" }}
                                text={<><i className="bi bi-send me-2"></i> {t('Submit')}</>}
                            />
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};