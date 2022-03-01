import {
  Container,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { fadeInRight, fadeInUp, MotionFlex } from "../animations/variants";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container maxW="container.xl">
      <MotionFlex
        w="100%"
        mb={{
          sm: "10",
          md: "20",
          lg: "20",
          xl: "20",
          base: "10",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Spacer></Spacer>
        {/* <IconButton icon={<FaTwitter />} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton> */}
        <IconButton
          // ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/RickTurbo/Portfolio")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </MotionFlex>
    </Container>
  );
}

export default Header;
