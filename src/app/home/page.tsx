"use client";

import { Container, Text, Grid, Flex, Group } from "@mantine/core";
import YouTubeEmbed from "../components/ui/youtube/index";
import HomeGrid from "../components/ui/homeGrid/index";
import Link from "next/link";
import styled from "styled-components";
import ContactButton from "../components/ui/contactButton";

const MainSection = styled.main`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 1.3;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;
const TitleWrapper = styled.div`
  height: 100px;
  text-align: center;
  align-content: center;
`;

export default function HomePage() {
  return (
    <MainSection>
      <Container size="lg" bg="#ffffff5ef">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group gap={10}>
              <Title>
                <h1>
                  Most important <br /> title on the page
                </h1>
              </Title>
              <Text size="md" mb="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis metus,
                vel suscipit nibh lacus tincidunt ante
              </Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <YouTubeEmbed />
          </Grid.Col>
        </Grid>
      </Container>
      <Container size="lg" w="100%">
        <TitleWrapper>
          <Title>
            <h2>Also very important title</h2>
          </Title>
        </TitleWrapper>
        <HomeGrid />
        <TitleWrapper>
          <Link href="/contact">
            <ContactButton label="Contact Us" />
          </Link>
        </TitleWrapper>
      </Container>
      <Container size="lg" w="100%">
        <TitleWrapper>
          <Title>
            <h3>Less important title</h3>
          </Title>
        </TitleWrapper>
        <Flex justify="center">
          <Link href="/contact">
            <ContactButton label="Contact Us" />
          </Link>
        </Flex>
      </Container>
    </MainSection>
  );
}
