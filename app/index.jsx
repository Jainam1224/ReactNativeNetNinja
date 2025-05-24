import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    // We are using View, Text which are the native component
    // and not using HTML tags like div, paragraph etc.
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0dfe8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

// We have components dividesd as:
// 1. Full page component - home page, product page etc.
// 2. Custom build component - custom button, text etc.
// 3. Built-in components - View, Text etc.
