import React from "react";
import styled from "styled-components";
import { Flex, SectionsTitle } from "../../Global/style";
import Container from "../../Components/Container";

import RecommendedItemCard from "../../Components/RecommendedItemCard";

import product1 from "../../assets/img/product1.png";
import product2 from "../../assets/img/product2.png";
import product3 from "../../assets/img/product3.png";
import product4 from "../../assets/img/product4.png";
import product5 from "../../assets/img/product5.png";
import product6 from "../../assets/img/product6.png";
import product7 from "../../assets/img/product7.png";
import product8 from "../../assets/img/product8.png";
import product9 from "../../assets/img/product9.png";

const RecommendedsBox = styled.div`
  padding-top: 30px;
`;

export default function Recommendeds() {
  return (
    <RecommendedsBox>
      <Container>
        <SectionsTitle>Recommended items</SectionsTitle>
        <Flex gap="19" wrap="wrap">
          <RecommendedItemCard
            description="T-shirts with multiple colors, for men"
            price="$10.30"
            img={product1}
          />
          <RecommendedItemCard
            description="Jeans shorts for men blue color"
            price="$10.30"
            img={product2}
          />
          <RecommendedItemCard
            description="Brown winter coat medium size"
            price="$12.50"
            img={product3}
          />
          <RecommendedItemCard
            description="Leather wallet"
            price="$34.00"
            img={product4}
          />
          <RecommendedItemCard
            description="Jeans bag for travel for men"
            price="$99.00"
            img={product5}
          />
          <RecommendedItemCard
            description="Canon camera black, 100x zoom"
            price="$9.99"
            img={product6}
          />
          <RecommendedItemCard
            description="Headset for gaming with mic"
            price="$8.99"
            img={product7}
          />
          <RecommendedItemCard
            description="Smartwatch silver color modern"
            price="$10.30"
            img={product5}
          />
          <RecommendedItemCard
            description="T-shirts with multiple colors, for men"
            price="$10.30"
            img={product8}
          />
          <RecommendedItemCard
            description="Jeans bag for travel for men"
            price="$80.95"
            img={product9}
          />
        </Flex>
      </Container>
    </RecommendedsBox>
  );
}
