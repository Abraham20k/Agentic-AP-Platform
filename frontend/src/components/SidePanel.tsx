import "./SidePanel.css";

export default function SidePanel() {

    return (

        <div className="side-panel">

            <h2>AI Insights</h2>

            <div className="panel-card">

                <h4>Invoices Today</h4>

                <p>24</p>

            </div>

            <div className="panel-card">

                <h4>Processed</h4>

                <p>18</p>

            </div>

            <div className="panel-card">

                <h4>Pending Review</h4>

                <p>6</p>

            </div>

            <div className="panel-card">

                <h4>AI Confidence</h4>

                <p>98.6%</p>

            </div>

        </div>

    );

}