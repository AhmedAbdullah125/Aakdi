'use client'
import React, { useState } from 'react'
import Header from '@/components/home/Header'
import { toast } from 'sonner'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

export default function AddRole() {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        titleColor: '#0000FF'
    });

    const [selectAll, setSelectAll] = useState(false);

    const [permissions, setPermissions] = useState({
        analytics: { show: false, add: false, edit: false, retrieve: false, delete: false },
        allOrders: { show: false, add: false, edit: false, retrieve: false, delete: false },
        completedOrder: { show: false, add: false, edit: false, retrieve: false, delete: false },
        incompleteWhatsappOrder: { show: false, add: false, edit: false, retrieve: false, delete: false },
        completedOrderWhatsapp: { show: false, add: false, edit: false, retrieve: false, delete: false }
    });

    const handleSelectAll = (checked) => {
        setSelectAll(checked);
        const allPermissions = {};
        Object.keys(permissions).forEach(key => {
            allPermissions[key] = {
                show: checked,
                add: checked,
                edit: checked,
                retrieve: checked,
                delete: checked
            };
        });
        setPermissions(allPermissions);
    };

    const handlePermissionChange = (category, permission) => {
        setPermissions(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [permission]: !prev[category][permission]
            }
        }));
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.name) {
            toast.error('يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        toast.success('تم تعديل الدور بنجاح');
    };

    const PermissionCheckboxes = ({ category, label }) => (
        <div className="permission-box">
            <h3 className="permission-title">{label}</h3>
            <div className="permission-checkboxes">
                <label className="permission-checkbox-label">
                    <span>حذف</span>
                    <input
                        type="checkbox"
                        checked={permissions[category].delete}
                        onChange={() => handlePermissionChange(category, 'delete')}
                        className="custom-checkbox"
                    />
                </label>
                <label className="permission-checkbox-label">
                    <span>استرجاع</span>
                    <input
                        type="checkbox"
                        checked={permissions[category].retrieve}
                        onChange={() => handlePermissionChange(category, 'retrieve')}
                        className="custom-checkbox"
                    />
                </label>
                <label className="permission-checkbox-label">
                    <span>تعديل</span>
                    <input
                        type="checkbox"
                        checked={permissions[category].edit}
                        onChange={() => handlePermissionChange(category, 'edit')}
                        className="custom-checkbox"
                    />
                </label>
                <label className="permission-checkbox-label">
                    <span>تعديل</span>
                    <input
                        type="checkbox"
                        checked={permissions[category].add}
                        onChange={() => handlePermissionChange(category, 'add')}
                        className="custom-checkbox"
                    />
                </label>
                <label className="permission-checkbox-label">
                    <span>عرض القسم</span>
                    <input
                        type="checkbox"
                        checked={permissions[category].show}
                        onChange={() => handlePermissionChange(category, 'show')}
                        className="custom-checkbox"
                    />
                </label>
            </div>
        </div>
    );

    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={"تعديل دور"}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second="الادوار"
                secondURL="/home/roles"
                third="تعديل دور"
                thirdURL="/home/roles/add"
            />

            <div className="financial-table-cont" dir="rtl">
                {/* Employee Data Section */}
                <div className="role-form-section">
                    <div className="role-form-header">
                        <h2 className="role-section-title">بيـــانات الموظف:</h2>
                        <div className="role-actions">
                            <div className="role-info-text">
                                <span>تفعيل كافة الصلاحيات لهذا الدور</span>
                            </div>
                            <div className="role-toggle-group">
                                <Switch
                                    checked={selectAll}
                                    onCheckedChange={handleSelectAll}
                                    dir="ltr"
                                />
                                <span className="toggle-label">تحديد الكل</span>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="role-save-btn"
                            >
                                حفظ
                            </button>
                        </div>
                    </div>

                    <div className="role-inputs-grid">
                        {/* Title Input */}
                        <div className="role-input-group">
                            <label className="role-label">
                                اللقب <span className="required-star">*</span>
                            </label>
                            <div className="role-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="مشـرف العقــود"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className="role-input"
                                />
                                
                            </div>
                        </div>

                        {/* Name Input */}
                        <div className="role-input-group">
                            <label className="role-label">
                                الاسم <span className="required-star">*</span>
                            </label>
                            <div className="role-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="ريان"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="role-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Permissions Grid */}
                <div className="permissions-grid">
                    <PermissionCheckboxes category="analytics" label="التحليــلات" />
                    <PermissionCheckboxes category="completedOrderWhatsapp" label="طلب واتســـاب مكتمـــل" />
                    <PermissionCheckboxes category="incompleteWhatsappOrder" label="طلب غيـر مكتمـــل" />
                    <PermissionCheckboxes category="allOrders" label="جميع الطلبات" />
                    <PermissionCheckboxes category="completedOrder" label="طلب مكتمـــل" />
                </div>
            </div>
        </div>
    )
}