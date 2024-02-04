import React, { useEffect, useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Heading } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from "../gql/generated/graphql";
import { CgProfile } from "react-icons/cg";
import { useApolloClient } from "@apollo/client";
import { withApollo } from "../utils/withApollo";
import { isServer } from "../utils/isServer";



export const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {domLoaded ?
                <NavBarContainer {...props}>

                    <Heading size={"xl"}>SchoolDB</Heading>
                    <Flex ml="auto">
                        <MenuToggle toggle={toggle} isOpen={isOpen} />
                        <MenuLinks isOpen={isOpen} />
                    </Flex>
                </NavBarContainer>
                :
                null}
        </>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }: any) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
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

const MenuLinks = ({ isOpen }: any) => {
    const [logout, { loading: logoutLoading }] = useLogoutMutation();
    const { loading, error, data } = useMeQuery({
        skip: isServer(),
    });
    const apolloClient = useApolloClient();
    let body = null;

    if (loading) {

    }
    else if (!data?.me) {
        body = (
            <>
                <MenuItem to="/login">Login</MenuItem>
                <MenuItem to="/register">Register</MenuItem>
            </>
        )
    } else {
        body = (
            <Stack direction={"row"} align={"center"} spacing={4}>
                <Box>
                    {data.me.username}
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
                <MenuItem size isLast={false} to="/">Home</MenuItem>

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
            justify="space-between"
            wrap="wrap"
            w="100%"
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



