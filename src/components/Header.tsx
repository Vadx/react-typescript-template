import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <Typography variant='h5'>React+TypeScript</Typography>
            <Box>
              <Button component={NavLink} to="/">Home</Button>
              <Button component={NavLink} to="/users">Users</Button>
              <Button component={NavLink} to='/todos'>
                Todos
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
    )
}

export default Header