import {
  ButtonField,
  FormField,
  HeadingField,
  TemplateString,
  TemplateVariables,
  TextField,
} from "@/types/data";

// Function to process template strings
export const processTemplateString = (
  template: TemplateString,
  variables: TemplateVariables
): string => {
  return template.replace(/\$\{([^}]+)\}/g, (match, key) => {
    return String(variables[key] || "");
  });
};

// Type guard functions for runtime type checking
export const isHeadingField = (field: FormField): field is HeadingField =>
  field.Type === "H1" ||
  field.Type === "H2" ||
  field.Type === "H3" ||
  field.Type === "H4" ||
  field.Type === "H5" ||
  field.Type === "H6";
export const isTextField = (field: FormField): field is TextField =>
  field.Type === "Text";
export const isButtonField = (field: FormField): field is ButtonField =>
  field.Type === "Button";
