"use client";
import {
  Dialog,
  Button,
  Flex,
  Separator,
  TextField,
  Link,
  Box,
  Text,
  Card,
  Badge,
} from "@radix-ui/themes";

import {
  Cross1Icon,
  CheckIcon,
  ChevronDownIcon,
  ExitIcon,
  PersonIcon,
  LockClosedIcon,
  AvatarIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import * as Progress from "@radix-ui/react-progress";
import NextImage from "next/image";
import ABRACE from "../../public/assets/images/ABRACE.png";

import WhoArU from "../../public/assets/icons/53324372.png";
import Hi from "../../public/assets/icons/74dec39f3bdda7417bb318f5b98afe3e 1.png";
import DogPersonIcon from "../../public/assets/icons/dogPersonIcon.png";
import { useState, ReactNode, FC } from "react";

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
  phoneNumber?: string;
}

const LoggedInModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  const [progress, setProgress] = useState(20);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">
          <NextImage className="w-5" src={props.iconNI} alt={props.iconAlt} />
          {`olá, ${props.userName}`}
          <Separator orientation="vertical" size="1"></Separator>
          <ChevronDownIcon height="18" width="18" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>{props.userName}</Dialog.Title>

        <Flex
          direction="column"
          justify="start"
          gap="3"
          align="start"
          className="w-full"
        >
          {progress < 100 ? (
            <Link href="/adoption">
              <Card variant="classic">               
                <Flex align="center" justify="between" gap="3" direction="row">
                  <Box>
                    <NextImage
                      src={DogPersonIcon}
                      alt="complete seu perfil"
                      width="70"
                    />
                  </Box>

                  <Separator orientation="vertical" size="3" />
                  <Box className="w-full">
                    <div
                      className="w-full rounded-md gap-0  relative top-2"
                      style={{ transform: `translateX(${progress - 3}%)` }}
                    >
                      <Flex
                        direction="column"
                        gap="0"
                        justify="between"
                        align="start"
                      >
                        <Text as="div" size="1">{`${progress}%`}</Text>
                        <TriangleDownIcon className="relative -top-1" />
                      </Flex>
                    </div>

                    <Progress.Root
                      className="relative overflow-hidden bg-lime-900 rounded-full w-full h-[25px]"
                      style={{
                        transform: "translateZ(0)",
                      }}
                      value={progress}
                    >
                      <Progress.Indicator
                        className="bg-lime-300 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                        style={{ transform: `translateX(-${100 - progress}%)` }}
                      />
                    </Progress.Root>
                    <Text as="div" size="1" color="lime" weight="light">
                      Complete seu perfil para começar a adotar
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Link>
          ) : (
            <Button variant="surface">
              <PersonIcon />
              perfil completo
            </Button>
          )}

          <Separator orientation="horizontal" size="4" />
          <Flex direction="row" justify="between" gap="3" className="w-full">
            <Dialog.Close>
              <Button variant="surface" onClick={props.changeLogin}>
                <ExitIcon width="18" height="18" />
                Logout
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button variant="surface">
                <Cross1Icon width="18" height="18" />
                Fechar
              </Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
});

const LoggedOutModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">
          <NextImage className="w-8" src={WhoArU} alt="Quem é você? LOGIN" />
          quem é você? <Separator orientation="vertical" size="1" /> LOGIN
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Quem é você?</Dialog.Title>

        <Dialog.Description>
          Faça seu Login no app <strong>ABRACE</strong>
        </Dialog.Description>

        <Flex direction="column" justify="between" gap="3">
          <TextField.Root>
            <TextField.Slot>
              <PersonIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input
              placeholder="nome"
              value={props.userName}
              onChange={props.changeName}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input placeholder="senha" />
          </TextField.Root>

          <Flex direction="row" justify="between" gap="3">
            <Dialog.Close>
              <Button variant="surface">
                <Cross1Icon width="18" height="18" />
                Fechar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button variant="surface" onClick={props.changeLogin}>
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

const logOut = (resetName: CallableFunction, resetLogin: CallableFunction) => {
  resetName("");
  resetLogin(false);
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [userName, setUserName] = useState("");
  return (
    <div className="sticky bg-[#ffffffaa] top-0 block h-fit w-screen p-2 z-50 backdrop-blur ">
      <Flex align="center" justify="between">
        <Flex align="center" justify="between" gap="2">
          <Link href="/">
            <NextImage
              className="w-16 h-16"
              alt="Logo da ABRACE"
              src={ABRACE}
            />
          </Link>

          {/* <Avatar
              size="5"
              radius="full"
              fallback="AB"
              src={
                loggedIn
                  ? "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  : ""
              }
              alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
            /> */}
          {/* <Link  size='4' weight="bold" href="/">
              ABRACE
            </Link> */}
        </Flex>

        {!loggedIn ? (
          <LoggedOutModal
            iconAlt="Quem é você?"
            iconNI={WhoArU}
            changeLogin={() => setLoggedIn(true)}
            changeName={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setUserName(e.target.value)}
          />
        ) : (
          <LoggedInModal
            userName={userName}
            iconAlt="Olá!"
            iconNI={Hi}
            changeLogin={() => logOut(setUserName, setLoggedIn)}
          />
        )}
      </Flex>
    </div>
  );
};

export default Header;
