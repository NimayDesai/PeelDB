import { Container, Divider, Flex, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const footerData = [
    {
        label: 'Pages',
        href: '#',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Help', href: '/help' },
            { label: 'Contact', href: '/contact' }
        ]
    },
    {
        label: 'Organization',
        links: [
            { label: 'Add Organization', href: '/create-organizations' },
            { label: 'View Organizations', href: '/app' },
        ]
    },
    {
        label: 'Account Settings',
        links: [
            { label: 'Change Info', href: '/change-info' },
            { label: 'Login', href: '/login' },
            { label: 'Register', href: '/register' }
        ]
    },
    {
        label: 'Social',
        href: '#',
        links: [
            { label: 'Github', href: 'https://github.com/NimayDesai/SchoolOrganizationDB' },
        ]
    }
];

export const Footer: React.FC<{}> = () => {
    return (
        <Container maxW="7xl" p={{ base: 5, md: 10 }}>
            <Divider />
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
                                {data.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        padding={1}
                                        fontSize={{ base: 'sm', sm: 'md' }}
                                        href="#"
                                        mr={{ base: 1, sm: 2, md: 0 }}
                                        color="gray.500"
                                        _hover={{ color: 'blue.600' }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
                <Flex alignItems="center">
                    <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
                        &copy; 2019 company, Inc. All rights reserved.
                    </Text>
                </Flex>
            </VStack>
        </Container>
    );
};
