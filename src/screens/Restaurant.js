import React, {useEffect} from 'react';
import {ScrollView, Image, View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {setRestaurant} from '../../states/restaurantSlice';

import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

import {urlFor} from '../../sanity';

const Restaurant = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      }),
    );
  }, [
    address,
    dishes,
    dispatch,
    genre,
    id,
    imgUrl,
    lat,
    long,
    rating,
    short_description,
    title,
  ]);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{uri: urlFor(imgUrl).url()}}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 left-5 p-2 bg-gray-100 rounded-full">
            <Ionicons name="arrow-back" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold text-black">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <AntDesign name="star" size={20} color="green" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-600">{rating}</Text> · {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 pt-1">
                <Feather name="map-pin" size={18} color="gray" />
                <Text className="text-xs text-gray-500">
                  Nearby · {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <SimpleLineIcons name="question" size={18} color="gray" />
            <Text className="pl-2 flex-1 text-md font-bold text-gray-500">
              Have a food allergy?
            </Text>
            <AntDesign name="right" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-black">
            Menu
          </Text>

          {/* DishRows */}
          {dishes.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
