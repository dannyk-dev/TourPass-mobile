import { Image, StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../components/Themed";
import { Link } from "expo-router";
import Button from "../components/Button";
import { useTheme } from "../hooks";

const index = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/Welcome.png")}
          resizeMode="contain"
          style={{ width: "100%", aspectRatio: 1, height: "60%" }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>Welcome to</Text>
          <Link href="/" style={{ marginLeft: 5 }}>
            <Text
              style={{
                color: theme.tint,
                textDecorationStyle: "solid",
                textDecorationLine: "underline",
                fontSize: 20,
              }}
            >
              persona.io
            </Text>
          </Link>
        </View>
        <View style={{ width: "80%", marginTop: 15 }}>
          <Text style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            nulla. Ea iusto consequatur ad minima.
          </Text>
        </View>
        <Link href="/(user)/home" asChild>
          <Button text="Let's get organized!" style={{}} />
        </Link>
        <Link
          href="/(admin)/home"
          style={{
            marginTop: 15,
            fontSize: 20,
            textDecorationLine: "underline",
          }}
        >
          <Text>Are you an Admin? </Text>
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
