import { Flex, Text } from '@chakra-ui/react';
import { SectionHeader } from '../SectionHeading';
import { SectionWrapper } from '../SectionWrapper';
import { ScrollTarget } from '../ScrollTarget';

import Data from '../../data.json';
import PlanCard from '../PlanCards';
import ResponsiveButton from '../Button';

export const PopularSection = ({ ...props }) => {
    const data = Data.data.plans;
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
        <SectionWrapper mobileView={props.mobileView} bg="white">
            <ScrollTarget id="popular" />
            <SectionHeader title={data.title} subtitle={data.subtitle}>
                {data.text.map(text => (
                    <Text key={text}>{text}</Text>
                ))}
            </SectionHeader>
            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                width={props.mobileView ? '100%' : 'auto'}
                maxWidth={props.mobileView ? 'container.sm' : 'none'}
                mx={props.mobileView ? 'auto' : 'none'}
                gap={props.mobileView ? '4' : '6'}
            >
                <ResponsiveButton
                    variant="ghost"
                    colorScheme="blue"
                    width={props.mobileView ? '100%' : 'auto'}
                    onClick={() => navigateTo('services')}
                >
                    Browse all services
                </ResponsiveButton>
            </Flex>
            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                flexWrap={props.mobileView ? 'nowrap' : 'wrap'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={props.mobileView ? 'center' : 'stretch'}
                mt={'12'}
                gap={6}
            >
                {data.cards.map(card => (
                    <PlanCard
                        {...card}
                        key={card.name}
                        mobileView={props.mobileView}
                        openBooking={props.openBooking}
                    />
                ))}
            </Flex>
        </SectionWrapper>
    );
};
