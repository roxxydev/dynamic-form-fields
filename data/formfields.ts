import { memoize } from "lodash";
import { Form } from "@/types/data";
import dataForFormFields from "@/assets/files/data.json";

export const getFormFieldsJson = memoize(() => {
  return JSON.parse(JSON.stringify(dataForFormFields)) as Form;
})
