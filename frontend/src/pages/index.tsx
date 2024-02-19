import {
    Button,
    Container,
    Flex,
    Icon,
    Link,
    Stack,
    Text,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';
import { Fragment } from 'react';
// Here we have used react-icons package for the icons
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Wrapper } from '../components/Wrapper';
import { useMeQuery } from '../gql/generated/graphql';
import { features } from '../utils/features';

const Index = () => {
    const { data } = useMeQuery();

    return (
        <Wrapper variant='full'>
            <Fragment>
                <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
                    <Stack direction={{ base: 'column', md: 'row' }}>
                        <Stack direction="column" spacing={10} justifyContent="center">
                            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
                                Have all your board's business partners in
                                <chakra.span bgGradient="linear(to-br, #74d680, #378b29)" bgClip="text">
                                    {' '}
                                    One Place{' '}
                                </chakra.span>{' '}
                                with SchoolDB
                            </chakra.h1>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize="lg"
                                textAlign="left"
                                fontWeight="400"
                                maxW="700px"
                            >
                                SchoolDB allows you to add all the organizations you want for your school, and share the information with other schools, while accessing other schools best organizations by starring them
                            </Text>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                spacing={{ base: 5, md: 10 }}
                                flexWrap="wrap"
                            >
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
                                <NextLink href={data?.me ? "/app" : "/login"}>
                                    <Link>
                                        <Button
                                            h={12}
                                            px={6}
                                            bgGradient="linear(to-br, #74d680, #378b29)"
                                            color="white"
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
                                <Link href='https://github.com/NimayDesai/SchoolOrganizationDB'>
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
                        </Stack>
                    </Stack>
                </Container>
            </Fragment>
        </Wrapper>
    );
};

export default Index;