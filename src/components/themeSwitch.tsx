import { useColorMode, IconButton, Icon } from '@chakra-ui/react';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

export const ThemeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isHighContrast = colorMode === 'dark';
    return (
        <IconButton
            position="fixed"
            size="lg"
            bottom={4}
            right={4}
            zIndex="docked"
            icon={
                isHighContrast ? (
                    <Icon as={EyeSlashFill} />
                ) : (
                    <Icon as={EyeFill} />
                )
            }
            aria-label="Toggle High Contrast"
            colorScheme="gray"
            boxShadow="base"
            border="solid 2px"
            bg="white"
            borderColor={isHighContrast ? 'gray.800' : 'transparent'}
            onClick={toggleColorMode}
        />
    );
};
