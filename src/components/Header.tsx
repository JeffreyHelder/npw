import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Flex,
    Link,
    Image,
    List,
    ListItem,
    Button,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from '@chakra-ui/react';
import { useState } from 'react';
import ResponsiveButton from './Button';

const Header = ({ ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigateTo = (hashLocation: string) => {
        if (hashLocation === 'home') {
            setMenuOpen(false);
            setTimeout(
                () => {
                    scrollTo(0, 0);
                    window.location.hash = '';
                },
                props.mobileView ? 220 : 0
            );
        } else {
            setMenuOpen(false);
            setTimeout(
                () => {
                    if (window.location.hash === `#` + hashLocation) {
                        let elementY = document.getElementById(hashLocation);
                        if (elementY) {
                            const elTop = elementY.getBoundingClientRect();
                            window.scrollTo(
                                0,
                                elTop.top + document.documentElement.scrollTop
                            );
                        }
                    } else {
                        window.location.hash = hashLocation;
                    }
                },
                props.mobileView ? 220 : 0
            );
        }
    };
    return (
        <Flex
            as="header"
            position="fixed"
            justifyContent="center"
            alignItems="center"
            top={0}
            left={0}
            zIndex="sticky"
            height="80px"
            width="100%"
            bg="white"
            boxShadow="md"
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                maxWidth="container.xl"
                px="18"
            >
                <Link
                    onClick={() => {
                        navigateTo('home');
                    }}
                >
                    <Image
                        src="/header-logo.png"
                        alt="Norfolk Pressure Washing"
                        height="45px"
                    />
                </Link>
                {props.mobileView ? (
                    <>
                        <IconButton
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open Menu"
                            icon={<HamburgerIcon />}
                            size="lg"
                            fontSize="38px"
                            border="solid 2px"
                            bg="transparent"
                            borderColor={
                                props.isHighContrast
                                    ? 'gray.800'
                                    : 'transparent'
                            }
                        />
                        <Drawer
                            isOpen={menuOpen}
                            placement="right"
                            size="xs"
                            preserveScrollBarGap={true}
                            onClose={() => setMenuOpen(false)}
                            returnFocusOnClose={true}
                        >
                            <DrawerOverlay>
                                <DrawerContent
                                    bg={
                                        props.isHighContrast
                                            ? 'white'
                                            : 'gray.50'
                                    }
                                >
                                    <DrawerCloseButton
                                        aria-label="Open Menu"
                                        size="lg"
                                        fontSize="20px"
                                        border="solid 2px"
                                        borderColor={
                                            props.isHighContrast
                                                ? 'gray.800'
                                                : 'transparent'
                                        }
                                    />

                                    <DrawerBody
                                        display="flex"
                                        flexDirection="column"
                                        mt="20"
                                    >
                                        <Flex
                                            as="nav"
                                            flexDirection="column"
                                            justifyContent="center"
                                            width="100%"
                                            gap="5"
                                        >
                                            <List
                                                display="flex"
                                                flexDirection="column"
                                                gap="5"
                                            >
                                                <ListItem
                                                    key="home"
                                                    height="48px"
                                                    width="100%"
                                                >
                                                    <Link
                                                        fontSize="3xl"
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        height="100%"
                                                        onClick={() => {
                                                            navigateTo('home');
                                                        }}
                                                        color="text"
                                                    >
                                                        Home
                                                    </Link>
                                                </ListItem>
                                                <ListItem
                                                    key="services"
                                                    height="48px"
                                                    width="100%"
                                                >
                                                    <Link
                                                        fontSize="3xl"
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        height="100%"
                                                        color="text"
                                                        onClick={() => {
                                                            navigateTo(
                                                                'services'
                                                            );
                                                        }}
                                                    >
                                                        Services
                                                    </Link>
                                                </ListItem>
                                                <ListItem
                                                    key="about"
                                                    height="48px"
                                                    width="100%"
                                                >
                                                    <Link
                                                        fontSize="3xl"
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        height="100%"
                                                        onClick={() => {
                                                            navigateTo('about');
                                                        }}
                                                        color="text"
                                                    >
                                                        About
                                                    </Link>
                                                </ListItem>
                                                <ListItem
                                                    key="contact"
                                                    height="48px"
                                                    width="100%"
                                                >
                                                    <Link
                                                        fontSize="3xl"
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        height="100%"
                                                        onClick={() => {
                                                            navigateTo(
                                                                'contact'
                                                            );
                                                        }}
                                                        color="text"
                                                    >
                                                        Contact
                                                    </Link>
                                                </ListItem>
                                                <ListItem
                                                    key="faq"
                                                    height="48px"
                                                    width="100%"
                                                >
                                                    <Link
                                                        fontSize="3xl"
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        height="100%"
                                                        onClick={() => {
                                                            navigateTo('faq');
                                                        }}
                                                        color="text"
                                                    >
                                                        Faq
                                                    </Link>
                                                </ListItem>
                                            </List>
                                        </Flex>
                                        <Button
                                            position="absolute"
                                            bottom="60px"
                                            left="20px"
                                            variant="solid"
                                            colorScheme="blue"
                                            borderRadius="base"
                                            size="lg"
                                            width="calc(100% - 40px)"
                                            onClick={() => props.openBooking()}
                                        >
                                            Book a free consultation
                                        </Button>
                                    </DrawerBody>
                                </DrawerContent>
                            </DrawerOverlay>
                        </Drawer>
                    </>
                ) : (
                    <Flex as="nav" alignItems="center" gap="5">
                        <List display="flex" gap="5">
                            <ListItem key="home">
                                <Link
                                    as={'p'}
                                    color="text"
                                    onClick={() => {
                                        navigateTo('home');
                                    }}
                                >
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem key="services">
                                <Link
                                    color="text"
                                    onClick={() => {
                                        navigateTo('services');
                                    }}
                                >
                                    Services
                                </Link>
                            </ListItem>
                            <ListItem key="about">
                                <Link
                                    color="text"
                                    onClick={() => {
                                        navigateTo('about');
                                    }}
                                >
                                    About
                                </Link>
                            </ListItem>
                            <ListItem key="contact">
                                <Link
                                    color="text"
                                    onClick={() => {
                                        navigateTo('contact');
                                    }}
                                >
                                    Contact
                                </Link>
                            </ListItem>
                            <ListItem key="faq">
                                <Link
                                    color="text"
                                    onClick={() => {
                                        navigateTo('faq');
                                    }}
                                >
                                    FAQ
                                </Link>
                            </ListItem>
                        </List>
                        <ResponsiveButton
                            variant="solid"
                            colorScheme="blue"
                            onClick={() => props.openBooking()}
                        >
                            Book a free consultation
                        </ResponsiveButton>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};

export default Header;
