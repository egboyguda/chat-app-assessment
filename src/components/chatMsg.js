import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ListItem } from "@rneui/themed";
const ChatMsg = ({ item, msg }) => {
  return (
    <ListItem key={item} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
        <ListItem.Subtitle>{msg}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
export default ChatMsg;
