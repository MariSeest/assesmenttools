import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import "../styles/ReportGenerator.css";
import "../styles/Home.css";
import Toolbar from "../pages/Toolbar";
import React from "react";


pdfMake.vfs = pdfFonts.vfs;



export default function ReportGenerator() {
    const generateReport = () => {
        const docDefinition = {
            content: [
                { text: 'Report Conformità alla NIS2', style: 'header' },
                { text: 'Cliente: PippoPippo', style: 'subheader' },
                {
                    text: 'Sommario',
                    style: 'sectionTitle'
                },
                {
                    ul: [
                        'Govern – Stato: Avanzato',
                        'Identify – Stato: In consolidamento',
                        'Protect – Stato: Avanzato',
                        'Detect – Stato: Buono',
                        'Respond – Stato: Intermedio',
                        'Recover – Stato: In miglioramento'
                    ]
                },
                { text: 'Dettaglio Area: GOVERN', style: 'sectionTitle' },
                {
                    table: {
                        widths: ['*', '*'],
                        body: [
                            ['Osservazioni', 'Punti da attenzionare'],
                            ['Politiche formalizzate, responsabilità assegnate, audit interni presenti', 'DPA mancanti o da aggiornare, verifiche asset non sempre allineate']
                        ]
                    }
                }
                // continuare qui per le altre sezioni--------------
            ],
            styles: {
                header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
                subheader: { fontSize: 14, margin: [0, 10, 0, 5] },
                sectionTitle: { fontSize: 12, bold: true, margin: [0, 10, 0, 4] }
            }
        };

        pdfMake.createPdf(docDefinition).download('reportNIS2.pdf');
    };

    return (
        <div className="app-container">
            <Toolbar />
            <main className="main-content">
                <button className="main-button" onClick={generateReport}>
                    Genera Report NIS2
                </button>
            </main>
        </div>

    );
}
