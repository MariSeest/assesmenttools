import React, { useState } from "react";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import "../styles/CreateClients.css";

export default function CreateClient() {
    const [formData, setFormData] = useState({
        name: "",
        standards: [],
        date: "",
        responsible: "",
    });

    const navigate = useNavigate();

    const handleCheckboxChange = (value) => {
        setFormData((prev) => {
            const alreadySelected = prev.standards.includes(value);
            return {
                ...prev,
                standards: alreadySelected
                    ? prev.standards.filter((s) => s !== value)
                    : [...prev.standards, value],
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cliente creato:", formData);
        navigate("/view-clients", { state: { newClient: formData } });
    };

    const handleGoBack = () => {
        navigate(-1);
    };

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

                <h2 className="form-title">Crea Nuovo Cliente</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Nome Cliente:
                        <input
                            type="text"
                            className="form-input"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </label>

                    <label>
                        Seleziona Standard:
                        <div className="checkbox-group">
                            {["ISO27001", "NIS", "ISO27001 TO NIS"].map((option) => (
                                <label key={option} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={formData.standards.includes(option)}
                                        onChange={() => handleCheckboxChange(option)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </label>

                    <label>
                        Data di aggiunta:
                        <input
                            type="date"
                            className="form-input"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </label>

                    <label>
                        Responsabile aggiunta cliente:
                        <input
                            type="text"
                            className="form-input"
                            value={formData.responsible}
                            onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                            placeholder="Inserisci nome e cognome"
                            required
                        />
                    </label>

                    <div className="button-group-inside">
                        <button type="submit" className="main-button">
                            Salva Cliente
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
