import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import "../styles/ClientPage.css";

export default function ClientPage() {
    const { clientId } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // torna alla pagina precedente
    };
    const handleDirectDashboard =()=> {
        navigate ("/dashboard"); //ridirige alla dashboard
    }

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>

            <main className="main-content">
                <div style={{ alignSelf: "flex-start", marginBottom: "20px" }}>
                    <button className="main-button" onClick={handleGoBack}>
                        Indietro
                    </button>
                </div>

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
                    <button className= "main-button" onClick={handleDirectDashboard}>
                        Dashboard
                    </button>
                    <button className="main-button" onClick={() => navigate("/report-generator")}>
                        Genera Report NIS2
                    </button>

                </div>
            </main>
        </div>
    );
}
