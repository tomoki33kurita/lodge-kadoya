import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import React from "react";

const Neighborhood: React.FC = () => {
  return (
    <div>
      <Head>
        <title>周辺情報-栂池ロッヂかどや</title>
      </Head>

      <main>
        <Center py={4}>
          <Box as={"h1"} fontSize={"28px"}>
            周辺情報
          </Box>
        </Center>
        <Center>
          <Box>
            <Center as={"h2"} fontSize={"24px"}>
              中央トリプルリフト(徒歩1分)
            </Center>
            <Center mb={2}>
              <Image
                src={"/neighborhood/toriplLift.jpg"}
                alt={"toriplLift"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              ゴンドラリフト(徒歩3分)
            </Center>
            <Center mb={2}>
              <Image
                src={"/neighborhood/gondola.jpg"}
                alt={"gondola"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              デイリーヤマザキ(徒歩2分)
            </Center>
            <Center mb={2}>
              <Image
                src={"/neighborhood/dailyYamazaki.jpg"}
                alt={"dailyYamazaki"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              栂池高原バス停(徒歩5分)
            </Center>
            <Center mb={2}>
              <Image
                src={"/neighborhood/busStop.jpg"}
                alt={"busStop"}
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

export default Neighborhood;
