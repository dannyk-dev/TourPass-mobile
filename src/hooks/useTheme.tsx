import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";


export default function useTheme() {
  const colors = useColorScheme();

  return Colors[colors ?? 'light'];
}