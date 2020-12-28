import { useState } from 'react'
import DisplayButton from './DisplayButton'
import AddRecipeModal from './AddRecipeModal'

const HeaderControls = ({ onViewChanged }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className='flex'>
      <span className='flex mr-4 rounded-lg bg-lime-600 hover:bg-lime-700 text-lime-100'>
        <DisplayButton
          onViewStateChanged={isGrid => onViewChanged(isGrid ? 'grid' : 'list')}
        />
      </span>
      <span className='flex text-2xl rounded-lg bg-lime-600 hover:bg-lime-700 text-lime-100'>
        <button className='px-3 py-2' onClick={() => setShowModal(true)}>
          add recipe
        </button>
        {showModal && <AddRecipeModal onClose={() => setShowModal(false)} />}
      </span>
    </nav>
  )
}

export default HeaderControls
