import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { faqData } from '../utils/faqData';


const Help: React.FC<{}> = ({ }) => {
    return (
        <Wrapper variant='regular'>
            <Heading mb={8} size={"xl"}>Frequently Asked Questions</Heading>
            <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                    {faqData.map((data, index) => (
                        <AccordionItem mt={8} key={index}>
                            {!data.isSpecial ? (
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
                            ) : data.special}
                        </AccordionItem>)
                    )}
                </Accordion>
            </Box>
        </Wrapper>
    );
}

export default Help