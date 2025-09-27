import { Text, View } from "react-native"

export const WelcomeCard = (/* Props will go here when I do state management. Lord knows how I am going to do auth*/) => {
  return <View
    style={{
      paddingTop: 20,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <View
      style={{
        backgroundColor: "#bbbbff",
        width: "85%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15

      }}
    >
      <Text style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fefefe",
        textShadowColor: "#111",
        textShadowRadius: 2
      }}>Hey Hey Madison!</Text>
      <Text style={{
        color: "#fefefe",
        textShadowColor: "#111",
        textShadowRadius: 2
      }}>You've been going great this month! 4/4 doses taken! Keep up the great work girly! this is an improvement of 25% from last month</Text>
    </View>
  </View>
}
