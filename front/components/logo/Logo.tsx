import * as Avatar from "@radix-ui/react-avatar";
import { FC, ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
  logoName?: string;
  logoURL?:  string | undefined;
  logoAlt?: string;
}

const Logo: FC<MyProps> = (props) => {
  return (
    <div>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image src={props.logoURL} alt={props.logoAlt} />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          {props.logoName}
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default Logo;
