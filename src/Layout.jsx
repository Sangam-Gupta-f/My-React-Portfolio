import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router";
const Layout=function Layout(){
    return <div className="min-h-screen">
     <Header/>
     <main className="flex-grow p-0 m-0 h-full bg-[#2C3E50]">
     <Outlet/>
     </main>
     <Footer/>
     </div>
}
export  {Layout};