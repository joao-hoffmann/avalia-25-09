import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tela4() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" }}
      />
      <Text style={styles.title}>Sandslash</Text>
      <Text style={styles.desc}>
        Sandslash é um Pokémon do tipo Terra. Ele usa suas garras afiadas para se defender e cavar túneis.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#b28b32", justifyContent: "center", alignItems: "center", padding: 20 },
  img: { width: 180, height: 180, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#fff", fontSize: 16, textAlign: "center" },
});
