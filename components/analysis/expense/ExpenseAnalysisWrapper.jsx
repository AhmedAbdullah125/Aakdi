'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import orangerial from '@/public/images/orangerial.svg'
import Link from 'next/link'

export default function ExpenseAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('مصروفات اليــوم')
                break;
            case 'week':
                setTitle('مصروفات الأسبوع')
                break;
            case 'month':
                setTitle('مصروفات الشهر')
                break;
            case 'year':
                setTitle('مصروفات السنة')
                break;
            case 'total':
                setTitle('إجمالي المصروفات')
                break;
            default:
                setTitle('مصروفات اليــوم')
                break;
        }
    }, [id])

    const tableHeaders = [
        "تاريخ الإضافة",
        "المبــلغ",
        "الملاحظة",
    ];

    const row =
    {
        id: 1,
        date: "01 أغسطس 2025",
        price: "249.99",
        note: "تمت ملاحظة تقصير الموظف في تسليم المهام ضمن الوقت المحدد خلال الشهر الماضي، رغم تنبيهه مسبقًا بضرورة الالتزام بمواعيد التسليم. كما لوحظ ضعف في المتابعة اليومية للطلبات وقلة التفاعل مع الزملاء في فريق العمل. يُرجى من الموظف تحسين مستوى الانضباط والحرص على إنجاز المهام وفق الجدول الزمني المحدد، مع رفع تقارير الأداء بشكل دوري لضمان وضوح سير العمل وجودة النتائج.",
    }
        ;

    return (
        <div className="financial-analysis-container">
            <Header page='welcome' title={title} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" third={title} thirdURL={`/home/return-analysis/${id}`} />
            <div className="financial-table-cont">
                <table className="financial-table">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="date-cell">
                                        <span>{row.date}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="payment-cell">
                                        <span>{row.price}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                        ✅
                                    </div>
                                </td>
                                <td>
                                    <div className="note-cell">
                                        <span>{row.note}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button className="pagination-btn"><i className="fa-solid fa-chevron-right"></i></button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">...</button>
                <button className="pagination-btn">40</button>
                <button className="pagination-btn"><i className="fa-solid fa-chevron-left"></i></button>
            </div>
        </div>
    )
}