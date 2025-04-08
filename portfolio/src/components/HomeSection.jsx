import {Button, Col, Container, Row} from "react-bootstrap";
import profileImage from "../assets/profileImage.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ButtonLink} from "./ButtonLink.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
export function HomeSection() {

    useEffect(() => {
        AOS.init();
    }, [])
        const handleDownload = () => {
            const pdfUrl = "/files/cv.pdf"; // Percorso del file PDF nella cartella public
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.setAttribute("download", "cv.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    const { t,i18n } = useTranslation();
    return (
        <Container className="py-5 mt-5" data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom"
                   data-aos-duration="1500">
            <Row className="align-items-center flex-column-reverse flex-md-row">
                <Col md={6} className="mt-4">
                    <div style={{textAlign: "center", fontFamily: "Arial, sans-serif"}}>
                        <h1 dangerouslySetInnerHTML={{__html: t("greeting", {name: "Giuseppe Barone"})}}></h1>
                        <p style={{fontSize: "1.2em", color: "#555"}}
                           dangerouslySetInnerHTML={{__html: t("subtitle", {university: "Politecnico of Turin"})}}>
                        </p>
                        <div className="d-flex justify-content-center mt-4">
                            <ButtonLink
                                text={<><i className="bi bi-download me-2"></i> {t("resume")}</>}
                                onClick={handleDownload}
                            />
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <img
                        className="img-fluid"
                        src={profileImage}
                        alt="Giuseppe Barone"
                        style={{
                            width: "300px",         // larghezza fissa
                            height: "300px",        // altezza uguale per garantire il cerchio
                            borderRadius: "50%",    // rende l'immagine circolare
                            objectFit: "cover",     // ritaglia l'immagine senza deformarla
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}