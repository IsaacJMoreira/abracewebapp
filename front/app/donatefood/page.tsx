"use client";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  Flex,
  Text,
  Button,
  Inset,
  IconButton,
  Heading,
} from "@radix-ui/themes";
import NextImage from "next/image";
import CatEating from "../../public/assets/images/catEating.jpg";
import STDButton from "@components/stdButton/STDButton";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import FoddDonationAdressCard from "@components/FoodDonationAdressCard/FoddDonationAdressCard";
import DONATEIcon from "../../public/assets/icons/2904845 1.png";
import WhatsAppIcon from "../../public/assets/icons/whatsAppIcon.svg";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  return (
    <div>
      <Card className="w-screen ">
        <Inset clip="padding-box" side="top" pb="current">
          <NextImage
            className="w-screen"
            src={CatEating}
            alt="Filhote de cachorro de pelo marrom lambendo a tela"
          />
        </Inset>

        <Flex align="center" direction="column" justify="between" gap="4">
          <Card className="w-11/12">
            <Flex direction="column" align="center" justify="between" gap="1">
              <Text as="div" size="3">
                <Heading size="6" color="lime">
                  {" "}
                  Pontos de coleta
                </Heading>
              </Text>
              <Text as="div" size="3" color="tomato">
                ESSAS INFORMAÇÕES SÓ APARECEM PARA CADASTRADOS, GARANTINDO QUE
                OS ENDEREÇOS PERMANEÇAM SEGUROS.
              </Text>
            </Flex>

            <Flex gap="3" align="center" justify="between" direction="column">
              <FoddDonationAdressCard
                name="PetShop 1"
                description="Rua Tal, número 123, Bairro tal, Fortaleza-CE"
                link="https://maps.app.goo.gl/bwbV5ZPn4ciKsTSNA"
              />
              <FoddDonationAdressCard
                name="PetShop 2"
                description="Rua Tal, número 123, Bairro tal, Fortaleza-CE"
                link="https://maps.app.goo.gl/bwbV5ZPn4ciKsTSNA"
              />
              <FoddDonationAdressCard
                name="Clínica Veterinária 1"
                description="Rua Tal, número 123, Bairro tal, Fortaleza-CE"
                link="https://maps.app.goo.gl/bwbV5ZPn4ciKsTSNA"
              />
              <FoddDonationAdressCard
                name="Voluntário 1"
                description="Rua Tal, número 123, Bairro tal, Fortaleza-CE"
                link="https://maps.app.goo.gl/bwbV5ZPn4ciKsTSNA"
              />
              <Text as="div" size="2" color="lime" align="center" weight="bold">
                caso não possa se deslocar até os locais de coleta, entre em
                contato conosco
              </Text>
              <Link href="https://wa.me//558599226771?text=Oi!%20Gostaria%20%20de%20doar%20alimentos!">
                <NextImage
                className="w-40"
                src={WhatsAppIcon}
                alt="WhatsApp da ABRACE"/>
              </Link>

              <Flex align="center" direction="column" justify="between" gap="4">
                <Text align="center" size="3" weight="medium" as="div">
                  continue nos ajudando
                </Text>
                <Flex align="center" direction="row" justify="between" gap="4">
                  <Link href="/help">
                    <STDButton
                      iconAlt="Doe"
                      iconNI={DONATEIcon}
                      text="quero doar"
                    />
                  </Link>
                  <STDButton
                    iconAlt="vountariar"
                    iconNI={VOLUNTEERIcon}
                    text="voluntariar"
                  />
                </Flex>
              </Flex>
              <Text align="center" size="1" weight="bold" as="div">
                entre em contato conosco através das nossas redes
              </Text>
              <IconButton>
                <InstagramLogoIcon width="20" height="20" />
              </IconButton>
            </Flex>
          </Card>

          <Flex align="center" direction="column" justify="between" gap="4">
            <Text align="center" size="1" weight="bold" as="div">
              temos vários amiguinhos esperando um novo lar. <br /> Vamos
              conhecê-los?
            </Text>
            <Link href="/adoption">
              <Button style={{ width: "75vw", maxWidth: 340 }} size="3">
                ADOTAR
              </Button>
            </Link>
          </Flex>
          <br />
        </Flex>
        <br />
      </Card>
    </div>
  );
};

export default Home;
