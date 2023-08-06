import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

/**
 * @typedef {Object} AuthContextObject
 * @property {boolean} isLoggedIn
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsLoggedIn
 */

/**
 *
 * @returns {AuthContextObject}
 */

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext
