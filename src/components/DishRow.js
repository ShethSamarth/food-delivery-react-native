import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../../states/basketSlice';

import {urlFor} from '../../sanity';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) {
      return;
    }

    dispatch(removeFromBasket({id}));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white border-t p-4 border-gray-200">
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1 text-black">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">₹ {price}</Text>
          </View>
          <View>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{borderWidth: 1, borderColor: '#F3F3F4'}}
              source={{uri: urlFor(image).url()}}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}>
              <AntDesign
                name="minuscircle"
                size={24}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
            <Text className="text-black">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" size={24} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
