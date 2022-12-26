import React from 'react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

import Scene from './Scene';

import { Heading, Text, useColorModeValue, Link } from '@chakra-ui/react';

const Hero = () => {
  const color = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Scene />
      <Heading justifySelf="flex-start" color={color} fontWeight="700">
        Todo
      </Heading>
      <Text>
        <Link justifySelf="center" href="https://github.com/TerrniT" isExternal>
          @terrnit <ExternalLinkIcon justifySelf="center" mb={1} />
        </Link>
      </Text>
    </>
  );
};

export default Hero;
