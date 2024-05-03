import { StyleSheet } from "react-native";
import React from "react";
import Container from "@/src/components/Container";
import { supabase } from "@/src/lib/supabase";
import Button from "@/src/components/Button";
import { router } from "expo-router";

const ProfileScreen = () => {
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <Container>
      <Button text="logout" onPress={signOut} />
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
