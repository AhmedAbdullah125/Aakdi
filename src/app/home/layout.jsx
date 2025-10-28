import SideData from '@/components/home/SideData';
import React from 'react'

export default function Profile({ children }) {

    return (
            <div className="home-wrapper">
                <SideData />
                <div className="home-content" id='home-content'>
                    {children}
                </div>
            </div>
    )
}
