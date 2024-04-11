import { Flex, Heading, Text, FlexProps } from '@chakra-ui/react';

interface SectionHeaderProps extends FlexProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            width="100%"
            marginBottom={'8'}
            {...props}
        >
            <Text color="blueText" fontWeight="400" textTransform="uppercase">
                {props.title}
            </Text>
            <Heading
                color="title"
                fontWeight="400"
                style={{ fontVariant: 'small-caps' }}
                size={'2xl'}
                mb={'4'}
            >
                {props.subtitle}
            </Heading>
            {props.children}
        </Flex>
    );
};
