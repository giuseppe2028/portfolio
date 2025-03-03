
import {Link,Element} from "react-scroll"
import {HomeSection} from "./components/HomeSection.jsx";
import "./App.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {Contact} from "./components/Contact.jsx";
import {ProjectSection} from "./components/ProjectSection.jsx";
import {SkillSection} from "./components/SkillSection.jsx";
import {CVSection} from "./components/CVSection.jsx";
import {About} from "./components/About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const [activeSection,setActiveSection] = useState([]);
    const handleSetActive = (to) => {
        setActiveSection(to)
    };
    return (
        <div>
            <Navbar fixed="top custom-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Element name="home">
                    <section className="section">
                        <HomeSection/>
                    </section>
                </Element>
                <Element name="about">
                    <section className="section">
                        <About/>
                    </section>

                </Element>
            <Element name = "education">
                <section  className="section">
                    <CVSection/>
                </section>

            </Element>
            <Element name="skills">
                <section className="section section-skill">
                    <SkillSection/>
                </section>
            </Element>
            <Element name="projects">
                <section className="section">
                    <ProjectSection/>
                </section>
            </Element>
            <Element name="contact">
                <section className="section">
                    <Contact/>
                </section>
            </Element>
            {/* Add more sections with Element components as needed */}
        </div>
    );
}

export default App;