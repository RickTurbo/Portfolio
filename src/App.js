import { VStack } from "@chakra-ui/react";

import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";

function App() {
  return (
    <VStack p={5}>
      <Header />
      <Main />
      <Profile />
    </VStack>
  );
}

export default App;
