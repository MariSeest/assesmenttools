import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/ImportaDomande.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function ImportaDomande({ onLoad }) {
    const [file, setFile] = useState(null);
    const [successo, setSuccesso] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setSuccesso(false);
    };

    const handleImportClick = () => {
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            onLoad(jsonData);
            setSuccesso(true);
        };

        reader.readAsArrayBuffer(file);
    };

    const handleGoBack = () => {
        navigate(-1); // Torna alla pagina precedente
    };

    return (
        <div className="importa-wrapper">
            {/* Toolbar in alto */}
            <header className="toolbar">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </header>

            {/* Bottone Indietro sotto la toolbar */}
            <div style={{ alignSelf: "flex-start", margin: "1rem 2rem" }}>
                <button className="main-button" onClick={handleGoBack}>
                    Indietro
                </button>
            </div>

            {/* Contenuto centrato sotto la toolbar */}
            <div className="importa-content">
                <div className="importa-box">
                    <h2>Importa Domande da Excel</h2>

                    <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        className="importa-input"
                    />

                    <button
                        onClick={handleImportClick}
                        disabled={!file}
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
