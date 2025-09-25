import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tela1() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }}
      />
      <Text style={styles.title}>Squirtle</Text>
      <Text style={styles.desc}>
        Squirtle é um Pokémon do tipo Água. Ele é conhecido por disparar água de sua boca com grande pressão.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#48a3b0", justifyContent: "center", alignItems: "center", padding: 20 },
  img: { width: 180, height: 180, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#fff", fontSize: 16, textAlign: "center" },
});
