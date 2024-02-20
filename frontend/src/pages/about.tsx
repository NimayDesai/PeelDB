import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { contactData } from '../utils/data';

const Contact: React.FC<{}> = ({ }) => {
    return (
        <Flex>
            <Box mr="auto" ml={24} maxW="500px">
                <Box maxW="600px">
                    <Heading size={"2xl"}>Contact Us</Heading>
                    {contactData.map((data, index) => (
                        <>
                            <Box key={index} mt={8} ml="auto">
                                <Heading size={"md"}>{data.label}</Heading>
                                <Text mt={2}>{data.text}</Text>
                            </Box>
                        </>
                    ))}
                </Box>
                <Box mt={8}>
                    <Heading size={"2xl"} mt={8}>About Us</Heading>
                    <Text mt={8}>SchoolDB was founded by Nimay Desai, for helping schools have an easy to use tool to find new partners they can work, and improve the quality of their schools. The website has stayed free for all users to make sure every school is able to use it</Text>
                </Box>
            </Box>
            <Box ml="auto" mr={24}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6206491862536!2d-79.77311778744247!3d43.73920687097762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1644548fe915%3A0xc16bfb2aade24726!2sHarold%20M.%20Brathwaite%20Secondary%20School!5e0!3m2!1sen!2sca!4v1708442073021!5m2!1sen!2sca" width="600" height="650" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Flex>
    );
}

export default Contact;