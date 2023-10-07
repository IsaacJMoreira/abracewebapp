"use client";
import Logo from "@components/logo/Logo";
import NextImage from "next/image";
import GARD1 from "../../public/assets/images/gard1.png";
import { FC, ReactNode } from "react";
import WhoArU from "../../public/assets/icons/53324372.png";
import ABRACE from "../../public/assets/images/ABRACE.png";

//this component should fetch the app logo
//it also should display a different simbol of greating
const name = "Fulano";
const isLoggedIn = false;

const Header = () => {
  return (
    <div className="relative">
      <div className="Header_div flex justify-between items-center absolute z-10 ">
        <Logo logoAlt={"A"} logoNI={ABRACE} />
        <Logo logoAlt={"b"} logoNI={WhoArU} />

        <div>{isLoggedIn ? `olá, ${name}` : "Faça seu LOGIN"}</div>
      </div>
    </div>
  );
};

export default Header;
