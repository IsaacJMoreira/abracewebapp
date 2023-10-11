"use client";
import {
  Card,
  Flex,
  Box,
  Text,
  Button,
  ScrollArea,
  Inset,
  Dialog,
  Separator,
  TextField,
} from "@radix-ui/themes";
import NextImage from "next/image";
import FrontDog from "../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../public/assets/icons/volunteer-icon-10 1.png";
import { FC, ReactNode, useEffect } from "react";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  CheckIcon,
  ChevronLeftIcon,
  Cross1Icon,
  HeartFilledIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

interface IMGProps {
  URL?: string;
  ALT?: string;
}

interface MyProps {
  children?: ReactNode;
  imgUrls?: [IMGProps];
  URL: string;
  ALT: string;
  description?: string;
  age?: number;
  ageUnity?: string;
  furType?: string;
  personality?: string;
  color?: string;
  sex?: boolean;
  weight?: number;
  weightUnity?: string;
}

const Disclaimer = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">ADOTAR</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Atenção</Dialog.Title>

        <Flex direction="column" justify="between" gap="3">
          <Flex direction="column" gap="3">
            <Text as="div">
              Adotar um cão ou gato é uma decisão maravilhosa, mas exige
              responsabilidade. Além dos custos financeiros, que incluem
              alimentação, cuidados veterinários e emergências, é preciso
              disponibilizar tempo, espaço e paciência para os animais. A adoção
              representa um compromisso de longo prazo, com a necessidade de
              adaptação e consideração da personalidade do pet. Apesar dos
              desafios, a recompensa é o amor incondicional que esses amigos de
              quatro patas proporcionam. Portanto, a adoção deve ser feita com
              sabedoria e responsabilidade, assegurando que você está pronto
              para fazer a diferença na vida de um animalzinho.
            </Text>
            <Flex direction='row' justify='between' align='center' gap='3'>
            
              <Dialog.Close>
                <Button variant="surface">
                  <ChevronLeftIcon width="18" height="18" />
                  voltar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="surface">
                  <HeartFilledIcon width="18" height="18" />
                  sim, adotar
                </Button>
              </Dialog.Close>
            
            </Flex>
            
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const AdoptionCard: FC<MyProps> = (props) => {
  return (
    <Card className="max-w-sm" variant="surface">
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
            <Card
             variant="classic"
             className="w-20 h-16"
            >
              <Text as="div" size="6" weight="bold" align="center">
                {props.age}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                idade
              </Text>
            </Card>

            <Card
             variant="classic"
             className="w-20 h-16"
            >
              <Text as="div" size="6" weight="bold" align="center">
                {props.sex ? "F" : "M"}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                sexo
              </Text>
            </Card>

            <Card
             variant="classic"
             className="w-20 h-16"
            >
              <Text as="div" size="3" weight="bold" align="center">
                {props.furType}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                pelagem
              </Text>
            </Card>

            <Card
             variant="classic"
             className="w-20 h-16"
            >
              <Text as="div" size="3" weight="bold" align="center">
                {props.color}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                cor
              </Text>
            </Card>
            <Card
             variant="classic"
             className="w-20 h-16"
            >
              <Text as="div" size="6" weight="bold" align="center">
                {props.weight}
              </Text>
              <Text
                as="div"
                size="1"
                weight="medium"
                align="center"
                color="lime"
              >
                {props.weightUnity}
              </Text>
            </Card>
          </Flex>
        </ScrollArea>
        <Text as="div" size="8" weight="bold" color="lime">
          THOMAS
        </Text>
        <Text as="div" size="3">
          Cãozinho de 3 anos com pelo longo, temperamento calmo e 30kg, está
          ansioso para ser adotado e encontrar um lar amoroso. Sua personalidade
          tranquila e pelagem encantadora fazem dele o companheiro perfeito.
          Adote Thomas e dê a ele a chance de ter um lar para sempre cheio de
          amor e carinho.
        </Text>
        <Disclaimer />
      </Flex>
    </Card>
  );
};

export default AdoptionCard;
