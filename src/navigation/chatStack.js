import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/main.screen";
import ChatBox from "../screens/chatBox";
import SearchScreen from "../screens/search.screen";
const Stack = createNativeStackNavigator();
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={MainScreen} />
      <Stack.Screen
        name="Add"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default ChatStack;
