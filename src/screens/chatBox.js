import React, { useContext, useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input, Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import Bubble from "../components/bubble";

import { Context as ApiContext } from "../context/apiContext";
//import { SafeAreaView } from "react-native-safe-area-context";

//const [reciever, setReciever] = useState(msg[0]._id);
const ChatBox = ({ route }) => {
  const [reply, setReply] = useState("");
  const {
    state: { chat },
    sendMsg,
  } = useContext(ApiContext);
  const { msg } = route.params;

  //console.log(chat.find((item) => item._id === msg));
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
        renderItem={({ item }) => <Bubble message={item.message} />}
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
            sendMsg(msg, reply);
            setReply("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
  },
});
export default ChatBox;
