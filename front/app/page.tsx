"use client";
import { Card, Flex, Box, Text, Button } from "@radix-ui/themes";
import NextImage from "next/image";
import FrontDog from "../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../public/assets/icons/volunteer-icon-10 1.png";
import { useEffect } from "react";

const Home = () => {
  return (
    <section className="w-full flex-center fles-col main_background_color">
      <Card className="w-screen h-fit relative top-[100vw]">
        <Flex align="center" direction="column" justify="between" gap="4">
          <Box>
            <Box className="h-[50vw]"></Box>
            <Text align="center" size="9" weight="bold" as="div">
              adote cães e gatos adultos
            </Text>
            <br />
            <Text align="center" size="5" weight="medium" as="div">
              é como escolher um amigo pronto para festa! Eles já têm suas
              personalidades definidas, são mais tranquilos e, melhor ainda,
              você estará salvando uma vida!
            </Text>
            <br />
            <Flex align="center" direction="column" justify="between" gap="4">
              <Box>
                <Button style={{ width: "75vw" }} size="3">
                  ADOTAR
                </Button>
              </Box>
            </Flex>
            <br />
            <Flex align="center" direction="column" justify="between" gap="4">
              <Text align='center' size='3' weight='medium' as="div">você também pode ajudar essa causa animal</Text>
              <Flex align="center" direction="row" justify="between" gap="4">
                <STDButton
                  iconAlt="Doe"
                  iconNI={DONATEIcon}
                  text="quero doar"
                />
                <STDButton
                  iconAlt="vountariar"
                  iconNI={VOLUNTEERIcon}
                  text="voluntariar"
                />
              </Flex>
            </Flex>
          </Box>
          <Box></Box>
        </Flex>
      </Card>
      <NextImage
        className="w-screen absolute top-24"
        src={FrontDog}
        alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
      />
    </section>
  );
};

export default Home;
