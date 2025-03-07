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
import { useTranslation } from 'react-i18next'; // Aggiungi useTranslation

function App() {
    const { t,i18n } = useTranslation(); // Ottieni il metodo t per tradurre
    const [activeSection, setActiveSection] = useState([]);

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div>
            <Navbar fixed="top" className="custom-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {["home", "about", "educationBar", "skills", "projectsBar", "contact"].map((section) => (
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
                                        {t(section)} {/* Usa t() per la traduzione */}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                    <div className="dropdown">
                        <a data-mdb-dropdown-init className="dropdown-toggle" href="#" id="Dropdown" role="button"
                           data-mdb-toggle="dropdown" aria-expanded="false">
                            <i className="flag-united-kingdom flag m-0"></i>
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="Dropdown">
                            <li>
                                <a className="dropdown-item" href="#"><i
                                    className="flag-united-kingdom flag"></i>English <i
                                    className="fa fa-check text-success ms-2"></i></a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i
                                    className="flag-portugal flag"></i>Português</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>

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
                    <Contact />
                </section>
            </Element>
        </div>
    );
}

export default App;