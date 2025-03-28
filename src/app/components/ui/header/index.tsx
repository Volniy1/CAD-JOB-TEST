"use client";

import Link from "next/link";
import { Button, Group, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import styled from "styled-components";

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

  .mantine-Button-root {
    transition: all 0.2s ease;

    &:hover {
      background-color: #4680ff;
    }
    &:active {
      background-color: #325bff;
      transform: translateY(3px);
    }
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <h3>COMPANY LOGO</h3>
      </Link>
      <Link href="/contact">
        <Button variant="filled" color="indigo" size="compact-md" radius="sm">
          <Group justify="space-between">
            <Text fw={300} c={"white"}>
              Contact us
            </Text>
            <IconMail color="white" stroke={1.5} size={18} />
          </Group>
        </Button>
      </Link>
    </StyledHeader>
  );
}
