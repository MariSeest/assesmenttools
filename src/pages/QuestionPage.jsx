import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import "../styles/Home.css";
import Toolbar from "../styles/Toolbar.css";

const domandeDefault = [
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

    const useDomande = domandeDefault;

    const currentIndex = parseInt(id, 10) - 1;
    const currentPage = Math.floor(currentIndex / 4);
    const startIndex = currentPage * 4;
    const domandePagina = useDomande.slice(startIndex, startIndex + 4);

    const [risposte, setRisposte] = useState(
        domandePagina.map(() => ({
            risposta: "",
            note: "",
            responsabile: "",
            fonte: "",
        }))
    );

    const handleChange = (index, campo, valore) => {
        const nuoveRisposte = [...risposte];
        nuoveRisposte[index][campo] = valore;
        setRisposte(nuoveRisposte);
    };

    const handleSubmit = () => {
        const risultati = domandePagina.map((domanda, index) => {
            const rispostaUtente = risposte[index].risposta;
            const peso = rispostaUtente === "Implementato" || rispostaUtente === "Non implementato"
                ? 25 : rispostaUtente === "Parzialmente implementato"
                    ? 12.5 : 0;

            return {
                clientId,
                domandaID: domanda.ID,
                risposta: rispostaUtente,
                peso,
                note: risposte[index].note,
                responsabile: risposte[index].responsabile,
                fonte: risposte[index].fonte,
            };
        });

        console.log("Risposte salvate:", risultati);

        const prossima = startIndex + 4;
        if (prossima < useDomande.length) {
            navigate(`/client/${clientId}/question/${prossima + 1}`);
        } else {
            navigate(`/client/${clientId}`);
        }
    };

    const handleBack = () => {
        navigate(`/client/${clientId}`);
    };

    const handleGoToImport = () => {
        navigate("/importa-domande");
    };

    return (
        <div className="app-container">
            <Toolbar title={`Cliente ${clientId} – Domande ${startIndex + 1}–${startIndex + domandePagina.length} / ${useDomande.length}`} />


            <main className="main-content">
                <div className="grid-container">
                    {domandePagina.map((domanda, index) => (
                        <div className="box" key={domanda.ID}>
                            <p className="form-title">{domanda.Domande}</p>
                            <p><strong>Codice ACN:</strong> {domanda["CODICE ACN"]}</p>
                            <p><strong>Ambiti e politiche:</strong> {domanda["Abiti e politiche"]}</p>
                            <p><strong>Descrizione:</strong> {domanda["Descrizione"]}</p>

                            <select
                                className="form-input"
                                value={risposte[index].risposta}
                                onChange={(e) => handleChange(index, "risposta", e.target.value)}
                            >
                                <option value="">Seleziona una risposta</option>
                                <option value="Implementato">Implementato</option>
                                <option value="Parzialmente implementato">Parzialmente implementato</option>
                                <option value="Non implementato">Non implementato</option>
                                <option value="Non applicabile">Non applicabile</option>
                            </select>

                            <textarea
                                className="form-input"
                                placeholder="Note"
                                value={risposte[index].note}
                                onChange={(e) => handleChange(index, "note", e.target.value)}
                            />

                            <input
                                className="form-input"
                                placeholder="Responsabile"
                                value={risposte[index].responsabile}
                                onChange={(e) => handleChange(index, "responsabile", e.target.value)}
                            />

                            <input
                                className="form-input"
                                placeholder="Chi fornisce l’informazione"
                                value={risposte[index].fonte}
                                onChange={(e) => handleChange(index, "fonte", e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <div className="button-group">
                    <button className="main-button" onClick={handleBack}>
                        Indietro
                    </button>

                    <button className="main-button" onClick={handleGoToImport}>
                        Importa Domande
                    </button>

                    <button className="main-button" onClick={handleSubmit}>
                        Salva e Continua
                    </button>
                </div>
            </main>
        </div>
    );
}
