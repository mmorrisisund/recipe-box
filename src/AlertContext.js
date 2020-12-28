import { createContext, useContext, useState } from 'react'

const AlertContext = createContext()

const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState(undefined)
  const reset = () => setMessage(undefined)

  return (
    <AlertContext.Provider value={{ message, setMessage, reset }}>
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}

export { AlertProvider, useAlert }
