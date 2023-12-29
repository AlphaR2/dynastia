import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import Disconnected from "../components/Disconnected";
import NavBar from "@/components/Navbar";
import Connected from "@/components/Connected";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <div className="">
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* NavBar */}
          <NavBar />

          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
