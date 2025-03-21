import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata = {
  title: "Viramap",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className="max-w mx-auto p-4 font-diruz">
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
