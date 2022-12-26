import { useColorModeValue } from '@chakra-ui/react';

const useColor = () => {
  const scheme = useColorModeValue('purple', 'orange');
  const modes = useColorModeValue('purple.400', 'orange.300');
  const color = useColorModeValue('gray.800', 'white');

  return {
    scheme,
    modes,
    color,
  };
};

export default useColor;
