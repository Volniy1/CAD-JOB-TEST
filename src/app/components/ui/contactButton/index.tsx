import { Button, Group, Text } from "@mantine/core";
import styled from "styled-components";
import { IconMail } from "@tabler/icons-react";

export default function ContactButton({
  label,
  compact = false,
  isIcon = false,
  fw = 500,
  type = "button",
}: {
  label: string;
  compact?: boolean;
  isIcon?: boolean;
  type?: "button" | "submit";
  fw?: number;
}) {
  const Wrapper = styled.div`
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
  return (
    <Wrapper>
      <Button
        variant="filled"
        color="indigo"
        size={`${compact ? "compact-md" : "lg"}`}
        radius="sm"
        type={type}
      >
        <Group justify="space-between">
          <Text fw={fw} c={"white"}>
            {label}
          </Text>
          {isIcon ? (
            <IconMail color="white" stroke={1.5} size={18} />
          ) : (
            "".trim()
          )}
        </Group>
      </Button>
    </Wrapper>
  );
}
