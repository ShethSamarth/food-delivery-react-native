import "react-native-url-polyfill/auto"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/screens/Home"
import Restaurant from "./src/screens/Restaurant"
import Basket from "./src/screens/Basket"
import PreparingOrder from "./src/screens/PreparingOrder"
import Delivery from "./src/screens/Delivery"
import { Provider } from "react-redux"
import store from "./store"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrder}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen name="Delivery" component={Delivery} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
