"use client";
import {
  Dialog,
  Button,
  Flex,
  Avatar,
  Text,
  Theme,
  Box,
  Separator,
  TextField,
} from "@radix-ui/themes";

import {
  Cross1Icon,
  CheckIcon,
  ChevronDownIcon,
  ExitIcon,
  PersonIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import NextImage from "next/image";
import STDButton from "@components/stdButton/STDButton";
import WhoArU from "../../public/assets/icons/53324372.png";
import Hi from "../../public/assets/icons/74dec39f3bdda7417bb318f5b98afe3e 1.png";
import { useState, useEffect, ReactNode, FC } from "react";
import { prototype } from "events";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

//this component should fetch the app logo
//it also should display a different simbol of greating

interface MyProps {
  children?: ReactNode;
  iconNI: StaticImport;
  iconAlt: string;
  userName?: string;
  changeName?: any;
  changeLogin?: any;
}

const LoggedInModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" size="2">
          <NextImage className="w-5" src={props.iconNI} alt={props.iconAlt} />
          {`olá, ${props.userName}`}
          <Separator orientation="vertical" size="1"></Separator>
          <ChevronDownIcon height="18" width="18" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Titulo</Dialog.Title>
        <Dialog.Description>Sou uma descrição</Dialog.Description>
        <Flex direction="row" justify="between" gap="3">
          <Dialog.Close>
            <Button variant="surface" size="3" onClick={props.changeLogin}>
              <ExitIcon width="18" height="18"/>
              Logout
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button size="3">
              <Cross1Icon width="18" height="18" />
              Fechar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
});

const LoggedOutModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid" size="1">
          <NextImage className="w-8" src={WhoArU} alt="Quem é você? LOGIN" />
          quem é você? <Separator orientation="vertical" size="1" /> LOGIN
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Quem é você?</Dialog.Title>

        <Dialog.Description>
          Faça seu Login no app <strong>ABRACE</strong>
        </Dialog.Description>

        <Flex direction='column' justify='between' gap='3'>

          <TextField.Root>
            <TextField.Slot>
              <PersonIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input placeholder="nome" value={props.userName} onChange={props.changeName} />
          </TextField.Root>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input placeholder="senha"  />
          </TextField.Root>

          <Flex direction="row" justify="between" gap="3">
          <Dialog.Close>
            <Button size="3">
              <Cross1Icon width="18" height="18" />
              Fechar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button variant="surface" size="3" onClick={props.changeLogin}>
              <CheckIcon width="18" height="18" />
              Login
            </Button>
          </Dialog.Close>
        </Flex>

        </Flex>

      
      </Dialog.Content>
    </Dialog.Root>
  );
});

const logOut = (resetName: CallableFunction, resetLogin: CallableFunction) =>{
  resetName("");
  resetLogin(false);
}

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [userName, setUserName] = useState("");
  return (
    <div className="sticky bg-[#ffffffaa] top-0 block h-fit w-screen p-2 z-50 backdrop-blur ">
      <Theme radius="full" accentColor="amber">
        <Flex align="center" justify="between">
          <Flex align="center" justify="between" gap="2">
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
            <Text as="div" size="5" weight="bold" align="center">
              ABRACE
            </Text>
          </Flex>

          {!loggedIn ? (
            <LoggedOutModal
              iconAlt="Quem é você?"
              iconNI={WhoArU}
              changeLogin={()=>setLoggedIn(true)}
              changeName={(e: { target: { value: React.SetStateAction<string>; }; })=>setUserName(e.target.value)}
            />
          ) : (
            <LoggedInModal
              userName={userName}
              iconAlt="Olá!"
              iconNI={Hi}
              changeLogin={()=> logOut(setUserName, setLoggedIn)}
            />
          )}
        </Flex>
      </Theme>
    </div>
  );
};

export default Header;
