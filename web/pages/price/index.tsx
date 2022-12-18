import {
  Center,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Link as A,
} from "@chakra-ui/react";
import Head from "next/head";
import { LinkButton } from "../../components/LinkButton";

const PriceSheet: React.FC = () => {
  return (
    <div>
      <Head>
        <title>栂池ロッヂかどや</title>
      </Head>

      <main>
        <Center py={4}>
          <Box as={"h1"} fontSize={"28px"}>
            料金表
          </Box>
        </Center>
        <Center>
          <Box p={4}>
            <Box
              as={"h2"}
              color={"pink.300"}
              fontSize={25}
              fontWeight={"bold"}
              textAlign={"center"}
              mb={3}
            >
              2022/2023シーズンのご予約を受け付けております
            </Box>
            <Box mb={3}>※以下の料金表は2022~2023年シーズンです(税込価格)</Box>
            <Box mb={3}>
              ※物価上昇などのため、値上げさせていただきます。何卒ご容赦ください。
            </Box>
          </Box>
        </Center>
        <Center mb={5}>
          <TableContainer>
            <Table variant="striped">
              {/* <Thead>
                  <Tr>
                    <Th>To convert</Th>
                  </Tr>
                </Thead> */}
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td>
                    年末年始
                    <br />
                    (12.29~1.3)
                  </Td>
                  <Td>
                    連休
                    <br />
                    (1.7,8)
                  </Td>
                  <Td>通常平日</Td>
                  <Td>通常週末</Td>
                </Tr>
                <Tr>
                  <Td>大人</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>9,300</Td>
                  <Td isNumeric>8,800</Td>
                  <Td isNumeric>8,300</Td>
                  <Td isNumeric>8,300</Td>
                </Tr>
                <Tr>
                  <Td>小学生</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>8,300</Td>
                  <Td isNumeric>7,800</Td>
                  <Td isNumeric>7,300</Td>
                  <Td isNumeric>7,300</Td>
                </Tr>
                <Tr>
                  <Td>幼児</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>4,600</Td>
                  <Td isNumeric>4,400</Td>
                  <Td isNumeric>4,000</Td>
                  <Td isNumeric>4,000</Td>
                </Tr>
                <Tr>
                  <Td>幼児</Td>
                  <Td>食事無</Td>
                  <Td isNumeric>1,800</Td>
                  <Td isNumeric>1,700</Td>
                  <Td isNumeric>1,700</Td>
                  <Td isNumeric>1,700</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
        <Center p={4}>
          <Box>
            <Box textAlign={"center"} mb={3}>
              リフト券付きパックにつきまして
            </Box>
            {/* <Box>※1泊2食付　栂池リフト1日券付 （1室2名様以上　お1人様あたり料金）</Box> */}
            <Box color={"red"} mb={2}>
              ※年末年始、連休は、【リフト券付きパック】のお取り扱いは致しませんので、予めご了承ください。
            </Box>
            <Box>
              ＊素泊まりをご希望のお客様は、ご予約時にお申し付けください。
            </Box>
          </Box>
        </Center>
        <Center mb={6}>
          <LinkButton href={"/reserve"} label={"ご予約へ"} />
        </Center>
      </main>
    </div>
  );
};

export default PriceSheet;
