"use client";

import { Box, Center, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { arktypeResolver } from "@hookform/resolvers/arktype";
import { loginSchema } from "@/schema/auth";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: arktypeResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Login successful!\nEmail: ${data.email}\nPassword: ${data.password}`);
  };

  return (
    <Center height="100vh" width="full">
      <Box mx="auto" width="full" maxWidth="xl">
        <Image asChild mb="24">
          <NextImage src="/logo.svg" alt="Logo Image" width={150} height={150} />
        </Image>

        <Stack gapY={0} marginBottom="10">
          <Heading size="2xl" fontWeight="medium">
            Login To Dashboard
          </Heading>
          <Text color="fg.muted">Fill the below form to login.</Text>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack marginBottom="10">
            <Field label="Email Address" errorText={errors.email?.message}>
              <Input
                type="email"
                placeholder="sharukhkhan@example.com"
                {...register("email")}
                focusRingColor={errors.email ? "red.500" : "blue.500"} // red border on focus if error
              />
            </Field>

            <Field label="Password" errorText={errors.password?.message}>
              <PasswordInput
                placeholder="Enter your password"
                {...register("password")}
                focusRingColor={errors.password ? "red.500" : "blue.500"}
              />
            </Field>
          </Stack>

          <Button width="full" type="submit" fontWeight="semibold" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Box>
    </Center>
  );
}

export default LoginPage;
