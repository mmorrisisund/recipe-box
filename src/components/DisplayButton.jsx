import { useState, useEffect } from 'react'
import { FaListUl } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'

const getSavedView = () => localStorage.getItem('viewMode') === 'grid'

const DisplayButton = ({ onViewStateChanged }) => {
  const [gridView, setGridView] = useState(getSavedView)

  useEffect(() => {
    localStorage.setItem('viewMode', gridView ? 'grid' : 'list')
    onViewStateChanged(gridView)
  }, [gridView, onViewStateChanged])

  return (
    <button className='px-3 py-2 ' onClick={() => setGridView(!gridView)}>
      {gridView ? (
        <FaListUl className='w-8 h-8' />
      ) : (
        <CgMenuGridR className='w-8 h-8' />
      )}
    </button>
  )
}

export default DisplayButton
