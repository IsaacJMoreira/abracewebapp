import * as Avatar from "@radix-ui/react-avatar";
import { FC, ReactNode } from "react";
import NextImage from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface MyProps {
  children?: ReactNode;
  logoName?: string;
  logoNI: StaticImport;
  logoAlt: string;
}

const Logo: FC<MyProps> = (props) => {
  return (
    <div>             
          <NextImage className="AvatarImage img_36px"
            src={props.logoNI}
            alt={props.logoAlt}
            priority
          />     
    </div>
  );
};

export default Logo;
