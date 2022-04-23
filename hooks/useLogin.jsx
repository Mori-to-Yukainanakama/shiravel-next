import { useRouter } from "next/router";
import { useEffect } from "react";
// カスタムhooks
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function useLogin(props) {
  const router = useRouter();
  const { currentUser, isAuthChecking } = useCurrentUser();

  useEffect(() => {
    // 認証中
    if (isAuthChecking) {
      return <div>Loading...</div>;
    }
    // 認証の結果未ログインだった場合はリダイレクト
    if (!currentUser) {
      router.replace("/user/login");
    }
  }, [currentUser, isAuthChecking]);

  return null;
}
