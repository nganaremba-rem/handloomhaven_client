import useAuthContext from './useAuthContext'

export default function useLogout() {
    const {setIsLoggedIn} = useAuthContext()

    function logout() {
        setIsLoggedIn(false);
    }

    return logout
}