import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";
import { useTheme } from "../hooks";

const Clock = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.current_clock}>
        <Text style={styles.weekday} fontFamily="Montserrat_600SemiBold">
          Tuesday
        </Text>
        <Text
          style={[styles.date, { color: theme.tabBarBackground }]}
          fontFamily="Montserrat_600SemiBold"
        >
          13.12 Dec
        </Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.timeWeatherContainer}>
        <View>
          <Text fontFamily="Montserrat_600SemiBold">1:20 PM</Text>
          <Text fontFamily="Montserrat_400Regular">New York</Text>
        </View>
        <View>
          <Text fontFamily="Montserrat_600SemiBold">23 Degrees Celcius</Text>
          <Text fontFamily="Montserrat_400Regular">Partly Cloudy</Text>
        </View>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 200,
    width: "100%",
  },
  current_clock: {
    flex: 2,
  },
  weekday: {
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    fontSize: 56,
    textAlign: "left",
    textTransform: "uppercase",
  },
  separator: {
    width: 2,
    height: "50%",
    marginLeft: 30,
    marginRight: 20,
    backgroundColor: "#222",
  },
  timeWeatherContainer: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    rowGap: 25,
  },
  time: {},
});
