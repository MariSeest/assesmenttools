import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import "../styles/Home.css";

export default function Toolbar() {
    const navigate = useNavigate();

    return (
        <header className="toolbar">
            <div className="toolbar-icon-left">
                <HomeIcon className="icon" onClick={() => navigate("/")} />
            </div>
            <div className="toolbar-icon-right">
                <UserIcon className="icon" onClick={() => navigate("/user-profile")} />
            </div>
        </header>

    );
}
