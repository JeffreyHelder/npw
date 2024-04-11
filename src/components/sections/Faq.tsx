import {
    Accordion,
    AccordionButton,
    Text,
    Box,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from '@chakra-ui/react';
import { SectionHeader } from '../SectionHeading';
import { SectionWrapper } from '../SectionWrapper';
import { ScrollTarget } from '../ScrollTarget';

import Data from '../../data.json';

export const FaqSection = ({ ...props }) => {
    const data = Data.data.faq;
    return (
        <SectionWrapper mobileView={props.mobileView} bgColor={'white'}>
            <ScrollTarget id="faq" />
            <SectionHeader title={data.title} subtitle={data.subtitle}>
                {data.text.map(text => (
                    <Text key={text}>{text}</Text>
                ))}
            </SectionHeader>
            <Accordion allowToggle width={'100%'} maxWidth={'container.md'}>
                {data.questions.map(question => (
                    <AccordionItem key={question.question}>
                        <AccordionButton
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            py={'4'}
                            fontSize={'lg'}
                            color={'gray.600'}
                        >
                            <Box as="span" textAlign={'left'}>
                                {question.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                            pb={'4'}
                            textAlign={'left'}
                            fontSize={'lg'}
                        >
                            {question.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </SectionWrapper>
    );
};
