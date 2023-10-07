"use client";
import NextImage from "next/image";
import stdBG from "../public/assets/images/stdBG.png";

const Home = () => {
  return (
    <section className="w-full flex-center fles-col main_background_color">
      <NextImage
        className="w-screen"
        src={stdBG}
        alt="Cachorro de pelo marrom com patas brancas apoiado num background verde"
      />
      <div className="relative">
      <div className="absolute">çlskfdgçzkljdf</div>
      </div>
    </section>
  );
};

export default Home;
