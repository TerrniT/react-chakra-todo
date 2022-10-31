import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Text,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import TaskItem from './components/TaskItem';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useState } from 'react';

function App() {
  // Colormode style
  const bg = useColorModeValue('purple.400', 'orange.300');
  const color = useColorModeValue('white', 'gray.800');
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
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex w="100%" h="100vh">
          <Flex w="100%" flexDir="column" ml="20%" mt="5%" mr="20%">
            <Heading color={color} fontWeight="700">
              Todo
            </Heading>

            <form onSubmit={addTask}>
              <Flex mt="2%">
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
            <Tabs mt="2%" w="100%" colorScheme={scheme} variant="soft-rounded">
              <TabList>
                <Tab mr={4}>All</Tab>
                <Tab mr={4}>Incomplete Tasks</Tab>
                <Tab mr={4}>Completed Tasks</Tab>
                <Tab isDisabled>{tasks.length} items left</Tab>
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
      </Grid>
    </Box>
  );
}

export default App;
