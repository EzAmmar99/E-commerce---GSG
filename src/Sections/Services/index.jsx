import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import ServiceCard from "../../Components/ServiceCard";
import { Flex, SectionsTitle } from "../../Global/style";

import Hubs from "../../assets/img/Hubs.png";
import Products from "../../assets/img/Products.png";
import shiping from "../../assets/img/shiping.png";
import Monitoring from "../../assets/img/Monitoring.png";

import search from "../../assets/img/search.png";
import secure from "../../assets/img/secure.png";
import customize from "../../assets/img/customize.png";
import Arrowrigth from "../../assets/img/Arrowrigth.png";

const ServicesBox = styled.section`
  padding-top: 33px;
`;

export default function Services() {
  return (
    <ServicesBox>
      <Container>
        <SectionsTitle>Our extra services</SectionsTitle>
        <Flex gap="20" wrap="wrap">
          <ServiceCard
            img={Hubs}
            name="Source from
            Industry Hubs"
            icon={search}
          />
          <ServiceCard
            img={Products}
            name="Customize Your Products"
            icon={customize}
          />
          <ServiceCard
            img={shiping}
            name="Fast, reliable shipping by ocean or air"
            icon={Arrowrigth}
          />
          <ServiceCard
            img={Monitoring}
            name="Product monitoring and inspection"
            icon={secure}
          />
        </Flex>
      </Container>
    </ServicesBox>
  );
}
