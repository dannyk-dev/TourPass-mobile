import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TimeDataFilters, TimeDataFiltersList } from "../types";
import Button from "./Button";
import { useTheme } from "../hooks";

interface TimeFrameTabsProps {
  activeFilter: TimeDataFilters;
  setActiveFilter: (activeFilter: TimeDataFilters) => void;
}

const TimeFrameTabs = ({
  activeFilter,
  setActiveFilter,
}: TimeFrameTabsProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {TimeDataFiltersList.map((filter) => (
        <Button
          text={filter}
          contentStyle={[
            styles.btnText,
            {
              color:
                filter === activeFilter
                  ? theme.tabIconSelected
                  : theme.tabBarBackground,
            },
          ]}
          size="sm"
          ghost={filter !== activeFilter}
          onPress={() => setActiveFilter(filter)}
          key={filter}
          bg={theme.tabBarBackground}
        />
      ))}
    </View>
  );
};

export default TimeFrameTabs;

const styles = StyleSheet.create({
  btnText: {
    fontSize: 15,
  },
});
