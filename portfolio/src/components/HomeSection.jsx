import {Button, Col, Container, Row} from "react-bootstrap";
import profileImage from "../assets/profileImage.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ButtonLink} from "./ButtonLink.jsx";
export function HomeSection() {
        const handleDownload = () => {
            const pdfUrl = "/files/cv.pdf"; // Percorso del file PDF nella cartella public
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.setAttribute("download", "cv.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    return (
        <Container className="py-5 mt-5">
            <Row className="mb-0 pb-0">
                <Col md={6} className="mt-4">
                    <div style={{textAlign: "center", fontFamily: "Arial, sans-serif"}}>
                        <h1>Hello <span style={{fontSize: "1.2em"}}>👋</span>, I'm <strong>Giuseppe Barone</strong></h1>
                        <p style={{fontSize: "1.2em", color: "#555"}}>
                            Master's degree student - Software Engineering at <br/>
                            <strong>Politecnico of Turin</strong>
                        </p>
                        <div className="d-flex justify-content-end me-5 mt-5">
                            <ButtonLink
                                text={
                                    <>
                                        <i className="bi bi-download me-2"></i> Get Resume
                                    </>
                                }
                                onClick={handleDownload}
                            />
                        </div>
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
        </Container>
    );
}