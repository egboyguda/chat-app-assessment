import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMsg from "../components/chatMsg";
import initializeSocket from "../api/socket.io";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context as authContext } from "../context/authContext";
const MainScreen = ({ navigation }) => {
  const { state } = useContext(authContext);
  useEffect(() => {
    const socket = initializeSocket();

    // Additional event listeners or socket operations can be performed here
    console.log();
    socket.on(state.userId, (message) => {
      console.log(message);
    });
    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <View>
      <ChatMsg
        goto={() => {
          navigation.navigate("ChatBox");
        }}
      />
    </View>
  );
};

export default MainScreen;
