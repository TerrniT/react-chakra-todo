import {
  Flex,
  Text,
  Checkbox,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useTodos } from '../store/store';

const TaskItem = ({ id, title, completed }) => {
  const color = useColorModeValue('gray.800', 'white');

  const { toggleTodo, removeTodo } = useTodos(state => ({
    toggleTodo: state.toggleTodo,
    removeTodo: state.removeTodo,
  }));

  return (
    <Flex alignItems="center" my="2">
      <Checkbox
        colorScheme="green"
        w="250px"
        flexDir="row"
        isChecked={completed}
        onChange={() => toggleTodo(id)}
      >
        <Flex w="320px" flexDir="row">
          {!completed ? (
            <Text color={color} alignSelf="center" noOfLines={2} fontSize="xs">
              {title}
            </Text>
          ) : (
            <Text
              color={color}
              as="s"
              alignSelf="center"
              noOfLines={2}
              fontSize="xs"
            >
              {title}
            </Text>
          )}
        </Flex>
      </Checkbox>

      <IconButton
        size="xs"
        onClick={() => removeTodo(id)}
        icon={<DeleteIcon />}
      />
    </Flex>
  );
};

export default TaskItem;
