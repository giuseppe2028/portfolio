import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import "./OptionContainer.css"
export const OptionBar = ()=>{
    return (
       <Container className="option-container">
           <Row>
               <Col className="pe-0">
                   <Button>Night</Button>
               </Col>
               <Col className="ps-0">
                   {/*TODO: */}
                   <Dropdown>Language</Dropdown>
               </Col>
           </Row>
       </Container>
    );
}