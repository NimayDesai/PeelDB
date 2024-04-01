import { useApolloClient } from "@apollo/client";
import { Box, Button, Flex, HStack, Heading, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from 'next/link';
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLogoutMutation, useMeQuery } from "../gql/generated/graphql";
import { isServer } from "../utils/isServer";
import { DarkModeSwitch } from "./DarkModeSwitch";


export const NavBar = () => {
    const [domLoaded, setDomLoaded] = useState(false);
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
                    <NextLink href={"/account-settings"}>
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

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded ?
                <Flex
                    as="nav"
                    align="center"
                    mb={8}
                    p={8}
                    bg={["primary.500", "primary.500", "transparent", "transparent"]}
                >
                    <chakra.span as={HStack} bgGradient="linear(to-br, #74d680, #378b29)" bgClip="text">
                        <Heading size={"xl"} mr={4} color={{ base: "white", md: "green" }}>
                            {' '}
                            PeelDB{' '}</Heading>
                        <Image src={"/icons8-school-101.png"} alt="SchoolDB" width={50} height={50} />
                    </chakra.span>{' '}
                    <Flex ml="auto">
                        <Box
                            flexBasis={{ base: "100%", md: "auto" }}
                        >
                            <HStack
                                spacing={8}
                                align="center"
                                justify={["center", "space-between", "flex-end", "flex-end"]}
                                direction={["column", "row", "row", "row"]}
                                pt={[4, 4, 0, 0]}
                            >
                                <Box flexBasis={{ base: "100%", md: "auto" }} display={{ base: "none", md: "block" }}>
                                    <HStack spacing={8}>
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
                                        <NextLink href="/app">
                                            <Link size={"4xl"}>
                                                <Text display="block" size="xl">
                                                    App
                                                </Text>
                                            </Link>
                                        </NextLink>
                                        <NextLink href="/help">
                                            <Link size={"4xl"}>
                                                <Text display="block" size="xl">
                                                    Help
                                                </Text>
                                            </Link>
                                        </NextLink>
                                        <NextLink href="/about">
                                            <Link size={"4xl"}>
                                                <Text display="block" size="xl">
                                                    About
                                                </Text>
                                            </Link>
                                        </NextLink>
                                        {body}

                                    </HStack>
                                </Box>

                                <DarkModeSwitch />
                                <Box display={{ base: "block", md: "none" }}>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            aria-label="Options"
                                            icon={<GiHamburgerMenu />}
                                            transition="all 0.2s"
                                            size="md"
                                            bg="gray.900"
                                        />
                                        <MenuList fontSize="sm">
                                            {data?.me ?
                                                <>
                                                    <MenuItem>
                                                        <Button>
                                                            <NextLink href="/">
                                                                <Link size={"4xl"}>
                                                                    <Text display="block" size="xl">
                                                                        Home
                                                                    </Text>
                                                                </Link>
                                                            </NextLink>
                                                        </Button></MenuItem>
                                                    <MenuItem>
                                                        <Button>
                                                            <NextLink href="/help">
                                                                <Link size={"4xl"}>
                                                                    <Text display="block" size="xl">
                                                                        Help
                                                                    </Text>
                                                                </Link>
                                                            </NextLink>
                                                        </Button>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <Button>
                                                            <NextLink href="/about">
                                                                <Link size={"4xl"}>
                                                                    <Text display="block" size="xl">
                                                                        About
                                                                    </Text>
                                                                </Link>
                                                            </NextLink>
                                                        </Button>
                                                    </MenuItem>
                                                </>
                                                :
                                                <>
                                                    <MenuItem>
                                                        <NextLink href="/">
                                                            <Link size={"4xl"}>
                                                                <Text display="block" size="xl">
                                                                    Home
                                                                </Text>
                                                            </Link>
                                                        </NextLink>
                                                    </MenuItem>
                                                    <MenuDivider />
                                                    <MenuItem>
                                                        <NextLink href="/help">
                                                            <Link size={"4xl"}>
                                                                <Text display="block" size="xl">
                                                                    Help
                                                                </Text>
                                                            </Link>
                                                        </NextLink>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <NextLink href="/about">
                                                            <Link size={"4xl"}>
                                                                <Text display="block" size="xl">
                                                                    About
                                                                </Text>
                                                            </Link>
                                                        </NextLink>
                                                    </MenuItem>
                                                </>}
                                            {data?.me ?
                                                <>
                                                    <MenuItem>
                                                        <NextLink href="/create-organization">
                                                            <Link ml="auto">
                                                                <Button ml={"auto"}>Create Organization</Button>
                                                            </Link>
                                                        </NextLink>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <NextLink href="/account-settings">
                                                            <Link ml="auto">
                                                                <Button ml={"auto"}>Account Settings</Button>
                                                            </Link>
                                                        </NextLink>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <Button
                                                            onClick={async () => {
                                                                await logout();
                                                                await apolloClient.resetStore();
                                                            }}
                                                            isLoading={logoutLoading}
                                                            size="md"
                                                            rounded="md"
                                                            color={["primary.500", "primary.500", "white", "white"]}
                                                            bg={["white", "white", "primary.500", "primary.500"]}
                                                            _hover={{
                                                                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                                                            }}
                                                        >
                                                            Logout
                                                        </Button>
                                                    </MenuItem>
                                                </> : null}
                                            <MenuDivider />
                                            {!data?.me ? <>
                                                <MenuItem>
                                                    <NextLink href="/login">
                                                        <Link size={"4xl"}>
                                                            <Text display="block" size="xl">
                                                                Login
                                                            </Text>
                                                        </Link>
                                                    </NextLink>
                                                </MenuItem>
                                                <MenuDivider />
                                                <MenuItem>
                                                    <NextLink href="/register">
                                                        <Link size={"4xl"}>
                                                            <Text display="block" size="xl">
                                                                Register
                                                            </Text>
                                                        </Link>
                                                    </NextLink>
                                                </MenuItem></> : null}
                                        </MenuList>
                                    </Menu>
                                </Box>

                            </HStack>
                        </Box>
                    </Flex>
                </Flex>
                :
                null}
        </>
    );
};