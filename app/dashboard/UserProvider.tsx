'use client'

import { UserContext } from './UserContext';

interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  // Match your backend `profile` fields
}

export function UserProvider({
  profile,
  children,
}: {
  profile: UserProfile;
  children: React.ReactNode;
}) {
  return (
    <UserContext.Provider value={{ profile }}>
      {children}
    </UserContext.Provider>
  );
}

