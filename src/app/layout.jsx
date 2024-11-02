"use client"
import Categories from "./components/Categories";
import Goup from "./components/Goup";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Categories className="hidden lg:block"/>
        {children}
       
      </body>
    </html>
  );
}
