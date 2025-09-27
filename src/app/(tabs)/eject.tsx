import { useEffect } from "react";

import { BackHandler, View } from "react-native";

export default function Eject() {
  useEffect(() => {
    BackHandler.exitApp();
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

    </View>
  );
}
