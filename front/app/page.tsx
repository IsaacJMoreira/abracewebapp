"use client";
import {
  Card,
  Flex,
  Box,
  Text,
  Button,
  ScrollArea,
  Inset,
} from "@radix-ui/themes";
import NextImage from "next/image";
import FrontDog from "../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../public/assets/icons/volunteer-icon-10 1.png";
import { useEffect } from "react";
import Link from "next/link";

const Home = () => {
  return (
    
    <div>
      <Card className="w-screen ">
        <Inset clip="padding-box" side="top" pb="current">
          <NextImage
            className="w-screen z-50"
            src={FrontDog}
            alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
          />
        </Inset>

        <Flex align="center" direction="column" justify="between" gap="4">
          <Box>
            <Text color="lime" align="center" size="9" weight="bold" as="div">
              adoção de cães e gatos adultos
            </Text>
            <br />
            <Text align="center" size="5" weight="medium" as="div">
              é como escolher um amigo pronto para festa! Eles já têm suas
              personalidades definidas, são mais tranquilos e, melhor ainda,
              você estará salvando uma vida!
            </Text>
            <br />
            <Flex align="center" direction="column" justify="between" gap="4">
              <Link href="/adoption">
                <Button style={{ width: "75vw", maxWidth: 340 }} size="3">
                  ADOTAR
                </Button>
              </Link>
            </Flex>
            <br />
            <Flex align="center" direction="column" justify="between" gap="4">
              <Text align="center" size="3" weight="medium" as="div">
                você também pode ajudar essa causa animal
              </Text>
              <Flex align="center" direction="row" justify="between" gap="4">
                <Link href="/donate">
                  <STDButton
                    iconAlt="Doe"
                    iconNI={DONATEIcon}
                    text="quero doar"
                  />
                </Link>

                <Link href='/volunteer'>
                  <STDButton
                    iconAlt="vountariar"
                    iconNI={VOLUNTEERIcon}
                    text="voluntariar"
                  />
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <br />
      </Card>
    </div>
  );
};

export default Home;
