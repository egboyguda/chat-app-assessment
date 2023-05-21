export const getLastMessage = (messages) => {
  //console.log(messages);
  if (messages.length > 0) {
    return messages[messages.length - 1].message;
  }
  return "";
};

export const getUsername = (chat) => {
  return chat[chat.length - 1].sender.username;
};
