import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import "../styles/Home.css";

const domande = [
    {
        ID: 1,
        Domande: "Esiste un elenco dei sistemi informativi e di rete rilevanti?",
        "CODICE ACN": "GV.OC-04",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "Gli obiettivi, le capacità e i servizi critici devono essere chiaramente identificati."
    },
    {
        ID: 2,
        Domande: "È mantenuto aggiornato?",
        "CODICE ACN": "GV.OC-04",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "Gli obiettivi, le capacità e i servizi critici devono essere chiaramente identificati."
    },
    {
        ID: 3,
        Domande: "Gli obiettivi e i servizi critici dai quali gli stessi dipendono sono definiti?",
        "CODICE ACN": "GV.OC-04",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "Gli obiettivi, le capacità e i servizi critici devono essere chiaramente identificati."
    },
    {
        ID: 4,
        Domande: "Sono comunicati?",
        "CODICE ACN": "GV.OC-04",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "Gli obiettivi, le capacità e i servizi critici devono essere chiaramente identificati."
    },
    {
        ID: 5,
        Domande: "I ruoli e le responsabilità aziendali sono definiti e comunicati?",
        "CODICE ACN": "GV.RM-03",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "I ruoli, le responsabilità e le autorità relative alla sicurezza devono essere chiaramente definite."
    },
    {
        ID: 6,
        Domande: "I dipendenti sono a conoscenza di quale sia il proprio ruolo?",
        "CODICE ACN": "GV.RM-03",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "I ruoli, le responsabilità e le autorità relative alla sicurezza devono essere chiaramente definite."
    },
    {
        ID: 7,
        Domande: "I ruoli e le responsabilità sono comunicate all’interno dell’organizzazione?",
        "CODICE ACN": "GV.RM-03",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "I ruoli, le responsabilità e le autorità relative alla sicurezza devono essere chiaramente definite."
    },
    {
        ID: 8,
        Domande: "Sono aggiornate regolarmente in caso di modifiche?",
        "CODICE ACN": "GV.RM-03",
        "Abiti e politiche": "a) Gestione del rischio",
        "Descrizione": "I ruoli, le responsabilità e le autorità relative alla sicurezza devono essere chiaramente definite."
    }
];

export default function QuestionPage() {
    const { clientId, id } = useParams();
    const navigate = useNavigate();
    const domandaID = parseInt(id, 10);
    const domanda = domande.find(d => d.ID === domandaID);

    const [risposta, setRisposta] = useState("");
    const [note, setNote] = useState("");
    const [responsabile, setResponsabile] = useState("");
    const [fonte, setFonte] = useState("");

    const handleSubmit = () => {
        const peso = risposta === "Implementato" || risposta === "Non implementato"
            ? 25 : risposta === "Parzialmente implementato"
                ? 12.5 : 0;

        const risultato = {
            clientId,
            domandaID,
            risposta,
            peso,
            note,
            responsabile,
            fonte,
        };

        console.log("Risposta salvata:", risultato);

        if (domandaID < domande.length) {
            navigate(`/client/${clientId}/question/${domandaID + 1}`);
        } else {
            navigate(`/client/${clientId}`);
        }
    };

    if (!domanda) return <p style={{ color: "white" }}>Domanda non trovata.</p>;

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <h2 style={{ color: "white" }}>
                    Cliente {clientId} – Domanda {domandaID} / {domande.length}
                </h2>
                <UserIcon className="icon" />
            </header>
            <main className="main-content">
                <div className="form">
                    <p className="form-title">{domanda.Domande}</p>
                    <p><strong>Codice ACN:</strong> {domanda["CODICE ACN"]}</p>
                    <p><strong>Ambiti e politiche:</strong> {domanda["Abiti e politiche"]}</p>
                    <p><strong>Descrizione:</strong> {domanda["Descrizione"]}</p>

                    <select className="form-input" value={risposta} onChange={(e) => setRisposta(e.target.value)}>
                        <option value="">Seleziona una risposta</option>
                        <option value="Implementato">Implementato</option>
                        <option value="Parzialmente implementato">Parzialmente implementato</option>
                        <option value="Non implementato">Non implementato</option>
                        <option value="Non applicabile">Non applicabile</option>
                    </select>

                    <textarea
                        className="form-input"
                        placeholder="Note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />

                    <input
                        className="form-input"
                        placeholder="Responsabile"
                        value={responsabile}
                        onChange={(e) => setResponsabile(e.target.value)}
                    />

                    <input
                        className="form-input"
                        placeholder="Chi fornisce l’informazione"
                        value={fonte}
                        onChange={(e) => setFonte(e.target.value)}
                    />

                    <button className="main-button" onClick={handleSubmit}>
                        Salva e Continua
                    </button>
                </div>
            </main>
        </div>
    );
}
