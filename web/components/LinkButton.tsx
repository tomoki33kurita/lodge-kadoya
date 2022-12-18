import React from "react";
import { Button, Link as A } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export const LinkButton: React.FC<Props> = ({ label, href }) => {
  return (
    <Link href={href} passHref>
      <A style={{ textDecoration: "none" }}>
        <Button color={"white"} bgColor={"teal.500"} size={"lg"}>
          {label}
        </Button>
      </A>
    </Link>
  );
};
