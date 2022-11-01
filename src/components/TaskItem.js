import { Flex, Text, Checkbox, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TaskItem = ({ task, index, updateTask, removeTask, color }) => {
  return (
    <Flex alignItems="center">
      <Checkbox
        onChange={e => updateTask(index, e.target.checked)}
        colorScheme="green"
        w="250px"
        flexDir="row"
        isChecked={task.isChecked}
      >
        <Flex w="320px" flexDir="row">
          {!task.isChecked ? (
            <Text color={color} alignSelf="center">
              {task.text}
            </Text>
          ) : (
            <Text color={color} as="s" alignSelf="center">
              {task.text}
            </Text>
          )}
        </Flex>
      </Checkbox>

      <IconButton
        onClick={() => removeTask(index)}
        colorScheme="pink"
        icon={<DeleteIcon />}
        mr={5}
        mt={2}
      />
    </Flex>
  );
};

export default TaskItem;
