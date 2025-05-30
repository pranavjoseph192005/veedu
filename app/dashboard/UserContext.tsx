// app/dashboard/UserContext.tsx
'use client'
import { createContext, useContext } from 'react'

export const UserContext = createContext<{ uid: string } | null>(null)

export const useUser = () => useContext(UserContext)
