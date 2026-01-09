'use client'
import React, { useState } from 'react'
import Header from '@/components/home/Header'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function OrdersSorting() {
    const [categories, setCategories] = useState([
        { id: 1, name: 'قيد المعالجة', emoji: '🧐', color: '#8F8F8F' },
        { id: 2, name: 'بينتظار تـأكيد بيانات العقـار', emoji: '⏳', color: '#BF00C9' },
        { id: 3, name: 'مطلوب اجراء من العميل', emoji: '💬', color: '#2500C9' },
        { id: 4, name: 'تم تـأكيد العقـار', emoji: '🏡', color: '#00C925' },
        { id: 5, name: 'بانتظار اعتماد العقد', emoji: '😴', color: '#C94D00' },
        { id: 6, name: 'تم التوثيــق', emoji: '✅', color: '#00682B' },
        { id: 7, name: 'مسترجع', emoji: '😩', color: '#FF0004' },
        { id: 8, name: 'أخــرى', emoji: '🤔', color: '#302E30' },
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [newCategory, setNewCategory] = useState({
        name: '',
        emoji: '',
        textColor: '#000000',
        backgroundColor: '#000000'
    });
    const handleAddCategory = () => {
        if (!newCategory.name) {
            toast.error('يرجى إدخال اسم الحالة');
            return;
        }

        const newCat = {
            id: categories.length + 1,
            name: newCategory.name,
            emoji: newCategory.emoji || '📋',
            color: newCategory.backgroundColor
        };

        setCategories(prev => [...prev, newCat]);
        setIsAddModalOpen(false);
        setNewCategory({ name: '', emoji: '', textColor: '#000000', backgroundColor: '#000000' });
        toast.success('تم إضافة حالة العقد بنجاح');
    };


    const handleColorChange = (id, newColor) => {
        setCategories(prev => prev.map(cat =>
            cat.id === id ? { ...cat, color: newColor } : cat
        ));
        toast.success('تم تحديث لون التصنيف');
    };

    const handleDelete = (id) => {
        const category = categories.find(cat => cat.id === id);
        setCategoryToDelete(category);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (categoryToDelete) {
            setCategories(prev => prev.filter(cat => cat.id !== categoryToDelete.id));
            toast.error('تم حذف التصنيف');
            setIsDeleteModalOpen(false);
            setCategoryToDelete(null);
        }
    };
    const handleEdit = (id) => {
        const categoryToEdit = categories.find(cat => cat.id === id);
        if (categoryToEdit) {
            setEditingCategory({
                ...categoryToEdit,
                textColor: categoryToEdit.color,
                backgroundColor: categoryToEdit.color
            });
            setIsEditModalOpen(true);
        }
    };

    const handleSaveEdit = () => {
        if (!editingCategory.name) {
            toast.error('يرجى إدخال اسم الحالة');
            return;
        }

        setCategories(prev => prev.map(cat =>
            cat.id === editingCategory.id
                ? { ...cat, name: editingCategory.name, emoji: editingCategory.emoji, color: editingCategory.backgroundColor }
                : cat
        ));

        setIsEditModalOpen(false);
        setEditingCategory(null);
        toast.success('تم تحديث حالة العقد بنجاح');
    };
    return (
        <div className="financial-analysis-container">
            <Header
                page='welcome'
                title={"تصنيــف الطلبـــــات"}
                isMain={false}
                first="الرئيــسية"
                firstURL="/"
                second="تصنيــف الطلبـــــات"
                secondURL="/home/orders-sorting"
            />

            <div className="financial-table-cont">
                {/* add new category */}
                <div className="flex items-center gap-3">

                    <button
                        className="btn btn-primary mb-5"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        + إضافة حالة العقد
                    </button>
                </div>
                <table className="financial-table" dir="rtl">
                    <thead>
                        <tr>
                            <th>اسم التصنيــف</th>
                            <th>لون التصنيــف</th>
                            <th>الاجـــراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <span className="text-base">{category.name}</span>
                                        <span className="text-2xl">{category.emoji}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center justify-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full"
                                            style={{ backgroundColor: category.color }}
                                        ></div>
                                        <input
                                            type="color"
                                            value={category.color}
                                            onChange={(e) => handleColorChange(category.id, e.target.value)}
                                            className="opacity-0 absolute w-0 h-0"
                                            id={`color-${category.id}`}
                                        />
                                        <label
                                            htmlFor={`color-${category.id}`}
                                            className="text-sm font-semibold cursor-pointer"
                                            style={{ color: category.color }}
                                        >
                                            {category.color.toUpperCase()}
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => handleEdit(category.id)}
                                            className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                                        >
                                            <i className="fa-solid fa-pen-to-square text-green-600"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors"
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

            {/* Add Category Modal */}
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogContent className="sm:max-w-[900px] rounded-3xl" dir="rtl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-right">إضافة حالة العقد</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 py-6">
                        {/* Category Name */}
                        <div>
                            <label className="block text-right text-base font-medium mb-3">
                                اسم الحالة <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="ادخل اسم الحالة هنــا ..."
                                value={newCategory.name}
                                onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-6 py-4 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Text Color */}
                            <div>
                                <label className="block text-right text-base font-medium mb-3">
                                    لون النص <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={newCategory.textColor}
                                        onChange={(e) => setNewCategory(prev => ({ ...prev, textColor: e.target.value }))}
                                        className="w-full px-6 py-4 pr-16 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                                    />
                                    <input
                                        type="color"
                                        value={newCategory.textColor}
                                        onChange={(e) => setNewCategory(prev => ({ ...prev, textColor: e.target.value }))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Background Color */}
                            <div>
                                <label className="block text-right text-base font-medium mb-3">
                                    لون الخلفية <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={newCategory.backgroundColor}
                                        onChange={(e) => setNewCategory(prev => ({ ...prev, backgroundColor: e.target.value }))}
                                        className="w-full px-6 py-4 pr-16 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                                    />
                                    <input
                                        type="color"
                                        value={newCategory.backgroundColor}
                                        onChange={(e) => setNewCategory(prev => ({ ...prev, backgroundColor: e.target.value }))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleAddCategory}
                                className="px-16 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
                            >
                                إضـــافة
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            {/* Edit Category Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="sm:max-w-[900px] rounded-3xl" dir="rtl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-right">تعديل حالة العقد</DialogTitle>
                    </DialogHeader>

                    {editingCategory && (
                        <div className="space-y-6 py-6">
                            {/* Category Name */}
                            <div>
                                <label className="block text-right text-base font-medium mb-3">
                                    اسم الحالة <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="قيد المعالجة"
                                    value={editingCategory.name}
                                    onChange={(e) => setEditingCategory(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full px-6 py-4 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Text Color */}
                                <div>
                                    <label className="block text-right text-base font-medium mb-3">
                                        لون النص <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={editingCategory.textColor}
                                            onChange={(e) => setEditingCategory(prev => ({ ...prev, textColor: e.target.value }))}
                                            className="w-full px-6 py-4 pr-16 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="color"
                                            value={editingCategory.textColor}
                                            onChange={(e) => setEditingCategory(prev => ({ ...prev, textColor: e.target.value }))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 cursor-pointer"
                                        />
                                    </div>
                                </div>

                                {/* Background Color */}
                                <div>
                                    <label className="block text-right text-base font-medium mb-3">
                                        لون الخلفية <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={editingCategory.backgroundColor}
                                            onChange={(e) => setEditingCategory(prev => ({ ...prev, backgroundColor: e.target.value }))}
                                            className="w-full px-6 py-4 pr-16 rounded-full border border-gray-200 text-right focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="color"
                                            value={editingCategory.backgroundColor}
                                            onChange={(e) => setEditingCategory(prev => ({ ...prev, backgroundColor: e.target.value }))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={handleSaveEdit}
                                    className="px-16 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
                                >
                                    حفــظ
                                </button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
            {/* Delete Confirmation Modal */}
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