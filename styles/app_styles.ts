import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useAppStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: insets.left,
      marginHorizontal: 20,
    },
    field: {
      marginVertical: 10,
    },
  });
};
