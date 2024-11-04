import React from "react"
import { Button, Link as A } from "@chakra-ui/react"
import Link from "next/link"

type Props = {
  label: string
  href: string
  height?: string
  width?: string
  border?: string
  borderColor?: string
  bgColor?: string
  color?: string
  size?: "sm" | "md" | "lg" | "xs"
  variant?: string
}

export const LinkButton: React.FC<Props> = ({
  label,
  href,
  height,
  width,
  border,
  borderColor,
  bgColor = "teal.500",
  color = "white",
  size = "lg",
  variant,
}) => {
  return (
    <Link href={href} passHref>
      <A style={{ textDecoration: "none" }}>
        <Button
          size={size}
          {...{ color, bgColor, height, width, border, borderColor, variant }}
        >
          {label}
        </Button>
      </A>
    </Link>
  )
}
