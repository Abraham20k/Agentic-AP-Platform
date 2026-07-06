import "./Dashboard.css";
import UploadCard from "../components/UploadCard";
import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/Cards/StatCard";
import SearchBar from "../components/SearchBar";
import InvoiceTable from "../components/InvoiceTable";
import InvoiceDetailCard from "../components/InvoiceDetailCard";
import SidePanel from "../components/SidePanel";
import { useInvoices } from "../hooks/useInvoices";

export default function Dashboard() {
    const { data, isLoading } = useInvoices();

    const [search, setSearch] = useState("");
    const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

    const filteredInvoices =
        data?.filter((invoice: any) =>
            invoice.filename.toLowerCase().includes(search.toLowerCase()) ||
            invoice.vendor.toLowerCase().includes(search.toLowerCase()) ||
            invoice.status.toLowerCase().includes(search.toLowerCase())
        ) || [];

    const totalInvoices = data?.length ?? 0;

    const approvedInvoices =
        data?.filter((invoice: any) => invoice.status === "Approved") ?? [];

    const approvedAmount = approvedInvoices.reduce(
        (sum: number, invoice: any) => sum + invoice.amount,
        0
    );

    const pendingAmount =
        data
            ?.filter((invoice: any) => invoice.status !== "Approved")
            .reduce((sum: number, invoice: any) => sum + invoice.amount, 0) ?? 0;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const pendingInvoices =
    data?.filter((i: any) => i.status === "Pending").length ?? 0;

    const processingInvoices =
    data?.filter((i: any) => i.status === "Processing").length ?? 0;

    return (
        <DashboardLayout>



            <DashboardHeader />

            <div className="stats">

                <StatCard
                    title="Total Invoices"
                    value={totalInvoices}
                />

                <StatCard
                    title="Pending"
                    value={pendingInvoices}
                />

                <StatCard
                    title="Approved"
                    value={approvedInvoices.length}
                />

                <StatCard
                    title="Processing"
                    value={processingInvoices}

                />

            </div>

            <div className="dashboard-content">

                <div>

                    <UploadCard />

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />

                    <InvoiceTable
                        invoices={filteredInvoices}
                        onSelect={setSelectedInvoice}
                    />

                    <InvoiceDetailCard
                        invoice={selectedInvoice}
                    />

                </div>

                <SidePanel />

            </div>

        </DashboardLayout>
    );
}