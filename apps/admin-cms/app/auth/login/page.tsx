import { Box, Center, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import NextImage from "next/image"

import { Field } from '@/components/ui/field'
import { PasswordInput } from '@/components/ui/password-input'
import { Button } from '@/components/ui/button'

function LoginPage() {
  return (

    <Center height="full" width="full">
      <Box mx="auto" width="full" maxWidth="xl">
        <Image asChild mb="24">
          <NextImage src="/logo.svg" alt="Logo Image" width={150} height={150} />
        </Image>

      <Stack gapY={0} marginBottom="10">
        <Heading size="2xl" fontWeight="medium">
          Login To Dashboard
        </Heading>
        <Text color="fg.muted">
          Fill the below form to login.
        </Text>
      </Stack>
      <Stack marginBottom="10">
        <Field label="Email Address">
          <Input type="email" placeholder='sharukhkhan@example.com' />
        </Field>
        <Field label="Password">
          <PasswordInput placeholder='sharukhkhan_chaddi_me_ghan' />
        </Field>
      </Stack>
        <Button width="full" type="submit" fontWeight="semibold">
          Login
        </Button>
      </Box>
    </Center>
  )
}

export default LoginPage