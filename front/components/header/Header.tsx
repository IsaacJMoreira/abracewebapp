"use client"
import Logo from "@components/logo/Logo"
import NextImage from "next/image";
import { FC, ReactNode } from "react";
import WhoArU from 'public/assets/icons/5332437 2.png'


const Header = () => {
  return (
    <div className="Header_div flex justify-between items-center">
       <Logo 
       logoName={"AB"}
       logoAlt = {"AB"}
       logoURL={"https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"}/>
       <Logo 
       logoName={"ab"}
       logoAlt={"ab"}
       logoURL={"../../public/assets/icons/5332437 2.png"}/>
    </div>
  )
}

export default Header