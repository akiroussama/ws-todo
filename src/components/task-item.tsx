import React from "react";
import { Text, Pressable, Box, HStack } from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

const TaskItem = () => {
  return (
    <HStack alignItems="center" w="full">
      <Box width={30} height={50} mr={2}>
        <Pressable>
          <AnimatedCheckbox
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
            checked={true}
          />
        </Pressable>
      </Box>
      <Text>test</Text>
    </HStack>
  );
};

export default TaskItem;
