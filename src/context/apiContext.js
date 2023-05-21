import createDataContext from "./createDataContext";
import url from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
const chatReducer = (state, action) => {
  switch (action.type) {
    case "getchatMsg":
      return { ...state };
    default:
      return states;
  }
};

const getChatMsg = (dispatch) => async () => {
  const user = await AsyncStorage.getItem("user.id");
  const res = await url.get(`/chat?user=${user.id}`);
  console.log(res.data);
};

export const { Context, Provider } = createDataContext(
  chatReducer,
  { getChatMsg },
  { chat: null }
);
