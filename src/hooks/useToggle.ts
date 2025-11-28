import * as React from "react";

export const useToggle = (initial = false) => {
  const [value, setValue] = React.useState(initial);
  const toggle = React.useCallback(() => setValue((v) => !v), []);
  return [value, toggle] as const;
};
