import React, { useEffect } from "react"
import { View, ActivityIndicator, Text } from "react-native"
import * as Animatable from "react-native-animatable"

const PreparingOrder = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("Delivery")
  //   }, 4000)
  // }, [])

  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Text
        onPress={() => navigation.navigate("Delivery")}
        className="text-lg mb-10 text-white font-bold text-center underline"
      >
        Check Order Status
      </Text>

      <ActivityIndicator color={"white"} size={50} />
    </View>
  )
}

export default PreparingOrder
