"use client";
import {
  Card,
  Flex,
  Text,
  Button,
  ScrollArea,
  Inset,
  Dialog,
  Link,
} from "@radix-ui/themes";
import NextImage from "next/image";

import DONATEIcon from "../../public/assets/icons/2904845 1.png";

import { FC, ReactNode, useEffect } from "react";
import React from "react";

import { ChevronLeftIcon, HeartFilledIcon } from "@radix-ui/react-icons";

interface IMGProps {
  URL?: string;
  ALT?: string;
}

interface MyProps {
  children?: ReactNode;
  name: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  description: string;
  imgURL: IMGProps;
  linkToSocialMedia: string;
  URL: string;
  ALT: string;
}

const Disclaimer = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">ADOTAR</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title size="6">Atenção</Dialog.Title>

        <Flex direction="column" justify="between" gap="3">
          <Flex direction="column" gap="3">
            <Text as="div" size="2">
              Honrar um compromisso marcado é de fundamental importância,
              principalmente quando se trata de voluntariado em uma organização
              como a ONG ABRACE, que despende esforços incansáveis para
              encontrar lares amorosos para animais de estimação abandonados.
              <br />
              Cada pessoa que se dispõe a doar seu tempo e esforço desempenha um
              papel crucial na realização dessa nobre missão. Ao cumprir um
              compromisso marcado, você não apenas demonstra respeito pelos
              coordenadores e colegas voluntários, mas também contribui para o
              bem-estar dos animais que dependem dessa ajuda. <br />
              No entanto, compreendemos que imprevistos podem ocorrer, e é por
              isso que pedimos a todos os voluntários que, caso precisem
              desistir da presença em um compromisso, nos avisem com pelo menos
              24 horas de antecedência, permitindo-nos ajustar nossa programação
              e garantir que nossos resgates e cuidados aos animais continuem de
              forma eficaz e organizada. Cada esforço conjunto é valioso na luta
              contra o abandono de animais de estimação, e sua dedicação faz a
              diferença.
            </Text>
            <Flex direction="column" justify="between" align="center" gap="3">
              <Text as="div" align="center" size="3" weight="medium">
                ainda não tem certeza?
              </Text>
              <Flex align="center" direction="row" justify="between" gap="4">
                <Dialog.Close>
                  <Button variant="surface">
                    <ChevronLeftIcon width="18" height="18" />
                    voltar
                  </Button>
                </Dialog.Close>
                <Link href="/help">
                  <Button variant="surface">
                    <NextImage className=" w-7" alt="Doe" src={DONATEIcon} />
                    doar
                  </Button>
                </Link>
              </Flex>

              <Dialog.Close>
                <Button variant="surface" className="w-32">
                  <HeartFilledIcon width="18" height="18" />
                  sim, quero me inscrever
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const EventCard: FC<MyProps> = (props) => {
  return (
    <Card className="max-w-sm " variant="surface">
      <Inset clip="padding-box" side="top" pb="current">
        <NextImage width="384" height="100" src={props.URL} alt={props.ALT} />
      </Inset>

      <Flex direction="column" justify="between" gap="2">
        <ScrollArea
          type="always"
          scrollbars="horizontal"
          style={{ width: "100%", padding: "5%" }}
        >
          <Flex
            className="p-1"
            direction="row"
            justify="between"
            align="center"
            gap="3"
            wrap="nowrap"
          >
            <Card variant="classic" className="w-20 h-16">
              <Text as="div" size="3" weight="bold" align="center">
                {props.date}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                data
              </Text>
            </Card>

            <Card variant="classic" className="w-20 h-16">
              <Text as="div" size="3" weight="bold" align="center">
                {props.time}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                hora
              </Text>
            </Card>
            <Card variant="classic" className="w-20 h-16">
              <Text as="div" size="6" weight="bold" align="center">
                {props.duration}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                duração
              </Text>
            </Card>
          </Flex>
        </ScrollArea>
        <Text as="div" size="8" weight="bold" color="lime">
          {props.name}
        </Text>
        <Text as="div" size="3">
          {props.description}
        </Text>
        <Disclaimer />
      </Flex>
    </Card>
  );
};

export default EventCard;
