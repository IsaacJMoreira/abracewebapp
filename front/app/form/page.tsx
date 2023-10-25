"use client";
import * as Tabs from "@radix-ui/react-tabs";
import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Switch,
  Text,
} from "@radix-ui/themes";
import {
  CheckIcon,
  CheckboxIcon,
  HomeIcon,
  Pencil2Icon,
  PersonIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import * as Progress from "@radix-ui/react-progress";
import * as Form from "@radix-ui/react-form";

const FormAbrace = () => {
  const [progress, setProgress] = useState(10);
  return (
    <>
      <Flex
        direction="row"
        justify="between"
        gap="3"
        align="center"
        className=" px-4 py-0 top-20 bg-[#96D2792f] backdrop-blur-sm z-50 "
      >
        <Text
          as="div"
          weight="bold"
          align="left"
          color="lime"
          size="4"
          className="w-fit"
        >
          ficha de cadastro
        </Text>

        <Flex
          gap="3"
          direction="row"
          justify="between"
          align="center"
          className="w-fit"
        >
          <Separator orientation="vertical" size="3" />
          {progress < 100 ? (
            <Card variant="ghost" className=" w-40 p-1">
              <Flex align="center" justify="between" gap="0" direction="column">
                <Box className="w-full">
                  <div
                    className="w-full rounded-md gap-0  relative top-3"
                    style={{ transform: `translateX(${progress - 5.5}%)` }}
                  >
                    <Flex
                      direction="column"
                      gap="0"
                      justify="between"
                      align="start"
                    >
                      <Text as="div" size="1">{`${progress}%`}</Text>
                      <TriangleDownIcon className="relative -top-2" />
                    </Flex>
                  </div>

                  <Progress.Root
                    className="relative overflow-hidden bg-lime-900 rounded-full w-100 h-[10px]"
                    style={{
                      transform: "translateZ(0)",
                    }}
                    value={progress}
                  >
                    <Progress.Indicator
                      className="bg-lime-300 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                      style={{
                        transform: `translateX(-${100 - progress}%)`,
                      }}
                    />
                  </Progress.Root>
                  <Text as="div" size="1" weight="light" color="lime">
                    quase lá!
                  </Text>
                </Box>
              </Flex>
            </Card>
          ) : (
            <Badge size="2">
              <CheckboxIcon />
              {`${progress}%`}
            </Badge>
          )}
        </Flex>
      </Flex>
      <Tabs.Root
        defaultValue="tab1"
        className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
      >
        <Tabs.List className="shrink-0 flex border- border-mauve6">
          <Tabs.Trigger
            value="tab1"
            className="bg-white px-5 h-[45px] flex-1 gap-2 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=inactive]:shadow-[inset_0_0_1px_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            <PersonIcon />
            sobre você
          </Tabs.Trigger>

          <Tabs.Trigger
            value="tab2"
            className="bg-white px-5 h-[45px] flex-1 gap-2 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=inactive]:shadow-[inset_0_0_1px_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            <HomeIcon />
            futuro lar
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="bg-white px-5 h-[45px] flex-1 gap-2 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=inactive]:shadow-[inset_0_0_1px_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            <Pencil2Icon />
            preparativos
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="tab1"
          className="grow p-5 bg-[#ffffff] rounded-b-md outline-none"
        >
          <Heading size="3" color="lime">
            para que você seja voluntário ABRACE ou para que possamos iniciar um
            processo de adoção, precisamos te conhecer melhor.
          </Heading>
          <Separator orientation="horizontal" size="4" />
          <Text as="div" size={"1"} weight="bold" color="tomato">
            * - informações obrigatórias
          </Text>
          <Form.Root className="w-full">
            <Form.Field className="grid mb-[10px]" name="nome">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Nome *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe seu Nome Completo
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="string"
                  placeholder="Giovanni di Pietro di Bernardone"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="nascimento">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Data de Nascimento *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe sua Data de Nascimento
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="date"
                  placeholder="03/10/1226"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="endereco">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Endereço Completo *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe seu Endereço Completo
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="string"
                  placeholder="Rua São Francisco, 123, ap01, bloco A"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="bairro">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Bairro *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe seu Bairro
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="string"
                  placeholder="Papa Gregório IX"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="celular1">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Contato/WhatsApp *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe seu Contato/WhatsApp*
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="tel"
                  pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                  placeholder="(85)91234-5678"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="celular2">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Contato Alternativo
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="tel"
                  pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                  placeholder="(85)91234-5678"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="profissao">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Profissão *
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-red-500 opacity-[0.8]"
                  match="valueMissing"
                >
                  Informe sua Profissão
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="string"
                  placeholder="Sua Profissão"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="social">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                  Instagram/Facebook
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-lime-600 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_lime] focus:shadow-[0_0_0_2px_lime] selection:color-white selection:bg-lime-300"
                  type="string"
                  placeholder="https://instagram.com/ong.abrace?igshid=MzRlODBiNWFlZA=="
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <Button className="w-full">
                Enviar
              </Button>
            </Form.Submit>
          </Form.Root>
        </Tabs.Content>
        <Tabs.Content
          value="tab2"
          className="grow p-5 bg-[#ffffff] rounded-b-md outline-none"
        >
          <Text as="div">tab2</Text>
        </Tabs.Content>
        <Tabs.Content
          value="tab3"
          className="grow p-5 bg-[#ffffff] rounded-b-md outline-none"
        >
          <Text as="div">tab3</Text>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default FormAbrace;
