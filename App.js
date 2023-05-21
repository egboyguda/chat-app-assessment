import React from "react";
import { setNavigator } from "./src/navigationRes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "./src/navigation/loginStack";
import TabStack from "./src/navigation/tabStack";
import ChatBox from "./src/screens/chatBox";
import { Provider as AuthProvider } from "./src/context/authContext";
const Stack = createNativeStackNavigator();
App = () => {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="TabStack" component={TabStack}></Stack.Screen>
        <Stack.Screen name="ChatBox" component={ChatBox}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
