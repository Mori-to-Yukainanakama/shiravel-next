import { createContext } from "react";
import { StyleProvider } from "./StyleProvider";

export const CommonContext = createContext({});

export function CommonProvider({ children }) {
  // .envファイルで定義したAPi側のドメイン
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <CommonContext.Provider value={baseUrl}>
      <StyleProvider>{children}</StyleProvider>
    </CommonContext.Provider>
  );
}
