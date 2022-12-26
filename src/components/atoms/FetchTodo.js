import { Button } from '@chakra-ui/react';
import React from 'react';
import { useTodos } from '../../store/store';
import shallow from 'zustand/shallow';

const FetchTodo = () => {
  const { loading, error, fetchTodos } = useTodos(
    state => ({
      loading: state.loading,
      error: state.error,
      fetchTodos: state.fetchTodos,
    }),
    shallow
  );
  console.log('render');
  return (
    <Button onClick={fetchTodos} isLoading={loading}>
      {!error ? 'Get todos' : { error }}
    </Button>
  );
};

export default FetchTodo;
