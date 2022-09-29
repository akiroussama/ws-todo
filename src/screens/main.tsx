import React, { useCallback, useState } from "react";
import { Box, Icon, VStack, useColorModeValue, Fab } from "native-base";
import TaskList from "../components/tasks-list";

const initialData = [
  {
    id: 1,
    subject: "LiveCo RN: setup & sample to do list",
    done: true,
  },
  {
    id: 2,
    subject: "LiveCo RN: todo done interaction + Animations",
    done: false,
  },
  {
    id: 3,
    subject: "LiveCo RN: Add/remove todo + Animations",
    done: false,
  },
  {
    id: 4,
    subject: "LiveCo RN: About Page",
    done: false,
  },
  {
    id: 5,
    subject: "LiveCo RN: Deploy the app",
    done: false,
  },
];

export default function Main() {
  const [data, setData] = useState(initialData);

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);

  return (
    <Box flex={1} bg={useColorModeValue("warmGray.50", "primary.900")} w="full">
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList data={data} onToggleItem={handleToggleTaskItem} />
      </VStack>
    </Box>
  );
}
