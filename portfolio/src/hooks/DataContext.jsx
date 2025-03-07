// src/contexts/DataContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Crea un contesto per i dati
const DataContext = createContext();

// Crea un provider che carica i dati JSON e li rende disponibili
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);  // Stato per memorizzare i dati JSON
    const [loading, setLoading] = useState(true);  // Stato per il caricamento

    useEffect(() => {
        // Funzione per caricare il file JSON
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati');
                }
                const jsonData = await response.json();
                console.log("entro")
                console.log(jsonData);
                setData(jsonData);  // Salva i dati nello stato
            } catch (error) {
                console.error('Errore nel caricare il file JSON:', error);
            } finally {
                setLoading(false);  // Imposta il caricamento su false quando finito
            }
        };

        fetchData();  // Esegui la funzione di caricamento
    }, []);  // L'array vuoto fa sì che venga eseguito solo una volta al montaggio

    // Rende i dati e lo stato di caricamento disponibili tramite il contesto
    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
};

// Crea un hook personalizzato per accedere facilmente ai dati nel contesto
export const useData = () => {
    return React.useContext(DataContext);
};