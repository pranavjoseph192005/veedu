// app/dashboard/UserContext.tsx
'use client';
import { createContext } from 'react';

interface UserProfile {
  id: number;
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  // Add other fields from your `profile` object as needed
}

export const UserContext = createContext<{ profile: UserProfile | null }>({
  profile: null,
});

