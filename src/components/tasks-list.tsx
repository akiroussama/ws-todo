import { Text, VStack, Center } from "native-base";
import TaskItem from "./task-item";
export default function TaskList() {
  return (
    <>
      <TaskItem></TaskItem>
      <TaskItem></TaskItem>
    </>
  );
}
