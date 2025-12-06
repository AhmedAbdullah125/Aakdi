'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import whatsappIcon from '@/public/images/waIcon.svg'
import Link from 'next/link'
import { Switch } from "@/components/ui/switch"
import { toast } from 'sonner'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
export default function UsersAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [suspendModalOpen, setSuspendModalOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "00.00"
        },
        {
            id: 2,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 3,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "00",
            units: "00",
            complaints: "00",
            completedRequests: "0",
            incompleteRequests: "0",
            totalPaid: "00.00"
        },
        {
            id: 4,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 5,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 6,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "00",
            units: "00",
            complaints: "00",
            completedRequests: "0",
            incompleteRequests: "0",
            totalPaid: "00.00"
        },
        {
            id: 7,
            name: "حسین احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 8,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 9,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "00",
            units: "00",
            complaints: "00",
            completedRequests: "0",
            incompleteRequests: "0",
            totalPaid: "00.00"
        },
        {
            id: 10,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 11,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        },
        {
            id: 12,
            name: "حسين احمد البصري",
            email: "elhanan@gmail.com",
            phone: "597900013",
            status: true,
            date: "يناير 1, 2025 - 10:10 ص",
            properties: "03",
            units: "10",
            complaints: "14",
            completedRequests: "01",
            incompleteRequests: "12",
            totalPaid: "99.99"
        }
    ])

    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('المستخدمين الجدد  / اليــوم')
                break;
            case 'week':
                setTitle('المستخدمين الجدد / الأسبوع')
                break;
            case 'month':
                setTitle('المستخدمين الجدد / الشهر')
                break;
            case 'year':
                setTitle('المستخدمين الجدد / السنة')
                break;
            case 'total':
                setTitle('إجمالي المستخدمين الجدد')
                break;
            case 'top_completed_orders':
                setTitle('اكثر العملاء طلب مكتمل')
                break;
            case 'top_incomplete_orders':
                setTitle('اكثر العملاء طلب غير مكتمل')
                break;
            case 'top_properties':
                setTitle("اكثر العملاء عقارات")
                break;
            case 'top_units':
                setTitle('اكثر العملاء وحدات')
                break;
            case 'top_refunds':
                setTitle('اكثر العملاء استرجاع')
                break;
            case 'top_orders':
                setTitle('اكثر العملاء طلبـــات')
                break;
            default:
                setTitle('المستخدمين الجدد / اليــوم')
                break;
        }
    }, [id])

    const tableHeaders = [
        "الاسم",
        "البريد الإلكتروني",
        "الهاتف",
        "الحالة: تفعيل/إلغاء",
        "التـاريخ/الســاعة",
        "العقــارات",
        "الوحدات",
        "الشكاوى",
        "الطلبات المكتملة",
        "الطلبات الغير المكتملة",
        "إجمالي المبلغ المدفوع",
        "الاجــراءات"
    ];

    // Handler for status change
    const handleStatusChange = (userId, newStatus) => {
        console.log(`User ID: ${userId}, New Status: ${newStatus ? 'Active' : 'Inactive'}`)

        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.id === userId ? { ...user, status: newStatus } : user
            )
        )
    }

    // Handler for opening delete modal
    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId)
        setDeleteModalOpen(true)
    }

    // Handler for opening suspend modal
    const handleSuspendClick = (userId) => {
        setSelectedUserId(userId)
        setSuspendModalOpen(true)
    }

    // Handler for confirming delete
    const confirmDelete = () => {
        console.log(`Deleting user ${selectedUserId}`)
        toast.success('تم حذف المستخدم بنجاح')
        setDeleteModalOpen(false)
        setSelectedUserId(null)
        // Add your delete logic here
    }

    // Handler for confirming suspend
    const confirmSuspend = () => {
        console.log(`Suspending user ${selectedUserId}`)
        toast.success('تم إيقاف المستخدم بنجاح')
        setSuspendModalOpen(false)
        setSelectedUserId(null)
        // Add your suspend logic here
    }


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
                        {users.map((row) => (
                            <tr key={row.id}>
                                {/* Name */}
                                <td>{row.name}</td>

                                {/* Email */}
                                <td>{row.email}</td>

                                {/* Phone */}
                                <td>
                                    <div className="phone-cell">
                                        <span>{row.phone}</span>
                                        <i className="fa-solid fa-copy" onClick={() => {
                                            navigator.clipboard.writeText(row.phone)
                                            toast.success('تم نسخ رقم الهاتف')
                                        }}></i>
                                        <Link href={`https://wa.me/${row.phone}`} target="_blank">
                                            <Image src={whatsappIcon} alt="wa" width={16} height={16} />
                                        </Link>
                                    </div>
                                </td>

                                {/* Status Toggle */}
                                <td style={{ direction: "ltr" }} className='flex items-center justify-center'>
                                    <Switch
                                        checked={row.status}
                                        onCheckedChange={(checked) => handleStatusChange(row.id, checked)}
                                    />
                                </td>

                                {/* Date */}
                                <td>{row.date}</td>

                                {/* Properties */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.properties}</span>
                                        👁️
                                    </div>
                                </td>

                                {/* Units */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.units}</span>
                                        👁️
                                    </div>
                                </td>

                                {/* Complaints */}
                                <td>
                                    <div className="stat-cell">
                                        <span>{row.complaints}</span>
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
                                        <span>{row.totalPaid}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                        👁️
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
                                                <span>عرض المستخدم</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => handleSuspendClick(row.id)}>
                                                <i className="fa-solid fa-ban ml-2"></i>
                                                <span>إيقاف المستخدم</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-green-600">
                                                <i className="fa-solid fa-circle-check ml-2"></i>
                                                <span>قبول المستخدم</span>
                                                <i className="fa-solid fa-chevron-left mr-auto"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => handleDeleteClick(row.id)}>
                                                <i className="fa-regular fa-trash-can ml-2"></i>
                                                <span>حذف المستخدم</span>
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
                {/* cheveron */}
                <button className="pagination-btn"><i className="fa-solid fa-chevron-right"></i></button>
                <button className="pagination-btn active">1</button>


                <button className="pagination-btn">2</button>
                <button className="pagination-btn">...</button>
                <button className="pagination-btn">40</button>
                <button className="pagination-btn"><i className="fa-solid fa-chevron-left"></i></button>
            </div>

            {/* Suspend User Modal */}
            <Dialog open={suspendModalOpen} onOpenChange={setSuspendModalOpen}>
                <DialogContent className="custom-dialog suspend-dialog">
                    <button
                        className="dialog-close-btn"
                        onClick={() => setSuspendModalOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle>إيقـاف حسـاب</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle suspend-icon">
                            <i className="fa-solid fa-ban"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-blue">إيقـاف</span> حساب الضيف !
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

            {/* Delete User Modal */}
            <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
                <DialogContent className="custom-dialog delete-dialog">
                    <button
                        className="dialog-close-btn"
                        onClick={() => setDeleteModalOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle>حذف حســاب</DialogTitle>
                    </DialogHeader>
                    <div className="dialog-body">
                        <div className="icon-circle delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                        <h3 className="dialog-question">
                            هل أنت متأكد من <span className="highlight-red">حذف</span> حساب الضيف !
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