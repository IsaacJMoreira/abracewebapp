"use client";

import React, { FC } from "react";
import NextImage from "next/image";
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
  params: { petSponsor: string };
}

const petSponsor: FC<MyProps> = ({ params }) => {
  return (
    <>
      <Text as="div" size="3" color="tomato" weight="bold">
        Apadrinhar animal com ID: {params.petSponsor}
      </Text>
      <NextImage
        src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
        alt="exemplo de dog"
        width="450"
        height="100"
      />
      <Text as="div">
        AQUI, DEVEMOS TER UM DISLAIMER A RESPEITO DE COMO O PROCESSO DE
        APADRINHAMENTO FUNCIONA
      </Text>
      <Flex direction="column" justify="between" gap="3" align="center">
        <Button
          variant="solid"
          onClick={() =>
            alert(`O ANINAL COM ID: ${params.petSponsor} AGRADECE SUA DOAÇÃO`)
          }
        >
          opção 1
        </Button>
        <Button
          variant="solid"
          onClick={() =>
            alert(`O ANINAL COM ID: ${params.petSponsor} AGRADECE SUA DOAÇÃO`)
          }
        >
          opção 2
        </Button>
        <Button
          variant="solid"
          onClick={() =>
            alert(`O ANINAL COM ID: ${params.petSponsor} AGRADECE SUA DOAÇÃO`)
          }
        >
          opção 3
        </Button>
        <Button
          variant="solid"
          onClick={() =>
            alert(`O ANINAL COM ID: ${params.petSponsor} AGRADECE SUA DOAÇÃO`)
          }
        >
          opção 4
        </Button>
      </Flex>
    </>
  );
};

export default petSponsor;
