import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

const Header: React.FC = () => {
    return (
        <AppBar position='static'>
          <Toolbar>
            Header
          </Toolbar>
        </AppBar>
    )
}

export default Header