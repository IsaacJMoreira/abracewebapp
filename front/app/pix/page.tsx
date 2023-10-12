"use client";
import {
  InstagramLogoIcon,
  HeartFilledIcon,
  CopyIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  Flex,
  Text,
  Button,
  Inset,
  IconButton,
  TextField,
  Separator,
} from "@radix-ui/themes";
import NextImage from "next/image";
import DogLick from "../../public/assets/images/dogLick.jpg";
import PixIMG from "../../public/assets/images/mockPix.jpg";
import STDButton from "@components/stdButton/STDButton";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import PIXIcon from "../../public/assets/icons/pix_icon_198027 1.png";
import DONATEIcon from "../../public/assets/icons/2904845 1.png";
import Link from "next/link";
import { useState } from "react";

const totalPets = "30";

const Home = () => {
  const [pix, setPix] = useState(false);
  return (
    // <ScrollArea
    //   type="always"
    //   scrollbars="vertical"
    //   style={{ height: "fit-content" }}
    // >
    <div>
      <Card className="w-screen ">
        <Inset clip="padding-box" side="top" pb="current">
          <NextImage
            className="w-screen"
            src={DogLick}
            alt="Filhote de cachorro de pelo marrom lambendo a tela"
          />
        </Inset>

        <Flex align="center" direction="column" justify="between" gap="4">
          <Card className="w-11/12">
            <Flex align="center" direction="column" justify="between" gap="4">
              <Text align="center" size="4" weight="bold" as="div" color="lime">
                graças à sua doação, você estará ajudando {totalPets} animais
                cadastrados na ABRACE
              </Text>

              {!pix ? (
                ""
              ) : (
                <Card variant="classic">
                  
                  <NextImage src={PixIMG} alt="mock pix" />
                  <Text  as="div" size='1'  align='center' color='lime'> aponte a câmera do seu smartphone ou copie a chave abaixo</Text>
                  
                  <Card >
                    <Flex direction="row" gap="1" justify="between">
                    <CopyIcon width="16" height="16" />
                    <Separator orientation="vertical" size='1'/>
                      <Text as="div" size="1" color="lime">
                        <Link href="/pix">
                          65465lkGBSD65adfgsdLKLKNL56546lkhjllkLJ654
                        </Link>
                      </Text>
                    </Flex>
                  </Card>
                  <Text as='div' size='4' color='tomato' align='center'>QR-CODE E CHAVE MERAMENTE ILUSTRATIVOS</Text>
                </Card>
              )}

              <TextField.Root>
                <TextField.Slot>
                  <HeartFilledIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  placeholder="Quantidade a doar"
                  type="number"
                />
              </TextField.Root>

              <STDButton
                iconAlt="gerar pix"
                iconNI={PIXIcon}
                text="gerar PIX copia e cola"
                callBack={setPix}
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
