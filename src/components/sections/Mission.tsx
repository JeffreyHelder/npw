import { Flex } from '@chakra-ui/react';
import { ScrollTarget } from '../ScrollTarget';
import { SectionHeader } from '../SectionHeading';
import { SectionWrapper } from '../SectionWrapper';
import IconCard from '../IconCards';

import Data from '../../data.json';

export const MissionSection = ({ ...props }) => {
    const data = Data.data.mission;
    return (
        <SectionWrapper mobileView={props.mobileView}>
            <ScrollTarget id="mission" />
            <SectionHeader title={data.title} subtitle={data.subtitle} />
            <Flex
                flexDirection={props.mobileView ? 'column' : 'row'}
                width={'100%'}
                maxWidth={props.mobileView ? 'container.sm' : 'container.xl'}
                justifyContent={'center'}
                alignItems={props.mobileView ? 'center' : 'stretch'}
                gap={'8'}
                mt={'3'}
            >
                {data.cards.map(card => (
                    <IconCard
                        key={card.title}
                        maxWidth={props.mobileView ? 'none' : '350px'}
                        icon={card.icon}
                        title={card.title}
                        description={card.text}
                    />
                ))}
            </Flex>
        </SectionWrapper>
    );
};
