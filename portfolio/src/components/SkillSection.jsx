import {Col, Container, Row} from "react-bootstrap";
import {skillData} from "../data/data.js";

export const SkillSection = ()=>{
    // Funzione per dividere il data array in blocchi di 6 e 5 elementi
    const chunkArray = (arr, size) => {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    // Suddividi i dati in gruppi di 6 e 5 elementi
    const chunkedData = chunkArray(skillData, 6);
    return (
        <Container>
            <Row>
                <h6>I CONSTANTLY TRY TO IMPROVE </h6>
            </Row>
            <Row>
                <h3>MY TECH STACK</h3>
            </Row>

            {/* Mappa sui chunk di 6 e 5 elementi */}
            {chunkedData.map((chunk, index) => (
                <Row key={index} className="mb-4">
                    {chunk.map((item, colIndex) => (
                        <Col key={colIndex} md={2} className="text-center">
                            <div className="tech-item">{item.name}</div>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>

    );
}