import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async() => {
    const transactions = await db.transaction.findMany({});
    return ( 
    <div className="p-6 space-y-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full justify-between items-center p-6">
            <h1 className="font-bold text-2xl">Transações</h1>
            <Button className="rounded-full font-bold">
                Adicionar transação
                <ArrowDownUpIcon />
            </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions}/>
    </div> 
    );
}
 
export default TransactionsPage;