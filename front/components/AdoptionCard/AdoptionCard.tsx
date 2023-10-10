"use client";
import {
  Card,
  Flex,
  Box,
  Text,
  Button,
  ScrollArea,
  Inset,
} from "@radix-ui/themes";
import NextImage from "next/image";
import FrontDog from "../public/assets/images/FrontDog.png";
import STDButton from "@components/stdButton/STDButton";
import DONATEIcon from "../public/assets/icons/2904845 1.png";
import VOLUNTEERIcon from "../public/assets/icons/volunteer-icon-10 1.png";
import { FC, ReactNode, useEffect } from "react";

interface IMGProps {
  URL?: string;
  ALT?: string;
}

interface MyProps {
  children?: ReactNode;
  imgUrls?: [IMGProps];
  URL: string;
  ALT: string;
  description?: string;
  age?: number;
  ageUnity?: string;
  furType?: string;
  personality?: string;
  color?: string;
  sex?: boolean;
  weight?: number;
  weightUnity?: string;
}

const AdoptionCard: FC<MyProps> = (props) => {
  return (
    <Card className="w-11/12">
      <Flex className="w-screen">
        <Box>
          <Inset clip="padding-box" side="top" pb="current">
            <NextImage width="1" height='1' className="w-full" src={props.URL} alt={props.ALT} />
          </Inset>

          <ScrollArea type="always" scrollbars="horizontal" className="w-screen">
            <Flex direction="row" justify="between" gap="3">
              <Card className="w-2/5 h-2/5">
                <Text>{props.age}</Text>
                <Text>idade</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text>{props.sex}</Text>
                <Text>sexo</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text>{props.furType}</Text>
                <Text>pelagem</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text>{props.color}</Text>
                <Text>cor</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text>{props.color}</Text>
                <Text>cor</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text>{props.color}</Text>
                <Text>cor</Text>
              </Card>
            </Flex>
          </ScrollArea>
        </Box>
      </Flex>
    </Card>
  );
};

export default AdoptionCard;
