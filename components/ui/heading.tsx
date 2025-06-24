import { HeadingField } from "@/types/data";
import { StyleSheet, Text } from "react-native";

export default function FormHeading({ field }: { field: HeadingField }) {
  return <Text style={getHeadingStyle(field.Type)}>{field.Text}</Text>;
}

const getHeadingStyle = (type: HeadingField["Type"]) => {
  switch (type) {
    case "H1":
      return styles.heading1;
    case "H2":
      return styles.heading2;
    case "H3":
      return styles.heading3;
    case "H4":
      return styles.heading4;
    case "H5":
      return styles.heading5;
    default:
      return styles.heading1;
  }
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  heading2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  heading3: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
  },
  heading4: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
  heading5: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2,
  },
});
