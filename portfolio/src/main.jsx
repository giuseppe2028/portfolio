import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {DataProvider} from "./hooks/DataContext.jsx";
import "./i18n.js"
createRoot(document.getElementById('root')).render(
    <StrictMode>
                <DataProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </DataProvider>
    </StrictMode>
)
