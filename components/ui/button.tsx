import { ButtonField, TemplateVariables } from "@/types/data";
import { processTemplateString } from "@/utils/forms";
import { isEmpty } from "lodash";
import { useMemo } from "react";
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

export default function FormButton({
  field,
  templateVariables,
  ...props
}: ButtonProps) {

  const isVisible = useMemo(() => {
    const conditionFieldName = field.VisibleCondition?.ID;
    const conditionFieldValue = field.VisibleCondition?.Value;
    if (
      field.VisibleCondition &&
      conditionFieldName &&
      !isEmpty(conditionFieldName)
    ) {
      return (
        field.VisibleCondition.Operator === "Equals" &&
        conditionFieldValue === templateVariables[conditionFieldName]
      );
    }
    return true;
  }, [
    field.VisibleCondition,
    templateVariables,
  ]);

  return (
    isVisible && (
      <TouchableOpacity
        {...props}
        style={[styles.buttonBackground, props.style]}
        onPress={(e: GestureResponderEvent) => {
          console.log(templateVariables);
          if (field.AlertMessage) {
            Alert.alert(
              processTemplateString(field.AlertMessage, templateVariables)
            );
          }
        }}
      >
        <Text style={styles.buttonText}>{field.Title}</Text>
      </TouchableOpacity>
    )
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
