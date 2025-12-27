'use client'
import React, { useState } from 'react'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import Link from 'next/link'
import Header from '../home/Header'
import { toast } from 'sonner'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CompletedOrdersWrapper({ id }) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [refundModalStep, setRefundModalStep] = useState(0); // 0: closed, 1: form, 2: submitted, 3: success
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [refundDraftNumber, setRefundDraftNumber] = useState('');
    const [refundAmount, setRefundAmount] = useState('');
    const [refundNotes, setRefundNotes] = useState('');

    // Add Contract Modal State
    const [contractModalStep, setContractModalStep] = useState(0); // 0: closed, 1: form, 2: success
    const [contractPhone, setContractPhone] = useState('');
    const [contractDate, setContractDate] = useState('');
    const [contractType, setContractType] = useState(''); // 'سكني' or 'تجاري'
    const [contractClassification, setContractClassification] = useState([]);
    const [contractDocumented, setContractDocumented] = useState(''); // 'نعم' or 'لا'
    const [contractDuration, setContractDuration] = useState('');
    const [contractAmount, setContractAmount] = useState('');
    const [contractRentalFees, setContractRentalFees] = useState('');
    const [contractNotes, setContractNotes] = useState('');

    // Incomplete Contract Modal State
    const [incompleteModalStep, setIncompleteModalStep] = useState(0); // 0: closed, 1: form, 2: submitted, 3: success
    const [incompletePhone, setIncompletePhone] = useState('');
    const [incompleteNotes, setIncompleteNotes] = useState('');
    const [incompleteDate, setIncompleteDate] = useState('');
    const [incompleteTime, setIncompleteTime] = useState('');

    // Mapping filter keys to status values
    const filterStatusMap = {
        'processing': 'قيد المعـالجة',
        'awaiting_verification': 'بينتظار تأكيد بيانات العقار',
        'client_action': 'محتوى دفع من العميل',
        'confirmed': 'تم تأكيد العقار',
        'awaiting_approval': 'بانتظار اعتماد العقد',
        'incomplete': 'وثيقة عقارية غير القياسية',
        'other': 'حجز استلام'
    };

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
            <div className="order-analysis-manager">
                {/* Filter Badges and Search Section */}
                <div className="filter-section">
                    <div className="filter-right">
                        <button className="action-btn pink-btn" onClick={() => setContractModalStep(1)}>
                            <span>إضافة عقــد واتســـاب مكتمـل +</span>
                        </button>
                        <button className="action-btn blue-btn" onClick={() => setIncompleteModalStep(1)}>
                            <span>إضافة عقــد واتســـاب غير مكتمـل +</span>
                        </button>
                    </div>



                    <div className="filter-center">
                        <div className="search-container">
                            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input type="text" placeholder="البحث الذكي ...!" className="search-input" />
                        </div>

                        <div className="filter-badges">
                            <div className="badge-item green">
                                <span className="badge-icon">✅</span>
                                <span className="badge-label">تم التوثيق</span>
                                <span className="badge-count">47</span>
                            </div>

                            <div className="badge-item orange">
                                <span className="badge-icon">📋</span>
                                <span className="badge-label">طلب وانتساب محتمل</span>
                                <span className="badge-count">04</span>
                            </div>

                            <div className="badge-item yellow">
                                <span className="badge-icon">😊</span>
                                <span className="badge-label">مستردة</span>
                                <span className="badge-count">02</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-left">
                        <button className="menu-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button className="period-btn">
                            فتـرة أخـــر
                        </button>
                    </div>

                </div>
                <div className="main-filter">
                    <div className="filter-stats-grid">
                        {/* قيد المعالجة */}
                        <div
                            className={`stat-card ${activeFilter === 'processing' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('processing')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji">🧐</span>
                                <h3 className="stat-title">قيد المعالجة</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">11</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* بينتظار تأكيد بيانات العقار */}
                        <div
                            className={`stat-card ${activeFilter === 'awaiting_verification' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('awaiting_verification')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji">⏳</span>
                                <h3 className="stat-title">بينتظار تأكيد بيانات العقـار</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">07</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* مطلوب إجراء من العميل */}
                        <div
                            className={`stat-card ${activeFilter === 'client_action' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('client_action')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji">
                                    <Image src={waIcon} alt="WhatsApp" width={48} height={48} />
                                </span>
                                <h3 className="stat-title">مطلوب إجراء من العميل</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">02</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* تم تأكيد العقار */}
                        <div
                            className={`stat-card ${activeFilter === 'confirmed' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('confirmed')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji">🏡</span>
                                <h3 className="stat-title">تم تأكيد العقـار</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">47</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* بانتظار اعتماد العقد */}
                        <div
                            className={`stat-card small ${activeFilter === 'awaiting_approval' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('awaiting_approval')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji small-emoji">😴</span>
                                <h3 className="stat-title">بانتظار اعتماد العقد</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">10</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* طلب وانتساب غير مكتمل */}
                        <div
                            className={`stat-card small ${activeFilter === 'incomplete' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('incomplete')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji small-emoji">🚫</span>
                                <h3 className="stat-title">طلب وانتساب غير مكتمل</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">01</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* أخرى */}
                        <div
                            className={`stat-card small ${activeFilter === 'other' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('other')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji small-emoji">🤔</span>
                                <h3 className="stat-title">أخـرى</h3>
                            </div>
                            <div className="stat-body">
                                <div className="stat-number">04</div>
                                <button className="stat-badge green">تصفيــة</button>
                            </div>
                        </div>

                        {/* عرض الكل */}
                        <div
                            className={`stat-card small all-filter ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            <div className="stat-header">
                                <span className="stat-emoji small-emoji">📊</span>
                                <h3 className="stat-title">عرض الكل</h3>
                            </div>
                            <div className="stat-body">
                                <button className="stat-badge blue">عـرض الكــل</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        {tableData
                            .filter(row => {
                                if (activeFilter === 'all') return true;
                                const filterStatus = filterStatusMap[activeFilter];
                                return row.status.includes(filterStatus);
                            })
                            .map((row) => (
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
                                    <td className='flex gap-2'>
                                        <button className="actions-btn">
                                            👁️
                                        </button>
                                        <DropdownMenu dir="rtl">
                                            <DropdownMenuTrigger asChild>
                                                <button className="actions-btn">
                                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-64">
                                                {/* قيد المعالجة */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: قيد المعالجة')
                                                }}>
                                                    <span className="ml-2 text-xl">🧐</span>
                                                    <span>قيد المعالجة</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* بينتظار تأكيد بيانات العقار */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: بينتظار تأكيد بيانات العقار')
                                                }}>
                                                    <span className="ml-2 text-xl">⏳</span>
                                                    <span>بينتظار تأكيد بيانات العقار</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* مطلوب اجراء من العميل */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: مطلوب اجراء من العميل')
                                                }}>
                                                    <span className="ml-2">
                                                        <Image src={waIcon} alt="WhatsApp" width={20} height={20} />
                                                    </span>
                                                    <span>مطلوب اجراء من العميل</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* تم تأكيد العقار */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: تم تأكيد العقار')
                                                }}>
                                                    <span className="ml-2 text-xl">🏡</span>
                                                    <span>تم تأكيد العقار</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* بانتظار اعتماد العقد */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: بانتظار اعتماد العقد')
                                                }}>
                                                    <span className="ml-2 text-xl">😴</span>
                                                    <span>بانتظار اعتماد العقد</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* تم التوثيق */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: تم التوثيق')
                                                }}>
                                                    <span className="ml-2 text-xl">✅</span>
                                                    <span>تم التوثيق</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* مستردجع */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    setSelectedOrder(row);
                                                    setRefundModalStep(1);
                                                }}>
                                                    <span className="ml-2 text-xl">😩</span>
                                                    <span>مستردجع</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* أخرى */}
                                                <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                                    toast.success('تم تحديث حالة الطلب إلى: أخرى')
                                                }}>
                                                    <span className="ml-2 text-xl">🤔</span>
                                                    <span>أخـرى</span>
                                                    <i className="fa-solid fa-chevron-left mr-auto"></i>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />

                                                {/* حذف الطلب */}
                                                <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => {
                                                    toast.error('تم حذف الطلب')
                                                }}>
                                                    <span className="ml-2 text-xl">🗑️</span>
                                                    <span>حذف الطلـب</span>
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

            {/* Refund Modal Step 1: Form */}
            <Dialog open={refundModalStep === 1} onOpenChange={(open) => !open && setRefundModalStep(0)}>
                <DialogContent className="refund-modal-content">
                    <button className="modal-close-btn" onClick={() => setRefundModalStep(0)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle className="refund-modal-title">طلب إسترجـاع</DialogTitle>
                    </DialogHeader>
                    <div className="refund-modal-body">
                        {selectedOrder && (
                            <>
                                <div className="refund-info-grid">
                                    <div className="refund-info-item">
                                        <span className="refund-label">رقـم الطلب</span>
                                        <span className="refund-value">{selectedOrder.orderNumber}</span>
                                    </div>
                                    <div className="refund-info-item">
                                        <span className="refund-badge">منذ يوم و 3 س</span>
                                    </div>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">رقـم جوال العميل</span>
                                    <div className="refund-phone-group">
                                        <Link href={`https://wa.me/${selectedOrder.phone}`} target="_blank">
                                            <Image src={waIcon} alt="WhatsApp" width={20} height={20} />
                                        </Link>
                                        <i className="fa-regular fa-copy" onClick={() => {
                                            navigator.clipboard.writeText(selectedOrder.phone);
                                            toast.success('تم نسخ رقم الهاتف');
                                        }}></i>
                                        <span>{selectedOrder.phone}</span>
                                    </div>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">نـوع العقــد</span>
                                    <span className="refund-badge-primary">سكنـي</span>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">الدفـــع</span>
                                    <div className="refund-payment-group">
                                        <span className="refund-checkmark">✅</span>
                                        <span className="refund-price">99.99 ر</span>
                                    </div>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">مستلم منذ</span>
                                    <span className="refund-time">منذ 10د</span>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">حـالة الطلب</span>
                                    <span className="refund-badge-status">طلب مكتمل</span>
                                </div>

                                <div className="refund-info-item">
                                    <span className="refund-label">الاستلام</span>
                                    <span className="refund-receiver">ريـــان</span>
                                </div>

                                <div className="refund-input-group">
                                    <label className="refund-input-label">
                                        رقم مسودة العقد
                                        <span className="refund-required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="refund-input"
                                        placeholder="أدخل رقم مسودة العقد هنـا ..."
                                        value={refundDraftNumber}
                                        onChange={(e) => setRefundDraftNumber(e.target.value)}
                                    />
                                </div>

                                <div className="refund-input-group">
                                    <label className="refund-input-label">
                                        قيمة المبلغ المسترجع
                                        <span className="refund-required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="refund-input"
                                        placeholder="أدخل قيمة قيمة المبلغ المسترجع هنـا ..."
                                        value={refundAmount}
                                        onChange={(e) => setRefundAmount(e.target.value)}
                                    />
                                </div>

                                <div className="refund-input-group">
                                    <label className="refund-input-label">ملاحظات تود ذكرها</label>
                                    <textarea
                                        className="refund-textarea"
                                        placeholder="أكتب هنـا ..."
                                        value={refundNotes}
                                        onChange={(e) => setRefundNotes(e.target.value)}
                                        rows={4}
                                    />
                                </div>

                                <button
                                    className="refund-submit-btn"
                                    onClick={() => {
                                        if (!refundDraftNumber || !refundAmount) {
                                            toast.error('يرجى ملء جميع الحقول المطلوبة');
                                            return;
                                        }
                                        setRefundModalStep(2);
                                    }}
                                >
                                    طلب إسترجـاع
                                </button>
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Refund Modal Step 2: Submitted Confirmation */}
            <Dialog open={refundModalStep === 2} onOpenChange={(open) => !open && setRefundModalStep(0)}>
                <DialogContent className="refund-confirm-modal">
                    <div className="refund-confirm-body">
                        <div className="refund-confirm-icon">
                            <div className="refund-loading-circle">
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <h2 className="refund-confirm-title">
                            <span className="refund-checkmark-text">✅</span> تم رفع طلب الاسترجاع بنجاح
                        </h2>
                        <p className="refund-confirm-text">
                            الرجاء نسخ الكلام وإرساله للعميل :
                        </p>
                        <div className="refund-divider"></div>
                        <p className="refund-confirm-message">عميلنا العزيز،</p>
                        <p className="refund-confirm-details">
                            الرجاء تعبئة البيانات لإتمام طلb الاسترجاع :<br />
                            أسم البنك :<br />
                            أسم صاحب الحساب :<br />
                            رقم الحساب او الآيبان :<br />
                            <span className="refund-warning">🔴</span> يشترط ان يكون رقم الحساب هو نفس وفي حالة تغييره سيتم رفض الطلب<br />
                            <span className="refund-timer">⏱️</span> سيتم استرجاع المبلغ خلال يوم إلى 3 أيام عمل
                        </p>
                        <div className="refund-divider"></div>
                        <p className="refund-thanks">شكراً لتفهمكم.</p>
                        <div className="refund-phone-copy">
                            <Link href={`https://wa.me/${selectedOrder?.phone}`} target="_blank">
                                <Image src={waIcon} alt="WhatsApp" width={24} height={24} />
                            </Link>
                            <i className="fa-regular fa-copy" onClick={() => {
                                const message = `عميلنا العزيز،\n\nالرجاء تعبئة البيانات لإتمام طلب الاسترجاع :\nأسم البنك :\nأسم صاحب الحساب :\nرقم الحساب او الآيبان :\n🔴 يشترط ان يكون رقم الحساب هو نفس وفي حالة تغييره سيتم رفض الطلب\n⏱️ سيتم استرجاع المبلغ خلال يوم إلى 3 أيام عمل\n\nشكراً لتفهمكم.`;
                                navigator.clipboard.writeText(message);
                                toast.success('تم نسخ الرسالة');
                            }}></i>
                            <span>{selectedOrder?.phone}</span>
                        </div>
                        <button
                            className="refund-done-btn"
                            onClick={() => setRefundModalStep(3)}
                        >
                            تم
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Refund Modal Step 3: Success */}
            <Dialog open={refundModalStep === 3} onOpenChange={(open) => {
                if (!open) {
                    setRefundModalStep(0);
                    setRefundDraftNumber('');
                    setRefundAmount('');
                    setRefundNotes('');
                    setSelectedOrder(null);
                }
            }}>
                <DialogContent className="refund-success-modal">
                    <div className="refund-success-body">
                        <div className="refund-success-emoji">🧐</div>
                        <h2 className="refund-success-title">
                            تم تصنيف الطالب رقم <span className="refund-order-number">{selectedOrder?.orderNumber}</span>
                        </h2>
                        <p className="refund-success-message">
                            الى <span className="refund-status-highlight">مسترجع</span> بنجاح!
                        </p>
                        <button
                            className="refund-final-btn"
                            onClick={() => {
                                setRefundModalStep(0);
                                setRefundDraftNumber('');
                                setRefundAmount('');
                                setRefundNotes('');
                                setSelectedOrder(null);
                                // close dialog and drop down
                                toast.success('تم تحديث حالة الطلب بنجاح');
                            }}
                        >
                            تم
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Add Contract Modal Step 1: Form */}
            <Dialog open={contractModalStep === 1} onOpenChange={(open) => !open && setContractModalStep(0)}>
                <DialogContent className="contract-modal-content">
                    <button className="modal-close-btn" onClick={() => setContractModalStep(0)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle className="contract-modal-title">إضـافة عقد وانتســاب مكتمل</DialogTitle>
                    </DialogHeader>
                    <div className="contract-modal-body">
                        {/* Phone Number */}
                        <div className="contract-form-row">
                            <div className="contract-form-group">
                                <label className="contract-label">
                                    رقم الجـوال
                                    <span className="contract-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="contract-input"
                                    placeholder="أدخل رقم الجـوال هنـا ..."
                                    value={contractPhone}
                                    onChange={(e) => setContractPhone(e.target.value)}
                                />
                            </div>
                            <div className="contract-form-group">
                                <label className="contract-label">تـاريخ الإضـافة</label>
                                <input
                                    type="text"
                                    className="contract-input"
                                    value="01 - 10 - 2025 / 10:48 ص"
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Contract Type */}
                        <div className="contract-form-group">
                            <label className="contract-label">
                                نـوع العقــد
                                <span className="contract-required">*</span>
                            </label>
                            <div className="contract-radio-group">
                                <label className="contract-radio-label">
                                    <input
                                        type="radio"
                                        name="contractType"
                                        value="سكنـي"
                                        checked={contractType === 'سكنـي'}
                                        onChange={(e) => setContractType(e.target.value)}
                                    />
                                    <span>سكنـي</span>
                                </label>
                                <label className="contract-radio-label">
                                    <input
                                        type="radio"
                                        name="contractType"
                                        value="تجاري"
                                        checked={contractType === 'تجاري'}
                                        onChange={(e) => setContractType(e.target.value)}
                                    />
                                    <span>تجاري</span>
                                </label>
                            </div>
                        </div>

                        {/* Contract Classification */}
                        <div className="contract-form-group">
                            <label className="contract-label">
                                تصنيف العقــد
                                <span className="contract-required">*</span>
                            </label>
                            <div className="contract-checkbox-group">
                                {['بدون', 'يشتقيض من البنك او غيره', 'وقف', 'صك ورقي', 'صك ورقة'].map((option) => (
                                    <label key={option} className="contract-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={contractClassification.includes(option)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setContractClassification([...contractClassification, option]);
                                                } else {
                                                    setContractClassification(contractClassification.filter(item => item !== option));
                                                }
                                            }}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Contract Documented */}
                        <div className="contract-form-group">
                            <label className="contract-label">
                                هل تم تـوثيـق العقد
                                <span className="contract-required">*</span>
                            </label>
                            <div className="contract-radio-group">
                                <label className="contract-radio-label">
                                    <input
                                        type="radio"
                                        name="contractDocumented"
                                        value="نعم"
                                        checked={contractDocumented === 'نعم'}
                                        onChange={(e) => setContractDocumented(e.target.value)}
                                    />
                                    <span>نعم</span>
                                </label>
                                <label className="contract-radio-label">
                                    <input
                                        type="radio"
                                        name="contractDocumented"
                                        value="لا"
                                        checked={contractDocumented === 'لا'}
                                        onChange={(e) => setContractDocumented(e.target.value)}
                                    />
                                    <span>لا</span>
                                </label>
                            </div>
                        </div>

                        {/* Three Inputs Row */}
                        <div className="contract-form-row three-cols">
                            <div className="contract-form-group">
                                <label className="contract-label">
                                    مدة العقــد
                                    <span className="contract-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="contract-input"
                                    placeholder="أدخل مدة العقــد هنـا ..."
                                    value={contractDuration}
                                    onChange={(e) => setContractDuration(e.target.value)}
                                />
                            </div>
                            <div className="contract-form-group">
                                <label className="contract-label">
                                    المبلغ المدفوع من العميل
                                    <span className="contract-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="contract-input"
                                    placeholder="أدخل المبلغ هنـا ..."
                                    value={contractAmount}
                                    onChange={(e) => setContractAmount(e.target.value)}
                                />
                            </div>
                            <div className="contract-form-group">
                                <label className="contract-label">
                                    رسوم ايجار
                                    <span className="contract-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="contract-input"
                                    placeholder="أدخل الرسوم هنـا ..."
                                    value={contractRentalFees}
                                    onChange={(e) => setContractRentalFees(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="contract-form-group">
                            <label className="contract-label">هل ترغب بذكـر ملاحظة!</label>
                            <textarea
                                className="contract-textarea"
                                placeholder="أكتب هنـا ..."
                                value={contractNotes}
                                onChange={(e) => setContractNotes(e.target.value)}
                                rows={4}
                            />
                        </div>

                        <button
                            className="contract-submit-btn"
                            onClick={() => {
                                // Validation
                                if (!contractPhone || !contractType || contractClassification.length === 0 ||
                                    !contractDocumented || !contractDuration || !contractAmount || !contractRentalFees) {
                                    toast.error('يرجى ملء جميع الحقول المطلوبة');
                                    return;
                                }
                                setContractModalStep(2);
                            }}
                        >
                            إضافة
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Add Contract Modal Step 2: Success */}
            <Dialog open={contractModalStep === 2} onOpenChange={(open) => {
                if (!open) {
                    // Reset all fields
                    setContractModalStep(0);
                    setContractPhone('');
                    setContractDate('');
                    setContractType('');
                    setContractClassification([]);
                    setContractDocumented('');
                    setContractDuration('');
                    setContractAmount('');
                    setContractRentalFees('');
                    setContractNotes('');
                }
            }}>
                <DialogContent className="contract-success-modal">
                    <div className="contract-success-body">
                        <div className="contract-success-icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h2 className="contract-success-title">
                            تم إضـافة عقد وانتســاب مكتمل
                        </h2>
                        <p className="contract-success-message">بنجاح!</p>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Incomplete Contract Modal Step 1: Form */}
            <Dialog open={incompleteModalStep === 1} onOpenChange={(open) => !open && setIncompleteModalStep(0)}>
                <DialogContent className="incomplete-modal-content">
                    <button className="modal-close-btn" onClick={() => setIncompleteModalStep(0)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <DialogHeader>
                        <DialogTitle className="incomplete-modal-title">إضـافة عقـد والتسـاب غير مكتمل</DialogTitle>
                    </DialogHeader>
                    <div className="incomplete-modal-body">
                        {/* Phone Number */}
                        <div className="incomplete-form-group">
                            <label className="incomplete-label">
                                رقم الجـوال
                                <span className="incomplete-required">*</span>
                            </label>
                            <input
                                type="text"
                                className="incomplete-input"
                                placeholder="أدخل رقم الجـوال هنـا ..."
                                value={incompletePhone}
                                onChange={(e) => setIncompletePhone(e.target.value)}
                            />
                        </div>

                        {/* Notes */}
                        <div className="incomplete-form-group">
                            <label className="incomplete-label">هل ترغب بذكـر ملاحظة!</label>
                            <textarea
                                className="incomplete-textarea"
                                placeholder="أكتب هنـا ..."
                                value={incompleteNotes}
                                onChange={(e) => setIncompleteNotes(e.target.value)}
                                rows={5}
                            />
                        </div>

                        {/* Date and Time Row */}
                        <div className="incomplete-form-row">
                            <div className="incomplete-form-group">
                                <label className="incomplete-label">الساعة</label>
                                <input
                                    type="text"
                                    className="incomplete-input"
                                    value="12:00 صباحا"
                                    readOnly
                                />
                            </div>
                            <div className="incomplete-form-group">
                                <label className="incomplete-label">التـاريخ</label>
                                <input
                                    type="text"
                                    className="incomplete-input"
                                    value="12 - 01 - 2025"
                                    readOnly
                                />
                            </div>
                        </div>

                        <button
                            className="incomplete-submit-btn"
                            onClick={() => {
                                if (!incompletePhone) {
                                    toast.error('يرجى إدخال رقم الجوال');
                                    return;
                                }
                                setIncompleteModalStep(2);
                            }}
                        >
                            إضافة
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Incomplete Contract Modal Step 2: Submitted */}
            <Dialog open={incompleteModalStep === 2} onOpenChange={(open) => !open && setIncompleteModalStep(0)}>
                <DialogContent className="incomplete-submitted-modal">
                    <div className="incomplete-submitted-body">
                        <div className="incomplete-submitted-icon">
                            <div className="incomplete-circle-icon">
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <h2 className="incomplete-submitted-title">تم إضـافة عقـد والتسـاب غير مكتمل</h2>
                        <p className="incomplete-submitted-message">بنجاح!</p>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Incomplete Contract Modal Step 3: Processing Status */}
            <Dialog open={incompleteModalStep === 3} onOpenChange={(open) => {
                if (!open) {
                    setIncompleteModalStep(0);
                    setIncompletePhone('');
                    setIncompleteNotes('');
                    setIncompleteDate('');
                    setIncompleteTime('');
                }
            }}>
                <DialogContent className="incomplete-final-modal">
                    <div className="incomplete-final-body">
                        <div className="incomplete-final-icon">
                            <i className="fa-solid fa-circle-notch fa-spin"></i>
                        </div>
                        <h2 className="incomplete-final-title">تم إستلام الطلب بنجاح !!</h2>
                        <p className="incomplete-final-subtitle">تم تصنيف الطلب قيد المعالجة...</p>
                        <button
                            className="incomplete-final-btn"
                            onClick={() => {
                                setIncompleteModalStep(0);
                                setIncompletePhone('');
                                setIncompleteNotes('');
                                setIncompleteDate('');
                                setIncompleteTime('');
                                toast.success('تم إضافة طلب غير مكتمل بنجاح');
                            }}
                        >
                            تم
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}