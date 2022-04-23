import { createContext, useState } from "react";
import { AuthProvider } from "@/providers/AuthProvider";
import { StyleProvider } from "@/providers/StyleProvider";

export const CommonContext = createContext({});

export function CommonProvider({ children }) {
  // プレビューモーダルの状態管理
  const [isPreview, setPreviewState] = useState(false);

  return (
    <CommonContext.Provider value={{ isPreview, setPreviewState }}>
      <AuthProvider>
        <StyleProvider>{children}</StyleProvider>
      </AuthProvider>
    </CommonContext.Provider>
  );
}
