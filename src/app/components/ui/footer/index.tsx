"use client";

import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  position: sticky;
  bottom: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;

  a {
    color: #000000;
    text-decoration: none;
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <h4>Some Company 2024</h4>
    </Wrapper>
  );
}
