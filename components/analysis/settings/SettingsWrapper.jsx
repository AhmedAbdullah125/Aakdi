"use client"
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
import Header from "@/components/home/Header";

export default function SettingsWrapper() {
    const [websiteSettings, setWebsiteSettings] = useState({
        website: true,
        appleStore: false,
        android: true,
        websiteStatus: true,
        thankYouCard: true,
    });

    const websiteAppSettings = [
        { id: "website", label: "الموقــع", status: websiteSettings.website },
        { id: "appleStore", label: "apple store - التطبيــق", status: websiteSettings.appleStore },
        { id: "android", label: "android - التطبيــق", status: websiteSettings.android },
        { id: "websiteStatus", label: "حـالــة الموقــع", status: websiteSettings.websiteStatus },
        { id: "thankYouCard", label: "بطاقة الشكـر", status: websiteSettings.thankYouCard },
    ];

    const systemSettings = [
        { label: "السياسة الخاصة", link: "#" },
        { label: "مدة الطلب", link: "#" },
        { label: "الإشعارات", link: "#" },
        { label: "أنواع العقار", link: "#" },
        { label: "استخدام الوحدة", link: "#" },
        { label: "المدفوعات", link: "#" },
        { label: "الخصومات", link: "#" },
        { label: "حدود الطلبات أو إضافية", link: "#" },
        { label: "المدن", link: "#" },
        { label: "المناطق", link: "#" },
        { label: "رسائل توضيحية للعقار", link: "#" },
        { label: "رسائل التطبيقية للعميل", link: "#" },
        { label: "سياسة الخصوصية", link: "#" },
        { label: "طرق الدفع", link: "#" },
    ];

    const handleToggle = (id) => {
        setWebsiteSettings(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="w-full p-6" dir="rtl">
            <Header />
            {/* Website and App Settings Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">إعدادات الموقـع والتطبيـق</h2>
                    <button className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                        -
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {websiteAppSettings.map((setting) => (
                        <div 
                            key={setting.id}
                            className="bg-gray-50 rounded-lg p-4 flex flex-col items-center gap-3"
                        >
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${setting.status ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            </div>
                            <span className="text-sm text-center">{setting.label}</span>
                            <div className="flex flex-col items-center gap-1">
                                <span className={`text-sm font-semibold ${setting.status ? 'text-green-600' : 'text-red-600'}`}>
                                    {setting.status ? 'مُفعّــل' : 'مُعطل'}
                                </span>
                                <Switch 
                                dir="ltr"
                                    checked={setting.status}
                                    onCheckedChange={() => handleToggle(setting.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* System Settings Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">إعدادات النظام</h2>
                    <button className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                        -
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {systemSettings.map((setting, index) => (
                        <div 
                            key={index}
                            className="bg-gray-50 rounded-lg p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <button className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white hover:bg-gray-500 transition-colors">
                                <Info size={16} />
                            </button>
                            <span className="text-sm flex-1 text-center">{setting.label}</span>
                            <div className="w-6"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}