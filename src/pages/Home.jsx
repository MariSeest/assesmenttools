import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" />
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>
            <main className="main-content">
                <button className="main-button" onClick={() => navigate("/create-client")}>
                    Crea Nuovo Cliente
                </button>
                <button className="main-button" onClick={() => navigate("/view-clients")}>
                    Visualizza Clienti
                </button>
                <button className="main-button" onClick={() => navigate("/importa-domande")}>
                    Importa Domande
                </button>
            </main>
        </div>
    );
}
