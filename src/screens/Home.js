import React, { useEffect, useState } from "react"
import { View, Text, Image, TextInput, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"
import { getFeaturedCategories } from "../../sanity"
import { FontAwesome5, Entypo, Feather, Ionicons } from "@expo/vector-icons"

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    getFeaturedCategories().then((data) => {
      setFeaturedCategories(data)
    })
  }, [])

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../../assets/rider-img.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Entypo name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <FontAwesome5 name="user" size={25} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <Ionicons name="search-outline" size={24} color="gray" />
          <TextInput
            placeholder="Restuarants and cuisines"
            keyboardType="default"
          />
        </View>
        <Feather name="sliders" size={24} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        <View className="pb-36" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
