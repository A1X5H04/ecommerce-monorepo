import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

export function Sidebar() {
    return (
      <Box as="aside" borderRightWidth={1} height="full" width="72">
        <Box paddingBlock="6" paddingInline="4">
          <Heading size="lg">
            <Image src="logo.svg" alt="Logo Image" height={150} width={150} />
          </Heading>
        </Box>
        
        <SidebarMenuGroup />
      </Box>
    )
}


function SidebarMenuGroup() {
  return (
    <Box paddingBlock="6" paddingInline="4">
      <Heading size="sm" textTransform="capitalize">
        Menu
      </Heading>
    </Box>
  )
}