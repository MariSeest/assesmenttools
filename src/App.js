import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateClient from "./pages/CreateClient";
import ViewClients from "./pages/ViewClients";

export default function App() {
    return (
        <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                <Route path="/create-client" element={<CreateClient/>} />
                <Route path="/view-clients" element={<ViewClients />} />
            </Routes>
        </Router>
    );
}


