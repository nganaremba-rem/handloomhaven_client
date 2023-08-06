import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //   TODO: Check for login

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
