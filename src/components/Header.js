import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            Rikuto Kojima
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            イタリアのサッカーチーム　SSCナポリのサイトを作りました
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("https://quizzical-bartik-62de5a.netlify.app/")
            }
          >
            Napoli
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="1g"
          // boxSize="300px"
          // src={}
        />
      </Flex>
    </Stack>
  );
}

export default Header;
