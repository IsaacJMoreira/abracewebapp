import { Blockquote, Card, Flex, Heading, Link } from "@radix-ui/themes";
import { FC, ReactNode, useEffect } from "react";
import LocationIon from "../../public/assets/icons/locationIcon.png";
import NextImage from "next/image";
import React from "react";

interface MyProps {
  children?: ReactNode;
  name: string;
  description: string;
  link: string;
}

const FoddDonationAdressCard: FC<MyProps> = (props) => {
  return (
    <Card>
      <Link href={props.link}>
        <Flex direction="row" gap="1" align="center" justify="between">
          <NextImage className="w-16" src={LocationIon} alt="Localização" />
          <Blockquote>
            <Heading size="5" color="lime">
              {props.name}
            </Heading>
            {props.description}
          </Blockquote>
        </Flex>
      </Link>
    </Card>
  );
};

export default FoddDonationAdressCard;
