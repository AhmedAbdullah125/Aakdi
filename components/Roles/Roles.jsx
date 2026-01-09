'use client'
import React, { useState } from 'react'
import Header from '@/components/home/Header'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from 'next/link'

export default function OrdersSorting() {
    const [roles, setRoles] = useState([
        {
            id: 1,
            title: 'المسؤول',
            titleColor: '#000000',
            name: 'ريـان',
            permissions: 410,
            permissionColor: '#E5E5E5',
            permissionTextColor: '#000000',
            lastUpdate: 'أخر تعديل: 15 سبتمبر 2025'
        },
        {
            id: 2,
            title: 'موظفة خدمة العملـاء',
            titleColor: '#E91E8C',
            name: 'نهـال',
            permissions: 12,
            permissionColor: '#FFE5F3',
            permissionTextColor: '#E91E8C',
            lastUpdate: 'أخر تعديل: 15 سبتمبر 2025'
        },
        {
            id: 3,
            title: 'موظف',
            titleColor: '#10B981',
            name: 'مصعب',
            permissions: 4,
            permissionColor: '#D1FAE5',
            permissionTextColor: '#10B981',
            lastUpdate: 'أخر تعديل: 15 سبتمبر 2025'
        }
    ]);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);


    const handleDelete = (id) => {
        const role = roles.find(r => r.id === id);
        setCategoryToDelete(role);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (categoryToDelete) {
            setRoles(prev => prev.filter(r => r.id !== categoryToDelete.id));
            toast.error('تم حذف الدور');
            setIsDeleteModalOpen(false);
            setCategoryToDelete(null);
        }
    };


    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={"الادوار"}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second="الادوار"
                secondURL="/home/roles"
            />

            <div className="financial-table-cont">
                <div className="flex items-center gap-3">

                    <Link href="/home/roles/add" className="btn btn-primary mb-5">+ إضافة دور </Link>
                </div>
                <table className="financial-table" dir="rtl">
                    <thead>
                        <tr>
                            <th>اللقــب</th>
                            <th>الإسم</th>
                            <th>الصلاحيات</th>
                            <th>تاريخ التحديث</th>
                            <th>الاجـــراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id}>
                                <td>
                                    <div className="flex">
                                        <span
                                            className="px-4 py-2 rounded-full text-white font-bold text-sm"
                                            style={{ backgroundColor: role.titleColor }}
                                        >
                                            {role.title}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex  gap-2 ">
                                        <span className="text-base">{role.name}</span>
                                        <i className="fa-solid fa-user-tie text-gray-600"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex ">
                                        <span
                                            className="px-8 py-3 rounded-full font-bold text-xl min-w-[100px] text-center"
                                            style={{
                                                backgroundColor: role.permissionColor,
                                                color: role.permissionTextColor
                                            }}
                                        >
                                            {role.permissions}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-sm">{role.lastUpdate}</span>
                                </td>
                                <td>
                                    <div className="flex items-center  gap-3">
                                        <Link href={"/home/roles/edit"}
                                            className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center hover:bg-green-200 transition-colors"
                                        >
                                            <i className="fa-solid fa-pen-to-square text-green-600"></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(role.id)}
                                            className="w-12 h-12 rounded-full bg-red-100 flex justify-center items-center hover:bg-red-200 transition-colors"
                                        >
                                            <i className="fa-solid fa-trash text-red-500"></i>
                                        </button>
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

            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                           <DialogContent className="sm:max-w-[600px] rounded-3xl" dir="rtl">
                               <DialogHeader>
                                   <DialogTitle className="text-2xl font-bold text-right">حذف حالة التصنيف</DialogTitle>
                               </DialogHeader>
           
                               {categoryToDelete && (
                                   <div className="py-8 text-center space-y-6">
                                       {/* Trash Icon */}
                                       <div className="flex justify-center">
                                           <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center">
                                               <i className="fa-solid fa-trash text-white text-4xl"></i>
                                           </div>
                                       </div>
           
                                       {/* Confirmation Text */}
                                       <div className="space-y-2">
                                           <h3 className="text-2xl font-bold text-gray-800">
                                               هل أنت متأكد من حذف
                                           </h3>
                                           <p className="text-2xl font-bold text-red-600">
                                               حالة {categoryToDelete.name} !
                                           </p>
                                       </div>
           
                                       {/* Warning Text */}
                                       <p className="text-gray-600 text-base">
                                           هذا الإجراء لا يمكن التراجع عنه بعد الحذف !
                                       </p>
           
                                       {/* Confirm Delete Button */}
                                       <div className="flex justify-center pt-4">
                                           <button
                                               onClick={confirmDelete}
                                               className="px-20 py-4 bg-red-600 text-white rounded-full font-bold text-xl hover:bg-red-700 transition-colors"
                                           >
                                               تأكيـد الحـذف
                                           </button>
                                       </div>
                                   </div>
                               )}
                           </DialogContent>
                       </Dialog>
        </div>
    )
}