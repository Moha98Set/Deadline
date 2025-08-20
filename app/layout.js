import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "ویرامپ",
  description: "سامانه مدیریت هوشمند پایش سوخت ماشین های کشاورزی",
}

export default function RootLayout({ children }) {
  return (    
    <html dir='rtl'>
      <body className="font-face-vz">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
