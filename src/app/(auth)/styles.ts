import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  label: {
    color: "gray",
    paddingLeft: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
