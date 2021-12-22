import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
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

import Napoli_1 from "../assets/Napoli_1.jpg";
import Napoli_2 from "../assets/Napoli_2.jpg";
import Todo from "../assets/Todo.jpg";
import Weather from "../assets/Weather.jpg";

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
            boxSize="300px"
            src={Napoli_1}
            ml={"20"}
          />
        </Flex>
      </Stack>

      <MotionHeading variants={fadeInRight} mb="4">
        Works
      </MotionHeading>
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
        <MotionBox variants={fadeInUp}>
          <Image
            w="100%"
            src={Napoli_1}
            borderRadius="lg"
            onClick={() =>
              window.open("https://optimistic-engelbart-dd3563.netlify.app")
            }
            _hover={{ opacity: 0.9 }}
          />
          <Accordion defaultIndex={[0]} allowMultiple mt={5}>
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
                    Napoliのサイト（新）
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">skil:</Box>
                  <Box pr="4">React, chakra-ui</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  私が好きなサッカーチームであるSSC NAPOLIの紹介サイトを作りました。このサイトはreact-router-domを利用したページ遷移や、framer-motionを利用したアニメーションの追加など、動きのあるサイトになるように工夫しました。思いついたことをその都度追加していったので、とても勉強になりました。まだ作成途中なので、どんどんアップデートし続けていきたいと思います。
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MotionBox>
        <MotionBox
          mt={{
            sm: "10",
            md: "0",
            lg: "0",
            xl: "0",
            base: "10",
          }}
          variants={fadeInUp}
        >
          <Image
            w="100%"
            src={Napoli_2}
            borderRadius="lg"
            onClick={() =>
              window.open("https://quizzical-bartik-62de5a.netlify.app/")
            }
            _hover={{ opacity: 0.9 }}
          />
          <Accordion defaultIndex={[0]} allowMultiple mt={5} mt={5}>
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
                    Napoliのサイト(旧)
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">skil:</Box>
                  <Box pr="4">html, scss, javascript</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                Udemyで学びながら、初めてオリジナルサイトを作りました。全てが初めてだったので、原因不明のエラーなどがよく起こりとても苦戦しましたが、完成したときはとても達成感がありました。javascriptを利用してサイトを作ることも初めてだったので、なかなか理解できずに苦労しました。
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MotionBox>
        <MotionBox
          mt={{
            sm: "10",
            md: "0",
            lg: "0",
            xl: "0",
            base: "10",
          }}
          variants={fadeInUp}
        >
          <Image
            w="100%"
            src={Todo}
            borderRadius="lg"
            onClick={() =>
              window.open("https://adoring-meninsky-698127.netlify.app")
            }
            _hover={{ opacity: 0.9 }}
          />
          <Accordion defaultIndex={[0]} allowMultiple mt={5} mt={5}>
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
                    Todo App
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">skil: </Box>
                  <Box pr="4">React, chakra-ui</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  初めてのchakra-uiを利用したアプリだったので、積極的にいろいろな機能を追加しました。
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MotionBox>
        <Box
          mt={{
            sm: "10",
            md: "0",
            lg: "0",
            xl: "0",
            base: "10",
          }}
        >
          <Image
            w="100%"
            src={Weather}
            borderRadius="lg"
            onClick={() =>
              window.open("https://blissful-mayer-f75f5e.netlify.app")
            }
            _hover={{ opacity: 0.9 }}
          />
          <Accordion defaultIndex={[0]} allowMultiple mt={5} mt={5}>
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
                    Soccer Weather
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex color="blue.300" justifyContent="center">
                  <Box pr="4">skil:</Box>
                  <Box pr="4">React, chakra-ui, API</Box>
                </Flex>
                <Box pt="4" color="blue.700">
                  APIを使った情報の取得の方法を学ぶために、OpenWeatherのAPIを利用してWebアプリを作りました。私はサッカーが好きなので、サッカーが盛んな国々を選び、情報を取得しました。
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
