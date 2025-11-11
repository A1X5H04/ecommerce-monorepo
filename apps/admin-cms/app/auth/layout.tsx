// This is a layout page, any page inside it will be share this layout, we use the {children} to pass the shared layout.


import { Box, Container, Flex, Image } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <Flex height="full">
            <Container flex={1}>
                {children}
            </Container>
            <Box position="relative" flex={1} bgColor="bg.muted">
                <Image position="absolute" inset="0" width="full" height="full" src="https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format" />
            </Box>

        </Flex>
    )
}

export default AuthLayout