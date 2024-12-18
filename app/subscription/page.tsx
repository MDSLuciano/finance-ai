import { auth, clerkClient } from "@clerk/nextjs/server";
import NavBar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/acquire-plan-button";
import { Badge } from "../_components/ui/badge";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transactions";

const SubscriptionPage = async () => {
    const { userId } = await auth();
    if (!userId) {
        redirect("/login");
    }
    const user = await clerkClient().users.getUser(userId);
    const currentMonthTransactions = await getCurrentMonthTransactions();
    const hasPremiumPlan = user?.publicMetadata?.subscriptionPlan === "premium";
    return (
        <>
            <NavBar />
            <div className="p-6 space-y-6">
                <h1 className="font-bold text-2xl">Assinatura</h1>
                <div className="flex gap-6">
                    <Card className="w-[450px]">
                        <CardHeader className="border-b border-solid py-8">
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Básico
                            </h2>
                            <div className="flex item-center gap-3 justify-center">
                                <span className="text-4xl">R$</span>
                                <span className="text-6xl font-semibold">0,00</span>
                                <div className="text-muted-foreground text-2xl">/mês</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-8 p-8">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Apenas 10 transações por mês ({currentMonthTransactions}/10)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <XIcon />
                                <p>Relatórios de IA</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-[450px]">
                        <CardHeader className="border-b border-solid py-8 relative">
                            {hasPremiumPlan && (
                                <Badge className="absolute top-4 left-4">Ativo</Badge>
                            )}
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Premium
                            </h2>
                            <div className="flex item-center gap-3 justify-center">
                                <span className="text-4xl">R$</span>
                                <span className="text-6xl font-semibold">19,00</span>
                                <div className="text-muted-foreground text-2xl">/mês</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-8 p-8">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Transações ilimitadas</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Relatórios de IA</p>
                            </div>
                        <AcquirePlanButton />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default SubscriptionPage;