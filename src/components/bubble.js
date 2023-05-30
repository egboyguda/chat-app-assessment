import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";

const Bubble = ({ message, isUser, username }) => {
  const containerStyle = isUser
    ? styles.userContainer
    : styles.defaultContainer;
  const messageStyle = isUser ? styles.userMessage : styles.defaultMessage;

  return (
    <View style={[styles.container, containerStyle]}>
      {!isUser && (
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            containerStyle={styles.avatar}
          />
        </View>
      )}
      <View style={styles.messageContainer}>
        {username && <Text style={styles.username}>{username}</Text>}
        <Text style={[styles.message, messageStyle]}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
  },
  defaultContainer: {
    alignSelf: "flex-start",
  },
  userContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#2979FF",
  },
  avatarContainer: {
    marginRight: 8,
    alignSelf: "flex-end",
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: "#ACBCFF",
  },
  messageContainer: {
    flex: 1,
  },
  username: {
    marginBottom: 4,
    fontSize: 12,
    color: "#808080",
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
    color: "#000000",
  },
  defaultMessage: {},
  userMessage: {
    color: "#FFFFFF",
  },
});

export default Bubble;
