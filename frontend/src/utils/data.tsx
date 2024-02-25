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
        free to use for anyone, anywhere with
        absolutely no paid subscriptions. 
        The website also has no ads for the best experience. 
        If you want to support our project, you can contribute on our GitHub`,
        isSpecial: false
    },
    {
        label: "Is my organization information secure?",
        text: `Your information is perfectly safe in our hands, 
        as we have the latest argon2 encryption standards for your passwords, 
        leaving no one, not even us able to see your password
        `,
        isSpecial: false
    },
    {
        label: "How do I change my info",
        text: `Make sure you are logged in. Then click your username on the NavBar
        Now enter your new info. If you want to leave a field unchanged, leave it blank
        Finally, click the change info button to finalize the change
        `,
        isSpecial: false
    },
    {
        label: "I forgot my password, what do I do?",
        text: `Make sure you know your email. Then click login on the NavBar, 
        and click "forgot password?". Alternatively go to https://peeldb.me/forgot-password. 
        Then enter your email. You should have gotten an email if an account exists. If you did not get an email,
         check the spam inbox, and if still not there contact dessainimay08@gmail.com,
         Click the link in the inbox that says reset password
         Enter your new password, and you have set your new password`,
        isSpecial: false,
    },
    {
        label: "How to add an organization",
        text: `Log into your account or create a new one
        then click Create organization on the NavBar
        then enter the details and make sure all data is fill
        finally, click the  Add Organization button on the page to add an organization`,
        isSpecial: false,
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
                        and the username does not include an at-sign
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
                <AccordionPanel pb={4} alignItems={"center"}>
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
                        2. Click the register button to access the register page
                    </Text>
                    <Box mt={4}>
                        <Image src={"/registersteps/RegisterStep2.png"} alt='Press login button on homepage' width={900} height={100} />
                    </Box>
                    <Divider />
                    <Text mt={8}>
                        3. Enter your username, email and password.
                        Make sure that the length of all fields is at least 3 characters,
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
                        How to add an organization
                    </Text>
                    <Text mt={8}>
                        1. Navigate to the main app page and make sure you are logged in
                    </Text>

                    <Divider />
                    <Text mt={8}>
                        2. Click on the Add Organization button
                    </Text>
                    <Divider />
                    <Text mt={8}>
                        3. Enter you content you want for this organization
                    </Text>
                    <Text mt={8}>
                        4. Click on the add organization button to add the organization
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
        detail: 'This website is completely free, and available on GitHub, with absolutely not paid plans or ads, and without tracking',
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
            { label: 'About', href: '/about' }
        ]
    },
    {
        label: 'Organization',
        links: [
            { label: 'Add Organization', href: '/create-organization' },
            { label: 'View Organizations', href: '/app' },
        ]
    },
    {
        label: 'Account Settings',
        links: [
            { label: 'Account', href: '/account-settings' },
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
        content: "PeelDB helped my school immensely with other wonderful businesses that the community offers. With SchoolDB, I helped increase of clubs by 200%, and increased engagement by 60%",
        position: "Principal of SB Schools in Brampton, ON",
        src: "/Sachkeerat.jpg"
    },
    {
        name: "Edward Lin",
        content: "PeelDB helped my class learn about where we get our resources and encouraged them to donate to the non-profits that they want to support",
        position: "Teacher at EL Schools located at Caledon, ON",
        src: "/Edward.jpg"
    },
    {
        name: "Manat Manat",
        content: "PeelDB helped me find great non-profit organizations I can volunteer at and get more hours for work experience!",
        position: "Student at EL Schools",
    },
    {
        name: "Manav Vasa",
        content: "PeelDB helped our school find more information about the organizations we are involved in and organizations our teachers have found",
        position: "Principals at MV Schools located in Brampton",
    },
    {
        name: "Pradyuman Uppal",
        content: "PeelDB helped me get numerous jobs for organizations close to the school, which helped me advance my portfolio for university",
        position: "Student at PU Schools",
        src: "/Pradyuman.jpg"
    }
];
