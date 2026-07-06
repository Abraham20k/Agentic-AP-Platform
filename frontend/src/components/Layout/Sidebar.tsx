import "./Sidebar.css";
import {
    FiHome,
    FiFileText,
    FiUsers,
    FiBell,
    FiSettings
} from "react-icons/fi";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <h2>Agentic AP</h2>

            <nav>

                <button><FiHome /> Dashboard</button>

                <button><FiFileText /> Invoices</button>

                <button><FiUsers /> Vendors</button>

                <button><FiBell /> Notifications</button>

                <button><FiSettings /> Settings</button>

            </nav>

        </aside>
    );
}