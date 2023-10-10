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
      
    >
      <Flex direction="column" justify='between' gap='3' >
        <AdoptionCard
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
        />
        <AdoptionCard
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
        />
        <AdoptionCard
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
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
