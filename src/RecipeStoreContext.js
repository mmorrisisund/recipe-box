import { createContext, useContext, useReducer } from 'react'

const RecipeStateContext = createContext()
const RecipeDispatchContext = createContext()

function createId () {
  return Math.floor(Math.random() * 10000)
}

function saveState (state) {
  localStorage.setItem('recipes', JSON.stringify(state))
}

function loadState (defaultState) {
  const state = localStorage.getItem('recipes')
  return state ? JSON.parse(state) : defaultState
}

function recipeReducer (state, { type, payload }) {
  switch (type) {
    case 'add': {
      const newRecipe = { ...payload, id: createId() }
      const newState = { ...state, [newRecipe.id]: newRecipe }
      saveState(newState)
      return newState
    }
    case 'delete': {
      const newState = { ...state }
      delete newState[payload]
      saveState(newState)
      return newState
    }
    case 'edit': {
      const newState = { ...state, [payload.id]: payload }
      saveState(newState)
      return newState
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function RecipesProvider ({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, {}, loadState)

  return (
    <RecipeStateContext.Provider value={state}>
      <RecipeDispatchContext.Provider value={dispatch}>
        {children}
      </RecipeDispatchContext.Provider>
    </RecipeStateContext.Provider>
  )
}

function useRecipes () {
  return [useRecipesState(), useRecipesDipatch()]
}

function useRecipesState () {
  const context = useContext(RecipeStateContext)
  if (context === undefined) {
    throw new Error('useRecipesState must be used within a RecipesProvider')
  }
  return context
}

function useRecipesDipatch () {
  const context = useContext(RecipeDispatchContext)
  if (context === undefined) {
    throw new Error('useRecipesDispatch must be used within a RecipesProvider')
  }
  return context
}

export { RecipesProvider, useRecipes, useRecipesState, useRecipesDipatch }
