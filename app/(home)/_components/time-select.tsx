"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
    { label: "Janeiro", value: "01" },
    { label: "Fevereiro", value: "02" },
    { label: "Março", value: "03" },
    { label: "Abril", value: "04" },
    { label: "Maio", value: "05" },
    { label: "Junho", value: "06" },
    { label: "Julho", value: "07" },
    { label: "Agosto", value: "08" },
    { label: "Setembro", value: "09" },
    { label: "Outubro", value: "10" },
    { label: "Novembro", value: "11" },
    { label: "Dezembro", value: "12" },
]

const TimeSelect = () => {
    const { push } = useRouter()
    const searchParams = useSearchParams()
    const month = searchParams.get("month")
    const handleMonthChange = (month: string) => {
        push(`/?month=${month}`)
    }
    return (
        <Select onValueChange={(value) => handleMonthChange(value)} defaultValue={month ?? ""}>
            <SelectTrigger className="rounded-full w-[200px]">
                <SelectValue placeholder="Selecione um mês" />
            </SelectTrigger>
            <SelectContent>
                {MONTH_OPTIONS.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                        {month.label}
                    </SelectItem>
                ))}
            </SelectContent>

        </Select>
    );
}

export default TimeSelect;