import React from "react";
import styled from "styled-components";

import facebook from "../../assets/img/facebook3.png";
import twitter from "../../assets/img/twitter3.png";
import linkedin from "../../assets/img/linkedin3.png";
import instagram from "../../assets/img/instagram3.png";
import youtube from "../../assets/img/youtube3.png";

const SocialListBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default function SocialList() {
  return (
    <div>
      <SocialListBox>
        <li>
          <a href="https://www.facebook.com/">
            <img style={{ cursor: "pointer" }} src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img
              style={{ cursor: "pointer" }}
              src={twitter}
              alt="twitter icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img style={{ cursor: "pointer" }} src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img
              style={{ cursor: "pointer" }}
              src={instagram}
              alt="instagram"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <img style={{ cursor: "pointer" }} src={youtube} alt="youtube" />
          </a>
        </li>
      </SocialListBox>
    </div>
  );
}
