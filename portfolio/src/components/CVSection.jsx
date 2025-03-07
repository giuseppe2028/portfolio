import "react-vertical-timeline-component/style.min.css";
import { Col, Row } from "react-bootstrap";
import "./CVSection.css";
import {useData} from "../hooks/DataContext.jsx";
import {useTranslation} from "react-i18next";

export function CVSection() {
    const { data, loading } = useData();
    const {t} = useTranslation();
    const education = t('education',{ returnObjects: true })
    return (
        <div className="cv-section-container" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="1500">
            <Row className="d-flex justify-content-center align-items-center text-center" style={{ marginBottom: 20 }}>
                <h3 className="text-center"><strong>My Educational Path</strong></h3>
            </Row>
                {education.map((item, index) => (
                    <Col key={index} xs="auto" className="d-flex justify-content-center mb-4">
                        <CardSection
                            description={item.description}
                            image={item.logo}
                            title={item.name}
                            date={item.date}
                        />
                    </Col>
                ))}
        </div>
    );
}

function CardSection({ image, title, date, description }) {
    return (
        <div className="card-section">
            <Row className="d-flex g-0 align-items-center justify-content-center ps-0 pe-0 ms-0 me-0">
                {image && (
                    <Col md={4} className="text-center g-0">
                        <div className="image-container">
                            <img src={image} alt={title} className="fixed-size-img" />
                        </div>
                    </Col>
                )}
                <Col md={6} style={{marginTop:10}}>
                    <Row className="g-0">
                        <div className="text-block">
                            <h5><strong>{title}</strong></h5>
                        </div>
                    </Row>
                    <Row className="g-0 text-muted" style={{marginBottom:30}}>
                        <div className="text-block">{date}</div>
                    </Row>
                    <Row className="g-0">
                        <div className="text-block">{description}</div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}