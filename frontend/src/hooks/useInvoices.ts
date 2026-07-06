import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../services/invoiceservice";

export const useInvoices = () => {
    return useQuery({
        queryKey: ["invoices"],
        queryFn: getInvoices,
    });
};