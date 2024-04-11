import {
    Box,
    Flex,
    Input,
    Textarea,
    Button,
    Text,
    Link,
    useToast,
    FormControl,
    FormHelperText,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type StatusOptions = 'success' | 'error' | 'loading' | undefined;

type ErrorHandlerProps = {
    name?: string | undefined;
    email?: string | undefined;
    number?: string | undefined;
    message?: string | undefined;
};

const ContactForm = ({ ...props }) => {
    const toast = useToast();
    const [status, setStatus] = useState<StatusOptions>(undefined);
    const [error, setError] = useState<ErrorHandlerProps | undefined>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const emailRegex = /(?!no-reply)(?!lol)^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameRegex = /^[A-Za-z][A-Za-z,."'-\s]*$/;
    const numberRegex = /^(?:\d{10}|\d{3}-\d{3}-\d{4})$/;

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setNumber('');
    };

    useEffect(() => {
        if (error?.name) {
            const newError = { ...error, name: undefined };
            setError(newError);
        }
    }, [name]);
    useEffect(() => {
        if (error?.email) {
            const newError = { ...error, email: undefined };
            setError(newError);
        }
    }, [email]);
    useEffect(() => {
        if (error?.number) {
            const newError = { ...error, number: undefined };
            setError(newError);
        }
    }, [number]);
    useEffect(() => {
        if (error?.message) {
            const newError = { ...error, message: undefined };
            setError(newError);
        }
    }, [message]);

    const handleValidateForm = async (e: any) => {
        setStatus('loading');
        e.preventDefault();
        let newError = error;
        if (name) {
            if (!nameRegex.test(name)) {
                newError = { ...newError, name: 'No special characters.' };
            }
        } else {
            newError = { ...newError, name: 'This is a required field.' };
        }
        if (email) {
            if (!emailRegex.test(email)) {
                newError = { ...newError, email: 'Must be a valid email.' };
            }
        } else {
            newError = { ...newError, email: 'This is a required field.' };
        }
        if (number) {
            if (!numberRegex.test(number)) {
                newError = {
                    ...newError,
                    number: 'Only numbers and dashes (0-9, -).',
                };
            }
        } else {
            newError = { ...newError, number: 'This is a required field.' };
        }
        if (!message) {
            newError = { ...newError, message: 'This is a required field.' };
        }
        setError(newError);
        if (
            newError?.email ||
            newError?.name ||
            newError?.message ||
            newError?.number
        ) {
            setStatus(undefined);
        } else {
            handleSubmitForm();
        }
    };

    const handleSubmitForm = () => {
        fetch('https://submit-form.com/gZOLiLZX7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                number,
                message,
            }),
        })
            .then(function (response) {
                if (response.ok) {
                    clearForm();
                    setStatus(undefined);
                    toast({
                        title: 'Email Sent!',
                        description:
                            "We'll get back to you in 1-3 business days!",
                        status: 'success',
                        duration: 5000,
                        position: 'bottom-left',
                        isClosable: true,
                    });
                } else {
                    console.log(response);
                    setStatus(undefined);
                    toast({
                        title: 'Something Went Wrong.',
                        description: 'Please try again later.',
                        status: 'error',
                        duration: 5000,
                        position: 'bottom-left',
                        isClosable: true,
                    });
                }
            })
            .catch(function (error) {
                console.error(error);
                setStatus(undefined);
                toast({
                    title: 'Something Went Wrong!',
                    description: 'Please try again later.',
                    status: 'error',
                    duration: 5000,
                    position: 'bottom-left',
                    isClosable: true,
                });
            });
    };

    return (
        <Flex
            as={'form'}
            position={'relative'}
            zIndex={'base'}
            px={props.mobileView ? '4' : '10'}
            py={props.mobileView ? '6' : '8'}
            flexDirection={'column'}
            gap={'0'}
            bg={'white'}
            boxShadow={'base'}
            borderRadius={'base'}
            overflow={'hidden'}
        >
            <Flex mb={'16px'}>
                <Text fontSize={'2xl'} textAlign={'center'}>
                    Contact Us
                </Text>
            </Flex>
            <FormControl marginBottom={error?.name ? '2px' : '16px'}>
                <Input
                    aria-label="your-name"
                    id="full_name"
                    name="name"
                    type="text"
                    placeholder="Full Name..."
                    size={props.mobileView ? 'lg' : 'md'}
                    borderColor={error?.name && 'orange.500'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    isDisabled={status === 'loading'}
                />
                <FormHelperText fontSize={'sm'} color={'orange.500'} mt={0}>
                    {error?.name && error.name}
                </FormHelperText>
            </FormControl>
            <FormControl marginBottom={error?.email ? '2px' : '16px'}>
                <Input
                    aria-label="your email address"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address..."
                    size={props.mobileView ? 'lg' : 'md'}
                    borderColor={error?.email && 'orange.500'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isDisabled={status === 'loading'}
                />
                <FormHelperText
                    fontSize={'sm'}
                    color={'orange.500'}
                    mt={0}
                    ml={1}
                >
                    {error?.email && error.email}
                </FormHelperText>
            </FormControl>
            <FormControl marginBottom={error?.number ? '2px' : '16px'}>
                <Input
                    aria-label="Phone number"
                    placeholder="Phone number..."
                    id="phone"
                    name="phone"
                    type="number"
                    size={props.mobileView ? 'lg' : 'md'}
                    borderColor={error?.number && 'orange.500'}
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    isDisabled={status === 'loading'}
                />
                <FormHelperText
                    fontSize={'sm'}
                    color={'orange.500'}
                    mt={0}
                    ml={1}
                >
                    {error?.number && error.number}
                </FormHelperText>
            </FormControl>
            <FormControl marginBottom={error?.message ? '2px' : '16px'}>
                <Textarea
                    aria-label="your message"
                    id="message"
                    name="message"
                    placeholder="Message..."
                    size={props.mobileView ? 'lg' : 'md'}
                    borderColor={error?.message && 'orange.500'}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    isDisabled={status === 'loading'}
                />
                <FormHelperText fontSize={'sm'} color={'orange.500'} mt={0}>
                    {error?.message && error.message}
                </FormHelperText>
            </FormControl>
            <Button
                size="lg"
                width={'100%'}
                colorScheme={'blue'}
                onClick={e => handleValidateForm(e)}
            >
                Submit
            </Button>
            <Box width="100%" height="1px" bg="gray.100" p="0" m="0" />
            <Flex mt={'16px'}>
                <Text fontSize={'xs'} textAlign={'center'}>
                    By submitting the form you agree to our{' '}
                    <Link
                        color={'blue.500'}
                        onClick={() => props.openPrivacy()}
                    >
                        {' '}
                        Privacy Policy
                    </Link>
                    .
                </Text>
            </Flex>
        </Flex>
    );
};

export default ContactForm;
