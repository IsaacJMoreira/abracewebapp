"use client";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Card, Flex, Text, Button, Inset, IconButton } from "@radix-ui/themes";
import NextImage from "next/image";
import DogSnout from "../../public/assets/images/DogSnout.jpg";
import STDButton from "@components/stdButton/STDButton";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import PIXIcon from "../../public/assets/icons/pix_icon_198027 1.png";
import CalendarIcon from "../../public/assets/icons/42253 1.png";
import DogBowIcon from "../../public/assets/icons/3822004 1.png";
import TemporaryHomeIcon from "../../public/assets/icons/3203239 1.png";
import CarIcon from "../../public/assets/icons/carIcon.png"
import Link from "next/link";
import { useState } from "react";

function showMenu() {
  return (
    <Card>
      <Flex direction="column" justify="between" gap="3" align="center">
        <Text as="div" color="lime" weight="bold">
          Escolha como quer se voluntariar
        </Text>
        <Link href="/temporaryhome">
          <STDButton
            iconAlt="lar temporário"
            iconNI={TemporaryHomeIcon}
            text="lar temporário"
          />
        </Link>
        <Link href="/sundayvolunteer">
          <STDButton
            iconAlt="domingário"
            iconNI={CalendarIcon}
            text="domingário"
          />
        </Link>
        <Link href="/transportationvolunteer">
          <STDButton
            iconAlt="transportation"
            iconNI={CarIcon}
            text="transporte"
          />
        </Link>
        <Link href="/Events">
          <STDButton
            iconAlt="participar de um evento"
            iconNI={CalendarIcon}
            text="eventos"
          />
        </Link>
       
      </Flex>
    </Card>
  );
}

const Home = () => {
  const [volunteerMenu, setVolunteerMenu] = useState(false);
  return (
    <div>
      <Card className="w-screen ">
        <Inset clip="padding-box" side="top" pb="current">
          <NextImage
            className="w-screen"
            src={DogSnout}
            alt="Cachorro de pelo marrom com patas brancas apoiado num card branco"
          />
        </Inset>

        <Flex align="center" direction="column" justify="between" gap="4">
          <Card className="w-11/12">
            <Flex align="center" direction="column" justify="between" gap="4">
              <Text align="center" size="5" weight="bold" as="div" color="lime">
                você pode nos ajudar de várias maneiras
              </Text>
              <Link href="/pix">
                <STDButton
                  iconAlt="pix copia e cola"
                  iconNI={PIXIcon}
                  text="PIX copia e cola"
                />
              </Link>
              <Link href="/subscription">
                <STDButton
                  iconAlt="seja mensalista"
                  iconNI={CalendarIcon}
                  text="seja mensalista"
                />
              </Link>

              <Link href="/donatefood">
                <STDButton
                  iconAlt="doe alimentos"
                  iconNI={DogBowIcon}
                  text="doe alimentos"
                />
              </Link>

              {volunteerMenu ? showMenu() : ""}

              <STDButton
                iconAlt="vountariar"
                iconNI={VOLUNTEERIcon}
                text="voluntariar"
                callBack={() => setVolunteerMenu(!volunteerMenu)}
              />

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
