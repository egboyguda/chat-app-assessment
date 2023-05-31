import React, { useContext, useState } from "react";
import url from "../api/urls";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatMsg from "../components/chatMsg";
import { Context as ApiContext } from "../context/apiContext";
const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const { addContact } = useContext(ApiContext);

  const handleSearch = async () => {
    // Implement the search functionality here
    // Replace the code below with your actual search logic
    const res = await url.get(`/user?username=${searchText}`);
    // Example: Searching for users based on the searchText
    console.log(res.data);
    setSearchResults(res.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResults ? (
        <ChatMsg
          item={searchResults.username}
          msg={searchResults._id}
          isAdd={true}
          add={() => {
            addContact(searchResults._id);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  user: {
    fontSize: 16,
    marginBottom: 8,
  },
  noResults: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 16,
  },
});

export default SearchScreen;
