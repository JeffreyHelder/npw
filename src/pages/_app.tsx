import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/styles/theme';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS={true} theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
