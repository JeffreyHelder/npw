import { Flex, Heading, Text } from '@chakra-ui/react';
import ResponsiveButton from './Button';

export const Hero = ({ ...props }) => {
    const navigateTo = (hashLocation: string) => {
        if (window.location.hash === `#` + hashLocation) {
            let elementY = document.getElementById(hashLocation);
            if (elementY) {
                const elTop = elementY.getBoundingClientRect();
                window.scrollTo(
                    0,
                    elTop.top + document.documentElement.scrollTop
                );
            }
        }
        window.location.hash = hashLocation;
    };
    return (
        <Flex
            justifyContent="center"
            width="100%"
            position="relative"
            zIndex="base"
            overflow="hidden"
            bg="white"
            pb={'20'}
        >
            <Flex
                flex={1}
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                gap={props.mobileView ? '8' : '16'}
                maxWidth={'container.xl'}
                px={props.mobileView ? 3 : 16}
                pt={props.mobileView ? '265px' : 14}
            >
                <Flex
                    flexDirection="column"
                    width={props.mobileView ? '100%' : '50%'}
                    gap="5"
                >
                    <Text
                        color="blueText"
                        fontWeight="400"
                        fontSize="md"
                        textTransform="uppercase"
                    >
                        Pressure Washing Services
                    </Text>
                    <Flex flexDirection="column">
                        <Heading
                            fontSize={props.mobileView ? '12vw' : '5xl'}
                            lineHeight={'1.1'}
                            color="title"
                            fontWeight="400"
                            style={{ fontVariant: 'small-caps' }}
                        >
                            Spring cleanup
                        </Heading>
                        <Heading
                            fontSize={props.mobileView ? '12vw' : '5xl'}
                            lineHeight={'1.1'}
                            color="blueText"
                            fontWeight="400"
                            style={{ fontVariant: 'small-caps' }}
                        >
                            simple
                        </Heading>
                    </Flex>
                    <Text color="text" fontSize="lg">
                        Get your house ready for everything summer has to offer.
                    </Text>
                </Flex>
                <Flex
                    flexDirection={props.mobileView ? 'column' : 'row'}
                    width={props.mobileView ? '100%' : 'auto'}
                    maxWidth={props.mobileView ? 'container.sm' : 'none'}
                    mx={props.mobileView ? 'auto' : 'none'}
                    gap={props.mobileView ? '4' : '6'}
                >
                    <ResponsiveButton
                        variant="solid"
                        colorScheme="blue"
                        width={props.mobileView ? '100%' : 'auto'}
                        onClick={() => props.openBooking()}
                    >
                        Book online now
                    </ResponsiveButton>
                    <ResponsiveButton
                        variant="outline"
                        colorScheme="blue"
                        width={props.mobileView ? '100%' : 'auto'}
                        onClick={() => navigateTo('popular')}
                    >
                        View popular plans
                    </ResponsiveButton>
                </Flex>
            </Flex>
            <Flex
                position="absolute"
                left={props.mobileView ? 0 : '50vw'}
                height={props.mobileView ? '250px' : '500px'}
                flex={1}
                width={props.mobileView ? '100%' : '50%'}
                bgImage={
                    props.mobileView
                        ? '/images/hero-background-wide.jpg'
                        : '/images/hero-background.jpg'
                }
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPosition={props.mobileView ? 'bottom center' : 'bottom left'}
                overflow="visible"
            />
        </Flex>
    );
};
