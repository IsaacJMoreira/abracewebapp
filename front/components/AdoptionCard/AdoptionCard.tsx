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
    <Card >
      <Flex >
        <Box>
          <Inset clip="padding-box" side="top" pb="current">
            <NextImage
              width="100"
              height="100"
              src={props.URL}
              alt={props.ALT}
            />
          </Inset>

          <ScrollArea
            type="always"
            scrollbars="horizontal"
            className="w-screen"
          >
            <Flex direction="row" justify="between" align='center' gap="3">
              <Card className="w-2/5 h-2/5">
                <Text as="div">{props.age}</Text>
                <Text as="div">idade</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text as="div">{props.sex}</Text>
                <Text as="div">sexo</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text as="div">{props.furType}</Text>
                <Text as="div">pelagem</Text>
              </Card>
              <Card className="w-2/5 h-2/5">
                <Text as="div">{props.color}</Text>
                <Text as="div">cor</Text>
              </Card>
            </Flex>
          </ScrollArea>
        </Box>
      </Flex>
    </Card>
  );
};

export default AdoptionCard;
