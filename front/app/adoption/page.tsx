"use client";
import { Card, Flex, Box, Text, Button, ScrollArea } from "@radix-ui/themes";
import NextImage from "next/image";
import FrontDog from "../../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import { useEffect } from "react";
import AdoptionCard from "@components/AdoptionCard/AdoptionCard";

const Adoption = () => {
  return (
    <ScrollArea
      type="always"
      scrollbars="vertical"
      style={{ width: "100vw" }}
    >
      <Flex direction="column" justify='between' gap='3' >
        <AdoptionCard
          URL="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
        />
        <AdoptionCard
          URL="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
        />
        <AdoptionCard
          URL="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
        />
      </Flex>
    </ScrollArea>
  );
};

export default Adoption;
