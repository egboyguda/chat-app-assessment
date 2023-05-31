import * as Notifications from "expo-notifications";

export const registerForPushNotifications = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    console.log("Notification permission not granted");
    return;
  }

  // Generate the device's push token
  const {
    data: { data },
  } = await Notifications.getExpoPushTokenAsync();
  return data;
};

export const schedulePushNotification = (title, body) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: null, // Immediately show the notification
  });
};
