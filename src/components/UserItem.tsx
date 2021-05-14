import React, {FC} from 'react';
import {IUser} from '../types/types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    cursor: 'pointer'
  }
})

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" onClick={() => onClick(user)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">{user.id}</Avatar>
        }
        title={user.name}
        subheader={user.address.city}
      />
    </Card>
  )
}

export default UserItem