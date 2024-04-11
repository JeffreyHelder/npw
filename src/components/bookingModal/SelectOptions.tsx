import {
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    Input,
    Flex,
} from '@chakra-ui/react';
import ResponsiveButton from '../Button';

import Data from '../../data.json';

interface ModalProps {
    mobile: boolean;
    incrementStepUp: () => void;
    decreaseStep: () => void;
}

export const SelectOptions = ({
    mobile,
    incrementStepUp,
    decreaseStep,
}: ModalProps) => {
    const data = Data.data.options;

    const OnNextStep = () => {
        incrementStepUp();
    };
    return (
        <ModalContent m={'4'}>
            <ModalHeader mb={4}>Select all that apply.</ModalHeader>
            <ModalCloseButton size={mobile ? 'lg' : 'md'} />
            <ModalBody>
                <Flex
                    as={'ul'}
                    display={'flex'}
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-between'}
                >
                    {data.map(option => (
                        <Flex
                            as={'li'}
                            width={'calc(50% - .2em)'}
                            key={option}
                            height={'48px'}
                            bg={'gray.100'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={'base'}
                            mb={'.4em'}
                        >
                            {option}
                        </Flex>
                    ))}
                </Flex>
            </ModalBody>
            <ModalFooter
                flexDirection={'column'}
                gap={'4'}
                width={'100%'}
                justifyContent={'start'}
                alignItems={'start'}
            >
                <Flex gap={5}>
                    <ResponsiveButton
                        variant={'outline'}
                        colorScheme="blue"
                        width={'100%'}
                        m={0}
                        onClick={() => decreaseStep()}
                    >
                        back
                    </ResponsiveButton>
                    <ResponsiveButton
                        variant={'solid'}
                        colorScheme="blue"
                        width={'100%'}
                        m={0}
                        onClick={() => OnNextStep()}
                    >
                        next
                    </ResponsiveButton>
                </Flex>
            </ModalFooter>
        </ModalContent>
    );
};
