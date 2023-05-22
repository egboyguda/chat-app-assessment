import React, { useContext, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMsg from "../components/chatMsg";
import initializeSocket from "../api/socket.io";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context as authContext } from "../context/authContext";
import { Context as apiContext } from "../context/apiContext";
import { ListItem } from "@rneui/themed";
import { getLastMessage, getUsername } from "../utils/getlatestMsg";
const MainScreen = ({ navigation }) => {
  const { state } = useContext(authContext);
  const {
    state: { chat },
    getChatMsg,
    newMsg,
  } = useContext(apiContext);
  useEffect(() => {
    const socket = initializeSocket();
    getChatMsg();

    // Additional event listeners or socket operations can be performed here
    socket.on(state.userId, (message) => {
      newMsg(message);
      //console.log(message);
    });
    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View>
      {chat ? (
        <FlatList
          data={Object.keys(chat)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ChatMsg
              item={getUsername(chat[item])}
              msg={getLastMessage(chat[item])}
              chatmsg={item}
            />
          )}
        />
      ) : null}
    </View>
  );
};

export default MainScreen;
