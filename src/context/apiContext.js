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
      const newData = action.payload;

      const conversationIndex = state.chat.findIndex(
        (conversation) => conversation._id === newData.sender._id
      );

      if (conversationIndex !== -1) {
        // If the conversation exists, add the new message to it
        return {
          ...state,
          chat: state.chat.map((conversation, index) => {
            if (index === conversationIndex) {
              return {
                ...conversation,
                conversation: [
                  ...conversation.conversation,
                  {
                    sender: newData.sender.username,
                    recipient: newData.recipient.username,
                    message: newData.message,
                    timestamp: newData.timestamp,
                  },
                ],
              };
            }
            return conversation;
          }),
        };
      } else {
        // If the conversation does not exist, create a new entry
        const newConversation = {
          _id: newData.sender._id,
          conversation: [
            {
              sender: newData.sender.username,
              recipient: newData.recipient.username,
              message: newData.message,
              timestamp: newData.timestamp,
            },
          ],
        };

        return {
          ...state,
          chat: [...state.chat, newConversation],
        };
      }

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
  console.log(data);
  //console.log("***********************");
  const userId = data.sender._id;
  dispatch({ type: "newMsg", payload: data });
};
export const { Context, Provider } = createDataContext(
  chatReducer,
  { getChatMsg, newMsg },
  { chat: null }
);
