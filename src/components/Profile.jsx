import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import { DiReact, DiJavascript1,  } from "react-icons/di";
import { SiChakraui, SiPhp, SiLaravel } from "react-icons/si";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Container maxW="container.xl">
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "100vh", lg: "100vh", xl: "100vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          skills
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="20vh"
            w="20vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiJavascript1} w="24" h="24"></Icon>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Javascript
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiReact} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" as={SiPhp} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              PHP
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" as={SiLaravel} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Laravel
            </Text>
          </Flex>
          

        </Flex>
      </Box>
    </Flex>
    </Container>
  );
}

export default Profile;
