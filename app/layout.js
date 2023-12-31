import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import { Footer } from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
