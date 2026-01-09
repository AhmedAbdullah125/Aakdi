'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import analysis from "@/public/images/analysis.svg";
import orders from "@/public/images/orders.svg";
import completedOrders from "@/public/images/completedOrders.svg";
import incompletedOrders from "@/public/images/incompletedOrders.svg";
import completedWaOrder from "@/public/images/completedWaOrder.svg";
import incompletedWaOrder from "@/public/images/incompletedWaOrder.svg";
import returnedOrder from "@/public/images/returnedOrder.svg";
import sortingOrders from "@/public/images/sortingOrders.svg";
import employees from "@/public/images/employees.svg";
import salaries from "@/public/images/salaries.svg";
import roles from "@/public/images/roles.svg";
import settings from "@/public/images/settings.svg";
import logout from "@/public/images/logout.svg";
import Link from "next/link";
export default function SideData() {
  const [active, setActive] = useState(false);
  return (
    <div className={`side-bar ${active ? 'active' : ''}`} id="side-data">
      <div className={`cheveron-trigger `} onClick={() => { setActive(!active) }}>
        <i className={`fa-solid ${active ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
      </div>
      <div className="side-heading">
        <Link href="/"><Image src={logo} alt="Aakdi" className="logo-img " /></Link>
        <div className="h-title">
          <h2>عقــدي لتقنيـــات العقــاريـة</h2>
          <h5>داشبـــورد</h5>
        </div>
      </div>
      <div className="side-group">
        <h3 className="group-title">الرئيســية </h3>
        <div className="group-menus">
          <Link href="/home/analysis"><span>التحليــلات</span><Image src={analysis} alt="Aakdi" /></Link>
        </div>
      </div>
      <div className="side-group">
        <h3 className="group-title">العقــود </h3>
        <div className="group-menus">
          <Link href="/home/orders"><span>جميع الطلبات</span><Image src={orders} alt="Aakdi" /></Link>
          <Link href="/home/completed-orders"><span>طلـب مكتمـــل</span><Image src={completedOrders} alt="Aakdi" /></Link>
          <Link href="/home/incolpleted-orders-analysis/total"><span>طلـب غيــر مكتمل</span><Image src={incompletedOrders} alt="Aakdi" /></Link>
          <Link href="/home/orders-analysis/whatsapp_completed_orders"><span>طلـب واتســـاب مكتمـــل </span><Image src={completedWaOrder} alt="Aakdi" /></Link>
          <Link href="/home/orders-analysis/whatsapp_incompleted_orders"><span>طلـب واتسـاب  غير مكتمل</span><Image src={incompletedWaOrder} alt="Aakdi" /></Link>
          <Link href="/home/orders-analysis/refunded_orders"><span>طلـب مستــرجع</span><Image src={returnedOrder} alt="Aakdi" /></Link>
          <Link href="/home/sorting-orders"><span>تصنيــف الطلبـــــات</span><Image src={sortingOrders} alt="Aakdi" /></Link>
        </div>
      </div>
      <div className="side-group">
        <h3 className="group-title">الموظفيــن والأدوار </h3>
        <div className="group-menus">
          <Link href="/home/roles"><span>الأدوار</span><Image src={roles} alt="Aakdi" /></Link>
          <Link href="/home/employees"><span>الموظفيــن</span><Image src={employees} alt="Aakdi" /></Link>
          <Link href="/home/salaries"><span>رواتــب الموظفيــن</span><Image src={salaries} alt="Aakdi" /></Link>

        </div>
      </div>
      <div className="side-group">
        <h3 className="group-title">إعــدادت النظام</h3>
        <div className="group-menus">
          <Link href="/home/settings"><span>الاعــدادات</span><Image src={settings} alt="Aakdi" /></Link>
          <Link href="/home/logout"><span>تسجيل الخـــروج</span><Image src={logout} alt="Aakdi" /></Link>
        </div>
      </div>
    </div>
  );
}