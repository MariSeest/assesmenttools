import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function ViewClients() {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedClients = JSON.parse(localStorage.getItem("clients")) || [];
        setClients(storedClients);
    }, []);

    const handleClientClick = (client) => {
        // placeholder per eventuali dettagli o navigazione
        alert(`Hai cliccato su: ${client.name}`);
    };

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <UserIcon className="icon" />
            </header>
            <main className="main-content">
                <h2 className="title">Clienti Salvati</h2>
                {clients.length === 0 ? (
                    <p className="no-clients">Nessun cliente disponibile.</p>
                ) : (
                    <div className="client-list">
                        {clients.map((client, index) => (
                            <button
                                key={index}
                                className="main-button"
                                onClick={() => handleClientClick(client)}
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
