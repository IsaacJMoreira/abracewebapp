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
import CatAndDog from "../../public/assets/images/catAndDog.jpg";
import CalendarIcon from "../../public/assets/icons/42253 1.png";
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
            src={CatAndDog}
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

              <Select.Root defaultValue="escolha" onValueChange={setPlano}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="escolha" disabled>
                      {" "}
                      Escolha um plano
                    </Select.Item>
                    <Select.Label>Planos mensais</Select.Label>
                    <Select.Item value="m1">
                      1 - R$ 1,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="m2">
                      2 - R$ 2,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="m3">
                      3 - R$ 5,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="m4">
                      4 - R$ 10,00/mês por 6 mêses
                    </Select.Item>
                  </Select.Group>
                  <Select.Group>
                    <Select.Label>Planos anuais</Select.Label>
                    <Select.Item value="a1">
                      1 - R$ 1,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="a2">
                      2 - R$ 2,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="a3">
                      3 - R$ 5,00/mês por 6 mêses
                    </Select.Item>
                    <Select.Item value="a4">
                      4 - R$ 10,00/mês por 6 mêses
                    </Select.Item>
                  </Select.Group>
                  <Select.Group>
                    <Select.Label>Planos vitalícios</Select.Label>
                    <Select.Item value="v1">1 - R$ 1,00/mês</Select.Item>
                    <Select.Item value="v2">2 - R$ 2,00/mês</Select.Item>
                    <Select.Item value="v3">3 - R$ 5,00/mês</Select.Item>
                    <Select.Item value="v4">4 - R$ 10,00/mês</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>

              {subscription ? (
                <Flex
                  direction="column"
                  align="center"
                  justify="between"
                  gap="2"
                >
                  <Text
                    as="div"
                    align="center"
                  >{`Plano escolhido: ${plano}`}</Text>
                  <Card>
                    <Flex direction='row' gap='1' justify='between'>
                      <Link1Icon height="16" width="16" />
                      <Separator orientation="vertical" size="1" />
                      <Text as="div" color="lime" size='1'>
                        <Link href="/subscription">
                          Clique aqui para proceder com o pagamento{" "}
                        </Link>
                        <Text as='div' color="tomato" align='center'>LINK MERAMENTE ILUSTRATIVO</Text>
                      </Text>
                    </Flex>
                  </Card>
                </Flex>
              ) : (
                ""
              )}

              <STDButton
                iconAlt="gerar pix"
                iconNI={CalendarIcon}
                text="gerar link de pagamento"
                callBack={setSubscription}
              />
              <Flex align="center" direction="column" justify="between" gap="4">
                <Text align="center" size="3" weight="medium" as="div">
                  continue nos ajudando
                </Text>
                <Flex align="center" direction="row" justify="between" gap="4">
                <Link href="/donate">
                    <STDButton
                      iconAlt="Doe"
                      iconNI={DONATEIcon}
                      text="quero doar"
                    />
                  </Link>
                  <Link href="/volunteer">
                    <STDButton
                      iconAlt="vountariar"
                      iconNI={VOLUNTEERIcon}
                      text="voluntariar"
                    />
                  </Link>
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
