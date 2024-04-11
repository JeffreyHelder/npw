import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalCloseButton,
} from '@chakra-ui/react';
import ResponsiveButton from '../Button';
import { useEffect, useState } from 'react';
import { CreateNewCustomer } from './CreateNewCustomer';
import { SelectOptions } from './SelectOptions';
import { BookingModalStart } from './BookingModalStart';

interface UserPersonalData {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    address: string;
    postal: string;
}

interface BookingModalProps {
    open: boolean;
    close: () => void;
    mobile: boolean;
    plan?: string;
}

export const BookingModal = ({
    open,
    close,
    mobile,
    plan,
}: BookingModalProps) => {
    const [step, setStep] = useState(0);
    const [isNew, setIsNew] = useState<boolean | undefined>(undefined);
    const [newUserData, setNewUserData] = useState<
        UserPersonalData | undefined
    >(undefined);

    const CloseIt = () => {
        setStep(0);
        setIsNew(undefined);
        close();
    };
    useEffect(() => {
        console.log(newUserData);
    }, [newUserData]);

    const activeNewUserStep = () => {
        switch (step) {
            case 0: {
                return (
                    <CreateNewCustomer
                        mobile={mobile}
                        onNextStep={setNewUserData}
                        incrementStepUp={() => setStep(step + 1)}
                        decreaseStep={() => setIsNew(undefined)}
                        data={newUserData}
                    />
                );
            }
            case 1: {
                return (
                    <SelectOptions
                        mobile={mobile}
                        incrementStepUp={() => setStep(step + 1)}
                        decreaseStep={() => setStep(step - 1)}
                    />
                );
            }
            default: {
                return false;
            }
        }
    };

    return (
        <Modal
            size={mobile ? 'sm' : 'md'}
            isOpen={open}
            onClose={() => CloseIt()}
            preserveScrollBarGap={true}
            closeOnEsc={true}
            isCentered={true}
        >
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(1px)" />
            {isNew !== undefined ? (
                activeNewUserStep()
            ) : (
                <BookingModalStart
                    closeModal={() => CloseIt()}
                    mobile={mobile}
                    setNew={(i: boolean) => setIsNew(i)}
                />
            )}
        </Modal>
    );
};
