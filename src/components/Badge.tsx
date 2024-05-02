import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { View, Text } from "./Themed";
import { useTheme } from "../hooks";

type BadgeProps = {
  value: number | string;
  badgeContainerStyle?: ViewStyle | undefined;
  badgeItemStyle?: TextStyle | undefined;
  side: "top" | "bottom";
};

const Badge = ({
  value,
  badgeContainerStyle,
  badgeItemStyle,
  side,
}: BadgeProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        badgeContainerStyle,
        styles.badgeContainer,
        {
          backgroundColor: theme.tint,
          [side]: 0,
          right: -5,
          transform: [
            {
              translateY: side === "top" ? -5 : 5,
            },
            {
              translateX: 2,
            },
          ],
        },
      ]}
    >
      <Text
        style={[
          badgeItemStyle,
          styles.badgeText,
          {
            color: theme.tabIconSelected,
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badgeContainer: {
    height: 14 * 1.5,
    width: 14 * 1.5,
    // backgroundColor: "red",
    alignItems: "center",
    position: "absolute",
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 12,
    textAlign: "center",
  },
});
