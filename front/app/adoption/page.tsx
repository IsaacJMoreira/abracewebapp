"use client";
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
import NextImage from "next/image";
import FrontDog from "../../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../../public/assets/icons/volunteer-icon-10 1.png";
import { useEffect, useState } from "react";
import DogIcon from "../../public/assets/icons/dogIcon.png";
import CatIcon from "../../public/assets/icons/catIcon.png";
import AdoptionCard from "@components/AdoptionCard/AdoptionCard";

const Adoption = () => {
  return (
    <div>
      <Flex
        width="100%"
        direction="row"
        align="center"
        justify="center"
        gap="4"
        wrap="wrap"
      >
        <Flex
          direction="row"
          justify="between"
          gap="0"
          align="center"
          className="sticky px-4 py-0 top-20 block w-screen bg-[#96D2792f] backdrop-blur-sm z-50 "
        >
          <Text as="div" weight="bold" align="left" color="lime">
            seu melhor amigo está aqui
          </Text>

          <Card variant="ghost" className="p-3">
            <Flex gap="2" direction="row" justify="between">
              <Separator orientation="vertical" size="3" />
              <Flex gap="1" direction="column" align="center">
                <NextImage className="h-5 w-5" src={DogIcon} alt="Dog" />
                <Switch defaultChecked />
              </Flex>
              <Flex gap="1" direction="column" align="center">
                <NextImage className="h-5 w-5" src={CatIcon} alt="Dog" />
                <Switch defaultChecked />
              </Flex>
            </Flex>
          </Card>
        </Flex>

        <AdoptionCard
          name="Clara"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={false}
          age={5}
          color="preto"
          furType="longo"
          weight={500}
          weightUnity="g"
          ageUnity="meses"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
        <AdoptionCard
          name="Thomas"
          URL="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          ALT="LHÇH"
          sex={true}
          age={12}
          color="preto"
          furType="longo"
          weight={10}
          weightUnity="Kg"
          ageUnity="anos"
        />
      </Flex>
    </div>
  );
};

export default Adoption;
