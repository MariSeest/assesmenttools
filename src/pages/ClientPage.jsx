import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import "../styles/ClientPage.css";

export default function ClientPage() {
    const { clientId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
            </header>
            <main className="main-content">
                <h2 className="client-title">Pagina Cliente: {clientId}</h2>
                <div className="client-buttons">
                    <button
                        className="main-button"
                        onClick={() => navigate(`/client/${clientId}/question/1`)}
                    >
                        NIS
                    </button>
                    <button className="main-button">27001</button>
                    <button className="main-button">27001 TO NIS</button>
                </div>
            </main>
        </div>
    );
}
