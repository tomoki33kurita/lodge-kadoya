import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";

const Facility = () => {
  return (
    <div>
      <Head>
        <title>館内施設</title>
      </Head>

      <main>
        <Center py={4}>
          <Box as={"h1"} fontSize={"28px"}>
            館内施設
          </Box>
        </Center>
        <Center>全館でWi-Fiをご利用いただけます。</Center>
        <Center>
          <Box>
            <Center as={"h2"} fontSize={"24px"}>
              玄関
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/entrance.jpg"}
                alt={"entrance"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              フロント
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/front.jpg"}
                alt={"front"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              フロントロビー
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/frontLobby.jpg"}
                alt={"frontLobby"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              お部屋
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/room.jpg"}
                alt={"room"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              食堂
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/foodCourt.jpg"}
                alt={"foodCourt"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              食堂ロビー
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/oldFront.jpg"}
                alt={"oldFront"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              乾燥室
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/dryingRoom.jpg"}
                alt={"dryingRoom"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              スキー・スノーボード置き場
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/skiItemArea.jpg"}
                alt={"skiItemArea"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              お手洗い
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/wc.jpg"}
                alt={"wc"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              お風呂
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/bath.jpg"}
                alt={"bath"}
                width={820}
                height={540}
              />
            </Center>
            <Center as={"h2"} fontSize={"24px"}>
              駐車場
            </Center>
            <Center mb={2}>
              <Image
                src={"/facility/parkingSpace.jpg"}
                alt={"parkingSpace"}
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

export default Facility;
