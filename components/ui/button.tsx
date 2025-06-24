import { ButtonField, TemplateVariables } from "@/types/data";
import { processTemplateString } from "@/utils/forms";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  field: ButtonField;
  templateVariables: TemplateVariables;
};

export default function FormButton({ field, templateVariables, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.buttonBackground, props.style]}
      onPress={(e: GestureResponderEvent) => {
        console.log(templateVariables);
        if (field.AlertMessage) {
          Alert.alert(processTemplateString(field.AlertMessage, templateVariables));
        }
      }}
    >
      <Text style={styles.buttonText}>{field.Title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
