import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './states/basketSlice';
import restaurantReducer from './states/restaurantSlice';

export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
