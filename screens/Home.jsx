import React from 'react'
import useAuthContext from '../hooks/useAuthContext'
import AuthStackNavigation from './AuthStackNavigation'
import ShopTabNavigation from './ShopTabNavigation'

/**
 * @returns
 */

export default function Home() {
  const { isLoggedIn } = useAuthContext()

  if (isLoggedIn) return <ShopTabNavigation />

  return <AuthStackNavigation />
}
