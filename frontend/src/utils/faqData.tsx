import { AccordionButton, AccordionIcon, AccordionPanel, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaqData } from './types';
import Image from 'next/image';

export const faqData: FaqData[] = [
    {
        label: "Is the website free to use for anyone?",
        text: `Yes!. The website is completely
        free to use for anyone, anywhere with a
        bsoulutely no paid subscriptions. 
        The website also has no ads for the best experience. 
        If you want to support our project, you can contribute on our github`,
        isSpecial: false
    },
    {
        label: "Is my organizations information secure?",
        text: `Your information is perfectly safe in our hands, 
        as we have the latest argon2 encryption standards for your passwords, 
        leaving no one, not even us able to see your password
        `,
        isSpecial: false
    },
    {
        special: () => (
            <>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading fontSize={"xl"}>
                                How do I log into the website?
                            </Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} alignItems={"ceter"}>
                    <Text size={"md"}>
                        To login into SchoolDB, you can follow these instructions
                    </Text>
                    <Text mt={8}>
                        1. Navigate to the home page by clicking home
                    </Text>
                    <Box mt={4}>
                        <Image src={"/loginsteps/LoginStep1.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        2. Click login to access the login page
                    </Text>
                    <Box mt={4}>
                        <Image src={"/loginsteps/LoginStep2.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        3. Enter your username and password.
                        You can also use your email if you do not remember your username
                        Make sure that the length of both are at least 3 characters,
                        and the username does not include an at sign
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/loginsteps/LoginStep3.png"} alt='Press login button on homepage' width={400} height={400} />
                        </Box>
                    </Flex>
                    <Text mt={8}>
                        4. Click the login button on the bottom to complete your login
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/loginsteps/LoginStep4.png"} alt='Press login button on homepage' width={400} height={400} />
                        </Box>
                    </Flex>
                </AccordionPanel>
            </>
        ),
        isSpecial: true
    },
    {
        special: () => (
            <>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading fontSize={"xl"}>
                                How do create an account of SchoolDB?
                            </Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} alignItems={"ceter"}>
                    <Text size={"md"}>
                        To create an account on SchoolDB, follow these steps
                    </Text>
                    <Text mt={8}>
                        1. Navigate to the home page by clicking home
                    </Text>
                    <Box mt={4}>
                        <Image src={"/registersteps/RegisterStep1.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        2. Click login to access the login page
                    </Text>
                    <Box mt={4}>
                        <Image src={"/loginsteps/LoginStep2.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        3. Enter your username and password.
                        Make sure that the length of both are at least 3 characters,
                        and the username does not include an at sign
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/loginsteps/LoginStep3.png"} alt='Press login button on homepage' width={400} height={400} />
                        </Box>
                    </Flex>
                    <Text mt={8}>
                        4. Click the login button on the bottom to complete your login
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/loginsteps/LoginStep4.png"} alt='Press login button on homepage' width={400} height={400} />
                        </Box>
                    </Flex>
                </AccordionPanel>
            </>
        ),
        isSpecial: true
    }
];
