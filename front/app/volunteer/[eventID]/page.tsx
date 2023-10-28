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
  params: { eventID: string };
}

const Adopt: FC<MyProps> = ({ params }) => {
  return (
    <>
      <Text as="div" size="3" color="tomato" weight="bold">
        Iscrição no evento com ID: {params.eventID}
      </Text>
      <NextImage
        src="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
        alt="exemplo de dog"
        width="450"
        height="100"
      />
      <Text as="div">
        AQUI, DEVEMOS TER UM DISLAIMER A RESPEITO DE COMO O PROCESSO DE VOLUNTARIADO
        FUNCIONA.
      </Text>
      <Button variant="solid" onClick={()=>alert("intenção de adoção enviada! Agora basta esperar o contato da equipe ABRACE")}>
        <HeartFilledIcon width="18" height="18" />
        sim, estou ciente. quero ser voluntário
      </Button>
    </>
  );
};

export default Adopt;
