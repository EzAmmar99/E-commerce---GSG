import React from "react";
import styled from "styled-components";
import Container from "../../Components/Container";
import OfferCard from "../../Components/OfferCard";
import { Flex } from "../../Global/style";

import product26 from "../../assets/img/product26.png";
import product27 from "../../assets/img/product27.png";
import product28 from "../../assets/img/product28.png";
import product29 from "../../assets/img/product29.png";
import product30 from "../../assets/img/product30.png";

const OffersSectionBox = styled.section`
  margin-top: 30px;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
`;

const SectionDetails = styled.div`
  padding: 20px;
  min-width: 281px;
  border-right: 1px solid #e0e0e0;
`;
const SectionNameH3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;

const SectionDescriptionP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  margin-bottom: 18px;
`;

const OffersBox = styled.div`
  display: flex;
  width: calc(100% - 281px);
`;

export default function Offers() {
  return (
    <Container>
      <OffersSectionBox>
        <Flex>
          <SectionDetails>
            <SectionNameH3>Deals and offers</SectionNameH3>
            <SectionDescriptionP>Hygiene equipments</SectionDescriptionP>
            <h5>Count Down days</h5>
          </SectionDetails>
          <OffersBox>
            <OfferCard img={product26} product="Smart watches" discount="25%" />
            <OfferCard img={product27} product="Laptops " discount="15%" />
            <OfferCard img={product28} product="GoPro cameras " discount="40%" />
            <OfferCard img={product29} product="Headphones" discount="25%" />
            <OfferCard img={product30} product="Canon camreras" discount="25%" />
          </OffersBox>
        </Flex>
      </OffersSectionBox>
    </Container>
  );
}
