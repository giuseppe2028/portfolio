import {Container} from "react-bootstrap";
import {PageSubtitle, PageTitle} from "./TextComponents.jsx";

export function About() {
    return (
        <Container className="flex justify-content-center">
            <PageTitle text="About" />
            <PageSubtitle text="Subtitle"/>
        </Container>
    );
}