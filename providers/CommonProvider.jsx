import { createContext } from "react";

export const CommonContext = createContext({});

export function CommonProvider(props) {
  // .envファイルで定義したAPi側のドメイン
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <CommonContext.Provider value={baseUrl}>
      {props.Children}
    </CommonContext.Provider>
  );
}
