import React from 'react'
import { Text, View } from 'react-native'

const CalenderCard = () => {
  return (
    <View
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
          Calender
        </Text>
        {/* Key */}
        {/* Calender */}

      </View>
    </View>
  )
}

export default CalenderCard
