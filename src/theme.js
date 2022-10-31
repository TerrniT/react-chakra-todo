import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#111')(props),
    },
  }),
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  fonts: {
    body: `"Montserrat", sans-serif`,
  },
};

const theme = extendTheme({ config, styles, fonts });

export default theme;
