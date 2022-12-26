import React from 'react';

import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import TaskItem from './TaskItem';
import { useTodos } from '../store/store';
import Total from './atoms/Total';
import Filter from './atoms/Filters';

const TodoList = () => {
  const todos = useTodos(state => state.todos);
  const scheme = useColorModeValue('purple', 'orange');

  return (
    <Flex w="325px" h="100vh" alignSelf="center">
      <Flex w="325px" flexDir="column">
        <Tabs mt="2%" colorScheme={scheme}>
          <TabList>
            <Tab fontWeight="bold" fontSize={12}>
              All
            </Tab>
            <Tab fontWeight="bold" fontSize={12}>
              Incomplete Tasks
            </Tab>
            <Tab fontWeight="bold" fontSize={12}>
              Completed Tasks
            </Tab>
            <Tab fontWeight="bold" fontSize={12} isDisabled>
              <Total />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {todos.map(task => (
                <TaskItem key={task.id} {...task} />
              ))}
            </TabPanel>
            <TabPanel>
              <Filter />
            </TabPanel>
            <TabPanel>
              <Filter />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default TodoList;
