import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pokemons() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela1")}>
        <Text style={styles.cardText}>Pokémon - Tela 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela2")}>
        <Text style={styles.cardText}>Pokémon - Tela 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela3")}>
        <Text style={styles.cardText}>Pokémon - Tela 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela4")}>
        <Text style={styles.cardText}>Pokémon - Tela 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela5")}>
        <Text style={styles.cardText}>Pokémon - Tela 5</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
