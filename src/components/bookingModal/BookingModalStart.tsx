import {
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
} from '@chakra-ui/react';
import ResponsiveButton from '../Button';

interface ModalProps {
    mobile: boolean;
    setNew: (i: boolean) => void;
    closeModal: () => void;
}

export const BookingModalStart = ({
    mobile,
    setNew,
    closeModal,
}: ModalProps) => {
    const OnNewUser = () => {
        closeModal();
        // setNew(true);
    };
    const OnReturningUser = () => {
        closeModal();
        // setNew(false);
    };

    return (
        <ModalContent m={'4'}>
            <ModalHeader>Book online</ModalHeader>
            <ModalCloseButton size={mobile ? 'lg' : 'md'} />
            <ModalBody>
                Before we get started have we worked together before?
            </ModalBody>
            <ModalFooter
                flexDirection={mobile ? 'column' : 'row'}
                gap={'2'}
                width={'100%'}
                justifyContent={'start'}
            >
                <ResponsiveButton
                    variant={'solid'}
                    colorScheme="blue"
                    width={'100%'}
                    m={0}
                    onClick={() => OnReturningUser()}
                >
                    I'm a returning customer
                </ResponsiveButton>
                <ResponsiveButton
                    variant={'outline'}
                    colorScheme="blue"
                    width={'100%'}
                    m={0}
                    onClick={() => OnNewUser()}
                >
                    I'm a new customer
                </ResponsiveButton>
            </ModalFooter>
        </ModalContent>
    );
};
