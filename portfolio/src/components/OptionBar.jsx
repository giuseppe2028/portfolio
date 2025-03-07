import { useState, useEffect } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import "./OptionContainer.css";

export const OptionBar = () => {
    // Controlla il tema salvato o usa quello del sistema
    const getInitialMode = () => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode) return savedMode; // Usa la scelta dell'utente
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; // Altrimenti usa il tema di sistema
    };

    // Stato per la modalità (light/dark)
    const [mode, setMode] = useState(getInitialMode);

    // Effetto per ascoltare il cambiamento del tema di sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            if (!localStorage.getItem("theme")) { // Solo se l'utente non ha già scelto
                setMode(e.matches ? "dark" : "light");
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Funzione per cambiare manualmente la modalità
    const toggleMode = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("theme", newMode); // Salva la scelta dell'utente
    };

    return (
        <Container className={`option-container ${mode}`}>
            <Row>
                {/* Pulsante per cambiare modalità */}
                <Col className="pe-0">
                    <Button onClick={toggleMode}>
                        {mode === "light" ? (
                            <i className="bi bi-brightness-high"></i> // ☀️ Icona light mode
                        ) : (
                            <i className="bi bi-moon"></i> // 🌙 Icona dark mode
                        )}
                    </Button>
                </Col>

                {/* Dropdown per la lingua */}
                <Col className="ps-0">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">Language</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">English</Dropdown.Item>
                            <Dropdown.Item href="#">Italiano</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};