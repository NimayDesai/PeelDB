import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../components/Wrapper';

const faqData = [
    {
        label: "Is the website free to use for anyone?",
        text: `Yes!. The website is completely
         free to use for anyone, anywhere with a
         bsoulutely no paid subscriptions. 
         The website also has no ads for the best experience. 
         If you want to support our project, you can contribute on our github`
    },
    {
        label: "Is my organizations information secure?",
        text: `Your information is perfectly safe in our hands, 
        as we have the latest argon2 encryption standards for your passwords, 
        leaving no one, not even us able to see your password
        `
    },
    {
        label: ""
    }
]
const Help: React.FC<{}> = ({ }) => {
    return (
        <Wrapper variant='regular'>
            <Heading mb={8} size={"xl"}>Frequently Asked Questions</Heading>
            <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                    {faqData.map((data, index) => (
                        <AccordionItem mt={8} key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {data.label}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {data.text}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </Wrapper>
    );
}

export default Help