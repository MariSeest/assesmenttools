import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateClient from "./pages/CreateClient";
import ViewClients from "./pages/ViewClients";
import ClientPage from "./pages/ClientPage";
import QuestionPage from "./pages/QuestionPage";
import ImportaDomande from "./pages/ImportaDomande";
import UserProfile from "./pages/UserProfile";
import DashboardResults from "./pages/DashboardResults";
import ReportGenerator from "./pages/ReportGenerator";
import QuestionUploaded from "./pages/QuestionUploaded";




export default function App() {
    return (
        <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                <Route path="/create-client" element={<CreateClient/>} />
                <Route path="/view-clients" element={<ViewClients />} />
                <Route path="/client/:clientId" element={<ClientPage />} />
                <Route path="/client/:clientId/question/:id" element={<QuestionPage />} />
                <Route path="/importa-domande" element={<ImportaDomande />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/dashboard" element={<DashboardResults />} />
                <Route path="/report-generator"element={<ReportGenerator/>}/>
                <Route path="/question-uploaded" element={<QuestionUploaded />} />
            </Routes>
        </Router>
    );
}


