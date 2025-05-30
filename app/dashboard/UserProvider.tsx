// app/dashboard/UserProvider.tsx
'use client'

import { UserContext } from './UserContext';

export function UserProvider({ uid, children }: { uid: string, children: React.ReactNode }) {
  return (
    <UserContext.Provider value={{ uid }}>
      {children}
    </UserContext.Provider>
  );
}
