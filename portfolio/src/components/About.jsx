import {Container, Row, Col, Button} from "react-bootstrap";
import { PageSubtitle, PageTitle } from "./TextComponents.jsx";
import image from "../assets/react.svg"
import {ButtonLink} from "./ButtonLink.jsx";
import {useTranslation} from "react-i18next";
export function About() {
    const {t} = useTranslation();
    return (
        <Container className="d-flex flex-column align-items-center py-5" style={{ maxWidth: "900px" }} data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom"
                   data-aos-duration="1500">
            <Row className="mb-3">
                <h6 className="text-muted">{t('More About Me')}</h6>
            </Row>
            <Row className="mb-4">
                <h1 className="text-center" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{t('A Student with High Attention to Personal Projects')}</h1>
            </Row>
            <Row>
                <Col>
                    <p className="about-text">
                        {t('about1')}
                    </p>

                    <p className="about-text">
                        {t('about2')}
                    </p>

                    <p className="about-text">
                        {t('about3')}
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start mt-3">
                <Col>
                    <ButtonLink image = "images/github.svg" text="Github" onClick={()=>{
                        window.open("https://github.com/giuseppe2028", "_blank");
                    }}/>
                </Col>
                <Col>
                    <ButtonLink image = "images/linkedin.svg" text="LinkedIn" onClick={()=>{
                        window.open("https://www.linkedin.com/in/giuseppe-barone-749210215/", "_blank");
                    }}/>
                </Col>
            </Row>
        </Container>
    );
}




