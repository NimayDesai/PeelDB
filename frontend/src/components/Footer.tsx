import { Container, Divider, Flex, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { footerData } from '../utils/footerData';
import NextLink from 'next/link';
import { Wrapper } from './Wrapper';

export const Footer: React.FC<{}> = () => {
    return (
        <Wrapper variant='full'>
            <Container maxW="7xl" p={{ base: 5, md: 10 }}>
                <VStack spacing={5} alignItems="initial">
                    <Flex
                        flexWrap="wrap"
                        direction={{ base: 'column', md: 'row' }}
                        alignItems="start"
                        justifyContent="space-between"
                    >
                        {footerData.map((data, index) => (
                            <Flex key={index} direction="column" mb="3">
                                <Text key={index} mb={2} mt={2} fontWeight={"bold"}>{data.label}</Text>
                                <Flex direction={{ base: 'row', md: 'column' }}>
                                    {data!.links!.map((link, index) => (
                                        <NextLink href={link.href}>
                                            <Link
                                                key={index}
                                                padding={1}
                                                fontSize={{ base: 'sm', sm: 'md' }}
                                                mr={{ base: 1, sm: 2, md: 0 }}
                                                color="gray.500"
                                                _hover={{ color: 'blue.600' }}
                                            >
                                                {link.label}
                                            </Link>
                                        </NextLink>
                                    ))}
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex alignItems="center">
                        <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
                            &copy; 2023 SchoolDB. All rights reserved.
                        </Text>
                    </Flex>
                </VStack>
            </Container>
        </Wrapper>
    );
};
