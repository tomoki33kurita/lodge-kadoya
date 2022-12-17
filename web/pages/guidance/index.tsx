import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const Guidance = () => {
  return (
    <div>
      <Head>
        <title>栂池ロッヂかどや</title>
      </Head>

      <main>
        <Box>
          <Center mb={2}>
            <Image
              src={"/guidance.jpeg"}
              alt={"guidance"}
              width={1024}
              height={680}
            />
          </Center>
          <Center px={10}>
            <Box my={5}>
              <Box mb={5}>
                <Box as={"p"}>当サイトをご覧下さりありがとうございます。</Box>
                <Box as={"p"}>
                  栂池ロッヂかどやは、1978年に創業の小さな民宿です。
                </Box>
                <Box as={"p"}>
                  お米やキャベツ、白菜、長ネギなど様々な食材を、春から秋にかけて自家製で栽培し、新鮮で自然な素材を生かした手作りのお食事をご提供させて頂きます。
                </Box>
              </Box>

              <Box mb={5}>
                <Box as={"p"}>
                  また栂池中央トリプルリフトの真横に宿を構えており、まさにゲレンデの中に宿があります。
                </Box>
                <Box as={"p"}>
                  乾燥室・屋内スキー・スノーボード置き場から直接ゲレンデへのアクセスが可能です。
                </Box>
                <Box as={"p"}>
                  最大10台分ほどの専用駐車場も完備しており、寒い冬でも車を降りてすぐに玄関に着くことができます。
                </Box>
                <Box as={"p"}>
                  ※満室具合によって、一部当館外の駐車場への駐車をお願いする場合もございます。
                </Box>
                <Box as={"p"}>
                  徒歩圏内にコンビニエンスストア（おみやげショップ兼）もあり、ゲレンデ外へのアクセスも抜群です。
                </Box>
              </Box>
              <Box as={"p"}>
                アットホームなおもてなしで、1日中スキー・スノーボードを楽しまれたいお客様が少しでもリラックスして頂けるよう、心を込めてご対応させて頂きます。
              </Box>
              <Box as={"p"}>ご来訪お待ちしております。</Box>
            </Box>
          </Center>
        </Box>
      </main>
    </div>
  );
};

export default Guidance;
