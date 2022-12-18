import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

const SUNDAY = 0;
const SATURDAY = 6;

const Availabillity = () => {
  return (
    <div>
      <Head>
        <title>空室状況-栂池ロッヂかどや</title>
      </Head>

      <main>
        <Box as={"h1"} fontSize={"28px"} textAlign={"center"} pt={3}>
          空室情報
        </Box>
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
        <Center p={4}>
          <Box mx={1}>
            <Calendar
              defaultValue={dayjs("2022/12").toDate()}
              calendarType={"US"}
              formatDay={(_, date) => dayjs(date).format("D")}
              tileClassName={(a) => {
                const tileOfDate = dayjs(a.date).format("YYYY-MM-DD");
                switch (tileOfDate) {
                  case "2022-12-31":
                    return "react-calendar__full";
                }
                switch (tileOfDate) {
                  case "2022-12-29":
                  case "2022-12-30":
                    return "react-calendar__few";
                }

                const tileOfDay = dayjs(a.date).day();
                switch (tileOfDay) {
                  case SATURDAY:
                    return "react-calendar__saturday";
                  case SUNDAY:
                    return "react-calendar__sunday";
                }
                return "";
              }}
              activeStartDate={dayjs().toDate()}
            />
          </Box>
          <Box mx={1}>
            <Calendar
              defaultValue={dayjs("2023/01").toDate()}
              calendarType={"US"}
              formatDay={(_, date) => dayjs(date).format("D")}
              tileClassName={(a) => {
                const tileOfDate = dayjs(a.date).format("YYYY-MM-DD");
                switch (tileOfDate) {
                  case "2023-01-01":
                  case "2023-01-07":
                  case "2023-01-08":
                    return "react-calendar__full";
                  case "2023-01-09":
                    return "react-calendar__national__holiday";
                }
                const tileOfDay = dayjs(a.date).day();
                switch (tileOfDay) {
                  case SATURDAY:
                    return "react-calendar__saturday";
                  case SUNDAY:
                    return "react-calendar__sunday";
                }
                return "";
              }}
            />
          </Box>
        </Center>
        <Center p={4}>
          <Box mx={1}>
            <Calendar
              defaultValue={dayjs("2023/02").toDate()}
              calendarType={"US"}
              formatDay={(_, date) => dayjs(date).format("D")}
              tileClassName={(a) => {
                const tileOfDate = dayjs(a.date).format("YYYY-MM-DD");
                switch (tileOfDate) {
                  case "2023-02-11":
                  case "2023-02-23":
                    return "react-calendar__national__holiday";
                }
                const tileOfDay = dayjs(a.date).day();
                switch (tileOfDay) {
                  case SATURDAY:
                    return "react-calendar__saturday";
                  case SUNDAY:
                    return "react-calendar__sunday";
                }
                return "";
              }}
            />
          </Box>
          <Box mx={1}>
            <Calendar
              defaultValue={dayjs("2023/03").toDate()}
              calendarType={"US"}
              formatDay={(_, date) => dayjs(date).format("D")}
              tileClassName={(a) => {
                const tileOfDate = dayjs(a.date).format("YYYY-MM-DD");
                switch (tileOfDate) {
                  case "2023-03-21":
                    return "react-calendar__national__holiday";
                }

                const tileOfDay = dayjs(a.date).day();
                switch (tileOfDay) {
                  case SATURDAY:
                    return "react-calendar__saturday";
                  case SUNDAY:
                    return "react-calendar__sunday";
                }
                return "";
              }}
            />
          </Box>
        </Center>
      </main>
    </div>
  );
};

export default Availabillity;
