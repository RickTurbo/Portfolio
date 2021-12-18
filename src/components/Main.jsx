import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Circle,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
  fadeInRight,
  fadeInUp,
  MotionBox,
  MotionContainer,
  MotionFlex,
  MotionHeading,
} from "../animations/variants";
import Lozano from "../assets/Lozano.JPG";

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
    transition: { duration: 1, ...transition, type: "spring", bounce: 0.4 },
  },
};

function Main() {
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
          <MotionBox mt={isNotSmallerScreen ? "0" : 16}>
            <MotionBox>
              <MotionBox
                fontSize={{
                  sm: "3xl",
                  md: "5xl",
                  lg: "5xl",
                  xl: "5xl",
                  base: "3xl",
                }}
                fontWeight="semibold"
                variants={fadeInRight}
              >
                Hi, I am
              </MotionBox>
              <MotionHeading
                bgClip="text"
                fontSize={{
                  sm: "4xl",
                  md: "7xl",
                  lg: "7xl",
                  xl: "7xl",
                  base: "4xl",
                }}
                color="blue.400"
                fontWeight="extrabold"
                bgGradient="linear(to-r, cyan.400,blue.500,purple.600)"
              >
                <MotionFlex variants={Name}>
                  <MotionBox variants={letter}>K</MotionBox>
                  <MotionBox variants={letter}>o</MotionBox>
                  <MotionBox variants={letter}>j</MotionBox>
                  <MotionBox variants={letter}>i</MotionBox>
                  <MotionBox variants={letter}>m</MotionBox>
                  <MotionBox variants={letter}>a</MotionBox>
                  <MotionBox variants={letter} mr={10}></MotionBox>
                  <MotionBox variants={letter}>R</MotionBox>
                  <MotionBox variants={letter}>i</MotionBox>
                  <MotionBox variants={letter}>k</MotionBox>
                  <MotionBox variants={letter}>u</MotionBox>
                  <MotionBox variants={letter}>t</MotionBox>
                  <MotionBox variants={letter}>o</MotionBox>
                </MotionFlex>
              </MotionHeading>
            </MotionBox>
          </MotionBox>

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

      <Heading mb="4">Work</Heading>
      <Box mb={8}>
        <Divider w={52} color="blue.300" />
      </Box>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap={6}
      >
        <Box>
          <Image w="100%" src={Lozano} borderRadius="lg" />
          <Accordion allowToggle mt={5}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="blue.300"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    textAlign="center"
                    fontSize="xl"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    fontWeight="extrabold"
                  >
                    Hirving Lozano 11
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">MEXICO</Box>
                  <Box pr="4">1995</Box>
                  <Box>07/30</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          mt={{
            sm: "10",
            md: "0",
            lg: "0",
            xl: "0",
            base: "10",
          }}
        >
          <Image w="100%" src={Lozano} borderRadius="lg" />
          <Accordion allowToggle mt={5}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="blue.300"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    textAlign="center"
                    fontSize="xl"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    fontWeight="extrabold"
                  >
                    Hirving Lozano 11
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">MEXICO</Box>
                  <Box pr="4">1995</Box>
                  <Box>07/30</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          mt={{
            sm: "10",
            md: "0",
            lg: "0",
            xl: "0",
            base: "10",
          }}
        >
          <Image w="100%" src={Lozano} borderRadius="lg" />
          <Accordion allowToggle mt={5}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="blue.300"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    textAlign="center"
                    fontSize="xl"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    fontWeight="extrabold"
                  >
                    Hirving Lozano 11
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">MEXICO</Box>
                  <Box pr="4">1995</Box>
                  <Box>07/30</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Grid>
    </MotionContainer>
  );
}

export default Main;
