import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function QuestionUploaded() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { domande = [], tipo = "" } = state || {};

    return (
        <div className="app-container">
            <div style={{ marginTop: "80px", padding: "20px" }}>
                <h2 className="form-title">
                    Domande importate – Assessment: {tipo}
                </h2>

                {domande.length === 0 ? (
                    <p className="no-clients-text">Nessuna domanda caricata.</p>
                ) : (
                    <div className="grid-container">
                        {domande.map((d, idx) => (
                            <div className="box" key={idx}>
                                <p><strong>Domanda:</strong> {d.Domande}</p>
                                <p><strong>Codice ACN:</strong> {d["CODICE ACN"]}</p>
                                <p><strong>Ambiti:</strong> {d["Abiti e politiche"]}</p>
                                <p><strong>Descrizione:</strong> {d["Descrizione"]}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="button-group">
                    <button className="main-button" onClick={() => navigate("/")}>
                        Torna alla Home
                    </button>
                </div>
            </div>
        </div>
    );
}
