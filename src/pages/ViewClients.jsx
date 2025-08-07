import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Toolbar.css";
import "../styles/GoBackButton.css"; // ✅ importa il CSS giusto
import Toolbar from "./Toolbar";

export default function ViewClients() {
    const navigate = useNavigate();

    const clients = [
        { id: 1, name: "Cliente Esempio 1" },
        { id: 2, name: "Cliente Esempio 2" },
    ];

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="app-container">
            <Toolbar />

            {/* Bottone Indietro spostato di 4cm */}
            <div className="go-back-container">
                <button className="main-button" onClick={handleGoBack}>
                    Indietro
                </button>
            </div>

            <main className="main-content">
                <h2 className="form-title">Clienti Salvati</h2>
                {clients.length === 0 ? (
                    <p className="no-clients-text">Nessun cliente disponibile.</p>
                ) : (
                    <div className="clients-list">
                        {clients.map((client) => (
                            <button
                                key={client.id}
                                className="main-button"
                                onClick={() => navigate(`/client/${client.id}`)}
                            >
                                {client.name}
                            </button>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
