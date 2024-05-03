import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import { supabase } from "@/src/lib/supabase";

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const SignUpWithEmail = async () => {
    setLoading(true);

    console.log(email);
    console.log(password);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Invalid Credentials");
      console.log(error.cause);
      console.log(error.status);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        textContentType="emailAddress"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button
        text={loading ? "Loading..." : "Create Account"}
        disabled={loading}
        onPress={SignUpWithEmail}
      />
      <Link href="/login" style={styles.textButton}>
        Already have an account?
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignUpScreen;
