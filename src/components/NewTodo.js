import React, { useRef } from 'react';

import {
  Flex,
  Input,
  Button,
  useColorModeValue,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { useTodos } from '../store/store';
import useColor from '../hooks/useColor';
import FetchTodo from './atoms/FetchTodo';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NewTodo = () => {
  const addTodo = useTodos(state => state.addTodo);
  const modes = useColorModeValue('purple.400', 'orange.300');
  const scheme = useColorModeValue('purple', 'orange');
  const bg = useColorModeValue('#edf6f9', '#151515');
  const color = useColor();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();
  const btnRef = React.useRef();

  //const color = useColorModeValue('gray.800', 'white');

  const handleAddtodo = () => {
    addTodo(ref.current.value);
    onClose();
  };

  return (
    <Flex mt="10%">
      <Button
        ref={btnRef}
        onClick={onOpen}
        color={color}
        modes={modes}
        colorScheme={scheme}
      >
        Add
      </Button>

      <ColorModeSwitcher />

      <Drawer
        color={color}
        modes={modes}
        colorScheme={scheme}
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay blur="1" />
        <DrawerContent backgroundColor={bg}>
          <DrawerCloseButton />
          <DrawerHeader>Create your todo</DrawerHeader>

          <DrawerBody>
            <Input
              focusBorderColor={modes}
              ref={ref}
              autoFocus
              onKeyDown={e => e.key === 'Enter' && handleAddtodo()}
              placeholder="Add task"
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>

            <FetchTodo />
            <Button color={color} onClick={handleAddtodo} ml={5} bg={modes}>
              Add Task
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NewTodo;
