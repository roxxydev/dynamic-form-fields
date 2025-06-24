import { StyleSheet, Text } from "react-native";

type FormTitleProps = {
  value: string;
  isSubtitle?: boolean;
};

export default function FormTitle({ value, isSubtitle }: FormTitleProps) {
  return (
    <Text style={isSubtitle ? styles.subtitle : styles.title}>{value}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
