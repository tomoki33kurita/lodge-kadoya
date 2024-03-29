import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Link as A,
  Show,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

type Props = {
  props?: any;
};

export const Header: React.VFC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const router = useRouter();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          栂池ロッヂかどや
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Hide below={"md"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href={"/guidance"} passHref>
            <A fontWeight={"bold"}>ご案内</A>
          </Link>
          <Link href={"/price"} passHref>
            <A fontWeight={"bold"}>料金表</A>
          </Link>
          <Link href={"/cooking"} passHref>
            <A fontWeight={"bold"}>お料理</A>
          </Link>
          <Link href={"/facility"} passHref>
            <A fontWeight={"bold"}>館内施設</A>
          </Link>
          <Link href={"/neighborhood"} passHref>
            <A fontWeight={"bold"}>周辺情報</A>
          </Link>
          {/* <Link href={"/contact"} passHref>
          <A fontWeight={'bold'}>お問い合わせ</A>
        </Link> */}
          <Link href={"/access"} passHref>
            <A fontWeight={"bold"}>アクセス</A>
          </Link>
        </Stack>
      </Hide>
      <Show below={"md"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Box>
            <Link href={"/guidance"} passHref>
              <A fontWeight={"bold"}>ご案内</A>
            </Link>
          </Box>
          <Box>
            <Link href={"/price"} passHref>
              <A fontWeight={"bold"}>料金表</A>
            </Link>
          </Box>
          <Box>
            <Link href={"/cooking"} passHref>
              <A fontWeight={"bold"}>お料理</A>
            </Link>
          </Box>
          <Box>
            <Link href={"/facility"} passHref>
              <A fontWeight={"bold"}>館内施設</A>
            </Link>
          </Box>
          <Box>
            <Link href={"/neighborhood"} passHref>
              <A fontWeight={"bold"}>周辺情報</A>
            </Link>
            {/* <Link href={"/contact"} passHref>
          <A fontWeight={'bold'}>お問い合わせ</A>
        </Link> */}
          </Box>
          <Box>
            <Link href={"/access"} passHref>
              <A fontWeight={"bold"}>アクセス</A>
            </Link>
          </Box>
        </Stack>
      </Show>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          onClick={() => router.push("/reserve")}
        >
          予約する
        </Button>
      </Box>
    </Flex>
  );
};
