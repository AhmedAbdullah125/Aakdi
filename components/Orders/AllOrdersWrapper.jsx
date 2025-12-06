'use client'
import React, { useEffect, useState } from 'react'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import blueRial from '@/public/images/blueRial.svg'
import Link from 'next/link'
import Header from '../home/Header'
import { toast } from 'sonner'

export default function AllOrdersWrapper({ id }) {
    const [title, setTitle] = useState('')


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
            status: "قيد المعـالجة ..",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 2,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "وثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 3,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "وثيقة",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 4,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "تم تأكيد العقار",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 5,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "صك ورقي",
            status: "وثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 6,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "وثيقة عقارية",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 7,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "واثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 8,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "تم تأكيد الطلب",
            status: "حجز استلام",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 9,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "تم تأكيد الطلب",
            status: "عقد إيجار من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 10,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "واثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 11,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "طلب واستلام تعديل",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 12,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "محتوى دفع من العميل",
            status: "عقد إيجار من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
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
            'واثيقة عقارية غير القياسية': 'non-standard'
        };
        return statusMap[status] || 'default';
    };
    return (
        <div className="financial-analysis-container">
            <Header page='welcome' title={"جميع الطلبات"} isMain={false} first="الرئيــسية" firstURL="/" second="جميع الطلبات" secondURL="/orders" />
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
                                        <button onClick={() => {
                                            navigator.clipboard.writeText(row.orderNumber)
                                            toast.success('تم نسخ رقم الطلب')
                                        }}><i className="fa-regular fa-copy"></i></button>
                                    </div>
                                </td>
                                <td>
                                    <div className="phone-cell">
                                        <span>{row.phone}</span>
                                        <button onClick={() => {
                                            navigator.clipboard.writeText(row.phone)
                                            toast.success('تم نسخ رقم الجوال')
                                        }}><i className="fa-regular fa-copy"></i></button>
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
                                        <span>{row.payment}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                        ✅
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