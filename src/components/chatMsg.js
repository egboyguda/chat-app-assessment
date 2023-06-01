import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, ListItem, Button } from "@rneui/themed";
import { navigate } from "../navigationRes";
import { Ionicons } from "@expo/vector-icons";
import { Context as ApiContext } from "../context/apiContext";

const ChatMsg = ({ item, msg, chatmsg, isContact, isAdd, add, isInbox }) => {
  const { deleteConvo } = useContext(ApiContext);

  return (
    <ListItem.Swipeable
      rightWidth={90}
      minSlideWidth={40}
      rightContent={(action) => (
        <View style={styles.swipeableContentContainer}>
          {isInbox ? (
            <Button
              containerStyle={styles.deleteButtonContainer}
              type="clear"
              icon={{
                name: "delete-outline",
                size: 20,
                color: "#FF0000",
              }}
              onPress={() => {
                deleteConvo(chatmsg);
              }}
            />
          ) : null}
        </View>
      )}
    >
      <TouchableOpacity
        onPress={() => {
          !isAdd ? navigate("ChatBox", { msg: chatmsg, isContact }) : add();
        }}
        style={styles.touchableContainer}
      >
        <View style={styles.contentContainer}>
          <Avatar
            rounded
            icon={{
              name: "person-outline",
              type: "material",
              size: 26,
            }}
            containerStyle={{ backgroundColor: "#c2c2c2" }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.subtitle}>{msg}</Text>
          </View>
        </View>
        {isContact ? (
          <MaterialIcons name="sms" size={24} color="#00C4FF" />
        ) : null}
        {isAdd ? (
          <Ionicons name="ios-person-add-outline" size={24} color="black" />
        ) : null}
      </TouchableOpacity>
    </ListItem.Swipeable>
  );
};

const styles = {
  swipeableContentContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
  },
  deleteButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
};

export default ChatMsg;
