export type Form = {
  Title?: string;
  Subtitle?: string;
  Fields: FormField[];
};

// Base field interface with common properties
export interface BaseField {
  ID?: string;
  Type: string;
}

// H1 heading field
export interface HeadingField extends BaseField {
  Type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  Text: string;
}

// Text input field
export interface TextField extends BaseField {
  Type: 'Text';
  ID: string; // Required for text fields
  Placeholder?: string;
  Required?: boolean;
  Validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => boolean | string;
  };
}

// Button field with dynamic alert message
export interface ButtonField extends BaseField {
  Type: 'Button';
  ID: string; // Required for buttons
  Title: string;
  AlertMessage?: string; // Supports template strings like "Hello ${person-name}"
  Action?: 'submit' | 'reset' | 'custom';
  Style?: {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
  };
}

// Custom field for extensibility
export interface CustomField extends BaseField {
  Type: string; // Any custom type
  [key: string]: any; // Allow any additional properties
}

// Union type for all field types
export type FormField =
  | HeadingField
  | TextField
  | ButtonField
  | CustomField;

// Main form structure
export interface FormData {
  Title: string;
  Subtitle?: string;
  Fields: FormField[];
}

// Utility type for extracting field values
export type FieldValue<T extends FormField> =
  T extends TextField ? string :
  T extends ButtonField ? never :
  T extends HeadingField ? never :
  any;

// Form values type
export type FormValues = Record<string, FieldValue<FormField>>;

// Template string utilities
export type TemplateString = string;
export type TemplateVariables = Record<string, string | number | boolean>;
