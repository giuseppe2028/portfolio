import {Col, Container, Row} from "react-bootstrap";
import "./CVSection.css"
export const CVSection = () => {
    return (
        <>
            <Container>
                <Row>
                    <h1>Curriculum Vitae</h1>
                </Row>
                <Row>
                    Aggiungere descrizione se necessario
                </Row>
                <Container>
                    <CardSection title ="Ciaooo" elements = {["ciao1","ciao2","ciao3"]}/>
                    <CardSection title ="Ciaooo" elements = {["ciao1","ciao2","ciao3"]}/>
                    <CardSection title ="Ciaooo" elements = {["ciao1","ciao2","ciao3"]}/>
                    <CardSection title ="Ciaooo" elements = {["ciao1","ciao2","ciao3"]}/>
                    <CardSection title ="Ciaooo" elements = {["ciao1","ciao2","ciao3"]}/>
                </Container>
            </Container>
        </>
    );
}

const CardSection = (props)=>{
    return(
        <Container>
           <Row>
               <Col md={1}>
                <Dot/>
               </Col>
               <Col md={1}>
                   <Row>
                       <h5><strong>{props.title}</strong></h5>
                   </Row>
                   <Row>
                       <ul>
                           {props.elements.map(el =><li>{el}</li>)}
                       </ul>
                   </Row>
               </Col>
           </Row>
        </Container>
    );
}

const Dot = () => {
    return <div className="dot"></div>
}