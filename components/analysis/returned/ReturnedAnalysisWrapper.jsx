'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import orangerial from '@/public/images/orangerial.svg'
import Link from 'next/link'

export default function ReturnedAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('مسترجع اليــوم')
                break;
            case 'week':
                setTitle('مسترجع الأسبوع')
                break;
            case 'month':
                setTitle('مسترجع الشهر')
                break;
            case 'year':
                setTitle('مسترجع السنة')
                break;
            case 'total':
                setTitle('إجمالي المسترجع')
                break;
            default:
                setTitle('مسترجع اليــوم')
                break;
        }
    }, [id])

    const tableHeaders = [
        "رقــم الطلب",
        "رقــم جوال العميل",
        "نــوع العقــد",
        "الدفـــع",
        "المبــلغ المطالــب اســترجاعه",
        "تم الاستــرجــاع",
        "رافــع الطلب",
        "مــوافقة الادارة",
        "عرض العقــد",
    ];

    const tableData = [
        {
            id: 1,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            price: "249.99",
            returnedPrice: "125.99",
            returned: true,
            employee: "نهــال",
            manager: true,
        },
        {
            id: 2,
            orderNumber: "000001",
            phone: "997600013",
            contractType: "سكنـي",
            price: "249.99",
            returnedPrice: "125.99",
            returned: true,
            employee: "نهــال",
            manager: true,
        },
        {
            id: 3,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            price: "249.99",
            returnedPrice: "125.99",
            returned: false,
            employee: "نهــال",
            manager: false,
        },
        {
            id: 4,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            price: "249.99",
            returnedPrice: "125.99",
            returned: true,
            employee: "نهــال",
            manager: true,
        },
        {
            id: 5,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            price: "249.99",
            returnedPrice: "125.99",
            returned: true,
            employee: "نهــال",
            manager: true,
        },
    ];

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
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <div className="order-number-cell">
                                        <span>{row.orderNumber}</span>
                                        <button onClick={() => navigator.clipboard.writeText(row.orderNumber)}><i className="fa-regular fa-copy"></i></button>
                                    </div>
                                </td>
                                <td>
                                    <div className="phone-cell">
                                        <span>{row.phone}</span>
                                        <Link href={`https://wa.me/${row.phone}`} target="_blank">
                                            <Image src={waIcon} alt="wa" width={16} height={16} />
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <button className={`status-badge ${row.contractType === 'سكنـي' ? 'residential' : row.contractType === 'تجــاري' ? 'commercial' : 'other'}`}>
                                        {row.contractType}
                                    </button>
                                </td>
                                <td>
                                    <div className="payment-cell">
                                        <span>{row.price}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                        ✅
                                    </div>
                                </td>
                                <td>
                                    <div className="returned-cell">
                                        <span>{row.returnedPrice}</span>
                                        <Image src={orangerial} alt="rial" width={16} height={16} />
                                    </div>
                                </td>
                                <td>
                                    <button className={`status-badge ${row.returned ? 'returned-yes' : 'returned-no'}`}>
                                        {row.returned ? "✅ تم المــوافقة" : "❌ لم تتم المــوافقة"}
                                    </button>
                                </td>
                                <td>
                                    <button className="status-badge residential">
                                        {row.employee}
                                    </button>
                                </td>
                                <td>
                                    <button className={`status-badge ${row.manager ? 'returned-yes' : 'returned-no'}`}>
                                        {row.manager ? "✅ تم المــوافقة" : "❌ لم تتم المــوافقة"}
                                    </button>
                                </td>
                                <td>
                                    <button className="actions-btn">
                                        <i className="fa-solid fa-eye"></i>
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
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