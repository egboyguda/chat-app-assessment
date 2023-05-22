import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Avatar, ListItem } from "@rneui/themed";
import { navigate } from "../navigationRes";
const ChatMsg = ({ item, msg, chatmsg }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("ChatBox", { msg: chatmsg });
      }}
    >
      <ListItem key={item} bottomDivider>
        <Avatar
          rounded
          icon={{
            name: "person-outline",
            type: "material",
            size: 26,
          }}
          containerStyle={{ backgroundColor: "#c2c2c2" }}
        />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
          <ListItem.Subtitle>{msg}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};
export default ChatMsg;
