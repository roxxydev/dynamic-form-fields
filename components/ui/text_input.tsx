import { TextField } from "@/types/data";
import { useCallback } from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { isEmpty } from "lodash";

export type TextInputProps = React.ComponentProps<typeof RNTextInput> & {
  field: TextField;
  setValue?: (value: string) => void;
};

export default function FormTextInput({ field, ...props }: TextInputProps) {

  const handleChangeText = useCallback(
    (text: string) => {
      let isValid = true;
      if (field.Validation?.pattern) {
        const regex = new RegExp(field.Validation.pattern);
        isValid = regex.test(text);
      } else if (field.Validation?.minLength || field.Validation?.maxLength) {
        isValid =
          text.length >= (field.Validation.minLength || 0) &&
          text.length <= (field.Validation.maxLength || Infinity);
      } else if (field.Validation?.custom) {
        isValid = field.Validation.custom(text) === true || !isEmpty(field.Validation.custom(text));
      }

      if (isValid) {
        props.setValue?.(text);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.Validation, props.onChangeText]
  );

  return (
    <RNTextInput
      style={styles.textInput}
      placeholder={field.Placeholder}
      onChangeText={handleChangeText}
      value={props.value}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 24,
    fontWeight: "normal",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});
