import React from 'react'
import Header from '../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import Link from 'next/link'
import defaultUser from '@/public/images/defaultUser.jpg'
import userIcon from '@/public/images/user.svg'

export default function TotalStaff() {

    const tableHeaders = [
        "الصورة الشخصية",
        "الاسم",
        "الراتب الأساسي",
        "رقم الهاتف",
        "البريد الإلكتروني",
        "الاجـــراءات"
    ];

    const staffData = [
        {
            id: 1,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#E91E63" // Pink
        },
        {
            id: 2,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#FFC107" // Yellow
        },
        {
            id: 3,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#FF5722" // Orange
        },
        {
            id: 4,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: null // Real photo
        },
        {
            id: 5,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#00BCD4" // Cyan
        },
        {
            id: 6,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: null // Real photo
        },
        {
            id: 7,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: null // Real photo
        },
        {
            id: 8,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#00BCD4" // Cyan
        },
        {
            id: 9,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#424242" // Dark gray
        },
        {
            id: 10,
            image: defaultUser,
            name: "المسؤول",
            salary: "9999",
            phone: "01068389295",
            email: "employee@gmail.com",
            avatarColor: "#9C27B0" // Purple
        }
    ];

    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={"عدد الموضفين"}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second='التحليــلات'
                secondURL="/home/analysis"
                third="عدد الموضفين"
                thirdURL={`/home/staff-analysis/total`}
            />
            <div className="financial-table-cont">
                <table className="financial-table staff-table">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {staffData.map((staff) => (
                            <tr key={staff.id}>
                                {/* Profile Picture */}
                                <td>
                                    <div className="staff-avatar-cell">
                                        <div
                                            className="staff-avatar"
                                            style={staff.avatarColor ? { backgroundColor: staff.avatarColor } : {}}
                                        >

                                            <Image
                                                src={staff.avatarColor ? userIcon : staff.image}
                                                alt={staff.name}
                                                width={40}
                                                height={40}
                                                className={staff.avatarColor ? "staff-avatar-img" : "user-avatar-img"}
                                            />

                                        </div>
                                    </div>
                                </td>

                                {/* Name */}
                                <td>
                                    <div className="staff-name-badge">
                                        {staff.name}
                                    </div>
                                </td>

                                {/* Salary */}
                                <td>
                                    <div className="staff-salary-cell">
                                        <span>{staff.salary}</span>
                                        <Image src={greenRial} alt="rial" width={16} height={16} />
                                    </div>
                                </td>

                                {/* Phone */}
                                <td>
                                    <span className="staff-info-text">{staff.phone}</span>
                                </td>

                                {/* Email */}
                                <td>
                                    <span className="staff-info-text">{staff.email}</span>
                                </td>

                                {/* Actions */}
                                <td>
                                    <div className="staff-actions-cell">
                                        <button className="staff-action-btn view-btn">
                                            👁️
                                        </button>
                                        <button className="staff-action-btn call-btn">
                                            <i className="fa-solid fa-ban"></i>
                                        </button>
                                        <button className="staff-action-btn whatsapp-btn">
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button className="staff-action-btn delete-btn">
                                            <i className="fa-regular fa-trash-can"></i>
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
        </div>
    )
}