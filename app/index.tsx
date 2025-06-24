import FormButton from "@/components/ui/button";
import FormHeading from "@/components/ui/heading";
import FormTextInput from "@/components/ui/text_input";
import { getFormFieldsJson } from "@/data/formfields";
import { FormField, TemplateVariables } from "@/types/data";
import { isButtonField, isHeadingField, isTextField } from "@/utils/forms";
import { useCallback } from "react";
import { View } from "react-native";
import { map } from "lodash";
import { useAppStyles } from "@/styles/app_styles";
import FormTitle from "@/components/form_title";
import { useSetTemplateVariables } from "@/hooks/useSetTemplateVariables";

export default function AppLayout() {
  const formFields = getFormFieldsJson();
  const styles = useAppStyles();
  const [templateVariables, setTemplateVariables] =
    useSetTemplateVariables<TemplateVariables>({});

  const renderField = useCallback((field: FormField) => {
    if (isHeadingField(field)) {
      return <FormHeading field={field} />;
    } else if (isTextField(field)) {
      return (
        <FormTextInput
          field={field}
          setValue={(value) => setTemplateVariables({ [field.ID]: value })}
        />
      );
    } else if (isButtonField(field)) {
      return <FormButton field={field} templateVariables={templateVariables} />;
    }
  }, [setTemplateVariables, templateVariables]);

  return (
    <View style={styles.container}>
      {formFields.Title && <FormTitle value={formFields.Title} />}
      {formFields.Subtitle && (
        <FormTitle value={formFields.Subtitle} isSubtitle />
      )}
      {map(formFields.Fields, (field, index) => (
        <View key={field.ID ?? index} style={styles.field}>
          {renderField(field)}
        </View>
      ))}
    </View>
  );
}
