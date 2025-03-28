"use client";

import Link from "next/link";
import styled from "styled-components";
import ContactButton from "../contactButton/index";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;

  @media screen and (max-width: 600px) {
    padding: 1rem 0.5rem;
  }

  h3 {
    color: #4c6ef5;
  }

  a {
    color: #000000;
    text-decoration: none;

    align-content: center;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <h3>COMPANY LOGO</h3>
      </Link>
      <Link href="/contact">
        <ContactButton fw={300} label="Contact Us" isIcon compact />
      </Link>
    </StyledHeader>
  );
}
