import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Grid,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    VStack,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';
import { Fragment } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';
import { Wrapper } from '../components/Wrapper';
import { useMeQuery } from '../gql/generated/graphql';
import { features, reviewData } from '../utils/data';


const Index = () => {
    // Get the current user
    const { data } = useMeQuery();
    const router = useRouter();

    // If the user is logged in to the application, automatically redirect to the home page
    if (data?.me) {
        router.push('/app');
    }

    return (
        <Wrapper variant='full'>
            <Fragment>
                <Flex>
                    <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14} textAlign={"center"}>
                        <Stack direction={{ base: 'column', md: 'row' }}>
                            <Stack direction="column" spacing={10}>
                                <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" >
                                    Have all your board's business partners in
                                    <chakra.span color={"green"}>
                                        {' '}
                                        One Place{' '}
                                    </chakra.span>{' '}
                                    with PeelDB
                                </chakra.h1>
                                <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize="lg"
                                    fontWeight="400"
                                    maxW="700px"
                                    textAlign={"center"}
                                >
                                    PeelDB allows you to add all the organizations you want for your school, and share the information with other schools, while accessing other schools best organizations by starring them
                                </Text>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 5, md: 10 }}
                                    flexWrap="wrap"
                                >
                                    {/* Map through all the features in the data.tsx file and display them */}
                                    {features.map((feature, index) => (
                                        <Stack key={index} direction={{ base: 'row', md: 'column' }} spacing={2}>
                                            <Stack direction="column" spacing={2}>
                                                <Text fontSize="md" fontWeight="500">
                                                    {feature.title}
                                                </Text>
                                                <Text fontSize="sm" color="gray.400" maxW={{ base: '100%', md: '200px' }}>
                                                    {feature.detail}
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    spacing={{ base: 0, sm: 2 }}
                                    flexWrap="wrap"
                                >
                                    <Flex>
                                        <NextLink href={data?.me ? "/app" : "/login"}>
                                            <Link >
                                                <Button
                                                    h={12}
                                                    px={6}
                                                    color="white"
                                                    colorScheme='green'
                                                    _hover={{ bgGradient: 'linear(to-br, #74d680, #378b29)' }}
                                                    variant="solid"
                                                    size="lg"
                                                    rounded="md"
                                                    fontWeight="bold"
                                                    mb={{ base: 2, sm: 0 }}
                                                >

                                                    <chakra.span>{data?.me ? "Go To app " : "Get Started"}</chakra.span>
                                                </Button>
                                            </Link>
                                        </NextLink>
                                    </Flex>
                                    <Link href='https://github.com/NimayDesai/SchoolOrganizationDB' mr={"auto"}>
                                        <Flex
                                            border="1px solid"
                                            borderColor="gray.700"
                                            justifyContent="center"
                                            ml={2}
                                            p={4}
                                            px={4}
                                            lineHeight={1.18}
                                            rounded="lg"
                                            boxShadow="md"
                                            fontWeight="bold"
                                            alignItems="center"
                                            as={Link}
                                        >
                                            <Icon as={FaGithub} h={4} w={4} />
                                            <Text ml={2}>Github</Text>
                                        </Flex>
                                    </Link>
                                </Stack>
                                <Heading size={"2xl"}>What our customers think of us</Heading>
                                <Grid templateColumns={"repeat(3, 1fr)"} gap={48} >
                                    {/* Map through all of the reviews displaying the avatar, description, name and position */}
                                    {reviewData.map((data, index) => (
                                        <Box maxW="399px" key={index} height={"150px"} mt={24}>
                                            <Text size="lg" m="auto" justifyContent={"center"} textAlign={"center"}>{data.content}</Text>
                                            <VStack alignItems="center" mt={8}>
                                                {/* If there is an image display the image, if not display a default profile picture with the initials of the person's name */}
                                                <Avatar name={data.name} size="lg" width={100} height={100} src={data.src ? data.src : undefined} />
                                                <Box textAlign="center">
                                                    <Text fontWeight={"bold"} fontSize={"lg"}>⭐️⭐️⭐️⭐️⭐️</Text>
                                                    <Text fontWeight="bold" fontSize="lg">
                                                        {data.name}
                                                    </Text>
                                                    <Text fontSize="md" color="gray.500">
                                                        {data.position}
                                                    </Text>
                                                </Box>
                                            </VStack>
                                            <Divider mt={8} />
                                        </Box>
                                    ))}
                                </Grid>
                                <br />
                                <br />
                                <br />
                                <Heading mt={48}>Less time learning, and more time educating</Heading>
                                <chakra.desc>
                                    PeelDB's easy-to-navigate UI with an intuitive NavBar with easy links, auto-redirect, and more helps schools, and teachers spend more time on finding valuable organizations, and business partners than learning how to navigate the site.
                                </chakra.desc>
                                <Flex direction={"column"} mt={24}>
                                    <Heading size={"2xl"} m="auto">Ready to get your school started with PeelDB?</Heading>

                                    <Box m="auto">
                                        <NextLink href={"/login"}>
                                            <Button as={Link} p={8} m="auto" mt={8} alignSelf={"center"} colorScheme='green'>
                                                Get started
                                            </Button>
                                        </NextLink>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Container>
                </Flex>
            </Fragment>
        </Wrapper >
    );
};

export default Index;