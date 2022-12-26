import React from 'react';
import { useFilter } from '../../store/store';
import { Button } from '@chakra-ui/react';

const Filter = () => {
  const { filter, setFilter } = useFilter();

  if (filter === 'all') {
    return <Button onClick={() => setFilter('all')}> All</Button>;
  }

  if (filter === 'uncompleted') {
    return <Button onClick={() => setFilter('uncompleted')}> All</Button>;
  }

  if (filter === 'completed') {
    return <Button onClick={() => setFilter('completed')}> All</Button>;
  }
};

export default Filter;
