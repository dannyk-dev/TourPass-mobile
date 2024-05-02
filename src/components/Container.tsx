import { StyleSheet, ViewStyle, useColorScheme } from "react-native";
import React, { PropsWithChildren } from "react";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = {
  rootContainerStyle?: ViewStyle | undefined;
  primaryContainerStyle?: ViewStyle | undefined;
} & PropsWithChildren;

const Container = ({
  rootContainerStyle,
  primaryContainerStyle,
  children,
}: ContainerProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    // <SafeAreaView>
    <View
      style={[
        styles.container,
        rootContainerStyle,
        { backgroundColor: theme.tabBarBackground },
      ]}
    >
      <View style={[styles.bgOverlay, primaryContainerStyle]}>{children}</View>
    </View>
    // </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  bgOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 5,
    // backgroundColor: "pink",
  },
});
