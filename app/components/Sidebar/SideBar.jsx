'use client';

import { Home, ShoppingBag, Calendar, User, FileText, BarChart, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white rounded-md border-r shadow-sm flex flex-col">
      <div className="p-4 text-xl font-bold">ویرامپ</div>
      <nav className="flex-1 px-4 space-y-2">
       {/*} <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <Home size={20} /> داشبورد
        </Link>
        <Link href="/ecommerce" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <ShoppingBag size={20} /> فروشگاه
        </Link>
        <Link href="/calendar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <Calendar size={20} /> تقویم
        </Link>
        <Link href="/user" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <User size={20} /> پروفایل کاربر
        </Link>
        <Link href="/forms" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <FileText size={20} /> فرم ها
        </Link>
        <Link href="/charts" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <BarChart size={20} /> جدول ها
        </Link>
        <Link href="/auth" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <Lock size={20} /> احراز هویت
        </Link>{*/}
      </nav>
    </div>
  );
}
