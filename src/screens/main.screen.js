import React, { useContext, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMsg from "../components/chatMsg";
import initializeSocket from "../api/socket.io";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context as authContext } from "../context/authContext";
import { Context as apiContext } from "../context/apiContext";
import { ListItem } from "@rneui/themed";
import {
  registerForPushNotifications,
  schedulePushNotification,
} from "../hooks/pushnotification";
import { getLastMessage, getUsername } from "../utils/getlatestMsg";
const MainScreen = ({ navigation }) => {
  const { state } = useContext(authContext);
  const {
    state: { chat },
    getChatMsg,
    newMsg,
  } = useContext(apiContext);
  useEffect(() => {
    const getNotificationPermissions = async () => {
      const pushToken = await registerForPushNotifications();
      // Save the pushToken or perform any other necessary operations
    };

    getNotificationPermissions();
    const socket = initializeSocket();
    getChatMsg();

    // Additional event listeners or socket operations can be performed here
    socket.on(state.userId, (message) => {
      newMsg(message);
      schedulePushNotification("New Message", "You have a new message");
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
              item={
                chat[item].conversation[0].sender !== state.username
                  ? chat[item].conversation[0].sender
                  : chat[item].conversation[0].recipient
              }
              msg={
                chat[item].conversation[chat[item].conversation.length - 1]
                  .message
              }
              chatmsg={chat[item]._id}
            />
          )}
        />
      ) : null}
    </View>
  );
};

export default MainScreen;
