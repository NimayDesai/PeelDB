import React, { useEffect, useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Heading, chakra } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from "../gql/generated/graphql";
import { CgProfile } from "react-icons/cg";
import { useApolloClient } from "@apollo/client";
import { isServer } from "../utils/isServer";



export const NavBar = (props: any) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded ?
                <NavBarContainer {...props}>
                    <chakra.span bgGradient="linear(to-br, #74d680, #378b29)" bgClip="text">
                        <Heading size={"xl"}>
                            {' '}
                            SchoolDB{' '}</Heading>
                    </chakra.span>{' '}
                    <Flex ml="auto">
                        <MenuLinks />
                    </Flex>
                </NavBarContainer>
                :
                null}
        </>
    );
};


const MenuLinks = ({ isOpen }: any) => {
    const [logout, { loading: logoutLoading }] = useLogoutMutation();
    const { loading, data } = useMeQuery({
        skip: isServer(),
    });
    const apolloClient = useApolloClient();
    let body = null;

    if (loading) {

    }
    else if (!data?.me) {
        body = (
            <>
                <NextLink href="/login">
                    <Link size={"4xl"}>
                        <Text display="block" size="xl">
                            Login
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href="/register">
                    <Link size={"4xl"}>
                        <Text display="block" size="xl">
                            Register
                        </Text>
                    </Link>
                </NextLink>
            </>
        )
    } else {
        body = (
            <Stack direction={"row"} align={"center"} spacing={4}>
                <Box>
                    <NextLink href={"/change-info"}>
                        <Link>
                            {data.me.username}
                        </Link>
                    </NextLink>
                </Box>
                <Box><CgProfile size={40} /></Box>
                <Button
                    onClick={async () => {
                        await logout();
                        await apolloClient.resetStore();
                    }}
                    isLoading={logoutLoading}
                    size="md"
                    ml={2}
                    rounded="md"
                    color={["primary.500", "primary.500", "white", "white"]}
                    bg={["white", "white", "primary.500", "primary.500"]}
                    _hover={{
                        bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                    }}
                >
                    Logout
                </Button>
            </Stack>
        )
    }
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                {data?.me ? <NextLink href="/create-organization">
                    <Link ml="auto">
                        <Button ml={"auto"}>Create Organization</Button>
                    </Link>
                </NextLink> : null}
                <NextLink href="/">
                    <Link size={"4xl"}>
                        <Text display="block" size="xl">
                            Home
                        </Text>
                    </Link>
                </NextLink>
                {body}
                <DarkModeSwitch />

            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }: any) => {
    return (
        <Flex
            as="nav"
            align="center"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    );
};