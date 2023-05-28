import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, ListItem } from "@rneui/themed";
import { navigate } from "../navigationRes";
import { Ionicons } from "@expo/vector-icons";
const ChatMsg = ({ item, msg, chatmsg, isContact, isAdd, add, isCon }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        !isAdd ? navigate("ChatBox", { msg: chatmsg }) : add();
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
        {isContact ? (
          <MaterialIcons name="sms" size={24} color="#00C4FF" />
        ) : null}
        {isAdd ? (
          <Ionicons name="ios-person-add-outline" size={24} color="black" />
        ) : null}
      </ListItem>
    </TouchableOpacity>
  );
};

export default ChatMsg;
