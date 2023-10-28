"use client";

import NextImage from "next/image";
import React, { FC } from "react";
import STDButton from "@components/stdButton/STDButton";
import {
  Card,
  Flex,
  Box,
  Text,
  Button,
  ScrollArea,
  Switch,
  Separator,
} from "@radix-ui/themes";
import { HeartFilledIcon } from "@radix-ui/react-icons";

interface MyProps {
  params: { userID: string };
}

const UserProfile: FC<MyProps> = ({ params }) => {
  return (
    <>
      <Text as="div" size="3" color="tomato" weight="bold">
        Usuário com ID: {params.userID}
      </Text>
     
      <Text as="div">
        DEVE CONTER AS INFORMAÇÕES DO UDER + INSCRIÇÕES + HISTÓRICO DE DOAÇÕES + INFORMAÇÕES DE FORMULÁRIO
      </Text>
      
    </>
  );
};

export default UserProfile;
