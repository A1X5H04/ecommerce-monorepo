// import { Button } from "@/components/ui/button";
// import { Shell, SidebarProvider } from "@/components/layout/sidebar";
import { Sidebar } from "@/components/layout/sidebar";
import { Container, Button, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex height="full">
      <Sidebar />
      <Container>
      <h2>Hello World</h2>
      </Container>
    </Flex>
  );
}
