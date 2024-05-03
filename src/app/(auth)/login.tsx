import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { Link, Stack } from "expo-router";
import { supabase } from "@/src/lib/supabase";
import { styles } from "./styles";
import { Image } from "react-native";

const Logo =
  "https://irdusmmijwwbpfqhvsze.supabase.co/storage/v1/object/public/app_assets/assets/Logo.png";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login", headerShown: false }} />

      <View style={{ marginBottom: 50 }}>
        <Image
          source={{ uri: Logo }}
          style={{ width: "100%", height: 150, objectFit: "contain" }}
        />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button
        text={loading ? "Loading..." : "Login"}
        onPress={signInWithEmail}
        disabled={loading}
      />
      <Link href="/sign-up" style={styles.textButton}>
        Don't have an Account?
      </Link>
    </View>
  );
};

export default SignInScreen;
