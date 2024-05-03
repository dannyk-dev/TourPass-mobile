import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import { supabase } from "@/src/lib/supabase";
import { styles } from "./styles";
import { Image } from "react-native";

const Logo =
  "https://irdusmmijwwbpfqhvsze.supabase.co/storage/v1/object/public/app_assets/assets/Logo.png";

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
      <Stack.Screen options={{ title: "Sign up", headerShown: false }} />

      <View style={{ marginBottom: 15 }}>
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
      <Link href="/(guest)/home/" style={styles.textButton}>
        Enter as Guest
      </Link>
    </View>
  );
};

export default SignUpScreen;
