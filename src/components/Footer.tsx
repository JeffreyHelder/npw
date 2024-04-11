import { Button, Container, Flex, Image, Link, Text } from '@chakra-ui/react';

export const Footer = ({ ...props }) => {
    return (
        <Flex
            as="footer"
            bg="white"
            pb={'6'}
            pt={'10'}
            px={'2'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'6'}
        >
            <Container
                maxWidth={'container.xl'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Image
                    src="/header-logo.png"
                    alt="Norfolk Pressure Washing"
                    height="35px"
                />
                <Button
                    variant={'link'}
                    colorScheme="blue"
                    onClick={() => props.openBooking()}
                >
                    Book online
                </Button>
            </Container>
            <Text fontSize={'xs'} textAlign={'center'}>
                Copyright Norfolk Pressure Washing 2023 | all rights reserved{' '}
                <br />
                <Link color={'blue.500'} onClick={() => props.openPrivacy()}>
                    {' '}
                    Privacy Policy
                </Link>
            </Text>
        </Flex>
    );
};
