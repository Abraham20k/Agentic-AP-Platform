import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../services/invoiceService";

export const useInvoices = () => {
    return useQuery({
        queryKey: ["invoices"],
        queryFn: getInvoices,
    });
};