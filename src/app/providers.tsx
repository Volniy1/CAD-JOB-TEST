"use client";

import styled from "styled-components";
import { Footer } from "./components/ui/footer";
import { Header } from "./components/ui/header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #ffffff7a;
  box-shadow: 0px 0px 7px 10px #ffffff7a;
`;
const ChildWrapper = styled.div`
  display: flex;
  min-height: 90vh;
`;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer />
    </Wrapper>
  );
}
