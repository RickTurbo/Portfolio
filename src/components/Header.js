import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { fadeInUp, MotionBox, MotionContainer } from "../animations/variants";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const Name = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition, type: "spring", bounce: 0.6 },
  },
};

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <MotionContainer maxW="container.xl" initial="hidden" animate="visible">
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
          <Box mt={isNotSmallerScreen ? "0" : 16}>
            <MotionBox variants={fadeInUp}>
              <MotionBox fontSize="5xl" fontWeight="semibold">
                Hi, I am
              </MotionBox>
              <MotionBox
                fontSize="7xl"
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
                bgClip="text"
              >
                Rikuto Kojima
              </MotionBox>
            </MotionBox>
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
    </MotionContainer>
  );
}

export default Header;
