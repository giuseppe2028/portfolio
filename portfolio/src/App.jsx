import { Link, Element } from "react-scroll";
import { HomeSection } from "./components/HomeSection.jsx";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Contact } from "./components/Contact.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { SkillSection } from "./components/SkillSection.jsx";
import { CVSection } from "./components/CVSection.jsx";
import { About } from "./components/About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OptionBar } from "./components/OptionBar.jsx";
import { useTranslation } from 'react-i18next';
import Dropdown from "./components/Dropdown.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"; // Aggiungi useTranslation

function App() {
    const { t,i18n } = useTranslation(); // Ottieni il metodo t per tradurre
    const [activeSection, setActiveSection] = useState([]);

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div>
            <Navbar expand="lg" fixed="top" className="custom-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
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
                                        onSetActive={handleSetActive}
                                    >
                                        {t(
                                            section === "education" ? "educationBar" :
                                                section === "projects" ? "projectsBar" :
                                                    section
                                        )}{/* Usa t() per la traduzione */}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="fixed-dropdown">
                <Dropdown/>
            </div>
            {/* Sezione Home */}
            <Element name="home">
                <section className="section" data-aos="fade-up" data-aos-duration="1200">
                    <HomeSection/>
                </section>
            </Element>

            {/* Sezione About */}
            <Element name="about">
                <section className="section" data-aos="fade-up" data-aos-duration="1200">
                    <About/>
                </section>
            </Element>

            {/* Sezione Education */}
            <Element name="education">
                <section className="section" data-aos="fade-up" data-aos-duration="1200">
                    <CVSection/>
                </section>
            </Element>

            {/* Sezione Skills */}
            <Element name="skills">
                <section className="section section-skill" data-aos="fade-up" data-aos-duration="1200">
                    <SkillSection/>
                </section>
            </Element>

            {/* Sezione Projects */}
            <Element name="projects">
                <section className="section">
                    <ProjectSection/>
                </section>
            </Element>

            {/* Sezione Contact */}
            <Element name="contact">
                <section
                    className="section"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-anchor-placement="top-bottom"
                >
                    <Contact/>
                </section>
            </Element>
        </div>
    );
}

export default App;