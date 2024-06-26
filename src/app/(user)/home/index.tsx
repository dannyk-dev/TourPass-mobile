import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Container from "@/src/components/Container";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/br";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useGetAllHotspotsWithCategory } from "@/src/api/hotspots";

dayjs.extend(relativeTime);

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
          <Text style={{ marginBottom: 30 }}>Hello World</Text>
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
    alignItems: "center",
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
