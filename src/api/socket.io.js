import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initializeSocket = () => {
  const socket = io("http://192.168.232.155:3000");

  // Additional configuration or event listeners can be added here

  return socket;
};

export default initializeSocket;
