import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import RecipeCardPage from './components/RecipeCardPage'
import Header from './components/Header'
import Logo from './components/Logo'
import HeaderControls from './components/HeaderControls'
import Alert from './components/Alert'
import { useAlert } from './AlertContext'

function App () {
  const [viewMode, setViewMode] = useState()
  const { message, reset } = useAlert()

  return (
    <div>
      <Header
        left={<Logo />}
        right={<HeaderControls onViewChanged={setViewMode} />}
      />

      <Switch>
        <Route exact path='/'>
          <HomePage viewMode={viewMode} />
        </Route>
        <Route path='/recipe/:id'>
          <RecipeCardPage />
        </Route>
      </Switch>
      <Alert message={message} reset={reset} />
    </div>
  )
}

export default App
