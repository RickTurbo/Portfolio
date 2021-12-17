import {
  Container,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        {/* <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          im RickTurbo
        </Heading> */}

        <Spacer></Spacer>
        <IconButton icon={<FaTwitter />} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/RickTurbo")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header />
      {/* <Social /> */}
      <Profile />
    </VStack>
  );
}

export default App;
