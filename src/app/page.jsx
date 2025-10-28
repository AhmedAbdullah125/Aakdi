'use client'
import React, { useEffect } from 'react'
export default function Page() {
  const token = localStorage.getItem('token');
  useEffect(() => {
    // after 5 seconds redirect to login page
    setTimeout(() => {
      if (token) {
        window.location.href = '/home'
      }
      else {
        window.location.href = '/login'
      }

    }, 5000);
  }, [])
  return (
    <div className="home">
      <video controls={false} autoPlay={true} muted={true} loop={true} className='home-vid'>
        <source src={'/images/aakdi.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
