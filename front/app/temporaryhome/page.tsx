"use client";
import { InstagramLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import {
  Card,
  Flex,
  Text,
  Button,
  Inset,
  IconButton,
  TextField,
  Separator,
  Select,
} from "@radix-ui/themes";
import NextImage from "next/image";
import DogHug from "../../public/assets/images/dogHug.jpg";
import TemporaryHomeIcon from "../../public/assets/icons/3203239 1.png";
import STDButton from "@components/stdButton/STDButton";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import DONATEIcon from "../../public/assets/icons/2904845 1.png";
import Link from "next/link";
import { useState } from "react";

const totalPets = "30";

const Home = () => {
  const [subscription, setSubscription] = useState(false);
  const [plano, setPlano] = useState("");
  return (
    <div>
      <Card className="w-screen ">
        <Inset clip="padding-box" side="top" pb="current">
          <NextImage
            className="w-screen"
            src={DogHug}
            alt="Filhote de cachorro de pelo marrom lambendo a tela"
          />
        </Inset>

        <Flex align="center" direction="column" justify="between" gap="4">
          <Card className="w-11/12">
            <Flex align="center" direction="column" justify="between" gap="4">
             

             
                  <Text as='div' size='3' weight='bold' align='center' color="lime"> INSCREVA-SE NO NOSSO PROGRAMA DE LAR TEMPORÁRIO</Text>
                <Text as="div" size='1' align='center'>
                Dar lar temporário a um animal abandonado é uma responsabilidade
                que implica cuidados físicos e emocionais, exigindo tempo e
                dedicação. É uma oportunidade de transformar a vida de um ser
                indefeso, proporcionando amor, cuidado e paciência. Além disso,
                desempenha um papel fundamental na luta contra o abandono de
                animais, inspirando outros a adotarem e mostrando que todos
                merecem uma segunda chance. É um ato de compaixão e empatia que
                recompensa tanto o animal quanto o cuidador.
              </Text>
              <Text as='div' color="tomato">AQUI DEVE ESTAR A POLÍTICA DE ADOÇÃO</Text>

              <STDButton
                iconAlt="gerar pix"
                iconNI={TemporaryHomeIcon}
                text="quero me inscrever"
                callBack={()=>alert("Inscrição no programa 'LAR TEMPORÁRIO' enviada")}
              />

             

            
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
