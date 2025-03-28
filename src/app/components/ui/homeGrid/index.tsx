import { Grid, Stack, Text } from "@mantine/core";

export default function HomeGrid() {
  return (
    <Grid
      type="container"
      breakpoints={{
        xs: "100px",
        sm: "200px",
        md: "500px",
        lg: "600px",
        xl: "1000px",
      }}
      gutter={{ base: 25 }}
      align="center"
    >
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Stack gap={5}>
          <Text size="lg" fw={500}>
            Title
          </Text>
          <Text size="md" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
