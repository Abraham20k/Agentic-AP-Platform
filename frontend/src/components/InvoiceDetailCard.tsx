import "./InvoiceDetailCard.css";

type Props = {
    invoice: any;
};

export default function InvoiceDetailCard({
    invoice,
}: Props) {

    if (!invoice) {
        return (
            <div className="detail-card">
                <h3>Select an invoice</h3>
            </div>
        );
    }

    return (
        <div className="detail-card">

            <h2>{invoice.filename}</h2>

            <p>
                <strong>Vendor:</strong> {invoice.vendor}
            </p>

            <p>
                <strong>Amount:</strong> ${invoice.amount}
            </p>

            <p>
                <strong>Status:</strong> {invoice.status}
            </p>

            <p>
                <strong>Uploaded:</strong>{" "}
                {new Date(invoice.uploaded_at).toLocaleString()}
            </p>

        </div>
    );
}