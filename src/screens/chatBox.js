import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import { Input, Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import Bubble from "../components/bubble";

import { navigate } from "../navigationRes";
import { Context as ApiContext } from "../context/apiContext";
import { Context as AuthContext } from "../context/authContext";

const ChatBox = ({ route }) => {
  const [reply, setReply] = useState("");
  const {
    state: { username },
  } = useContext(AuthContext);
  const {
    state: { chat },
    sendMsg,
  } = useContext(ApiContext);
  const { msg, isContact } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={
          chat
            .find((item) => item._id === msg)
            ?.conversation.slice()
            .reverse() || []
        }
        keyExtractor={(item) => item.timestamp}
        renderItem={({ item }) => (
          <Bubble
            message={item.message}
            isUser={item.sender === username}
            username={item.sender !== username ? item.sender : null}
          />
        )}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={reply}
          style={styles.input}
          placeholder="Type your message..."
          onChangeText={(val) => {
            setReply(val);
          }}
        />
        <Button
          title="Send"
          onPress={() => {
            sendMsg(msg, reply, isContact);
            setReply("");
            isContact ? navigate("Chat") : null;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    backgroundColor: "#F5F5F5",
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
});

export default ChatBox;
