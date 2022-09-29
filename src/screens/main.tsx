import { StatusBar } from "expo-status-bar";
import { Center } from "native-base";
import { useState } from "react";
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
  return <TaskList data={data}></TaskList>;
}
