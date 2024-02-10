import React from "react";
import { Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

export const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
    return (
        <NextLink href={to}>
            <Link size={"4xl"}>
                <Text display="block" size="xl" {...rest}>
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
};
