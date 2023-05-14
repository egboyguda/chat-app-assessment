import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMsg from "../components/chatMsg";

const MainScreen = () => {
  return (
    <View>
      <ChatMsg />
    </View>
  );
};

export default MainScreen;
