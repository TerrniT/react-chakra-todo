import { Text } from '@chakra-ui/react';
import React from 'react';
import { useTodos } from '../../store/store';

const Total = () => {
  const count = useTodos(state => state.todos.length);
  return <Text fontWeight="bold">{count} items left</Text>;
};

export default Total;
