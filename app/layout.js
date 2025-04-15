import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "ویرامپ",
  description: "سامانه مدیریت هوشمند پایش سوخت ماشین های کشاورزی",
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className="max-w mx-auto p-4 font-diruz">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
