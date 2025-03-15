import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <nav className="max-w-6xl flex items-center justify-between bg-slate-100 rounded-md px-8 py-3 mx-auto">
                <Link href='/' className="p-2">ویرامپ</Link>
                <Link href='/insertData' className="p-2">ثبت جدید</Link>
                <Link href='/viewData' className="p-2">لیست</Link>
                <Link href='/viewMap' className="p-2">نقشه</Link>                
                <Link href='/searchData' className="p-2">جستجو</Link>
                <Link href='/viewMap' className="p-2 bg-blue-500 text-white rounded-lg">حساب کاربری</Link>
                <h1>Sign in</h1>
            </nav>
            <br />
        </>
    )
}