import {
    Button,
    ButtonProps,
    useBreakpoint,
    useColorMode,
} from '@chakra-ui/react';

const ResponsiveButton = (props: ButtonProps) => {
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
    return (
        <Button
            {...props}
            borderRadius="base"
            size={mobileView() ? 'lg' : 'md'}
            fontWeight={isHighContrast ? 600 : 500}
        />
    );
};

export default ResponsiveButton;
