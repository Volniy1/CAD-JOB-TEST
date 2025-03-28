"use client";
import { useForm } from "@mantine/form";
import { Grid, TextInput, Textarea } from "@mantine/core";
import styled from "styled-components";
import { useState } from "react";
import ContactButton from "../components/ui/contactButton";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const StyledForm = styled.form`
  .mantine-TextInput-root,
  .mantine-Textarea-root {
    margin-bottom: 1rem;
    position: relative;
  }

  .mantine-TextInput-label,
  .mantine-Textarea-label {
    color: #575757;
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    transition: all 0.2s ease;
    pointer-events: none;
    padding: 0 0.25rem;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .dirty {
    .mantine-TextInput-label,
    .mantine-Textarea-label {
      top: -1.5rem;
      left: 0;
      color: #000000;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 42px;
  letter-spacing: 10px;
  color: #000000;
`;
const SucsessTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 42px;
  letter-spacing: 5px;
  color: #000000;

  @media screen and (max-width: 400px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export default function ContactPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value ? null : "Message is required"),
    },
  });

  const [Message, setMessage] = useState("");

  const fetchSubmit = async () => {
    try {
      const response = await fetch("/api/contact", { method: "GET" });
      const result = await response.json();

      setMessage(result);
    } catch (error) {
      console.error("Error fetching last submission:", error);
    }
  };
  const handleSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("post:", result);
    fetchSubmit();
  };

  return (
    <Wrapper>
      {!!Message ? (
        <SucsessTitle>{Message}</SucsessTitle>
      ) : (
        <>
          <Title>Contact Form</Title>
          <StyledForm
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Name"
                  className={
                    !form.getInputProps("name").value ? "".trim() : "dirty"
                  }
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Email Address"
                  type="email"
                  className={
                    !form.getInputProps("email").value ? "".trim() : "dirty"
                  }
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  label="Write your message"
                  resize="vertical"
                  className={
                    !form.getInputProps("message").value ? "".trim() : "dirty"
                  }
                  {...form.getInputProps("message")}
                />
              </Grid.Col>
              <Grid.Col span={12} style={{ textAlign: "center" }}>
                <ContactButton label="Submit" type="submit" />
              </Grid.Col>
            </Grid>
          </StyledForm>
        </>
      )}
    </Wrapper>
  );
}
