import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Container from "@/src/components/Container";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/br";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useGetAllHotspotsWithCategory } from "@/src/api/hotspots";

dayjs.extend(relativeTime);
dayjs.locale("br");

const HomeScreen = () => {
  const {
    data: hotspotWithCategories,
    isLoading,
    error,
  } = useGetAllHotspotsWithCategory();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    alert(error);
    return;
  }

  console.log(hotspotWithCategories);

  return (
    <GestureHandlerRootView>
      <View style={styles.contentContainer}>
        <Text>Admin Home Page</Text>
      </View>
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
