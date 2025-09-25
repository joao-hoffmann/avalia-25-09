import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Tela5() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }}
      />
      <Text style={styles.title}>Charmeleon</Text>
      <Text style={styles.desc}>
        Charmeleon é a evolução de Charmander. Fica agressivo quando luta e sua chama arde ainda mais forte.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#b53030", justifyContent: "center", alignItems: "center", padding: 20 },
  img: { width: 180, height: 180, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  desc: { color: "#fff", fontSize: 16, textAlign: "center" },
});
