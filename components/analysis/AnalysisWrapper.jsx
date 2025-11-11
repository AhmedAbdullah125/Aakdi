import React from "react";
import Header from "../home/Header";
import DayCard from "./finAnalysis/DayCard";


export default function Statistics() {
    const data = [
        {
            name: "دخــل اليــوم",
            value: "4101.20",
            percentage: "+10%",
            type:"day"

        },
        {
            name: "دخــل الأسبوع",
            value: "4101.20",
            percentage: "+10%",
            type:"week"
        },
        {
            name: "دخــل الشهر",
            value: "4101.20",
            percentage: "+10%",
            type:"month"
        },
        {
            name: "دخــل العام",
            value: "4101.20",
            percentage: "+10%",
            type:"year"
        },
        {
            name: "إجمالي الدخــل ",
            value: "4101.20",
            percentage: "+10%",
            type:"total"
        },
    ]

    return (
        <>
            <Header page='welcome' title={"التحليــلات"} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" />
            <div className="flex flex-col gap-6 min-h-screen p-6" dir="rtl">
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
                <main className="analysis-wrapper">
                    {data.map((item, index) => (
                        <DayCard key={index} item={item} />
                    ))}
                </main>
            </div>
        </>
    );
}