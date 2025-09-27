import { Text, View } from "react-native";

interface HeaderPropTypes {
  route: string
}

export const Header = ({ route }: HeaderPropTypes) => {
  return <View style={{
    padding: 10,
    backgroundColor: "#bbbbff",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "sticky",
    alignItems: "center",
    paddingTop: 40
  }}>
    <Text style={{
      fontSize: 20,
      color: "#fefefe",
      textShadowColor: "#111",
      textShadowRadius: 2
    }}>HAJ - {route}</Text>
  </View>
}
