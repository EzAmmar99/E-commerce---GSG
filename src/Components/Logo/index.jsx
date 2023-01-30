import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/img/logo.png";

const LogoBox = styled.div`
  margin-right: 46px;
`;
export default function Logo() {
  return (
    <LogoBox>
      <NavLink to="/main">
        <img src={logo} alt="Brand Logo" />
      </NavLink>
    </LogoBox>
  );
}
