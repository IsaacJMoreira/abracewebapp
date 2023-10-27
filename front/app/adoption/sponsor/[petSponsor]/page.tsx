'use client'

import React, { FC } from 'react'
import {
    Card,
    Flex,
    Box,
    Text,
    Button,
    ScrollArea,
    Switch,
    Separator,
  } from "@radix-ui/themes";

  interface MyProps{
    params: {petSponsor: string}
  }

const petSponsor: FC<MyProps> = ({ params }) => {
    
  return(
    <>
    <Text as='div' size='9' color='tomato' weight='bold'>Apadrinhar Animal com ID: {params.petSponsor}</Text>
    </>
  )
}

export default petSponsor;