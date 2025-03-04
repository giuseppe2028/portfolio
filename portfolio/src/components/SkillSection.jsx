import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skillData } from "../data/data.js";
import react from "../assets/react.svg";
import "./SkillSection.css"
export const SkillSection = () => {
    const chunkArray = (arr, size) => {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const chunkedData = chunkArray(skillData, 6);

    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <h6>I CONSTANTLY TRY TO IMPROVE</h6>
            </Row>
            <Row className="d-flex justify-content-center align-items-center" style={{ marginBottom: 20 }}>
                <h3>MY TECH STACK</h3>
            </Row>

            {chunkedData.map((chunk, index) => (
                <Row key={index} className="mb-4">
                    {chunk.map((item, colIndex) => (
                        <SkillCard key={colIndex} item={item} />
                    ))}
                </Row>
            ))}
        </Container>
    );
};

const SkillCard = ({ item }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Col md={2} className="text-center">
            <div
                className="box"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={item.icon}
                    alt={item.name}
                    className={`skill-icon ${hovered ? "blurred" : ""}`}
                    style={{
                        width: "90px",
                        height: "90px",
                        padding: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "inline-block"
                    }}
                />
                <h6 className="mt-3">{item.name}</h6>
                <div className={`overlay ${hovered ? "show" : ""}`} style={{paddingLeft: "15px", paddingRight: "15px"}}>
                    <h6 style={{fontSize: "13px"}}>{item.description}</h6>
                </div>
            </div>
        </Col>
    );
};