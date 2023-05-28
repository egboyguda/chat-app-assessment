import React, { useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ChatMsg from "../components/chatMsg";
import { Context as ApiContext } from "../context/apiContext";
import { useIsFocused } from "@react-navigation/native";
const ContactScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const {
    state: { contact, chat },
    getContact,
  } = useContext(ApiContext);
  useEffect(() => {
    // Function to run every time the screen receives focus
    // Replace with your desired function
    if (isFocused) {
      getContact();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Your app content */}

      <View style={styles.container1}>
        <Feather
          name="search"
          size={24}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="gray"
        />
      </View>
      {/* Add your app content here */}
      <View style={{ marginTop: 10 }}></View>
      {contact ? (
        <FlatList
          data={contact}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <ChatMsg
              item={item.name.username}
              msg={item.name._id}
              isContact={true}
              chatmsg={item.name._id}
            />
          )}
        />
      ) : null}
      {/* Floating button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00C4FF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // for Android shadow
    shadowColor: "black", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.3, // for iOS shadow
    shadowRadius: 2, // for iOS shadow
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  //
  container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});

export default ContactScreen;
