import React from 'react'
import './App.css'
import IndexPage from './components/pages/IndexPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ArchivePage from './components/pages/ArchivePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/archive/:nickname">
          <ArchivePage />
        </Route>

        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
