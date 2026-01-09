'use client'
import React, { useState } from 'react'
import Header from '@/components/home/Header'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from 'next/link'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'

export default function Salaries() {
    const employees = [
        {
            id: 1,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#E91E8C', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        },
        {
            id: 2,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#EAB308', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        },
        {
            id: 3,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#F97316', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        },
        {
            id: 4,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#10B981', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        },
        {
            id: 5,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#06B6D4', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        },
        {
            id: 6,
            name: 'الموظف',
            salary: '99,99',
            phone: '010483892195',
            email: 'employee@gmail.com',
            avatar: { color: '#06B6D4', icon: 'fa-user' },
            permissions: [
                { icon: 'fa-trash', color: '#FEE2E2', iconColor: '#EF4444' },
                { icon: 'fa-whatsapp', color: '#D1FAE5', iconColor: '#10B981' },
                { icon: 'fa-phone', color: '#F3F4F6', iconColor: '#6B7280' },
                { icon: 'fa-eye', color: '#E0E7FF', iconColor: '#6366F1' }
            ]
        }
    ];

    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={"رواتـــب الموظفيــــن"}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second="الموظف والأدوار"
                secondURL="/home/employees"
                third="رواتـــب الموظفيــــن"
                thirdURL="/home/salaries"
            />

            <div className="financial-table-cont">
                <div className="flex items-center justify-between mb-5">
                    <Link href="/home/salaries/add" className="btn btn-primary">
                        + إضافة موظف
                    </Link>
                </div>

                <table className="financial-table" dir="rtl">
                    <thead>
                        <tr>
                            <th>الموظفة الشخصية</th>
                            <th>الإسم</th>
                            <th>الراتب الرئيسي</th>
                            <th>رقم الجوال</th>
                            <th>البريد الإلكتروني</th>
                            <th>الصـــلاحيات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <div className="flex justify-center">
                                        <div 
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: employee.avatar.color }}
                                        >
                                            <i className={`fa-solid ${employee.avatar.icon} text-white text-lg`}></i>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="px-6 py-2 bg-black text-white rounded-full font-medium inline-block">
                                        {employee.name}
                                    </span>
                                </td>
                                <td>
                                    <div className="amount-cell">
                                        <span>{employee.salary}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                    </div>
                                </td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <div className="flex items-center justify-center gap-2">
                                        {employee.permissions.map((perm, index) => (
                                            <div
                                                key={index}
                                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: perm.color }}
                                            >
                                                <i 
                                                    className={`fa-solid ${perm.icon}`}
                                                    style={{ color: perm.iconColor, fontSize: '14px' }}
                                                ></i>
                                            </div>
                                        ))}
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