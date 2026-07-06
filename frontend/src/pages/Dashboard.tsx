import { useInvoices } from "../hooks/useInvoices";

export default function Dashboard() {

    const { data, isLoading } = useInvoices();

    console.log("Loading:", isLoading);
    console.log("Data:", data);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

   return (
    <div>
        <h1>Dashboard</h1>

        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
);
}