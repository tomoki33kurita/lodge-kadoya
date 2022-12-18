import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { LinkButton } from "../components/LinkButton";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>栂池ロッヂかどや</title>
      </Head>
      <main>
        <Center
          // mt={0}
          minHeight={"400px"}
          bgImage={"url('/morning_kadoya1.jpeg')"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        />

        <Center my={5}>
          <Box>
            <Box my={4}>
              <LinkButton
                href={"/guidance"}
                label={"ご案内"}
                height={"72px"}
                width={"300px"}
                border={"2px"}
                color={"#2C7A7B"}
                borderColor={"#2C7A7B"}
                bgColor={"#E6FFFA"}
              />
            </Box>
            <Box my={4}>
              <LinkButton
                href={"/cooking"}
                label={"お料理"}
                height={"72px"}
                width={"300px"}
                border={"2px"}
                color={"#2C7A7B"}
                borderColor={"#2C7A7B"}
                bgColor={"#E6FFFA"}
              />
            </Box>
            <Box my={4}>
              <LinkButton
                href={"/price"}
                label={"料金表"}
                height={"72px"}
                width={"300px"}
                border={"2px"}
                color={"#2C7A7B"}
                borderColor={"#2C7A7B"}
                bgColor={"#E6FFFA"}
              />
            </Box>
            <Box my={5}>
              <LinkButton
                href={"/reserve"}
                label={"ご予約"}
                height={"72px"}
                width={"300px"}
                border={"2px"}
                color={"#2C7A7B"}
                borderColor={"#2C7A7B"}
                bgColor={"#E6FFFA"}
              />
            </Box>
            <Box my={4}>
              <LinkButton
                href={"/facility"}
                label={"館内施設"}
                height={"72px"}
                width={"300px"}
                border={"2px"}
                color={"#2C7A7B"}
                borderColor={"#2C7A7B"}
                bgColor={"#E6FFFA"}
              />
            </Box>
          </Box>
        </Center>
      </main>
    </div>
  );
};

export default Home;
