import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tela2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" }}
      />
      <Text style={styles.title}>Zubat</Text>
      <Text style={styles.desc}>
        Zubat é um Pokémon do tipo Veneno/Voador. Vive em cavernas e usa ondas ultrassônicas para navegar no escuro.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#6c436e", justifyContent: "center", alignItems: "center", padding: 20 },
  img: { width: 180, height: 180, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#fff", fontSize: 16, textAlign: "center" },
});
