"use client";
import { Card, Flex, Avatar, Text, Theme } from "@radix-ui/themes";
import STDButton from "@components/stdButton/STDButton";
import WhoArU from "../../public/assets/icons/53324372.png";
import Hi from "../../public/assets/icons/74dec39f3bdda7417bb318f5b98afe3e 1.png";
import { useState } from "react";

//this component should fetch the app logo
//it also should display a different simbol of greating

const userName = "Fulano";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="sticky bg-[#ffffffaa] top-0 block h-fit w-screen p-4 z-50 backdrop-blur ">
      <Theme radius="full" accentColor="amber">
        <Flex align="center" justify="between">
          <Flex align="center" justify="between" gap="5">
            <Avatar
              size="5"
              radius="full"
              fallback="AB"
              src={
                loggedIn
                  ? "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  : ""
              }
              alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
            />
            <Text as="div" size="6" weight="bold" align="center">
              ABRACE
            </Text>
          </Flex>

          {!loggedIn ? (
            <STDButton
              variant="solid"
              iconAlt="who are you? Login here"
              iconNI={WhoArU}
              text="faça seu Login"
              callBack={() => setLoggedIn(!loggedIn)}
            />
          ) : (
            <STDButton
              variant="surface"
              iconAlt="Hi!!!"
              iconNI={Hi}
              text={`olá, ${userName}`}
              callBack={() => setLoggedIn(!loggedIn)}
            />
          )}
        </Flex>
      </Theme>
    </div>
  );
};

export default Header;
