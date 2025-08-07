import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/ImportaDomande.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function ImportaDomande() {
    const [file, setFile] = useState(null);
    const [assessmentType, setAssessmentType] = useState("");
    const [successo, setSuccesso] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setSuccesso(false);
    };

    const handleImportClick = () => {
        if (!file || !assessmentType) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Passa dati alla pagina successiva
            navigate("/question-uploaded", {
                state: {
                    domande: jsonData,
                    tipo: assessmentType
                }
            });
        };

        reader.readAsArrayBuffer(file);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="importa-wrapper">
            {/* Toolbar */}
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>

            {/* Bottone Indietro */}
            <div style={{ alignSelf: "flex-start", margin: "1rem 2rem" }}>
                <button className="main-button" onClick={handleGoBack}>Indietro</button>
            </div>

            {/* Contenuto Import */}
            <div className="importa-content">
                <div className="importa-box">
                    <h2>Importa Domande da Excel</h2>

                    <label>Per quale assessment stai caricando le domande?</label>
                    <select
                        className="importa-select"
                        value={assessmentType}
                        onChange={(e) => setAssessmentType(e.target.value)}
                    >
                        <option value="">Seleziona un tipo</option>
                        <option value="NIS2">NIS2</option>
                        <option value="ISOtoNIS2">ISO to NIS2</option>
                        <option value="ISO27001">ISO/IEC 27001</option>
                    </select>

                    <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        className="importa-input"
                    />

                    <button
                        onClick={handleImportClick}
                        disabled={!file || !assessmentType}
                        className="main-button"
                    >
                        Importa Domande
                    </button>

                    {successo && (
                        <p className="importa-success">✅ Domande importate con successo!</p>
                    )}
                </div>
            </div>
        </div>
    );
}
