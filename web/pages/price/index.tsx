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
} from "@chakra-ui/react"
import Head from "next/head"
import { LinkButton } from "../../components/LinkButton"

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
              2025/2026シーズンのご予約を受け付けております
            </Box>
            <Box mb={3}>※以下の料金表は2025~2026年シーズンです(税込価格)</Box>
            <Box mb={3} color={"blue.700"} fontWeight={"bold"}>
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
                    (12.27~1.3)
                  </Td>
                  <Td>
                    連休
                    <br />
                    (1.10,11)
                    <br />
                    (2.21,22)
                    <br />
                    (3.20,21)
                  </Td>
                  <Td>
                    その他
                    <br />
                    平日,週末
                  </Td>
                </Tr>
                <Tr>
                  <Td>大人</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>10,500</Td>
                  <Td isNumeric>10,300</Td>
                  <Td isNumeric>10,000</Td>
                </Tr>
                <Tr>
                  <Td>小学生</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>9,500</Td>
                  <Td isNumeric>9,300</Td>
                  <Td isNumeric>9,000</Td>
                </Tr>
                <Tr>
                  <Td>幼児</Td>
                  <Td>二食付</Td>
                  <Td isNumeric>5,000</Td>
                  <Td isNumeric>5,000</Td>
                  <Td isNumeric>5,000</Td>
                </Tr>
                <Tr>
                  <Td>幼児</Td>
                  <Td>食事無</Td>
                  <Td isNumeric>2,000</Td>
                  <Td isNumeric>2,000</Td>
                  <Td isNumeric>2,000</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
        <Center p={4}>
          <Box>
            <Box textAlign={"center"} mb={3}>
              宿限定の割り引きリフト券につきまして
            </Box>
            {/* <Box>※1泊2食付　栂池リフト1日券付 （1室2名様以上　お1人様あたり料金）</Box> */}
            <Box color={"red"} mb={2}>
              ※【宿限定の割り引きリフト券】もございます。ご希望のお客様はご相談ください！
            </Box>
            <Box color={"blue"} mb={2} fontSize={14}>
              ※【リフト券付きパック】はございませんので、ご了承ください。
            </Box>
            <Box fontSize={14}>
              ＊素泊まりをご希望のお客様は、ご予約時にお申し付けください。
            </Box>
          </Box>
        </Center>
        <Center mb={6}>
          <LinkButton href={"/reserve"} label={"ご予約へ"} />
        </Center>
      </main>
    </div>
  )
}

export default PriceSheet
