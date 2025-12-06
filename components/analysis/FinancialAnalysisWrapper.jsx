'use client'
import React, { useEffect, useState } from 'react'
import Header from '../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import blueRial from '@/public/images/blueRial.svg'
import Link from 'next/link'

export default function FinancialAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('دخل اليــوم')
                break;
            case 'week':
                setTitle('دخل الأسبوع')
                break;
            case 'month':
                setTitle('دخل الشهر')
                break;
            case 'year':
                setTitle('دخل العام')
                break;
            case 'total':
                setTitle('إجمالي الدخــل')
                break;
            default:
                setTitle('دخل اليــوم')
                break;
        }
    }, [id])

    const doneImojy = "✅"

    const tableHeaders = [
        "رقــم الجوال",
        "المبلغ",
        "الســأعة",
        "تاريخ الدفع",
        "رقم العقد",
        "العملة",
        "طريقة الدفع",
        "الحالة",
    ];

    const tableData = Array(11).fill(null).map((_, index) => ({
        id: index + 1,
        phone: "597500013",
        amount: "99,99",
        time: "10:15 ص",
        date: "٩ يناير ٢٠٢٥",
        contractNumber: "780695",
        currency: "ريال",
        paymentMethod: "ApplePay",
        status: "مكتمل",
    }));

    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={title}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second='التحليــلات'
                secondURL="/home/analysis"
                third={title}
                thirdURL={`/home/financial-analysis/${id}`}
            />
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
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td className="phone-cell">{row.phone} 
                                <button onClick={() => navigator.clipboard.writeText(row.phone)}><i className="fa-regular fa-copy"></i></button> 
                            <Link href={`https://wa.me/${row.phone}`} target="_blank"><Image src={waIcon} alt="wa" width={16} height={16} /></Link>
                            </td>
                            <td>
                                <div className="amount-cell">
                                    <span>{row.amount}</span>
                                    <Image src={greenRial} alt="rial" width={16} height={16} />
                                </div>
                            </td>

                            <td>{row.time}</td>
                            <td>{row.date}</td>
                            <td>{row.contractNumber}</td>
                            <td>{row.currency == "ريال" ? <Image src={blueRial} alt="rial" width={16} height={16} /> : <Image src={greenRial} alt="rial" width={16} height={16} />}</td>
                            <td>{row.paymentMethod}</td>

                            <td> <button className="note-btn">ناجحة</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className="pagination">
                {/* cheveron */}
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