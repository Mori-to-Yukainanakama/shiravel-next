import { createContext } from "react";
import { AuthProvider } from "@/providers/AuthProvider";
import { StyleProvider } from "@/providers/StyleProvider";

export const CommonContext = createContext({});

export function CommonProvider({ children }) {
  return (
    <CommonContext.Provider value={""}>
      <AuthProvider>
        <StyleProvider>{children}</StyleProvider>
      </AuthProvider>
    </CommonContext.Provider>
  );
}
