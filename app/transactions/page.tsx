
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import NavBar from "../_components/navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";


const TransactionsPage = async () => {
    const { userId } = await auth();
    if (!userId) {
        redirect("/login");
    }
    const transactions = await db.transaction.findMany({
        where: {
            userId,
        },
    });
    const userCanAddTransaction = await canUserAddTransaction();
    return (
        <>
            <NavBar />
            <div className="p-6 space-y-6 overflow-hidden">

                {/* TÍTULO E BOTÃO */}
                <div className="flex w-full justify-between items-center p-6">
                    <h1 className="font-bold text-2xl">Transações</h1>
                    <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
                </div>
                <ScrollArea>
                    <DataTable columns={transactionColumns} 
                    data={JSON.parse(JSON.stringify(transactions))} />
                </ScrollArea>
            </div>
        </>
    );
}

export default TransactionsPage;