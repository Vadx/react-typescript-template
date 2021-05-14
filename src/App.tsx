import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Header from './components/Header'
import Users from './pages/Users'
import Todos from './pages/Todos'
import UserInfo from './pages/UserInfo'
import { Box } from '@material-ui/core'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Box mt={5}>
          <Route path={'/'} exact>
            <HomePage />
          </Route>
          <Route path={'/users'} exact>
            <Users />
          </Route>
          <Route path={'/todos'} exact>
            <Todos />
          </Route>
          <Route path={'/users/:id'}>
            <UserInfo />
          </Route>    
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App
