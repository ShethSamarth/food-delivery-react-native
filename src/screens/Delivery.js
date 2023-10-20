import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from 'react-native';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProgressBar from 'react-native-progress/Bar';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {selectRestaurant} from '../../states/restaurantSlice';

const Delivery = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant);

  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${9537685650}';
    } else {
      phoneNumber = 'telprompt:${9537685650}';
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name="x" size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold text-black">
                45-55 Minutes
              </Text>
            </View>
            <Image
              source={require('../assets/giphy.webp')}
              className="h-20 w-20"
            />
          </View>

          <ProgressBar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={require('../assets/rider-img.png')}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg text-black">Samarth Sheth</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <TouchableOpacity onPress={dialCall}>
          <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Delivery;
