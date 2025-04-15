import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <nav className="w-full flex bg-indigo-900 rounded-md px-8 py-4 mx-auto">
                <div className="flex">
                    <img src='https://tr.viramap.ir/images/mars_logo_xs.png' width={43} height={35} alt='Logo' />
                    <Link href='/' className="text-white text-2xl mr-2">ویرامپ</Link>
                </div>
                <div className="w-1/12"></div>
                <div className="flex w-2/4 justify-between items-center">                    
                    <Link href='/insertData' className="text-lg text-white">ثبت جدید</Link>
                    <Link href='/viewData' className="text-lg text-white">لیست</Link>            
                    <Link href='/searchData' className="text-lg text-white">جستجو</Link>
                    <Link href='/#' className="text-lg p-1 text-white rounded-lg">حساب کاربری</Link>
                </div>
            </nav>
            <br />
        </>
    )
}