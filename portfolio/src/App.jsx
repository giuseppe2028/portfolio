import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { useContext, useRef, useState } from "react";
import { SkillSection } from "./components/SkillSection.jsx";
import { CVSection } from "./components/CVSection.jsx";
import { About } from "./components/About.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { Contact } from "./components/Contact.jsx";
import { HomeSection } from "./components/HomeSection.jsx";
import {OptionBar} from "./components/OptionBar.jsx";

function App() {
    const sectionsRef = {
        home: useRef(null),
        about: useRef(null),
        education: useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

    const [activeSection, setActiveSection] = useState("home");

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const scrollToSection = (section) => {
        sectionsRef[section].current.scrollIntoView({ behavior: "smooth" });
    };

    // Funzione che aggiorna la sezione attiva durante lo scroll
    const handleScroll = (event) => {
        const scrollPosition = event.target.scrollTop;
        let newActiveSection = "home"; // Default

        Object.keys(sectionsRef).forEach((key) => {
            const section = sectionsRef[key].current;
            if (section) {
                const sectionTop = section.offsetTop - 100; // Offset per evitare transizioni premature
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    newActiveSection = key;
                }
            }
        });

        setActiveSection(newActiveSection);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Navbar expand="lg" className="me-auto bg-body-tertiary custom-navbar">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {Object.keys(sectionsRef).map((section) => (
                                    <Nav.Link
                                        className={`nav-element ${activeSection === section ? "active" : ""}`}
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <OptionBar/>
            </Row>
            <Row>
                <div
                    className="main-container"
                    onScroll={handleScroll} // Aggiungi il listener onScroll direttamente al div
                >
                    <section ref={sectionsRef.home} className="section">
                        <HomeSection />
                    </section>
                    <section ref={sectionsRef.about} className="section">
                        <About />
                    </section>
                    <section ref={sectionsRef.education} className="section">
                        <CVSection />
                    </section>
                    <section ref={sectionsRef.skills} className="section">
                        <SkillSection />
                    </section>
                    <section ref={sectionsRef.projects} className="section">
                        <ProjectSection />
                    </section>
                    <section ref={sectionsRef.contact} className="section">
                        <Contact />
                    </section>
                </div>
            </Row>
        </Container>
    );
}

export default App;