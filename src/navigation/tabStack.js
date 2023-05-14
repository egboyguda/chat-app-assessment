import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/main.screen";
import ContactScreen from "../screens/contact.screen";
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={MainScreen}></Tab.Screen>
      <Tab.Screen name="Contact" component={ContactScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default TabStack;
