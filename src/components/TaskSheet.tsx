import { StyleSheet, Button, ScrollView } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import { View, Text } from "./Themed";
import utc from "dayjs/plugin/utc";
import { useTheme } from "../hooks";

dayjs.extend(utc);

const now = dayjs(Date.now()).utc().format();

const todos = [
  {
    id: 1,
    task: "You have a meeting",
    start: dayjs(),
    end: dayjs().add(30, "minutes"),
  },
  {
    id: 2,
    task: "You have a meeting",
    start: dayjs(),
    end: dayjs().add(30, "minutes"),
  },
  {
    id: 3,
    task: "You have a meeting",
    start: dayjs(),
    end: dayjs().add(30, "minutes"),
  },
];

const stickyHeader = () => {
  return (
    <View style={styles.stickyHeader}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Today's Tasks</Text>
    </View>
  );
};

const TaskSheet = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        centerContent={false}
        snapToAlignment="start"
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
      >
        {todos.map(({ id, task, start, end }) => (
          <View
            key={id}
            style={[styles.card, { backgroundColor: theme.tabBarBackground }]}
          >
            <Text style={[styles.cardTitle, { color: theme.tabIconDefault }]}>
              {task}
            </Text>
            <Text style={{ color: theme.tabIconDefault }}>
              {`Start: ${start.format("YYYY-MM-DD HH:mm")} - End: ${end.format(
                "YYYY-MM-DD HH:mm"
              )}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskSheet;
6;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "50%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    // paddingHorizontal: 16,
    // backgroundColor: "pink",
  },
  stickyHeader: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contentContainer: {},
  itemContainer: {
    padding: 6,
    margin: 6,
    width: 1000,
  },
  card: {
    padding: 20,
    marginBottom: 5,
    borderRadius: 40,
    width: 300,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 32,
  },
});
