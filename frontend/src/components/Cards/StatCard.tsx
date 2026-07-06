import "./StatCard.css";

import {
    FileText,
    Clock3,
    CheckCircle2,
    Cpu,
} from "lucide-react";

type Props = {
    title: string;
    value: string | number;
};

export default function StatCard({
    title,
    value,
}: Props) {

    const renderIcon = () => {

        switch (title) {

            case "Total Invoices":
                return <FileText size={26} />;

            case "Pending":
                return <Clock3 size={26} />;

            case "Approved":
                return <CheckCircle2 size={26} />;

            default:
                return <Cpu size={26} />;
        }

    };

    return (

        <div className="stat-card">

            <div className="stat-header">

                <span className="stat-title">

                    {title}

                </span>

                {renderIcon()}

            </div>

            <h2 className="stat-value">

                {value}

            </h2>

        </div>

    );

}