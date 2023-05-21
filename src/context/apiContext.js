import createDataContext from "./createDataContext";
import url from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
const chatReducer = (state, action) => {
  switch (action.type) {
    case "getchatMsg":
      return {
        ...state,
        chat: action.payload.reduce((result, chat) => {
          const { sender, ...rest } = chat;
          const { username } = sender;

          if (!result[username]) {
            result[username] = [];
          }

          result[username].push({ ...rest });

          return result;
        }, {}),
      };
    default:
      return states;
  }
};

const getChatMsg = (dispatch) => async () => {
  const user = await AsyncStorage.getItem("userId");
  const res = await url.get(`/chat?user=${user}`);
  dispatch({ type: "getchatMsg", payload: res.data });
};

export const { Context, Provider } = createDataContext(
  chatReducer,
  { getChatMsg },
  { chat: null }
);
