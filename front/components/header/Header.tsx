"use client";
import Logo from "@components/logo/Logo";
import NextImage from "next/image";
import { FC, ReactNode } from "react";
import WhoArU from "../../public/assets/icons/53324372.png";
import ABRACE from "../../public/assets/images/ABRACE.png";

//this component should fetch the app logo
//it also should display a different simbol of greating

const Header = () => {
  return (
    <div className="Header_div flex justify-between items-center">
      <Logo logoName={"A"} logoAlt={"A"} logoNI={ABRACE} />
      <Logo logoName={"b"} logoAlt={"b"} logoNI={WhoArU} />
      <div>faça seu LOGIN</div>
    </div>
  );
};

export default Header;
