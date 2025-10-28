import React from 'react'
import Header from '../home/Header'
export default function AnalysisWrapper() {
const analysis= {
    Financial: [
        {
            title: 'دخــل اليــوم',
            rate: 11,
            value:4101.20,
        },
        {
            title: 'دخــل الأسبوع',
            rate: 11,
            value:4101.20,
        }
    ]
}
    return (
        <>
            <Header page='welcome' title={"التحليــلات"} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis"/>
        </>
    )
}
