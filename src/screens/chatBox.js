import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Input, Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
//import { SafeAreaView } from "react-native-safe-area-context";
const ChatBox = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "flex-end" }}
        behavior="padding"
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}
        >
          <Input
            placeholder="Type a message"
            //value={message}
            //onChangeText={setMessage}
            containerStyle={{ flex: 1, marginRight: 10 }}
          />
          <Button
            title=""
            //onPress={handleSend}
            buttonStyle={{ backgroundColor: "transparent" }}
            icon={<Ionicons name="send" size={24} color="blue" />}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default ChatBox;
