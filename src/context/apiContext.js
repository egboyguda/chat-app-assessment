import createDataContext from "./createDataContext";
import url from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import initializeSocket from "../api/socket.io";
import { navigate } from "../navigationRes";
const chatReducer = (state, action) => {
  switch (action.type) {
    case "getContact":
      return { ...state, contact: action.payload };
    case "getchatMsg":
      //console.log(action.payload);
      return {
        ...state,
        chat: action.payload,
      };
    case "newMsg":
      const newData = action.payload.data;
      const user = action.payload.user;
      const conversationIndex = state.chat.findIndex(
        (conversation) =>
          conversation._id === newData.sender._id ||
          conversation._id === newData.recipient._id
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
            } else if (conversation._id === newData.sender.username) {
              // If the user is the sender, also add the message to the recipient's conversation
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
          _id:
            newData.sender._id === user
              ? newData.recipient._id
              : newData.sender._id,
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
    case "deleteCon":
      console.log(action.payload.id);
      return {
        ...state,
        chat: state.chat.filter((item) => item._id !== action.payload.id),
      };

    default:
      return state;
  }
};

const addContact = (dispatch) => async (username) => {
  console.log("called");
  const res = await url.post(`/user/add`, { username });
  navigate("Chat");
};

const getContact = (dispatch) => async () => {
  const res = await url.get("/user/contact");
  //console.log(res.data);
  dispatch({ type: "getContact", payload: res.data });
};
const getChatMsg = (dispatch) => async () => {
  try {
    const res = await url.get(`/chat`);
    if (res.status === 401) {
      navigate("Login");
    }
    dispatch({ type: "getchatMsg", payload: [...res.data] });
  } catch (error) {
    console.log(error);
  }
};

const deleteConvo = (dispatch) => async (id) => {
  console.log(id);
  await url.delete("/chat/del", {
    data: {
      id: id,
    },
  });
  dispatch({ type: "deleteCon", payload: { id } });
};
const newMsg = (dispatch) => async (data) => {
  //console.log(data);
  user = await AsyncStorage.getItem("userId");
  //console.log(user);
  dispatch({ type: "newMsg", payload: { data, user } });
};

const sendMsg = (dispatch) => async (receiver, msg) => {
  //console.log(msg);
  const socket = initializeSocket();
  const sender = await AsyncStorage.getItem("userId");
  socket.emit("chat message", {
    receiver,
    sender,
    msg,
    //isReply: true,
  });
};
export const { Context, Provider } = createDataContext(
  chatReducer,
  { getChatMsg, newMsg, sendMsg, addContact, getContact, deleteConvo },
  { chat: null, contact: null }
);
