import { ActivityIndicator, Image, StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../components/Themed";
import { Link, Redirect } from "expo-router";
import Button from "../components/Button";
import { useTheme } from "../hooks";
import { useAuth } from "../providers/AuthProvider";

const index = () => {
  const { session, loading, isAdmin } = useAuth();
  const theme = useTheme();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (session) {
    return <Redirect href="/(user)/home/" />;
  }

  // if (!isAdmin) {
  //   return <Redirect href="/(user)/home/" />;
  // }

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
              TourPas
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
          <Button text="Login as Guest" style={{}} />
        </Link>
        <Link
          href="/sign-up"
          style={{
            marginTop: 15,
            fontSize: 20,
            textDecorationLine: "underline",
          }}
          asChild
        >
          <Button text="Create an account" />
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
