import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { SectionWrapper } from '../SectionWrapper';
import { ScrollTarget } from '../ScrollTarget';

import Data from '../../data.json';

const AboutSection = ({ ...props }) => {
    const data = Data.data.about;
    return (
        <SectionWrapper
            mobileView={props.mobileView}
            bg={'white'}
            overflow={'hidden'}
        >
            <ScrollTarget id="about" />
            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                justifyContent={'center'}
                alignItems={'stretch'}
                gap={'12'}
                px={props.mobileView ? '0' : '8'}
            >
                <Flex
                    flexDirection="column"
                    justifyContent={'center'}
                    width={props.mobileView ? '100%' : '50%'}
                    gap="5"
                    textAlign={props.mobileView ? 'center' : 'left'}
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
                            mb={'4'}
                        >
                            {data.subtitle}
                        </Heading>
                    </Flex>
                    {data.text.map(text => (
                        <Text
                            color="text"
                            fontSize="lg"
                            key={text}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    ))}
                </Flex>
                <Flex
                    position={'relative'}
                    zIndex={'base'}
                    width={props.mobileView ? '100%' : '50%'}
                    maxWidth={props.mobileView ? '100%' : '50%'}
                    minHeight={props.mobileView ? '300px' : '475px'}
                    bgImage={
                        props.mobileView
                            ? `/images/${data.image.source}`
                            : 'none'
                    }
                    bgColor={props.mobileView ? '#0F5A4A' : 'none'}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPosition={
                        props.mobileView ? 'center center' : 'left center'
                    }
                >
                    {!props.mobileView && (
                        <>
                            <Flex
                                position={'absolute'}
                                top={0}
                                left={0}
                                zIndex={'base'}
                                width={'100vw'}
                                height={'100%'}
                                bgColor={'#0F5A4A'}
                            />
                            <Flex
                                position={'absolute'}
                                top={0}
                                left={0}
                                zIndex={'base'}
                                width={'100%'}
                                height={'100%'}
                                bgImage={`/images/${data.image.source}`}
                                bgColor={props.mobileView ? '#0F5A4A' : 'none'}
                                bgSize="contain"
                                bgRepeat="no-repeat"
                                bgPosition={
                                    props.mobileView
                                        ? 'center center'
                                        : 'left center'
                                }
                            />
                        </>
                    )}
                </Flex>
            </Flex>
        </SectionWrapper>
    );
};

export default AboutSection;
