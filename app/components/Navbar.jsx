import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="max-w-2xl flex items-center justify-between bg-slate-100 rounded-md px-8 py-3 mx-auto">
            <Link href='/' className="p-2">ویرامپ</Link>
            <Link href='/Insert' className="p-2">ثبت جدید</Link>
            <Link href='View' className="p-2">لیست</Link>
        </nav>
    )
}