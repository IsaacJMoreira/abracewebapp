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
  params: { adopt: string };
}

const Adopt: FC<MyProps> = ({ params }) => {
  return (
    <>
      <Text as="div" size="3" color="tomato" weight="bold">
        Adotar animal com ID: {params.adopt}
      </Text>
      <NextImage
        src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
        alt="exemplo de dog"
        width="450"
        height="100"
      />
      <Text as="div">
        AQUI, DEVEMOS TER UM DISLAIMER A RESPEITO DE COMO O PROCESSO DE ADOÇÃO
        FUNCIONA.
      </Text>
      <Button variant="solid" onClick={()=>alert("intenção de adoção enviada! Agora basta esperar o contato da equipe ABRACE")}>
        <HeartFilledIcon width="18" height="18" />
        sim, estou ciente. quero adotar
      </Button>
    </>
  );
};

export default Adopt;
