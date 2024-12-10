"use client";
import { Button } from "@/app/_components/ui/button";
const AcquirePlanButton = () => {
    const handleAcquirePlanClick = async () => {

    };

    return ( 
        <Button className="w-full rounded-full font-bold" 
        onClick={handleAcquirePlanClick}
        >
            Adquirir Plano
        </Button>
     );
}
 
export default AcquirePlanButton;