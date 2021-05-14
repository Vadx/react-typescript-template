import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
          <Toolbar>
            <Typography variant='h6'>React+TS</Typography>
            <Button component={NavLink} to="/users">Users</Button>
            <Button component={NavLink} to='/todos'>
              Todos
            </Button>
          </Toolbar>
        </AppBar>
    )
}

export default Header