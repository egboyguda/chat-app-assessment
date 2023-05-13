import React from "react";
import { setNavigator } from "./src/navigationRes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "./src/navigation/loginStack";
const Stack = createNativeStackNavigator();
App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return <App />;
};
