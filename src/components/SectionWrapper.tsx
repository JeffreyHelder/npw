import { Flex, FlexProps } from '@chakra-ui/react';

interface SectionWrapperProps extends FlexProps {
    mobileView?: boolean;
    children?: React.ReactNode[] | React.ReactNode;
}

export const SectionWrapper = ({
    mobileView,
    children,
    ...props
}: SectionWrapperProps) => (
    <Flex
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
        zIndex="base"
        px={mobileView ? '6' : '12'}
        py={'20'}
        {...props}
    >
        {children}
    </Flex>
);
