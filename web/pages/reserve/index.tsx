import Head from "next/head";
import {
  Center,
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LinkButton } from "../../components/LinkButton";
import Axios from "axios";

const SUNDAY = 0;
const SATURDAY = 6;
const CHECKIN_DATE_CLASS_NAME = "react-calendar__check_in_day";

const Reserve: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<undefined | string>(undefined);
  const { handleSubmit, register, watch } = useForm();
  const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  });
  const inputOfEmail = watch("email");

  const handleForm = async (values: any) => {
    const {
      name,
      kana,
      address,
      tel,
      email,
      checkInDate,
      numberOfDays,
      adult,
      child,
      infantWithMeals,
      infant,
      remarks,
    } = values;
    const res = await axios.post("/api/sendMail", {
      name,
      kana,
      address,
      tel,
      email,
      checkInDate,
      numberOfDays,
      adult,
      child,
      infantWithMeals,
      infant,
      remarks,
    });
    console.log({ res });
    console.log({ values });
  };
  const canEntryReserve = inputOfEmail && checkInDate;
  return (
    <div>
      <Head>
        <title>ご予約 - 栂池ロッヂかどや</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center py={4}>
          <Box as={"h1"} fontSize={"28px"}>
            ご予約
          </Box>
        </Center>
        <Center my={3} mx={"auto"} width={"80%"}>
          <form onSubmit={handleSubmit(handleForm)} style={{ width: "100%" }}>
            <FormControl>
              <Box width={"100%"} mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  お名前
                </FormLabel>
                <Input
                  id={"name"}
                  placeholder={"山田太郎"}
                  {...register("name")}
                />
              </Box>
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  ふりがな
                </FormLabel>
                <Input
                  id={"kana"}
                  placeholder={"やまだたろう"}
                  {...register("kana")}
                />
              </Box>
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  ご住所
                </FormLabel>
                <Input
                  id={"address"}
                  placeholder={"長野県小谷村千国乙12840-1"}
                  {...register("address")}
                />
              </Box>
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  電話番号
                </FormLabel>
                <Input
                  id={"tel"}
                  placeholder={"090-1234-5678"}
                  {...register("tel")}
                />
              </Box>
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  メールアドレス
                </FormLabel>
                <Input
                  id={"email"}
                  placeholder={"kadoya@gmail.com"}
                  {...register("email")}
                />
              </Box>
              {/* <FormLabel mb={1}>メールアドレス(再入力)</FormLabel>
              <Input
                id={"re-email"}
                placeholder={"kadoya@gmail.com"}
                {...register("name")}
              /> */}
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  チェックインご希望日
                </FormLabel>
                <Box>カレンダーから選択してください</Box>
                <Box color="red">空室状況をご確認の上お申し込みください。</Box>
                <Center mt={3}>
                  <Center mr={2}>
                    <Box
                      style={{
                        background: "pink",
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    />
                    <Box>満室</Box>
                  </Center>
                  <Center>
                    <Box
                      style={{
                        background: "skyblue",
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    />
                    <Box>残りわずか</Box>
                  </Center>
                </Center>
                <Center>
                  <Calendar
                    calendarType={"US"}
                    formatDay={(_, date) => dayjs(date).format("D")}
                    tileClassName={(a) => {
                      const tileOfDate = dayjs(a.date).format("YYYY/MM/DD");
                      const tileOfDay = dayjs(a.date).day();
                      switch (tileOfDate) {
                        case checkInDate:
                          return CHECKIN_DATE_CLASS_NAME;
                        case "2023/01/09":
                        case "2023/02/11":
                        case "2023/02/23":
                        case "2023/03/21":
                          return "react-calendar__national__holiday";
                        case "2022/12/30":
                        case "2022/12/31":
                        case "2023/01/01":
                        case "2023/01/02":
                        case "2023/01/07":
                        case "2023/01/08":
                          return "react-calendar__full";
                        case "2022/12/29":
                          return "react-calendar__few";
                      }
                      switch (tileOfDay) {
                        case SATURDAY:
                          return checkInDate === tileOfDate
                            ? CHECKIN_DATE_CLASS_NAME
                            : "react-calendar__saturday";
                        case SUNDAY:
                          return checkInDate === tileOfDate
                            ? CHECKIN_DATE_CLASS_NAME
                            : "react-calendar__sunday";
                      }
                      return "";
                    }}
                    onChange={(e: Date) => {
                      //
                      setCheckInDate(dayjs(e).format("YYYY/MM/DD"));
                    }}
                  />
                </Center>
                <Input
                  value={checkInDate}
                  id={"checkInDate"}
                  {...register("checkInDate")}
                />
              </Box>
              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  宿泊日数
                </FormLabel>
                <Box>{checkInDate} から、何泊されるか選択してください。</Box>
                <Select id={"numberOfDays"} {...register("numberOfDays")}>
                  <option value={1}>1泊</option>
                  <option value={2}>2泊</option>
                  <option value={3}>3泊</option>
                  <option value={4}>4泊</option>
                  <option value={5}>5泊</option>
                </Select>
              </Box>
              <Box mb={5}>
                <Box fontSize={"18px"} fontWeight={"bold"}>
                  宿泊人数
                </Box>
                <FormLabel mb={1}>大人(中学生以上)</FormLabel>
                <Select id={"adult"} {...register("adult")} defaultValue={1}>
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人</option>
                  <option value={6}>6人</option>
                  <option value={7}>7人</option>
                  <option value={8}>8人</option>
                  <option value={9}>9人</option>
                  <option value={10}>10人</option>
                </Select>
                <FormLabel mb={1}>小学生</FormLabel>
                <Select id={"child"} {...register("child")} defaultValue={0}>
                  <option value={0}>0人</option>
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人</option>
                </Select>
                <FormLabel mb={1}>幼児(食事有)</FormLabel>
                <Select
                  id={"infantWithMeals"}
                  {...register("infantWithMeals")}
                  defaultValue={0}
                >
                  <option value={0}>0人</option>
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人</option>
                </Select>
                <FormLabel mb={1}>幼児(食事無)</FormLabel>
                <Select id={"infant"} {...register("infant")} defaultValue={0}>
                  <option value={0}>0人</option>
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人</option>
                </Select>
              </Box>

              <Box mb={5}>
                <FormLabel mb={1} fontWeight={"bold"}>
                  備考欄
                </FormLabel>
                <Textarea id={"remarks"} {...register("remarks")} rows={5} />
              </Box>
              {/* <Box>
                早朝チェックインも承りますので、お気軽にお問合せください。
              </Box> */}
              <Center>
                {!canEntryReserve && (
                  <Box color={"red.500"}>
                    <Box as={"span"} fontWeight={"bold"}>
                      メールアドレス
                    </Box>
                    、
                    <Box as={"span"} fontWeight={"bold"}>
                      チェックインご希望日
                    </Box>
                    の記入に不備がないかご確認ください。
                  </Box>
                )}
              </Center>
              <Center my={4}>
                <Button
                  disabled={!canEntryReserve}
                  type={"submit"}
                  bgColor={"orange.200"}
                >
                  予約を申し込む
                </Button>
              </Center>
            </FormControl>
          </form>
        </Center>
        <Center mb={6}>
          <LinkButton href={"/price"} label={"料金表"} />
        </Center>
      </main>
    </div>
  );
};

export default Reserve;
