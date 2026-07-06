type Invoice = {
    id: number;
    filename: string;
    vendor: string;
    amount: number;
    status: string;
    uploaded_at: string;
};

type Props = {
    invoice: Invoice;
};

export default function InvoiceCard({ invoice }: Props) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
        >
            <h2>{invoice.filename}</h2>

            <p>
                <strong>Vendor:</strong> {invoice.vendor}
            </p>

            <p>
                <strong>Amount:</strong> ₹{invoice.amount}
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