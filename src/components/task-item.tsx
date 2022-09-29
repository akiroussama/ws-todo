import React from "react";
import { Text, Pressable, Box, HStack } from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

interface TaskItemProps {
  isDone: boolean;
  onToggleCheckbox?: () => void;
  subject: string;
}

const TaskItem = (props: TaskItemProps) => {
  const { isDone, onToggleCheckbox, subject } = props;

  return (
    <HStack alignItems="center" w="full">
      <Box width={30} height={50} mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <AnimatedCheckbox
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
            checked={isDone}
          />
        </Pressable>
      </Box>
      <Text>{subject}</Text>
    </HStack>
  );
};

export default TaskItem;
