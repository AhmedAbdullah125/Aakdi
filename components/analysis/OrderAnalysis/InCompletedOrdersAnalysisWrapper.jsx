'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import blueRial from '@/public/images/blueRial.svg'
import Link from 'next/link'

export default function OrdersAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('طلبات اليــوم الغيــر المكتمله')
                break;
            case 'week':
                setTitle('طلبات الأسبوع الغيــر المكتمله')
                break;
            case 'month':
                setTitle('طلبات الشهر الغيــر المكتمله')
                break;
            case 'year':
                setTitle('طلبات السنة الغيــر المكتمله')
                break;
            case 'total':
                setTitle('إجمالي الطلبات الغيــر المكتمله')
                break;
            default:
                setTitle('طلبات اليــوم الغيــر المكتمله')
                break;
        }
    }, [id])

    const doneImojy = "✅"

    const tableHeaders = [
        "رقــم الطلب",
        "رقــم جوال العميل",
        "نــوع العقــد",
        "نـوع الوثيقة",
        "الدفـــع",
        "مستلم منذ",
        "حــالة الطلب",
        "الاسـتلام",
        "الاجـــراءات",

    ];

    const tableData = [
        {
            id: 1,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "صك إلكــتروني",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 2,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 3,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "وثيقة",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 4,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 5,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "صك ورقي",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 6,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "وثيقة عقارية",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 7,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 8,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "تم تأكيد الطلب",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 9,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "تم تأكيد الطلب",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 10,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 11,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "طلب واستلام تعديل",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        },
        {
            id: 12,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "محتوى دفع من العميل",
            status: "لم يتم التحديــد",
            payment: "❌",
            reciveDate: "منذ 10د",
            reciver: "لم يتم الاستــلام"
        }
    ];

    const getDocumentTypeClass = (type) => {
        const typeMap = {
            'صك إلكــتروني': 'electronic-deed',
            'عقد إيجار': 'rental-contract',
            'صك ورقي': 'paper-deed',
            'وثيقة عقارية': 'property-document',
            'طلب واستلام تعديل': 'modification-request',
            'تم تأكيد العقار': 'property-confirmed',
            'الاستلام': 'delivery',
            'تم تأكيد الطلب': 'order-confirmed',
            'طلب واستلام تعديل': 'modification-delivery',
            'عقد إيجار من العميل': 'client-rental',
            'محتوى دفع من العميل': 'client-payment'
        };
        return typeMap[type] || 'default';
    };

    const getStatusClass = (status) => {
        const statusMap = {
            'قيد المعـالجة ..': 'processing',
            'صك إلكــتروني': 'electronic',
            'وثيقة': 'document',
            'تجــاري': 'commercial',
            'صك ورقي': 'paper',
            'وثيقة عقارية': 'property',
            'تم تأكيد العقار': 'confirmed',
            'جديد استلام': 'new-receive',
            'حجز استلام': 'reserve-receive',
            'عقد إيجار من العميل': 'client-contract',
            'واثيقة عقارية غير القياسية': 'non-standard',
            'لم يتم التحديــد': 'default'
        };
        return statusMap[status] || 'default';
    };
    return (
        <div className="financial-analysis-container">
            <Header page='welcome' title={title} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" third={title} thirdURL={`/home/financial-analysis/${id}`} />

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
                                    <button className={`status-badge ${getDocumentTypeClass(row.documentType)}`}>
                                        {row.documentType}
                                    </button>
                                </td>
                                <td>
                                    <div className="payment-cell">
                                        {row.payment}
                                    </div>
                                </td>
                                <td>{row.reciveDate}</td>
                                <td>
                                    <button className={`status-badge ${getStatusClass(row.status)}`}>
                                        {row.status}
                                    </button>
                                </td>
                                <td>
                                    <span>{row.reciver}</span>
                                </td>
                                <td>
                                    <button className="actions-btn">
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
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