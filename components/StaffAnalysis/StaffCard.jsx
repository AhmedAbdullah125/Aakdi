import React from 'react'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import defaultUser from '@/public/images/defaultUser.jpg'


export default function StaffCard({ staff }) {

    return (
        <div className="staff-card">
            <div className="staff-card-header">
                <div className="ranking-badge">
                    <span className="rank-number">#{staff?.rank || 1}</span>
                    <div className="rank-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="logo-container">
                    <Image src={logo} alt="Logo" width={20} height={20} />
                </div>
            </div>

            <div className="staff-card-body">
                <div className="user-image">
                    <Image
                        src={staff?.image || defaultUser}
                        alt={staff?.name || "Staff"}
                        width={112}
                        height={112}
                    />
                </div>

                <h3 className="user-name">{staff?.name || "ريـــان التركي"}</h3>
                <p className="user-role">{staff?.role || "admin"}</p>

                <div className="stats-container">
                    <h2 className="stats-number">{staff?.count || "410"}</h2>
                    <p className="stats-label">{staff?.label || "عدد العقود المكتسبة"}</p>
                </div>
            </div>
        </div>
    )
}