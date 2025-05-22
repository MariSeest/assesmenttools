import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import "../styles/Home.css";

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
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>

            {/* Bottone Indietro sotto la toolbar */}
            <div style={{ alignSelf: "flex-start", margin: "1rem 2rem" }}>
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
