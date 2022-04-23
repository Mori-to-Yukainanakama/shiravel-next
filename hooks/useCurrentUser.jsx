import { useContext } from 'react';
// プロバイダー
import { AuthContext } from '@/providers/AuthProvider';

export function useCurrentUser() {
  const { currentUser } = useContext(AuthContext);
  const isAuthChecking = currentUser === undefined;

  return { currentUser, isAuthChecking };
}
