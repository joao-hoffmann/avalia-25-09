import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pokemons from "./telas/Pokemons";
import Tela1 from "./telas/Tela1";
import Tela2 from "./telas/Tela2";
import Tela3 from "./telas/Tela3";
import Tela4 from "./telas/Tela4";
import Tela5 from "./telas/Tela5";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokemons">
  <Stack.Screen name="Pokemons" component={Pokemons} />
  <Stack.Screen name="Tela1" component={Tela1} />
  <Stack.Screen name="Tela2" component={Tela2} />
  <Stack.Screen name="Tela3" component={Tela3} />
  <Stack.Screen name="Tela4" component={Tela4} />
  <Stack.Screen name="Tela5" component={Tela5} />
</Stack.Navigator>
    </NavigationContainer>
  );
}
