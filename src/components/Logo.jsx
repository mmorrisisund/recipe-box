import { Link } from 'react-router-dom'
import { FaUtensils, FaUtensilSpoon } from 'react-icons/fa'

const Logo = () => {
  return (
    <Link
      className='flex items-center space-x-2 text-4xl font-light tracking-widest text-lime-100'
      to='/'
    >
      <span>
        <FaUtensils />
      </span>
      <h2>recipe box</h2>
      <span>
        <FaUtensilSpoon />
      </span>
    </Link>
  )
}

export default Logo
