import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/base";
const RegisterScreen = () => {
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
        style={{ height: 250, width: 250 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Register</Text>
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
          marginBottom: 10,
        }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          //paddingTop: 10,
        }}

        //inputStyle={{ textAlignVertical: "center" }}
      />
      <Input
        placeholder="retype password"
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
      <Button
        title={"Submit"}
        containerStyle={{
          width: "80%",
          borderRadius: 30,
          marginVertical: 5,
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
