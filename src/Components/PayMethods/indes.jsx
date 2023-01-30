import React from "react";
import styled from "styled-components";

import AE from "../../assets/img/AE.png";
import MC from "../../assets/img/MC.png";
import PP from "../../assets/img/PP.png";
import Vissa from "../../assets/img/Vissa.png";

const PayMethodslist = styled.ul`
  display: flex;
  gap: 14px;
  list-style: none;
`;
export default function PayMethods() {
  return (
    <PayMethodslist>
      <li>
        <img src={AE} alt="American Express" />
      </li>
      <li>
        <img src={MC} alt="Master Card" />
      </li>
      <li>
        <img src={PP} alt="Paypal" />
      </li>
      <li>
        <img src={Vissa} alt="Visa Card" />
      </li>
    </PayMethodslist>
  );
}
