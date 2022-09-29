import Main from "./src/screens/main";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import WsDrawer from "./src/WsDrawer";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <WsDrawer></WsDrawer>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
