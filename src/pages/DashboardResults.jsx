import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import jsPDF from "jspdf";
import "../styles/DashboardResults.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardResults() {
    const navigate = useNavigate();

    // 🔹 Esempio statico di risposte (mock)
    const clientId = 1;
    const responses = [
        { risposta: "Implementato" },
        { risposta: "Parzialmente implementato" },
        { risposta: "Non implementato" },
        { risposta: "Parzialmente implementato" },
        { risposta: "Non applicabile" },
        { risposta: "Implementato" },
    ];

    const counts = {
        "Implementato": 0,
        "Parzialmente implementato": 0,
        "Non implementato": 0,
        "Non applicabile": 0,
    };

    let criticita = 0;
    let totale = 0;

    responses.forEach((r) => {
        counts[r.risposta] = (counts[r.risposta] || 0) + 1;

        if (r.risposta === "Non implementato") criticita += 1;
        if (r.risposta === "Parzialmente implementato") criticita += 0.5;
        if (r.risposta !== "Non applicabile") totale += 1;
    });

    const criticitaPercentuale = totale > 0 ? ((criticita / totale) * 100).toFixed(2) : 0;

    const pieData = {
        labels: ["Criticità", "Non criticità"],
        datasets: [
            {
                label: "% Criticità",
                data: [criticita, totale - criticita],
                backgroundColor: ["#ff4c4c", "#4caf50"],
                borderWidth: 1,
            },
        ],
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text(`Report Cliente ${clientId}`, 10, 10);
        doc.text(`\n\nRisultati:`.trim(), 10, 20);
        Object.entries(counts).forEach(([key, value], index) => {
            doc.text(`${key}: ${value}`, 10, 30 + index * 10);
        });
        doc.text(`\nCriticità totale: ${criticitaPercentuale}%`, 10, 80);
        doc.save(`report_cliente_${clientId}.pdf`);
    };

    return (
        <div className="app-container">
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <h2 style={{ color: "white" }}>Dashboard Cliente {clientId}</h2>
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>

            <main className="main-content dashboard-layout">
                <div className="box">
                    <h3>Riepilogo Risposte</h3>
                    {Object.entries(counts).map(([key, value]) => (
                        <p key={key}><strong>{key}:</strong> {value}</p>
                    ))}
                </div>

                <div className="box">
                    <h3>% Criticità</h3>
                    <Pie data={pieData} />
                    <p style={{ marginTop: "1rem" }}>
                        Criticità complessiva: <strong>{criticitaPercentuale}%</strong>
                    </p>
                </div>
            </main>

            <div className="button-group">
                <button className="main-button" onClick={handleDownloadPDF}>
                    Scarica Report PDF
                </button>
            </div>
        </div>
    );
}
