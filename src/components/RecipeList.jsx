import GridView from './GridView'
import ListView from './ListView'

const RecipeList = ({ gridView, recipes }) => {
  return gridView ? (
    <GridView recipes={Object.values(recipes)} />
  ) : (
    <ListView recipes={Object.values(recipes)} />
  )
}

export default RecipeList
