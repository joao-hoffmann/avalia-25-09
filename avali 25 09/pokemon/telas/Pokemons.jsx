import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pokemons() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela1")}>
        <Image style={styles.img} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }} />
        <Text style={styles.cardText}>Squirtle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela2")}>
        <Image style={styles.img} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" }} />
        <Text style={styles.cardText}>Zubat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela3")}>
        <Image style={styles.img} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" }} />
        <Text style={styles.cardText}>Charmander</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela4")}>
        <Image style={styles.img} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" }} />
        <Text style={styles.cardText}>Sandslash</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela5")}>
        <Image style={styles.img} source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }} />
        <Text style={styles.cardText}>Charmeleon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  card: {
    width: "90%",
    backgroundColor: "#6495ED",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 3,
  },
  img: { width: 80, height: 80, marginBottom: 10 },
  cardText: { fontSize: 18, fontWeight: "700" },
});
