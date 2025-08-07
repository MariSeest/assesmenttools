import React from "react";
import "../styles/UserProfile.css";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Toolbar from "../styles/Toolbar.css";


export default function UserProfile() {
    const navigate = useNavigate();

    const user = {
        nome: "Luisa Mele",
        email: "luisa@example.com",
        ruolo: "Amministratrice"
    };

    const handleModifica = () => {
        alert("Funzione di modifica non ancora implementata.");
    };

    const handleLogout = () => {
        alert("Logout effettuato.");
        navigate("/");
    };

    return (
        <div className="profile-container">
            <Toolbar />

            <main className="profile-main">
                <div className="profile-box">
                    <div className="top-right-buttons">
                        <button className="small-button" onClick={handleModifica}>Modifica</button>
                        <button className="small-button logout" onClick={handleLogout}>Logout</button>
                    </div>

                    <h3 className="profile-name">{user.nome}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Ruolo:</strong> {user.ruolo}</p>
                </div>
            </main>
        </div>
    );
}
