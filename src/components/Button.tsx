import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
} from "react-native";
import { forwardRef } from "react";
import useTheme from "../hooks/useTheme";
import { Text } from "./Themed";

type ButtonProps = {
  text: string;
  ghost?: boolean;
  contentStyle?: StyleProp<TextStyle> | undefined;
  size?: "sm" | "normal";
  bg?: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  (
    {
      text,
      ghost = false,
      contentStyle,
      size = "normal",
      bg,
      ...pressableProps
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[
          styles.container,
          {
            backgroundColor: !ghost ? bg ?? theme.tint : "transparent",
            borderColor: bg ?? theme.tint,
            borderWidth: 1,
            paddingVertical: size === "normal" ? 15 : 8,
            paddingHorizontal: size === "normal" ? 30 : 24,
            marginRight: size === "sm" ? 5 : 0,
          },
        ]}
      >
        <Text
          style={[styles.text, { color: theme.tabIconSelected }, contentStyle]}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
