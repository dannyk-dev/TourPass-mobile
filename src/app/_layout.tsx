import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/src/components/useColorScheme";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/dev";
import QueryProvider from "../providers/QueryProvider";
import AuthProvider from "../providers/AuthProvider";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <QueryProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(user)"
              options={{ headerShown: false, headerTransparent: true }}
            />

            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", headerTransparent: true }}
            />
          </Stack>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
