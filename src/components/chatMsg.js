import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ChatMsg = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image source={require("../../assets/user.png")} />
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>USERNAME</Text>
          <Text>latest msg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ChatMsg;
