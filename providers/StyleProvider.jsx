import { createContext } from "react";

export const StyleContext = createContext({});

export function StyleProvider({ children }) {
  const theme = {
    primary: {
      main: "#180e3b",
      light: "#433466",
      dark: "#000017",
    },
    secondary: {
      main: "#ffa435",
      light: "#ffd566",
      dark: "#c77500",
    },
  };

  return (
    <StyleContext.Provider value={{ theme }}>{children}</StyleContext.Provider>
  );
}
