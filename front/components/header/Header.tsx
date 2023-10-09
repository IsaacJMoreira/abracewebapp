"use client";
import NextImage from "next/image";
import { Card, Flex, Avatar, Box } from "@radix-ui/themes";
import STDButton from "@components/stdButton/STDButton";
import GARD1 from "../../public/assets/images/gard1.png";
import { FC, ReactNode } from "react";
import WhoArU from "../../public/assets/icons/53324372.png";
import Hi from "../../public/assets/icons/74dec39f3bdda7417bb318f5b98afe3e 1.png";
import ABRACE from "../../public/assets/images/ABRACE.png";

//this component should fetch the app logo
//it also should display a different simbol of greating

const isLoggedIn = true;
const userName = "Fulano";

const Header = () => {
  return (
    <Card variant='ghost' size="1">
      <Flex gap="1" align="center" direction="row" justify='between' >
        
          <Avatar
            size="5"
            radius="full"
            fallback="AB"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
          />
          {!isLoggedIn ? (
            <STDButton
              variant="solid"
              iconAlt="who are you? Login here"
              iconNI={WhoArU}
              text="faça seu Login"
            />
          ) : (
            <STDButton 
              variant="soft"
              iconAlt="Hi!!!" 
              iconNI={Hi} 
              text={`olá, ${userName}`} 
            />
          )}
        
      </Flex>
    </Card>
  );
};

export default Header;
