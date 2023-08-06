import { useEffect, useState } from 'react'

export function useFetch(key, axiosFnc) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState()
  // eslint-disable-next-line no-unused-vars
  const [queryKey, setQueryKey] = useState()

  useEffect(() => {
    apiCall()
  }, [])

  async function apiCall() {
    setIsLoading(true)
    try {
      const res = await axiosFnc()
      const dataFetched = await res?.data
      setData(dataFetched)
      setIsError(false)
      setError(null)
    } catch (err) {
      console.error(err)
      setIsError(true)
      setData([])
      // setError(err)
      setError(err?.response?.data)
    }
    setIsLoading(false)
  }

  return { isLoading, isError, data, error }
}

export function useMutate(key, axiosFnc) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState()
  // eslint-disable-next-line no-unused-vars
  const [queryKey, setQueryKey] = useState()
  const [dataToSubmit, mutate] = useState()

  useEffect(() => {
    if (dataToSubmit) {
      apiCall(dataToSubmit)
    }
  }, [dataToSubmit])

  async function apiCall(mutatedData) {
    setIsLoading(true)
    try {
      const res = await axiosFnc(mutatedData)
      const dataFromResponse = await res.data
      setData(dataFromResponse)
      setIsError(false)
      setError(null)
    } catch (err) {
      setData(null)
      setIsError(true)
      setError(err?.response?.data)
      // setError(err)
    }
    setIsLoading(false)
  }

  return { mutate, isLoading, isError, data, error }
}
