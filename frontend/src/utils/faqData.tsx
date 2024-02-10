import { AccordionButton, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import { FaqData } from './types';

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
        special: (data: FaqData) => (
            <>
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
            </>
        ),
        isSpecial: true
    }
];
