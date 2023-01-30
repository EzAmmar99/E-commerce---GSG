import React from "react";
import styled from "styled-components";
import { FlexBetween } from "../../Sections/Header/style";

import menu from "../../assets/img/menu.png";
import downarrow from "../../assets/img/downarrow.png";

const MainNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const MainNavLi = styled.li`
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
  cursor: pointer;
  &:hover {
    color: #127fff;
  }
`;

export default function MainNav() {
  return (
    <MainNavList>
      <MainNavLi>
        <FlexBetween>
          <img style={{ marginRight: "6px" }} src={menu} alt="menu icon" />
          All category
        </FlexBetween>
      </MainNavLi>
      <MainNavLi>Hot offers</MainNavLi>
      <MainNavLi>Gift boxes</MainNavLi>
      <MainNavLi>Projects</MainNavLi>
      <MainNavLi>Menu item</MainNavLi>
      <MainNavLi>
        <FlexBetween>
          Help
          <img style={{ marginRight: "6px" }} src={downarrow} alt="menu icon" />
        </FlexBetween>
      </MainNavLi>
    </MainNavList>
  );
}
