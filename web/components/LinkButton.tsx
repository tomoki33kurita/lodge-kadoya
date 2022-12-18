import React from "react";
import { Button, Link as A } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  height?: string;
  width?: string;
  border?: string;
  borderColor?: string;
  bgColor?: string;
  color?: string;
};

export const LinkButton: React.FC<Props> = ({
  label,
  href,
  height,
  width,
  border,
  borderColor,
  bgColor = "teal.500",
  color = "white",
}) => {
  return (
    <Link href={href} passHref>
      <A style={{ textDecoration: "none" }}>
        <Button
          size={"lg"}
          // @ts-ignore
          {...{ color, bgColor, height, width, border, borderColor }}
        >
          {label}
        </Button>
      </A>
    </Link>
  );
};
