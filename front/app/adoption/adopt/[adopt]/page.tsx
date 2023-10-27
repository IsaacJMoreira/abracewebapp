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

const Adopt: FC<MyProps> = ({ params }) => {
    
  return(
    <>
    <Text as='div' size='9' color='tomato' weight='bold'>Adotar animal com ID: {params.petSponsor}</Text>
    </>
  )
}

export default Adopt;