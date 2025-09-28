import { Text, View } from "react-native"

export const NextDoseCard = () => {
  return <View
    style={{
      paddingTop: 20,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <View

      style={{
        backgroundColor: "#bbbbff",
        width: "85%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15

      }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          color: "#fefefe",
          textShadowColor: "#111",
          textShadowRadius: 2
        }}>
        NEXT DOSE(S) DUE in {"{N Min/Hrs/Days}"}
      </Text>
      <Text
        style={{
          color: "#fefefe",
          textShadowColor: "#111",
          textShadowRadius: 2
        }}>
        {"{Hormone dose} by {method} due in {N Min/hrs/days}"}
      </Text>
      <Text
        style={{
          color: "#fefefe",
          textShadowColor: "#111",
          textShadowRadius: 2
        }}>
        {"{Blocker dose} by {method} due in {N Mins/hrs/days}"}
      </Text>
    </View>
  </View>
}
