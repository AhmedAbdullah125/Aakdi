'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import defaultUser from '@/public/images/defaultUser.jpg'
import logo from '@/public/images/logo.svg'
import waving from '@/public/images/waving.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomeWelcomeWrapper() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const router = useRouter();
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Time format: 10:48 صبـاحا
            const formattedTime = new Intl.DateTimeFormat('ar-EG', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }).format(now);

            // Date format: 11 / 10 / 2025
            const formattedDate = new Intl.DateTimeFormat('ar-EG', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
                .format(now)
                .replace(/\//g, ' / '); // Add spaces around slashes for your style

            setTime(formattedTime);
            setDate(formattedDate);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header page='welcome' title={null} isMain={true}
            // first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis"
            />
            <div className="home-cont">
                <h1>الإتقــان طريــق الخلــود في الأثــر ...</h1>
                <p>الإتقان ليس في كثرة العمل، بل في صدق النية وجودة الأداء. من يعمل بضمير يترك أثراً لا يُمحى، قال تعالى: ﴿لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا﴾ ‏. ‏العبرة، بمعيار الجودة ‏والإحسان، ﻻبالكثرة والقلة !</p>
                <div className="home-user-card">
                    <Image src={logo} alt="Aakdi" className='logo-img-abs' />
                    <Image src={defaultUser} alt="Aakdi" className='user-img' />
                    <h3>أحمد عيد الله</h3>
                    <h4>مدير</h4>
                    <div className="date-time">
                        <h2>{time}</h2>
                        <h5>{date}</h5>
                    </div>
                    <div className="wav-nm">
                        <Image src={waving} alt="Aakdi" className='waving' />
                        <h6>مرحبـــــاً بعودتـــك, ريــان !.</h6>
                        <span>مديــر</span>
                    </div>
                    <button className="start-btn" onClick={() => { router.push('/home/analysis') }}>
                        <i className='fa-solid fa-arrow-left'></i>
                        <span>يلا بســم الله</span>
                    </button>
                </div>
            </div>
        </>
    )
}
