import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@/src/hooks";
import Badge from "@/src/components/Badge";

const HomeStack = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "TourPass",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
            color: theme.text,
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <>
                    <FontAwesome
                      name="bell"
                      size={25}
                      color={theme.tabIconSelected}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      children={<Badge value={4} side="bottom" />}
                    />
                  </>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default HomeStack;
