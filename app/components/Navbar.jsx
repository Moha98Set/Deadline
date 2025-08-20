'use client'

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{maxWidth: 1880}} className="bg-indigo-900 rounded-md px-8 py-3 absolute top-5 z-20 right-5 left-5 flex items-center">
      {/* لوگو و نام */}
      <div className="flex items-center">
        <img src='https://tr.viramap.ir/images/mars_logo_xs.png' width={43} height={35} alt='Logo' />
        <Link href='/' className="text-white text-xl mr-2">ویرامپ</Link>
      </div>

      {/* آیکن همبرگر فقط در موبایل */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />} 
        </button>
      </div>

      {/* منو در دسکتاپ */}
      <div className="hidden md:flex space-x-6 text-white items-center pr-5">
        <div>
        <Link href='/insertData'>ثبت جدید</Link>
        </div>
        <div className="pr-4">
        <Link href='/viewData'>لیست</Link>
        </div>
        <div>
        <Link href='/searchData'>جستجو</Link>
        </div>
        <div>
        <Link href='/viewGolKhune'>گلخانه</Link>
        </div>
        <div>
        <Link href='/Login' className="">حساب کاربری</Link>
        </div>
      </div>

      {/* منو در موبایل */}
      {menuOpen && (
        <div className="absolute top-20 right-5 bg-indigo-900 rounded-md flex flex-col w-10/12 p-4 space-y-4 md:hidden">
          <Link href='/insertData' className="text-white" onClick={() => setMenuOpen(false)}>ثبت جدید</Link>
          <Link href='/viewData' className="text-white" onClick={() => setMenuOpen(false)}>لیست</Link>
          <Link href='/searchData' className="text-white" onClick={() => setMenuOpen(false)}>جستجو</Link>
          <Link href='/viewGolKhune' className="text-white" onClick={() => setMenuOpen(false)}>گلخانه</Link>
          <Link href='/Login' className="text-white" onClick={() => setMenuOpen(false)}>حساب کاربری</Link>
        </div>
      )}
    </nav>
  );
}
