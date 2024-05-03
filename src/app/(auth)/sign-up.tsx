import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import { supabase } from "@/src/lib/supabase";
import { Image } from "react-native-elements";
import { styles } from "./styles";

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  const SignUpWithEmail = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Invalid Credentials");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />

      <View style={{ marginBottom: 15 }}>
        <Image source={require("@/assets/images/Logo.png")} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        textContentType="emailAddress"
        style={styles.input}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="(45) xxxxxxx"
        textContentType="telephoneNumber"
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

export default SignUpScreen;
