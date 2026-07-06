import "./DashboardHeader.css";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

    return (

        <div className="dashboard-header">

            <div>

                <h1>{greeting} 👋</h1>

                <p>
                    Manage invoices with AI-powered automation.
                </p>

            </div>

            <div className="header-actions">

                <button>

                    <Search size={18}/>

                </button>

                <button>

                    <Bell size={18}/>

                </button>

            </div>

        </div>

    );

}