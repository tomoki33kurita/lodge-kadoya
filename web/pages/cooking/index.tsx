import Head from "next/head";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Cooking: React.FC = () => {
  return (
    <div>
      <Head>
        <title>お料理 - ロッヂかどや</title>
      </Head>

      <main>
        <Center py={4}>
          <Box as={"h1"} fontSize={"28px"}>
            お料理
          </Box>
        </Center>
        <Center>
          <Box>
            <Center as={"h2"} fontSize={"24px"}>
              ご夕食の一例
            </Center>
            <Center mb={2}>
              <Image
                src={"/cook/cook1.jpg"}
                alt={"cook1"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              <Box>
                <Box>ささみのチーズかつ</Box>
                <Box>信州牛のたたき肉</Box>
                <Box>煮卵入り 信田煮</Box>
                <Box>野沢菜漬け</Box>
                <Box>鮭の陶板焼き</Box>
                <Box>信州そば</Box>
              </Box>
            </Center>
            <Center mb={2}>
              <Image
                src={"/cook/cook2.jpg"}
                alt={"cook2"}
                width={820}
                height={540}
              />
            </Center>
            <Center mb={2}>
              <Image
                src={"/cook/cook3.jpg"}
                alt={"cook3"}
                width={820}
                height={540}
              />
            </Center>
            <Center mb={2}>
              <Image
                src={"/cook/cook4.jpg"}
                alt={"cook4"}
                width={820}
                height={540}
              />
            </Center>
            <Center mb={2}>
              <Image
                src={"/cook/cook5.jpg"}
                alt={"cook5"}
                width={820}
                height={540}
              />
            </Center>
          </Box>
        </Center>
      </main>
    </div>
  );
};

export default Cooking;
