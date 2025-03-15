import { Link, Element } from "react-scroll";
import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { HomeSection } from "./components/HomeSection.jsx";
import { Contact } from "./components/Contact.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { SkillSection } from "./components/SkillSection.jsx";
import { CVSection } from "./components/CVSection.jsx";
import { About } from "./components/About.jsx";
import Dropdown from "./components/Dropdown.jsx";

function App() {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(""); // Deve essere una stringa
    const [showLanguageButton,setShowLanguageButton] = useState(true);
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div>
            <Navbar expand="lg" fixed="top" className="custom-navbar bg-body-tertiary">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick = {()=>{setShowLanguageButton(false)}}/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="start"
                        className="custom-offcanvas"
                        onHide={()=>{setShowLanguageButton(true)}}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                {["home", "about", "education", "skills", "projects", "contact"].map((section) => (
                                    <Nav.Link
                                        key={section}
                                        className={`nav-element ${activeSection === section ? "active" : ""}`}
                                    >
                                        <Link
                                            activeClass="active"
                                            to={section}
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            onSetActive={handleSetActive} // Registra la sezione attiva
                                        >
                                            {t(
                                                section === "education" ? "educationBar" :
                                                    section === "projects" ? "projectsBar" :
                                                        section
                                            )}
                                        </Link>
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {showLanguageButton && <div className="fixed-dropdown">
                <Dropdown/>
            </div>}


            {/* Sezioni */}
            <Element name="home">
                <section className="section"><HomeSection /></section></Element>
            <Element name="about"><section className="section"><About /></section></Element>
            <Element name="education"><section className="section"><CVSection /></section></Element>
            <Element name="skills"><section className="section"><SkillSection /></section></Element>
            <Element name="projects"><section className="section"><ProjectSection /></section></Element>
            <Element name="contact"><section className="section"><Contact /></section></Element>
        </div>
    );
}

export default App;