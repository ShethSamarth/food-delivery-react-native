import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';

const PreparingOrder = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, [navigation]);

  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <ActivityIndicator size={60} color="white" />
    </View>
  );
};

export default PreparingOrder;
