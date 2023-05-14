import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/chat.png")}
        style={{ height: 250, width: 250, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>CHAT APP</Text>
      <Input
        placeholder="username"
        containerStyle={{
          borderRadius: 30,
          width: "80%",
          borderWidth: 1,
          height: 48,
          marginBottom: 10,
        }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          //paddingTop: 10,
        }}

        //inputStyle={{ textAlignVertical: "center" }}
      />
      <Input
        placeholder="password"
        containerStyle={{
          borderRadius: 30,
          width: "80%",
          borderWidth: 1,
          height: 48,
        }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          //paddingTop: 10,
        }}
        //inputStyle={{ textAlignVertical: "center" }}
      />
      <Button
        title={"Login"}
        containerStyle={{
          width: "80%",
          borderRadius: 30,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("TabStack");
        }}
      />
      <Button
        title={"Register"}
        containerStyle={{
          width: "80%",
          borderRadius: 30,
          marginVertical: 5,
        }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </SafeAreaView>
  );
};
export default LoginScreen;
