import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import {ButtonLink} from "./ButtonLink.jsx";
import "./ProjectSection.css"
import {useData} from "../hooks/DataContext.jsx";
import {useTranslation} from "react-i18next";

export function ProjectSection() {
    const {data, loading} = useData();
    const {t} = useTranslation();
    const projects = t('projects',{ returnObjects: true })
    return (
        <Container data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom"
                   data-aos-duration="1500">
            <Row className="d-flex justify-content-center align-items-center">
                <h1 className="text-center">{t('Projects')}</h1>
            </Row>
            <Row className="d-flex flex-column align-items-center"> {/* Cambiato flex-row a flex-column */}
                {projects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        img={item.images}
                        title={item.name}
                        description={item.description}
                        link={item.link}
                        madeWidth={item.madeWith}
                    />
                ))}
            </Row>
        </Container>
    );
}

const ProjectCard = (props) => {
    return (
        <Container className="project-card mb-4">
            <Row className="d-flex justify-content-center align-items-center" style={{paddingTop:20, paddingBottom:20}}>
                {Array.isArray(props.img) && props.img.length === 1 ? (
                    <img width="100%" height="300px" className="object-fit-contain" src={props.img[0]} alt="Immagine"/>
                ) : (
                    Array.isArray(props.img) && props.img.length > 1 ? (
                        <Carousel variant="dark" className="carousel-container">
                            {props.img.map((image, index) => (
                                <Carousel.Item key={index} className="p-auto">
                                    <img className="carousel-img object-fit-contain px-auto" src={image} alt={`Slide ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <p>No images available</p> // Messaggio di fallback
                    )
                )}
            </Row>
            <Row>
                <Col className="ms-0">
                    <Row className="mt-3">
                        <h2 className="p-0">{props.title}</h2>
                    </Row>
                    <Row className="d-flex align-items-center flex-wrap gap-2 mb-3 mt-2">
                        <h6 className="align-items-center me-0 pe-0 ps-0 pb-0 mb-0" style={{width:"fit-content"}}>Made with:</h6>
                        {props.madeWidth.map((el, index) => (
                            <SkillLabel key={index} icon={el.icon} text={el.name} />
                        ))}
                    </Row>
                    <Row className="mb-4">
                        {props.description}
                        <div className="ms-0 ps-0 pt-3"><GithubButton
                            link={props.link}
                        /></div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

const GithubButton = ({link}) => {
    return (
        <ButtonLink image={`images/github.svg`} text="Github" onClick={() => {
            window.open(link, "_blank");
        }}/>
    );
}

const SkillLabel = ({icon, text}) => {
    return (
        <div
            className="px-3 py-1"
            style={{border: "1px solid #8f8f8f", width: "fit-content", borderRadius: 15, fontSize: "12px"}}
        >
            <span style={{marginRight: 5, marginLeft: 0}}>
                <img className="img-fluid" style={{width: "15px", height: "15px", objectFit: "fit-content"}} src={import.meta.env.BASE_URL+icon} alt="Immagine"/>
            </span>
            {text}
        </div>
    );
}