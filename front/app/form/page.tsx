"use client";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import { Text } from "@radix-ui/themes";

const FormAbrace = () => {
  return (
    <>
      <Text as="div" align="center">
        Ficha de Cadastro
      </Text>
      <Tabs.Root
        defaultValue="tab1"
        className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
      >
        <Tabs.List className="shrink-0 flex border- border-mauve6">
          <Tabs.Trigger
            value="tab1"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            sobre você
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            futuro lar
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none  select-none first:rounded-tl-md last:rounded-tr-md hover:text-lime-700 data-[state=active]:text-lime-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative   data-[state=active]:focus:shadow-lime-300 outline-none cursor-default"
          >
            preparativos
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="tab1"
          className="grow p-5 bg-white rounded-b-md outline-none"
        >
          <Text as="div">tab1</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text as="div">tab2</Text>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <Text as="div">tab3</Text>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default FormAbrace;
