import {Button} from "react-bootstrap";

export const ButtonLink = (props) => {
    return (
        <Button
            onClick={props.onClick}
            style={{
                backgroundColor: "#f0f0f0", // Colore grigio chiaro
                border: "1px solid",
                borderColor: "#8f8f8f",
                display: "flex", // Allinea l'immagine e il testo in una riga
                alignItems: "center", // Centra verticalmente l'immagine e il testo
                padding: "10px 15px", // Aggiungi un po' di padding per migliorare l'aspetto
                borderRadius: "15px", // Bordo arrotondato per un look più moderno
                cursor: "pointer", // Cambia il cursore quando il mouse è sopra
                color: "black", // Colore del testo
                fontSize: "0.875rem", // Dimensione del testo
                transition: "all 0.3s ease", // Aggiunge transizioni per hover
                paddingLeft:"20px",
                paddingRight:"20px",
                ...props.style
            }}
            type={props.type || "button"}>

            {props.image && <img src={props.image} alt="icon" style={{ marginRight: "10px", height: "20px" }} />}
            {props.text}
        </Button>
    );
}