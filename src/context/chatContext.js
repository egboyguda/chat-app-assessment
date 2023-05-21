import createDataContext from "./createDataContext";
const chatReducer = (state, action) => {
  switch (action.type) {
    case "new_msg":
      return { ...state };
    default:
      return state;
  }
};

const newMsg =
  (dispatch) =>
  ({ data }) => {
    console.log(data);
  };
