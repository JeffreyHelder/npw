import { Flex, Text } from '@chakra-ui/react';
import { SectionHeader } from '../SectionHeading';
import { SectionWrapper } from '../SectionWrapper';
import { ScrollTarget } from '../ScrollTarget';
import IconCard from '../IconCards';
import ResponsiveButton from '../Button';
import Data from '../../data.json';

export const ServiceSection = ({ ...props }) => {
    const data = Data.data.services;
    return (
        <SectionWrapper mobileView={props.mobileView}>
            <ScrollTarget id="services" />
            <SectionHeader title={data.title} subtitle={data.subtitle}>
                {data.text.map(text => (
                    <Text
                        key={text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                ))}
            </SectionHeader>
            <Flex
                flexDirection={'row'}
                flexWrap={'wrap'}
                width={'100%'}
                maxWidth={props.mobileView ? 'container.sm' : 'container.xl'}
                justifyContent={'center'}
                alignItems={props.mobileView ? 'stretch' : 'stretch'}
                gap={'4'}
                mt={'3'}
            >
                {data.services.map(card => (
                    <IconCard
                        key={card.name}
                        minWidth={props.mobileView ? '100%' : '240px'}
                        maxWidth={props.mobileView ? 'none' : '280px'}
                        icon={card.icon}
                        iconColor={card.color}
                        title={card.name}
                        description={card.text}
                    />
                ))}
            </Flex>

            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                width={props.mobileView ? '100%' : 'auto'}
                maxWidth={props.mobileView ? 'container.sm' : 'none'}
                mx={props.mobileView ? 'auto' : 'none'}
                mt={12}
                gap={props.mobileView ? '4' : '6'}
            >
                <ResponsiveButton
                    onClick={() => props.openBooking()}
                    variant="solid"
                    colorScheme="blue"
                    width={props.mobileView ? '100%' : 'auto'}
                >
                    Book a consultation
                </ResponsiveButton>
            </Flex>
        </SectionWrapper>
    );
};
