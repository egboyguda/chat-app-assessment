import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "react-native";
import { Input } from "@rneui/themed";
import { Context as authContext } from "../context/authContext";
import { Button } from "@rneui/base";
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(authContext);
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
        onChangeText={(val) => {
          setUsername(val);
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
        onChangeText={(val) => {
          setPassword(val);
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
        onPress={() => {
          register({ username, password });
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
