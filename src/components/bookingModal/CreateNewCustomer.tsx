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
import { Dispatch, SetStateAction, useState } from 'react';

interface UserPersonalData {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    address: string;
    postal: string;
}

interface ModalProps {
    mobile: boolean;
    onNextStep: Dispatch<SetStateAction<UserPersonalData | undefined>>;
    incrementStepUp: () => void;
    decreaseStep: () => void;
    data: UserPersonalData | undefined;
}

export const CreateNewCustomer = ({
    mobile,
    onNextStep,
    incrementStepUp,
    decreaseStep,
    data,
}: ModalProps) => {
    const [firstName, setFirstName] = useState(
        data?.firstName ? data.firstName : ''
    );
    const [lastName, setLastName] = useState(
        data?.lastName ? data.lastName : ''
    );
    const [email, setEmail] = useState(data?.email ? data.email : '');
    const [number, setNumber] = useState(data?.number ? data.number : '');
    const [address, setAddress] = useState(data?.address ? data.address : '');
    const [postal, setPostal] = useState(data?.postal ? data.postal : '');
    let newUserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        number: number,
        address: address,
        postal: postal,
    };
    const ClearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumber('');
        setAddress('');
        setPostal('');
        onNextStep({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            address: '',
            postal: '',
        });
    };
    const AddUserData = () => {
        onNextStep(newUserData);
        incrementStepUp();
    };
    const BackStep = () => {
        onNextStep(newUserData);
        decreaseStep();
    };
    return (
        <ModalContent m={'4'}>
            <ModalHeader mb={4}>Let's set you up!</ModalHeader>
            <ModalCloseButton size={mobile ? 'lg' : 'md'} />
            <ModalBody>
                <Flex
                    as={'form'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={4}
                >
                    <Input
                        aria-label="First name"
                        placeholder="First name"
                        size={mobile ? 'lg' : 'md'}
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <Input
                        aria-label="Last name"
                        placeholder="Last name"
                        size={mobile ? 'lg' : 'md'}
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <Flex gap={4}>
                        <Input
                            flex={4}
                            aria-label="Street Address"
                            placeholder="Street address"
                            size={mobile ? 'lg' : 'md'}
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <Input
                            flex={3}
                            aria-label="Postal Code"
                            placeholder="Postal code"
                            size={mobile ? 'lg' : 'md'}
                            value={postal}
                            onChange={e => setPostal(e.target.value)}
                        />
                    </Flex>
                    <Input
                        aria-label="Email"
                        placeholder="Email"
                        size={mobile ? 'lg' : 'md'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        aria-label="Pone number"
                        placeholder="Phone number"
                        size={mobile ? 'lg' : 'md'}
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </Flex>
            </ModalBody>
            <ModalFooter
                flexDirection={'column'}
                gap={'4'}
                width={'100%'}
                justifyContent={'start'}
                alignItems={'start'}
            >
                <ResponsiveButton
                    variant={'link'}
                    colorScheme="blue"
                    width={'auto'}
                    m={0}
                    isDisabled={
                        newUserData.address ||
                        newUserData.email ||
                        newUserData.firstName ||
                        newUserData.lastName ||
                        newUserData.number
                            ? false
                            : true
                    }
                    onClick={() => ClearForm()}
                >
                    clear
                </ResponsiveButton>
                <Flex gap={5}>
                    <ResponsiveButton
                        variant={'outline'}
                        colorScheme="blue"
                        width={'100%'}
                        m={0}
                        onClick={() => BackStep()}
                    >
                        back
                    </ResponsiveButton>
                    <ResponsiveButton
                        variant={'solid'}
                        colorScheme="blue"
                        width={'100%'}
                        m={0}
                        onClick={() => AddUserData()}
                    >
                        next
                    </ResponsiveButton>
                </Flex>
            </ModalFooter>
        </ModalContent>
    );
};
