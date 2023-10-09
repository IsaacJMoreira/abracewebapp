import { Button } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";

interface MyProps {
    children?: ReactNode;
    iconNI: StaticImport;
    iconAlt: string;
    text?: string;
    variant?: "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
  }

const STDButton: FC<MyProps> = (props) => {
  return (
    <Button size='3' variant = {props.variant}>
     <NextImage
      className="img_36px"
      src={props.iconNI}
      alt={props.iconAlt}
      />
      {props.text}
    </Button>
  )
}

export default STDButton