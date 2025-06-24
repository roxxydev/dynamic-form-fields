import { useState } from "react";

export const useSetTemplateVariables = <TemplateVariables>(
  initialState: TemplateVariables = {} as TemplateVariables
) => {
  const [stateTemplateVariables, regularSetState] = useState(initialState);

  const setTemplateVariables = (newState: TemplateVariables) => {
    regularSetState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return [stateTemplateVariables, setTemplateVariables] as const;
};
