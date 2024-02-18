import { useApolloClient } from "@apollo/client";
import { Box, Button, Flex, HStack, Heading, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLogoutMutation, useMeQuery } from "../gql/generated/graphql";
import { isServer } from "../utils/isServer";
import { DarkModeSwitch } from "./DarkModeSwitch";


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


const MenuLinks = () => {
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
                <HStack spacing={8} display={{ base: "none", md: "block" }}>
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
                </HStack>
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
                        {body}

                    </HStack>
                </Box>
                <Box display={{ base: "block", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<GiHamburgerMenu />}
                            transition="all 0.2s"
                            size="md"
                            color="white"
                            variant="outline"
                            bg={useColorModeValue('gray.400', 'gray.800')}
                            _hover={{ bg: 'auto' }}
                            _focus={{ boxShadow: 'outline' }}
                        />
                        <MenuList fontSize="sm" zIndex={5}>
                            {data?.me ?
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
                                :
                                <MenuItem>
                                    <NextLink href="/">
                                        <Link size={"4xl"}>
                                            <Text display="block" size="xl">
                                                Home
                                            </Text>
                                        </Link>
                                    </NextLink></MenuItem>}
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
                <DarkModeSwitch />

            </HStack>
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