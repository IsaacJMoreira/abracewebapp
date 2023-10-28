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
import EventCard from "@components/EventCard/EventCard";

const Adoption = () => {
  return (
    <div>
      <Text as="div" weight="bold" align="center" color="lime" size="4">
        nossos próximos eventos
      </Text>

      <Flex
        className="py-2"
        width="100%"
        direction="row"
        align="center"
        justify="center"
        gap="4"
        wrap="wrap"
      >
        <EventCard
          name="Evento EXEMPLO"
          URL="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
          ALT="LHÇH"
          date="25/03"
          time="13:30"
          duration="3h"
          description="
          Venha fazer parte de um dia cheio de amor e compaixão em nosso evento de adoção de animais! Junte-se a nós enquanto proporcionamos a oportunidade perfeita para você encontrar o seu novo companheiro peludo. Uma variedade de cães e gatos adoráveis, de todas as idades e tamanhos, aguardam ansiosamente por um lar amoroso. Este evento é uma celebração do amor incondicional que os animais podem oferecer, e estamos comprometidos em fazer com que cada encontro seja uma história de sucesso. Venha fazer a diferença na vida de um animal e encher o seu coração com a alegria que só um pet adotado pode proporcionar!"
          location="Parque Pianista Manolo Cabral"
          linkToLocation="https://maps.app.goo.gl/91u6NgbfznN2oudr7"
          eventID="123"
        />
           <EventCard
          name="Evento EXEMPLO"
          URL="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
          ALT="LHÇH"
          date="25/03"
          time="13:30"
          duration="3h"
          description="
          Venha fazer parte de um dia cheio de amor e compaixão em nosso evento de adoção de animais! Junte-se a nós enquanto proporcionamos a oportunidade perfeita para você encontrar o seu novo companheiro peludo. Uma variedade de cães e gatos adoráveis, de todas as idades e tamanhos, aguardam ansiosamente por um lar amoroso. Este evento é uma celebração do amor incondicional que os animais podem oferecer, e estamos comprometidos em fazer com que cada encontro seja uma história de sucesso. Venha fazer a diferença na vida de um animal e encher o seu coração com a alegria que só um pet adotado pode proporcionar!"
          location="Parque Pianista Manolo Cabral"
          linkToLocation="https://maps.app.goo.gl/91u6NgbfznN2oudr7"
        />
           <EventCard
          name="Evento EXEMPLO"
          URL="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
          ALT="LHÇH"
          date="25/03"
          time="13:30"
          duration="3h"
          description="
          Venha fazer parte de um dia cheio de amor e compaixão em nosso evento de adoção de animais! Junte-se a nós enquanto proporcionamos a oportunidade perfeita para você encontrar o seu novo companheiro peludo. Uma variedade de cães e gatos adoráveis, de todas as idades e tamanhos, aguardam ansiosamente por um lar amoroso. Este evento é uma celebração do amor incondicional que os animais podem oferecer, e estamos comprometidos em fazer com que cada encontro seja uma história de sucesso. Venha fazer a diferença na vida de um animal e encher o seu coração com a alegria que só um pet adotado pode proporcionar!"
          location="Parque Pianista Manolo Cabral"
          linkToLocation="https://maps.app.goo.gl/91u6NgbfznN2oudr7"
        />
           <EventCard
          name="Evento EXEMPLO"
          URL="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
          ALT="LHÇH"
          date="25/03"
          time="13:30"
          duration="3h"
          description="
          Venha fazer parte de um dia cheio de amor e compaixão em nosso evento de adoção de animais! Junte-se a nós enquanto proporcionamos a oportunidade perfeita para você encontrar o seu novo companheiro peludo. Uma variedade de cães e gatos adoráveis, de todas as idades e tamanhos, aguardam ansiosamente por um lar amoroso. Este evento é uma celebração do amor incondicional que os animais podem oferecer, e estamos comprometidos em fazer com que cada encontro seja uma história de sucesso. Venha fazer a diferença na vida de um animal e encher o seu coração com a alegria que só um pet adotado pode proporcionar!"
          location="Parque Pianista Manolo Cabral"
          linkToLocation="https://maps.app.goo.gl/91u6NgbfznN2oudr7"
        />
           <EventCard
          name="Evento EXEMPLO"
          URL="https://m.vitoria.es.gov.br/recursos/imagens/banco/2021/09/29/94889/ampliada.jpg"
          ALT="LHÇH"
          date="25/03"
          time="13:30"
          duration="3h"
          description="
          Venha fazer parte de um dia cheio de amor e compaixão em nosso evento de adoção de animais! Junte-se a nós enquanto proporcionamos a oportunidade perfeita para você encontrar o seu novo companheiro peludo. Uma variedade de cães e gatos adoráveis, de todas as idades e tamanhos, aguardam ansiosamente por um lar amoroso. Este evento é uma celebração do amor incondicional que os animais podem oferecer, e estamos comprometidos em fazer com que cada encontro seja uma história de sucesso. Venha fazer a diferença na vida de um animal e encher o seu coração com a alegria que só um pet adotado pode proporcionar!"
          location="Parque Pianista Manolo Cabral"
          linkToLocation="https://maps.app.goo.gl/91u6NgbfznN2oudr7"
        />
      </Flex>
    </div>
  );
};

export default Adoption;
