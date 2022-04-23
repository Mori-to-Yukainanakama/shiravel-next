import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  /**
   * ユーザーのログイン状態管理
   * ---------------------------------
   * undefined の場合は確認中
   * null の場合は確認した結果未ログイン状態
   */
  const [currentUser, setUserCurrent] = useState(undefined);

  return (
    <AuthContext.Provider value={{ currentUser, setUserCurrent }}>
      {props.children}
    </AuthContext.Provider>
  );
}
