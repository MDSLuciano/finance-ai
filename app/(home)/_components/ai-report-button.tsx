"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { BotIcon, Loader2Icon } from "lucide-react";
import { generateAiReport } from "../_actions/generate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import MarkDown from "react-markdown";
import Link from "next/link";

interface AiReportButtonProps {
    hasPremiumPlan: boolean;
    month: string;
}

const AiReportButton = ({ month, hasPremiumPlan }: AiReportButtonProps) => {
    const [report, setReport] = useState<string | null>(null);
    const [reportIsLoading, setReportIsLoading] = useState<boolean>(false);
    const handleGenerateReportClick = async () => {
        try {
            setReportIsLoading(true);
            const aiReport = await generateAiReport({ month });
            setReport(aiReport);
        } catch (error) {
            console.error(error);
        } finally {
            setReportIsLoading(false);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    Relatório AI
                    <BotIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[600px]">
                {hasPremiumPlan ?
                    (<>
                        <DialogHeader>
                            <DialogTitle>Relatório AI</DialogTitle>
                            <DialogDescription>
                                Use o relatório AI para gerar um relatório sobre o seu dinheiro.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="prose prose-h3:text-white prose-h4:text-white prose-strong:text-white max-h-[450px] text-white ">
                            <MarkDown>{report}</MarkDown>
                        </ScrollArea>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="ghost">Cancelar</Button>
                            </DialogClose>
                            <Button onClick={handleGenerateReportClick} disabled={reportIsLoading}>
                                {reportIsLoading && <Loader2Icon className="animate-spin mr-2" />}
                                Gerar relatório
                            </Button>
                        </DialogFooter>
                    </>
                    ) :
                    (
                        <>
                            <DialogHeader>
                                <DialogTitle>Relatório AI</DialogTitle>
                                <DialogDescription>
                                   Você precisa ter um plano premium para usar o relatório AI.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="ghost">Cancelar</Button>
                                </DialogClose>
                                <Button asChild>
                                    <Link href="/subscription">
                                        Assinar plano Premium
                                    </Link>
                                </Button>
                            </DialogFooter>
                        </>
                    )
                }
            </DialogContent>
        </Dialog>
    );
}

export default AiReportButton;