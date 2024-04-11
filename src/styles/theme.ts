import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const fonts = {
    body: `'Poppins', sans-serif`,
    heading: `'Times New Roman', serif`,
};

const breakpoints = {
    base: '550px',
    sm: '600px',
    md: '700px',
    lg: '920px',
    xl: '1280px',
    '2xl': '1440px',
};

const colors = {
    blue: {
        50: '#E5EEFF',
        100: '#B8D1FF',
        200: '#8AB3FF',
        300: '#5C95FF',
        400: '#2E77FF',
        500: '#377DFF',
        600: '#0047CC',
        700: '#003699',
        800: '#002466',
        900: '#001233',
    },
};

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
        cssVarPrefix: 'norfolk-p-w',
        initialBreakpoint: 'lg',
    },
    styles: {
        global: (props: Record<string, any> | StyleFunctionProps) => ({
            html: {
                scrollBehavior: mode('smooth', 'auto')(props),
            },
            body: {
                bg: mode('gray.50', 'white')(props),
                color: mode('gray.500', 'gray.900')(props),
            },
        }),
    },
    semanticTokens: {
        colors: {
            text: {
                default: 'gray.500',
                _dark: 'gray.800',
            },
            title: {
                default: 'gray.700',
                _dark: 'gray.900',
            },
            blueText: {
                default: 'blue.400',
                _dark: 'blue.600',
            },
        },
    },
    shadows: {
        spotlight: '0 0 0 2px #38A169',
    },
    colors,
    fonts,
    breakpoints,
});

export default theme;
