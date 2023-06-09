import createDataContext from "./createDataContext";
import url from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRes";

const authReducer = (state, action) => {
  switch (action.type) {
    case "sign":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        username: action.payload.username,
      };
    case "restore":
      return { ...state, token: action.payload, isSignIn: true };
    case "addErr":
      return { ...state, errorMsg: action.payload };
    case "signout":
      return {
        ...state,
        token: null,

        userId: null,
        username: null,
      };
    default:
      return state;
  }
};

const signIn =
  (dispatch) =>
  async ({ username, password }) => {
    try {
      const res = await url.post("/login", { username, password });
      console.log(res.data);
      await AsyncStorage.setItem("token", res.data.token);
      await AsyncStorage.setItem("userId", res.data.userId);

      dispatch({ type: "sign", payload: res.data });

      navigate("TabStack");
    } catch (error) {
      dispatch({ type: "addError", payload: "Invalid username or password." });
    }
  };

const register =
  (dispatch) =>
  async ({ username, password }) => {
    const res = await url.post("/register", { username, password });
    await AsyncStorage.setItem("token", res.data.token);
    await AsyncStorage.setItem("userId", res.data.userId);
    await AsyncStorage.setItem("username", res.data.username);

    dispatch({ type: "sign", payload: res.data });

    navigate("TabStack");
  };
const checkToken = (dispatch) => async () => {
  try {
    const res = await url.get("/check");
    if (res.status !== 401) {
      navigate("TabStack");
    }
  } catch (error) {
    await AsyncStorage.removeItem("token");
    navigate("LoginStack");
  }
};

const restoreToken = (dispatch) => (token) => {
  dispatch({ type: "restore", payload: token });
};
const logout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  await dispatch({ type: "signout" });
  navigate("Login");
};
export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, restoreToken, logout, register, checkToken },
  { token: null, errorMsg: "", isSignIn: false, userId: null, username: null }
);
