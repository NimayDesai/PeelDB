import { ContactData, ReviewData } from "./types";
import { FeatureData } from "./types";
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaqData } from './types';
import Image from 'next/image';
import { FooterData } from "./types";


export const contactData: ContactData[] = [
    {
        label: 'Email',
        text: "support@peeldb.me"
    },
    {
        label: 'Address',
        text: "15 Great Lakes Dr, Brampton, ON L6R 2Z4"
    },
    {
        label: 'Phone',
        text: "123-456-7890"
    },
];



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
                        2. Click register button to access the register page
                    </Text>
                    <Box mt={4}>
                        <Image src={"/registersteps/RegisterStep2.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        3. Enter your username, email and password.
                        Make sure that the length of all fields are at least 3 characters,
                        the username does not include an at sign,
                        your email must have an at sign, and both of your passwords are the same
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/registersteps/RegisterStep3.png"} alt='Press login button on homepage' width={400} height={400} />
                        </Box>
                    </Flex>
                    <Text mt={8}>
                        4. Click the register button to create your account
                    </Text>
                    <Flex>
                        <Box m="auto" mt={4}>
                            <Image src={"/registersteps/RegisterStep4.png"} alt='Press login button on homepage' width={400} height={400} />
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
                                How to add an organization on SchoolDB
                            </Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} alignItems={"ceter"}>
                    <Text size={"md"}>
                        How to add an organizaiton
                    </Text>
                    <Text mt={8}>
                        1. Navigate to the main app page and make sure you are logged in
                    </Text>

                    <Divider />
                    <Text mt={8}>
                        2. Click on the add organization button
                    </Text>
                    <Divider />
                    <Text mt={8}>
                        3. Enter you content you want for this organization
                    </Text>
                    <Text mt={8}>
                        4. Click on the add organizaiton button to add the organization
                    </Text>
                </AccordionPanel>
            </>
        ),
        isSpecial: true
    },
];




export const features: FeatureData[] = [
    {
        title: 'Free and open source',
        detail: 'This website is completely free, and avaiblible on GitHub, with absoultely not paid plans or ads, and without tracking',
    },
    {
        title: 'Secure',
        detail: 'With SchoolDB, your data will always be safe, with the latest encryption techniques on your accounts to make sure your account never gets compromised',
    },
    {
        title: 'Easy to Use',
        detail: 'The Website is easy to use, even for novice users, with every function being clearly labeled',
    }
];



export const footerData: FooterData[] = [
    {
        label: 'Pages',
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
        links: [
            { label: 'Github', href: 'https://github.com/NimayDesai/SchoolOrganizationDB' },
        ]
    }
];

export const reviewData: ReviewData[] = [
    {
        name: "Sachkeerat Brar",
        content: "SchoolDB Help my school immensly about other wonderful business that the community offers. With SchoolDB, I helped increase of clubs buy 200%, and increased engagement by 60%",
        position: "Principal of SB Schools in Brampton, ON",
        src: "/Sachkeerat.jpg"
    },
    {
        name: "Edward Lin",
        content: "SchoolDB Helped my class learn about where we get our resoruces, and encouraged them to donate to the non profits that they want to support",
        position: "Teacher at EL Schools located at Caledon, ON",
        src: "/Edward.jpg"
    },
    {
        name: "Manat Manat",
        content: "SchoolDB Helped me find great non profits organizations I can volunteer at and get more hours for work experience!",
        position: "Student at EL Schools",
    },
    {
        name: "Manav Vasa",
        content: "SchoolDB helped our school find more information about the organizations we are involved at and organizations our teachers have found",
        position: "Principals at MV Schools located in Brapmton",
    }
];
