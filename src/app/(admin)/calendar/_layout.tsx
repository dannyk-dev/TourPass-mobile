import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CalendarStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Calendar",
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "500" },
        }}
      />
    </Stack>
  );
};

export default CalendarStack;
