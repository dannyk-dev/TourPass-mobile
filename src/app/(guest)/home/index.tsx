import { StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Container from "@/src/components/Container";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/br";
import React, { useState } from "react";
import Clock from "@/src/components/Clock";
import { TimeDataFilters } from "@/src/types";
import TimeFrameTabs from "@/src/components/TimeFrameTabs";
import TaskSheet from "@/src/components/TaskSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetScrollview from "@/src/components/BottomSheetScrollview";

dayjs.extend(relativeTime);
dayjs.locale("br");

const HomeScreen = () => {
  const [timeFilter, setTimeFilter] = useState<TimeDataFilters>("today");

  return (
    <GestureHandlerRootView>
      <Container
        primaryContainerStyle={{
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <View style={styles.contentContainer}>
          <Text>Admin Home Page</Text>
        </View>
      </Container>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentContainer: {
    height: "auto",
    marginTop: 75,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
    rowGap: 10,
    paddingLeft: 10,
    paddingBottom: 16,
    borderRadius: 40,
    overflow: "hidden",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
