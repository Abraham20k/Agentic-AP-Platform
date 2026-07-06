import "./StatusBadge.css";

type Props = {
    status: string;
};

export default function StatusBadge({ status }: Props) {

    const getClass = () => {

        switch (status.toLowerCase()) {

            case "approved":
                return "approved";

            case "processing":
                return "processing";

            case "rejected":
                return "rejected";

            default:
                return "uploaded";
        }
    };

    return (
        <span className={`status ${getClass()}`}>
            {status}
        </span>
    );
}