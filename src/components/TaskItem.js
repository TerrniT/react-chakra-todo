import { Flex, Text, Checkbox, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TaskItem = ({ task, index, updateTask, removeTask, color, bg }) => {
  return (
    <Checkbox
      onChange={e => updateTask(index, e.target.checked)}
      colorScheme="green"
      mb={10}
      w="100%"
      flexDir="row"
      isChecked={task.isChecked}
    >
      <Flex w="100%" flexDir="row">
        {!task.isChecked ? (
          <Text color={color} alignSelf="center">
            {task.text}
          </Text>
        ) : (
          <Text color={color} as="s" alignSelf="center">
            {task.text}
          </Text>
        )}
        <IconButton
          onClick={() => removeTask(index)}
          colorScheme="pink"
          pos="absolute"
          right={0}
          icon={<DeleteIcon />}
        />
      </Flex>
    </Checkbox>
  );
};

export default TaskItem;
