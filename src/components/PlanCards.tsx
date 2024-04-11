import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import ResponsiveButton from './Button';

const PlanCard = ({ ...props }) => {
    return (
        <Flex
            position={'relative'}
            zIndex={'base'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            textAlign={'left'}
            gap={'4'}
            boxShadow={props.spotlight ? 'spotlight' : 'base'}
            borderRadius={'base'}
            bg={'white'}
            cursor={'default'}
            width={props.mobileView ? '100%' : '350px'}
            minWidth={'300px'}
            maxWidth={props.mobileView ? '400px' : '350px'}
            overflow={'hidden'}
            order={props.mobileView ? props.order : 'auto'}
            transform={
                props.mobileView
                    ? 'none'
                    : props.spotlight
                    ? 'none'
                    : 'scale(0.9)'
            }
        >
            {props.spotlight && (
                <Flex
                    position={'absolute'}
                    zIndex={'popover'}
                    top={'12px'}
                    right={'12px'}
                    alignItems={'center'}
                    height={'10'}
                    px={'4'}
                    bg={'green.500'}
                    color={'white'}
                    boxShadow={'lg'}
                    borderRadius="base"
                >
                    <Text>Most popular!</Text>
                </Flex>
            )}
            <Flex
                position={'relative'}
                zIndex={'base'}
                height={'280px'}
                width={'100%'}
                bgImage={'/images/' + props.image.source}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgPosition={'bottom left'}
                overflow={'visible'}
            >
                <Flex
                    position={'absolute'}
                    bottom={'-1px'}
                    left={0}
                    width={'100%'}
                    height={0}
                    borderTop={'30px solid transparent'}
                    borderRight={'400px solid #fff'}
                />
            </Flex>
            <Flex
                position={'absolute'}
                zIndex={'base'}
                top={'calc(280px - 50px)'}
                left={'12px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={'calc(100% - 24px)'}
            >
                <Flex
                    alignItems={'center'}
                    height={'10'}
                    px={'4'}
                    bg={'white'}
                    color={'gray.900'}
                    boxShadow={'base'}
                    borderRadius="base"
                >
                    <Text>${props.avgPrice}/avg</Text>
                </Flex>
                <ResponsiveButton
                    size={'md'}
                    colorScheme="blue"
                    boxShadow={'base'}
                    onClick={() => props.openBooking(props.name)}
                >
                    Get started
                </ResponsiveButton>
            </Flex>
            <Flex flexDirection={'column'} gap={'4'} px={'6'} pb={'6'} pt={'4'}>
                <Text color={'gray.800'} fontSize={'xl'}>
                    {props.name}
                </Text>
                <UnorderedList>
                    {props.services.map((service: string, index: number) => (
                        <ListItem key={index}>{service}</ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </Flex>
    );
};

export default PlanCard;
