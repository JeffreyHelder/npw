import { useState, useEffect } from 'react';
//Next imports
import Head from 'next/head';
//Chakra imports
import {
    Container,
    useBreakpoint,
    useColorMode,
    Image,
    Flex,
    Spinner,
    Modal,
    ModalContent,
} from '@chakra-ui/react';
//Component imports
import Header from '@/components/Header';
import AboutSection from '@/components/sections/About';
import { HomeSection } from '@/components/sections/Home';
import { Divider } from '@/components/Divider';
import { MissionSection } from '@/components/sections/Mission';
import { PopularSection } from '@/components/sections/Popular';
import { ServiceSection } from '@/components/sections/Services';
import { ContactSection } from '@/components/sections/Contact';
import { FaqSection } from '@/components/sections/Faq';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/bookingModal';
import { PrivacyModal } from '@/components/PolicyModal';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [bookingModal, setBookingModal] = useState(false);
    const [privacyModal, setPrivacyModal] = useState(false);
    const [plan, setPlan] = useState('');
    const { colorMode } = useColorMode();
    const isHighContrast = colorMode === 'dark';
    const screenSize = useBreakpoint();
    let mobileView = () => {
        switch (screenSize) {
            case 'base': {
                return true;
            }
            case 'sm': {
                return true;
            }
            case 'md': {
                return true;
            }
            case 'lg': {
                return false;
            }
            case 'xl': {
                return false;
            }
            default: {
                return false;
            }
        }
    };
    const setBooking = (plan: string | null) => {
        setBookingModal(true);
        if (plan) {
            setPlan(plan);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);
    return (
        <>
            <Head>
                <title>Norfolk Pressure Washing</title>
                <meta
                    property="og:title"
                    content="Norfolk Pressure Washing"
                    key="title"
                />
                <meta
                    name="description"
                    content="Norfolk Pressure Washing. Norfolk Country pressure washing services."
                />
                <meta
                    name="keywords"
                    content="Norfolk, country, Norfolk County, Simcoe, Pressure, Washing, Port Dover, Power washing, pressure washing"
                />
                <meta name="author" content="Tellemore Tech" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.location.hash = '';
                            history.scrollRestoration = "manual"
                         `,
                    }}
                />
            </Head>
            <main>
                {isLoading && (
                    <>
                        <Flex
                            width={'100%'}
                            height={'100dvh'}
                            bg={'white'}
                            position={'fixed'}
                            top={0}
                            left={0}
                            zIndex={'modal'}
                            animation={'fadeScaleOut .5s linear 2s forwards'}
                        >
                            <Flex
                                flexDirection={'column'}
                                justifyContent={'space-around'}
                                alignItems={'center'}
                                gap={'6'}
                                width={'100%'}
                                height={'100dvh'}
                                bg={'white'}
                                position={'fixed'}
                                top={0}
                                left={0}
                                zIndex={'modal'}
                                animation={
                                    'fadeScaleOut .5s linear 1.2s forwards'
                                }
                            >
                                <Image
                                    src="/images/vertical-logo.png"
                                    alt="Norfolk Pressure Washing"
                                    height="227px"
                                    width="200px"
                                />
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                                />
                            </Flex>
                            <Modal
                                size={'xs'}
                                preserveScrollBarGap={true}
                                motionPreset={'none'}
                                onClose={() => {
                                    setIsLoading(false);
                                }}
                                isOpen={isLoading}
                            >
                                <ModalContent bg={'transparent'}></ModalContent>
                            </Modal>
                        </Flex>
                    </>
                )}
                <BookingModal
                    open={bookingModal}
                    close={() => setBookingModal(false)}
                    mobile={mobileView()}
                    plan={plan}
                />
                <PrivacyModal
                    open={privacyModal}
                    close={() => setPrivacyModal(false)}
                    mobile={mobileView()}
                />
                <Header
                    mobileView={mobileView()}
                    isHighContrast={isHighContrast}
                    openBooking={() => setBooking(null)}
                />
                {/* <ThemeSwitch /> */}
                <Container pt="80px" px={0} maxW="100%">
                    <HomeSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                        openBooking={() => setBooking(null)}
                    />
                    <Divider />
                    <MissionSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                    />
                    <Divider />
                    <PopularSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                        openBooking={(p: string) => setBooking(p)}
                    />
                    <Divider />
                    <ServiceSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                        openBooking={() => setBooking(null)}
                    />
                    <Divider />
                    <AboutSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                    />
                    <Divider />
                    <ContactSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                        openPrivacy={() => setPrivacyModal(true)}
                    />
                    <Divider />
                    <FaqSection
                        mobileView={mobileView()}
                        isHighContrast={isHighContrast}
                    />
                    <Divider />
                    <Footer
                        openBooking={() => setBooking(null)}
                        openPrivacy={() => setPrivacyModal(true)}
                    />
                </Container>
            </main>
        </>
    );
}
