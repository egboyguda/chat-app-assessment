import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as authContext } from "../context/authContext";
const LoginScreen = ({ navigation }) => {
  const { state, signIn } = useContext(authContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        }}
        onChangeText={(val) => {
          setPassword(val);
        }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          //paddingTop: 10,
        }}
        secureTextEntry
        //inputStyle={{ textAlignVertical: "center" }}
      />
      {state.errorMsg !== "" && (
        <Text style={styles.error}>{state.errorMsg}</Text>
      )}
      <Button
        title={"Login"}
        containerStyle={{
          width: "80%",
          borderRadius: 30,
          marginVertical: 10,
        }}
        onPress={() => signIn({ username, password })}
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
const styles = StyleSheet.create({
  error: {
    color: "red",
    marginVertical: 10,
  },
});
export default LoginScreen;
