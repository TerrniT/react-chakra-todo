import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="320px"
        mx="auto"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
