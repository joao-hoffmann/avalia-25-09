import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tela3() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" }}
      />
      <Text style={styles.title}>Charmander</Text>
      <Text style={styles.desc}>
        Charmander é um Pokémon do tipo Fogo. A chama em sua cauda mostra sua energia vital.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#9b4e32", justifyContent: "center", alignItems: "center", padding: 20 },
  img: { width: 180, height: 180, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#fff", fontSize: 16, textAlign: "center" },
});
