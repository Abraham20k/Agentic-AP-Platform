import "./InvoiceTable.css";

import StatusBadge from "./Common/StatusBadge";

type Props = {
    invoices: any[];
    onSelect: (invoice: any) => void;
};

export default function InvoiceTable({
    invoices,
    onSelect,
}: Props) {

    return (

        <table className="invoice-table">

            <thead>

                <tr>

                    <th>Filename</th>

                    <th>Vendor</th>

                    <th>Amount</th>

                    <th>Status</th>

                    <th>Uploaded</th>

                </tr>

            </thead>

            <tbody>

                {invoices.map((invoice) => (

                    <tr
                        key={invoice.id}
                        onClick={() => onSelect(invoice)}
                    >

                        <td>{invoice.filename}</td>

                        <td>{invoice.vendor}</td>

                        <td>{invoice.amount.toLocaleString()}</td>

                        <td>

                            <StatusBadge
                                status={invoice.status}
                            />

                        </td>

                        <td>

                            {new Date(
                                invoice.uploaded_at
                            ).toLocaleDateString()}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}