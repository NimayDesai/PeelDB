import React from "react";
import { Link, Text, useColorMode } from "@chakra-ui/react";
import NextLink from 'next/link';

interface MenuItemProps {
    children: React.JSX.Element[] | React.JSX.Element | string | React.ReactElement | React.ReactElement[];
    isLast?: boolean;
    to?: string;
}

export const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <NextLink href={to}>
            <Link size={"4xl"}>
                <Text display="block" size="xl" {...rest} color={isDark ? "white" : "black"}>
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
};
