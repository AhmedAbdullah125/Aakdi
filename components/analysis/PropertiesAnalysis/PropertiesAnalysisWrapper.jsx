'use client'
import Header from '../../home/Header'
import React, { useEffect, useState } from 'react'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import whatsappIcon from '@/public/images/waIcon.svg'
import Link from 'next/link'
import { toast } from 'sonner'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"

export default function PropertiesAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [suspendModalOpen, setSuspendModalOpen] = useState(false)
    const [selectedPropertyId, setSelectedPropertyId] = useState(null)
    const [properties, setProperties] = useState([
        {
            id: 1,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 2,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 3,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 4,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 5,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 6,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 7,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 8,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 9,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 10,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 11,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        },
        {
            id: 12,
            name: "خصب الجنـوب",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            units: "03",
            completedRequests: "10",
            incompleteRequests: "14",
            totalPaid: "9999"
        }
    ])

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('عقارات المضافة  / اليــوم')
                break;
            case 'week':
                setTitle('عقارات المضافة  / الأسبوع')
                break;
            case 'month':
                setTitle('عقارات المضافة  / الشهر')
                break;
            case 'year':
                setTitle('عقارات المضافة  / السنة')
                break;
            case 'total':
                setTitle('إجمالي العقـارات')
                break;
            default:
                setTitle('عقارات المضافة  / اليــوم')
                break;
        }
    }, [id])

    const tableHeaders = [
        "اسم العقــار",
        "البريد الإلكتروني",
        "الهاتف",
        "التـاريخ/الســاعة",
        "الوحدات المضـافة في العقــار",
        "الطلبات المكتملة",
        "الطلبات الغير المكتملة",
        "إجمالي المبلغ المدفوع",
        "الاجــراءات"
    ];

    // Handler for opening delete modal
    const handleDeleteClick = (propertyId) => {
        setSelectedPropertyId(propertyId)
        setDeleteModalOpen(true)
    }

    // Handler for opening suspend modal
    const handleSuspendClick = (propertyId) => {
        setSelectedPropertyId(propertyId)
        setSuspendModalOpen(true)
    }

    // Handler for confirming delete
    const confirmDelete = () => {
        console.log(`Deleting property ${selectedPropertyId}`)
        toast.success('تم حذف العقار بنجاح')
        setDeleteModalOpen(false)
        setSelectedPropertyId(null)
    }

    // Handler for confirming suspend
    const confirmSuspend = () => {
        console.log(`Suspending property ${selectedPropertyId}`)
        toast.success('تم إيقاف العقار بنجاح')
        setSuspendModalOpen(false)
        setSelectedPropertyId(null)
    }

    return (
        <div className="financial-analysis-container">
            <Header page='welcome' title={title} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" third={title} thirdURL={`/home/Properties-analysis/${id}`} />
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
                        {properties.map((row) => (
                            <tr key={row.id}>
                                {/* Property Name */}
                                <td>{row.name}</td>

                                {/* Email */}
                                <td>{row.email}</td>

                                {/* Phone */}
                                <td>
                                    <div className="phone-cell">
                                        <span>{row.phone}</span>
                                        <Link href={`https://wa.me/${row.phone}`} target="_blank">
                                            <Image src={whatsappIcon} alt="wa" width={16} height={16} />
                                        </Link>
                                    </div>
                                </td>

                                {/* Date/Time */}
                                <td>{row.date}</td>

                                {/* Units */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.units}</span>
                                        👁️
                                    </div>
                                </td>

                                {/* Completed Requests */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.completedRequests}</span>
                                        👁️
                                    </div>
                                </td>

                                {/* Incomplete Requests */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.incompleteRequests}</span>
                                        👁️
                                    </div>
                                </td>

                                {/* Total Paid */}
                                <td>
                                    <div className="payment-cell">
                                        👁️
                                        <span>{row.totalPaid}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                    </div>
                                </td>

                                {/* Actions */}
                                <td style={{ direction: "rtl" }}>
                                    <DropdownMenu dir="rtl">
                                        <DropdownMenuTrigger asChild>
                                            <button className="actions-btn">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuItem className="cursor-pointer">
                                                <i className="fa-regular fa-eye ml-2"></i>
                                                <span>عرض العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => handleSuspendClick(row.id)}>
                                                <i className="fa-solid fa-ban ml-2"></i>
                                                <span>إيقاف العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-green-600">
                                                <i className="fa-solid fa-circle-check ml-2"></i>
                                                <span>قبول العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => handleDeleteClick(row.id)}>
                                                <i className="fa-regular fa-trash-can ml-2"></i>
                                                <span>حذف العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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

            {/* Suspend Property Modal */}
            <Dialog open={suspendModalOpen} onOpenChange={setSuspendModalOpen}>
                <DialogContent className="custom-dialog suspend-dialog">
                    <button
                        className="dialog-close-btn"
                        onClick={() => setSuspendModalOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle>إيقـاف عقـار</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle suspend-icon">
                            <i className="fa-solid fa-ban"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-blue">إيقـاف</span> هذا العقار !
                        </h3>
                        <p className="dialog-description">
                            هذا الإجراء يمكن التراجع عنه بعد التأكيد !
                        </p>
                    </div>
                    <DialogFooter className="dialog-footer">
                        <button
                            className="dialog-btn cancel-btn"
                            onClick={() => setSuspendModalOpen(false)}
                        >
                            إلغاء
                        </button>
                        <button
                            className="dialog-btn confirm-btn suspend-btn"
                            onClick={confirmSuspend}
                        >
                            تأكيد الإيقاف
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Property Modal */}
            <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
                <DialogContent className="custom-dialog delete-dialog">
                    <button
                        className="dialog-close-btn"
                        onClick={() => setDeleteModalOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle>حذف عقــار</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-red">حذف</span> هذا العقار !
                        </h3>
                        <p className="dialog-description">
                            هذا الإجراء لا يمكن التراجع عنه بعد التأكيد !
                        </p>
                    </div>
                    <DialogFooter className="dialog-footer">
                        <button
                            className="dialog-btn cancel-btn"
                            onClick={() => setDeleteModalOpen(false)}
                        >
                            إلغاء
                        </button>
                        <button
                            className="dialog-btn confirm-btn delete-btn"
                            onClick={confirmDelete}
                        >
                            تأكيد الحذف
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}