import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/main.screen";
import ChatBox from "../screens/chatBox";
const Stack = createNativeStackNavigator();
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={MainScreen} />
    </Stack.Navigator>
  );
};
export default ChatStack;
