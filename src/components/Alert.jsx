import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Alert = ({ message, reset }) => {
  useEffect(() => {
    if (!message) return

    const id = setTimeout(() => reset(), 1500)
    return () => {
      clearTimeout(id)
    }
  }, [message, reset])

  return createPortal(
    message && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-25'>
        <div className='inline-block w-1/4 p-8 text-lg text-center text-gray-800 rounded bg-gray-50'>
          <span>{message}</span>
        </div>
      </div>
    ),
    document.getElementById('alert-portal')
  )
}
export default Alert
