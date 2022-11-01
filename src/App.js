import { useState } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import TaskItem from './components/TaskItem';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Scene from './components/Scene';

function App() {
  // Colormode style
  const bg = useColorModeValue('purple.400', 'orange.300');
  const color = useColorModeValue('gray.800', 'white');
  const scheme = useColorModeValue('purple', 'orange');

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = e => {
    e.preventDefault();

    if (newTask.length > 0) {
      setTasks(prevState => [
        ...prevState,
        { text: newTask, newTask, isChecked: false },
      ]);
      setNewTask('');
    }
  };

  const updateTask = (index, checked) => {
    let newTasks = [...tasks];
    newTasks[index].isChecked = checked;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher mt="5" />
      <Flex p={3} display="flex" flexDirection="column">
        <Scene />
        <Heading justifySelf="flex-start" color={color} fontWeight="700">
          Todo
        </Heading>
        <Text>
          by <Link>@terrnit</Link>
        </Text>
        <Flex w="325px" h="100vh" alignSelf="center">
          <Flex w="325px" flexDir="column">
            <form onSubmit={addTask}>
              <Flex mt="10%">
                <Input
                  value={newTask}
                  onChange={e => setNewTask(e.target.value)}
                  placeholder="Add task"
                />
                <Button color={color} onClick={addTask} ml={5} bg={bg}>
                  Add Task
                </Button>
              </Flex>
            </form>
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
                  {tasks.length} items left
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {tasks.map((task, index) => (
                    <TaskItem
                      removeTask={removeTask}
                      updateTask={updateTask}
                      key={index}
                      task={task}
                      index={index}
                    />
                  ))}
                </TabPanel>
                <TabPanel>
                  {tasks.map((task, index) =>
                    !task.isChecked ? (
                      <TaskItem
                        removeTask={removeTask}
                        updateTask={updateTask}
                        key={index}
                        task={task}
                        index={index}
                      />
                    ) : null
                  )}
                </TabPanel>
                <TabPanel>
                  {tasks.map((task, index) =>
                    task.isChecked ? (
                      <TaskItem
                        removeTask={removeTask}
                        updateTask={updateTask}
                        key={index}
                        task={task}
                        index={index}
                      />
                    ) : null
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
