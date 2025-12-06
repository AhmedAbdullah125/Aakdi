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

export default function UnitsAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [suspendModalOpen, setSuspendModalOpen] = useState(false)
    const [selectedUnitId, setSelectedUnitId] = useState(null)
    const [units, setUnits] = useState([
        {
            id: 1,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 2,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 3,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 4,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 5,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 6,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 7,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 8,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 9,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 10,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 11,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        },
        {
            id: 12,
            type: "شقة مفروشة ( سكنية )",
            email: "alhanan@gmail.com",
            phone: "0979500013",
            date: "٩ يناير ٢٠٢٥ - 10:15 ص",
            area: "60",
            propertyName: "حصن الجنوب الأول"
        }
    ])

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('وحدات مضافة  / اليــوم')
                break;
            case 'week':
                setTitle('وحدات مضافة  / الأسبوع')
                break;
            case 'month':
                setTitle('وحدات مضافة  / الشهر')
                break;
            case 'year':
                setTitle('وحدات مضافة  / السنة')
                break;
            case 'total':
                setTitle('إجمالي الوحدات')
                break;
            default:
                setTitle('وحدات مضافة  / اليــوم')
                break;
        }
    }, [id])

    const tableHeaders = [
        "نـوع الوحــدة",
        "البريد الإلكتروني",
        "الهاتف",
        "التـاريخ/الســاعة",
        "مســاحة الوحدة",
        "إســم العقــار",
        "الاجــراءات"
    ];

    // Handler for opening delete modal
    const handleDeleteClick = (unitId) => {
        setSelectedUnitId(unitId)
        setDeleteModalOpen(true)
    }

    // Handler for opening suspend modal
    const handleSuspendClick = (unitId) => {
        setSelectedUnitId(unitId)
        setSuspendModalOpen(true)
    }

    // Handler for confirming delete
    const confirmDelete = () => {
        console.log(`Deleting unit ${selectedUnitId}`)
        toast.success('تم حذف الوحدة بنجاح')
        setDeleteModalOpen(false)
        setSelectedUnitId(null)
    }

    // Handler for confirming suspend
    const confirmSuspend = () => {
        console.log(`Suspending unit ${selectedUnitId}`)
        toast.success('تم إيقاف الوحدة بنجاح')
        setSuspendModalOpen(false)
        setSelectedUnitId(null)
    }

    return (
        <div className="financial-analysis-container">
            <Header page='welcome' title={title} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" third={title} thirdURL={`/home/Units-analysis/${id}`} />
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
                        {units.map((row) => (
                            <tr key={row.id}>
                                {/* Unit Type */}
                                <td>{row.type}</td>

                                {/* Email */}
                                <td>{row.email}</td>

                                {/* Phone */}
                                <td>
                                    <div className="phone-cell">
                                        <span>{row.phone}</span>
                                        {/* copy icon to copy number */}
                                        <i className="fa-regular fa-copy" onClick={() => {
                                            navigator.clipboard.writeText(row.phone)
                                            toast.success('تم نسخ رقم الهاتف')
                                        }}></i>
                                        <Link href={`https://wa.me/${row.phone}`} target="_blank">
                                            <Image src={whatsappIcon} alt="wa" width={16} height={16} />
                                        </Link>
                                    </div>
                                </td>

                                {/* Date/Time */}
                                <td>{row.date}</td>

                                {/* Area */}
                                <td>
                                    <div className="stat-cell unit-area">
                                        <span>{row.area}</span>
                                    </div>
                                </td>

                                {/* Property Name */}
                                <td>{row.propertyName}</td>

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
                                                <span>عرض الوحدة</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => handleSuspendClick(row.id)}>
                                                <i className="fa-solid fa-ban ml-2"></i>
                                                <span>إيقاف الوحدة</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-green-600">
                                                <i className="fa-solid fa-circle-check ml-2"></i>
                                                <span>قبول الوحدة</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => handleDeleteClick(row.id)}>
                                                <i className="fa-regular fa-trash-can ml-2"></i>
                                                <span>حذف الوحدة</span>
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
                        <DialogTitle>إيقـاف وحـدة</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle suspend-icon">
                            <i className="fa-solid fa-ban"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-blue">إيقـاف</span> هذه الوحدة !
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
                        <DialogTitle>حذف وحـدة</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-red">حذف</span> هذه الوحدة !
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