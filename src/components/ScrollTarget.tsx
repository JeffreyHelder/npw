import { Flex } from '@chakra-ui/react';

export const ScrollTarget = ({ id }: { id: string }) => (
    <>
        <Flex
            top="-80px"
            bg="transparent"
            border="none"
            p={0}
            m={0}
            position="absolute"
            id={id}
        />
    </>
);
