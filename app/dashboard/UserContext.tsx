// app/dashboard/UserContext.tsx
import { createContext } from 'react';

interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  // Add other fields from your `profile` object as needed
}

export const UserContext = createContext<{ profile: UserProfile | null }>({
  profile: null,
});

