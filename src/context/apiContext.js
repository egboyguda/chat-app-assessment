import createDataContext from "./createDataContext";
import url from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
const chatReducer = (state, action) => {
  switch (action.type) {
    case "getchatMsg":
      //console.log(action.payload);
      return {
        ...state,
        chat: action.payload,
      };
    case "newMsg":
      const { userId, message } = action.payload;
      const newChat = { ...state.chat };

      // Check if the user exists in the chat collection
      if (newChat.hasOwnProperty(userId)) {
        // User exists, push the new message to their array of messages
        console.log(newChat);
        newChat[userId] = [...newChat[userId], message];
      } else {
        // User doesn't exist, create a new array with the message
        console.log(userId);
        newChat[userId] = [message];
      }

      return { ...state, chat: newChat };

    default:
      return state;
  }
};

const getChatMsg = (dispatch) => async () => {
  const user = await AsyncStorage.getItem("userId");
  const res = await url.get(`/chat?user=${user}`);
  //console.log(res.data);
  dispatch({ type: "getchatMsg", payload: [...res.data] });
};
const newMsg = (dispatch) => (data) => {
  //console.log(data);
  //console.log("***********************");
  const userId = data.sender._id;
  dispatch({ type: "newMsg", payload: { userId, message: data } });
};
export const { Context, Provider } = createDataContext(
  chatReducer,
  { getChatMsg, newMsg },
  { chat: null }
);
