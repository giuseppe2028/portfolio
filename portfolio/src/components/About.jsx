import {Container, Row, Col, Button} from "react-bootstrap";
import { PageSubtitle, PageTitle } from "./TextComponents.jsx";
import image from "../assets/react.svg"
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
            <Row className="d-flex justify-content-start">
                <Col>
                    <ButtonLink image = {image} text="Github" onclick={()=>{}}/>
                </Col>
                <Col>
                    <ButtonLink image = {image} text="LinkedIn" onclick={()=>{}}/>
                </Col>
            </Row>
        </Container>
    );
}


const ButtonLink = (props) => {
    return (
        <Button
            onClick={props.onclick}
            style={{
                backgroundColor: "#f0f0f0", // Colore grigio chiaro
                border: "1px solid",
                borderColor: "#8f8f8f",
                display: "flex", // Allinea l'immagine e il testo in una riga
                alignItems: "center", // Centra verticalmente l'immagine e il testo
                padding: "10px 15px", // Aggiungi un po' di padding per migliorare l'aspetto
                borderRadius: "15px", // Bordo arrotondato per un look più moderno
                cursor: "pointer", // Cambia il cursore quando il mouse è sopra
                color: "black", // Colore del testo
                fontSize: "0.875rem", // Dimensione del testo
                transition: "all 0.3s ease", // Aggiunge transizioni per hover
            }}

        >
            {props.image && <img src={props.image} alt="icon" style={{ marginRight: "10px", height: "20px" }} />}
            {props.text}
        </Button>
    );
}

export default ButtonLink;