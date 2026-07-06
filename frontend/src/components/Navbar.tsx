import "./Navbar.css";

import {
    LayoutDashboard,
    FileText,
    Users,
    Bell,
    Settings,
    BrainCircuit,
} from "lucide-react";

export default function Navbar() {

    return (

        <aside className="sidebar">

            <div className="logo">

                <BrainCircuit size={34} />

                <div>

                    <h2>Agentic AP</h2>

                    <small>AI Platform</small>

                </div>

            </div>

            <nav>

                <a className="active">

                    <LayoutDashboard size={20} />

                    Dashboard

                </a>

                <a>

                    <FileText size={20} />

                    Invoices

                </a>

                <a>

                    <Users size={20} />

                    Vendors

                </a>

                <a>

                    <Bell size={20} />

                    Notifications

                </a>

                <a>

                    <Settings size={20} />

                    Settings

                </a>

            </nav>

        </aside>

    );

}