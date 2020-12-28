const Header = ({ left, right }) => {
  return (
    <header className='flex items-center justify-between h-32 p-8 shadow-md bg-lime-500'>
      {left}
      {right}
    </header>
  )
}

export default Header
