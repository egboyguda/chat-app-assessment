import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MainScreen from "../screens/main.screen";
import ContactScreen from "../screens/contact.screen";
import ChatStack from "./chatStack";
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={ChatStack}></Tab.Screen>
      <Tab.Screen name="Contact" component={ContactScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default TabStack;
