import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
    transaction: Transaction;
}
const TransactionTypeBadge = ({transaction} : TransactionTypeBadgeProps) => {
        if(transaction.type === TransactionType.DEPOSIT) {
        return (
        <Badge className="font-bold bg-muted text-primary hover:bg-muted">
          <CircleIcon className="fill-primary mr-2" size={10}/>
          Deposito
        </Badge>
        );
      }
      if(transaction.type === TransactionType.EXPENSE) {
        return (
        <Badge className="font-bold hover:bg-danger hover:bg-opacity-10 text-danger bg-danger bg-opacity-10">
          <CircleIcon className="fill-danger mr-2" size={10}/>
          Despesa
        </Badge>
        );
      }
      return (
        <Badge className="font-bold bg-muted text-white hover:bg-muted">
          <CircleIcon className="fill-white mr-2" size={10}/>
          Investimento
        </Badge>
        ) 
}
 
export default TransactionTypeBadge;