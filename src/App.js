import { Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";
import { ClimbingBoxLoader, ClockLoader, PacmanLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <ClockLoader color={"#2ABAF1"} loading={loading} size={100} />
        </Flex>
      ) : (
        <VStack p={5}>
          <Header />
          <Main />
          <Profile />
        </VStack>
      )}
    </>
  );
}

export default App;
