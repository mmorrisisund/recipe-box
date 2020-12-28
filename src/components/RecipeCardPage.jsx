import { useParams, useHistory } from 'react-router-dom'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import RecipeCardControls from './RecipeCardControls'
import IngredientsList from './IngredientsList'
import EditForm from './EditForm'
import { useRecipes } from '../RecipeStoreContext'
import { useAlert } from '../AlertContext'

const RecipeCardPage = () => {
  const [recipe, setRecipe] = useState()
  const [editMode, setEditMode] = useState(false)
  const { setMessage } = useAlert()
  const { id } = useParams()
  const history = useHistory()
  const [recipes, dispatch] = useRecipes()

  useEffect(() => {
    setRecipe(recipes[id])
  }, [id, recipes])

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleDeleteClick = () => {
    dispatch({ type: 'delete', payload: recipe.id })
    setMessage('Recipe Deleted!')
    history.push('/')
  }

  const handleCloseClick = () => {
    if (editMode) {
      setEditMode(false)
    } else {
      history.push('/')
    }
  }

  const handleEditSubmit = newRecipe => {
    setEditMode(false)
    dispatch({ type: 'edit', payload: newRecipe })
    setMessage('Changes Saved!')
  }

  return (
    <main className='p-5'>
      {recipe && (
        <div className='flex items-start py-12 space-x-8 rounded-lg shadow-md px-14'>
          <ImageContainer>
            <RecipeImage imageUrl={recipe.img} altText={recipe.name} />
          </ImageContainer>

          <div className='flex flex-col items-center flex-1'>
            <div className='flex flex-col items-center w-full mt-4'>
              <RecipeCardTitle>
                {editMode ? 'Edit' : ''} {recipe.name}
              </RecipeCardTitle>
              {!editMode ? (
                <>
                  <RecipeCardControls
                    source={recipe.source}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                  />
                  <IngredientsList ingredients={recipe.ingredients} />
                </>
              ) : (
                <EditForm recipe={recipe} onSubmit={handleEditSubmit} />
              )}
            </div>
          </div>

          <div>
            <button type='button' onClick={handleCloseClick}>
              <BsArrowReturnLeft className='text-3xl fill-current text-lime-600' />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

const RecipeCardTitle = ({ children }) => (
  <h2 className='text-4xl text-lime-800'>{children}</h2>
)

const ImageContainer = ({ children }) => <div className='w-1/2'>{children}</div>

const RecipeImage = ({ imageUrl, altText }) => (
  <img className='w-full' src={imageUrl} alt={altText} />
)

export default RecipeCardPage
