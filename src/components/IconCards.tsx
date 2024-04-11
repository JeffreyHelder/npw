import * as BsIcons from 'react-bootstrap-icons';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

interface IconCardProps extends FlexProps {
    title?: string;
    description?: string;
    iconColor?: string;
    icon: string;
}

const IconCard = ({
    title,
    description,
    iconColor,
    icon,
    ...props
}: IconCardProps) => {
    // @ts-ignore
    const { [icon]: Icon } = BsIcons;
    return (
        <Flex
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            textAlign={'center'}
            gap={'6'}
            p={'6'}
            boxShadow={'base'}
            borderRadius={'base'}
            bg={'white'}
            cursor={'default'}
            width={'100%'}
            maxW={'400px'}
            {...props}
        >
            <Flex
                p="3"
                fontSize={24}
                color={iconColor ? `${iconColor}.600` : 'blue.500'}
                bgColor={iconColor ? `${iconColor}.100` : 'transparent'}
                borderRadius={'base'}
            >
                <Icon fill="currentColor" />
            </Flex>
            <Flex flexDirection={'column'} gap={'4'}>
                <Text color={'gray.800'} fontSize={'lg'}>
                    {title}
                </Text>
                <Text>{description}</Text>
            </Flex>
        </Flex>
    );
};

export default IconCard;
