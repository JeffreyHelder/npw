import { Flex, Heading, Text } from '@chakra-ui/react';
import { SectionWrapper } from '../SectionWrapper';
import { ScrollTarget } from '../ScrollTarget';

import Data from '../../data.json';
import ContactForm from '../ContactForm';

export const ContactSection = ({ ...props }) => {
    const data = Data.data.contact;
    return (
        <SectionWrapper mobileView={props.mobileView}>
            <ScrollTarget id="contact" />
            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                justifyContent={props.mobileView ? 'center' : 'space-between'}
                alignItems={'center'}
                width={'100%'}
                maxWidth={'container.xl'}
                gap={'12'}
                px={props.mobileView ? '0' : '8'}
            >
                <Flex
                    flexDirection="column"
                    justifyContent={'center'}
                    width={props.mobileView ? '100%' : '50%'}
                    maxWidth={'570px'}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent={'center'}
                        width={'100%'}
                        gap="2"
                        textAlign={'left'}
                        mb={'5'}
                    >
                        <Text
                            color="blueText"
                            fontWeight="400"
                            textTransform="uppercase"
                        >
                            {data.title}
                        </Text>
                        <Flex flexDirection="column">
                            <Heading
                                color="title"
                                fontWeight="400"
                                style={{ fontVariant: 'small-caps' }}
                                size={'2xl'}
                            >
                                {data.subtitle}
                            </Heading>
                        </Flex>
                        {data.text.map(text => (
                            <Text color="text" fontSize="lg" key={text}>
                                {text}
                            </Text>
                        ))}
                    </Flex>
                    <Flex
                        borderRadius={'base'}
                        overflow={'hidden'}
                        boxShadow={'base'}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261144.05235224406!2d-80.59473531027973!3d42.80465793601895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882db130239e3fe3%3A0xef172fae0a1e2785!2sNorfolk%20County%2C%20ON!5e0!3m2!1sen!2sca!4v1681850346444!5m2!1sen!2sca"
                            width="574"
                            height="300"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 'none' }}
                        />
                    </Flex>
                    <Flex
                        flexDirection={
                            props.mobileView ? 'column-reverse' : 'row'
                        }
                        justifyContent={'space-between'}
                        flexWrap={'wrap'}
                        width={'100%'}
                    >
                        <Flex
                            flexDirection="column"
                            pt={'6'}
                            gap={'2'}
                            width={props.mobileView ? '100%' : '50%'}
                        >
                            <Text fontSize={'md'} color={'gray.900'}>
                                Call us:
                            </Text>
                            <Text fontSize={props.mobileView ? 'md' : 'sm'}>
                                {data.company.phone}
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection="column"
                            pt={'6'}
                            gap={'2'}
                            width={props.mobileView ? '100%' : '50%'}
                        >
                            <Text fontSize={'md'} color={'gray.900'}>
                                Email us:
                            </Text>
                            <Text fontSize={props.mobileView ? 'md' : 'sm'}>
                                {data.company.email}
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection="column"
                            pt={'6'}
                            gap={'2'}
                            width={props.mobileView ? '100%' : '50%'}
                        >
                            <Text fontSize={'md'} color={'gray.900'}>
                                Location:
                            </Text>
                            <Text fontSize={props.mobileView ? 'md' : 'sm'}>
                                {data.company.location}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent={'center'}
                    width={props.mobileView ? '100%' : '50%'}
                    maxWidth={'500px'}
                    gap="5"
                    textAlign={props.mobileView ? 'center' : 'left'}
                >
                    <ContactForm
                        mobileView={props.mobileView}
                        openPrivacy={() => props.openPrivacy()}
                    />
                    <Text fontSize={'xs'}>
                        We'll get back to you in 1-2 business days.
                    </Text>
                </Flex>
            </Flex>
        </SectionWrapper>
    );
};
