import {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";

import react from "../assets/react.svg";
import "./SkillSection.css"
import {useData} from "../hooks/DataContext.jsx";
import {useTranslation} from "react-i18next";
export const SkillSection = () => {
    const { t,i18n } = useTranslation();
    const { data, loading } = useData();
    const chunkArray = (arr, size) => {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const skillData = t('skillData',{ returnObjects: true })
    const chunkedData = chunkArray(skillData || [], 6);

    return (
        <Container data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom"
                   data-aos-duration="1500">
            <Row className="d-flex justify-content-center align-items-center text-center    ">
                <h6>{t("I CONSTANTLY TRY TO IMPROVE")}</h6>
            </Row>
            <Row className="d-flex justify-content-center align-items-center text-center" style={{ marginBottom: 20 }}>
                <h3 className="text-center"><strong>{t('MY TECH STACK')}</strong></h3>
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